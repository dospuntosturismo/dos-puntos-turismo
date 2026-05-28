"use client"
import { Fredoka } from 'next/font/google'
import { IoMdTime, IoMdArrowForward } from "react-icons/io"

const fredoka = Fredoka({ subsets: ['latin'] });

interface CardProps {
    title: string;
    price: number;
    duration: string;
    location: string;
    info: string;
    image: string;
    onClick?: () => void;
}

const Card = ({ title, price, duration, location, info, image, onClick }: CardProps) => {
    const SIZE = '30px'
    return (
        <article className="group rounded-xl overflow-hidden bg-surface border border-outline-variant hover:shadow-xl transition-all duration-300 flex flex-col">
<div className="relative h-64 overflow-hidden">
<img alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt={info} src={image}/>
<div className="absolute top-4 left-4 flex flex-col gap-2">
<span className={`bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-label-sm ${fredoka.className}`}>{location}</span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2 space-x-2">
<h3 className={`text-headline-md font-headline-md text-on-surface ${fredoka.className}`}>{title}</h3>
<span className={`text-primary font-bold text-headline-md ${fredoka.className}`}>{price.toLocaleString()}</span>
</div>
<p className={`text-body-md font-body-md text-on-surface-variant mb-6 line-clamp-2 ${fredoka.className}`}>{info}</p>
<div className="mt-auto flex items-center justify-between border-t border-outline-variant pt-4">
<div className="flex items-center text-on-surface-variant gap-1">
<span className="material-symbols-outlined text-sm" data-icon="schedule"><IoMdTime className='text-primary fill-current' size={SIZE} /></span>
<span className={`text-label-sm font-label-sm ${fredoka.className}`}>{duration}</span>
</div>
<button  onClick={onClick} className="text-primary font-label-md text-label-md font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Ver Detalles <span className="material-symbols-outlined text-sm" data-icon="arrow_forward"><IoMdArrowForward className='text-primary fill-current' size={SIZE} /></span>
</button>
</div>
</div>
</article>
    )
}

export default Card