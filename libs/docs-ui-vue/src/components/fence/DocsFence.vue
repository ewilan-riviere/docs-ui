<script lang="ts" setup>
import hljs from 'highlight.js'
import { onMounted, ref, useSlots } from 'vue'
import 'highlight.js/styles/night-owl.css'
import CopyButton from '../CopyButton.vue'

const props = defineProps<{
  language?: string
}>()

const code = ref('')
const highlightedCode = ref<HTMLElement>()

const params = ref<{
  language?: string
  title?: string
}>()

const getParams = () => {
  if (props.language) {
    const titleRexgex = new RegExp('[.*]')
    if (titleRexgex.test(props.language)) {
      const splitted = props.language.split('[')
      const lang = splitted[0] ? splitted[0] : 'js'
      let title = splitted[1] ? splitted[1] : undefined
      if (title) {
        title = title.replace(']', '')
      }

      params.value = {
        language: lang,
        title: title,
      }
      return
    }

    params.value = {
      language: props.language,
    }
  }
}

const slots = useSlots()
onMounted(() => {
  getParams()
  if (slots && slots.default && slots.default()[0]) {
    const defaultSlot = slots.default()[0].el?.data
    const vueSlot = slots.default()[0].children
    code.value = defaultSlot ? defaultSlot : vueSlot

    const highlightedConverter = hljs.highlightAuto(code.value, [
      params.value?.language ?? 'js',
    ])
    if (highlightedCode.value) {
      highlightedCode.value.innerHTML = highlightedConverter.value
    }
  }
})
</script>

<template>
  <div class="fence">
    <div class="fence-relative">
      <div
        v-if="params"
        class="fence-language"
      >
        <span v-if="params.title">{{ params.title }}</span>
        <span v-else>{{ params.language }}</span>
      </div>
      <CopyButton :text="code" />
      <pre
        ref="highlightedCode"
        class="fence-code"
      ><slot /></pre>
    </div>
  </div>
</template>

<style lang="css" scoped>
.fence {
  @apply !mt-10;
  & .fence-relative {
    @apply relative;
  }
  & .fence-language {
    @apply absolute -top-6 left-0 bg-gray-700 m-2 text-white px-2 py-1 text-xs rounded-md;
  }
  & .fence-code {
    @apply mt-0 overflow-auto bg-gray-800 px-3 pt-4 pb-3 rounded-md max-h-[45rem] text-white;
    scrollbar-width: thin;
  }
}
</style>
