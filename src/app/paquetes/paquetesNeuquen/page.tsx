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
import Card from '@components/Card'

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
      .from('packages')
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

  // const arrayPrueba = [
  //   {
  //     id: 1,
  //     title: 'Patagonian Ice Fields',
  //     info: 'An epic 8-day expedition across the massive Perito Moreno and Upsala glaciers with expert mountain guides.',
  //     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJAp397lPKDnUiUOi7qB4TrCTo1YlpsRltxdQBcYHOc30U3AfLcHch0BWbtsJfKr933x3cVYum5fYs2sDajja4oZ1GjqZBMdwOGj9xSLLZyjq7VYLf_Q5M2s5brff-u-CjgtxcIKI1j1uZ5fe955uvcrDEFFOWBCCo3j_Pix67JZ4hJCb8AzG2IEcgFiyYkaLGa8UKJ0NFrxsUc866I0qlpifMarZZkJbUxYJvCZCWSurgzRH_jceZ_KhBwJTuLLeQwvfpBQ3_Jkbr",
  //     price: 2450,
  //     duration: '8 Days',
  //     location: 'Santa Cruz'
  //   }, {
  //     id: 2,
  //     title: 'Seven Lakes Route',
  //     info: 'A luxury road trip through the heart of the Lake District, staying at exclusive lodges and tasting local delicacies.',
  //     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUB9ihxgFDOrUgWwmL--zRi1pz50H2Tzb0Yte8zBVPubYStDnCUZKs9sNilaDzCHmPJafmzYKgM2FV4fdAs2EXDEpO7HoUEfhK7sWxdd42kye3Q0CeUEw_vcXBH8xOeb7lqlxe3EduUReChJqlk548rcNt6W0mfImATJTg6elGzfXY2z6RPB1VcikA-CvJALG647BDlB3qj0yiYIXZw62KwSWl5gjFaTWRoJw0E4gtJeXuI8pAuCTB_GB-Q59Yaxlq4kaN2Kqk9k8V",
  //     price: 1890,
  //     duration: '5 Days',
  //     location: 'Neuquén'
  //   },
  //   {
  //     id: 3,
  //     title: 'Torres del Paine',
  //     info: 'Complete W-Circuit trekking experience with luxury camping and gourmet meals under the stars.',
  //     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdtv6Gynd0E53xnC4Fg15y9AVtpcPv9iZLSMxIZslzPd3U75-e90RQGaeofUilc_AgS39ucRSVD3VEUfOlDXBgXUGoHyCTqiVqwHjUjIUow-RJD8mS4GUDS3TD_bgi0ypSrPh41g-i0bzlt-fgJjUTOZP3yFwpYFSwiRfTDV7z2bl7q25fZEUgQehh-n-TkFrWv3ZOQ6M8G4b2Kr_E1ovqccjU5210bZ1alLHUeskjKVecUwtdy8y8L-JxwF6YZdvjxPXZnc5dEL3X",
  //     price: 3200,
  //     duration: '10 Days',
  //     location: 'Chile'
  //   },
  //   {
  //     id: 4,
  //     title: 'Ushuaia: End of World',
  //     info: 'Sail the Beagle Channel and explore Tierra del Fuego National Park on this immersive southern journey.',
  //     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7e8YkatS7KVPN-xjS3dRNsig3YokT5OsB92-bLiuxg-j2drotvXu_kAOJdtCpMThiI66ZFjURj5UX48TIfkxPDtn6SMOmLRbutSQlEYodHRNwBx-2yf3HtCDAlQbkrj4ehIKYlZEvySdLPGlTfE8PykhKBPZvFWAP8TXK8tOgXlVLvOq87uBjvsnJiawZSyZKwkcg-rS-nmYLDJ5Fq3OJn6qkpvuDU9z3hJSrnCGD24ktuae7Q-1SkBVWs3s3249EZfhqjGebtTeS",
  //     price: 1600,
  //     duration: '4 Days',
  //     location: 'Tierra del Fuego'
  //   }
  // ]
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
              {paquetesList.map((item) => (
                <Card key={item.id} onClick={() => handleModal(item)} title={item.title} image={item.image} price={item.price} duration={item.duration} location={item.location} info={item.info} />
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