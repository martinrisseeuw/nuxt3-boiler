<script setup lang="ts">
import { ChevronDownIcon } from "@zhuowenli/vue-feather-icons";

interface Props {
  title?: string;
  variant?: "default";
}

const props = withDefaults(defineProps<Props>(), {
  title: "",
  variant: "default",
});

const panel = ref<HTMLDivElement>();
const active = ref(false);

const handleClick = () => {
  active.value = !active.value;

  if (!panel.value) return;

  if (panel.value?.style.maxHeight) {
    panel.value.style.maxHeight = "";
  } else {
    panel.value.style.maxHeight = panel.value.scrollHeight + "px";
  }
};
</script>

<template>
  <div class="base-accordion" :class="[`base-accordion--${variant}`]">
    <button
      class="base-accordion__button"
      :class="{ 'base-accordion__button--is-active': active }"
      @click="handleClick"
    >
      <span class="button-title">{{ title }}</span>
      <span
        class="base-accordion__icon"
        :class="{ 'base-accordion__icon--is-active': active }"
      >
        <chevron-down-icon />
      </span>
    </button>
    <div ref="panel" class="base-accordion__panel">
      <div class="base-accordion__panel-inner">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.base-accordion {
  color: var(--colors-primary-800);
  border-bottom: 1px solid var(--colors-gray-100);

  &__panel {
    max-height: 0;
    overflow: hidden;
  }

  &__panel-inner {
    padding: var(--spacing-4);
    border-top: 1px solid var(--colors-gray-100);
  }

  .button-title {
    opacity: 1;
    transform: none;
    transition: all 0.1s ease-in-out;
  }

  &__button {
    transition: 0.2s;
    display: grid;
    grid-template-columns: 1fr auto;
    width: 100%;
    padding: var(--spacing-4);
    font-size: var(--text-lg);
    font-weight: 500;
    cursor: pointer;
  }

  &__icon {
    transform-origin: center;

    &--is-active {
      transform: scaleY(-1);
    }
  }

  &__panel {
    transition: max-height 0.1s ease-out;
  }
}
</style>
