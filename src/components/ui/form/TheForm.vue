<template>
  <form>
    <div v-if="FormType === 'register'" class="flex flex-col mb-4">
      <label-base labelFor="username">Username</label-base>
      <input-base
        inputType="text"
        inputId="username"
        inputName="username"
        inputPlaceholder="Your username"
      ></input-base>
    </div>
    <div class="flex flex-col mb-4">
      <label-base labelFor="email">Email address</label-base>
      <input-base
        inputType="email"
        inputId="email"
        inputName="email"
        inputPlaceholder="Your email"
      ></input-base>
    </div>
    <div v-if="FormType === 'register'">
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
        <label-base labelFor="confirm_password">Confirm password</label-base>
        <input-base
          inputType="password"
          inputId="confirm_password"
          inputName="confirm_password"
          inputPlaceholder="Must be 8 characters"
          :isPasswordInput="true"
        ></input-base>
      </div>
    </div>
    <div v-if="FormType === 'login'" class="flex flex-col mb-4">
      <label-base labelFor="password">Password</label-base>
      <input-base
        inputType="password"
        inputId="password"
        inputName="password"
        inputPlaceholder="Your Password"
        :isPasswordInput="true"
      ></input-base>
    </div>
    <div v-if="FormType === 'login'" class="flex justify-between py-2">
      <div class="flex gap-3 items-center">
        <input-base
          inputType="radio"
          inputId="remember_me"
          inputName="remember_me"
          inputPlaceholder="Remember me"
        ></input-base>
        <label-base labelFor="remember_me">Remember for 30 days</label-base>
      </div>
      <a class="text-sm" href="#">Forgot password?</a>
    </div>
    <div v-if="FormType === 'register'" class="flex flex-row gap-3 my-6">
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
    <button-submit>{{
      FormType === "register" ? "Sign up" : "Log in"
    }}</button-submit>
  </form>
</template>

<script>
import InputBase from "@/components/ui/form/InputBase.vue";
import LabelBase from "@/components/ui/form/LabelBase.vue";
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";

export default {
  props: {
    FormType: String,
  },
  components: {
    InputBase,
    LabelBase,
    ButtonSubmit,
  },
};
</script>
