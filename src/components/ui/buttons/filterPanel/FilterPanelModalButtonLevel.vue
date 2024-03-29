<template>
  <button class="cursor-pointer bg-blue-400 text-white px-4 py-1 rounded-3xl">
    {{ levelTitle }}
  </button>
</template>

<script>
export default {
  props: {
    levelTitle: {
      type: String,
      required: true,
    },
  },
};
</script>
