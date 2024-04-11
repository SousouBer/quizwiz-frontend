<template>
  <div class="flex gap-8 my-2">
    <span class="text-saturated-blue font-semibold">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
      default: "history",
    },
  },
};
</script>
