<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.86995 4.71002L6.01661 2.85668L5.99995 16H3.99995L4.01662 2.86668L2.17395 4.71002L0.759949 3.29602L3.37195 0.683352C3.80951 0.245919 4.4029 0.000183105 5.02162 0.000183105C5.64033 0.000183105 6.23372 0.245919 6.67128 0.683352L9.28328 3.29602L7.86995 4.71002Z"
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
