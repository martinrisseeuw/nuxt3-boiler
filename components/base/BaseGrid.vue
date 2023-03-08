<template>
  <div class="app-grid" :class="[variant]">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String,
    default: "3-columns",
  },
});

const variant = ref(`app-grid--${props.variant}`);
</script>

<style lang="postcss" scoped>
.app-grid {
  display: grid;
  gap: var(--spacing-8);

  &--2-columns {
    @media (--screen-lg-up) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &--3-columns {
    @media (--screen-lg-up) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (--screen-xl-up) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
