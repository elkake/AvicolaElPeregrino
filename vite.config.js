import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/AvicolaElPeregrino/'
  // otras opciones de configuración de Vite aquí
})
