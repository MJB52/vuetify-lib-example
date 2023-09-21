import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import typescript2 from 'rollup-plugin-typescript2';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true
    }),
    dts({
      insertTypesEntry: true
    }),
    typescript2({
      check: false,
      include: ['src/components/**/*.vue'],
      tsconfigOverride: {
        compilerOptions: {
          outDir: 'dist',
          sourceMap: true,
          declaration: true,
          declarationMap: true
        }
      },
      exclude: ['vite.config.ts']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vuetify-lib-example',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `lib.${format}.js`
    },
    //required or vite build overwrites vue-tsc declarations
    emptyOutDir: false,
    rollupOptions: {
      external: ['vue', 'vuetify'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') return 'style.css';
          return assetInfo.name;
        },
        exports: 'named',
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: 'Vue',
          vuetify: 'Vuetify'
        }
      }
    }
  }
});
