<template>
  <header
    class="flex justify-between items-center px-24 py-4 border-b relative"
  >
    <div class="flex items-center gap-14">
      <div>
        <a href="#">
          <img
            src="@/assets/images/quizwiz-header-logo.svg"
            alt="Quiz wiz Logo"
          />
        </a>
      </div>
      <div>
        <a
          href="#"
          class="text-gray-500 font-semibold hover:text-gray-600 transition-colors duration-300 ease-in-out"
          >Quizzes</a
        >
      </div>
    </div>
    <button-burger-menu class="md:hidden"></button-burger-menu>
    <modal-auth-burger-menu class="hidden"></modal-auth-burger-menu>
    <modal-logout-burger-menu class="hidden"></modal-logout-burger-menu>
    <div class="flex justify-center items-center gap-1">
      <base-button class="text-white bg-black hover:bg-gray-900"
        >Sign up</base-button
      >
      <base-button class="text-blue-500 hover:text-blue-600"
        >Log in</base-button
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
              <img
                class="w-full h-full"
                src="@/assets/images/search-quizzes-icon.svg"
                alt="Search icon"
              />
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
            <img src="@/assets/images/hide-input-x.svg" alt="Hide input icon" />
          </div>
        </div>
      </div>
      <div>
        <div class="cursor-pointer" @click="openLogoutModal">
          <img
            src="@/assets/images/unauthenticated-user-icon.svg"
            alt="Unauthenticated user icon"
          />
        </div>
        <modal-logout v-if="showLogoutModal"></modal-logout>
      </div>
    </div>
  </header>
</template>

<script>
import ModalLogout from "@/components/ui/modals/ModalLogout.vue";
import BaseButton from "@/components/ui/buttons/BaseButton.vue";
import ModalAuthBurgerMenu from "@/components/ui/modals/ModalAuthBurgerMenu.vue";
import ModalLogoutBurgerMenu from "@/components/ui/modals/ModalLogoutBurgerMenu.vue";
import ButtonBurgerMenu from "@/components/ui/buttons/ButtonBurgerMenu.vue";

export default {
  components: {
    BaseButton,
    ModalLogout,
    ModalAuthBurgerMenu,
    ModalLogoutBurgerMenu,
    ButtonBurgerMenu,
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
