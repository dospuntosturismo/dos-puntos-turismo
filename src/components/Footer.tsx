import React from 'react'
import Image from 'next/image'

const Footer = () => {
	return (
		<div className='w-full bg-dos-puntos-pink grid grid-cols-3 p-2'>
				<div className='text-dos-puntos-pink'>
					Holis
				</div>
				<div className='flex flex-col items-center text-lg text-white justify-center'>
					<div className='flex flex-col items-center justify-center'>
						<div>
							<a target='_blank' rel="noreferrer" href='https://wa.me/5492994192754' >+54 9 299 419 2754</a>
							<a target='_blank' rel="noreferrer" href='mailto:info@dospuntosturismo.com.ar'>info@dospuntosturismo.com.ar</a>
							<a target='_blank' rel="noreferrer" href='https://www.dospuntosturismo.com.ar'>dospuntosturismo.com.ar</a>
						</div>
						<div className='flex flex-col items-center justify-center text-white'>
							<p>Neuquén capital, CP 8300</p>
							<p>Agencia virtual - Legajo 19.849</p>
						</div>
					</div>
					<div>
						<Image src='/logoblanco.png' alt='Logo Blanco Footer' width={384} height={384} />
					</div>
				</div>
			</div>
	)
}

export default Footer