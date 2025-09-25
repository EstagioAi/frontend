import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // Permite acesso externo
    port: 3000,
    // Configuração para desenvolvimento com subdomínios locais
    // Você pode usar empresas.localhost:3000 para testar
    hmr: {
      port: 3000,
    },
  },
  preview: {
    host: true,
    port: 3000,
  },
})
