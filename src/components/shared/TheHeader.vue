<template>
  <header
    class="flex justify-between items-center px-24 py-4 border-b relative"
  >
    <div class="flex items-center gap-14">
      <div>
        <a href="#">
          <img
            src="/src/assets/images/quizwiz-header-logo.svg"
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
    <div class="flex justify-center items-center gap-1">
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
                src="/src/assets/images/search-quizzes-icon.svg"
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
            <img
              src="/src/assets/images/hide-input-x.svg"
              alt="Hide input icon"
            />
          </div>
        </div>
      </div>
      <div>
        <div class="cursor-pointer" @click="openLogoutModal">
          <img
            src="/src/assets/images/unauthenticated-user-icon.svg"
            alt="Unauthenticated user icon"
          />
        </div>
        <modal-logout v-if="showLogoutModal"></modal-logout>
        <!-- <div
          v-if="showLogoutModal"
          class="absolute top-0 right-0 transform -translate-x-1/4 translate-y-1/4 w-80 bg-white border p-7 border-red-600"
        >
          <div class="mb-4">
            <img
              src="/src/assets/images/unauthenticated-user-icon.svg"
              alt="User image"
            />
          </div>
          <div class="flex justify-between">
            <div class="flex flex-col justify-center gap-1">
              <span class="font-semibold text-sm">Soso Beriashvili</span>
              <span class="text-sm">sosoberiashvili@gmail.com</span>
            </div>
            <div class="flex items-end justify-end">
              <img
                class="cursor-pointer"
                src="/src/assets/images/logout-icon.svg"
                alt="Logout icon"
              />
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </header>
</template>

<script>
import ModalLogout from "../ui/modals/ModalLogout.vue";
// import BaseButton from "../ui/buttons/BaseButton.vue";

export default {
  components: {
    // BaseButton,
    ModalLogout,
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
