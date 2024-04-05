<template>
  <layouts-auth-main>
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
        <layouts-link-authentication>
          <LinkAuthentication auth="register" link="/register" />
        </layouts-link-authentication>
        <ValidationForm @submit="onSubmit">
          <InputAuth
            label="Email address"
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            :rules="validateEmail"
          />
          <InputAuth
            label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="Your Password"
            :isPassword="true"
            :rules="validatePassword"
          />
          <div class="flex justify-between py-2">
            <div class="flex gap-3 items-center">
              <inputBase
                inputType="checkbox"
                inputId="remember"
                inputName="remember"
                inputPlaceholder="Remember me"
                ref="remember"
              />
              <label-base labelFor="remember">Remember for 30 days</label-base>
            </div>
            <router-link to="/forgot-password" class="text-sm"
              >Forgot password?</router-link
            >
          </div>
          <button-submit>Log in</button-submit>
        </ValidationForm>
        <LinkAuthentication
          class="hidden sm:block"
          auth="register"
          link="/register"
        />
      </div>
    </layouts-form>
    <form @submit.prevent="logout">
      <button>Log out</button>
    </form>
  </layouts-auth-main>
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
import LayoutsLinkAuthentication from "@/components/layouts/LayoutsLinkAuthentication.vue";
import LayoutsAuthMain from "@/components/layouts/LayoutsAuthMain.vue";
import InputAuth from "@/components/ui/form/InputAuth.vue";

import { Form as ValidationForm } from "vee-validate";
import instance from "../services/Auth";

export default {
  inject: ["showToastNotification"],
  components: {
    HeadingForm,
    LinkAuthentication,
    InputBase,
    LabelBase,
    ButtonSubmit,
    IconHand,
    LayoutsForm,
    LayoutsAuthImage,
    LayoutsLinkAuthentication,
    LayoutsAuthMain,
    InputAuth,
    ValidationForm,
  },

  methods: {
    async onSubmit(values, { resetForm, setErrors }) {
      try {
        const response = await instance.login(values);

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
    async verifyEmail(verificationUrl) {
      try {
        const response = await instance.verifyEmail(verificationUrl);

        this.showToastNotification(
          "success",
          response.data.title,
          response.data.message,
        );
      } catch (err) {
        if (err.response.status === 403) {
          this.showToastNotification(
            "expired",
            err.response.data.title,
            err.response.data.message,
          );
        } else if (err.response.status === 422) {
          this.showToastNotification(
            "verified",
            err.response.data.title,
            err.response.data.message,
          );
        }
      }
    },
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

  mounted() {
    if (this.$route.query["verifyLink"]) {
      const verificationUrl = this.$route.fullPath.split("verifyLink=")[1];
      this.verifyEmail(verificationUrl);
    }
  },
};
</script>
