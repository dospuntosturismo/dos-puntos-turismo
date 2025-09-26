import React, { JSX } from 'react'
import Footer from './Footer'

interface Props {
	children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {

	return (
			<main className='min-h-screen flex flex-col items-center'>
					<div className='mt-10'>
						{children}
					</div>
					<Footer />
			</main>
	)
}

export default Layout
