<template>
  <layouts-auth-main>
    <LayoutsAuthImage
      class="bg-paleBlue justify-start"
      srcLink="/images/registration-cover.svg"
    />
    <layouts-form>
      <div class="px-4">
        <div class="sm:justify-start flex justify-center">
          <heading-form class="sm:mb-12">Create account</heading-form>
        </div>
        <layouts-link-authentication>
          <LinkAuthentication auth="login" link="/login" />
        </layouts-link-authentication>
        <form>
          <wrappers-form-control>
            <label-base labelFor="username">Username</label-base>
            <inputBase
              inputType="text"
              inputId="username"
              inputName="username"
              inputPlaceholder="Your username"
            />
          </wrappers-form-control>
          <wrappers-form-control>
            <label-base labelFor="email">Email address</label-base>
            <inputBase
              inputType="email"
              inputId="email"
              inputName="email"
              inputPlaceholder="Your email"
            />
          </wrappers-form-control>
          <wrappers-form-control>
            <label-base labelFor="password">Create a password</label-base>
            <inputBase
              inputType="password"
              inputId="password"
              inputName="password"
              inputPlaceholder="Must be 8 characters"
              :isPasswordInput="true"
            />
          </wrappers-form-control>
          <wrappers-form-control>
            <label-base labelFor="confirm_password"
              >Confirm password</label-base
            >
            <inputBase
              inputType="password"
              inputId="confirm_password"
              inputName="confirm_password"
              inputPlaceholder="Must be 8 characters"
              :isPasswordInput="true"
            />
          </wrappers-form-control>
          <div class="flex flex-row gap-3 my-6">
            <inputBase
              class="w-5 h-5"
              inputType="radio"
              inputId="terms_and_policy"
              inputName="terms_and_policy"
            />
            <label-base labelFor="terms_and_policy"
              >I accept the terms and privacy policy</label-base
            >
          </div>
          <button-submit>Sign up</button-submit>
        </form>
      </div>
      <LinkAuthentication class="hidden sm:block" auth="login" link="/login" />
    </layouts-form>
  </layouts-auth-main>
</template>

<script>
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import LinkAuthentication from "@/components/ui/form/LinkAuthentication.vue";
import InputBase from "@/components/ui/form/InputBase.vue";
import LabelBase from "@/components/ui/form/LabelBase.vue";
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";
import LayoutsForm from "@/components/layouts/LayoutsForm.vue";
import LayoutsAuthImage from "@/components/layouts/LayoutsAuthImage.vue";
import WrappersFormControl from "@/components/wrappers/WrappersFormControl.vue";
import LayoutsLinkAuthentication from "@/components/layouts/LayoutsLinkAuthentication.vue";
import LayoutsAuthMain from "@/components/layouts/LayoutsAuthMain.vue";

export default {
  components: {
    HeadingForm,
    LinkAuthentication,
    InputBase,
    LabelBase,
    ButtonSubmit,
    LayoutsForm,
    LayoutsAuthImage,
    WrappersFormControl,
    LayoutsLinkAuthentication,
    LayoutsAuthMain,
  },
};
</script>
