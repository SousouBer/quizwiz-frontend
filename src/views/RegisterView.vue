<template>
  <main class="flex flex-row">
    <section
      class="bg-paleBlue h-screen flex items-center justify-start w-custom-45"
    >
      <img
        src="../assets/images/registration-cover.svg"
        alt="Registration cover"
      />
    </section>
    <section class="p-16 pr-56 pt-14 flex-grow">
      <div class="flex flex-row items-center gap-2 mb-12">
        <div class="w-4 h-4">
          <img
            class="h-full w-full"
            src="../assets/images/icons/back-arrow.svg"
            alt="Back icon"
          />
        </div>
        <span class="font-medium text-sm">Back</span>
      </div>
      <div class="px-4">
        <h1 class="text-3xl font-extrabold mb-12">Create account</h1>
        <form>
          <div class="flex flex-col mb-4">
            <base-label
              class="text-sm text-charcoal font-normal pb-2"
              labelFor="username"
              >Username</base-label
            >
            <base-input
              class="text-grayish-blue placeholder:text-grayish-blue text-base rounded-xl py-4 px-4.5 border border-light-gray"
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
              class="text-grayish-blue placeholder:text-grayish-blue text-base rounded-xl py-4 px-4.5 border border-light-gray"
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
              class="text-grayish-blue placeholder:text-grayish-blue text-base rounded-xl py-4 px-4.5 border border-light-gray"
              inputType="password"
              inputId="password"
              inputName="password"
              inputPlaceholder="Must be 8 characters"
            ></base-input>
          </div>
          <div class="flex flex-col mb-4">
            <base-label
              class="text-sm text-charcoal font-normal pb-2"
              labelFor="confirm_password"
              >Confirm password</base-label
            >
            <base-input
              class="text-grayish-blue placeholder:text-grayish-blue text-base rounded-xl py-4 px-4.5 border border-light-gray"
              inputType="password"
              inputId="confirm_password"
              inputName="confirm_password"
              inputPlaceholder="Must be 8 characters"
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
          <button
            class="bg-black text-white w-full hover:bg-gray-600 text-base font-semibold py-4 rounded-xl transition-colors duration-300 ease-in-out my-4"
          >
            Sign up
          </button>
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
    </section>
  </main>
</template>

<script>
import BaseInput from "../components/ui/form/BaseInput.vue";
import BaseLabel from "../components/ui/form/BaseLabel.vue";

export default {
  components: {
    BaseInput,
    BaseLabel,
  },
};
</script>
