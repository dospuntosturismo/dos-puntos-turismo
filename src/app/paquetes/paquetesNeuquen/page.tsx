'use client'
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

const PaquetesPage = () => {
	 
	const [paquetesList, setPaquetes] = useState<Array<Paquetes>>([])
	const [openModal, setOpenModal]= useState(false)
	const [selectedFile, setSelectedFile] = useState<Paquetes | null>(null)

useEffect(() => {
  const fetchPaquetes = async () => {
    const { data, error } = await supabase
      .from('paquetes')
      .select('*')
      .like('paquete', '1')// busca registros donde el campo 'paquete' contiene el string "1"

    console.log('dataaaaaa', data)
		const filtrados = data?.filter(p => p.paquete === '1')
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
		<div className="relative w-full min-h-[100svh] overflow-hidden">
      {/* Fondo olas (anclado abajo y detrás) */}
      <div aria-hidden className="pointer-events-none select-none absolute inset-x-0 bottom-0 -z-10">
        <Image
          src="/olas.svg"
          alt=""
          width={1920}
          height={400}
          className="w-full h-auto"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 flex flex-col">
        <Header />

        <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 pt-8 pb-24 md:pb-32">
          {/* Hero */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mt-4">
            <div className="text-center md:text-left">
              <div className={`text-3xl text-dos-puntos-blue ${fredoka.className}`}>¡Hora de</div>
              <div className={`text-2xl text-dos-puntos-blue font-bold ${alphapipeFont.className}`}>viajar a</div>
              <div className={`text-3xl text-dos-puntos-blue font-bold ${alphapipeFont.className}`}>Neuquén!</div>
            </div>

            {/* Decorativos (wrap en mobile) */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
              <Image src="/Elementos gráficos-17.png" alt="" aria-hidden width={40} height={40} className="h-8 w-auto" />
              <Image src="/Elementos gráficos-19.png" alt="" aria-hidden width={85} height={50} className="h-10 w-auto" />
              <Image src="/Elementos gráficos-20.png" alt="" aria-hidden width={50} height={40} className="h-9 w-auto" />
              <Image src="/Elementos gráficos-16.png" alt="" aria-hidden width={40} height={40} className="h-8 w-auto" />
            </div>
          </div>

          {/* Grid de paquetes */}
          <section className="mt-8 sm:mt-10">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {paquetesList.map((paquete) => (
                <li key={paquete.id}>
                  <button
                    type="button"
                    onClick={() => handleModal(paquete)}
                    className="group relative w-full rounded-2xl overflow-hidden bg-white/70 shadow transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-dos-puntos-blue"
                    aria-label={`Abrir ${paquete.titulo}`}
                  >
                    <div className="relative w-full aspect-square">
                      <img
                        src={paquete.image}
                        alt={paquete.titulo}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="absolute inset-0 ring-0 ring-transparent group-hover:ring-1 group-hover:ring-dos-puntos-blue/30 pointer-events-none" />
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <Footer />

        {openModal && (
          <ModalMenu setOpenModal={setOpenModal} selectedFile={selectedFile as Paquetes} />
        )}
      </div>
    </div>
			
	)
}

export default PaquetesPage