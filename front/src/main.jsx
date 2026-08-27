import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/index.css'

// HashRouter é usado propositalmente aqui: o GitHub Pages não sabe
// resolver rotas como /experiencias em um refresh de página (ele tentaria
// buscar um arquivo real nesse caminho e retornaria 404). Com HashRouter
// as rotas viram /#/experiencias, que o navegador sempre resolve para
// index.html, então o roteamento client-side funciona sem configuração
// extra no servidor.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
