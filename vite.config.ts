import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Nombre del repo en GitHub Pages -> https://<usuario>.github.io/tahona-san-clemente/
const BASE = process.env.VITE_BASE ?? '/tahona-san-clemente/'

export default defineConfig({
  base: BASE,
  plugins: [react(), tailwindcss()],
})
