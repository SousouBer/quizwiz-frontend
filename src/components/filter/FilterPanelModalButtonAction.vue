<template>
  <button
    :class="actionTypeClasses"
    class="text-lg sm:text-sm whitespace-nowrap cursor-pointer transition-all duration-300"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    actionType: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },

  computed: {
    actionTypeClasses() {
      if (this.actionType === "confirm") {
        return "bg-saturated-blue hover:bg-blue-500 text-white rounded-xl font-semibold px-7 py-2";
      } else if (this.actionType === "reset") {
        return "font-normal text-medium-dark-gray";
      }
      return "";
    },
  },
};
</script>
