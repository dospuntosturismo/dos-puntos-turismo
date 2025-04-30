// components/Modal.tsx
'use client'; // si estás en Next 13+ y usas App Router

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { Fredoka } from 'next/font/google'

const fredoka = Fredoka({ subsets: ['latin'] });

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	const SIZE = '24px'
	const COLOR = 'green'
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-dos-puntos-pink text-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-row mt-2">
									<div className={`flex flex-col items-center justify-center ${fredoka.className}`}>
									<div className='relative flex px-2 py-1 text-sm text-white bg-transparent border border-transparent rounded-md focus:outline-none'>
										<AiOutlineWhatsApp className='mr-2' size={SIZE} color={COLOR} />
										<a className='text-sm' target='_blank' rel="noreferrer" href='https://wa.me/5492994192754'>+54 9 299 419 2754</a>
									</div>
										<a href='mailto:info@dospuntosturismo.com.ar' className="text-sm text-center text-white">
										info@dospuntosturismo.com.ar
										</a>
										<a className='text-sm' href='https://dospuntosturismo.com.ar'>www.dospuntosturismo.com.ar</a>
									</div>
									<div>
										<img src='/logotipo_blanco.png' alt='Logo' />
									</div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-dos-puntos-gray px-4 py-2 text-sm font-medium text-white"
                    onClick={onClose}
                  >
                    Cerrar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
