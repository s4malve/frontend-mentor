import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/frontend-mentor/ip-address-tracker/',
  plugins: [react()],
})
