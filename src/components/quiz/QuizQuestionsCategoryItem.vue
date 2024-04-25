<template>
  <div class="relative">
    <span class="text-medium-dark-gray text-sm font-semibold">{{ label }}</span>
    <IconDot
      v-if="!isLastItem"
      width="4"
      height="4"
      class="absolute top-0 right-0 transform translate-x-4 translate-y-3"
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
    isLastItem: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
