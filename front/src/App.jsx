import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Certificados from './pages/Certificados.jsx'
import Experiencias from './pages/Experiencias.jsx'
import Contato from './pages/Contato.jsx'
import Projetos from './pages/Projetos.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificados" element={<Certificados />} />
          <Route path="/experiencias" element={<Experiencias />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
