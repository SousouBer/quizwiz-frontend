<template>
  <footer class="px-24 py-8 flex gap-20">
    <icon-quiz-wiz-main></icon-quiz-wiz-main>
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
import IconQuizWizMain from "@/components/icons/IconQuizWizMain.vue";
import LinkSocialMedia from "@/components/LinkSocialMedia.vue";
import LinkQuizzes from "@/components/ui/links/LinkQuizzes.vue";

export default {
  components: {
    LinkSocialMedia,
    LinkQuizzes,
    IconQuizWizMain,
  },
};
</script>
