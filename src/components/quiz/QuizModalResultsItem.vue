<template>
  <div class="flex flex-col justify-start gap-2 py-3 border-b">
    <span class="font-medium text-gray-800">{{ title }}</span>
    <span :style="{ color: color }" class="font-medium">{{ itemResult }}</span>
  </div>
</template>

<script>
export default {
  props: {
    itemTitle: {
      type: String,
      required: true,
    },
    itemResult: {
      type: String,
      required: true,
    },
    color: {
      Type: String,
      default: "#000",
    },
  },

  computed: {
    title() {
      if (this.itemTitle === "quiz_name") {
        return "Quiz Name";
      } else if (this.itemTitle === "quiz_level") {
        return "Quiz Level";
      } else if (this.itemTitle === "time") {
        return "Time";
      } else if (this.itemTitle === "wrong_answers") {
        return "Mistakes";
      } else if (this.itemTitle === "correct_answers") {
        return "Right Answers";
      }
      return "";
    },
  },
};
</script>
