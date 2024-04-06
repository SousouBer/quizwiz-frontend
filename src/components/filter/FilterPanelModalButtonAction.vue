<template>
  <button
    :class="{
      'bg-saturated-blue hover:bg-blue-500 text-white rounded-xl font-semibold px-7 py-2':
        actionType === 'confirm',
      'font-normal text-medium-dark-gray ': actionType === 'reset',
    }"
    class="whitespace-nowrap cursor-pointer transition-all duration-300"
  >
    {{ buttonType }}
  </button>
</template>

<script>
export default {
  props: {
    actionType: {
      type: String,
      required: true,
    },
  },

  computed: {
    buttonType() {
      if (this.actionType === "confirm") {
        return "Confirm";
      } else if (this.actionType === "reset") {
        return "Reset all filters";
      }
      return "";
    },
  },
};
</script>
