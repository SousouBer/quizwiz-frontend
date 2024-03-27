<template>
  <main class="flex flex-row">
    <LayoutsAuthImage
      class="justify-center"
      srcLink="/images/login-cover.svg"
    />
    <layouts-form>
      <div class="px-4">
        <div class="flex gap-2 sm:mb-12 justify-center sm:justify-start">
          <heading-form>Hi, Welcome!</heading-form>
          <iconHand />
        </div>
        <div class="sm:hidden flex justify-center mb-6">
          <LinkAuthentication auth="register" link="/register" />
        </div>
        <form>
          <div class="flex flex-col mb-4">
            <label-base labelFor="email">Email address</label-base>
            <inputBase
              inputType="email"
              inputId="email"
              inputName="email"
              inputPlaceholder="Your email"
            />
          </div>
          <div class="flex flex-col mb-4">
            <label-base labelFor="password">Password</label-base>
            <inputBase
              inputType="password"
              inputId="password"
              inputName="password"
              inputPlaceholder="Your Password"
              :isPasswordInput="true"
            />
          </div>
          <div class="flex justify-between py-2">
            <div class="flex gap-3 items-center">
              <inputBase
                inputType="radio"
                inputId="remember_me"
                inputName="remember_me"
                inputPlaceholder="Remember me"
              />
              <label-base labelFor="remember_me"
                >Remember for 30 days</label-base
              >
            </div>
            <router-link to="forgotPassword" class="text-sm"
              >Forgot password?</router-link
            >
          </div>
          <button-submit>Log in</button-submit>
        </form>
        <LinkAuthentication
          class="hidden sm:block"
          auth="register"
          link="/register"
        />
      </div>
    </layouts-form>
  </main>
</template>

<script>
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import LinkAuthentication from "@/components/ui/form/LinkAuthentication.vue";
import InputBase from "@/components/ui/form/InputBase.vue";
import LabelBase from "@/components/ui/form/LabelBase.vue";
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";
import IconHand from "@/components/icons/IconHand.vue";
import LayoutsForm from "@/components/layouts/LayoutsForm.vue";
import LayoutsAuthImage from "@/components/layouts/LayoutsAuthImage.vue";

export default {
  components: {
    HeadingForm,
    LinkAuthentication,
    InputBase,
    LabelBase,
    ButtonSubmit,
    IconHand,
    LayoutsForm,
    LayoutsAuthImage,
  },
};
</script>
