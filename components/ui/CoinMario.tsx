'use client'

import { motion } from 'framer-motion'

interface CoinMarioProps {
  size?: number
  className?: string
}

/**
 * Moeda 8-bit estilo pixel art (Super Mario / NES).
 * Desenho em grid de pixels.
 */
export function CoinMario({ size = 48, className = '' }: CoinMarioProps) {
  // Sprite 16x16 - moeda 8-bit (1=gold, 2=highlight, 3=shadow)
  const sprite = [
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 3, 3, 0, 0, 0, 0],
  ]

  const colors: Record<number, string> = {
    0: 'transparent',
    1: '#FFD700', // gold
    2: '#FFEC8B', // highlight
    3: '#B8860B', // shadow/dark gold
  }

  return (
    <motion.div
      className={`inline-block ${className}`}
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
      style={{ width: size, height: size, imageRendering: 'pixelated' }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        className="drop-shadow-md"
        style={{ imageRendering: 'pixelated' }}
      >
        {sprite.map((row, y) =>
          row.map((cell, x) =>
            cell > 0 ? (
              <rect
                key={`${x}-${y}`}
                x={x}
                y={y}
                width={1}
                height={1}
                fill={colors[cell]}
              />
            ) : null
          )
        )}
      </svg>
    </motion.div>
  )
}
