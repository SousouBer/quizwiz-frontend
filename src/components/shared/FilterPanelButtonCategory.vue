<template>
  <button
    class="pt-2 pb-4 border-b-2 border-black font-semibold text-black whitespace-nowrap"
  >
    {{ category }}
  </button>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true,
    },
  },
};
</script>
