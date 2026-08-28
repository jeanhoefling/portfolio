import projetos from '../data/projetos.json'
import ProjetoCard from '../components/ProjetoCard.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Projetos() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <p className="section-label mb-3">Projetos</p>
      </Reveal>
      <Reveal delay={60}>
        <h1 className="mb-10 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          O que eu já construí
        </h1>
      </Reveal>

      {projetos.length === 0 ? (
        <p className="text-text-muted">Nenhum projeto cadastrado ainda.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {[...projetos]
            .sort((a, b) => {
              const ordem = {
                "Em desenvolvimento": 0,
                "Concluído": 1
              }

              return ordem[a.status] - ordem[b.status]
            })
            .map((projeto, i) => (
              <Reveal key={projeto.id} delay={i * 60}>
                <ProjetoCard projeto={projeto} />
              </Reveal>
            ))}
        </div>
      )}
    </div>
  )
}
