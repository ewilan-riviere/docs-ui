<script lang="ts" setup>
import { onMounted, ref, useSlots } from 'vue'
import CopyButton from '../CopyButton.vue'

const code = ref('')

const slots = useSlots()
onMounted(() => {
  if (slots && slots.default && slots.default()[0]) {
    const defaultSlot = slots.default()[0].el?.data
    const vueSlot = slots.default()[0].children
    code.value = defaultSlot ? defaultSlot : vueSlot
  }
})
</script>

<template>
  <div class="show">
    <CopyButton :text="code" />
    <pre class="h-full"><slot /></pre>
  </div>
</template>

<style lang="css" scoped>
.show {
  @apply relative min-h-[2.5rem];
  & pre {
    @apply p-5 rounded-md bg-gray-800 overflow-auto;
    & :deep(p) {
      @apply !m-0;
    }
  }
}
</style>
