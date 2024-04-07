<template>
  <div class="flex items-center justify-center py-4 sm:hidden">
    <div
      @click="toggleSelectionButtons"
      class="flex items-center justify-center text-center w-11/12 bg-gray-100 rounded-3xl"
    >
      <span
        :class="{
          'rounded-3xl border border-light-gray bg-white text-saturated-blue':
            !isFilterActive,
          'text-gray-400': isFilterActive,
        }"
        class="font-semibold py-3 w-1/2"
        >Filter</span
      >
      <span
        class="font-semibold py-3 w-1/2"
        :class="{
          'rounded-3xl border border-light-gray bg-white text-saturated-blue':
            isFilterActive,
          'text-gray-400': !isFilterActive,
        }"
        >Sorting</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFilterActive: true,
    };
  },

  methods: {
    toggleSelectionButtons() {
      this.isFilterActive = !this.isFilterActive;
      this.$emit("toggle-selection-buttons", this.isFilterActive);
    },
  },
};
</script>
