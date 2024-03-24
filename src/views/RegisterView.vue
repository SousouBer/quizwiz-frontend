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
      <form-registration></form-registration>
    </section-auth-form-layout>
  </main>
</template>

<script>
import SectionAuthImageLayout from "@/components/layouts/SectionAuthImageLayout.vue";
import SectionAuthFormLayout from "@/components/layouts/SectionAuthFormLayout.vue";
import LinkBack from "@/components/ui/links/LinkBack.vue";
import FormRegistration from "@/components/shared/FormRegistration.vue";

export default {
  components: {
    LinkBack,
    SectionAuthImageLayout,
    SectionAuthFormLayout,
    FormRegistration,
  },
};
</script>
