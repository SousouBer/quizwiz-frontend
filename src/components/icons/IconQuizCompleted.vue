<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="20" :fill="color" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M28.4947 12.3168L16.5613 23.8334L13.3947 20.4501C12.8113 19.9001 11.8947 19.8668 11.228 20.3334C10.578 20.8168 10.3947 21.6668 10.7947 22.3501L14.5447 28.4501C14.9113 29.0168 15.5447 29.3668 16.2613 29.3668C16.9447 29.3668 17.5947 29.0168 17.9613 28.4501C18.5613 27.6668 30.0113 14.0168 30.0113 14.0168C31.5113 12.4834 29.6947 11.1334 28.4947 12.3001V12.3168Z"
      :fill="backgroundColor"
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
      default: "#D1FADF",
    },
    backgroundColor: {
      type: String,
      required: true,
      default: "#12B76A",
    },
  },
};
</script>
