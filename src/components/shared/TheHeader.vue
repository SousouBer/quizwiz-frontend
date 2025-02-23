<template>
  <header
    class="flex justify-between items-center p-4 border-b relative md:px-24"
  >
    <div v-if="showBurgerMenuAndQuizIcon" class="flex items-center gap-16">
      <routerLink :to="{ name: 'landing' }" class="w-24">
        <icon-quiz-wiz-main class="h-full w-full" />
      </routerLink>
      <link-quizzes class="hidden md:block" :isHeaderLink="true" />
    </div>
    <div class="flex items-center">
      <SearchInput
        v-if="route === 'quizzes'"
        class="sm:hidden"
        :isMobileSearch="true"
      />
      <icon-burger-menu
        v-if="showBurgerMenuAndQuizIcon"
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
        <div class="cursor-pointer w-8 h-8" @click="toggleLogoutModal">
          <img
            class="h-full w-full"
            v-if="userIsAuthenticated.avatar"
            :src="userIsAuthenticated.avatar"
          />
          <icon-unauthenticated-user v-else />
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
      showBurgerMenuAndQuizIcon: true,
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
    },
    closeBurgerAuthModal() {
      this.showBurgerAuthModal = false;
    },
    toggleLogoutModal() {
      this.showLogoutModal = !this.showLogoutModal;
    },
    toggleBurgerMenuAndQuizIcon(isFirstFocused) {
      this.showBurgerMenuAndQuizIcon = isFirstFocused;
    },
  },

  beforeUnmount() {
    document.body.classList.remove("overflow-hidden");
  },

  watch: {
    showBurgerAuthModal(newValue) {
      if (newValue) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
  },

  provide() {
    return {
      toggleBurgerMenuAndQuizIcon: this.toggleBurgerMenuAndQuizIcon,
    };
  },
};
</script>
