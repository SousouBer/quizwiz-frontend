<template>
  <layouts-auth-main>
    <LayoutsAuthImage
      class="bg-light-pink justify-center"
      srcLink="/images/reset-password-cover.svg"
    />
    <layouts-form>
      <wrappers-form-control class="gap-4 mb-12">
        <heading-form>Reset password</heading-form>
        <span>Please, type something you'll remember.</span>
      </wrappers-form-control>
      <ValidationForm @submit="onSubmit">
        <InputAuth
          label="New password"
          type="password"
          name="password"
          id="password"
          placeholder="Must be 8 characters"
          :isPasswordInput="true"
        />
        <InputAuth
          label="Confirm password"
          type="password"
          name="password_confirmation"
          id="password_confirmation"
          placeholder="Repeat Password"
          :isPasswordInput="true"
        />
        <button-submit>Reset password</button-submit>
      </ValidationForm>
      <LinkAuthentication auth="login" link="/login" />
    </layouts-form>
  </layouts-auth-main>
</template>

<script>
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";
import LinkAuthentication from "@/components/ui/form/LinkAuthentication.vue";
import LayoutsAuthImage from "@/components/layouts/LayoutsAuthImage.vue";
import LayoutsForm from "@/components/layouts/LayoutsForm.vue";
import WrappersFormControl from "@/components/wrappers/WrappersFormControl.vue";
import LayoutsAuthMain from "@/components/layouts/LayoutsAuthMain.vue";
import InputAuth from "@/components/ui/form/InputAuth.vue";

import { Form as ValidationForm } from "vee-validate";

import instance from "../services/Auth";

export default {
  inject: ["showToastNotification"],

  components: {
    HeadingForm,
    ButtonSubmit,
    LinkAuthentication,
    LayoutsAuthImage,
    LayoutsForm,
    WrappersFormControl,
    LayoutsAuthMain,
    InputAuth,
    ValidationForm,
  },

  methods: {
    async checkResetLinkExpiration() {
      const url = this.$route.query.email.split("?token=");
      const email = url[0];
      const token = url[1];

      try {
        await instance.checkResetLinkExpiration(email, token);
      } catch (err) {
        if (err.response.status === 403) {
          this.showToastNotification(
            "error",
            err.response.data.title,
            err.response.data.message,
          );
        }
      }
    },

    async onSubmit(values, { resetForm }) {
      const url = this.$route.query.email.split("?token=");
      const email = url[0];
      const token = url[1];

      try {
        const response = await instance.resetPassword(values, email, token);
        resetForm();

        this.showToastNotification(
          "success",
          response.data.title,
          response.data.message,
        );
      } catch (err) {
        if (err.response.status === 403) {
          this.showToastNotification(
            "error",
            err.response.data.title,
            err.response.data.message,
          );
        }
      }
    },
  },

  mounted() {
    this.checkResetLinkExpiration();
  },
};
</script>
