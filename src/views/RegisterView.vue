<template>
  <main class="flex flex-row">
    <section-auth-image-layout class="bg-paleBlue">
      <img
        src="@/assets/images/registration-cover.svg"
        alt="Registration Cover"
      />
    </section-auth-image-layout>
    <section-auth-form-layout>
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
    LinkBack,
    SectionAuthImageLayout,
    SectionAuthFormLayout,
    HeadingForm,
    TheForm,
    LinkAuthentication,
  },
};
</script>
