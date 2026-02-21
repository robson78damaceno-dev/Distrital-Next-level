'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PixelCard } from '@/components/ui/PixelCard'

const CARDS = [
  {
    title: 'Adoração',
    icon: '♪',
    frase: 'A adoração nos leva a um novo nível de intimidade com Deus. É no louvor que o coração se abre e a presença dEle se manifesta.',
  },
  {
    title: 'Palavra',
    icon: '📖',
    frase: 'A Palavra de Deus é viva e transformadora. Ela renova a mente, fortalece a fé e nos guia para o próximo nível.',
  },
  {
    title: 'Comunhão',
    icon: '🤝',
    frase: 'A comunhão entre irmãos fortalece a caminhada. Juntos somos mais fortes para avançar na fé.',
  },
  {
    title: 'Oração',
    icon: '✝',
    frase: 'A oração é a ponte entre a nossa alma e o coração de Deus. É no secreto que a intimidade cresce.',
  },
]

export function FaseExperiencia() {
  const [abertos, setAbertos] = useState<Record<string, boolean>>({})

  const toggleModal = (title: string) => {
    setAbertos((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  const fecharModal = (title: string) => {
    setAbertos((prev) => ({ ...prev, [title]: false }))
  }

  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-brand-black/60 flex items-center">
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="font-pixel text-2xl sm:text-3xl lg:text-4xl text-brand-gold mb-12 sm:mb-16 text-center"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          FASE 2 — EXPERIÊNCIA
        </motion.h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'tween', duration: 0.3, delay: i * 0.1 }}
              className="flex flex-col gap-4 w-full"
            >
              <button
                type="button"
                onClick={() => toggleModal(card.title)}
                className="w-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold shrink-0"
              >
                <PixelCard className="text-center min-h-[180px] sm:min-h-[220px] flex flex-col items-center justify-center cursor-pointer">
                  <span className="text-6xl sm:text-7xl lg:text-8xl block mb-4">{card.icon}</span>
                  <h3 className="font-pixel text-base sm:text-lg text-brand-gold">{card.title.toUpperCase()}</h3>
                </PixelCard>
              </button>
              <AnimatePresence>
                {abertos[card.title] && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="w-full shrink-0"
                  >
                    <div className="border-4 border-brand-gold bg-brand-black/95 p-4 sm:p-5 min-h-[180px] sm:min-h-[200px] flex flex-col">
                      <div className="flex justify-between items-start gap-2 mb-3">
                        <h4 className="font-pixel text-xs sm:text-sm text-brand-gold shrink-0">
                          {card.title.toUpperCase()}
                        </h4>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            fecharModal(card.title)
                          }}
                          className="p-1 text-brand-white/60 hover:text-brand-gold focus:outline-none shrink-0"
                          aria-label="Fechar"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <p className="font-body text-brand-white text-sm sm:text-base leading-relaxed flex-1">
                        {card.frase}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
