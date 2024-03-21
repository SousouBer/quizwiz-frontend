<template>
  <div class="absolute top-0 left-0 bg-white w-3/4 flex flex-col">
    <div>
      <link-quiz-wiz-main></link-quiz-wiz-main>
      <link-quizzes></link-quizzes>
    </div>
    <div class="flex flex-col">
      <base-button>Sign up</base-button>
      <base-button>Log in</base-button>
    </div>
  </div>
</template>

<script>
import LinkQuizWizMain from "@/components/ui/links/LinkQuizWizMain.vue";
import LinkQuizzes from "@/components/ui/links/LinkQuizzes.vue";

export default {
  components: {
    LinkQuizWizMain,
    LinkQuizzes,
  },
};
</script>
