<template>
  <div class="page">
    <h1>Welcome boilerplate</h1>
    <p>Boilerplate intro stuff</p>

    <base-back-link link="/" />

    <base-input label="Input label" />
    <base-select label="Select label" :options="['a', 'b']" />

    <base-button size="large" @click="showModal = true">
      Button text (test modal)
    </base-button>

    <base-modal v-if="showModal" @close="showModal = false">aaa</base-modal>

    <base-badge text="aaa" />
    <base-badge variant="highlight" text="highlight" />
    <base-badge variant="transparent" text="transparent" />

    <base-accordion title="What are UI elements?">
      UI (User Interface) elements are the visual components used to build
      interfaces in software applications. These elements include buttons, text
      fields, icons, menus, checkboxes, sliders, and many more. UI elements
      serve as the building blocks of a user interface and are essential for
      creating a well-designed and intuitive user experience. They allow users
      to interact with software applications in a way that is easy to understand
      and navigate. Good UI design should take into account the context of use,
      the user's needs and goals, and the characteristics of the platform on
      which the interface will be used. By effectively using UI elements,
      designers can create interfaces that are visually appealing, easy to use,
      and provide a positive user experience.
    </base-accordion>
  </div>
</template>

<script setup lang="ts">
const showModal = ref(false);
</script>

<style lang="postcss" scoped>
.page {
  padding: 1rem;
}
</style>
