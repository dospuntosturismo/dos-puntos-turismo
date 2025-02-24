import React from 'react'
import Header from '@components/Header'
import Image from 'next/image'
import { LiaLongArrowAltDownSolid } from "react-icons/lia"

const Home = () => {
	const SIZE = '50px'
	return (
		<div className='relative flex flex-col items-center w-full h-screen bg-no-repeat bg-cover bg-layout-pattern'>
			<Header />
			<div>
				<Image src='/logo_amarillo.png' alt='Logo Grande Amarillo' width={500} height={500} />
			</div>
			<div className='absolute flex flex-row items-center justify-center bottom-0'>
				<span className='text-dos-puntos-yellow text-sm -rotate-90 -mr-4'>scroll</span>
				<LiaLongArrowAltDownSolid size={SIZE} className='fill-current text-dos-puntos-yellow' />
				</div>
		</div>
	)
}

export default Home