'use client'

import { motion } from 'framer-motion'
import { CONFIG } from '@/lib/config'

export function EndScreen() {
  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-brand-black/60 flex items-center">
      <div className="w-full max-w-3xl mx-auto text-center">
        <motion.h2
          className="font-pixel text-3xl sm:text-4xl lg:text-5xl text-brand-gold mb-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          SAVE THE DATE
        </motion.h2>
        <motion.p
          className="font-body text-2xl sm:text-3xl text-brand-white mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {CONFIG.DATA_EVENTO}
        </motion.p>
        <motion.p
          className="font-body text-brand-white/80 text-xl sm:text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Existe um próximo nível em Deus — e ele começa com intimidade.
        </motion.p>
        <motion.a
          href={CONFIG.LINK_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 font-pixel text-base sm:text-lg px-8 py-4 border-4 border-brand-gold bg-brand-purple text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileTap={{ scale: 0.95 }}
        >
          GRUPO WHATSAPP
        </motion.a>
      </div>
    </section>
  )
}
