<script lang="ts" setup>
import { ref, useSlots } from 'vue'

interface MainType {
  bgColor: string
  iconColor: string
  titleColor: string
  textColor: string
  icon: string
}

const props = defineProps<{
  /**
   * Determine color and icon of the alert.
   * @values info, success, warning, error
   */
  type?: 'info' | 'success' | 'warning' | 'error'
  /**
   * Set custom title to replace typed title.
   * @values string
   */
  title?: string
  /**
   * Remove icon and title.
   */
  anonymous?: boolean
}>()

const slots = useSlots()
const mainType = ref<MainType>()

const setMainType = () => {
  const types: Record<string, MainType> = {
    info: {
      bgColor: 'color-info-bg',
      iconColor: 'color-info-icon',
      titleColor: 'color-info-title',
      textColor: 'color-info-text',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    },
    success: {
      bgColor: 'color-success-bg',
      iconColor: 'color-success-icon',
      titleColor: 'color-success-title',
      textColor: 'color-success-text',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    },
    warning: {
      bgColor: 'color-warning-bg',
      iconColor: 'color-warning-icon',
      titleColor: 'color-warning-title',
      textColor: 'color-warning-text',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>',
    },
    error: {
      bgColor: 'color-error-bg',
      iconColor: 'color-error-icon',
      titleColor: 'color-error-title',
      textColor: 'color-error-text',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    },
  }

  mainType.value = types[props.type ?? 'info']
}
setMainType()
</script>

<template>
  <div
    :class="mainType?.bgColor"
    class="alert"
  >
    <div class="alert-flex">
      <div
        v-if="!anonymous"
        class="alert-shrink"
      >
        <div
          :class="mainType?.iconColor"
          class="alert-icon"
        >
          <span v-html="mainType?.icon" />
        </div>
      </div>
      <div class="alert-text-block">
        <div
          :class="mainType?.titleColor"
          class="alert-title"
        >
          <span v-if="title">{{ title }}</span>
          <span
            v-else-if="!anonymous"
            class="alert-title-capitalize"
          >{{
            type
          }}</span>
        </div>
        <div
          v-if="slots.default"
          :class="[
            anonymous
              ? 'alert-text-content-no-margin'
              : 'alert-text-content-margin',
            mainType?.textColor,
          ]"
          class="alert-text-content"
        >
          <div class="alert-text">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.alert {
  @apply rounded-md p-4 my-4;
  & .alert-flex {
    @apply flex;
  }
  & .alert-shrink {
    @apply flex-shrink-0;
  }

  & .alert-icon {
    @apply h-6 w-6;
  }

  & .alert-text-content-no-margin {
    @apply mt-0;
  }
  & .alert-text-content-margin {
    @apply !mt-2;
  }
  & .alert-text-content {
    @apply mb-0 !text-base;
  }
  & .alert-text-block {
    @apply ml-3;
    & .alert-title {
      @apply font-semibold !m-0 !text-base;
      & .alert-title-capitalize {
        @apply capitalize;
      }
    }
    & .alert-text :deep(p) {
      @apply m-0;
    }
  }
}
.color-info-bg {
  @apply bg-blue-50 dark:bg-blue-900;
}
.color-info-icon {
  @apply text-blue-400 dark:text-blue-500;
}
.color-info-title {
  @apply text-blue-800 dark:text-blue-400;
}
.color-info-text {
  @apply text-blue-700 dark:text-blue-400;
}
.color-success-bg {
  @apply bg-green-50 dark:bg-green-900;
}
.color-success-icon {
  @apply text-green-400 dark:text-green-500;
}
.color-success-title {
  @apply text-green-800 dark:text-green-400;
}
.color-success-text {
  @apply text-green-700 dark:text-green-400;
}
.color-warning-bg {
  @apply bg-yellow-50 dark:bg-yellow-900;
}
.color-warning-icon {
  @apply text-yellow-400 dark:text-yellow-500;
}
.color-warning-title {
  @apply text-yellow-800 dark:text-yellow-400;
}
.color-warning-text {
  @apply text-yellow-700 dark:text-yellow-400;
}
.color-error-bg {
  @apply bg-red-50 dark:bg-red-900;
}
.color-error-icon {
  @apply text-red-400 dark:text-red-500;
}
.color-error-title {
  @apply text-red-800 dark:text-red-400;
}
.color-error-text {
  @apply text-red-700 dark:text-red-400;
}
</style>
