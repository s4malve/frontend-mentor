import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { readdirSync } from 'fs'

const addPage = () => {
  const paths = readdirSync('projects/', (err, files) => files)
  let obj = {
    index: resolve(__dirname, 'index.html'),
  }
  paths.forEach((path) => {
    obj = { ...obj, [path]: `projects/${path}/index.html` }
  })
  return obj
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: addPage(),
    },
  },
})
