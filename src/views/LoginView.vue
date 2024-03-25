<template>
  <main class="flex flex-row">
    <div
      class="bg-pale-yellow justify-center h-screen items-center w-custom-45 hidden lg:flex"
    >
      <img src="@/assets/images/login-cover.svg" alt="Login Cover" />
    </div>
    <div class="p-4 sm:p-16 sm:pr-56 sm:pt-14 flex-grow">
      <link-back></link-back>
      <div class="px-4">
        <div class="flex gap-2 sm:mb-12 justify-center sm:justify-start">
          <heading-form>Hi, Welcome!</heading-form>
          <img
            src="@/assets/images/icons/login-wave-icon.svg"
            alt="Wave icon"
          />
        </div>
        <div class="sm:hidden flex justify-center mb-6">
          <link-authentication
            auth="register"
            link="/register"
          ></link-authentication>
        </div>
        <the-form FormType="login"></the-form>
        <link-authentication
          class="hidden sm:block"
          auth="register"
          link="/register"
        ></link-authentication>
      </div>
    </div>
  </main>
</template>

<script>
import LinkBack from "@/components/ui/links/LinkBack.vue";
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import LinkAuthentication from "@/components/ui/form/LinkAuthentication.vue";
import TheForm from "@/components/ui/form/TheForm.vue";

export default {
  components: {
    LinkBack,
    HeadingForm,
    LinkAuthentication,
    TheForm,
  },
};
</script>
