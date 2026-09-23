/**
 * useActiveSection
 *
 * Tracks which section is currently in the viewport using IntersectionObserver.
 * Returns the id of the most-visible section — used for scroll-spy in Navbar.
 *
 * @param {string[]} sectionIds - Array of section element IDs to observe
 * @param {number}   threshold  - Intersection threshold (0–1). Default 0.4
 * @returns {string} activeId   - The id of the currently active section
 */

import { useState, useEffect, useRef } from 'react'

export function useActiveSection(sectionIds, threshold = 0.35) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')
  // Track ratio per section so we can pick the highest-visibility one
  const ratioMap = useRef(Object.fromEntries(sectionIds.map((id) => [id, 0])))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratioMap.current[entry.target.id] = entry.intersectionRatio
        })

        // Pick the section with the highest current visibility ratio
        const best = Object.entries(ratioMap.current).reduce(
          (max, [id, ratio]) => (ratio > max.ratio ? { id, ratio } : max),
          { id: '', ratio: 0 },
        )

        if (best.ratio > 0) setActiveId(best.id)
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i * 0.05), // 0, 0.05, … 1.0
        rootMargin: '-10% 0px -10% 0px',
      },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds, threshold])

  return activeId
}
