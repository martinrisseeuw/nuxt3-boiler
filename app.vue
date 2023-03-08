<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
    </Head>

    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<script setup>
const title = ref("Nuxt 3 boilerplate");
const description = ref("martinr.nl ininitial Nuxt 3 boilerplate");

useHead({
  htmlAttrs: { lang: "en" },
});
</script>

<style lang="postcss" scoped></style>
