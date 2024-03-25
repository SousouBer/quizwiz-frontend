<template>
  <div class="flex flex-col items-center justify-center gap-6 pt-6">
    <button-base
      view="register"
      class="text-white bg-black w-full text-center rounded p-3 font-bold"
      >Sign up</button-base
    >
    <button-base
      view="login"
      class="text-blue-500 text-center bg-very-light-gray font-bold rounded p-3 w-full"
      >Log in</button-base
    >
  </div>
</template>

<script>
import ButtonBase from "@/components/ui/buttons/ButtonBase.vue";

export default {
  components: {
    ButtonBase,
  },
};
</script>
