<template>
  <label :for="labelFor">
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
