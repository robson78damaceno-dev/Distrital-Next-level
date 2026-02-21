'use client'

import { motion } from 'framer-motion'

interface StartScreenProps {
  onStart: () => void
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40 flex flex-col items-center justify-center min-h-screen bg-brand-black cursor-pointer gap-16 sm:gap-20 md:gap-24 px-4"
      onClick={onStart}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h1
        className="font-pixel text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-gold text-center leading-tight"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, type: 'tween' }}
      >
        NEXT LEVEL
      </motion.h1>
      <motion.p
        className="font-pixel text-xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-white"
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        PRESS START
      </motion.p>
    </motion.div>
  )
}
