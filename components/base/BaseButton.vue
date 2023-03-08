<template>
  <component
    :is="tag || link ? NuxtLink : 'button'"
    :to="link"
    class="app-button"
    :class="[
      `app-button--${variant}`,
      `app-button--${size}`,
      { 'app-button--is-rounded': rounded },
      { 'app-button--full-width': fullWidth },
    ]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const NuxtLink = resolveComponent("NuxtLink");

interface Props {
  tag?: string;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  rounded?: boolean;
  link?: string | any; // TODO add link object type
  variant?:
    | "primary-solid"
    | "light-solid"
    | "danger-solid"
    | "primary-stroke"
    | "secondary-solid"
    | "secondary-stroke"
    | "black-solid"
    | "black-stroke"
    | "plain";
}

const props = withDefaults(defineProps<Props>(), {
  size: "medium",
  tag: "",
  link: "",
  variant: "primary-solid",
  fullWidth: false,
  rounded: false,
});
</script>

<style lang="postcss" scoped>
.app-button {
  appearance: none;
  cursor: pointer;
  border-radius: var(--radius-1);
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  width: fit-content;

  &:focus {
    box-shadow: inset 0 0 0 4px rgba(0, 0, 0, 0.2);
  }

  &--small {
    padding: var(--spacing-1) var(--spacing-2);
    font-size: var(--text-sm);
  }

  &--medium {
    padding: var(--spacing-1) var(--spacing-3);
    font-size: var(--text-sm);

    @media (--screen-lg-up) {
      padding: var(--spacing-2) var(--spacing-4);
      font-size: var(--text-base);
    }
  }

  &--full-width {
    width: 100%;
  }

  &--large {
    border-radius: var(--radius-1);
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
      background: var(--colors-secondary-400);
    }

    &:focus {
      box-shadow: inset 0 0 0 2px #ffde7b;
    }
  }

  &--primary-solid {
    background: var(--colors-primary-500);
    color: var(--colors-white);
    transition: background 0.1s ease-in-out;

    &:hover {
      background: var(--colors-primary-600);
    }
  }

  &--light-solid {
    background: var(--colors-gray-100);
    color: var(--colors-gray-700);
    transition: background 0.1s ease-in-out;

    &:hover {
      background: var(--colors-gray-200);
    }
  }

  &--danger-solid {
    background: var(--colors-red-700);
    color: var(--colors-white);
    transition: background 0.1s ease-in-out;

    &:hover {
      background: var(--colors-red-800);
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

  &--plain {
    padding: 0;
  }
}
</style>
