<template>
  <label class="app-input">
    <select
      v-bind="$attrs"
      ref="input"
      class="app-input__input"
      :class="{
        'app-input__input--has-value': modelValue,
        'app-input__input--has-error': error,
      }"
      :value="modelValue"
      @input="onInput"
      @invalid="$emit('invalid')"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
      @change="$emit('change')"
    >
      <option
        v-for="option in options"
        :value="option"
        :selected="modelValue === option"
      >
        {{ option }}
      </option>
    </select>

    <span
      class="app-input__label"
      :class="{
        'app-input__label--has-value': modelValue,
      }"
    >
      {{ label }}
    </span>

    <span v-if="note" class="app-input__note">{{ note }}</span>
  </label>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  errorMessage: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: " ",
  },
  label: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: () => [],
  },
  note: {
    type: String,
    default: "",
  },
});

const error = ref();
const emit = defineEmits([
  "update:modelValue",
  "focus",
  "blur",
  "change",
  "invalid",
]);

const onInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<style lang="postcss" scoped>
.app-input {
  position: relative;
  display: block;

  &__label {
    position: absolute;
    white-space: nowrap;
    pointer-events: none;
    top: var(--spacing-5);
    max-width: calc(100% - 2rem);
    left: 1rem;
    line-height: 100%;
    font-weight: 400;
    transition: 0.1s ease-in-out;
    color: var(--colors-gray-700);
  }

  &__note {
    font-size: var(--text-sm);
    color: var(--colors-gray-600);
    display: inline-block;
    margin-top: 0.5rem;
  }

  &__input {
    border: 1px solid var(--colors-gray-500);
    line-height: 100%;
    width: 100%;
    height: var(--spacing-14);
    border-radius: var(--radius-2);
    appearance: none;
    padding: 26px var(--spacing-4) 0;
    background: var(--colors-warm-600);

    &:focus {
      box-shadow: inset 0 0 0 2px var(--colors-primary-500);
    }
  }

  .app-input__label {
    top: var(--spacing-3);
    font-size: var(--text-xs);
  }
}
</style>
