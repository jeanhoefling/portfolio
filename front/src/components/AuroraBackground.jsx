// Camada de fundo decorativa e fixa: substitui o antigo grid de "editor de
// código" por auras de luz suaves (azul/violeta/teal) que se movem devagar.
// aria-hidden porque é puramente visual; fica atrás de todo o conteúdo (-z-10)
// e não intercepta cliques (pointer-events-none).
export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg"
    >
      <div className="absolute inset-0 bg-aurora animate-aurora-drift" />
      <div
        className="absolute left-1/2 top-1/2 h-[120vh] w-[120vw] -translate-x-1/2 -translate-y-1/2 opacity-[0.4]"
        style={{
          background:
            'radial-gradient(circle at center, transparent 35%, #08090D 70%)',
        }}
      />
    </div>
  )
}
