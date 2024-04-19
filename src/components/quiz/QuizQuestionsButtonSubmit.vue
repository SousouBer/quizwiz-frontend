<template>
  <button
    class="bg-saturated-blue transition-colors duration-300 hover:bg-blue-400 text-base font-semibold w-full text-white rounded-lg py-3"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
