import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'
import removeConsole from "vite-plugin-remove-console"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression(),
    removeConsole()
  ],
  build: {
    minify: true,
    cssMinify: true,
    target: 'esnext'
  }
})
