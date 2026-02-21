'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  progress: number
  className?: string
}

export function ProgressBar({ progress, className = '' }: ProgressBarProps) {
  return (
    <div
      className={`h-3 sm:h-4 bg-brand-black/80 border-2 border-brand-gold rounded-none overflow-hidden ${className}`}
      style={{ imageRendering: 'pixelated' }}
    >
      <motion.div
        className="h-full bg-brand-gold"
        initial={{ width: 0 }}
        animate={{ width: `${progress * 100}%` }}
        transition={{ type: 'tween', duration: 0.2 }}
        style={{ originX: 0 }}
      />
    </div>
  )
}
