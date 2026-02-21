'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { StartScreen } from '@/components/phases/StartScreen'
import { HUD } from '@/components/ui/HUD'
import { ParallaxBackground } from '@/components/ui/ParallaxBackground'
import { FaseSobre } from '@/components/phases/FaseSobre'
import { FaseExperiencia } from '@/components/phases/FaseExperiencia'
import { FaseGincana } from '@/components/phases/FaseGincana'
import { FaseBoss } from '@/components/phases/FaseBoss'
import { EndScreen } from '@/components/phases/EndScreen'
import { PopupQRCode } from '@/components/PopupQRCode'
import { useInscricao } from '@/hooks/useInscricao'

type PopupTipo = 'r10' | 'oferta'

export default function Home() {
  const { inscrito, confirmarInscricao } = useInscricao()
  const [gameStarted, setGameStarted] = useState(false)
  const [popupAberto, setPopupAberto] = useState(false)
  const [popupTipo, setPopupTipo] = useState<PopupTipo>('r10')

  const abrirPopup = (tipo: PopupTipo) => {
    setPopupTipo(tipo)
    setPopupAberto(true)
  }

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
              onAbrirPopup={abrirPopup}
            />
            <EndScreen />
          </main>
          <PopupQRCode
            aberto={popupAberto}
            tipo={popupTipo}
            onFechar={() => setPopupAberto(false)}
          />
        </>
      )}
    </div>
  )
}
