<template>
  <div class="relative">
    <IconPin
      v-if="isFirstItem"
      class="absolute top-0 left-0 transform translate-y-0.5 -translate-x-8"
    />
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
import IconPin from "@/components/icons/IconPin.vue";

export default {
  components: {
    IconDot,
    IconPin,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    isFirstItem: {
      type: Boolean,
      default: false,
    },
    isLastItem: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
