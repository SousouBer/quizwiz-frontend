<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 1 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="0.5"
      y1="0.5"
      x2="0.499999"
      y2="13.5"
      :stroke="color"
      stroke-opacity="0.4"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: true,
      default: "1",
    },
    height: {
      type: String,
      required: true,
      default: "14",
    },
    color: {
      type: String,
      required: true,
      default: "black",
    },
  },
};
</script>
