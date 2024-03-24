<template>
  <main class="flex flex-row">
    <section-auth-image-layout class="bg-pale-yellow justify-center">
      <img src="@/assets/images/login-cover.svg" alt="Login Cover" />
    </section-auth-image-layout>
    <section-auth-form-layout>
      <link-back></link-back>
      <form-login></form-login>
    </section-auth-form-layout>
  </main>
</template>

<script>
import SectionAuthImageLayout from "@/components/layouts/SectionAuthImageLayout.vue";
import SectionAuthFormLayout from "@/components/layouts/SectionAuthFormLayout.vue";
import LinkBack from "@/components/ui/links/LinkBack.vue";
import FormLogin from "@/components/shared/FormLogin.vue";

export default {
  components: {
    SectionAuthImageLayout,
    SectionAuthFormLayout,
    LinkBack,
    FormLogin,
  },
};
</script>
