<template>
  <main class="flex flex-row">
    <section-auth-image-layout
      class="bg-light-pink flex items-center justify-center"
    >
      <img
        src="@/assets/images/reset-password-cover.svg"
        alt="Reset Password Cover"
      />
    </section-auth-image-layout>
    <section-auth-form-layout>
      <link-back></link-back>
      <div class="flex flex-col gap-4 mb-12">
        <heading-form>Forgot password?</heading-form>
        <span
          >Don’t worry! It happens. Please enter the email associated<br />
          with your account.</span
        >
      </div>
      <form>
        <div class="flex flex-col mb-6">
          <label-base labelFor="email">Email address</label-base>
          <input-base
            inputType="email"
            inputName="email"
            inputId="email"
            inputPlaceholder="Enter your email address"
          ></input-base>
        </div>
        <button-submit>Send</button-submit>
      </form>
    </section-auth-form-layout>
  </main>
</template>

<script>
import SectionAuthFormLayout from "@/components/layouts/SectionAuthFormLayout.vue";
import SectionAuthImageLayout from "@/components/layouts/SectionAuthImageLayout.vue";
import LinkBack from "@/components/ui/links/LinkBack.vue";
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import LabelBase from "@/components/ui/form/LabelBase.vue";
import InputBase from "@/components/ui/form/InputBase.vue";
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";

export default {
  components: {
    SectionAuthFormLayout,
    SectionAuthImageLayout,
    LinkBack,
    HeadingForm,
    InputBase,
    LabelBase,
    ButtonSubmit,
  },
};
</script>
