<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.99935 4.16663V15.8333M9.99935 15.8333L15.8327 9.99996M9.99935 15.8333L4.16602 9.99996"
      :stroke="color"
      stroke-width="1.67"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: true,
      default: "20",
    },
    height: {
      type: String,
      required: true,
      default: "20",
    },
    color: {
      type: String,
      required: true,
      default: "#4B69FD",
    },
  },
};
</script>
