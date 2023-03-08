<template>
  <div v-if="isOpen" class="cookie-bar">
    <p>{{ $t("cookie-message") }}</p>

    <div class="cookie-bar__actions">
      <app-button size="large" full-width @click="accept">Prima</app-button>
      <app-button size="large" variant="light-solid" full-width @click="deny">
        Nee, bedankt
      </app-button>
    </div>
  </div>
</template>

<script>
import { bootstrap } from "vue-gtag";

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    if (localStorage.getItem("GDPR:accepted") === null) {
      this.isOpen = true;
    }
  },
  methods: {
    deny() {
      this.isOpen = false;
      localStorage.setItem("GDPR:accepted", false);
    },

    accept() {
      bootstrap().then((gtag) => {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", true);
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
.cookie-bar {
  position: fixed;
  z-index: 9999;
  bottom: var(--spacing-6);
  right: var(--spacing-6);
  background: white;
  padding: var(--spacing-6);
  max-width: 400px;
  border: 1px solid var(--colors-gray-200);
  display: grid;
  gap: var(--spacing-4);
  border-radius: var(--radius-4);
  box-shadow: var(--shadow-xl);

  &__actions {
    display: grid;
    gap: var(--spacing-2);
    grid-template-columns: 1fr 1fr;
  }
}
</style>
