import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

import react from '@vitejs/plugin-react'

import packageJson from './package.json'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const BaseUrl = mode === 'development' ? './' : packageJson.homepage
  // process.env = { ...process.env, ...loadEnv(mode, './') }

  return defineConfig({
    plugins: [react(), tsConfigPaths()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
        '@public': path.relative(__dirname, './public/'),
      },
    },
    base: `${BaseUrl}`,
    server: {
      port: 3000,
      https: false,
    },
    preview: {
      port: 8080,
      https: false,
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
}
