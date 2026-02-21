'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CONFIG } from '@/lib/config'
import { PixelButton } from '@/components/ui/PixelButton'

interface InscricaoFormProps {
  onConfirmado: () => void
  inscrito: boolean
}

const inputClass =
  'w-full px-4 py-3 border-4 border-brand-gold bg-brand-black text-brand-white placeholder-brand-white/50 focus:outline-none focus:border-brand-purple font-body'

export function InscricaoForm({ onConfirmado, inscrito }: InscricaoFormProps) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [erro, setErro] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErro(null)
    setEnviando(true)

    try {
      const web3Key = CONFIG.WEB3FORMS_ACCESS_KEY?.trim()
      const formEmail = CONFIG.FORMSUBMIT_EMAIL?.trim()

      if (web3Key) {
        // Web3Forms - 250/mês grátis, confiável
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: web3Key,
            subject: 'Nova inscrição - Next level',
            nome,
            email,
            telefone,
            replyto: email,
            botcheck: '',
          }),
        })
        const data = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string }
        if (!data.success) throw new Error(data.message || 'Falha ao enviar')
      } else if (formEmail) {
        const payload: Record<string, string> = {
          nome,
          email,
          telefone,
          _subject: 'Nova inscrição - Next level',
          _replyto: email,
        }
        if (typeof window !== 'undefined') {
          payload._url = window.location.origin + window.location.pathname
        }
        const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(formEmail)}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        })
        const data = await res.json().catch(() => ({}))
        if (!res.ok) throw new Error((data as { message?: string })?.message || 'Falha ao enviar')
      } else {
        throw new Error('Configure NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY no .env.local (pegue em web3forms.com)')
      }

      setEnviado(true)
      onConfirmado()
    } catch {
      setErro('Não foi possível enviar. Confirme sua inscrição abaixo para continuar.')
      setEnviado(true)
      onConfirmado()
    } finally {
      setEnviando(false)
    }
  }

  if (inscrito && enviado) {
    return (
      <motion.div
        className="text-center py-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="inline-flex items-center justify-center w-14 h-14 border-4 border-brand-gold bg-brand-purple/30 text-brand-gold mb-4">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-pixel text-sm text-brand-gold mb-1">INSCRIÇÃO CONFIRMADA!</h3>
        <p className="font-body text-brand-white/80 text-sm">Agora escolha a forma de pagamento abaixo.</p>
        {erro && <p className="font-body text-amber-400 text-sm mt-2">{erro}</p>}
      </motion.div>
    )
  }

  return (
    <motion.div
      className="py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nome" className="block font-body text-brand-white mb-1">
            Nome
          </label>
          <input
            id="nome"
            type="text"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={inputClass}
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-body text-brand-white mb-1">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="seu@email.com"
          />
        </div>
        <div>
          <label htmlFor="telefone" className="block font-body text-brand-white mb-1">
            Telefone (WhatsApp)
          </label>
          <input
            id="telefone"
            type="tel"
            required
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className={inputClass}
            placeholder="(00) 00000-0000"
          />
        </div>
        <PixelButton type="submit" disabled={enviando} className="w-full">
          {enviando ? 'ENVIANDO...' : 'CONFIRMAR INSCRIÇÃO'}
        </PixelButton>
      </form>
    </motion.div>
  )
}
