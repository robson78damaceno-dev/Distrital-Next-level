'use client'

interface QRCodePlaceholderProps {
  size?: number
  className?: string
}

/**
 * Placeholder de QR code para substituir pela imagem real.
 * Padrão simulado - substitua por /qr-code.svg ou sua imagem.
 */
export function QRCodePlaceholder({ size = 160, className = '' }: QRCodePlaceholderProps) {
  const modules = 21
  const cellSize = size / modules

  // Padrão que lembra QR code (canto superior esquerdo, direito, inferior esquerdo)
  const isBlack = (row: number, col: number) => {
    // Bordas
    if (row === 0 || row === modules - 1 || col === 0 || col === modules - 1) return true
    // Padrão dos cantos (como QR real)
    if (row < 7 && col < 7) return row % 2 === 0 || col % 2 === 0
    if (row < 7 && col >= modules - 7) return row % 2 === 0 || (modules - 1 - col) % 2 === 0
    if (row >= modules - 7 && col < 7) return (modules - 1 - row) % 2 === 0 || col % 2 === 0
    // Padrão central simulado
    return (row + col) % 3 === 0 || (row * col) % 5 === 0
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`bg-white p-2 ${className}`}
      style={{ imageRendering: 'pixelated' }}
    >
      {Array.from({ length: modules }).map((_, row) =>
        Array.from({ length: modules }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={col * cellSize}
            y={row * cellSize}
            width={cellSize}
            height={cellSize}
            fill={isBlack(row, col) ? '#000' : '#fff'}
          />
        ))
      )}
    </svg>
  )
}
