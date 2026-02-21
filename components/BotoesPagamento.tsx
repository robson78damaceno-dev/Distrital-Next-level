'use client'

import { motion } from 'framer-motion'
import { PixelButton } from '@/components/ui/PixelButton'
import { CoinMario } from '@/components/ui/CoinMario'

type PopupTipo = 'r10' | 'oferta'

interface BotoesPagamentoProps {
  inscrito: boolean
  onAbrirPopup: (tipo: PopupTipo) => void
}

export function BotoesPagamento({ inscrito, onAbrirPopup }: BotoesPagamentoProps) {
  if (!inscrito) return null

  return (
    <motion.section
      className="py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-pixel text-sm text-brand-gold text-center mb-6">
        ESCOLHA A FORMA DE PAGAMENTO
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <PixelButton onClick={() => onAbrirPopup('r10')} className="w-full flex items-center justify-center gap-2">
          <CoinMario size={28} />
          R$ 10,00
        </PixelButton>
        <PixelButton onClick={() => onAbrirPopup('oferta')} className="w-full">
          OFERTA VOLUNTÁRIA
        </PixelButton>
      </div>
    </motion.section>
  )
}
