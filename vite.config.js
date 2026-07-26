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

function preloadCriticalChunks() {
  const chunks = [
    'Home',
    'HeroSection',
  ]
  return {
    name: 'preload-critical-chunks',
    enforce: 'post',
    generateBundle(_, bundle) {
      const htmlFile = Object.values(bundle).find(f => f.type === 'asset' && f.fileName.endsWith('.html'))
      if (!htmlFile) return
      let html = htmlFile.source
      for (const chunk of Object.values(bundle)) {
        if (chunk.type === 'chunk' && chunks.some(c => chunk.name?.startsWith(c))) {
          const tag = `<link rel="modulepreload" crossorigin href="/${chunk.fileName}">`
          html = html.replace('</head>', `  ${tag}\n  </head>`)
        }
      }
      htmlFile.source = html
    }
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), nonBlockingCSS(), preloadCriticalChunks()],
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
