<template>
  <footer class="px-24 py-8 flex gap-20">
    <link-quiz-wiz-main></link-quiz-wiz-main>
    <div>
      <h4 class="text-sm font-semibold mb-4">Content</h4>
      <link-quizzes class="text-xs"></link-quizzes>
    </div>
    <div>
      <h4 class="text-sm font-semibold mb-4">Contact us</h4>
      <div class="mb-4">
        <span class="text-xs text-gray-500">Email: example@mail.com</span>
      </div>
      <div>
        <span class="text-xs text-gray-500">Tel: example +55555555</span>
      </div>
    </div>
    <div>
      <h4 class="text-sm font-semibold mb-4">Social media</h4>
      <link-social-media link="#">Facebook</link-social-media>
      <link-social-media link="#">Linked In</link-social-media>
    </div>
  </footer>
</template>

<script>
import LinkSocialMedia from "../LinkSocialMedia.vue";
import LinkQuizzes from "../ui/links/LinkQuizzes.vue";
import LinkQuizWizMain from "../ui/links/LinkQuizWizMain.vue";

export default {
  components: {
    LinkSocialMedia,
    LinkQuizzes,
    LinkQuizWizMain,
  },
};
</script>
