export default function GrupoCertificadoCard({ grupo, total, onClick }) {
  return (
    <button onClick={onClick} className="card-interactive group flex w-full h-full flex-col items-start gap-3 p-6 text-left">
      <div className="flex w-full items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-text-primary">{grupo.nome}</h3>
        <span className="tag-pill shrink-0">
          {total} {total === 1 ? 'Certificado' : 'Certificados'}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-text-muted">{grupo.descricao}</p>
      <span className="link-underline mt-auto text-sm text-text-primary">Ver certificados →</span>
    </button>
  )
}
