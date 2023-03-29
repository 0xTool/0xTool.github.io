import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 9487,
  },
  resolve: {
    alias: {
      'assets/': `${__dirname}/src/assets/`,
      'containers/': `${__dirname}/src/containers/`,
      'components/': `${__dirname}/src/components/`,
    },
  }
})
