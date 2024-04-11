<template>
  <div
    class="absolute left-1/2 bottom-0 transform -translate-y-full -translate-x-1/2 py-3 px-4 rounded-lg bg-gray-100 flex items-center justify-center gap-2 text-base cursor-pointer transition-colors duration-300 hover:bg-gray-50"
  >
    <IconArrowDown />
    <span class="text-saturated-blue font-semibold">Load more</span>
  </div>
</template>

<script>
import IconArrowDown from "@/components/icons/IconArrowDown.vue";

export default {
  components: {
    IconArrowDown,
  },
};
</script>
