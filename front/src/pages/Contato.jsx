import ContatoForm from '../components/ContatoForm.jsx'
import Reveal from '../components/Reveal.jsx'
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const CONTATOS = [
  {
    nome: 'E-mail',
    url: 'mailto:jeanalemao2006@gmail.com',
    icon: MdEmail,
  },
  {
    nome: 'GitHub',
    url: 'https://github.com/jeanhoefling',
    icon: FaGithub,
  },
  {
    nome: 'LinkedIn',
    url: 'https://linkedin.com/in/jean-hoefling',
    icon: FaLinkedin,
  },
  {
    nome: 'Instagram',
    url: 'https://instagram.com/jeanhoefling.dev',
    icon: FaInstagram,
  },
  {
    nome: 'TikTok',
    url: 'https://tiktok.com/@jeanhoefling.dev',
    icon: FaTiktok,
  }
]

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
          Entre em contato diretamente pelos canais abaixo.
        </p>
      </Reveal>

      <Reveal delay={160} className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:flex md:text-left md:flex-wrap text-sm">
        {CONTATOS.map((contato) => {
          const Icon = contato.icon
          return (
            <a key={contato.nome} href={contato.url} 
            target={contato.url.startsWith('http') ? '_blank' : undefined} 
            rel={contato.url.startsWith('http') ? 'noreferrer' : undefined} 
            className="btn-secondary">
              <Icon className="text-lg" />
              {contato.nome}
            </a>
          )
        })}
      </Reveal>
    </div>
  )
}
