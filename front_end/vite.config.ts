import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  // base: '/milestonesofttech/',  // ✅ Important for subfolder deployment
  plugins: [
    react(),
    tailwindcss()
  ],
   resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    // port: 3000,
    host: '0.0.0.0',
    open: true, // Automatically open the app in the browser
   },
})
