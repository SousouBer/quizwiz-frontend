<template>
  <span
    @click="isCategory ? toggleCategory(id) : toggleLevel(id)"
    :style="[dynamicClasses, isIncluded]"
    class="border-red-500 cursor-pointer rounded-3xl px-4 py-1 font-semibold whitespace-nowrap text-sm"
  >
    {{ label }}
  </span>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    isCategory: {
      type: Boolean,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
  },

  methods: {
    toggleCategory(id) {
      this.$store.commit("toggleSelectedCategory", id);
    },

    toggleLevel(id) {
      this.$store.commit("toggleSelectedLevel", id);
    },
  },

  computed: {
    dynamicClasses() {
      let selectedItems;

      if (this.isCategory) {
        selectedItems = this.$store.getters.selectedCategories;
      } else {
        selectedItems = this.$store.getters.selectedLevels;
      }

      return !selectedItems.includes(this.id)
        ? {
            color: this.backgroundColor,
            backgroundColor: this.color,
          }
        : { color: this.color, backgroundColor: this.backgroundColor };
    },

    // Highlight filter chips if any of them includes input from inner search.
    isIncluded() {
      const searchInput = this.$store.getters.innerSearch.toLowerCase();

      if (
        searchInput.trim() &&
        this.label.toLowerCase().includes(searchInput)
      ) {
        return { border: "2px dashed green" };
      }
      return false;
    },
  },
};
</script>
