// Footer.tsx
"use client"

import React from "react"
import Image from "next/image"
import { Fredoka } from "next/font/google"

const fredoka = Fredoka({ subsets: ["latin"] })

export default function Footer() {
  return (
    <footer className="w-full bg-dos-puntos-pink">
      <div
        className={[
          "mx-auto w-full max-w-6xl",
          "px-4 sm:px-6 md:px-8",
          "py-8 sm:py-10",
          "flex flex-col lg:flex-row",
          "items-center justify-between gap-8",
        ].join(" ")}
      >
        {/* Logos gubernamentales */}
        <div className="flex items-center gap-6">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.argentina.gob.ar/elegi-argentina"
            aria-label="Elegí Argentina"
            className="shrink-0"
          >
            <Image
              src="/elegi_logo_negativo.png"
              alt="Elegí Argentina"
              width={80}
              height={80}
              className="w-20 h-auto"
              sizes="(max-width: 640px) 80px, 80px"
            />
          </a>

          {/* AFIP (remoto): conservamos <img> para no tocar next.config */}
          <a
            href="http://qr.afip.gob.ar/?qr=_fsTAzmrNL73kWEG6EDy2g,,"
            target="_F960AFIPInfo"
            aria-label="AFIP - Data Fiscal"
            className="shrink-0"
          >
            <img
              src="http://www.afip.gob.ar/images/f960/DATAWEB.jpg"
              alt="AFIP - Data Fiscal"
              className="w-20 h-auto"
            />
          </a>
        </div>

        {/* Contacto */}
        <div className="flex flex-col items-center text-center gap-6">
          <div className={`flex flex-col items-center font-semibold text-white text-base sm:text-lg ${fredoka.className}`}>
            <a target="_blank" rel="noreferrer" href="https://wa.me/5492994192754">+54 9 299 419 2754</a>
            <a target="_blank" rel="noreferrer" href="mailto:info@dospuntosturismo.com.ar">info@dospuntosturismo.com.ar</a>
            <a target="_blank" rel="noreferrer" href="https://www.dospuntosturismo.com.ar">www.dospuntosturismo.com.ar</a>
          </div>

          <address className={`not-italic text-white text-sm sm:text-base text-center ${fredoka.className}`}>
            Neuquén capital, CP 8300<br />
            Agencia virtual — Legajo 19.849
          </address>
        </div>

        {/* Logo marca */}
        <div className="shrink-0">
          <Image
            src="/logoblanco.png"
            alt="Dos Puntos Turismo"
            width={160}
            height={160}
            className="w-32 sm:w-40 h-auto"
            sizes="(max-width: 640px) 128px, 160px"
          />
        </div>
      </div>

      {/* Safe-area para móviles con barra inferior */}
      <div className="pb-[env(safe-area-inset-bottom)]" />
    </footer>
  )
}
