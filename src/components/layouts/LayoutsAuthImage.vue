<template>
  <div class="bg-pale-yellow h-screen items-center w-custom-45 hidden lg:flex">
    <img :src="srcLink" alt="Auth background cover" />
  </div>
</template>

<script>
export default {
  props: {
    srcLink: {
      type: String,
      required: true,
    },
  },
};
</script>
