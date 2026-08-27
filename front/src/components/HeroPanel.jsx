import { useEffect, useState } from 'react'

const FOCOS = ['Backend', 'Segurança da informação', 'APIs REST', 'Arquitetura de sistemas']

// Painel visual do hero. Antes era um terminal simulando "digitação" de
// comandos; agora é um cartão de vidro discreto com um monograma em
// gradiente e um rótulo de foco que troca suavemente — sem prompt, sem
// cursor piscando, sem referências a linha de comando.
export default function HeroPanel({ nome = 'Jean' }) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % FOCOS.length)
        setVisible(true)
      }, 400)
    }, 2600)

    return () => clearInterval(interval)
  }, [])


  return (
    <div className="card mx-auto flex max-w-md items-center gap-5 px-6 py-5 shadow-card">
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-brand">
        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-bg-surface">
          <span className="font-display text-lg font-bold text-text-primary">JH</span>
        </div>
      </div>

      <div className="text-left">
        <p className="text-xs uppercase tracking-[0.15em] text-text-dim">Foco atual</p>
        <p
          className={`mt-1 font-display text-base font-semibold text-text-primary transition-opacity duration-300 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {FOCOS[index]}
        </p>
      </div>
    </div>
  )
}
