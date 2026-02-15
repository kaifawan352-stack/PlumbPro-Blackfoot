
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // Inject the API_KEY from the environment into the client-side code.
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  server: {
    port: 3000
  }
});
