import { useState } from 'react'

export default function DepoimentoCarousel({ depoimentos }) {
  const [index, setIndex] = useState(0)

  if (!depoimentos.length) {
    return <p className="text-text-muted">Nenhum depoimento cadastrado ainda.</p>
  }

  const atual = depoimentos[index]

  const anterior = () => setIndex((i) => (i === 0 ? depoimentos.length - 1 : i - 1))
  const proximo = () => setIndex((i) => (i === depoimentos.length - 1 ? 0 : i + 1))

  return (
    <div className="mx-auto max-w-2xl">
      <div className="card flex flex-col items-center gap-5 p-10 text-center shadow-card">
        {atual.imagem && (
          <img
            src={atual.imagem}
            alt={`Foto de ${atual.nome}`}
            className="h-16 w-16 rounded-full border border-border-soft object-cover"
          />
        )}
        <p className="text-balance text-lg leading-relaxed text-text-primary">“{atual.relato}”</p>
        <div>
          <p className="font-display text-sm font-semibold text-text-primary">{atual.nome}</p>
          <p className="text-xs text-text-dim">
            {atual.cargo} · {atual.empresa}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          onClick={anterior}
          aria-label="Depoimento anterior"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition duration-300 ease-premium hover:border-accent/40 hover:text-text-primary"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex gap-1.5">
          {depoimentos.map((d, i) => (
            <button
              key={d.id}
              onClick={() => setIndex(i)}
              aria-label={`Ir para depoimento ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ease-premium ${
                i === index ? 'w-5 bg-gradient-brand' : 'w-1.5 bg-border'
              }`}
            />
          ))}
        </div>

        <button
          onClick={proximo}
          aria-label="Próximo depoimento"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition duration-300 ease-premium hover:border-accent/40 hover:text-text-primary"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
