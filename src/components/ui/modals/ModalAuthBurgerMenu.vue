<template>
  <div class="absolute top-0 left-0 bg-white w-3/4 flex flex-col p-6">
    <div class="flex flex-col gap-8 mb-6">
      <div class="flex justify-between items-center">
        <icon-quiz-wiz-main></icon-quiz-wiz-main>
        <div class="w-6 h-6">
          <icon-x class></icon-x>
        </div>
      </div>
      <link-quizzes></link-quizzes>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <button-base
        class="text-white bg-black w-full text-center rounded p-3 font-bold"
        >Sign up</button-base
      >
      <button-base
        class="text-blue-500 text-center font-bold rounded p-3 w-full"
        >Log in</button-base
      >
    </div>
  </div>
</template>

<script>
import LinkQuizzes from "@/components/ui/links/LinkQuizzes.vue";
import ButtonBase from "@/components/ui/buttons/ButtonBase.vue";
import IconX from "@/components/icons/IconX.vue";
import IconQuizWizMain from "@/components/icons/IconQuizWizMain.vue";

export default {
  components: {
    IconQuizWizMain,
    LinkQuizzes,
    ButtonBase,
    IconX,
  },
};
</script>
