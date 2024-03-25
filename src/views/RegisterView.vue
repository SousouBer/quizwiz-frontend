<template>
  <main class="flex flex-row">
    <div
      class="bg-paleBlue h-screen items-center justify-start w-custom-45 hidden lg:flex"
    >
      <img
        src="@/assets/images/registration-cover.svg"
        alt="Registration Cover"
      />
    </div>
    <div class="p-4 sm:p-16 sm:pr-56 sm:pt-14 flex-grow">
      <link-back></link-back>
      <div class="px-4">
        <div class="sm:justify-start flex justify-center">
          <heading-form class="sm:mb-12">Create account</heading-form>
        </div>
        <div class="sm:hidden mb-6 flex justify-center">
          <link-authentication auth="login" link="/login"></link-authentication>
        </div>
        <the-form FormType="register"></the-form>
      </div>
      <link-authentication
        class="hidden sm:block"
        auth="login"
        link="/login"
      ></link-authentication>
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
    TheForm,
    LinkAuthentication,
  },
};
</script>
