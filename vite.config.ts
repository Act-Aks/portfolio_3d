import path from 'path'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@public': path.relative(__dirname, './public/'),
    },
  },
  base: 'https://act-aks.github.io/portfolio_3d/',
  server: {
    port: 3000,
    https: true,
  },
  preview: {
    port: 3000,
    https: true,
  },
  build: {
    outDir: 'dist',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {},
        minifyInternalExports: false,
      },
    },
  },
})
