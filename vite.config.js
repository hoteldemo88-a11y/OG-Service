import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

function nonBlockingCSS() {
  return {
    name: 'non-blocking-css',
    enforce: 'post',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet"(?:\s+crossorigin)?\s+href="(\/assets\/index-[^"]+\.css)">/,
        '<link rel="stylesheet" href="$1" media="print" onload="this.media=\'all\'">'
      )
    }
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), nonBlockingCSS()],
  resolve: {
    alias: {
      '@': __dirname + '/src',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) return 'vendor-react-dom';
            if (id.includes('react-router') || id.includes('react-route')) return 'vendor-router';
            if (id.includes('react') && !id.includes('react-dom') && !id.includes('react-router')) return 'vendor-react';
          }
        },
      },
    },
  },
})
