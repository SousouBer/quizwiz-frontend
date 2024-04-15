<template>
  <div class="relative">
    <span class="text-medium-dark-gray text-sm font-semibold">{{ label }}</span>
    <IconDot
      class="absolute top-0 right-0 transform translate-x-5 translate-y-5"
    />
  </div>
</template>

<script>
import IconDot from "@/components/icons/IconDot.vue";

export default {
  components: {
    IconDot,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    isFirstItem: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>
