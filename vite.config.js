import { resolve } from 'path';
import { defineConfig } from 'vite';
import json from '@rollup/plugin-json';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [json(), vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        chaos: resolve(__dirname, 'chaos.html'),
        gallery: resolve(__dirname, 'gallery.html'),
      },
    },
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
});
