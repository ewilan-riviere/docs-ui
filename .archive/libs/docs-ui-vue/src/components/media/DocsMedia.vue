<script lang="ts" setup>
defineProps<{
  src?: string
  alt?: string
  origin?: string
  shadow?: boolean
}>()
</script>

<template>
  <figure class="media">
    <img
      :src="src"
      :alt="alt"
      :class="{'media-img-shadow': shadow}"
      class="media-img"
      loading="lazy"
    />
    <figcaption class="media-caption">
      <span
        v-if="origin"
        class="media-caption-origin"
      >
        <a
          :href="origin"
          target="_blank"
          rel="noopener noreferrer"
        >{{ alt }}</a>
      </span>
      <span v-else>
        {{ alt }}
      </span>
    </figcaption>
  </figure>
</template>

<style lang="css" scoped>
.media {
  @apply my-5;
  & .media-img {
    @apply mx-auto;
  }
  & .media-img-shadow {
    @apply shadow;
  }
  & .media-caption {
    @apply mt-2 text-center italic;
    & .media-caption-origin {
      @apply underline underline-offset-2 text-center;
    }
  }
}
</style>