<template>
  <div
    :class="{
      'relative ml-6 sm:ml-0 cursor-pointer border border-grayish-blue transition-all duration-300 ease-in-out hover:bg-paleBlue':
        !modalToggleButton,
    }"
    class="flex relative items-center justify-center gap-3 px-4 py-2 rounded-xl"
  >
    <IconFilterSettings :color="filterIconColor" />
    <span
      :class="
        modalToggleButton ? 'text-white select-none' : 'text-grayish-blue'
      "
      >Filter</span
    >
    <FilterPanelToggleFilterCount />
  </div>
</template>

<script>
import IconFilterSettings from "@/components/icons/IconFilterSettings.vue";
import FilterPanelToggleFilterCount from "@/components/filter/FilterPanelToggleFilterCount.vue";

export default {
  props: {
    modalToggleButton: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  components: {
    FilterPanelToggleFilterCount,
    IconFilterSettings,
  },

  computed: {
    filterIconColor() {
      return this.modalToggleButton ? "#fff" : "#667085";
    },
  },
};
</script>
