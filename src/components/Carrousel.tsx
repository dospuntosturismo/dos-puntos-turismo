'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { supabase } from '../lib/supabaseClient'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { Fredoka } from 'next/font/google'
import localFont from 'next/font/local'
import { Salidas } from 'types/global'

// CSS de keen en app/layout.tsx
// import 'keen-slider/keen-slider.min.css'

const fredoka = Fredoka({ subsets: ['latin'] })
const alphapipeFont = localFont({ src: '../../public/fonts/BC Alphapipe RB Regular.ttf' })

function SkeletonSlide() {
  return (
    <div className="keen-slider__slide">
      <div className="rounded-xl overflow-hidden shadow-md relative bg-white">
        {/* “Imagen” */}
        <div className="w-full h-56 bg-gray-200 animate-pulse" />
        {/* Capa inferior como tu tarjeta */}
        <div className="p-4 bg-[#f9f0d0] relative">
          {/* Título absoluto (simulado) */}
          <div className="absolute bottom-24 right-28">
            <div className="h-5 w-40 bg-gray-300 rounded animate-pulse" />
          </div>
          {/* Mes */}
          <div className="h-4 w-24 bg-gray-300 rounded animate-pulse mb-2" />
          {/* Info */}
          <div className="h-5 w-48 bg-gray-300 rounded animate-pulse" />
        </div>
      </div>
    </div>
  )
}

const Carrousel = () => {
  const [salidas, setSalidas] = useState<Salidas[]>([])
  const [loading, setLoading] = useState(true)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 3, spacing: 20 },
    breakpoints: {
      '(max-width: 1024px)': { slides: { perView: 2, spacing: 16 } },
      '(max-width: 640px)': { slides: { perView: 1, spacing: 12 } },
    },
  })

  const handlePrev = () => instanceRef.current?.prev()
  const handleNext = () => instanceRef.current?.next()

  useEffect(() => {
    const fetchSalidas = async () => {
      const { data, error } = await supabase.from('salidas').select('*')
      if (error) console.error(error)
      setSalidas(data || [])
      setLoading(false)
    }
    fetchSalidas()
  }, [])

  useEffect(() => {
    instanceRef.current?.update()
  }, [salidas.length, instanceRef])

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider overflow-hidden">
        {loading
          ? (
            <>
              <SkeletonSlide />
              <SkeletonSlide />
              <SkeletonSlide />
            </>
          )
          : salidas.map((item, index) => (
              <div key={index} className="keen-slider__slide">
                <div className="rounded-xl overflow-hidden shadow-md relative bg-white">
                  <Image
                    src={item.image}
                    alt={item.nombre}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 bg-[#f9f0d0] relative">
                    <h2
                      className={`text-lg text-white font-bold uppercase absolute bottom-24 right-28 tracking-widest ${fredoka.className}`}
                    >
                      {item.nombre}
                    </h2>
                    <p className={`text-sm text-dos-puntos-gray ${alphapipeFont.className}`}>
                      {item.mes}
                    </p>
                    <p className={`text-md font-bold text-dos-puntos-gray ${fredoka.className}`}>
                      {item.info}
                    </p>
                  </div>
                </div>
              </div>
            ))
        }
      </div>

      {!loading && (
        <>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-10 -translate-x-full bg-white rounded-full shadow p-2 z-10"
            aria-label="Anterior"
          >
            <AiOutlineLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-28 -translate-x-full bg-white rounded-full shadow p-2 z-10"
            aria-label="Siguiente"
          >
            <AiOutlineRight size={24} />
          </button>
        </>
      )}
    </div>
  )
}

export default Carrousel
