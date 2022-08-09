# @ewilan-riviere/docs-ui-vue

A collection of [Vue 3](https://vuejs.org) components for documentation projects, built for [Markdoc](https://markdoc.io). Built with Tailwind CSS (it's not a require dependency, all style is available as `css`).

[![docs-ui-vue](https://img.shields.io/npm/v/@ewilan-riviere/docs-ui-vue.svg?style=flat-square&color=cb3837&logo=npm&logoColor=ffffff)](https://www.npmjs.com/package/@ewilan-riviere/docs-ui-vue)
[![vue](https://img.shields.io/static/v1?label=Vue&message=v3.x&color=4FC08D&style=flat-square&logo=vue.js&logoColor=ffffff)](https://vuejs.org)
<!-- [![tests](https://github.com/ewilan-riviere/docs-ui-vue/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/ewilan-riviere/docs-ui-vue/actions/workflows/test.yml) -->
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://gitlab.com/ewilan-riviere/docs-ui-vue/-/blob/main/LICENSE)

> Experimental package, use with caution. Only Vue 3.x is supported.

## Installation (package)

Install with your favorite package manager.

```bash
pnpm add docs-ui-vue
```

```bash
npm i docs-ui-vue
```

You can also use the UMD build from [Unpkg](https://unpkg.com/docs-ui-vue), available as `DocsUiVue` in the global scope.

## Features

- **DocsAlert** to display explicit messages
  - `type` for differents colors: `info`, `success`, `warning`, `error` with icons
  - `title` option, default is `type`
  - `anonymous` boolean to display the message without a title or icon
- **DocsFence** to show some code
  - Associated copy button
  - `highlight.js` for syntax highlighting
  - Filename option for better readability (replace language): `ts` => `ts[main.ts]`

## Usage - Vue 3

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

### Alternative: per-component

Into `src/**/your-component.vue`

```vue
<script setup lang="ts">
import { DocsFence } from 'docs-ui-vue'
import 'docs-ui-vue/dist/style.css'

const code = `const app = createApp(App)

app
  .use(DocsUiVue)
  .mount('#app')`
</script>

<template>
  <div>
    <docs-fence language="ts[main.ts]">
      {{ code }}
    </docs-fence>
  </div>
</template>
```

## Roadmap

- [ ] Add more components
- [ ] Add tests
- [ ] Add documentation
- [ ] Nuxt 3 support

## Contributing

[![node](https://img.shields.io/static/v1?label=Node&message=v14.18&color=339933&style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/en)
[![pnpm](https://img.shields.io/static/v1?label=pnpm&message=v7.x&color=F69220&style=flat-square&logo=pnpm&logoColor=ffffff)](https://pnpm.io)

Contributions are always welcome!
Fork repository to make [pull requests](https://github.com/ewilan-riviere/docs-ui-vue/pulls).

```bash
git clone git@github.com:ewilan-riviere/docs-ui-vue.git
cd docs-ui-vue
pnpm i
pnpm dev
```

## API Reference

### DocsFence

| Parameter  | Type     | Description                                                    |
| :--------- | :------- | :------------------------------------------------------------- |
| `language` | `string` | Can be just language, like `ts` or with filename `ts[main.ts]` |

## Related

Here are some related projects

[Markdoc](https://markdoc.io)

## License

[MIT](https://gitlab.com/ewilan-riviere/docs-ui-vue/-/blob/main/LICENSE)

## Credits

- [Tailwind CSS](https://tailwindcss.com) and [Tailwind UI](https://tailwindui.com) for design
- [Markdoc](https://markdoc.io) for markdown framework
- [Docus](https://docus.com) for components design
