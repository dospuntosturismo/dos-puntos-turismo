'use client'
import Header from '@components/Header'
import Title from '@components/Title'
import Image from 'next/image'
import React from 'react'
import { Fredoka } from 'next/font/google'
import localFont from 'next/font/local'
import Footer from '@components/Footer'

const fredoka = Fredoka({ subsets: ['latin'] })
const alphapipeFont = localFont({ src: '../../public/fonts/BC Alphapipe RB Regular.ttf' })

export default function Nosotros() {
  return (
    <main className="w-full min-h-[100svh] bg-white relative">
      <Header />

      {/* Decorativos de fondo (se muestran en md+) */}
      <Image
        src="/Elementos gráficos-22.png"
        alt=""
        aria-hidden
        width={1100}
        height={620}
        className="hidden md:block pointer-events-none select-none absolute bottom-12 left-1/2 -translate-x-1/2 opacity-70"
        sizes="(max-width: 1280px) 80vw, 1100px"
        priority
      />
      <Image
        src="/Elementos gráficos-24.png"
        alt=""
        aria-hidden
        width={1100}
        height={620}
        className="hidden md:block pointer-events-none select-none absolute bottom-32 left-1/2 -translate-x-1/2 opacity-70"
        sizes="(max-width: 1280px) 80vw, 1100px"
        priority
      />

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 pt-28">
        {/* Encabezados */}
        <div className="text-center md:text-left">
          <h1 className={`${alphapipeFont.className} text-dos-puntos-gray text-base sm:text-lg`}>Nosotros</h1>
          <div className="mt-1">
            <Title>NUESTRA HISTORIA</Title>
          </div>
        </div>

        {/* Texto principal */}
        <div
          className={[
            'mt-8 sm:mt-10 md:mt-12',
            'mx-auto md:mx-0',
            'max-w-3xl md:max-w-4xl',
            `flex flex-col gap-6 text-center md:text-left font-semibold text-lg sm:text-xl ${fredoka.className}`,
          ].join(' ')}
        >
          <p>
            Somos una marca de El Médano Turismo. Desde 2023 ofrecemos productos y servicios en la ciudad de Neuquén:
            excursiones locales, paquetes regionales, nacionales e internacionales.
          </p>
          <p>
            Vimos la necesidad de representar dos puntos en la Patagonia Argentina, diferenciándonos con una marca
            renovada que represente más a la Provincia de Neuquén.
          </p>
          <p>
            Buscamos brindar un servicio profesional, seguridad y la mejor atención para nuestr@s pasajer@s.
          </p>
          <p>¡Renovamos la marca pero mantenemos nuestra esencia!</p>
        </div>

        {/* Frase destacada */}
        <blockquote
          className={`${alphapipeFont.className} text-dos-puntos-blue text-2xl sm:text-3xl md:text-5xl text-center md:text-left mt-12 sm:mt-16 md:mt-20 leading-tight`}
        >
          “UNIMOS TUS GANAS DE VIAJAR CON EL DESTINO PERFECTO”
        </blockquote>

        {/* Tira de íconos decorativos (wrap en mobile) */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 sm:gap-12 my-10">
          <Image src="/Elementos gráficos-05.png" alt="Olas" width={150} height={200} className="h-10 sm:h-12 w-auto" />
          <Image src="/Elementos gráficos-19.png" alt="Excursiones" width={200} height={220} className="h-14 sm:h-16 w-auto" />
          <Image src="/Elementos gráficos-07.png" alt="Icono" width={120} height={220} className="h-12 sm:h-14 w-auto" />
          <Image src="/Elementos gráficos-11.png" alt="Icono" width={120} height={220} className="h-12 sm:h-14 w-auto" />
        </div>

        {/* Foto + logo superpuesto (responsivo) */}
        <figure className="relative my-12 sm:my-16 md:my-20">
          <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden">
            <Image
              src="/IMG_0154.jpg"
              alt="Dos Puntos Turismo"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1100px"
              priority={false}
            />
          </div>

          {/* Logo superpuesto */}
          <div className="absolute top-3 sm:top-5 left-3 sm:left-6">
            <Image
              src="/logo.png"
              alt="Logo Dos Puntos Turismo"
              width={160}
              height={160}
              className="w-20 sm:w-28 md:w-32 h-auto drop-shadow"
              sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 128px"
            />
          </div>
        </figure>
      </section>
      <Footer />
    </main>
  )
}
