<script setup lang="ts">
import { DocsBlockquote, DocsAlert, DocsFence, DocsList, DocsMedia, DocsShow, DocsToc } from 'docs-ui-vue'
import type { Heading } from 'docs-ui-vue'
import Layout from './components/Layout.vue'
import BasicRenderer from './components/BasicRenderer.vue'
import 'docs-ui-vue/dist/style.css'

const code = `import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'lib')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib', 'index.ts'),
      name: 'DocsUiVue',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    target: 'esnext',
    sourcemap: true
  }
})`
const show = `{% callout type="info/success/warning/error" title="The title" anonymous %}
Text
{% /callout %}`
const headings: Heading[] = [
  {
    'title': 'Quick start',
    'level': 2,
    'slug': 'quick-start'
  },
  {
    'title': 'Demo',
    'level': 2,
    'slug': 'demo'
  },
  {
    'title': 'Loops',
    'level': 3,
    'slug': 'loops'
  },
  {
    'title': 'Switch',
    'level': 3,
    'slug': 'switch'
  },
]
</script>

<template>
  <layout>
    <div class="prose prose-lg dark:prose-invert">
      <section>
        <BasicRenderer />
        <DocsMedia
          src="https://images.unsplash.com/photo-1496699536300-926fe21740ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Garibaldi Lake, Canada"
          origin="https://unsplash.com/@semajjat"
        />
      </section>
      <section>
        <DocsAlert
          type="warning"
        >
          <p>Occaecat ea id pariatur ut non consequat pariatur ex. Anim sint aute et dolore nisi incididunt tempor reprehenderit veniam veniam reprehenderit ipsum laboris exercitation. Ad do amet officia amet duis exercitation proident est magna. Nulla velit do qui minim nostrud culpa aliqua laborum. Excepteur tempor reprehenderit pariatur labore aliqua anim. Ea non qui laboris veniam aliquip excepteur Lorem exercitation.</p>
        </DocsAlert>
      </section>
      <section>
        <DocsBlockquote
          author="Ewilan Rivière"
          role="Developer"
        >
          Elit cillum anim consequat irure eu aliquip magna excepteur culpa fugiat nulla est sint. Ipsum exercitation mollit laboris laboris nostrud enim. Anim eiusmod irure minim cupidatat laborum esse aliquip consectetur ullamco qui enim. Duis incididunt ullamco minim eu non. Id do ad nisi sint pariatur ullamco id aliqua quis aliqua proident incididunt eu. Enim magna sit et aute esse nostrud veniam reprehenderit adipisicing. Incididunt pariatur exercitation consequat eu ut et labore nulla tempor.
        </DocsBlockquote>
      </section>
      <section>
        <DocsFence language="ts[vite.config.ts]">
          {{ code }}
        </DocsFence>
      </section>
      <section>
        <DocsList :items="[1,2,3]" />
      </section>
      <section>
        <DocsShow>
          {{ show }}
        </DocsShow>
      </section>
      <section>
        <DocsToc
          :headings="headings"
          scroll-top
        />
      </section>
    </div>
  </layout>
</template>
