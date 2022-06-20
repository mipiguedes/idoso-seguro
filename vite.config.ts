import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/elderly-gamification/',
  plugins: [react()],
  server: {
    host: true
  }
})
