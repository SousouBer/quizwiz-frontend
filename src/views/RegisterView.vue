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
        <ValidationForm @submit="onSubmit">
          <wrappers-form-control>
            <label-base labelFor="username">Username</label-base>
            <inputBase
              inputType="text"
              inputId="username"
              inputName="username"
              inputPlaceholder="Your username"
              :rules="validateUsername"
            />
          </wrappers-form-control>
          <wrappers-form-control>
            <label-base labelFor="email">Email address</label-base>
            <inputBase
              inputType="email"
              inputId="email"
              inputName="email"
              inputPlaceholder="Your email"
              :rules="validateEmail"
            />
          </wrappers-form-control>
          <wrappers-form-control>
            <label-base labelFor="password">Create a password</label-base>
            <inputBase
              inputType="password"
              inputId="password"
              inputName="password"
              inputPlaceholder="Must be 3 characters"
              :isPasswordInput="true"
              :rules="validatePassword"
            />
          </wrappers-form-control>
          <wrappers-form-control>
            <label-base labelFor="password_confirmation"
              >Confirm password</label-base
            >
            <inputBase
              inputType="password"
              inputId="password_confirmation"
              inputName="password_confirmation"
              inputPlaceholder="Must be 8 characters"
              :isPasswordInput="true"
              :rules="'confirmed:@password'"
            />
            <p>{{ password }}</p>
          </wrappers-form-control>
          <div class="flex flex-row gap-3 my-6">
            <inputBase
              class="w-5 h-5"
              inputType="radio"
              inputId="terms_and_policy"
              inputName="terms_and_policy"
              :rules="validateTermsAndPolicy"
            />
            <label-base labelFor="terms_and_policy"
              >I accept the terms and privacy policy</label-base
            >
          </div>
          <button-submit>Sign up</button-submit>
        </ValidationForm>
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

import { Form as ValidationForm } from "vee-validate";

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
    ValidationForm,
  },

  methods: {
    validateUsername(value) {
      if (!value || value.trim().length === 0) {
        return "Username is required";
      }

      if (value.trim().length < 3) {
        return "Username must be at least 3 characters long.";
      }

      return true;
    },

    validateEmail(value) {
      if (!value || value.trim().length === 0) {
        return "Email is required";
      }

      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "Email must be a valid email";
      }

      return true;
    },

    validatePassword(value) {
      if (!value || value.trim().length === 0) {
        return "Password is required";
      }

      if (value.trim().length < 3) {
        return "Password must be at least 3 characters long.";
      }

      return true;
    },

    validatePasswordConfirmation(value) {
      if (!value || value.trim().length === 0) {
        return "Password confirmation is required";
      }
      if (value !== this.password) {
        return "Provided passwords do not match";
      }
      return true;
    },

    validateTermsAndPolicy(value) {
      if (!value) {
        return "You must agree to our terms and policy.";
      }

      return true;
    },
  },
};
</script>
