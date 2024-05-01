<template>
  <header
    class="flex justify-between items-center p-4 border-b relative md:px-24"
  >
    <div class="flex items-center gap-14">
      <routerLink to="landing" class="w-24">
        <icon-quiz-wiz-main class="h-full w-full" />
      </routerLink>
      <link-quizzes class="hidden md:block" />
    </div>
    <div>
      <icon-burger-menu
        @click="openBurgerAuthModal"
        class="cursor-pointer md:hidden"
      />
    </div>
    <modal-auth-burger-menu
      @close-auth-modal="closeBurgerAuthModal"
      v-if="showBurgerAuthModal"
      class="z-10"
    />

    <div class="hidden md:flex justify-center items-center gap-1">
      <SearchInput v-if="route === 'quizzes'" />
      <div
        v-if="!userIsAuthenticated"
        class="hidden md:flex justify-center items-center gap-1"
      >
        <button-base
          view="/register"
          class="text-white bg-black hover:bg-gray-900"
          >Sign up</button-base
        >
        <button-base view="/login" class="text-blue-500 hover:text-blue-600"
          >Log in</button-base
        >
      </div>
      <div v-else>
        <div class="cursor-pointer" @click="toggleLogoutModal">
          <icon-unauthenticated-user />
        </div>
        <modal-logout
          v-if="showLogoutModal"
          @close-logout-modal="toggleLogoutModal"
        />
      </div>
    </div>
  </header>
</template>

<script>
import ModalLogout from "@/components/shared/ModalLogout.vue";
import ButtonBase from "@/components/ui/buttons/ButtonBase.vue";
import ModalAuthBurgerMenu from "@/components/shared/ModalAuthBurgerMenu.vue";
import LinkQuizzes from "@/components/ui/links/LinkQuizzes.vue";
import IconBurgerMenu from "@/components/icons/IconBurgerMenu.vue";
import IconUnauthenticatedUser from "@/components/icons/IconUnauthenticatedUser.vue";
import IconQuizWizMain from "@/components/icons/IconQuizWizMain.vue";
import SearchInput from "@/components/SearchInput.vue";

export default {
  components: {
    ButtonBase,
    ModalLogout,
    ModalAuthBurgerMenu,
    IconQuizWizMain,
    LinkQuizzes,
    IconBurgerMenu,
    IconUnauthenticatedUser,
    SearchInput,
  },

  props: {
    route: {
      type: String,
      required: true,
      default: "",
    },
  },

  data() {
    return {
      showBurgerAuthModal: false,
      showLogoutModal: false,
    };
  },

  computed: {
    userIsAuthenticated() {
      return this.$store.getters.user;
    },
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
    toggleLogoutModal() {
      this.showLogoutModal = !this.showLogoutModal;
    },
  },
};
</script>
