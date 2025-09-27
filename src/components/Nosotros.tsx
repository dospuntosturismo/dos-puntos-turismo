'use client'
import Header from '@components/Header'
import Title from '@components/Title'
import Image from 'next/image'
import React from 'react'
import { Fredoka } from 'next/font/google'
import localFont from 'next/font/local'
import Footer from '@components/Footer'

const fredoka = Fredoka({ subsets: ['latin'] })

const alphapipeFont = localFont({
	src: '../../public/fonts/BC Alphapipe RB Regular.ttf',
})

const Nosotros = () => {
	return (
		<div className='w-full h-screen flex flex-col items-center bg-white relative'>
			<Header />
			<div className='mt-16 self-center ml-72'>
				<h1 className={`${alphapipeFont.className} text-left text-lg`}>Nosotros</h1>
				<Title>NUESTRA HISTORIA</Title>
			</div>
			<Image src='/Elementos gráficos-22.png' className='absolute bottom-12' width={1100} height={620} alt=''/>
			<Image src='/Elementos gráficos-24.png' className='absolute bottom-32' width={1100} height={620} alt=''/>
			<div className={`flex flex-col space-y-6 items-center p-4 mx-36 mt-80 font-semibold text-2xl ${fredoka.className}`}>
				<div className='text-center'>
					Somos una marca de El Médano Turismo. Desde el 2023 ofrecemos productos y servicios en la ciudad de Neuquén: excursiones locales, paquetes regionales, nacionales e internacionales.
				</div>
			<div className='text-center'>
			Vimos la necesidad de representar dos puntos en la Patagonia Argentina, diferenciándonos con una marca renovada que represente más a la Provincia de Neuquén.
			</div>
			<div className='text-center'>
			Buscamos brindar un servicio profesional, seguridad y la mejor atención para nuestr@s pasajer@s.
			</div>
			<div>
			¡Renovamos la marca pero mantenemos nuestra esencia!
			</div>
			</div>
			<div className={`${alphapipeFont.className} text-5xl mx-64 text-center text-dos-puntos-blue mt-20`}>
				&quot;UNIMOS TUS GANAS DE VIAJAR CON EL DESTINO PERFECTO&quot;
			</div>
			<div className='flex flex-row items-center space-x-32 my-10'>
				<Image src='/Elementos gráficos-05.png' alt='Olas' width={150} height={200} />
				<Image src='/Elementos gráficos-19.png' alt='Excursiones' width={200} height={220} />
				<Image src='/Elementos gráficos-07.png' alt='Excursiones' width={120} height={220} />
				<Image src='/Elementos gráficos-11.png' alt='Excursiones' width={120} height={220} />
			</div>
			<div className='relative my-20 flex items-center justify-center'>
				<img src='/logo.png' alt='Logo' className='absolute top-5 left-20 w-2/12' />
				<img className='w-11/12 rounded-md' src='/IMG_0154.jpg' alt='Dos Puntos Turismo' />
			</div>
			<Footer />
		</div>
	)
}

export default Nosotros