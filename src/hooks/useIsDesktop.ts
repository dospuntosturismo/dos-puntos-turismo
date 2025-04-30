import { useState, useEffect } from 'react'

export const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState<boolean | null>(null)

	useEffect(() => {
		if (typeof window === 'undefined') return // Para SSR

		const match = window.matchMedia('(max-width: 767px)')
		const updateIsMobile = () => setIsMobile(match.matches)

		updateIsMobile() // Set inicial
		match.addEventListener('change', updateIsMobile)

		return () => {
			match.removeEventListener('change', updateIsMobile)
		}
	}, [])

	return { isMobile }
}
