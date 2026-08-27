import { useEffect, useRef } from 'react'

export default function Modal({ open, onClose, title, subtitle, children }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-10" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="absolute inset-0 animate-fade-in bg-bg/80 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <div
        ref={panelRef}
        tabIndex={-1}
        className="card relative z-10 max-h-[85vh] w-full max-w-2xl animate-fade-up overflow-y-auto p-8 shadow-card outline-none"
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full text-text-muted transition duration-300 ease-premium hover:text-text-primary"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <p id="modal-title" className="section-label mb-2">
          {title}
        </p>
        {subtitle && <p className="mb-6 text-sm text-text-muted">{subtitle}</p>}

        {children}
      </div>
    </div>
  )
}
