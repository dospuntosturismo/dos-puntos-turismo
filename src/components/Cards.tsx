"use client"
import { Fredoka } from 'next/font/google'

const fredoka = Fredoka({ subsets: ['latin'] });

const Cards = () => {
	return (
		<article className='max-w-sm m-2 overflow-hidden bg-transparent hover:cursor-pointer'>
			<img className='object-cover w-72' src='/mendoza.png' alt='Mendoza' />
			<div className='flex flex-col items-start justify-between leading-tight md:p-4'>
				<h3 className='p-1 text-lg font-alphapipe'>Abril 2025</h3>
				<p className={`text-gray-900 text-xl font-bold ${fredoka.className}`}>Del 23 al 27</p>
			</div>
		</article>
	)
}

export default Cards