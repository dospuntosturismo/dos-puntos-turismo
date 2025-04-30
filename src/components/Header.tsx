'use client'; // si estás en Next 13+ y usas App Router
import React, { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Modal from './Modal'
import { useIsMobile } from '@hooks/useIsDesktop'
import { BsList } from 'react-icons/bs'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] });

const Header = () => {
	const [openModal, setOpenModal] = useState(false)
	const { isMobile } = useIsMobile()
	const [showMobileMenu, setShowMobileMenu] = useState(false)
	const SIZE = '24px'
	return (
		<>
		<div className='flex flex-row justify-between items-center bg-dos-puntos-brown-light bg-opacity-65 px-2 w-11/12 rounded-full mt-10'>
			<div>
					<Image src='/logo_inicio.png' alt='Logo Nav Bar' width={100} height={100} />
				</div>
			{isMobile ? (
		<button
								onClick={() => {
									return setShowMobileMenu(!showMobileMenu)
								}} className='p-2 bg-transparent rounded-full burger-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dos-puntos-pink focus:shadow-outline'
							>
								<BsList size={SIZE} />
							</button>
		
	) : (
<div>
	<div className={`flex flex-row items-center text-lg text-dos-puntos-gray justify-center space-x-6 mr-10 ${inter.className}`}>
		<div>Inicio</div>
		<p>Nosotros</p>
		<p>Paquetes</p>
		<div onClick={() => setOpenModal(true)} className='border border-gray-900 rounded-full px-3 py-1 cursor-pointer'>Contacto</div>
	</div>
	<Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
</div>
	)}
		</div>
		{showMobileMenu && (
				<div className='menu-mobile bg-dos-puntos-brown-light bg-opacity-60'>
					<div className='flex flex-col items-center text-white font-roboto-bold'>
						<Link href='/' className='p-2'>
							Inicio
						</Link>
						<Link href='/nosotros' className='p-2'>
							Nosotros
						</Link>
						<Link href='/paquetes' className='p-2'>
							Paquetes
						</Link>
						<Link href='/contacto' className='p-2' onClick={() => setOpenModal(true)}>
							Contacto
						</Link>
					</div>
					<Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
				</div>
			)}
		<style jsx>
				{` 
				.menu-mobile {
					position: fixed;
					z-index: 3;
					top: 0;
					left: 0;
					width: 100vw;
					bottom: 0;
					display:flex;
					align-items: center;
					justify-content: center;
					transition: .3s;
				}
				.burger-button {
					z-index: 4;
				}
				`}
			</style>
		</>
	)
}

export default Header