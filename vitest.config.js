import { defineConfig } from 'vite'

export default defineConfig({
  test:{
    dir: 'src/tests',
    environment: 'jsdom',
  }
})