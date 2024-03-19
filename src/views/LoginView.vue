<template>
  <main class="flex flex-row">
    <auth-cover-section class="bg-pale-yellow justify-center">
      <img src="../assets/images/login-cover.svg" alt="Login Cover" />
    </auth-cover-section>
    <auth-form-section>
      <back-link></back-link>
      <div class="px-4">
        <div class="flex gap-2 mb-12">
          <form-header>Hi, Welcome!</form-header>
          <img
            src="../assets/images/icons/login-wave-icon.svg"
            alt="Wave icon"
          />
        </div>
        <form>
          <div class="flex flex-col mb-4">
            <base-label labelFor="email">Email address</base-label>
            <base-input
              inputType="email"
              inputId="email"
              inputName="email"
              inputPlaceholder="Your email"
            ></base-input>
          </div>
          <div class="flex flex-col mb-4">
            <base-label labelFor="password">Password</base-label>
            <base-input
              inputType="password"
              inputId="password"
              inputName="password"
              inputPlaceholder="Your Password"
              :isPasswordInput="true"
            ></base-input>
          </div>
          <div class="flex justify-between py-2">
            <div class="flex gap-3 items-center">
              <base-input
                inputType="radio"
                inputId="remember_me"
                inputName="remember_me"
                inputPlaceholder="Remember me"
              ></base-input>
              <base-label labelFor="remember_me"
                >Remember for 30 days</base-label
              >
            </div>
            <a class="text-sm" href="#">Forgot password?</a>
          </div>
          <form-button-submit>Log in</form-button-submit>
          <div class="mt-4">
            <span class="text-sm"
              >Don't have an account?
              <a href="#" class="text-cerulean-blue font-semibold text-sm"
                >Sign up</a
              ></span
            >
          </div>
        </form>
      </div>
    </auth-form-section>
  </main>
</template>

<script>
import AuthCoverSection from "../components/ui/AuthCoverSection.vue";
import AuthFormSection from "../components/ui/AuthFormSection.vue";
import BackLink from "../components/ui/links/BackLink.vue";
import BaseInput from "../components/ui/form/BaseInput.vue";
import BaseLabel from "../components/ui/form/BaseLabel.vue";
import FormHeader from "../components/ui/form/FormHeader.vue";
import FormButtonSubmit from "../components/ui/form/FormButtonSubmit.vue";

export default {
  components: {
    AuthCoverSection,
    AuthFormSection,
    BackLink,
    BaseInput,
    BaseLabel,
    FormHeader,
    FormButtonSubmit,
  },
};
</script>
