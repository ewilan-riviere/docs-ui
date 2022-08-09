import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyLib',
      formats: ['es', 'umd'],
      fileName: format => `my-lib.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
  },
})
