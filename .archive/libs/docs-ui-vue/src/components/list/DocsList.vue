<script lang="ts" setup>
defineProps<{
  items: string[] | number[],
}>()
</script>

<template>
  <ul class="list">
    <li
      v-for="(item,index) in items"
      :key="index"
      class="list-chip"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="list-chip-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<style lang="css" scoped>
.list {
  @apply list-inside list-none my-5 space-y-2;
  & .list-chip {
    @apply list-none flex items-center space-x-2;
    & .list-chip-icon {
      @apply h-5 w-5 text-primary-400 dark:text-primary-500;
    }
  }
}
</style>