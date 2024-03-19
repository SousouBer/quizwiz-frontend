<template>
  <main class="flex flex-row">
    <auth-cover-section>
      <img
        src="../assets/images/registration-cover.svg"
        alt="Registration Cover"
      />
    </auth-cover-section>
    <auth-form-section>
      <back-link></back-link>
      <div class="px-4">
        <form-header class="mb-12">Create account</form-header>
        <form>
          <div class="flex flex-col mb-4">
            <base-label
              class="text-sm text-charcoal font-normal pb-2"
              labelFor="username"
              >Username</base-label
            >
            <base-input
              inputType="text"
              inputId="username"
              inputName="username"
              inputPlaceholder="Your username"
            ></base-input>
          </div>
          <div class="flex flex-col mb-4">
            <base-label
              class="text-sm text-charcoal font-normal pb-2"
              labelFor="email"
              >Email</base-label
            >
            <base-input
              inputType="email"
              inputId="email"
              inputName="email"
              inputPlaceholder="email@gmail.com"
            ></base-input>
          </div>
          <div class="flex flex-col mb-4">
            <base-label
              class="text-sm text-charcoal font-normal pb-2"
              labelFor="password"
              >Create a password</base-label
            >
            <base-input
              inputType="password"
              inputId="password"
              inputName="password"
              inputPlaceholder="Must be 8 characters"
              :isPasswordInput="true"
            ></base-input>
          </div>
          <div class="flex flex-col mb-4">
            <base-label
              class="text-sm text-charcoal font-normal pb-2"
              labelFor="confirm_password"
              >Confirm password</base-label
            >
            <base-input
              inputType="password"
              inputId="confirm_password"
              inputName="confirm_password"
              inputPlaceholder="Must be 8 characters"
              :isPasswordInput="true"
            ></base-input>
          </div>
          <div class="flex flex-row gap-3 my-6">
            <base-input
              class="w-5 h-5"
              inputType="radio"
              inputId="terms_and_policy"
              inputName="terms_and_policy"
            ></base-input>
            <base-label labelFor="terms_and_policy"
              >I accept the terms and privacy policy</base-label
            >
          </div>
          <form-button-submit>Sign up</form-button-submit>
          <div class="mt-4">
            <span class="text-sm"
              >Already have an account?
              <a href="#" class="text-cerulean-blue font-semibold text-sm"
                >Log in</a
              ></span
            >
          </div>
        </form>
      </div>
    </auth-form-section>
  </main>
</template>

<script>
import BaseInput from "../components/ui/form/BaseInput.vue";
import BaseLabel from "../components/ui/form/BaseLabel.vue";
import AuthCoverSection from "../components/ui/AuthCoverSection.vue";
import AuthFormSection from "../components/ui/AuthFormSection.vue";
import BackLink from "../components/ui/links/BackLink.vue";
import FormHeader from "../components/ui/form/FormHeader.vue";
import FormButtonSubmit from "../components/ui/form/FormButtonSubmit.vue";

export default {
  components: {
    BaseInput,
    BaseLabel,
    BackLink,
    AuthCoverSection,
    AuthFormSection,
    FormHeader,
    FormButtonSubmit,
  },
};
</script>
