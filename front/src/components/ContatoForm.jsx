import { useState } from 'react'

// Endpoint futuro do Django. Por enquanto o envio é apenas simulado,
// mas a estrutura já está pronta para apontar para essa rota.
const CONTACT_ENDPOINT = '/api/contato/'

const ESTADO_INICIAL = { nome: '', email: '', mensagem: '' }

const inputClasses =
  'rounded-xl border border-border bg-bg-surface/60 px-4 py-3 text-sm text-text-primary outline-none ' +
  'transition duration-300 ease-premium placeholder:text-text-dim focus:border-accent/50 focus:shadow-glow'

export default function ContatoForm() {
  const [form, setForm] = useState(ESTADO_INICIAL)
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    // Simulação de envio. Quando o backend Django estiver pronto,
    // troque este bloco por um fetch real para CONTACT_ENDPOINT, por exemplo:
    //
    // await fetch(CONTACT_ENDPOINT, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // })
    setTimeout(() => {
      setStatus('sent')
      setForm(ESTADO_INICIAL)
    }, 900)
  }

  if (status === 'sent') {
    return (
      <div className="card p-8 text-center shadow-card">
        <p className="font-display text-sm font-semibold text-accent-teal">Mensagem enviada (simulação)</p>
        <p className="mt-2 text-sm text-text-muted">
          O envio real será conectado ao backend Django futuramente.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-secondary mt-5">
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-5 p-8 shadow-card">
      <div className="flex flex-col gap-2">
        <label htmlFor="nome" className="text-xs font-medium text-text-muted">
          Nome
        </label>
        <input id="nome" name="nome" type="text" required value={form.nome} onChange={handleChange} className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xs font-medium text-text-muted">
          E-mail
        </label>
        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="mensagem" className="text-xs font-medium text-text-muted">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          required
          value={form.mensagem}
          onChange={handleChange}
          className={`resize-none ${inputClasses}`}
        />
      </div>

      <button type="submit" disabled={status === 'sending'} className="btn-primary justify-center">
        {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
      </button>
    </form>
  )
}
