'use client'
import React, { useState } from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Modal from '@components/Modal'
import { useForm } from 'react-hook-form'
import { Fredoka } from 'next/font/google'

const alphapipeFont = localFont({ src: '../../../public/fonts/BC Alphapipe RB Regular.ttf' })
const fredoka = Fredoka({ subsets: ['latin'] })

type ContactForm = {
  nombre: string
  phone?: string
  city?: string
  pais?: string
  email: string
  comments: string
}

export default function Contacto() {
  const [openModal, setOpenModal] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ mode: 'onTouched' })

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      // A prueba de backends que no devuelven JSON o devuelven otro shape
      const json = await res.json().catch(() => ({} as unknown))
      if (!res.ok || (json && json.ok === false)) {
        throw new Error(json?.message || json?.error || 'Ocurrió un error al enviar tu mensaje')
      }
      setOpenModal(true)
    } catch (err: unknown) {
      alert((err as Error)?.message ?? 'Error al enviar mensaje')
    }
  })

  const labelBase = `block text-white text-sm sm:text-base mb-1 ${fredoka.className}`
  const inputBase =
    'w-full bg-transparent border-b-2 border-white/80 text-white placeholder-white/60 focus:outline-none focus:border-white transition'
  const inputError = 'border-red-300 focus:border-red-300'
  const helpError = 'text-red-200 text-xs mt-1'

  return (
    <>
      <main className="w-full min-h-[100svh] bg-white relative">
        <Header />

        <div className="mx-auto w-full max-w-3xl md:max-w-5xl px-4 sm:px-6 md:px-8 pt-28 pb-16">
          <form
            onSubmit={onSubmit}
            className="w-full bg-dos-puntos-blue text-white rounded-2xl p-5 sm:p-8 md:p-10 shadow-md"
            noValidate
          >
            {/* Título */}
            <div className="flex items-center justify-between gap-4 mb-8">
              <h1 className={`text-3xl sm:text-4xl md:text-5xl ${alphapipeFont.className}`}>Hablemos</h1>
              <Image
                src="/Elementos gráficos-01.png"
                alt="Elemento decorativo"
                width={80}
                height={80}
                className="w-12 sm:w-16 h-auto"
                sizes="(max-width: 640px) 48px, 64px"
              />
            </div>

            {/* Nombre */}
            <div className="mb-6">
              <label htmlFor="nombre" className={labelBase}>
                Nombre y apellido *
              </label>
              <input
                id="nombre"
                type="text"
                autoComplete="name"
                className={`${inputBase} ${errors.nombre ? inputError : ''}`}
                aria-invalid={!!errors.nombre}
                {...register('nombre', {
                  required: 'Ingresá tu nombre y apellido',
                  minLength: { value: 2, message: 'Demasiado corto' },
                })}
              />
              {errors.nombre && <p className={helpError}>{errors.nombre.message}</p>}
            </div>

            {/* Teléfono */}
            <div className="mb-6">
              <label htmlFor="phone" className={labelBase}>
                Celular
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                className={inputBase}
                placeholder="+54 9 ..."
                {...register('phone', {
                  pattern: { value: /^[\d+()\s-]{6,20}$/, message: 'Teléfono no válido' },
                })}
              />
              {errors.phone && <p className={helpError}>{errors.phone.message}</p>}
            </div>

            {/* Ciudad / País */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="city" className={labelBase}>
                  Ciudad
                </label>
                <input
                  id="city"
                  type="text"
                  autoComplete="address-level2"
                  className={inputBase}
                  {...register('city')}
                />
              </div>
              <div>
                <label htmlFor="pais" className={labelBase}>
                  País
                </label>
                <input
                  id="pais"
                  type="text"
                  autoComplete="country-name"
                  className={inputBase}
                  {...register('pais')}
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className={labelBase}>
                Email *
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={`${inputBase} ${errors.email ? inputError : ''}`}
                aria-invalid={!!errors.email}
                {...register('email', {
                  required: 'Ingresá tu email',
                  pattern: {
                    value:
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email no válido',
                  },
                })}
              />
              {errors.email && <p className={helpError}>{errors.email.message}</p>}
            </div>

            {/* Comentarios */}
            <div className="mb-8">
              <label htmlFor="comments" className={labelBase}>
                Mensaje *
              </label>
              <textarea
                id="comments"
                rows={4}
                className={`w-full bg-transparent border-2 border-white/80 rounded-md p-3 text-white placeholder-white/60 focus:outline-none focus:border-white transition ${
                  errors.comments ? inputError : ''
                }`}
                aria-invalid={!!errors.comments}
                placeholder="Contanos qué estás buscando…"
                {...register('comments', {
                  required: 'Dejanos tu mensaje',
                  minLength: { value: 5, message: 'Contanos un poco más :)' },
                })}
              />
              {errors.comments && <p className={helpError}>{errors.comments.message}</p>}
            </div>

            {/* Submit */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center px-6 py-2 border border-white rounded-xl ${fredoka.className} disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white`}
              >
                {isSubmitting ? 'Enviando…' : 'Enviar'}
              </button>
            </div>
          </form>
        </div>

        <Footer />
      </main>

      {/* Modal de éxito */}
      <Modal isOpen={openModal} className="bg-dos-puntos-blue" onClose={() => setOpenModal(false)}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <h2 className={`${alphapipeFont.className} text-2xl sm:text-4xl text-center`}>
            ¡Gracias! <br /> Te respondemos a la brevedad
          </h2>
          <Image src="/Elementos gráficos-01.png" alt="Elemento" width={100} height={100} />
        </div>
        <div className="mt-4 flex items-center justify-center">
          <button
            type="button"
            className="text-white px-4 py-2 border border-white rounded-md"
            onClick={() => setOpenModal(false)}
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </>
  )
}
