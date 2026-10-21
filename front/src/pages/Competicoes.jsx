import competicoes from '../data/competicoes.json'
import CompeticaoCard from '../components/CompeticaoCard.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Competicoes() {
  // Mais recentes primeiro
  const ordenadas = [...competicoes].sort((a, b) => b.ano - a.ano)

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <p className="section-label mb-3">Competições</p>
      </Reveal>
      <Reveal delay={60}>
        <h1 className="mb-12 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Desafios e conquistas
        </h1>
      </Reveal>

      {ordenadas.length === 0 ? (
        <p className="text-text-muted">Nenhuma competição cadastrada ainda.</p>
      ) : (
        <div className="mx-auto max-w-3xl">
          {ordenadas.map((competicao, i) => (
            <Reveal key={competicao.id} delay={i * 60}>
              <CompeticaoCard
                competicao={competicao}
                ultimo={i === ordenadas.length - 1}
                lado={i % 2 === 0 ? 'direita' : 'esquerda'}
              />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  )
}