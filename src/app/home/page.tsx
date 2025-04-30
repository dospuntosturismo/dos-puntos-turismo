import Header from '@components/Header'
import Image from 'next/image'
import { IoMdAirplane } from "react-icons/io";
import { LiaLongArrowAltDownSolid } from "react-icons/lia"
// import Carrousel from '@components/Carrousel'
import { Fredoka } from 'next/font/google'
import Cards from '@components/Cards'

const fredoka = Fredoka({ subsets: ['latin'] });

const Home = () => {
	const SIZE = '50px'
	return (
		<>
			<div id='section1' className='relative flex flex-col items-center w-screen h-screen bg-no-repeat bg-cover bg-center bg-layout-pattern'>
				<Header />
				{/* <div>
					<Image src='/logo_amarillo.png' alt='Logo Grande Amarillo' width={500} height={500} />
				</div> */}
				<div className='absolute flex flex-row items-center justify-center bottom-0'>
					<span className='text-dos-puntos-yellow text-sm -rotate-90 -mr-4'>scroll</span>
					<LiaLongArrowAltDownSolid size={SIZE} className='fill-current text-dos-puntos-yellow' />
					</div>
			</div>
			<div id='section2' className='w-screen h-screen bg-dos-puntos-brown-light flex flex-col items-center justify-center'>
				<div className='w-10/12'>
					<h1 className='text-xl self-start font-alphapipe'>Calendario</h1>
				</div>
				<div className='flex flex-row items-center justify-between w-10/12'>
					<div className={`text-4xl text-dos-puntos-gray font-fredoka tracking-widest font-semibold ${fredoka.className}`}>SALIDAS 2025</div>
					<div className='flex flex-row justify-center space-x-4'>
						<Image src='/Elementos gráficos-05.png' alt='Elemento 5' width={50} height={50} />
						<Image src='/Elementos gráficos-03.png' alt='Elemento 3' width={40} height={50} />
						<Image src='/Elementos gráficos-04.png' alt='Elemento 4' width={50} height={50} />
						<Image src='/Elementos gráficos-02.png' alt='Elemento 2' width={40} height={50} />
						<Image src='/Elementos gráficos-01.png' alt='Elemento 1' width={40} height={40} />
					</div>
				</div>
				<div className='flex flex-row'>
					<div>
						<Cards />
					</div>
				</div>
				<div>
					<button type='button' className={`text-xl border-2 border-dos-puntos-gray text-dos-puntos-gray px-4 py-2 ${fredoka.className}`}>Contacto</button>
				</div>
			</div>
			<div id='section3' className='w-screen h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center bg-fondo-tres'>
				<h3 className='font-alphapipe text-xl text-dos-puntos-gray self-start mt-20 ml-80'>Viajá con nosotros</h3>
				<h1 className={`text-5xl tracking-widest -ml-32 text-dos-puntos-gray mb-10 ${fredoka.className}`}>NUESTROS SERVICIOS</h1>
					<div className='grid grid-cols-3 gap-4'>
						<div className='bg-dos-puntos-gray text-dos-puntos-blue px-2 py-2 w-56 h-56'>
							<div>
								<Image src='/Elementos gráficos-17.png' alt='Paquetes' width={50} height={50} />
								</div>
						<p className={`${fredoka.className}`}>Paquetes nacionales e internacionales</p>
						</div>
						<div className='bg-dos-puntos-blue text-dos-puntos-gray px-2 py-2 w-56 h-56'>
						<IoMdAirplane className='text-dos-puntos-gray fill-current'size={SIZE} />
							<p className={`${fredoka.className}`}>Aereos</p>
						</div>
						<div className='bg-dos-puntos-gray text-dos-puntos-blue px-2 py-2 w-56 h-56'>
						<Image src='/Elementos gráficos-20.png' alt='Cruceros' width={50} height={50} />
							Cruceros
						</div>
						<div className='bg-dos-puntos-blue text-dos-puntos-gray px-2 py-2 w-56 h-56'>
						<Image src='/Elementos gráficos-01.png' alt='Seguros' width={50} height={50} />
							Seguros
						</div>
						<div className='bg-dos-puntos-gray text-dos-puntos-blue px-2 py-2 w-56 h-56'>
						<Image src='/Elementos gráficos-19.png' alt='Excursiones' width={50} height={50} />
							Excursiones
						</div>
						<div className='bg-dos-puntos-blue text-dos-puntos-gray px-2 py-2 w-56 h-56'>
						<Image src='/Elementos gráficos-03.png' alt='Alojamientos' width={50} height={50} />
							Alojamientos
						</div>
					</div>
			</div>
		</>
	)
}

export default Home