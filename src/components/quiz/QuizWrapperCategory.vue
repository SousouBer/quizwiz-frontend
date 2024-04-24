<template>
  <div class="relative">
    <span class="text-saturated-blue font-semibold">{{ label }}</span>
    <iconDot
      v-if="!lastItem"
      width="4"
      height="4"
      class="absolute right-0 top-0 transform translate-y-2.5 translate-x-4"
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
    lastItem: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
