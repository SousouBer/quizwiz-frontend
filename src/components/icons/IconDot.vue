<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 4 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="2" cy="2" r="2" fill="#D0D5DD" />
  </svg>
</template>

<script>
export default {
  width: {
    type: String,
    required: true,
    default: "4",
  },
  height: {
    type: String,
    required: true,
    default: "4",
  },
};
</script>
