<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.17336 11.29L4.02669 13.1433L4.04336 -1.81198e-05H6.04336L6.02669 13.1333L7.86936 11.29L9.28336 12.704L6.67136 15.3166C6.23379 15.7541 5.64041 15.9998 5.02169 15.9998C4.40297 15.9998 3.80959 15.7541 3.37202 15.3166L0.760023 12.704L2.17336 11.29Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: true,
      default: "10",
    },
    height: {
      type: String,
      required: true,
      default: "16",
    },
    color: {
      type: String,
      required: true,
      default: "#667085",
    },
  },
};
</script>
