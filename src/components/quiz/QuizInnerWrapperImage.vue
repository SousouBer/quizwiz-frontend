<template>
  <div class="w-full rounded-2xl overflow-hidden">
    <img class="w-full h-full" :src="link" alt="Man in space" />
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
      default: "public/images/man-in-space.svg",
    },
  },
};
</script>
