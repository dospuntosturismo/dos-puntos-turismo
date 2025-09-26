'use client'; // si estás en Next 13+ y usas App Router
import React, { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Modal from './Modal'
import { useIsMobile } from '@hooks/useIsDesktop'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { BsList } from 'react-icons/bs'
import Link from 'next/link'
import { Fredoka } from 'next/font/google'
const fredoka = Fredoka({ subsets: ['latin'] });

const inter = Inter({ subsets: ['latin'] });

const Header = () => {
	const [openModal, setOpenModal] = useState(false)
	const { isMobile } = useIsMobile()
	const [showMobileMenu, setShowMobileMenu] = useState(false)
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const SIZE = '24px'
	const COLOR = 'green'
	return (
		<>
		<div className='flex flex-row justify-between items-center bg-dos-puntos-brown-light bg-opacity-65 px-2 w-11/12 rounded-full mt-10 shadow-lg'>
			<div>
					<Image src='/logo_inicio.png' alt='Logo Nav Bar' width={100} height={100} />
				</div>
			{isMobile ? (
		<button
								onClick={() => {
									return setShowMobileMenu(!showMobileMenu)
								}} className='p-2 bg-transparent rounded-full burger-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dos-puntos-pink focus:shadow-outline'
							>
								<BsList size={SIZE} />
							</button>
		
	) : (
<div>
	<div className={`flex flex-row items-center text-lg text-dos-puntos-gray justify-center space-x-6 mr-10 ${inter.className}`}>
		<Link href='/home' passHref>Inicio</Link>
		<Link href='/nosotros' passHref>Nosotros</Link>
		<li className='relative cursor-pointer list-none'>
			<button type='button' onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-1">
				Paquetes
			</button>
			{isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-52 flex flex-col bg-dos-puntos-brown-light text-black rounded-md shadow-lg">
              <Link href='/paquetes/paquetesNeuquen' className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">Paquetes Neuquén</Link>
              <Link href='/paquetes/paquetesNorte' className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">Paquetes Norte Arg</Link>
              <Link href='/paquetes/paquetesSur' className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">Paquetes Sur Arg</Link>
							<Link href='/paquetes/paquetesInternacionales' className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">Paquetes Internacionales</Link>
            </ul>
          )}
		</li>
		<Link href='/contacto' className='border border-gray-900 rounded-full px-3 py-1 cursor-pointer'>Contacto</Link>
	</div>
</div>
	)}
		</div>
		{showMobileMenu && (
				<div className='menu-mobile bg-dos-puntos-brown-light bg-opacity-60'>
					<div className='flex flex-col items-center text-white font-roboto-bold'>
						<p className='p-2'>Inicio</p>
						<p className='p-2'>Paquetes</p>
						<p className='p-2'>Nosotros</p>
						<div onClick={() => setOpenModal(true)} className='p-2'>Contacto</div>
						{/* <Link href='/' className='p-2'>
							Inicio
						</Link>
						<Link href='/nosotros' className='p-2'>
							Nosotros
						</Link>
						<Link href='/paquetes' className='p-2'>
							Paquetes
						</Link>
						<Link href='/contacto' className='p-2' >
							Contacto
						</Link> */}
					</div>
					<Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
		<div className="flex flex-row mt-2 bg-dos-puntos-pink text-white">
									<div className={`flex flex-col items-center justify-center ${fredoka.className}`}>
									<div className='relative flex px-2 py-1 text-sm text-white bg-transparent border border-transparent rounded-md focus:outline-none'>
										<AiOutlineWhatsApp className='mr-2' size={SIZE} color={COLOR} />
										<a className='text-sm' target='_blank' rel="noreferrer" href='https://wa.me/5492994192754'>+54 9 299 419 2754</a>
									</div>
										<a href='mailto:info@dospuntosturismo.com.ar' className="text-sm text-center text-white">
										info@dospuntosturismo.com.ar
										</a>
										<a className='text-sm' href='https://dospuntosturismo.com.ar'>www.dospuntosturismo.com.ar</a>
									</div>
									<div>
										<img src='/logotipo_blanco.png' alt='Logo' />
									</div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-dos-puntos-gray px-4 py-2 text-sm font-medium text-white"
                    onClick={() => setOpenModal(false)}
                  >
                    Cerrar
                  </button>
                </div>
	</Modal>
				</div>
			)}
		<style jsx>
				{` 
				.menu-mobile {
					position: fixed;
					z-index: 3;
					top: 0;
					left: 0;
					width: 100vw;
					bottom: 0;
					display:flex;
					align-items: center;
					justify-content: center;
					transition: .3s;
				}
				.burger-button {
					z-index: 4;
				}
				`}
			</style>
		</>
	)
}

export default Header