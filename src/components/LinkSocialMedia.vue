<template>
  <div class="mb-4">
    <router-link
      :to="link"
      class="text-xs text-gray-500 font-semibold hover:text-gray-600 transition-colors duration-300 ease-in-out"
    >
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
  },
};
</script>
