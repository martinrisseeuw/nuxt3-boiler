<template>
  <nuxt-link
    :to="link"
    class="app-button"
    :class="[
      `app-button--${variant}`,
      `app-button--${size}`,
      { 'app-button--has-arrow': showArrow },
      { 'app-button--is-rounded': rounded },
    ]"
    v-bind="$attrs"
  >
    <slot />
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: "button",
  },
  link: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "medium",
    validator: (type) => ["small", "medium", "large"].includes(type),
  },
  variant: {
    type: String,
    default: "secondary-solid",
    validator: (type) =>
      [
        "primary-solid",
        "primary-stroke",
        "secondary-solid",
        "secondary-stroke",
        "black-solid",
        "black-stroke",
        "plain",
      ].includes(type),
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  showArrow: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="postcss" scoped>
.app-button {
  appearance: none;
  cursor: pointer;
  border-radius: var(--radius-2);
  font-weight: 600;
  text-align: center;

  &:focus {
    box-shadow: inset 0 0 0 4px rgba(0, 0, 0, 0.2);
  }

  &--small {
    padding: var(--spacing-1) var(--spacing-2);
    font-size: var(--text-sm);
  }

  &--medium {
    padding: var(--spacing-2) var(--spacing-4);
  }

  &--large {
    border-radius: var(--radius-2);
    padding: var(--spacing-4) var(--spacing-6);
  }

  &--is-rounded {
    border-radius: var(--radius-pill);
  }

  &--secondary-solid {
    background: var(--colors-secondary-500);
    transition: background 0.1s ease-in-out;
    color: var(--colors-black);

    &:hover {
      background: var(--colors-secondary-300);
    }

    &:focus {
      box-shadow: inset 0 0 0 2px #ffde7b;
    }
  }

  &--primary-solid {
    background: var(--colors-primary-500);
    transition: background 0.1s ease-in-out;

    &:hover {
      background: var(--colors-primary-600);
    }
  }

  &--black-solid {
    background: var(--colors-black);
    transition: background 0.1s ease-in-out;
    color: var(--colors-white);

    &:hover {
      background: var(--colors-gray-900);
    }
  }
}
</style>
