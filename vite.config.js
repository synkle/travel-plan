import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: '.',
  base: process.env.NODE_ENV === 'production' ? '/travel-plan/' : './',

  server: {
    port: 3000,
    open: true,
    cors: true,
    host: true
  },

  preview: {
    port: 8080,
    open: true
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',

    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        viewer: path.resolve(__dirname, 'viewer.html'),
        pdfExport: path.resolve(__dirname, 'pdf-export.html')
      },

      output: {
        manualChunks: {
          'vendor': ['marked'],
          'charts': ['chart.js'],
          'utils': ['qrcode', 'localforage']
        }
      }
    },

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './components'),
      '@days': path.resolve(__dirname, './days'),
      '@guides': path.resolve(__dirname, './guides'),
      '@budget': path.resolve(__dirname, './budget')
    }
  },

  optimizeDeps: {
    include: ['marked', 'chart.js', 'qrcode', 'localforage']
  }
});
