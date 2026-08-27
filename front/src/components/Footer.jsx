export default function Footer() {
  return (
    <footer className="border-t border-border-soft px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-xs text-text-dim sm:flex-row">
        <p>© {new Date().getFullYear()} Jean. Construído com React + Django.</p>
        <p>Em construção</p>
      </div>
    </footer>
  )
}
