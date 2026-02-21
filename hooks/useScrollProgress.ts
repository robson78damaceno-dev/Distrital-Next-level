'use client'

import { useState, useEffect } from 'react'

const PHASE_NAMES = ['Fase 1', 'Fase 2', 'Fase 3', 'Inscrição', 'End']

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [currentPhase, setCurrentPhase] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const p = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0
      setProgress(p)

      // 5 fases: 0-4
      const phaseIndex = Math.min(Math.floor(p * 5), 4)
      setCurrentPhase(phaseIndex)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return {
    progress,
    currentPhase,
    phaseName: PHASE_NAMES[currentPhase],
  }
}
