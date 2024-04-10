<template>
  <layouts-auth-main>
    <LayoutsAuthImage
      class="justify-center"
      srcLink="/images/login-cover.svg"
    />
    <layouts-form>
      <div class="flex gap-2 sm:mb-12 justify-center sm:justify-start">
        <heading-form>Hi, Welcome!</heading-form>
        <iconHand />
      </div>
      <wrappers-link-authentication>
        <LinkAuthentication auth="register" />
      </wrappers-link-authentication>
      <ValidationForm v-slot="{ errors }" @submit="handleSubmit">
        <InputAuth
          label="Email address"
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          rules="required|email"
          :error="errors['email'] ? true : false"
          @input-change="updateUserEmail"
        />
        <InputAuth
          label="Password"
          type="password"
          id="password"
          name="password"
          placeholder="Your Password"
          :isPassword="true"
          rules="required"
          :error="errors['password'] ? true : false"
        />
        <div class="flex justify-between items-center my-2">
          <InputCheckbox
            class="my-2"
            label="Remember for 30 days"
            name="remember"
          />
          <router-link :to="{ name: 'forgotPassword' }" class="text-sm"
            >Forgot password?</router-link
          >
        </div>
        <button-submit v-if="!showResendEmailVerificationLink"
          >Log in</button-submit
        >
      </ValidationForm>
      <form
        v-if="showResendEmailVerificationLink"
        @submit.prevent="onResendLink"
      >
        <button-submit>Resend email confirmation link</button-submit>
      </form>
      <LinkAuthentication class="hidden sm:block" auth="register" />
    </layouts-form>
  </layouts-auth-main>
</template>

<script>
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import LinkAuthentication from "@/components/ui/form/LinkAuthentication.vue";
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";
import IconHand from "@/components/icons/IconHand.vue";
import LayoutsForm from "@/components/layouts/LayoutsForm.vue";
import LayoutsAuthImage from "@/components/layouts/LayoutsAuthImage.vue";
import WrappersLinkAuthentication from "@/components/wrappers/WrappersLinkAuthentication.vue";
import LayoutsAuthMain from "@/components/layouts/LayoutsAuthMain.vue";
import InputAuth from "@/components/ui/form/InputAuth.vue";
import InputCheckbox from "@/components/ui/form/InputCheckbox.vue";

import { Form as ValidationForm } from "vee-validate";
import {
  login,
  verifyEmail,
  ResendEmailVerificationLink,
} from "@/services/auth";

export default {
  inject: ["showToastNotification"],
  components: {
    HeadingForm,
    LinkAuthentication,
    ButtonSubmit,
    IconHand,
    LayoutsForm,
    LayoutsAuthImage,
    WrappersLinkAuthentication,
    LayoutsAuthMain,
    InputAuth,
    ValidationForm,
    InputCheckbox,
  },

  data() {
    return {
      userEmail: "",
      showResendEmailVerificationLink: false,
    };
  },

  methods: {
    updateUserEmail(email) {
      this.userEmail = email;
    },

    async handleSubmit(values, { resetForm, setErrors }) {
      try {
        const response = await login(values);

        resetForm();

        this.showToastNotification(
          "success",
          response.data.title,
          response.data.message,
        );
      } catch (err) {
        setErrors(err.response.data);
      }
    },
    async verifyEmail(verificationUrl) {
      try {
        const response = await verifyEmail(verificationUrl);

        this.showToastNotification(
          "success",
          response.data.title,
          response.data.message,
        );
      } catch (err) {
        if (err.response.status === 403) {
          this.showResendEmailVerificationLink = true;

          this.showToastNotification(
            "error",
            err.response.data.title,
            err.response.data.message,
          );
        } else if (err.response.status === 422) {
          this.showToastNotification(
            "warning",
            err.response.data.title,
            err.response.data.message,
          );
        }
      }
    },

    async onResendLink() {
      this.showResendEmailVerificationLink = false;

      try {
        const response = await ResendEmailVerificationLink(this.userEmail);

        this.showToastNotification(
          "success",
          response.data.title,
          response.data.message,
        );
      } catch (err) {
        if (err.response.status === 422) {
          this.showToastNotification(
            "warning",
            err.response.data.title,
            err.response.data.message,
          );
        } else if (err.response.status === 400) {
          this.showToastNotification(
            "error",
            err.response.data.title,
            err.response.data.message,
          );
          this.showResendEmailVerificationLink = true;
        } else {
          this.showToastNotification(
            "error",
            "Error Occured",
            "Unexpected error occured. Check your network connection or try again later.",
          );
        }
      }
    },
  },

  mounted() {
    if (this.$route.query.verifyLink) {
      this.userEmail = this.$route.query.email;
      const verificationUrl = this.$route.fullPath.split("verifyLink=")[1];

      this.verifyEmail(verificationUrl);
    }
  },
};
</script>
