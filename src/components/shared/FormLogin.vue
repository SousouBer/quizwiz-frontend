<template>
  <div class="px-4">
    <div class="flex gap-2 sm:mb-12 justify-center sm:justify-start">
      <heading-form>Hi, Welcome!</heading-form>
      <img src="@/assets/images/icons/login-wave-icon.svg" alt="Wave icon" />
    </div>
    <div class="sm:hidden flex justify-center mb-6">
      <link-authentication
        auth="register"
        link="/register"
      ></link-authentication>
    </div>
    <form>
      <div class="flex flex-col mb-4">
        <label-base labelFor="email">Email address</label-base>
        <input-base
          inputType="email"
          inputId="email"
          inputName="email"
          inputPlaceholder="Your email"
        ></input-base>
      </div>
      <div class="flex flex-col mb-4">
        <label-base labelFor="password">Password</label-base>
        <input-base
          inputType="password"
          inputId="password"
          inputName="password"
          inputPlaceholder="Your Password"
          :isPasswordInput="true"
        ></input-base>
      </div>
      <div class="flex justify-between py-2">
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
      <button-submit>Log in</button-submit>
    </form>
    <link-authentication
      class="hidden sm:block"
      auth="register"
      link="/register"
    ></link-authentication>
  </div>
</template>

<script>
import InputBase from "@/components/ui/form/InputBase.vue";
import LabelBase from "@/components/ui/form/LabelBase.vue";
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";
import LinkAuthentication from "@/components/shared/LinkAuthentication.vue";

export default {
  components: {
    InputBase,
    LabelBase,
    HeadingForm,
    ButtonSubmit,
    LinkAuthentication,
  },
};
</script>
