'use client'

import { motion } from 'framer-motion'
import { Typewriter } from '@/components/shared/Typewriter'
import { PixelCard } from '@/components/ui/PixelCard'

export function FaseSobre() {
  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-brand-black/60 flex items-center">
      <div className="w-full max-w-4xl mx-auto">
        <motion.h2
          className="font-pixel text-2xl sm:text-3xl text-brand-gold mb-10"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          FASE 1 — SOBRE
        </motion.h2>
        <PixelCard className="mb-0">
          <p className="font-body text-xl sm:text-2xl text-brand-white leading-relaxed mb-8">
            Crescimento espiritual, comunhão e intimidade com Deus. Um evento do distrito DF Sul e DF Norte para jovens e juvenis.
          </p>
          <blockquote className="border-l-4 border-brand-gold pl-6 py-3">
            <p className="font-body text-brand-gold text-xl sm:text-2xl">
              <Typewriter text="Aproximai-vos de Deus, e ele se aproximará de vós." speed={80} />
            </p>
            <cite className="font-body text-brand-white/70 text-sm block mt-2">— Tiago 4:8</cite>
          </blockquote>
        </PixelCard>
      </div>
    </section>
  )
}
