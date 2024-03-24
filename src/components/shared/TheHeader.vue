<template>
  <header
    class="flex justify-between items-center p-4 border-b relative md:px-24"
  >
    <div class="flex items-center gap-14">
      <div class="w-24">
        <icon-quiz-wiz-main class="h-full w-full"></icon-quiz-wiz-main>
      </div>
      <link-quizzes class="hidden md:block"></link-quizzes>
    </div>
    <div>
      <icon-burger-menu
        @click="openBurgerAuthModal"
        class="cursor-pointer md:hidden"
      ></icon-burger-menu>
    </div>
    <modal-auth-burger-menu
      @close-auth-modal="closeBurgerAuthModal"
      v-if="showBurgerAuthModal"
      class="z-10"
    ></modal-auth-burger-menu>
    <div
      v-if="$route.path !== '/landing'"
      class="hidden md:flex justify-center items-center gap-1"
    >
      <button-base class="text-white bg-black hover:bg-gray-900"
        >Sign up</button-base
      >
      <button-base class="text-blue-500 hover:text-blue-600"
        >Log in</button-base
      >
    </div>
    <div class="hidden md:flex justify-center items-center gap-1">
      <input-search></input-search>
      <div>
        <div class="cursor-pointer" @click="openLogoutModal">
          <icon-unauthenticated-user></icon-unauthenticated-user>
        </div>
        <modal-logout
          v-if="showLogoutModal"
          @close-logout-modal="closeLogoutModal"
        ></modal-logout>
      </div>
    </div>
  </header>
</template>

<script>
import ModalLogout from "@/components/ui/modals/ModalLogout.vue";
import ButtonBase from "@/components/ui/buttons/ButtonBase.vue";
import ModalAuthBurgerMenu from "@/components/ui/modals/ModalAuthBurgerMenu.vue";
import LinkQuizzes from "@/components/ui/links/LinkQuizzes.vue";
import IconBurgerMenu from "@/components/icons/IconBurgerMenu.vue";
import IconUnauthenticatedUser from "@/components/icons/IconUnauthenticatedUser.vue";
import IconQuizWizMain from "@/components/icons/IconQuizWizMain.vue";
import InputSearch from "@/components/InputSearch.vue";

export default {
  components: {
    ButtonBase,
    ModalLogout,
    ModalAuthBurgerMenu,
    IconQuizWizMain,
    LinkQuizzes,
    IconBurgerMenu,
    IconUnauthenticatedUser,
    InputSearch,
  },

  data() {
    return {
      showBurgerAuthModal: false,
      showLogoutModal: false,
    };
  },

  methods: {
    openBurgerAuthModal() {
      this.showBurgerAuthModal = true;
      document.body.classList.add("overflow-hidden");
    },
    closeBurgerAuthModal() {
      this.showBurgerAuthModal = false;
      document.body.classList.remove("overflow-hidden");
    },
    openLogoutModal() {
      this.showLogoutModal = true;
    },
    closeLogoutModal() {
      this.showLogoutModal = false;
    },
  },
};
</script>
