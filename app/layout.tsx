import type { Metadata } from 'next'
import { Press_Start_2P, VT323 } from 'next/font/google'
import './globals.css'

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
})

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Next Level — Concentração Distrital',
  description: 'Existe um próximo nível em Deus — e ele começa com intimidade. 21/03/2026.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${pressStart2P.variable} ${vt323.variable}`}>
      <body className="min-h-screen bg-brand-black font-body text-brand-white antialiased">
        {children}
      </body>
    </html>
  )
}
