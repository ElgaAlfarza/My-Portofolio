/**
 * useScrolled – tracks whether the user has scrolled past a threshold.
 *
 * Use in Navbar to toggle backdrop-blur + condensed height on scroll.
 *
 * @param {number} threshold - Scroll Y pixels before `scrolled` becomes true (default: 50)
 * @returns {{ scrolled: boolean }}
 *
 * Usage:
 *   const { scrolled } = useScrolled()
 *   <header className={scrolled ? 'backdrop-blur-md bg-bg/80' : ''}>
 */

import { useState, useEffect } from 'react'

export function useScrolled(threshold = 50) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)

    // Set initial state
    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return { scrolled }
}
