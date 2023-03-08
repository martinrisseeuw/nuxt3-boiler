<template>
  <div class="app-modal">
    <div class="app-modal__bg" @click="$emit('close')" />
    <div class="app-modal__inner" @click="$emit('close')">
      <button class="app-modal__close">
        <x-circle-icon size="40" />
      </button>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { XCircleIcon } from "@zhuowenli/vue-feather-icons";

onMounted(() => {
  console.log("aa");
});

onUnmounted(() => {
  console.log("bb");
});

// export default {
//   components: {
//     XCircleIcon,
//   },
//   mounted() {
//     document.body.style.overflow = "hidden";
//   },
//   beforeUnmount() {
//     document.body.style.overflow = "visible";
//   },
// };
</script>

<style lang="postcss" scoped>
.app-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  padding: var(--spacing-8);

  &__close {
    position: absolute;
    right: var(--spacing-2);
    top: var(--spacing-2);
    cursor: pointer;
    padding: var(--spacing-2);
    transition: transform 0.1s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__bg {
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &__inner {
    background: white;
    margin: auto;
    padding: var(--spacing-8);
    border-radius: var(--radius-2);
    width: 640px;
    position: relative;
    z-index: 2;
  }
}
</style>
