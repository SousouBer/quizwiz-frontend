<template>
  <div class="w-full">
    <img class="w-full h-full" :src="src" alt="Man in space" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
      default: "public/images/man-in-space.svg",
    },
  },
};
</script>
