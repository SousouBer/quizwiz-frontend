<template>
  <layouts-auth-main>
    <LayoutsAuthImage
      class="bg-light-pink justify-center"
      srcLink="/images/reset-password-cover.svg"
    />
    <layouts-form>
      <wrappers-form-heading class="text-center sm:text-start gap-4 mb-14">
        <heading-form>Reset password</heading-form>
        <span class="text-gray-600"
          >Please, type something you'll remember.</span
        >
      </wrappers-form-heading>
      <ValidationForm v-slot="{ errors }" @submit="handleSubmit">
        <InputAuth
          label="New password"
          type="password"
          name="password"
          id="password"
          placeholder="Must be 8 characters"
          :isPassword="true"
          rules="required|minLength:3"
          :error="errors['password'] ? true : false"
        />
        <InputAuth
          label="Confirm password"
          type="password"
          name="password_confirmation"
          id="password_confirmation"
          placeholder="Repeat Password"
          :isPassword="true"
          rules="required|confirmed:password"
          :error="errors['password_confirmation'] ? true : false"
        />
        <button-submit>Reset password</button-submit>
      </ValidationForm>
      <LinkAuthentication auth="login" />
    </layouts-form>
  </layouts-auth-main>
</template>

<script>
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";
import LinkAuthentication from "@/components/ui/form/LinkAuthentication.vue";
import LayoutsAuthImage from "@/components/layouts/LayoutsAuthImage.vue";
import LayoutsForm from "@/components/layouts/LayoutsForm.vue";
import WrappersFormHeading from "@/components/wrappers/WrappersFormHeading.vue";
import LayoutsAuthMain from "@/components/layouts/LayoutsAuthMain.vue";
import InputAuth from "@/components/ui/form/InputAuth.vue";

import { Form as ValidationForm } from "vee-validate";

import { checkPasswordResetExpiration, resetPassword } from "@/services/auth";

export default {
  inject: ["showToastNotification"],

  components: {
    HeadingForm,
    ButtonSubmit,
    LinkAuthentication,
    LayoutsAuthImage,
    LayoutsForm,
    WrappersFormHeading,
    LayoutsAuthMain,
    InputAuth,
    ValidationForm,
  },

  data() {
    return {
      email: this.$route.query.email,
      token: this.$route.query.token,
    };
  },

  methods: {
    async checkPasswordResetExpiration() {
      try {
        await checkPasswordResetExpiration(this.email, this.token);
      } catch (err) {
        if (err.response.status === 403) {
          this.$router.push({ name: "login" });
          this.showToastNotification(
            "error",
            err.response.data.title,
            err.response.data.message,
          );
        }
      }
    },

    async handleSubmit(values, { resetForm }) {
      try {
        const response = await resetPassword(values, this.email, this.token);
        resetForm();

        this.showToastNotification(
          "success",
          response.data.title,
          response.data.message,
        );

        this.$router.push({ name: "login" });
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
    if (!this.email || !this.token) {
      this.$router.push({ name: "login" });
    } else {
      this.checkPasswordResetExpiration();
    }
  },
};
</script>
