'use client'

import { useScrollProgress } from '@/hooks/useScrollProgress'
import { ProgressBar } from './ProgressBar'
import { CONFIG } from '@/lib/config'

export function HUD() {
  const { progress, phaseName } = useScrollProgress()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black/95 border-b-4 border-brand-gold px-4 sm:px-6 py-3">
      <div className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <span className="font-pixel text-sm sm:text-base text-brand-gold">
          {phaseName.toUpperCase()}
        </span>
        <div className="flex-1 min-w-[160px] max-w-[320px] mx-4">
          <ProgressBar progress={progress} />
        </div>
        <span className="font-pixel text-sm sm:text-base text-brand-white">
          {CONFIG.DATA_EVENTO}
        </span>
      </div>
    </header>
  )
}
