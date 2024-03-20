<template>
  <main class="flex flex-row">
    <section-auth-image-layout class="bg-pale-yellow justify-center">
      <img src="@/assets/images/login-cover.svg" alt="Login Cover" />
    </section-auth-image-layout>
    <section-auth-form-layout>
      <link-back></link-back>
      <div class="px-4">
        <div class="flex gap-2 mb-12">
          <heading-form>Hi, Welcome!</heading-form>
          <img
            src="@/assets/images/icons/login-wave-icon.svg"
            alt="Wave icon"
          />
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
              <label-base labelFor="remember_me"
                >Remember for 30 days</label-base
              >
            </div>
            <a class="text-sm" href="#">Forgot password?</a>
          </div>
          <button-submit>Log in</button-submit>
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
    </section-auth-form-layout>
  </main>
</template>

<script>
import SectionAuthImageLayout from "@/components/layouts/SectionAuthImageLayout.vue";
import SectionAuthFormLayout from "@/components/layouts/SectionAuthFormLayout.vue";
import LinkBack from "@/components/ui/links/LinkBack.vue";
import InputBase from "@/components/ui/form/InputBase.vue";
import LabelBase from "@/components/ui/form/LabelBase.vue";
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";

export default {
  components: {
    SectionAuthImageLayout,
    SectionAuthFormLayout,
    LinkBack,
    InputBase,
    LabelBase,
    HeadingForm,
    ButtonSubmit,
  },
};
</script>
