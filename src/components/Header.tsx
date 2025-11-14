'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { useIsMobile } from '@hooks/useIsDesktop'
// import Modal from './Modal'
// import { AiOutlineWhatsApp } from 'react-icons/ai'
import { BsList, BsChevronDown } from 'react-icons/bs'

// const fredoka = Fredoka({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

const Header = () => {
  // const [openModal, setOpenModal] = useState(false)
  const { isMobile } = useIsMobile()
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false) // desktop
  const [openPackagesMobile, setOpenPackagesMobile] = useState(false) // mobile dropdown
  const menuRef = useRef<HTMLDivElement>(null)

  const SIZE = 24
  // const COLOR = 'green'

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (showMobileMenu) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = prev }
    }
  }, [showMobileMenu])

  // Cerrar con ESC y clic fuera (para mobile overlay)
  useEffect(() => {
    if (!showMobileMenu) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowMobileMenu(false)
    }
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMobileMenu(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [showMobileMenu])

  // Helper para cerrar menú al navegar
  const closeMobileMenu = () => {
    setShowMobileMenu(false)
    setOpenPackagesMobile(false)
  }

  return (
    <>
      {/* Barra */}
      <div className="flex flex-row justify-between items-center bg-dos-puntos-brown-light/65 px-2 w-full rounded-full mt-10 shadow-lg md:ml-0">
        <div className="py-1 pl-2">
          <Image src="/logo_inicio.png" alt="Logo Nav Bar" width={100} height={100} />
        </div>

        {isMobile ? (
          <button
            onClick={() => setShowMobileMenu((v) => !v)}
            className="p-2 bg-transparent rounded-full burger-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dos-puntos-pink"
            aria-label="Abrir menú"
            aria-expanded={showMobileMenu}
            aria-controls="mobile-menu-panel"
          >
            <BsList size={SIZE} />
          </button>
        ) : (
          <div>
            <div className={`flex flex-row items-center text-lg text-dos-puntos-gray justify-center space-x-6 mr-10 ${inter.className}`}>
              <Link href="/" passHref>Inicio</Link>
              <Link href="/nosotros" passHref>Nosotros</Link>

              {/* Dropdown desktop existente */}
              <li className="relative cursor-pointer list-none">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen((v) => !v)}
                  className="flex items-center gap-1"
                  aria-expanded={isDropdownOpen}
                  aria-controls="desktop-paquetes"
                >
                  Paquetes
                  <BsChevronDown className={`transition ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <ul
                    id="desktop-paquetes"
                    className="absolute left-0 mt-2 w-52 flex flex-col bg-dos-puntos-brown-light text-black rounded-md shadow-lg overflow-hidden"
                    role="menu"
                  >
                    <Link href="/paquetes/paquetesNeuquen" className="px-4 py-2 hover:bg-gray-100 text-sm" role="menuitem">Paquetes Neuquén</Link>
                    <Link href="/paquetes/paquetesNorte" className="px-4 py-2 hover:bg-gray-100 text-sm" role="menuitem">Paquetes Norte Arg</Link>
                    <Link href="/paquetes/paquetesSur" className="px-4 py-2 hover:bg-gray-100 text-sm" role="menuitem">Paquetes Sur Arg</Link>
                    <Link href="/paquetes/paquetesInternacionales" className="px-4 py-2 hover:bg-gray-100 text-sm" role="menuitem">Paquetes Internacionales</Link>
                  </ul>
                )}
              </li>
              <a href='https://experiencias.dospuntosturismo.com.ar' target='_blank' rel='noreferrer' className="px-4 py-2">
                Experiencias
              </a>
              <Link href="/contacto" className="border border-gray-900 rounded-full px-3 py-1 cursor-pointer">
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Menú MÓVIL overlay */}
      {showMobileMenu && (
        <div
          className="menu-mobile fixed inset-0 z-30 bg-dos-puntos-brown-light/60 backdrop-blur-sm flex items-center justify-center"
          id="mobile-menu-panel"
        >
          <div
            ref={menuRef}
            className="mx-auto w-full max-w-sm rounded-3xl bg-dos-puntos-brown-light text-white px-6 py-6 shadow-2xl"
            role="dialog"
            aria-modal="true"
          >
            <nav className="flex flex-col items-stretch text-base font-roboto-bold" role="menu">
              <Link href="/" className="p-3 rounded-xl hover:bg-white/10" role="menuitem" onClick={closeMobileMenu}>
                Inicio
              </Link>
              <Link href="/nosotros" className="p-3 rounded-xl hover:bg-white/10" role="menuitem" onClick={closeMobileMenu}>
                Nosotros
              </Link>

              {/* Dropdown MOBILE de Paquetes */}
              <div className="mt-1">
                <button
                  type="button"
                  onClick={() => setOpenPackagesMobile((v) => !v)}
                  className="w-full p-3 rounded-xl hover:bg-white/10 flex items-center justify-between"
                  aria-expanded={openPackagesMobile}
                  aria-controls="mobile-paquetes"
                >
                  <span>Paquetes</span>
                  <BsChevronDown className={`transition ${openPackagesMobile ? 'rotate-180' : ''}`} />
                </button>

                {/* Submenú */}
                <div
                  id="mobile-paquetes"
                  className={`${openPackagesMobile ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} grid transition-all duration-300`}
                >
                  <div className="overflow-hidden">
                    <ul className="flex flex-col pl-3">
                      <Link href="/paquetes/paquetesNeuquen" className="p-2 rounded-lg hover:bg-white/10 text-sm" role="menuitem" onClick={closeMobileMenu}>
                        Paquetes Neuquén
                      </Link>
                      <Link href="/paquetes/paquetesNorte" className="p-2 rounded-lg hover:bg-white/10 text-sm" role="menuitem" onClick={closeMobileMenu}>
                        Paquetes Norte Arg
                      </Link>
                      <Link href="/paquetes/paquetesSur" className="p-2 rounded-lg hover:bg-white/10 text-sm" role="menuitem" onClick={closeMobileMenu}>
                        Paquetes Sur Arg
                      </Link>
                      <Link href="/paquetes/paquetesInternacionales" className="p-2 rounded-lg hover:bg-white/10 text-sm" role="menuitem" onClick={closeMobileMenu}>
                        Paquetes Internacionales
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
              <a href='https://experiencias.dospuntosturismo.com.ar' target='_blank' rel='noreferrer' className="p-2 rounded-lg hover:bg-white/10 text-sm">
                Experiencias
              </a>
              <Link href="/contacto" className="p-3 rounded-xl hover:bg-white/10" role="menuitem" onClick={closeMobileMenu}>
                Contacto
              </Link>
            </nav>

            {/* Bloque de contacto (tu modal original lo dejo, pero puedes usar este bloque inline) */}
            {/* <div className={`mt-5 flex flex-row items-center justify-between bg-dos-puntos-pink text-white rounded-2xl p-3 ${fredoka.className}`}>
              <div className="flex flex-col gap-1">
                <div className="flex items-center">
                  <AiOutlineWhatsApp className="mr-2" size={SIZE} color={COLOR} />
                  <a className="text-sm" target="_blank" rel="noreferrer" href="https://wa.me/5492994192754">
                    +54 9 299 419 2754
                  </a>
                </div>
                <a href="mailto:info@dospuntosturismo.com.ar" className="text-sm">info@dospuntosturismo.com.ar</a>
                <a className="text-sm" target="_blank" rel="noreferrer" href="https://dospuntosturismo.com.ar">www.dospuntosturismo.com.ar</a>
              </div>
              <div className="shrink-0">
                <img src="/logotipo_blanco.png" alt="Logo" className="w-20 h-auto" />
              </div>
            </div> */}

            {/* Botón cerrar (por si querés mantenerlo) */}
            {/* <div className="mt-4 text-right">
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-dos-puntos-gray px-4 py-2 text-sm font-medium text-white"
                onClick={() => setShowMobileMenu(false)}
              >
                Cerrar
              </button>
            </div> */}
          </div>
        </div>
      )}

      <style jsx>{`
        .burger-button { z-index: 40; }
      `}</style>
    </>
  )
}

export default Header
