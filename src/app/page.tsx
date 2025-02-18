import Image from "next/image"
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { GrUserWorker } from "react-icons/gr"

export default function Home() {
	const SIZE_WP = '30px'
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 flex flex-row">
					Estamos trabajando en nuestra página web <GrUserWorker className="ml-2" />
          </li>
          <li>Si deseas contactarnos podes hacer click acá</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-green-500 text-background gap-2 hover:bg-green-400 dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://wa.me/5492994192754"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineWhatsApp size={SIZE_WP} className='text-green-300 cursor-pointer fill-current' />
            Contacto
          </a>
        </div>
      </main>
    </div>
  );
}
