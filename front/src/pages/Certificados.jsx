import { useState } from 'react'
import grupos from '../data/certificado-grupos.json'
import certificados from '../data/certificados.json'
import GrupoCertificadoCard from '../components/GrupoCertificadoCard.jsx'
import CertificadoItem from '../components/CertificadoItem.jsx'
import Modal from '../components/Modal.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Certificados() {
  const [grupoAberto, setGrupoAberto] = useState(null)

  const certificadosDoGrupo = grupoAberto
    ? certificados.filter((c) => c.grupoId === grupoAberto.id)
    : []

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <p className="section-label mb-3">Certificados</p>
      </Reveal>
      <Reveal delay={60}>
        <h1 className="mb-10 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Cursos e certificações
        </h1>
      </Reveal>

      {grupos.length === 0 ? (
        <p className="text-text-muted">Nenhum grupo de certificados cadastrado ainda.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {grupos.map((grupo, i) => {
            const total = certificados.filter((c) => c.grupoId === grupo.id).length
            return (
              <Reveal key={grupo.id} delay={i * 60}>
                <GrupoCertificadoCard grupo={grupo} total={total} onClick={() => setGrupoAberto(grupo)} />
              </Reveal>
            )
          })}
        </div>
      )}

      <Modal
        open={Boolean(grupoAberto)}
        onClose={() => setGrupoAberto(null)}
        title={grupoAberto?.nome}
        subtitle={grupoAberto?.descricao}
      >
        {certificadosDoGrupo.length === 0 ? (
          <p className="text-sm text-text-muted">Nenhum certificado cadastrado neste grupo ainda.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {certificadosDoGrupo.map((cert) => (
              <CertificadoItem key={cert.id} certificado={cert} />
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}
