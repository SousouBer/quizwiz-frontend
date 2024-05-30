<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="5" cy="5" r="4" fill="#4B69FD" />
  </svg>
</template>

<script>
export default {
  width: {
    type: String,
    required: true,
    default: "10",
  },
  height: {
    type: String,
    required: true,
    default: "10",
  },
};
</script>
