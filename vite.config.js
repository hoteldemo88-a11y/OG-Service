import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { readFileSync, existsSync } from 'fs'

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

function localApiProxy() {
  const nodemailerPromise = import('nodemailer').then(m => m.default || m)

  function loadEnv() {
    const envPath = resolve(__dirname, '.env')
    if (!existsSync(envPath)) return {}
    const env = {}
    readFileSync(envPath, 'utf-8').split('\n').forEach(line => {
      const match = line.match(/^([^#=]+)=(.*)$/)
      if (match) env[match[1].trim()] = match[2].trim()
    })
    return env
  }

  return {
    name: 'local-api-proxy',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url !== '/api/contact' || req.method !== 'POST') return next()
        ;(async () => {
          let body = ''
          for await (const chunk of req) body += chunk
          let data
          try { data = JSON.parse(body) } catch { data = {} }
          const { name, phone, email, brand, service, location, message, pincode, source } = data
          console.log(`[API] Received: ${name} ${phone} (source: ${source})`)
          if (!name || !phone) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify({ error: 'Name and phone are required' }))
          }
          try {
            const env = loadEnv()
            const smtpEmail = env.SMTP_EMAIL || process.env.SMTP_EMAIL
            const smtpPass = env.SMTP_PASSWORD || process.env.SMTP_PASSWORD
            if (!smtpEmail || !smtpPass) {
              console.error('[API] SMTP credentials missing')
              res.writeHead(500, { 'Content-Type': 'application/json' })
              return res.end(JSON.stringify({ error: 'Email not configured. Set SMTP_EMAIL and SMTP_PASSWORD in .env' }))
            }
            const nodemailer = await nodemailerPromise
            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: { user: smtpEmail, pass: smtpPass },
            })
            const sourceLabel = source === 'brand-detail' ? 'Brand Detail Page' : source === 'homepage' ? 'Homepage' : 'Contact Page'
            await transporter.sendMail({
              from: `"RO Service Center" <${smtpEmail}>`,
              to: smtpEmail,
              replyTo: email || undefined,
              subject: `New Service Request from ${name}${brand ? ` — ${brand}` : ''}`,
              html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden">
                <div style="background:linear-gradient(135deg,#2563eb,#0ea5e9);padding:24px;text-align:center">
                  <h1 style="color:#fff;margin:0;font-size:22px">New Service Request</h1>
                  <p style="color:rgba(255,255,255,.85);margin:6px 0 0;font-size:14px">${sourceLabel} Form Submission</p>
                </div>
                <div style="padding:24px;background:#f8fafc">
                  <table style="width:100%;border-collapse:collapse">
                    <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#334155;width:140px">Name</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#475569">${name}</td></tr>
                    <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#334155">Phone</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#475569"><a href="tel:${phone}">${phone}</a></td></tr>
                    ${email ? `<tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#334155">Email</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#475569">${email}</td></tr>` : ''}
                    ${brand ? `<tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#334155">Brand</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#475569">${brand}</td></tr>` : ''}
                    ${service ? `<tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#334155">Service</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#475569">${service}</td></tr>` : ''}
                    ${pincode ? `<tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#334155">Pincode</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#475569">${pincode}</td></tr>` : ''}
                    ${location ? `<tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#334155">Location</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#475569">${location}</td></tr>` : ''}
                    ${message ? `<tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#334155">Message</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#475569">${message}</td></tr>` : ''}
                  </table>
                </div>
                <div style="padding:16px 24px;text-align:center;color:#94a3b8;font-size:12px;background:#fff">Submitted via RO Service Center Website (Local Dev)</div>
              </div>`,
            })
            console.log(`[API] Email sent for ${name} (${sourceLabel})`)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ success: true, message: 'Form submitted successfully' }))
          } catch (err) {
            console.error('[API] Email error:', err.message)
            res.writeHead(500, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'Failed to send email. Please try again or call us.' }))
          }
        })()
      })
    },
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
  plugins: [react(), tailwindcss(), localApiProxy(), nonBlockingCSS(), preloadCriticalChunks()],
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
