import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  vite: {
    optimizeDeps: {
      include: ['three', 'gsap'],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            three: ['three'],
            gsap: ['gsap'],
          }
        }
      }
    }
  }
});
