
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // Fallback to empty string if environment variable is not set during build
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || "")
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  server: {
    port: 3000
  }
});
