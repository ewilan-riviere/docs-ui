<script lang="ts" setup>
import { nextTick, onMounted } from 'vue'
import type { Heading } from '~/types'

defineProps<{
  headings?: Heading[],
  scrollTop?: boolean
}>()

const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

const scrollSpy = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id')
      if (entry.intersectionRatio > 0) {
        document
          .querySelector(`nav li a[href="#${id}"]`)
          ?.parentElement?.classList.add('active')
      } else {
        document
          .querySelector(`nav li a[href="#${id}"]`)
          ?.parentElement?.classList.remove('active')
      }
    })
  })

  // Track all sections that have an `id` applied
  document
    .querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]')
    .forEach((section) => {
      observer.observe(section)
    })
}

onMounted(() => {
  nextTick(() => {
    scrollSpy()
  })
})
</script>

<template>
  <div
    class="hidden xl:sticky xl:top-[2rem] xl:-mr-6 xl:block xl:h-[calc(100vh-2rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6"
  >
    <nav
      aria-labelledby="on-this-page-title"
      class="w-56 px-2"
    >
      <h2
        id="on-this-page-title"
        class="font-display text-sm font-medium text-slate-900 dark:text-white"
      >
        On this page
      </h2>
      <ol
        v-if="headings?.length"
        role="list"
        class="mt-4 space-y-3 text-sm"
      >
        <li
          v-for="(heading, index) in headings"
          :key="index"
          :style="`margin-left: ${heading.level ?? 0 * 0.25}rem`"
        >
          <a
            class="font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
            :href="`#${heading.slug}`"
          >{{ heading.title }}</a>
        </li>
      </ol>
      <div
        v-if="scrollTop"
        class="flex"
      >
        <button
          class="p-1.5 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md mt-3"
          @click="scrollToTop"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </nav>
  </div>
</template>

<style lang="css" scoped>
a {
  @apply text-current !important;
}
.active a {
  @apply text-primary-600 dark:text-primary-500 !important;
}
</style>
