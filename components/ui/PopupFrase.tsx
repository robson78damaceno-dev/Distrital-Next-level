'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PopupFraseProps {
  aberto: boolean
  titulo: string
  frase: string
  onFechar: () => void
}

export function PopupFrase({ aberto, titulo, frase, onFechar }: PopupFraseProps) {
  useEffect(() => {
    if (!aberto) return
    const handleEscape = (e: KeyboardEvent) => e.key === 'Escape' && onFechar()
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [aberto, onFechar])

  return (
    <AnimatePresence>
      {aberto && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/80 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onFechar}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-frase-titulo"
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-2rem)] max-w-lg bg-brand-black border-4 border-brand-gold p-6 sm:p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start gap-4 mb-6">
              <h2 id="popup-frase-titulo" className="font-pixel text-sm sm:text-base text-brand-gold">
                {titulo.toUpperCase()}
              </h2>
              <button
                type="button"
                onClick={onFechar}
                className="p-2 text-brand-white/60 hover:text-brand-gold border-2 border-transparent hover:border-brand-gold transition-colors focus:outline-none shrink-0"
                aria-label="Fechar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="font-body text-brand-white text-lg sm:text-xl leading-relaxed">
              {frase}
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
