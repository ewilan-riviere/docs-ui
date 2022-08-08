// export { default as DocsAlert } from './components/alert'
import * as components from './components'
import type { Heading } from './types'
import './index.css'
import { App } from 'vue'

const DocsUiVue = {
  install(app: App): void {
    for (const componentName in components) {
      //@ts-expect-error avoid error for basic vue component registeration
      const component = components[componentName]
      app.component(component.name, component)
    }
  }
}

export default DocsUiVue
export { Heading }
export * from './components'
