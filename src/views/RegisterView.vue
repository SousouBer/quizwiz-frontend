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
        <heading-form class="mb-12">Create account</heading-form>
        <form>
          <div class="flex flex-col mb-4">
            <label-base labelFor="username">Username</label-base>
            <input-base
              inputType="text"
              inputId="username"
              inputName="username"
              inputPlaceholder="Your username"
            ></input-base>
          </div>
          <div class="flex flex-col mb-4">
            <label-base labelFor="email">Email</label-base>
            <input-base
              inputType="email"
              inputId="email"
              inputName="email"
              inputPlaceholder="email@gmail.com"
            ></input-base>
          </div>
          <div class="flex flex-col mb-4">
            <label-base labelFor="password">Create a password</label-base>
            <input-base
              inputType="password"
              inputId="password"
              inputName="password"
              inputPlaceholder="Must be 8 characters"
              :isPasswordInput="true"
            ></input-base>
          </div>
          <div class="flex flex-col mb-4">
            <label-base labelFor="confirm_password"
              >Confirm password</label-base
            >
            <input-base
              inputType="password"
              inputId="confirm_password"
              inputName="confirm_password"
              inputPlaceholder="Must be 8 characters"
              :isPasswordInput="true"
            ></input-base>
          </div>
          <div class="flex flex-row gap-3 my-6">
            <input-base
              class="w-5 h-5"
              inputType="radio"
              inputId="terms_and_policy"
              inputName="terms_and_policy"
            ></input-base>
            <label-base labelFor="terms_and_policy"
              >I accept the terms and privacy policy</label-base
            >
          </div>
          <button-submit>Sign up</button-submit>
        </form>
        <link-authentication auth="login" link="/login"></link-authentication>
      </div>
    </section-auth-form-layout>
  </main>
</template>

<script>
import InputBase from "@/components/ui/form/InputBase.vue";
import LabelBase from "@/components/ui/form/LabelBase.vue";
import SectionAuthImageLayout from "@/components/layouts/SectionAuthImageLayout.vue";
import SectionAuthFormLayout from "@/components/layouts/SectionAuthFormLayout.vue";
import LinkBack from "@/components/ui/links/LinkBack.vue";
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";
import LinkAuthentication from "@/components/shared/LinkAuthentication.vue";

export default {
  components: {
    InputBase,
    LabelBase,
    LinkBack,
    SectionAuthImageLayout,
    SectionAuthFormLayout,
    HeadingForm,
    ButtonSubmit,
    LinkAuthentication,
  },
};
</script>
