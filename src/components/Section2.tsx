// Section2.tsx
"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import Carrousel from '@components/Carrousel'
import CarrouselMovile from '@components/CarrouselMovile'
import { Fredoka } from 'next/font/google'
import localFont from 'next/font/local'
import Title from '@components/Title'
import { useIsMobile } from '@hooks/useIsDesktop'

// import { fredoka } from "..."; import alphapipeFont etc.
// import Carrousel from "./Carrousel"

const fredoka = Fredoka({ subsets: ['latin'] })
const alphapipeFont = localFont({
	src: '../../public/fonts/BC Alphapipe RB Regular.ttf',
})


export default function Section2() {
  const router = useRouter()
	const { isMobile } = useIsMobile()

  return (
    <section
      id="section2"
      className={[
        "w-full",
        "min-h-[100svh]",        // estable en móviles
        "bg-dos-puntos-brown-light",
        "flex flex-col",
      ].join(" ")}
    >
      {/* Contenedor central */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 flex flex-col gap-6 sm:gap-8 md:gap-10">

        {/* Encabezado superior */}
        <div className="w-full">
          <h1 className={`text-lg sm:text-xl md:text-2xl ${alphapipeFont.className}`}>
            Calendario
          </h1>
        </div>

        {/* Título + tira de íconos (se acomoda y no rompe) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
          <Title>SALIDAS 2025</Title>

          <div className="flex flex-row flex-wrap items-center justify-start sm:justify-end gap-x-4 gap-y-3 min-h-[3rem]">
            {/* Marcas decorativas: alt vacío + aria-hidden */}
            <Image
              src="/Elementos gráficos-05.png"
              alt=""
              aria-hidden
              width={60}
              height={30}
              className="h-6 sm:h-8 md:h-10 w-auto"
              sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 120px"
            />
            <Image
              src="/Elementos gráficos-03.png"
              alt=""
              aria-hidden
              width={30}
              height={30}
              className="h-6 sm:h-7 md:h-8 w-auto"
              sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
            />
            <Image
              src="/Elementos gráficos-04.png"
              alt=""
              aria-hidden
              width={70}
              height={50}
              className="h-8 sm:h-10 md:h-12 w-auto"
              sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
            />
            <Image
              src="/Elementos gráficos-02.png"
              alt=""
              aria-hidden
              width={30}
              height={30}
              className="h-6 sm:h-7 md:h-8 w-auto"
              sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
            />
            <Image
              src="/Elementos gráficos-01.png"
              alt=""
              aria-hidden
              width={30}
              height={30}
              className="h-6 sm:h-7 md:h-8 w-auto"
              sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
            />
          </div>
        </div>

        {/* Carrusel responsivo: ancho completo con límite cómodo */}
        <div className="relative w-full">
          <div className="mx-auto w-full max-w-5xl">
            {isMobile ? <CarrouselMovile /> : <Carrousel />}
          </div>
        </div>

        {/* CTA */}
        <div>
          <button
            type="button"
            onClick={() => router.push("/contacto")}
            className={[
              "inline-flex items-center justify-center",
              "text-base sm:text-lg md:text-xl",
              "border-2 border-dos-puntos-gray text-dos-puntos-gray",
              "px-4 sm:px-6 md:px-7",
              "py-2 sm:py-2.5",
              "rounded-xl",
              "transition",
              "hover:bg-dos-puntos-gray/10 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-dos-puntos-gray",
              // tipografía
              // si ya tenés fredoka importada, mantené tu clase:
              `${fredoka.className}`,
            ].join(" ")}
          >
            Contacto
          </button>
        </div>
      </div>

      {/* Safe area para que nada quede tapado por barras en móviles */}
      <div className="pb-[env(safe-area-inset-bottom)]" />
    </section>
  )
}
