<script setup lang="ts">
const toggleDark = () => {
  const root = document.documentElement.classList
  if (root.contains('dark')) {
    root.toggle('light')
    root.remove('dark')

    localStorage.setItem('color-scheme', 'light')
  } else {
    root.toggle('dark')
    root.remove('light')

    localStorage.setItem('color-scheme', 'dark')
  }
}
</script>

<template>
  <button
    class="text-primary color-mode rounded-sm px-2 py-2 transition-colors duration-75 hover:bg-gray-100 focus:outline-transparent dark:hover:bg-gray-800"
    @click="toggleDark()"
  >
    <span
      class="sun"
      title="Switch to dark mode"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        class="h-4 w-4 fill-slate-400"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7 1a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V1Zm4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.657-5.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm-1.415 11.313-.707-.707a1 1 0 0 1 1.415-1.415l.707.708a1 1 0 0 1-1.415 1.414ZM16 7.999a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM7 14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm-2.536-2.464a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm0-8.486A1 1 0 0 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM3 8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Z"
        ></path>
      </svg>
    </span>
    <span
      class="moon"
      title="Switch to light mode"
    ><svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      class="h-4 w-4 fill-slate-400"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
      ></path>
    </svg>
    </span>
  </button>
</template>

<style lang="css" scoped>
.icon {
  @apply rounded-md p-2 text-gray-500 transition-colors duration-75 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700;
}
.moon {
  @apply hidden;
}
.dark .moon {
  @apply block;
}
.dark .sun {
  @apply hidden;
}
</style>
