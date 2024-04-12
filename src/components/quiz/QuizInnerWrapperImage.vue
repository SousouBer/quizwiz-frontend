<template>
  <div class="w-full">
    <img class="w-full h-full" :src="svg" alt="Man in space" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
      default: "@/assets/images/man-in-space.svg",
    },
  },
};
</script>
