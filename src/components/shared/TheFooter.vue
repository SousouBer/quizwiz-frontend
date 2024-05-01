<template>
  <footer class="px-8 py-8 sm:px-24">
    <div class="flex flex-col gap-10 sm:gap-20 sm:flex-row">
      <routerLink to="landing">
        <icon-quiz-wiz-main />
      </routerLink>
      <div>
        <h4 class="text-sm font-semibold mb-4">Content</h4>
        <link-quizzes class="text-xs" />
      </div>
      <div>
        <h4 class="text-sm font-semibold mb-4">Contact us</h4>
        <div class="mb-4">
          <span class="text-xs text-gray-500"
            >Email: {{ contacts?.email }}</span
          >
        </div>
        <div>
          <span class="text-xs text-gray-500"
            >Tel: {{ contacts?.telephone }}</span
          >
        </div>
      </div>
      <div>
        <h4 class="text-sm font-semibold mb-4">Social media</h4>
        <link-social-media :link="contacts?.facebook"
          >Facebook</link-social-media
        >
        <link-social-media :link="contacts?.linkedin"
          >Linked In</link-social-media
        >
      </div>
    </div>
    <div class="pt-6 border-t flex sm:justify-end">
      <h4 class="text-xs text-medium-dark-gray">
        © 2024 QW. All rights reserved.
      </h4>
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

  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
  },
};
</script>
