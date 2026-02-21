'use client'

import { useState, useRef, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { StartScreen } from '@/components/phases/StartScreen'
import { HUD } from '@/components/ui/HUD'
import { ParallaxBackground } from '@/components/ui/ParallaxBackground'
import { FaseSobre } from '@/components/phases/FaseSobre'
import { FaseExperiencia } from '@/components/phases/FaseExperiencia'
import { FaseGincana } from '@/components/phases/FaseGincana'
import { FaseBoss } from '@/components/phases/FaseBoss'
import { EndScreen } from '@/components/phases/EndScreen'
import { useInscricao } from '@/hooks/useInscricao'

type ModalTipo = 'r10' | 'oferta'

export default function Home() {
  const { inscrito, confirmarInscricao } = useInscricao()
  const [gameStarted, setGameStarted] = useState(false)
  const [modalAberto, setModalAberto] = useState(false)
  const [modalTipo, setModalTipo] = useState<ModalTipo>('r10')
  const modalRef = useRef<HTMLDivElement>(null)

  const abrirModal = (tipo: ModalTipo) => {
    setModalTipo(tipo)
    setModalAberto(true)
  }

  useEffect(() => {
    if (modalAberto && modalRef.current) {
      requestAnimationFrame(() => {
        modalRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      })
    }
  }, [modalAberto])

  return (
    <div className="min-h-screen relative">
      <ParallaxBackground />
      <AnimatePresence>
        {!gameStarted && (
          <StartScreen key="start" onStart={() => setGameStarted(true)} />
        )}
      </AnimatePresence>
      {gameStarted && (
        <>
          <HUD />
          <main className="pt-16">
            <FaseSobre />
            <FaseExperiencia />
            <FaseGincana />
            <FaseBoss
              inscrito={inscrito}
              onConfirmarInscricao={confirmarInscricao}
              onAbrirModal={abrirModal}
              modalAberto={modalAberto}
              modalTipo={modalTipo}
              onFecharModal={() => setModalAberto(false)}
              modalRef={modalRef}
            />
            <EndScreen />
          </main>
        </>
      )}
    </div>
  )
}
