<template>
  <button
    :class="{ 'border-b-2 border-black': !isModalButton }"
    class="pt-2 pb-4 font-semibold text-black whitespace-nowrap"
  >
    {{ category }}
  </button>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: "All quizzes",
      required: true,
    },
    isModalButton: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
