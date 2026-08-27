export default function ProjetoCard({ projeto }) {
  const { nome, descricao, tecnologias, imagem, link, repositorio, status } = projeto

  return (
    <article className="card-interactive group flex flex-col overflow-hidden">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-raised">
        {imagem ? (
          <img
            src={imagem}
            alt={`Prévia do projeto ${nome}`}
            className="h-full w-full object-cover transition duration-500 ease-premium group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-aurora">
            <span className="font-display text-3xl font-bold text-text-dim">
              {nome?.charAt(0)?.toUpperCase()}
            </span>
          </div>
        )}
        {status && (
          <span className="tag-pill absolute right-3 top-3 bg-bg/70 backdrop-blur-sm">{status}</span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-lg font-semibold text-text-primary">{nome}</h3>
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

        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-3 text-sm">
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="link-underline text-text-primary">
              Ver projeto →
            </a>
          )}
          {repositorio && (
            <a href={repositorio} target="_blank" rel="noreferrer" className="link-underline">
              Repositório
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
