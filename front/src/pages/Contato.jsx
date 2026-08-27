import ContatoForm from '../components/ContatoForm.jsx'
import Reveal from '../components/Reveal.jsx'

// SUBSTITUA AQUI: links e e-mail reais.
const CONTATOS = {
  email: 'jeanalemao2006@gmail.com',
  github: 'https://github.com/jeanhoefling',
  linkedin: 'https://linkedin.com/in/jean-hoefling',
}

export default function Contato() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Reveal>
        <p className="section-label mb-3">Contato</p>
      </Reveal>
      <Reveal delay={60}>
        <h1 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Vamos conversar
        </h1>
      </Reveal>
      <Reveal delay={120}>
        <p className="mb-10 text-text-muted">
          Envie uma mensagem pelo formulário ou entre em contato diretamente pelos canais abaixo.
        </p>
      </Reveal>

      <Reveal delay={160} className="mb-10 flex flex-wrap gap-4 text-sm">
        <a href={`mailto:${CONTATOS.email}`} className="btn-secondary">
          {CONTATOS.email}
        </a>
        <a href={CONTATOS.github} target="_blank" rel="noreferrer" className="btn-secondary">
          GitHub
        </a>
        <a href={CONTATOS.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
          LinkedIn
        </a>
      </Reveal>

      <Reveal delay={220}>
        <ContatoForm />
      </Reveal>
    </div>
  )
}
