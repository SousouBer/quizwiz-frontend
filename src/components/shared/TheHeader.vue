<template>
  <header class="flex justify-between items-center px-24 py-4 border-b">
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
      <base-button class="text-white bg-black hover:bg-gray-900"
        >Sign up</base-button
      >
      <base-button class="text-blue-500 hover:text-blue-600"
        >Log in</base-button
      >
    </div>
  </header>
</template>

<script>
import BaseButton from "../ui/buttons/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
};
</script>
