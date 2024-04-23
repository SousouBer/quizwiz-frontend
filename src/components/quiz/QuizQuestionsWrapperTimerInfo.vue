<template>
  <div
    class="flex flex-col bg-gray-100 sm:bg-white border border-gray-300 sm:border-white rounded-lg py-2 px-4 flex-1"
  >
    <span class="font-Railway font-bold text-xs text-black sm:hidden">{{
      label
    }}</span>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
