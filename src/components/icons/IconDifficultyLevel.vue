<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="20" :fill="backgroundColor" />
    <path
      d="M20.8333 11.6667L12.5 21.6667H20L19.1667 28.3334L27.5 18.3334H20L20.8333 11.6667Z"
      :stroke="color"
      stroke-width="1.66667"
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
      default: "40",
    },
    height: {
      type: String,
      required: true,
      default: "40",
    },
    color: {
      type: String,
      required: true,
      default: "#7F56D9",
    },
    backgroundColor: {
      type: String,
      required: true,
      default: "#F4EBFF",
    },
  },
};
</script>
