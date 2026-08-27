import depoimentos from '../data/depoimentos.json'
import experiencias from '../data/experiencias.json'
import DepoimentoCarousel from '../components/DepoimentoCarousel.jsx'
import ExperienciaCard from '../components/ExperienciaCard.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Experiencias() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <section className="mb-24">
        <Reveal>
          <p className="section-label mb-3">Relatos</p>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="mb-10 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            O que dizem sobre meu trabalho
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <DepoimentoCarousel depoimentos={depoimentos} />
        </Reveal>
      </section>

      <section>
        <Reveal>
          <p className="section-label mb-3">Trajetória</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mb-10 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Experiências profissionais
          </h2>
        </Reveal>

        {experiencias.length === 0 ? (
          <p className="text-text-muted">Nenhuma experiência cadastrada ainda.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {experiencias.map((exp, i) => (
              <Reveal key={exp.id} delay={i * 60}>
                <ExperienciaCard experiencia={exp} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
