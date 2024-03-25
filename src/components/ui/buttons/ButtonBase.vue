<template>
  <router-link
    :to="view"
    class="rounded px-6 py-3 text-sm font-bold transition-colors duration-300 ease-in-out"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    view: String,
  },
};
</script>
