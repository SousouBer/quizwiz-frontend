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
          <InputAuth
            label="Username"
            type="text"
            id="username"
            name="username"
            placeholder="Your username"
            :rules="validateUsername"
          />
          <InputAuth
            label="Email address"
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            :rules="validateEmail"
          />
          <InputAuth
            label="Create a password"
            type="password"
            id="password"
            name="password"
            placeholder="Must be 3 characters"
            :isPassword="true"
            :rules="validatePassword"
          />
          <InputAuth
            label="Confirm password"
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            placeholder="Must be 8 characters"
            :isPassword="true"
          />
          <InputRadio
            label="I accept the terms and privacy policy"
            identifier="terms_and_policy"
          />
          <button-submit>Sign up</button-submit>
        </ValidationForm>
      </div>
      <LinkAuthentication class="hidden sm:block" auth="login" link="/login" />
    </layouts-form>
  </layouts-auth-main>
  <Teleport to="body">
    <ToastMessage
      v-if="showToast"
      :title="toastTitle"
      :description="toastDescription"
      :result="requestResult"
      class="absolute top-0 right-0 transform translate-y-1/2 -translate-x-10"
    />
  </Teleport>
</template>

<script>
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import LinkAuthentication from "@/components/ui/form/LinkAuthentication.vue";
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";
import LayoutsForm from "@/components/layouts/LayoutsForm.vue";
import LayoutsAuthImage from "@/components/layouts/LayoutsAuthImage.vue";
import LayoutsLinkAuthentication from "@/components/layouts/LayoutsLinkAuthentication.vue";
import LayoutsAuthMain from "@/components/layouts/LayoutsAuthMain.vue";
import InputAuth from "@/components/ui/form/InputAuth.vue";
import InputRadio from "@/components/ui/form/InputRadio.vue";
import ToastMessage from "@/components/toastMessages/ToastMessage.vue";

import { Form as ValidationForm } from "vee-validate";
import instance from "../services/Auth";

export default {
  components: {
    HeadingForm,
    LinkAuthentication,
    ButtonSubmit,
    LayoutsForm,
    LayoutsAuthImage,
    LayoutsLinkAuthentication,
    LayoutsAuthMain,
    ValidationForm,
    InputAuth,
    InputRadio,
    ToastMessage,
  },

  data() {
    return {
      showToast: false,
      requestResult: "",
      toastTitle: "",
      toastDescription: "",
    };
  },

  methods: {
    async onSubmit(values, { setErrors, resetForm }) {
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

    showToastNotification(result, title, description) {
      this.showToast = true;
      this.requestResult = result;
      (this.toastTitle = title),
        (this.toastDescription = description),
        setTimeout(() => {
          this.showToast = false;
          this.requestResult = "";
          this.toastTitle = title;
          this.toastDescription = description;
        }, 5000);
    },

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
