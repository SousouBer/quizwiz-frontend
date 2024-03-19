<template>
  <header class="flex justify-between items-center px-24 py-4 border-b">
    <div class="flex items-center gap-14">
      <link-quiz-wiz-main></link-quiz-wiz-main>
      <link-quizzes></link-quizzes>
    </div>
    <div class="flex justify-center items-center gap-1">
      <base-button class="text-white bg-black hover:bg-gray-900"
        >Sign up</base-button
      >
      <base-button class="text-blue-500 hover:text-blue-600"
        >Log in</base-button
      >
    </div>
  </header>
</template>

<script>
import BaseButton from "../ui/buttons/BaseButton.vue";
import LinkQuizzes from "../ui/links/LinkQuizzes.vue";
import LinkQuizWizMain from "../ui/links/LinkQuizWizMain.vue";

export default {
  components: {
    BaseButton,
    LinkQuizzes,
    LinkQuizWizMain,
  },
};
</script>
