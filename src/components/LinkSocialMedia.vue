<template>
  <div class="mb-4">
    <a
      :href="link"
      class="text-xs text-gray-500 font-semibold hover:text-gray-600 transition-colors duration-300 ease-in-out"
    >
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
  },
};
</script>
