import { useEffect, useRef, useState } from 'react'

// Nó da linha do tempo de competições (linha centralizada).
// Estado normal: bolinha com o ano + rótulo ao lado.
// Hover (mouse), foco por teclado ou toque: a bolinha vira um retângulo
// com imagem e todas as informações. O retângulo cresce NO FLUXO da página,
// então os itens de baixo são empurrados e continuam conectados pela linha.
// Estilos/animação: classes .comp-* em src/styles/index.css.
export default function CompeticaoCard({ competicao, ultimo = false, lado = 'direita' }) {
  const {
    nome, colocacao, organizacao, ano, local, modalidade,
    resumo, descricao, destaques, imagem, link,
  } = competicao
  const [aberto, setAberto] = useState(false)
  const tipoPonteiro = useRef('mouse')

  // A altura do retângulo expandido é medida a partir do conteúdo (sem sobras).
  // O conteúdo tem largura fixa, então a medida não depende do tamanho atual da bolinha.
  const conteudoRef = useRef(null)
  const [altura, setAltura] = useState(null)
  useEffect(() => {
    const el = conteudoRef.current
    if (!el) return
    const medir = () => setAltura(el.offsetHeight + 2) // +2px da borda do nó
    medir()
    const ro = new ResizeObserver(medir)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const esquerda = lado === 'esquerda'

  return (
    <div className="comp-group flex flex-col items-center" data-open={aberto}>
      <div className="relative flex w-full items-start justify-center">
        {/* Rótulo ao lado da bolinha (alterna esquerda/direita a partir de sm) */}
        <div
          className={`comp-fade absolute top-0 flex h-20 w-[calc(50%-3.5rem)] flex-col justify-center gap-1
            left-1/2 ml-14 items-start text-left
            ${esquerda ? 'sm:left-auto sm:right-1/2 sm:ml-0 sm:mr-14 sm:items-end sm:text-right' : ''}`}
        >
          <span className="break-words font-display text-sm font-semibold text-text-primary sm:text-lg">{nome}</span>
          <span className="text-xs text-accent-teal sm:text-sm">{colocacao}</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-dim sm:text-[11px]">
            {organizacao}
          </span>
        </div>

        <article
          className="comp-node"
          style={altura ? { '--comp-h': `${altura}px` } : undefined}
          tabIndex={0}
          aria-expanded={aberto}
          aria-label={`${nome} — ${colocacao}`}
          onPointerDown={(e) => { tipoPonteiro.current = e.pointerType }}
          onPointerEnter={(e) => { if (e.pointerType !== 'touch') setAberto(true) }}
          onPointerLeave={(e) => { if (e.pointerType !== 'touch') setAberto(false) }}
          // Toque alterna; clique de mouse não (o hover já abriu)
          onClick={() => { if (tipoPonteiro.current === 'touch') setAberto((v) => !v) }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setAberto((v) => !v)
            }
          }}
          onFocus={(e) => { if (e.target.matches(':focus-visible')) setAberto(true) }}
          onBlur={() => setAberto(false)}
        >
          {/* Ano (visível só como bolinha) */}
          <div className="comp-fade absolute left-0 top-0 flex h-20 w-20 items-center justify-center">
            <span className="bg-gradient-brand bg-clip-text font-mono text-sm font-medium text-transparent">
              {ano}
            </span>
          </div>

          {/* Conteúdo expandido */}
          <div
            ref={conteudoRef}
            className="comp-content absolute left-1/2 top-0 flex w-[min(34rem,calc(100vw-3rem))] -translate-x-1/2 flex-col"
          >
            <div className="relative h-64 w-full shrink-0 overflow-hidden bg-bg-raised">
              {imagem ? (
                <img src={imagem} alt={`Imagem da competição ${nome}`} className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full bg-aurora" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-surface to-transparent" />
              <span className="absolute right-4 top-4 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-bg">
                {colocacao}
              </span>
            </div>

            <div className="flex flex-col gap-3 p-6 text-left">
              <div>
                <h3 className="font-display text-xl font-semibold text-text-primary">{nome}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-accent-teal">
                  {organizacao} · {ano}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {modalidade && <span className="tag-pill">{modalidade}</span>}
                {local && <span className="tag-pill">{local}</span>}
              </div>

              <p className="text-sm leading-relaxed text-text-muted">{descricao || resumo}</p>
            </div>
          </div>
        </article>
      </div>

      {/* Conector até o próximo nó (sempre no fluxo, logo abaixo do nó) */}
      {!ultimo && <div aria-hidden="true" className="h-12 w-px bg-gradient-to-b from-accent/60 to-accent-teal/20" />}
    </div>
  )
}