import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0a0a0f',
          blue: '#1a237e',
          purple: '#4a148c',
          gold: '#ffd700',
          white: '#e8e8e8',
        },
      },
      fontFamily: {
        pixel: ['var(--font-pixel)', 'monospace'],
        body: ['var(--font-body)', 'monospace'],
      },
      backgroundImage: {
        'pixel-grid': "url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 8h16M8 0v16' stroke='%234a148c' stroke-opacity='0.08' stroke-width='0.5' fill='none'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
