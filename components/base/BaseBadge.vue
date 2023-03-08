<template>
  <div class="app-badge" :class="[variant]">
    <span>{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: "black" | "transparent" | "highlight";
  text: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "black",
});

const variant = ref(`app-badge--${props.variant}`);
</script>

<style lang="postcss" scoped>
.app-badge {
  display: inline-block;
  align-items: center;
  gap: var(--spacing-2);
  border-radius: var(--radius-1);
  padding: 0 var(--spacing-2);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 1px;

  &--transparent {
    background: rgba(0, 0, 0, 0.1);
  }

  &--highlight {
    background: var(--colors-primary-500);
    color: var(--colors-white);
  }

  &--black {
    background: rgba(0, 0, 0, 1);
    color: var(--colors-white);
  }
}
</style>
