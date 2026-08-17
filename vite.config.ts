import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'YaniceDS',
      formats: ['es'],
      fileName: () => 'yanice-ds.js',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: { assetFileNames: 'yanice-ds.[ext]' },
    },
    cssCodeSplit: false,
    sourcemap: true,
    emptyOutDir: false, // tsc writes .d.ts here first
  },
});
