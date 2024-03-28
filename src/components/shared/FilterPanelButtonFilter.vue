<template>
  <div
    class="flex items-center justify-center gap-3 px-4 py-2 rounded-xl cursor-pointer border border-grayish-blue transition-all duration-300 ease-in-out hover:bg-paleBlue"
  >
    <IconFilterSettings />
    <span class="text-grayish-blue">Filter</span>
  </div>
</template>

<script>
import IconFilterSettings from "@/components/icons/IconFilterSettings.vue";

export default {
  components: {
    IconFilterSettings,
  },
};
</script>
