<template>
  <nuxt-link class="back-link" :to="link">
    <arrow-left-icon />
    Terug
  </nuxt-link>
</template>

<script setup lang="ts">
import { ArrowLeftIcon } from "@zhuowenli/vue-feather-icons";

interface Props {
  link: string;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<style lang="postcss" scoped></style>
