import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base '/portfolio/' deve ser trocado pelo nome exato do seu repositório
// no GitHub (ex: usuario.github.io usa base '/', repositórios normais usam '/nome-do-repo/')
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
