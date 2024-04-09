<template>
  <span
    class="font-bold flex items-center justify-center absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-black rounded-full text-white border border-white"
    >{{ count }}</span
  >
</template>

<script>
export default {
  props: {
    count: {
      type: String,
      required: true,
    },
  },
};
</script>
