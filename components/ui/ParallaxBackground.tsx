'use client'

import { useEffect, useState } from 'react'

export function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const speed1 = scrollY * 0.1
  const speed2 = scrollY * 0.2
  const speed3 = scrollY * 0.35
  const speed4 = scrollY * 0.5

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Céu gradiente - azul, sem roxo */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0a1628 0%, #0d2137 25%, #1a237e 60%, #0f172a 100%)',
        }}
      />

      {/* Estrelas pixeladas */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, #ffd700, transparent),
            radial-gradient(2px 2px at 40px 70px, #e8e8e8, transparent),
            radial-gradient(2px 2px at 50px 160px, #ffd700, transparent),
            radial-gradient(2px 2px at 90px 40px, #e8e8e8, transparent),
            radial-gradient(2px 2px at 130px 80px, #ffd700, transparent),
            radial-gradient(2px 2px at 160px 120px, #e8e8e8, transparent)
          `,
          backgroundSize: '200px 200px',
          transform: `translateY(${speed1 * 0.3}px)`,
        }}
      />

      {/* Nuvens melhoradas - formato mais suave e fofo */}
      <div
        className="absolute top-[10%] left-[5%] w-48 h-20"
        style={{ transform: `translateX(${speed4 * 0.4}px) translateY(${speed1}px)` }}
      >
        <svg viewBox="0 0 120 50" className="w-full h-full opacity-70" style={{ imageRendering: 'pixelated' }}>
          <ellipse cx="30" cy="35" rx="25" ry="12" fill="#f5f5f5" />
          <ellipse cx="60" cy="30" rx="30" ry="14" fill="#ffffff" />
          <ellipse cx="90" cy="35" rx="25" ry="12" fill="#f0f0f0" />
          <ellipse cx="60" cy="38" rx="35" ry="10" fill="#e8e8e8" />
        </svg>
      </div>
      <div
        className="absolute top-[25%] right-[10%] w-56 h-24"
        style={{ transform: `translateX(${-speed4 * 0.35}px) translateY(${speed2}px)` }}
      >
        <svg viewBox="0 0 140 60" className="w-full h-full opacity-65" style={{ imageRendering: 'pixelated' }}>
          <ellipse cx="35" cy="45" rx="28" ry="12" fill="#f8f8f8" />
          <ellipse cx="70" cy="38" rx="35" ry="15" fill="#ffffff" />
          <ellipse cx="105" cy="45" rx="28" ry="12" fill="#f0f0f0" />
          <ellipse cx="70" cy="48" rx="40" ry="10" fill="#e8e8e8" />
        </svg>
      </div>
      <div
        className="absolute top-[45%] left-[15%] w-40 h-16"
        style={{ transform: `translateX(${speed4 * 0.5}px) translateY(${speed1 * 0.5}px)` }}
      >
        <svg viewBox="0 0 100 40" className="w-full h-full opacity-55" style={{ imageRendering: 'pixelated' }}>
          <ellipse cx="25" cy="28" rx="22" ry="10" fill="#f5f5f5" />
          <ellipse cx="50" cy="22" rx="28" ry="12" fill="#ffffff" />
          <ellipse cx="75" cy="28" rx="22" ry="10" fill="#f0f0f0" />
        </svg>
      </div>

      {/* Rocha com cruz - FIXA (não move com scroll) */}
      <div className="absolute bottom-0 left-0 right-0 h-[70%] overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1200 550"
          className="w-full h-full lg:w-[150%] lg:max-w-none lg:mr-auto"
          preserveAspectRatio="xMidYMax meet"
          style={{ imageRendering: 'pixelated' }}
        >
          <defs>
            <linearGradient id="marGrad" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#0c4a6e" />
              <stop offset="50%" stopColor="#075985" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
          </defs>
          {/* Mar - visível apenas no mobile (lg:hidden) */}
          <g className="lg:hidden">
            <polygon points="0,550 0,380 50,370 100,385 150,365 200,375 250,360 300,370 350,365 380,380 380,550" fill="url(#marGrad)" opacity="0.95" />
            <polygon points="0,550 0,400 80,390 160,400 240,385 320,395 380,400 380,550" fill="#075985" opacity="0.85" />
            <g opacity="0.9">
              {[400, 420, 440, 460, 480, 500, 520].map((y, i) => (
                <path
                  key={i}
                  d={`M0,${y} L40,${y-5} L80,${y+3} L120,${y-2} L160,${y+4} L200,${y-3} L240,${y+2} L280,${y} L320,${y-4} L360,${y+1} L380,${y}`}
                  fill="none"
                  stroke="#0ea5e9"
                  strokeWidth="2"
                  opacity={0.4 + (i % 3) * 0.1}
                />
              ))}
            </g>
            <ellipse cx="100" cy="450" rx="60" ry="15" fill="#0ea5e9" opacity="0.2" />
            <ellipse cx="180" cy="400" rx="40" ry="10" fill="#38bdf8" opacity="0.15" />
            <circle cx="80" cy="430" r="4" fill="#e0f2fe" opacity="0.6" />
            <circle cx="200" cy="470" r="3" fill="#e0f2fe" opacity="0.5" />
            <circle cx="140" cy="500" r="5" fill="#f0f9ff" opacity="0.5" />
          </g>
          {/* Base rochosa mobile - começa em x=380 (quando mar visível) */}
          <g className="lg:hidden">
            <polygon
              points="380,550 380,420 400,380 480,360 560,260 640,320 720,240 800,280 880,220 960,260 1040,200 1120,240 1200,280 1200,550"
              fill="#3d3d3d"
            />
            <polygon
              points="400,550 400,400 500,340 600,240 700,280 800,220 900,260 1000,200 1100,260 1200,300 1200,550"
              fill="#4a4a4a"
              opacity="0.95"
            />
          </g>
          {/* Base rochosa desktop - ocupa todo o fundo (sem mar) */}
          <g className="hidden lg:block">
            <polygon
              points="0,550 0,420 80,380 160,400 240,340 320,380 400,300 480,360 560,260 640,320 720,240 800,280 880,220 960,260 1040,200 1120,240 1200,280 1200,550"
              fill="#3d3d3d"
            />
            <polygon
              points="100,550 100,400 200,340 300,380 400,300 500,340 600,240 700,280 800,220 900,260 1000,200 1100,260 1200,300 1200,550"
              fill="#4a4a4a"
              opacity="0.95"
            />
          </g>
          {/* Cruz atrás da rocha - desenhada antes para ficar no fundo */}
          <g transform="translate(638, 59)">
            <rect x="10" y="0" width="24" height="90" fill="#ffd700" />
            <rect x="-20" y="28" width="84" height="24" fill="#ffd700" />
            <rect x="12" y="2" width="8" height="40" fill="#ffec8b" opacity="0.6" />
          </g>
          {/* Rocha central - pico (por cima da cruz) */}
          <polygon
            points="350,550 350,380 420,320 500,260 580,200 660,140 740,180 820,240 850,550"
            fill="#2a2a2a"
          />
          <polygon
            points="400,550 400,350 480,280 560,220 640,160 720,200 800,260 850,550"
            fill="#353535"
          />
        </svg>
      </div>

      {/* Grid pixel sutil */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(rgba(255,215,0,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,215,0,0.15) 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
          transform: `translateY(${speed1 * 0.2}px)`,
        }}
      />

      {/* Overlay escuro sutil */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/25"
        aria-hidden
      />
    </div>
  )
}
