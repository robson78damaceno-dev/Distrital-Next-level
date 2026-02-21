'use client'

import { motion } from 'framer-motion'
import { PixelCard } from '@/components/ui/PixelCard'
import { ProgressBar } from '@/components/ui/ProgressBar'

const DESAFIOS = [
  'Integração entre igrejas',
  'Desafios em equipe',
  'Momentos de diversão',
  'Comunhão na prática',
]

export function FaseGincana() {
  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-brand-black/60 flex items-center">
      <div className="w-full max-w-5xl mx-auto">
        <motion.h2
          className="font-pixel text-2xl sm:text-3xl text-brand-gold mb-10"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          FASE 3 — GINCANA
        </motion.h2>
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-brand-white text-xl sm:text-2xl mb-4">Desafios e integração:</p>
          <ProgressBar progress={0.75} className="mb-6" />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {DESAFIOS.map((d, i) => (
            <motion.div
              key={d}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'tween', duration: 0.3, delay: i * 0.1 }}
            >
              <PixelCard>
                <p className="font-body text-brand-white text-xl sm:text-2xl text-center">{d}</p>
              </PixelCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
