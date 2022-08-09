import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'DocsUIVue',
      formats: ['es', 'umd'],
      fileName: format => `docs-ui-vue.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
      // external: ['react', 'react-dom', 'styled-components'],
      // output: {
      //   globals: {
      //     'react': 'React',
      //     'react-dom': 'ReactDOM',
      //     'styled-components': 'styled',
      //   },
      // },
    },
  },
})
