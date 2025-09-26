import React from 'react'
import { Fredoka } from 'next/font/google'

const fredoka = Fredoka({ subsets: ['latin'] });

interface Props {
children: React.ReactNode
}

const Title = ({ children }: Props) => {
	return (
		<h1 className={`text-5xl text-dos-puntos-gray tracking-[.25em] font-semibold ${fredoka.className}`}>{children}</h1>
	)
}

export default Title