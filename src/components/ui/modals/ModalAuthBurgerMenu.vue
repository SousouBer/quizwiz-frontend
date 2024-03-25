<template>
  <layout-blurr @click="closeAuthModal">
    <div @click.stop class="bg-white w-3/4 flex flex-col p-6">
      <div class="flex flex-col gap-6">
        <div class="flex justify-between items-center border-b pb-4">
          <icon-quiz-wiz-main></icon-quiz-wiz-main>
          <div class="w-6 h-6">
            <icon-x @click="closeAuthModal" class="w-full h-full"></icon-x>
          </div>
        </div>
        <link-quizzes class="font-semibold border-b pb-4"></link-quizzes>
      </div>
      <div v-if="isAuthenticated">
        <div class="flex flex-row gap-4 items-center border-b mb-4">
          <div class="w-16 py-6">
            <icon-unauthenticated-user
              class="w-full h-full"
            ></icon-unauthenticated-user>
          </div>
          <div class="flex flex-col">
            <span class="text-base font-semibold">Soso Beriashvili</span>
            <span class="text-sm">Soso@gmail.com</span>
          </div>
        </div>
        <button-base
          class="text-blue-500 text-center bg-very-light-gray font-bold rounded p-3 w-full"
          >Log out</button-base
        >
      </div>
      <div
        v-if="!isAuthenticated"
        class="flex flex-col items-center justify-center gap-6 pt-6"
      >
        <button-base
          class="text-white bg-black w-full text-center rounded p-3 font-bold"
          >Sign up</button-base
        >
        <button-base
          class="text-blue-500 text-center bg-very-light-gray font-bold rounded p-3 w-full"
          >Log in</button-base
        >
      </div>
    </div>
  </layout-blurr>
</template>

<script>
import LinkQuizzes from "@/components/ui/links/LinkQuizzes.vue";
import ButtonBase from "@/components/ui/buttons/ButtonBase.vue";
import IconX from "@/components/icons/IconX.vue";
import IconQuizWizMain from "@/components/icons/IconQuizWizMain.vue";
import IconUnauthenticatedUser from "@/components/icons/IconUnauthenticatedUser.vue";
import LayoutBlurr from "@/components/layouts/LayoutBlurr.vue";

export default {
  components: {
    IconQuizWizMain,
    LinkQuizzes,
    ButtonBase,
    IconX,
    IconUnauthenticatedUser,
    LayoutBlurr,
  },

  data() {
    return {
      isAuthenticated: false,
    };
  },

  methods: {
    closeAuthModal() {
      this.$emit("close-auth-modal");
    },
  },
};
</script>
