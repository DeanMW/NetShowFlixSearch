/// <reference types="vitest" />

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    Vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => ['nuxt-link'].includes(tag)
        }
      }
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom'
  }
});
