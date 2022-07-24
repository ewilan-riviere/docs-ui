# Docs Vue Library

[![docs-ui-vue](https://img.shields.io/npm/v/docs-ui-vue.svg?style=flat-square&color=cb3837&logo=npm&logoColor=ffffff)](https://www.npmjs.com/package/docs-ui-vue)
<!-- [![tests](https://github.com/ewilan-riviere/docs-ui-vue/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/ewilan-riviere/docs-ui-vue/actions/workflows/test.yml) -->

[![vue](https://img.shields.io/static/v1?label=Vue&message=v3.x&color=4FC08D&style=flat-square&logo=vue.js&logoColor=ffffff)](https://vuejs.org)

📀 [**bookshelves-project**](https://gitlab.com/bookshelves-project) : Bookshelves repository  
💻 [**bookshelves.ink**](https://bookshelves.ink): demo  
📚 [**documentation.bookshelves.ink**](https://bookshelves-documentation.netlify.app): documentation, if this link not work, you can check doc on [this repository](https://gitlab.com/bookshelves-project/bookshelves-doc)  

A collection of [Vue 3](https://vuejs.org) components for documentation projects, built for [Markdoc](https://markdoc.io).

> Experimental package, use with caution. Only Vue 3.x is supported.

## Install as package

```bash
pnpm add docs-ui-vue
```

```bash
npm i docs-ui-vue
```

### Globally

Import and register the module as a plugin in `src/main.ts`.

```ts
import { createApp } from 'vue'
import App from './App.vue'
import DocsUiVue from 'docs-ui-vue' // import the library
import 'docs-ui-vue/dist/style.css' // import style

const app = createApp(App)

app
  .use(DocsUiVue)
  .mount('#app')
```

### Per-component

Into `src/**/your-component.vue`

```vue
<script setup lang="ts">
import { DocsFence } from 'docs-ui-vue'
import 'docs-ui-vue/dist/style.css'
</script>

<template>
  <div>
    <docs-fence />
  </div>
</template>
```

## Install as UMD

Use the UMD build from [Unpkg](https://unpkg.com/docs-ui-vue), available as `DocsUiVue` in the global scope.

```html
<script src="/vendor/vue.js" />
<script src="https://unpkg.com/docs-ui-vue" />
```

## Usage

Usage instructions here.

## Contributing

[![node](https://img.shields.io/static/v1?label=Node&message=v14.18&color=339933&style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/en)
[![pnpm](https://img.shields.io/static/v1?label=pnpm&message=v7.x&color=F69220&style=flat-square&logo=pnpm&logoColor=ffffff)](https://pnpm.io)

```bash
git clone git@github.com:ewilan-riviere/docs-ui-vue.git
cd docs-ui-vue
pnpm i
pnpm dev
```

Fork repository to make [pull requests](https://github.com/ewilan-riviere/docs-ui-vue/pulls).

## License

MIT © [Ewilan Rivière](https://github.com/ewilan-riviere)

## Credits

- Template [syropian/vue-3-package-skeleton](https://github.com/syropian/vue-3-package-skeleton)
- [Tailwind CSS](https://tailwindcss.com) and [Tailwind UI](https://tailwindui.com) for design
- [Markdoc](https://markdoc.io) for markdown framework
- [Docus](https://docus.com) for components design

## Guides

### Render functions

- [vuejs.org/api/render-function.html](https://vuejs.org/api/render-function.html)
- [vuejs.org/guide/extras/render-function.html#rendering-slots](https://vuejs.org/guide/extras/render-function.html#rendering-slots)
- [sambitsahoo.com/blog/introduction-to-render-functions-in-vue-3.html](https://sambitsahoo.com/blog/introduction-to-render-functions-in-vue-3.html)
