import React from 'react'
import Image from 'next/image'

const Footer = () => {
	return (
		<div className='flex flex-row justify-between bg-dos-puntos-brown-light bg-opacity-65 px-2 w-full rounded-full mt-10'>
				<div>
					<Image src='/logo_inicio.png' alt='Logo Nav Bar' width={100} height={100} />
				</div>
				<div className='flex flex-row items-center text-lg text-gray-900 justify-center space-x-6 mr-10'>
					<div>Inicio</div>
					<p>Nosotros</p>
					<p>Paquetes</p>
					<p className='border border-gray-900 rounded-full px-3 py-1'>Contacto</p>
				</div>
			</div>
	)
}

export default Footer