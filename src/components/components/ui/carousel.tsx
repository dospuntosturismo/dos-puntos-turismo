
'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { Fredoka } from 'next/font/google'
import localFont from 'next/font/local'

const fredoka = Fredoka({ subsets: ['latin'] })

const alphapipeFont = localFont({
	src: '../../../../../../public/fonts/BC Alphapipe RB Regular.ttf',
})

const data = [
	{
		destino: 'Mendoza',
		mes: 'Marzo 2025',
		fechas: 'Del 23 al 27',
		imagen: '/mendoza.png', // Cambia por tus rutas reales
	},
	{
		destino: 'Caribe',
		mes: 'Abril 2025',
		fechas: 'Del 5 al 12',
		imagen: '/mendoza.png',
	},
	{
		destino: 'Norte Arg',
		mes: 'Mayo 2025',
		fechas: 'Del 23 al 27',
		imagen: '/mendoza.png',
	},
];

const Carrousel = () => {
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		slides: {
			perView: 3,
			spacing: 20,
		},
		loop: true,
	});

	const handlePrev = () => instanceRef.current?.prev();
	const handleNext = () => instanceRef.current?.next();

	return (
		<div className="relative">
			{/* Slider */}
			<div ref={sliderRef} className="keen-slider">
				{data.map((item, index) => (
					<div key={index} className="keen-slider__slide">
						<div className="rounded-xl overflow-hidden shadow-md relative bg-white">
							<Image
								src={item.imagen}
								alt={item.destino}
								width={400}
								height={250}
								className="w-full h-56 object-cover"
							/>
							<div className="p-4 bg-[#f9f0d0]">
								<h2 className="text-lg font-bold uppercase tracking-widest">{item.destino}</h2>
								<p className={`italic text-sm text-gray-600 ${alphapipeFont.className}`}>{item.mes}</p>
								<p className={`text-md font-bold text-[#1a1a1a] ${fredoka.className}`}>{item.fechas}</p>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Flechas de navegación */}
			<button
				onClick={handlePrev}
				className="absolute top-1/2 left-2 -translate-x-full bg-white rounded-full shadow p-2 z-10"
				aria-label="Anterior"
			>
				<AiOutlineLeft size={32} />
			</button>
			<button
				onClick={handleNext}
				className="absolute top-1/2 right-0 -translate-x-full bg-white rounded-full shadow p-2 z-10"
				aria-label="Siguiente"
			>
				<AiOutlineRight size={30} />
			</button>
		</div>
	);
};

export default Carrousel