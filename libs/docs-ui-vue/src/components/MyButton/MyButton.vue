<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{
  type?: 'submit' | 'reset' | 'button'
}>()
</script>

<template>
  <button :type="type">
    <slot />
  </button>
</template>

<style lang="css" scoped>
button {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #000;
  font-size: 1.2em;
  padding: 0.5em 1em;
}
</style>
