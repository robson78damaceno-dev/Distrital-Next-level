/**
 * Sprite pixel art Barquinho - 16x16 pixels
 * Estilo: 8-bit NES/GameBoy
 * Perspectiva: lateral (side view)
 * Paleta: máx 8 cores, fundo transparente
 */
export function BarquinhoSprite({
  className,
  size = 16,
}: {
  className?: string
  size?: number
}) {
  // Paleta: marrom escuro, marrom médio, marrom claro, branco, azul água
  const DARK = '#4A3728'   // casco base
  const BROWN = '#6B4423' // mastro, casco
  const LIGHT = '#8B5A2B' // destaque volume
  const WHITE = '#FFFFFF' // vela
  const WATER = '#075985' // reflexo/sombra água

  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      className={className}
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Vela triangular - branca */}
      <rect x={5} y={2} width={1} height={1} fill={WHITE} />
      <rect x={4} y={3} width={3} height={1} fill={WHITE} />
      <rect x={3} y={4} width={5} height={1} fill={WHITE} />
      <rect x={3} y={5} width={5} height={1} fill={WHITE} />

      {/* Mastro - marrom (conecta vela ao casco) */}
      <rect x={5} y={6} width={1} height={1} fill={BROWN} />
      <rect x={5} y={7} width={1} height={1} fill={BROWN} />
      <rect x={5} y={8} width={1} height={1} fill={BROWN} />

      {/* Casco - marrom escuro com destaque para volume */}
      <rect x={6} y={8} width={1} height={1} fill={BROWN} />
      <rect x={7} y={8} width={1} height={1} fill={DARK} />
      <rect x={8} y={8} width={1} height={1} fill={DARK} />
      <rect x={9} y={8} width={1} height={1} fill={DARK} />
      <rect x={6} y={9} width={1} height={1} fill={DARK} />
      <rect x={7} y={9} width={1} height={1} fill={DARK} />
      <rect x={8} y={9} width={1} height={1} fill={DARK} />
      <rect x={9} y={9} width={1} height={1} fill={DARK} />
      <rect x={10} y={9} width={1} height={1} fill={DARK} />
      <rect x={11} y={9} width={1} height={1} fill={DARK} />
      <rect x={5} y={10} width={1} height={1} fill={DARK} />
      <rect x={6} y={10} width={1} height={1} fill={DARK} />
      <rect x={7} y={10} width={1} height={1} fill={LIGHT} />
      <rect x={8} y={10} width={1} height={1} fill={DARK} />
      <rect x={9} y={10} width={1} height={1} fill={DARK} />
      <rect x={10} y={10} width={1} height={1} fill={DARK} />
      <rect x={11} y={10} width={1} height={1} fill={DARK} />
      <rect x={12} y={10} width={1} height={1} fill={DARK} />
      <rect x={6} y={11} width={1} height={1} fill={DARK} />
      <rect x={7} y={11} width={1} height={1} fill={DARK} />
      <rect x={8} y={11} width={1} height={1} fill={LIGHT} />
      <rect x={9} y={11} width={1} height={1} fill={DARK} />
      <rect x={10} y={11} width={1} height={1} fill={DARK} />
      <rect x={11} y={11} width={1} height={1} fill={DARK} />
      <rect x={12} y={11} width={1} height={1} fill={DARK} />

      {/* Água - sombra/reflexo azul (2-3 pixels) */}
      <rect x={10} y={14} width={1} height={1} fill={WATER} />
      <rect x={11} y={14} width={1} height={1} fill={WATER} />
      <rect x={11} y={15} width={1} height={1} fill={WATER} />
    </svg>
  )
}
