<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
    </Head>

    <div class="app">
      <app-top-bar />
      <nuxt-page />
    </div>
  </div>
</template>

<script setup>
const title = ref("Nuxt 3 boilerplate");
const description = ref("martinr.nl ininitial Nuxt 3 boilerplate");

useHead({
  htmlAttrs: { lang: "en" },
});
</script>

<style lang="postcss" scoped>
.app {
  min-height: 100vh;
  background: var(--colors-gray-50);
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
