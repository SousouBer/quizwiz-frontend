<template>
  <div
    :class="{
      'border-green-600': this.result === 'success',
      'border-bright-yellow': this.result === 'warning',
      'border-red-500': this.result === 'error',
    }"
    class="flex items-center p-3 gap-3 bg-charcoal-gray border-b-4 rounded-lg shadow-2xl"
  >
    <IconToastWarning :color="iconColor" />
    <div class="flex flex-col">
      <span class="text-white font-bold text-lg">{{ title }}</span>
      <span class="text-gray-300 text-sm">{{ description }}</span>
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
