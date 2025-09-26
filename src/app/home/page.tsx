'use client'
import Image from 'next/image'
import { IoMdAirplane } from "react-icons/io";
import { LiaLongArrowAltDownSolid } from "react-icons/lia"
import { Fredoka } from 'next/font/google'
// import Cards from '@components/Cards'
import Footer from '@components/Footer'
import Link from 'next/link'
import Carrousel from '@components/Carrousel';
import Title from '@components/Title'
import localFont from 'next/font/local'
import Header from '@components/Header'
import { useRouter } from 'next/navigation'

const fredoka = Fredoka({ subsets: ['latin'] })
const alphapipeFont = localFont({
	src: '../../../public/fonts/BC Alphapipe RB Regular.ttf',
})

const Home = () => {
	const router = useRouter()
	const SIZE = '80px'
	return (
		<>
			<div id='section1' className='relative flex flex-col items-center w-full h-screen bg-no-repeat bg-cover bg-center bg-layout-pattern'>
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
					<h1 className={`text-xl self-start ${alphapipeFont.className}`}>Calendario</h1>
				</div>
				<div className='flex flex-row items-center justify-between w-10/12 mb-5'>
					<Title>SALIDAS 2025</Title>
					<div className='flex flex-row justify-center space-x-4 h-12'>
						<Image src='/Elementos gráficos-05.png' alt='Elemento 5' width={60} height={30} />
						<Image src='/Elementos gráficos-03.png' alt='Elemento 3' width={30} height={30} />
						<Image src='/Elementos gráficos-04.png' alt='Elemento 4' width={70} height={50} />
						<Image src='/Elementos gráficos-02.png' alt='Elemento 2' width={30} height={30} />
						<Image src='/Elementos gráficos-01.png' alt='Elemento 1' width={30} height={30} />
					</div>
				</div>
				<div className='relative w-full max-w-5xl mb-10'>
						<Carrousel />
				</div>
				<div>
					<button type='button' onClick={() => router.push('/contacto')} className={`text-xl border-2 border-dos-puntos-gray text-dos-puntos-gray px-4 py-2 ${fredoka.className}`}>Contacto</button>
				</div>
			</div>
			<div id='section3' className='w-screen flex flex-col items-center justify-center  bg-no-repeat bg-size-[3400px] bg-fondo-tres'>
				<h3 className={`${alphapipeFont.className} text-xl text-dos-puntos-gray self-start mt-20 ml-80`}>Viajá con nosotros</h3>
				<h1 className={`text-5xl tracking-widest -ml-32 text-dos-puntos-gray mb-10 ${fredoka.className}`}>NUESTROS SERVICIOS</h1>
					<div className='grid grid-cols-3 gap-4 mb-20'>
						<div className='flex flex-col items-center justify-center bg-dos-puntos-gray text-dos-puntos-blue px-2 py-2 w-56 h-56'>
							<div>
								<Image src='/Elementos gráficos-17.png' alt='Paquetes' width={50} height={50} />
								</div>
						<p className={`${fredoka.className} text-center font-semibold`}>Paquetes nacionales e internacionales</p>
						</div>
						<div className='flex flex-col items-center justify-center bg-dos-puntos-blue text-dos-puntos-gray px-2 py-2 w-56 h-56'>
						<IoMdAirplane className='text-dos-puntos-gray fill-current'size={SIZE} />
							<p className={`${fredoka.className} font-semibold mt-5`}>Aereos</p>
						</div>
						<div className='flex flex-col items-center justify-center bg-dos-puntos-gray text-dos-puntos-blue px-2 py-2 w-56 h-56'>
						<Image src='/Elementos gráficos-20.png' alt='Cruceros' width={60} height={60} />
						<p className={`${fredoka.className} font-semibold mt-5`}>Cruceros</p>
						</div>
						<div className='flex flex-col items-center justify-center bg-dos-puntos-blue text-dos-puntos-gray px-2 py-2 w-56 h-56'>
						<Image src='/Elementos gráficos-01.png' alt='Seguros' width={50} height={50} />
						<p className={`${fredoka.className} font-semibold mt-5`}>Seguros</p>
						</div>
						<div className='flex flex-col items-center justify-center bg-dos-puntos-gray text-dos-puntos-blue px-2 py-2 w-56 h-56'>
						<Image src='/Elementos gráficos-19.png' alt='Excursiones' width={70} height={70} />
							<p className={`${fredoka.className} font-semibold mt-5`}>Excursiones</p>
						</div>
						<div className='flex flex-col items-center justify-center bg-dos-puntos-blue text-dos-puntos-gray px-2 py-2 w-56 h-56'>
						<Image src='/Elementos gráficos-03.png' alt='Alojamientos' width={40} height={40} />
						<p className={`${fredoka.className} font-semibold mt-5`}>Alojamientos</p>
						</div>
					</div>
			</div>
			<div id='section4' className='w-screen h-screen flex flex-col bg-white'>
				<div className='flex flex-row justify-around p-2'>
					<div className={`flex flex-col text-xl ${alphapipeFont.className}`}>
					<p>Nuestras opciones</p>
					<Title>PAQUETES</Title>
					</div>
					<div className='flex flex-row space-x-4 h-10 justify-end'>
					<Image src='/Elementos gráficos-05.png' alt='Olas' width={25} height={10} />
					<Image src='/Elementos gráficos-03.png' alt='Ubicacion' width={25} height={11} />
					<Image src='/Elementos gráficos-04.png' alt='Montañas' width={35} height={15} />
					<Image src='/Elementos gráficos-02.png' alt='Valija' width={20} height={10} />
					<Image src='/Elementos gráficos-01.png' alt='Felicidad' width={20} height={10} />
					</div>
				</div>
				<div className='flex flex-col space-y-10 mt-10 items-center mb-20'>
					<div className='flex flex-row space-x-20'>
						<Link href='/paquetes/paquetesNeuquen' className='w-[336px] h-[390px] bg-hora-de-viajar-neuquen bg-cover bg-no-repeat flex flex-col items-center justify-center relative cursor-pointer'>
							<div className='absolute top-0'>
								<Image src='/Variantes logotipo - RGB (15).png' alt='logo' width={90} height={90} />
							</div>
							<div className='absolute bottom-0'>
								<Image src='/Olitas_celeste.png' alt='Hora de Viajar a Neuquen' width={336} height={250} />
							</div>
							<div className={`absolute bottom-4 text-white text-xl ${alphapipeFont.className}`}>
								¡Hora de <br/>
								viajar a <br/>
								<span className='font-semibold'>Neuquén!</span>
							</div>
						</Link>
						<Link href='/paquetes/paquetesInternacionales' className='w-[336px] h-[390px] bg-hora-de-viajar-mundo bg-cover bg-no-repeat flex flex-col items-center justify-center relative cursor-pointer'>
							<div className='absolute top-0'>
								<Image src='/Variantes logotipo - RGB (15).png' alt='logo' width={90} height={90} />
							</div>
							<div className='absolute bottom-0'>
								<Image src='/Olitas_azul.png' alt='Hora de Viajar al mundo' width={336} height={250} />
							</div>
							<div className={`absolute bottom-4 text-white text-xl ${alphapipeFont.className}`}>
								¡Hora de <br/>
								viajar al <br/>
								<span className='font-semibold'>mundo!</span>
							</div>
						</Link>
					</div>
					<div className='flex flex-row space-x-20'>
						<Link href='/paquetes/paquetesNorte' className='w-[336px] h-[390px] bg-hora-de-viajar-norte bg-cover bg-no-repeat flex flex-col items-center justify-center relative cursor-pointer'>
							<div className='absolute top-0'>
								<Image src='/Variantes logotipo - RGB (15).png' alt='logo' width={90} height={90} />
							</div>
							<div className='absolute bottom-0'>
								<Image src='/Olitas.png' alt='Hora de Viajar al norte' width={336} height={250} />
							</div>
							<div className={`absolute bottom-6 text-white text-xl ${alphapipeFont.className}`}>
								<span className='font-thin'>¡Hora de <br/></span>
								viajar al <br/>
								<span className='font-semibold'>norte!</span>
							</div>
						</Link>
						<Link href='/paquetes/paquetesSur' className='w-[336px] h-[390px] bg-hora-de-viajar-sur bg-cover bg-no-repeat flex flex-col items-center justify-center relative cursor-pointer'>
							<div className='absolute top-0'>
								<Image src='/Variantes logotipo - RGB (15).png' alt='logo' width={90} height={90} />
							</div>
							<div className='absolute bottom-0'>
								<Image src='/Olitas_rosa.png' alt='Hora de Viajar al sur' width={336} height={250} />
							</div>
							<div className={`absolute bottom-4 text-white text-xl ${alphapipeFont.className}`}>
								¡Hora de <br/>
								viajar al <br/>
								<span className='font-semibold'>sur!</span>
							</div>
						</Link>
					</div>
				</div>
			<Footer />
			</div>
</>
	)
}

export default Home