<template>
  <main class="flex flex-row">
    <auth-cover-section class="bg-pale-yellow justify-center">
      <img src="../assets/images/login-cover.svg" alt="Login Cover" />
    </auth-cover-section>
    <auth-form-section>
      <back-link></back-link>
      <div class="px-4">
        <div class="flex gap-2 mb-12">
          <h1 class="text-3xl font-extrabold">Hi, Welcome!</h1>
          <img
            src="../assets/images/icons/login-wave-icon.svg"
            alt="Wave icon"
          />
        </div>
        <form>
          <div class="flex flex-col mb-4">
            <base-label
              class="text-sm text-charcoal font-normal pb-2"
              labelFor="email"
              >Email address</base-label
            >
            <base-input
              inputType="email"
              inputId="email"
              inputName="email"
              inputPlaceholder="Your email"
            ></base-input>
          </div>
          <div class="flex flex-col mb-4">
            <base-label
              class="text-sm text-charcoal font-normal pb-2"
              labelFor="password"
              >Password</base-label
            >
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
              <base-label
                class="text-sm text-charcoal font-normal pb-2"
                labelFor="remember_me"
                >Remember for 30 days</base-label
              >
            </div>
            <a class="text-sm" href="#">Forgot password?</a>
          </div>

          <button
            class="bg-black text-white w-full hover:bg-gray-600 text-base font-semibold py-4 rounded-xl transition-colors duration-300 ease-in-out my-4"
          >
            Log in
          </button>
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

export default {
  components: {
    AuthCoverSection,
    AuthFormSection,
    BackLink,
    BaseInput,
    BaseLabel,
  },
};
</script>
