import { Link } from 'react-router-dom'
import HeroPanel from '../components/HeroPanel.jsx'
import Reveal from '../components/Reveal.jsx'

// -----------------------------------------------------------------------
// SUBSTITUA AQUI: informações pessoais reais.
// Nenhum dado abaixo foi inventado como fato — são placeholders claros
// para você preencher com seu conteúdo real.
// -----------------------------------------------------------------------
const PERFIL = {
  nome: 'Jean Hoefling',
  cargo: 'Desenvolvedor Fullstack & Segurança da Informação',
  resumo:
    'Estudante de Ciência da Computação, focado em desenvolvimento web fullstack e com interesse em segurança da informação.',
  tecnologias: ['Python', 'Django', 'React', 'PostgreSQL', 'JavaScript', 'Git'],
  areasDeInteresse: [
    'Segurança da informação',
    'APIs REST',
    'Arquitetura de backend',
    'Boas práticas de código',
  ],
  github: 'https://github.com/jeanhoefling',
  linkedin: 'https://linkedin.com/in/jean-hoefling',
}

export default function Home() {
  return (
    <div>
      <section className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-24 text-center sm:py-32">
        <Reveal>
          <p className="section-label">Portfólio pessoal</p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
            Olá, eu sou {PERFIL.nome}.
            <br />
            <span className="bg-gradient-brand bg-clip-text text-transparent">{PERFIL.cargo}.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="max-w-xl text-balance text-text-muted">{PERFIL.resumo}</p>
        </Reveal>

        <Reveal delay={240}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/experiencias" className="btn-primary">
              Ver experiências
            </Link>
            <Link to="/contato" className="btn-secondary">
              Entrar em contato
            </Link>
          </div>
        </Reveal>

        <Reveal delay={320} className="mt-6 w-full">
          <HeroPanel nome={PERFIL.nome} />
        </Reveal>
      </section>

      <section className="border-t border-border-soft px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="section-label mb-6">Tecnologias</p>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {PERFIL.tecnologias.map((tech, i) => (
              <Reveal key={tech} delay={i * 40}>
                <span className="tag-pill">{tech}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border-soft px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="section-label mb-6">Áreas de interesse</p>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {PERFIL.areasDeInteresse.map((area, i) => (
              <Reveal key={area} as="li" delay={i * 60} className="card-interactive px-5 py-4 text-sm text-text-primary">
                {area}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border-soft px-6 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
          <p className="section-label">Redes</p>
          <div className="flex gap-4 text-sm">
            <a href={PERFIL.github} target="_blank" rel="noreferrer" className="btn-secondary">
              GitHub
            </a>
            <a href={PERFIL.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
