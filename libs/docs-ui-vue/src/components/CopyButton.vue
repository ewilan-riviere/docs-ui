<script lang="ts" setup>
import { ref, watch } from 'vue'

const props = defineProps<{
  text?:string
}>()

const copied = ref(false)
const code = ref('')

const copyButton = ref<HTMLButtonElement>()
const clipboardRaw =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Copy</title><rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path></svg>'
const clipboardCheckRaw =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>'

watch(
  () => props.text,
  (text) => {
    if (text) {
      code.value = text
    }
  }
)

const copy = async () => {
  let success = false
  if (navigator.clipboard)
    await navigator.clipboard
      .writeText(code.value)
      .then(() => {
        success = true
      })
      .catch(() => {
        //
      })

  if (success && copyButton.value) {
    copyButton.value.innerHTML = clipboardCheckRaw
    copied.value = true
  }
  setTimeout(() => {
    if (copyButton.value) {
      copyButton.value.innerHTML = clipboardRaw
      copied.value = false
    }
  }, 2500)
}

</script>

<template>
  <div class="fence-copy">
    <div
      :class="copied ? 'fence-copy-show' : 'fence-copy-hide'"
      class="fence-copy-copied"
    >
      Copied!
    </div>
    <button
      ref="copyButton"
      class="fence-copy-icon"
      @click="copy"
    >
      <span v-html="clipboardRaw"></span>
    </button>
  </div>
</template>

<style lang="css" scoped>
.fence-copy {
    @apply absolute top-0 right-0 flex items-center text-white bg-gray-800 bg-opacity-30;
    & .fence-copy-copied {
      @apply text-xs transition-opacity duration-100;
    }
    & .fence-copy-opacity-100 {
      @apply opacity-100;
    }
    & .fence-copy-hide {
      @apply opacity-0;
    }
    & .fence-copy-icon {
      @apply p-1 rounded-md m-2 w-6 h-6;
    }
  }
</style>