'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { InscricaoForm } from '@/components/InscricaoForm'
import { BotoesPagamento } from '@/components/BotoesPagamento'
import { ModalQRCode } from '@/components/ModalQRCode'
import { CoinMario } from '@/components/ui/CoinMario'
import { CONFIG } from '@/lib/config'

type ModalTipo = 'r10' | 'oferta'

interface FaseBossProps {
  inscrito: boolean
  onConfirmarInscricao: () => void
  onAbrirModal: (tipo: ModalTipo) => void
  modalAberto: boolean
  modalTipo: ModalTipo
  onFecharModal: () => void
  modalRef: React.RefObject<HTMLDivElement>
}

export function FaseBoss({ inscrito, onConfirmarInscricao, onAbrirModal, modalAberto, modalTipo, onFecharModal, modalRef }: FaseBossProps) {
  const [copiado, setCopiado] = useState(false)
  const pixR10 = CONFIG.PIX_COPY_R10

  const copiarPix = () => {
    if (!pixR10) return
    const ok = () => {
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    }
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(pixR10).then(ok).catch(() => fallbackCopy())
    } else {
      fallbackCopy()
    }
    function fallbackCopy() {
      const textarea = document.createElement('textarea')
      textarea.value = pixR10
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      try {
        document.execCommand('copy')
        ok()
      } finally {
        document.body.removeChild(textarea)
      }
    }
  }

  return (
    <section
      id="inscricao"
      className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-brand-black/60 flex items-center scroll-mt-20"
    >
      <div className="w-full max-w-2xl mx-auto">
        <motion.h2
          className="font-pixel text-2xl sm:text-3xl text-brand-gold mb-6 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          INSCREVER-SE
        </motion.h2>
        <motion.p
          className="font-body text-brand-white text-xl text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Chegou a hora de garantir sua vaga!
        </motion.p>
        <motion.div
          className="flex flex-col items-center justify-center gap-6 mb-10 py-6 px-6 border-4 border-brand-gold bg-brand-purple/30"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <CoinMario size={40} />
            <span className="font-pixel text-sm sm:text-base text-brand-gold text-center">
              TAXA DE INSCRIÇÃO: R$ 10,00
            </span>
            <CoinMario size={40} />
          </div>
          <div className="flex flex-col items-center justify-center gap-3 w-full max-w-xs">
            <span className="font-pixel text-xs text-brand-gold text-center">
              QR CODE PAGAMENTO — TAXA DE INSCRIÇÃO R$ 10,00
            </span>
            <div className="border-4 border-brand-gold p-2 bg-white flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CONFIG.QR_CODE_R10}
                alt="QR Code para pagamento de R$ 10,00"
                className="w-[120px] h-[120px] object-contain"
              />
            </div>
            {pixR10 && (
              <div className="w-full">
                <p className="font-body text-brand-white/80 text-center text-xs mb-2">
                  Código PIX (copia e cola):
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={pixR10}
                    className="flex-1 min-w-0 px-3 py-2 border-2 border-brand-gold bg-brand-black text-brand-white text-[10px] sm:text-xs font-mono truncate"
                    aria-label="Código Pix"
                  />
                  <button
                    type="button"
                    onClick={copiarPix}
                    className="shrink-0 px-3 py-2 border-2 border-brand-gold bg-brand-gold text-brand-black font-pixel text-xs hover:bg-brand-white transition-colors"
                  >
                    {copiado ? 'Copiado!' : 'Copiar'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          <InscricaoForm onConfirmado={onConfirmarInscricao} inscrito={inscrito} />
          <BotoesPagamento inscrito={inscrito} onAbrirModal={onAbrirModal} />
          <ModalQRCode
            aberto={modalAberto}
            tipo={modalTipo}
            onFechar={onFecharModal}
            modalRef={modalRef}
          />
        </motion.div>
      </div>
    </section>
  )
}
