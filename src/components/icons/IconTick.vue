<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 12 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.5 3.5L5 7L10.5 1.5" :stroke="color" stroke-width="1.5" />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "12",
      required: true,
    },
    height: {
      type: String,
      default: "9",
      required: true,
    },
    color: {
      type: String,
      default: "white",
      required: true,
    },
  },
};
</script>
