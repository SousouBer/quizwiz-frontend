<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 10 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 1L3.5 6.5L1 4"
      :stroke="color"
      stroke-width="1.6666"
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
      default: "10",
    },
    height: {
      type: String,
      default: "8",
    },
    color: {
      type: String,
      default: "white",
    },
  },
};
</script>
