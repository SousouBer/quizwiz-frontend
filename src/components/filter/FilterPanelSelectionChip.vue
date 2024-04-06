<template>
  <span
    :style="{ color: color, backgroundColor: backgroundColor }"
    :class="{
      'border-b-2 border-black pt-2 pb-4 px-1 rounded-none': !isModalChip,
    }"
    class="cursor-pointer rounded-3xl px-4 py-1 font-semibold text-black whitespace-nowrap"
  >
    {{ label }}
  </span>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "All quizzes",
      required: true,
    },
    isModalChip: {
      type: Boolean,
      default: false,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
  },
};
</script>
