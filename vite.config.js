import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  jsx: {
    factory: 'React.createElement',
    fragment: 'React.Fragment'
  }
  // otras opciones de configuración de Vite aquí
})
