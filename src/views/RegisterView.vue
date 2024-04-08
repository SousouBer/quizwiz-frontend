<template>
  <layouts-auth-main>
    <LayoutsAuthImage
      class="bg-paleBlue justify-start"
      srcLink="/images/registration-cover.svg"
    />
    <layouts-form>
      <div class="sm:justify-start flex justify-center">
        <heading-form class="sm:mb-12">Create account</heading-form>
      </div>
      <wrappers-link-authentication>
        <LinkAuthentication auth="login" />
      </wrappers-link-authentication>
      <ValidationForm v-slot="{ errors }" @submit="handleSubmit">
        <InputAuth
          label="Username"
          type="text"
          id="username"
          name="username"
          placeholder="Your username"
          rules="required|minLength:3"
          :error="errors['username'] ? true : false"
        />
        <InputAuth
          label="Email address"
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          rules="required|email"
          :error="errors['email'] ? true : false"
        />
        <InputAuth
          label="Create a password"
          type="password"
          id="password"
          name="password"
          placeholder="Must be 3 characters"
          :isPassword="true"
          rules="required|minLength:3"
          :error="errors['password'] ? true : false"
        />
        <InputAuth
          label="Confirm password"
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          placeholder="Must be 8 characters"
          :isPassword="true"
          rules="required|confirmed:password"
          :error="errors['password_confirmation'] ? true : false"
        />
        <InputCheckbox
          class="my-6"
          label="I accept the terms and privacy policy"
          name="terms"
          rules="requiredCheckbox"
        />
        <button-submit>Sign up</button-submit>
      </ValidationForm>
      <LinkAuthentication class="hidden sm:block" auth="login" />
    </layouts-form>
  </layouts-auth-main>
</template>

<script>
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import LinkAuthentication from "@/components/ui/form/LinkAuthentication.vue";
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";
import LayoutsForm from "@/components/layouts/LayoutsForm.vue";
import LayoutsAuthImage from "@/components/layouts/LayoutsAuthImage.vue";
import WrappersLinkAuthentication from "@/components/wrappers/WrappersLinkAuthentication.vue";
import LayoutsAuthMain from "@/components/layouts/LayoutsAuthMain.vue";
import InputAuth from "@/components/ui/form/InputAuth.vue";
import InputCheckbox from "@/components/ui/form/InputCheckbox.vue";

import { Form as ValidationForm } from "vee-validate";
import instance from "@/plugins/axios/axios";

export default {
  inject: ["showToastNotification"],

  components: {
    HeadingForm,
    LinkAuthentication,
    ButtonSubmit,
    LayoutsForm,
    LayoutsAuthImage,
    WrappersLinkAuthentication,
    LayoutsAuthMain,
    ValidationForm,
    InputAuth,
    InputCheckbox,
  },

  methods: {
    async handleSubmit(values, { resetForm, setErrors }) {
      try {
        const response = await instance.register(values);

        resetForm();

        this.showToastNotification(
          "success",
          response.data.title,
          response.data.message,
        );
      } catch (err) {
        setErrors(err.response.data.errors);
      }
    },
  },
};
</script>
@/services/auth
