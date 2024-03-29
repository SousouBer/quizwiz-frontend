<template>
  <div
    :class="{
      'cursor-pointer border border-grayish-blue transition-all duration-300 ease-in-out hover:bg-paleBlue':
        !modalButtonFilter,
    }"
    class="relative flex items-center justify-center gap-3 px-4 py-2 rounded-xl"
  >
    <IconFilterSettings :color="filterIconColor" />
    <span
      :class="
        modalButtonFilter ? 'text-white select-none' : 'text-grayish-blue'
      "
      >Filter</span
    >
  </div>
</template>

<script>
import IconFilterSettings from "@/components/icons/IconFilterSettings.vue";

export default {
  props: {
    modalButtonFilter: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    IconFilterSettings,
  },

  computed: {
    filterIconColor() {
      return this.modalButtonFilter ? "#fff" : "#667085";
    },
  },
};
</script>
