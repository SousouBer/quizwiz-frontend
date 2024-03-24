<template>
  <div class="px-4">
    <div class="sm:justify-start flex justify-center">
      <heading-form class="sm:mb-12">Create account</heading-form>
    </div>
    <div class="sm:hidden mb-6 flex justify-center">
      <link-authentication auth="login" link="/login"></link-authentication>
    </div>
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
        <label-base labelFor="confirm_password">Confirm password</label-base>
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
    <link-authentication
      class="hidden sm:block"
      auth="login"
      link="/login"
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
