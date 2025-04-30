'use client'; // si estás en Next 13+ y usas App Router
import React, { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Modal from './Modal'

const inter = Inter({ subsets: ['latin'] });

const Header = () => {
	const [openModal, setOpenModal] = useState(false)
	return (
		<div className='flex flex-row justify-between bg-dos-puntos-brown-light bg-opacity-65 px-2 w-11/12 rounded-full mt-10'>
				<div>
					<Image src='/logo_inicio.png' alt='Logo Nav Bar' width={100} height={100} />
				</div>
				<div className={`flex flex-row items-center text-lg text-dos-puntos-gray justify-center space-x-6 mr-10 ${inter.className}`}>
					<div>Inicio</div>
					<p>Nosotros</p>
					<p>Paquetes</p>
					<div onClick={() => setOpenModal(true)} className='border border-gray-900 rounded-full px-3 py-1 cursor-pointer'>Contacto</div>
				</div>
				<Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
			</div>
	)
}

export default Header