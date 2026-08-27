export default function ExperienciaCard({ experiencia }) {
  const { cargo, empresa, periodo, descricao, tecnologias } = experiencia

  return (
    <article className="card-interactive relative flex flex-col gap-3 p-6 pl-8">
      <span className="absolute left-6 top-8 h-1.5 w-1.5 rounded-full bg-gradient-brand" />
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-lg font-semibold text-text-primary">
          {cargo} <span className="text-text-dim">·</span> {empresa}
        </h3>
        <span className="text-sm text-accent-teal">{periodo}</span>
      </div>
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
  )
}
