import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  base: '/simurg-testdrive/',
  server: {
    port: 5179,
    open: false,
  },
});
