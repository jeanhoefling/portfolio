export default function CertificadoItem({ certificado }) {
  const { nome, instituicao, data, descricao, pdf, url } = certificado

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-border-soft bg-white/[0.02] p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h4 className="font-display text-base font-semibold text-text-primary">{nome}</h4>
        <span className="tag-pill shrink-0">{data}</span>
      </div>
      <p className="text-sm font-medium text-accent-teal">{instituicao}</p>
      {descricao && <p className="text-sm leading-relaxed text-text-muted">{descricao}</p>}

      {(pdf || url) && (
        <div className="mt-1 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {pdf && (
            <a href={pdf} download className="link-underline text-text-primary">
              Baixar PDF ↓
            </a>
          )}
          {url && (
            <a href={url} target="_blank" rel="noreferrer" className="link-underline">
              Ver certificado →
            </a>
          )}
        </div>
      )}
    </div>
  )
}
