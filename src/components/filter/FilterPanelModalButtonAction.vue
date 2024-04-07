<template>
  <button
    :class="{
      'bg-saturated-blue hover:bg-blue-500 text-white rounded-xl font-semibold px-7 py-2':
        actionType === 'confirm',
      'font-normal text-medium-dark-gray ': actionType === 'reset',
    }"
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
};
</script>
