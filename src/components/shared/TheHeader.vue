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
        @click="openLogoutModal"
        class="cursor-pointer md:hidden"
      ></icon-burger-menu>
    </div>
    <modal-auth-burger-menu
      v-if="showLogoutModal"
      class="z-10"
    ></modal-auth-burger-menu>
    <modal-logout-burger-menu class="hidden z-2"></modal-logout-burger-menu>
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
      <div
        :class="{ 'active-searchbar': isFirstFocused }"
        class="w-28 border border-transparent h-11 overflow-hidden transition-all duration-300 ease-out"
      >
        <div
          class="flex flex-row items-center justify-center h-full transition-all duration-300 ease-out"
        >
          <div class="flex items-center justify-center gap-1 px-4 w-full">
            <div class="flex items-center justify-center">
              <icon-search class="w-full h-full"></icon-search>
            </div>
            <input
              @focus="toggleElement"
              v-model="searchInput"
              class="bg-transparent placeholder:text-sm w-full placeholder:px-1 outline-none transition-all duration-300 ease-out"
              type="text"
              placeholder="Search"
            />
          </div>
          <div
            v-if="isFirstFocused"
            @click="closeInputField"
            class="close-input border-l h-full rounded-tr-10 rounded-br-10 flex items-center justify-center w-12 cursor-pointer"
          >
            <icon-x></icon-x>
          </div>
        </div>
      </div>
      <div>
        <div class="cursor-pointer" @click="openLogoutModal">
          <icon-unauthenticated-user></icon-unauthenticated-user>
        </div>
        <modal-logout v-if="showLogoutModal"></modal-logout>
      </div>
    </div>
  </header>
</template>

<script>
import ModalLogout from "@/components/ui/modals/ModalLogout.vue";
import ButtonBase from "@/components/ui/buttons/ButtonBase.vue";
import ModalAuthBurgerMenu from "@/components/ui/modals/ModalAuthBurgerMenu.vue";
import ModalLogoutBurgerMenu from "@/components/ui/modals/ModalLogoutBurgerMenu.vue";
import LinkQuizzes from "@/components/ui/links/LinkQuizzes.vue";
import IconBurgerMenu from "@/components/icons/IconBurgerMenu.vue";
import IconX from "@/components/icons/IconX.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconUnauthenticatedUser from "@/components/icons/IconUnauthenticatedUser.vue";
import IconQuizWizMain from "@/components/icons/IconQuizWizMain.vue";

export default {
  components: {
    ButtonBase,
    ModalLogout,
    ModalAuthBurgerMenu,
    ModalLogoutBurgerMenu,
    IconQuizWizMain,
    LinkQuizzes,
    IconBurgerMenu,
    IconX,
    IconSearch,
    IconUnauthenticatedUser,
  },

  data() {
    return {
      isFirstFocused: false,
      showLogoutModal: false,
      searchInput: "",
    };
  },

  methods: {
    toggleElement() {
      this.isFirstFocused = true;
    },
    closeInputField() {
      this.isFirstFocused = false;
      this.searchInput = "";
    },
    openLogoutModal() {
      this.showLogoutModal = true;
      document.body.classList.add("overflow-hidden");
    },
  },
};
</script>

<style scoped>
.active-searchbar {
  border: 1px solid gray;
  border-radius: 10px;
  width: 24rem;
}
</style>
