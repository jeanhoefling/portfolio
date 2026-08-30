import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/experiencias', label: 'Experiências' },
  { to: '/certificados', label: 'Certificados' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="font-display text-base font-bold tracking-tight text-text-primary">
          Jean Hoefling
        </NavLink>

        <ul className="hidden gap-9 text-sm md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `link-underline ${isActive ? 'text-text-primary after:w-full' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="relative flex h-8 w-8 items-center justify-center text-text-muted transition hover:text-text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        >
          <span
            className={`absolute h-px w-5 bg-current transition duration-300 ease-premium ${
              open ? 'rotate-45' : '-translate-y-1.5'
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-current transition duration-300 ease-premium ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-current transition duration-300 ease-premium ${
              open ? '-rotate-45' : 'translate-y-1.5'
            }`}
          />
        </button>
      </nav>

      <ul
        className={`flex flex-col gap-1 overflow-hidden border-t border-border-soft px-6 text-sm transition-[max-height,opacity] duration-300 ease-premium md:hidden ${
          open ? 'max-h-60 py-3 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2.5 transition hover:text-text-primary ${
                  isActive ? 'text-text-primary' : 'text-text-muted'
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  )
}
