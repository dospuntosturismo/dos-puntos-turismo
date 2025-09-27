"use client"
import { useEffect, useState } from 'react'
import { supabase } from '../../../lib/supabaseClient'
import { Fredoka } from 'next/font/google'
import localFont from 'next/font/local'
import Image from 'next/image'
import Header from '@components/Header'
import { Paquetes } from 'types/global'
import Footer from '@components/Footer'
import ModalMenu from '@components/ModalMenu'

const fredoka = Fredoka({ subsets: ['latin'] })

const alphapipeFont = localFont({
	src: '../../../../public/fonts/BC Alphapipe RB Regular.ttf',
})

const PaquetesSur = () => {
		const [paquetesList, setPaquetes] = useState<Array<Paquetes>>([])
	const [openModal, setOpenModal]= useState(false)
	const [selectedFile, setSelectedFile] = useState<Paquetes | null>(null)

	useEffect(() => {
  const fetchPaquetes = async () => {
    const { data, error } = await supabase
      .from('paquetes')
      .select('*')
      .like('paquete', '2')// busca registros donde el campo 'paquete' contiene el string "1"

    console.log('dataaaaaa', data)
		const filtrados = data?.filter(p => p.paquete === '2')
		console.log('FILTRADOS:', filtrados)
    if (error) console.error(error)
    else setPaquetes(data)
  }

  fetchPaquetes()
}, [])

const handleModal = (paquete: Paquetes) => {
  setSelectedFile(paquete)
  setOpenModal(true)
}

	console.log('paquetes', paquetesList)
	return (
		<div className='relative w-screen min-h-[100svh]'>
			<img
    src="/olas-azul-oscuro.svg"
    className="absolute bottom-52 md:bottom-60  left-0 w-full h-auto"
    alt="Fondo ola"
  />
	<div className='relative z-10 flex flex-col items-center'>
				<Header />
			<div className='flex flex-col md:flex-row justify-around items-center w-full mt-10'>
				<div className='flex flex-col mb-5 md:mb-0'>
					<div className={`text-lg md:text-3xl text-dos-puntos-gray ${fredoka.className}`}>
						¡Hora de
					</div>
					<div className={`text-lg md:text-2xl text-dos-puntos-gray font-bold ${alphapipeFont.className}`}>
						viajar al
					</div>
					<div className={`text-lg md:text-2xl text-dos-puntos-gray font-bold ${alphapipeFont.className}`}>
						SUR!
					</div>
				</div>
				<div className='flex flex-row md:flex-col space-x-6 md:space-x-0 space-y-2 w-56'>
					<div className='flex flex-row items-center space-x-6 md:space-x-0 justify-around'>
						<Image src='/Elementos gráficos-02.png' alt='Elemento 1' width={40} height={40} className="h-10 w-auto" />
						<Image src='/Elementos gráficos-04.png' alt='Elemento 1' width={85} height={50} className="h-8 w-auto" />
					</div>
					<div className='flex flex-row items-center space-x-6 md:space-x-0 justify-around'>
						<Image src='/Elementos gráficos-05.png' alt='Elemento 1' width={50} height={40} className="h-8 w-auto" />
						<Image src='/Elementos gráficos-01.png' alt='Elemento 1' width={40} height={40} className="h-8 w-auto" />
					</div>
				</div>
			</div>
			<div className='flex flex-row items-center justify-center space-x-6 my-10'>
							{paquetesList.map((paquete) => (
								<button type='button' key={paquete.id} onClick={() =>handleModal(paquete)} className='bg-gray-500 w-80 h-80 py-4 px-2 flex items-center justify-center cursor-pointer'>
								<Image src={paquete.image} width={250} height={250} alt={paquete.titulo} />
								</button>
							))}
						</div>
						<Footer />
						{openModal && (
				<ModalMenu
					setOpenModal={setOpenModal}
					selectedFile={selectedFile as Paquetes}
				/>
			)}
			</div>
		</div>
	)
}

export default PaquetesSur