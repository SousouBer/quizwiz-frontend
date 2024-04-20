<template>
  <div
    style="animation: hideToast 5s !important"
    class="pb-1 rounded-lg shadow-2xl overflow-hidden"
    :class="{
      'bg-green-600': this.result === 'success',
      'bg-bright-yellow': this.result === 'warning',
      'bg-red-500': this.result === 'error',
    }"
  >
    <span
      class="absolute top-0 right-0 h-full w-full transform bg-charcoal-gray"
      style="animation: backgroundAnimation 5s !important"
    ></span>
    <div class="relative flex items-center p-3 gap-3 bg-charcoal-gray">
      <IconToastWarning :color="iconColor" />
      <div class="flex flex-col">
        <span class="text-white font-bold text-lg">{{ title }}</span>
        <span class="text-gray-300 text-sm">{{ description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import IconToastWarning from "@/components/icons/IconToastWarning.vue";
export default {
  props: {
    result: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  components: {
    IconToastWarning,
  },

  computed: {
    iconColor() {
      if (this.result === "success") {
        return "#047857";
      } else if (this.result === "warning") {
        return "#FFD21F";
      } else if (this.result === "error") {
        return "#DC2626";
      }

      return "#CBD5E0";
    },
  },
};
</script>
