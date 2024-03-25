<template>
  <div class="flex flex-col gap-6">
    <div class="flex justify-between items-center border-b pb-4">
      <icon-quiz-wiz-main></icon-quiz-wiz-main>
      <div class="w-6 h-6">
        <icon-x
          @click="this.$emit('close-modal')"
          class="w-full h-full"
        ></icon-x>
      </div>
    </div>
    <link-quizzes class="font-semibold border-b pb-4"></link-quizzes>
  </div>
</template>

<script>
import LinkQuizzes from "@/components/ui/links/LinkQuizzes.vue";
import IconX from "@/components/icons/IconX.vue";
import IconQuizWizMain from "@/components/icons/IconQuizWizMain.vue";

export default {
  components: {
    IconQuizWizMain,
    LinkQuizzes,
    IconX,
  },
};
</script>
