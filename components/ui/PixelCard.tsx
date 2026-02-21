'use client'

import { motion } from 'framer-motion'

interface PixelCardProps {
  children: React.ReactNode
  className?: string
}

export function PixelCard({ children, className = '' }: PixelCardProps) {
  return (
    <motion.div
      className={`border-4 border-brand-gold bg-brand-black/90 p-6 sm:p-8 ${className}`}
      style={{ imageRendering: 'pixelated' }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'tween', duration: 0.1 }}
    >
      {children}
    </motion.div>
  )
}
