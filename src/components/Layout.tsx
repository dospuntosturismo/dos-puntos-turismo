import React, { JSX } from 'react'

interface Props {
	children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {

	return (
			<main className='min-h-screen'>
					<div >
						{children}
					</div>
			</main>
	)
}

export default Layout
