<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 36 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.69922 14.9483L25.1444 14.9483C27.4413 14.9483 29.3034 16.8103 29.3034 19.1073L29.3034 20.633C29.3034 22.9299 27.4413 24.792 25.1444 24.792L10.7096 24.792"
      :stroke="color"
      stroke-width="2.08134"
      stroke-linejoin="round"
    />
    <path
      d="M10.3437 10.5732C8.63521 12.2818 7.67729 13.2397 5.96875 14.9482L10.3438 19.3232"
      :stroke="color"
      stroke-width="2.08134"
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
      default: "36",
    },
    height: {
      type: String,
      required: true,
      default: "35",
    },
    color: {
      type: String,
      required: true,
      default: "#4B69FD",
    },
  },
};
</script>
