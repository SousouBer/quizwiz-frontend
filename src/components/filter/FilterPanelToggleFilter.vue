<template>
  <div
    :class="{
      'cursor-pointer border border-grayish-blue transition-all duration-300 ease-in-out hover:bg-paleBlue':
        !modalToggleButton,
    }"
    class="relative flex items-center justify-center gap-3 px-4 py-2 rounded-xl"
  >
    <IconFilterSettings :color="filterIconColor" />
    <span
      :class="
        modalToggleButton ? 'text-white select-none' : 'text-grayish-blue'
      "
      >Filter</span
    >
  </div>
</template>

<script>
import IconFilterSettings from "@/components/icons/IconFilterSettings.vue";

export default {
  props: {
    modalToggleButton: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  components: {
    IconFilterSettings,
  },

  computed: {
    filterIconColor() {
      return this.modalToggleButton ? "#fff" : "#667085";
    },
  },
};
</script>
