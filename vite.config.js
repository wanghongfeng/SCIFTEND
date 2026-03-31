import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/SCIFTEND/',
  server: {
    proxy: {
      // 本地开发时的跨域代理（仅限 npm run dev 时有效）
      '/api': {
        target: 'https://comprehensive-bess-laosha007-0c6836df.koyeb.app/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})