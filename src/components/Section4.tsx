// Section4.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import Footer from "./Footer"
import Title from "./Title"
import localFont from 'next/font/local'
// import { fredoka, alphapipeFont, Title } desde donde los tengas

const alphapipeFont = localFont({
	src: '../../public/fonts/BC Alphapipe RB Regular.ttf',
})

export default function Section4() {
  const chips = [
    { src: "/Elementos gráficos-05.png", w: 25, h: 10, alt: "Olas" },
    { src: "/Elementos gráficos-03.png", w: 25, h: 11, alt: "Ubicación" },
    { src: "/Elementos gráficos-04.png", w: 35, h: 15, alt: "Montañas" },
    { src: "/Elementos gráficos-02.png", w: 20, h: 10, alt: "Valija" },
    { src: "/Elementos gráficos-01.png", w: 20, h: 10, alt: "Felicidad" },
  ]

  const cards = [
    {
      href: "/paquetes/paquetesNeuquen",
      bgClass: "bg-hora-de-viajar-neuquen",
      waves: "/Olitas_celeste.png",
      wavesAlt: "Hora de Viajar a Neuquén",
      title: <>¡Hora de <br/> viajar a <br/> <span className="font-semibold">Neuquén!</span></>,
    },
    {
      href: "/paquetes/paquetesInternacionales",
      bgClass: "bg-hora-de-viajar-mundo",
      waves: "/Olitas_azul.png",
      wavesAlt: "Hora de Viajar al mundo",
      title: <>¡Hora de <br/> viajar al <br/> <span className="font-semibold">mundo!</span></>,
    },
    {
      href: "/paquetes/paquetesNorte",
      bgClass: "bg-hora-de-viajar-norte",
      waves: "/Olitas.png",
      wavesAlt: "Hora de Viajar al norte",
      title: <><span className="font-thin">¡Hora de <br/></span> viajar al <br/> <span className="font-semibold">norte!</span></>,
    },
    {
      href: "/paquetes/paquetesSur",
      bgClass: "bg-hora-de-viajar-sur",
      waves: "/Olitas_rosa.png",
      wavesAlt: "Hora de Viajar al sur",
      title: <>¡Hora de <br/> viajar al <br/> <span className="font-semibold">sur!</span></>,
    },
  ]

  return (
    <section
      id="section4"
      className={[
        "w-full",
        "min-h-[100svh]", // altura estable en mobile
        "bg-white",
        "flex flex-col",
      ].join(" ")}
    >
      {/* Header de sección */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 pt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className={`flex flex-col text-lg sm:text-xl ${alphapipeFont.className}`}>
            <p className="text-dos-puntos-gray/80">Nuestras opciones</p>
            <div className="mt-1">
              <Title>PAQUETES</Title>
            </div>
          </div>

          {/* Tira de íconos decorativos: envueltos y con gaps */}
          <div className="flex flex-row flex-wrap items-center justify-start md:justify-end gap-x-4 gap-y-2 min-h-10">
            {chips.map((c, i) => (
              <Image
                key={i}
                src={c.src}
                alt=""
                aria-hidden
                width={c.w}
                height={c.h}
                className="h-6 sm:h-7 md:h-8 w-auto"
                sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Grid de cards */}
      <div className="mx-auto w-full mt-10 max-w-6xl px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20">
        <div
          className={[
            "grid gap-6 sm:gap-8",
            "grid-cols-1 sm:grid-cols-2",
            // cuatro cards: en desktop se ven 2x2 limpias; si preferís 4 en una fila, cambia a lg:grid-cols-4
          ].join(" ")}
        >
          {cards.map((card, i) => (
            <Link
              key={i}
              href={card.href}
              className={[
                "group relative rounded-2xl overflow-hidden shadow-md",
                "bg-no-repeat bg-cover cursor-pointer",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-dos-puntos-gray",
                // relación similar a 336x390 ≈ 0.86 → usemos 10/12
                "w-[336px] h-[390px] aspect-[4/3]",
                card.bgClass,
              ].join(" ")}
            >
              {/* Logo arriba */}
              <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2">
                <Image
                  src="/Variantes logotipo - RGB (15).png"
                  alt="Dos Puntos Turismo"
                  width={90}
                  height={90}
                  className="w-16 sm:w-20 md:w-24 h-auto"
                  sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                />
              </div>

              {/* Olas abajo: responsivas y contenidas */}
              <div className="absolute inset-x-0 bottom-0">
                <Image
                  src={card.waves}
                  alt={card.wavesAlt}
                  width={336}
                  height={250}
                  className="w-full h-auto"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  priority={false}
                />
              </div>

              {/* Título sobre las olas */}
              <div className={`absolute bottom-3 sm:bottom-4 left-4 sm:left-5 text-white text-lg sm:text-xl ${alphapipeFont.className}`}>
                {card.title}
              </div>

              {/* Micro-interacción */}
              <span className="absolute inset-0 ring-0 ring-transparent transition group-hover:scale-[1.01] group-hover:ring-1 group-hover:ring-white/30" aria-hidden />
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  )
}
