import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    // Plugin para redirecionar favicon.ico para favicon.svg
    {
      name: 'favicon-redirect',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/favicon.ico') {
            res.writeHead(302, { Location: '/favicon.svg' })
            res.end()
            return
          }
          next()
        })
      }
    }
  ],
  // CSP removida temporariamente para desenvolvimento
  // Se necessário, adicione CSP apenas em produção via meta tag no index.html
  // server: {
  //   headers: {
  //     'Content-Security-Policy': [
  //       "default-src 'self'",
  //       "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  //       "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  //       "font-src 'self' https://fonts.gstatic.com data:",
  //       "img-src 'self' data: blob:",
  //       "connect-src 'self' ws://localhost:* wss://localhost:*",
  //       "frame-src 'self'",
  //       "object-src 'none'",
  //       "base-uri 'self'"
  //     ].join('; ')
  //   }
  // },
  publicDir: 'public'
})

