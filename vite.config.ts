import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/calc-horas-extra/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': '/src'
      // '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
