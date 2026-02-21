'use client'

import { motion } from 'framer-motion'

interface PixelButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  disabled?: boolean
}

export function PixelButton({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: PixelButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`font-pixel text-sm sm:text-base px-6 py-3 border-4 border-brand-gold bg-brand-purple text-brand-gold hover:bg-brand-gold hover:text-brand-black disabled:opacity-50 ${className}`}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'tween', duration: 0.05 }}
    >
      {children}
    </motion.button>
  )
}
