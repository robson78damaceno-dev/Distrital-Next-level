'use client'

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
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mb-10 py-6 px-6 border-4 border-brand-gold bg-brand-purple/30"
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
          <div className="flex flex-col items-center justify-center gap-3">
            <span className="font-pixel text-xs text-brand-gold text-center">
              QR CODE PAGAMENTO
            </span>
            <div className="border-4 border-brand-gold p-2 bg-white flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CONFIG.QR_CODE_R10}
                alt="QR Code para pagamento de R$ 10,00"
                className="w-[120px] h-[120px] object-contain"
              />
            </div>
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
