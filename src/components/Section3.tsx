// Section3.tsx
"use client"

import Image from "next/image"
import { IoMdAirplane } from "react-icons/io"
import { Fredoka } from 'next/font/google'
import localFont from 'next/font/local'
// import { fredoka, alphapipeFont } como en tus otras secciones

const fredoka = Fredoka({ subsets: ['latin'] })
const alphapipeFont = localFont({
	src: '../../public/fonts/BC Alphapipe RB Regular.ttf',
})

export default function Section3() {
  return (
    <section
      id="section3"
      className={[
        "w-full",
        "bg-fondo-tres bg-no-repeat",
        // Fondo: fill cómodo en mobile, y más “zoom” en desktop
        "bg-cover sm:bg-cover md:bg-[length:2400px_auto] lg:bg-[length:3000px_auto] xl:bg-[length:3400px_auto]",
        "bg-center md:bg-[position:center_20%]",
      ].join(" ")}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* Encabezados */}
        <div className="flex flex-col gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12">
          <h3
            className={`${alphapipeFont.className} text-base sm:text-lg md:text-xl text-dos-puntos-gray text-center md:text-left`}
          >
            Viajá con nosotros
          </h3>
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl tracking-widest text-dos-puntos-gray text-center md:text-left ${fredoka.className}`}
          >
            NUESTROS SERVICIOS
          </h1>
        </div>

        {/* Grid de servicios */}
        <ul
          className={[
            "grid gap-4 sm:gap-5 md:gap-6",
            // 1 col en móvil, 2 en sm, 3 en lg+
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
            "mb-10 sm:mb-14 md:mb-20",
          ].join(" ")}
        >
          {/* Item 1 */}
          <li>
            <a href="https://experiencias.dospuntosturismo.com.ar" target="_blank">
              <article  className="group rounded-2xl overflow-hidden shadow-md bg-dos-puntos-gray text-dos-puntos-blue h-full">
                <div className="flex flex-col items-center justify-center p-4 sm:p-5 h-full">
                  <div className="aspect-square w-16 sm:w-18 md:w-20 relative mb-3 sm:mb-4">
                    <Image
                      src="/Elementos gráficos-17.png"
                      alt="Paquetes"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                      priority={false}
                    />
                  </div>
                  <p className={`${fredoka.className} text-center font-semibold text-sm sm:text-base`}>
                    Paquetes nacionales e internacionales
                  </p>
                </div>
              </article>
            </a>
          </li>

          {/* Item 2 */}
          <li>
            <a href="https://experiencias.dospuntosturismo.com.ar" target="_blank">
              <article  className="group rounded-2xl overflow-hidden shadow-md bg-dos-puntos-blue text-dos-puntos-gray h-full">
                <div className="flex flex-col items-center justify-center p-4 sm:p-5 h-full">
                  <IoMdAirplane className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" aria-hidden />
                  <p className={`${fredoka.className} font-semibold mt-3 sm:mt-4 text-sm sm:text-base`}>
                    Aéreos
                  </p>
                </div>
              </article>
            </a>
          </li>

          {/* Item 3 */}
          <li>
            <a href="https://experiencias.dospuntosturismo.com.ar" target="_blank">
            <article className="group rounded-2xl overflow-hidden shadow-md bg-dos-puntos-gray text-dos-puntos-blue h-full">
              <div className="flex flex-col items-center justify-center p-4 sm:p-5 h-full">
                <div className="aspect-square w-16 sm:w-18 md:w-20 relative mb-3 sm:mb-4">
                  <Image
                    src="/Elementos gráficos-20.png"
                    alt="Cruceros"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                  />
                </div>
                <p className={`${fredoka.className} font-semibold text-sm sm:text-base`}>Cruceros</p>
              </div>
            </article>
            </a>
          </li>

          {/* Item 4 */}
          <li>
            <a href="https://experiencias.dospuntosturismo.com.ar" target="_blank">
              <article className="group rounded-2xl overflow-hidden shadow-md bg-dos-puntos-blue text-dos-puntos-gray h-full">
                <div className="flex flex-col items-center justify-center p-4 sm:p-5 h-full">
                  <div className="aspect-square w-16 sm:w-18 md:w-20 relative mb-3 sm:mb-4">
                    <Image
                      src="/Elementos gráficos-01.png"
                      alt="Seguros"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                    />
                  </div>
                  <p className={`${fredoka.className} font-semibold text-sm sm:text-base`}>Seguros</p>
                </div>
              </article>
            </a>
          </li>

          {/* Item 5 */}
          <li>
            <a href="https://experiencias.dospuntosturismo.com.ar" target="_blank">
            <article className="group rounded-2xl overflow-hidden shadow-md bg-dos-puntos-gray text-dos-puntos-blue h-full">
              <div className="flex flex-col items-center justify-center p-4 sm:p-5 h-full">
                <div className="aspect-square w-16 sm:w-18 md:w-20 relative mb-3 sm:mb-4">
                  <Image
                    src="/Elementos gráficos-19.png"
                    alt="Excursiones"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                  />
                </div>
                <p className={`${fredoka.className} font-semibold text-sm sm:text-base`}>Excursiones</p>
              </div>
            </article>
            </a>
          </li>

          {/* Item 6 */}
          <li>
            <a href="https://experiencias.dospuntosturismo.com.ar" target="_blank">
              <article className="group rounded-2xl overflow-hidden shadow-md bg-dos-puntos-blue text-dos-puntos-gray h-full">
                <div className="flex flex-col items-center justify-center p-4 sm:p-5 h-full">
                  <div className="aspect-square w-16 sm:w-18 md:w-20 relative mb-3 sm:mb-4">
                    <Image
                      src="/Elementos gráficos-03.png"
                      alt="Alojamientos"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                    />
                  </div>
                  <p className={`${fredoka.className} font-semibold text-sm sm:text-base`}>Alojamientos</p>
                </div>
              </article>

            </a>
          </li>
        </ul>

        {/* Safe-area padding opcional si tenés un sticky/footer */}
        <div className="pb-[env(safe-area-inset-bottom)]" />
      </div>
    </section>
  )
}
