import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base: '/your-repo-name/',  <-- THIS MUST BE REMOVED FOR VERCEL
})