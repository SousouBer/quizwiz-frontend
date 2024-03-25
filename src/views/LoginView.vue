<template>
  <main class="flex flex-row">
    <section-auth-image-layout class="bg-pale-yellow justify-center">
      <img src="@/assets/images/login-cover.svg" alt="Login Cover" />
    </section-auth-image-layout>
    <section-auth-form-layout>
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
    </section-auth-form-layout>
  </main>
</template>

<script>
import SectionAuthImageLayout from "@/components/layouts/SectionAuthImageLayout.vue";
import SectionAuthFormLayout from "@/components/layouts/SectionAuthFormLayout.vue";
import LinkBack from "@/components/ui/links/LinkBack.vue";
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import LinkAuthentication from "@/components/ui/form/LinkAuthentication.vue";
import TheForm from "@/components/ui/form/TheForm.vue";

export default {
  components: {
    SectionAuthImageLayout,
    SectionAuthFormLayout,
    LinkBack,
    HeadingForm,
    LinkAuthentication,
    TheForm,
  },
};
</script>
