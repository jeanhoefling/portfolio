export default function ExperienciaCard({ experiencia }) {
  const { cargo, empresa, periodo, descricao, tecnologias } = experiencia

  return (
    <div className="relative pl-9">
      {/* Marcador na timeline */}
      <span className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center">
        <span className="absolute h-full w-full rounded-full bg-gradient-brand opacity-30 blur-[4px]" />
        <span className="relative h-2 w-2 rounded-full bg-gradient-brand shadow-glow" />
      </span>

      <span className="mb-2 block font-mono text-xs tracking-wide text-accent-teal">
        {periodo}
      </span>

      <article className="card-interactive flex flex-col gap-3 p-6">
        <h3 className="font-display text-lg font-semibold text-text-primary">
          {cargo} <span className="text-text-dim">·</span> {empresa}
        </h3>
        <p className="text-sm leading-relaxed text-text-muted">{descricao}</p>
        {tecnologias?.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {tecnologias.map((tech) => (
              <span key={tech} className="tag-pill">
                {tech}
              </span>
            ))}
          </div>
        )}
      </article>
    </div>
  )
}
