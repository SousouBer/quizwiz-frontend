<template>
  <label class="text-sm text-charcoal font-normal pb-2" :for="labelFor">
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    labelFor: String,
  },
};
</script>
