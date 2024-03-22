<template>
  <div class="absolute top-0 left-0 bg-white w-3/4 flex flex-col p-6">
    <div>
      <div class="flex flex-col gap-8 mb-6">
        <div class="flex justify-between items-center">
          <icon-quiz-wiz-main></icon-quiz-wiz-main>
          <div class="w-6 h-6">
            <icon-x></icon-x>
          </div>
        </div>
        <link-quizzes></link-quizzes>
      </div>
      <div class="flex flex-row gap-4 items-center">
        <div class="w-16">
          <icon-x></icon-x>
        </div>
        <div class="flex flex-col">
          <span class="text-base font-semibold">Soso Beriashvili</span>
          <span>Soso@gmail.com</span>
        </div>
      </div>
      <button-base class="font-bold w-full text-center mt-4"
        >Log out</button-base
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
    LinkQuizzes,
    ButtonBase,
    IconQuizWizMain,
    IconX,
  },
};
</script>
