'use client'
import React, { useState } from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
import Header from '@components/Header'
import { useForm } from 'react-hook-form'
import { Fredoka } from 'next/font/google'
import Footer from '@components/Footer'
import Modal from '@components/Modal'
const alphapipeFont = localFont({
	src: '../../../public/fonts/BC Alphapipe RB Regular.ttf',
})
const fredoka = Fredoka({ subsets: ['latin'] })

type ContactForm = {
  nombre: string
  phone?: string
  city?: string
  pais?: string
  email: string
  comments: string
}


const Contacto = () => {
	const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm<ContactForm>()
	const [openModal, setOpenModal] = useState(false)

	const onSubmit =  handleSubmit(async (data) => {
		try {
			console.log('data', data)
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
			})
			const json = await res.json()

			console.log('json', json)

			if(!res.ok || !json.ok) throw new Error(json.messagge || 'Ocurrió un error al enviar tu mensaje')
				setOpenModal(true)
		} catch (error: unknown) {
			if (typeof error === 'object' && error !== null && 'message' in error) {
				alert((error as { message?: string }).message || 'Error al enviar mensaje')
			} else {
				alert('Error al enviar mensaje')
			}
		}
	})

	const styleInput = 'border-b-2 bg-transparent border-white w-10/12 text-white focus:outline-none'
	const styleLabel = `${fredoka.className} text-lg self-start text-white ml-24 mb-6`
	return (
		<>
		<div className='w-full h-screen flex flex-col items-center bg-white relative'>
				<Header />
				<div className='flex flex-col items-center w-9/12'>
					<form onSubmit={onSubmit} className='w-full h-auto mt-10 mb-20 flex flex-col items-center justify-center bg-dos-puntos-blue rounded-lg p-6'>
						<div className='flex flex-row items-center justify-center space-x-20 mb-20'>
							<h1 className={`text-5xl ${alphapipeFont.className}`}>Hablemos</h1>
							<Image src='/Elementos gráficos-01.png' alt='Elemento 1' width={80} height={80} />
						</div>
							<input type='text' className={styleInput} placeholder='' {...register('nombre')}/>
							<label className={styleLabel}>
							Nombre y apellido
						</label>
						<input type='text' className={styleInput} {...register('phone')} />
						<label className={styleLabel}>Celular</label>
						<div className='flex flex-row items-center justify-center space-x-4 w-full mx-10 mb-10'>
							<div className='w-[40%]'>
								<input type='text' className='border-b-2 bg-transparent border-white w-full text-white focus:outline-none' {...register('city')}/>
								<label className={`${fredoka.className} text-lg self-start text-white`}>Ciudad</label>
							</div>
							<div className='w-[40%]'>
								<input type='text' className='border-b-2 bg-transparent border-white w-full text-white focus:outline-none' {...register('pais')}/>
								<label className={`${fredoka.className} text-lg self-start text-white`}>País</label>
							</div>
						</div>
						<input type='text' className={styleInput} {...register('email')}/>
						<label className={styleLabel}>Email</label>
						{errors.email && <p className='text-red-200 -mt-5 mb-4'>{errors.email.message}</p>}
						<textarea {...register('comments')} className='border border-white w-10/12 h-20 mt-6 bg-transparent p-2 text-white' />
						<label className={`${fredoka.className} text-lg self-start text-white ml-24`}>Contacto</label>
						{errors.comments && <p className='text-red-200 mt-2'>{errors.comments.message}</p>}
						<div className='flex items-center justify-center'>
							<button type='submit' 
							disabled={isSubmitting}
							className={`px-6 py-2 text-white border border-white ${fredoka.className} disabled:opacity-60`}>
								{isSubmitting ? 'Enviando…' : 'Enviar'}
								</button>
						</div>
					</form>
				</div>
				<Footer />
				</div>
				<Modal isOpen={openModal} className='bg-dos-puntos-blue' onClose={() => setOpenModal(false)}>
					<div className='flex flex-row items-center justify-center space-x-4'>
					<h1 className={`${alphapipeFont.className} text-4xl`}>Te respondemos <br/> a la brevedad</h1>
					<Image src='/Elementos gráficos-01.png' alt='Elemento 1' width={100} height={100} />
					</div>
					<div className='mt-4 flex items-center justify-center'>
						<button type='button' className='text-white px-4 py-2 border border-white' onClick={() => setOpenModal(false)}>Cerrar</button>
					</div>
					</Modal>
			</>
	)
}

export default Contacto