<template>
  <div class="app-container">
    <div class="app-container__wrapper">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.app-container {
  width: 100%;
  padding: 0 var(--spacing-5);

  @media (--screen-lg-up) {
    padding: 0 var(--spacing-6);
  }

  &__wrapper {
    max-width: 93rem;
    margin: auto;
  }
}
</style>
