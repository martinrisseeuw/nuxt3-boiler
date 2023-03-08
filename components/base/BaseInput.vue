<template>
  <label class="app-input">
    <input
      v-bind="$attrs"
      ref="input"
      class="app-input__input"
      :class="{
        'app-input__input--has-value': modelValue,
        'app-input__input--has-error': isError,
        'app-input__input--is-success': isSuccess,
      }"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
      @invalid="$emit('invalid')"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="$emit('change')"
    />

    <check-icon
      v-if="isSuccess"
      class="icon-indicator icon-indicator__success"
      size="20"
    />

    <x-icon
      v-if="hasError"
      class="icon-indicator icon-indicator__invalid"
      size="20"
    />

    <span class="app-input__label">{{ label }}</span>
    <span v-if="note" class="app-input__note">{{ note }}</span>
    <span class="errors" v-if="isError">
      <span class="errors__error" v-for="error in errors">
        {{ error }}
      </span>
    </span>
  </label>
</template>

<script setup>
import {
  CheckIcon,
  XIcon,
  CheckCircleIcon,
} from "@zhuowenli/vue-feather-icons";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  errors: {
    type: Array,
    default: () => [],
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
  note: {
    type: String,
    default: "",
  },
});

const isFocus = ref(false);

const emit = defineEmits([
  "update:modelValue",
  "focus",
  "blur",
  "change",
  "invalid",
]);

const handleFocus = (event) => {
  isFocus.value = true;
  emit("focus", event.target.value);
};

const handleBlur = (event) => {
  isFocus.value = false;
  emit("blur", event.target.value);
};

const onInput = (event) => {
  emit("update:modelValue", event.target.value);
};

const hasError = computed(() => props.errors.length > 0);
const isError = computed(() => props.errors.length > 0 && !isFocus.value);
const isSuccess = computed(() =>
  Boolean(props.errors.length === 0 && props.modelValue)
);
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
    padding: var(--spacing-4) var(--spacing-4) 0;
    background: var(--colors-warm-600);

    &:focus {
      box-shadow: inset 0 0 0 2px var(--colors-primary-500);
    }

    &:focus,
    &:not(:placeholder-shown) {
      ~ .app-input__label {
        top: var(--spacing-3);
        font-size: var(--text-xs);
      }
    }

    &--has-error {
      border-color: red;

      &:focus {
        box-shadow: inset 0 0 0 2px red;
      }
    }
  }

  .icon-indicator {
    position: absolute;
    right: var(--spacing-3);
    top: var(--spacing-5);

    &__invalid {
      color: red;
    }

    &__success {
      color: green;
    }
  }

  .errors {
    display: grid;
    gap: var(--spacing-1);
    font-size: var(--text-sm);
    padding: var(--spacing-1);
    color: red;
  }
}
</style>
