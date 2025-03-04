import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/teams-pwa-project/',
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Microsoft Teams',
        short_name: 'Teams',
        description: 'Microsoft Teams for Ubuntu',
        theme_color: '#464EB8',
        icons: [
          {
            src: 'icons/teams-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/teams-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
        start_url: '/teams-pwa-project/',
        display: 'standalone',
        background_color: '#464EB8'
      }
    })
  ]
})