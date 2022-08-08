import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts()
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: 'DocsUiVue',
      formats: ['es', 'cjs', 'umd'],
      fileName: (ext) => `docs-ui-vue.${ext}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        }
      }
    },
    target: 'esnext',
    sourcemap: false,
  }
})
