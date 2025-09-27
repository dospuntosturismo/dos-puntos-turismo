'use client'
import React from 'react'
import { useIsMobile } from '@hooks/useIsDesktop'
import NosotrosMobile from '@components/NosotrosMobile'
import Nosotros from '@components/Nosotros'

const NosotrosPage = () => {
	const { isMobile } = useIsMobile()
	return (
		<>
		{isMobile ? (
			<NosotrosMobile />
		): (
			<Nosotros />
		)}
		</>
	)
}

export default NosotrosPage