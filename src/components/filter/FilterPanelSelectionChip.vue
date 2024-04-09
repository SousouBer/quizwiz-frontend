<template>
  <span
    @click="toggleSelect"
    :style="modalChipClasses"
    :class="[defineSelectedClasses, defineUnselectedClasses]"
    class="cursor-pointer rounded-3xl px-4 py-1 font-semibold whitespace-nowrap text-sm"
  >
    {{ label }}
  </span>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "All quizzes",
      required: true,
    },
    isModalChip: {
      type: Boolean,
      default: false,
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
    selectedColor: {
      type: String,
      required: true,
    },
    selectedBackgroundColor: {
      type: String,
      required: true,
    },
  },

  // I will probably change how this component is structured
  // when I start working with the actual data.
  data() {
    return {
      isSelected: false,
    };
  },

  methods: {
    toggleSelect() {
      this.isSelected = !this.isSelected;
    },
  },

  computed: {
    defineSelectedClasses() {
      if (!this.isModalChip && this.isSelected) {
        return "border-b-2 border-black pt-2 pb-4 px-1 rounded-none text-black";
      }
      return "";
    },

    defineUnselectedClasses() {
      if (!this.isModalChip && !this.isSelected) {
        return "border-b-2 border-transparent rounded-none px-1 pb-4 pt-2 text-medium-dark-gray";
      }
      return "";
    },

    modalChipClasses() {
      return this.isSelected
        ? {
            color: this.selectedColor,
            backgroundColor: this.selectedBackgroundColor,
          }
        : { color: this.color, backgroundColor: this.backgroundColor };
    },
  },
};
</script>
