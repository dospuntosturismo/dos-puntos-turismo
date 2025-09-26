import React from 'react'
import Image from 'next/image'
import { Fredoka } from 'next/font/google'

const fredoka = Fredoka({ subsets: ['latin'] })

const Footer = () => {
	return (
		<div className='w-full bg-dos-puntos-pink flex flex-row items-center space-x-32 justify-center p-6'>
				<div className='flex flex-row items-center justify-center'>
					<a target='_blank' rel='noreferrer' href='https://www.argentina.gob.ar/elegi-argentina'>
						<img className='w-20' src='/elegi_logo_negativo.png' alt='Elegi Argentina' />
					</a>
					<div className='w-12'>
							<a href="http://qr.afip.gob.ar/?qr=_fsTAzmrNL73kWEG6EDy2g,," target="_F960AFIPInfo">
								<img src="http://www.afip.gob.ar/images/f960/DATAWEB.jpg" alt='AFIP' />
							</a>
						</div>
				</div>
				<div className='flex flex-col space-y-10 items-center text-xl text-white justify-center'>
					<div className={`flex flex-col items-center font-semibold justify-center ${fredoka.className}`}>
							<a target='_blank' rel="noreferrer" href='https://wa.me/5492994192754' >+54 9 299 419 2754</a>
							<a target='_blank' rel="noreferrer" href='mailto:info@dospuntosturismo.com.ar'>info@dospuntosturismo.com.ar</a>
							<a target='_blank' rel="noreferrer" href='https://www.dospuntosturismo.com.ar'>www.dospuntosturismo.com.ar</a>
							</div>
						<div className={`flex flex-col font-semibold items-center justify-center text-white ${fredoka.className}`}>
							<p>Neuquén capital, CP 8300</p>
							<p>Agencia virtual - Legajo 19.849</p>
						</div>
				</div>
				<div className='mr-20'>
					<Image src='/logoblanco.png' alt='Logo Blanco Footer' width={200} height={200} />
				</div>
		</div>
	)
}

export default Footer