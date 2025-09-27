'use client'

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { supabase } from '../lib/supabaseClient'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { Fredoka } from 'next/font/google'
import localFont from 'next/font/local'
import 'keen-slider/keen-slider.min.css'
import { Salidas } from 'types/global'

const fredoka = Fredoka({ subsets: ['latin'] })
const alphapipeFont = localFont({ src: '../../public/fonts/BC Alphapipe RB Regular.ttf' })

type FetchState = 'idle' | 'loading' | 'error' | 'done'

function SkeletonSlide() {
	return (
		<div className="keen-slider__slide">
			<div className="rounded-xl overflow-hidden shadow-md relative bg-white">
				{/* Mantiene altura estable con aspect ratio */}
				<div className="relative w-full aspect-[16/9] bg-gray-200 animate-pulse" />
				<div className="p-4 bg-[#f9f0d0]">
					<div className="h-4 w-28 bg-gray-300 rounded animate-pulse mb-2" />
					<div className="h-5 w-48 bg-gray-300 rounded animate-pulse" />
				</div>
			</div>
		</div>
	)
}

export default function Carrousel() {
	const [salidas, setSalidas] = useState<Salidas[]>([])
	const [status, setStatus] = useState<FetchState>('idle')
	const isEmpty = status === 'done' && salidas.length === 0
	const isLoading = status === 'loading'

	// Evita loop si hay 1 sola card
	const loop = salidas.length > 1

	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		loop,
		slides: { perView: 3, spacing: 20 },
		breakpoints: {
			'(max-width: 1024px)': { slides: { perView: 2, spacing: 16 } },
			'(max-width: 640px)': { slides: { perView: 1, spacing: 12 } },
		},
		// Mejora accesibilidad del drag
		rubberband: true,
		mode: 'free-snap',
	})

	const handlePrev = () => instanceRef.current?.prev()
	const handleNext = () => instanceRef.current?.next()

	// Keyboard nav accesible sobre el contenedor
	const containerRef = useRef<HTMLDivElement>(null)
	const onKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'ArrowLeft') handlePrev()
		if (e.key === 'ArrowRight') handleNext()
	}

	useEffect(() => {
		let ignore = false
		const fetchSalidas = async () => {
			setStatus('loading')
			const { data, error } = await supabase.from('salidas').select('*')
			if (ignore) return
			if (error) {
				console.error(error)
				setStatus('error')
				return
			}
			setSalidas(data || [])
			setStatus('done')
		}
		fetchSalidas()
		return () => { ignore = true }
	}, [])

	// Cuando cambia la cantidad, fuerza re-cálculo del slider
	useEffect(() => {
		instanceRef.current?.update({ loop })
	}, [salidas.length, loop, instanceRef])

	const arrowButtonsVisible = !isLoading && salidas.length > 1

	return (
		<div
			className="relative"
			ref={containerRef}
			tabIndex={0}
			onKeyDown={onKeyDown}
			aria-roledescription="carousel"
			aria-label="Salidas 2025"
		>
			<div ref={sliderRef} className="keen-slider overflow-hidden">
				{isLoading && (
					<>
						<SkeletonSlide />
						<SkeletonSlide />
						<SkeletonSlide />
					</>
				)}

				{status === 'error' && (
					<div className="keen-slider__slide">
						<div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-700">
							Ocurrió un error al cargar las salidas. Intenta nuevamente.
						</div>
					</div>
				)}

				{isEmpty && (
					<div className="keen-slider__slide">
						<div className="rounded-xl border border-dashed border-gray-300 bg-white p-6 text-gray-600">
							Aún no hay salidas publicadas.
						</div>
					</div>
				)}

				{!isLoading && !isEmpty && status === 'done' &&
					salidas.map((item, index) => (
						<div key={index} className="keen-slider__slide">
							<article className="rounded-xl overflow-hidden shadow-md relative bg-white h-full">
								{/* Imagen con aspect ratio estable y cover */}
								<div className="relative w-full aspect-[16/9]">
									<Image
										src={item.image}
										alt={item.nombre}
										fill
										className="object-cover"
										// sizes: móvil 100vw; tablet/desktop limitado por el contenedor
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px"
										priority={false}
									/>
								</div>

								{/* Pie de tarjeta; sin posiciones absolutas frágiles */}
								<div className="p-4 bg-[#f9f0d0]">
									<h3
										className={`text-base sm:text-lg text-dos-puntos-gray font-bold uppercase tracking-widest ${fredoka.className}`}
									>
										{item.nombre}
									</h3>
									<p className={`text-sm text-dos-puntos-gray/80 ${alphapipeFont.className}`}>
										{item.mes}
									</p>
									<p className={`text-sm sm:text-base font-semibold text-dos-puntos-gray ${fredoka.className}`}>
										{item.info}
									</p>
								</div>
							</article>
						</div>
					))
				}
			</div>

			{/* Flechas: visibles solo si hay más de 1 slide. Responsivas y accesibles */}
			{arrowButtonsVisible && (
				<>
					<button
						onClick={handlePrev}
						className={[
							"absolute z-10 top-1/2 -translate-y-1/2",
							"left-3 md:-left-4", // cercano en mobile, fuera del card en md+
							"bg-white rounded-full shadow p-2",
							"focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400",
							"active:scale-95",
						].join(" ")}
						aria-label="Anterior"
					>
						<AiOutlineLeft size={22} />
					</button>

					<button
						onClick={handleNext}
						className={[
							"absolute z-10 top-1/2 -translate-y-1/2",
							"right-3 md:-right-4",
							"bg-white rounded-full shadow p-2",
							"focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400",
							"active:scale-95",
						].join(" ")}
						aria-label="Siguiente"
					>
						<AiOutlineRight size={22} />
					</button>
				</>
			)}
		</div>
	)
}