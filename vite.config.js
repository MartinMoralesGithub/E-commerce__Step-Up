import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {rollupOptions: {
      // ... other options
      output: {chunkSizeWarningLimit: 1000000, // Set warning limit to 1 MB},
    },},},
})
