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
                inputType="radio"
                inputId="remember_me"
                inputName="remember_me"
                inputPlaceholder="Remember me"
              />
              <label-base labelFor="remember_me"
                >Remember for 30 days</label-base
              >
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
  <Teleport to="body">
    <ToastMessage
      v-if="showToast"
      :result="requestResult"
      class="absolute top-0 right-0 transform translate-y-1/2 -translate-x-10"
    />
  </Teleport>
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
import ToastMessage from "@/components/toastMessages/ToastMessage.vue";

import { Form as ValidationForm } from "vee-validate";
import axios from "axios";

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
    LayoutsLinkAuthentication,
    LayoutsAuthMain,
    InputAuth,
    ValidationForm,
    ToastMessage,
  },

  data() {
    return {
      showToast: false,
      requestResult: "",
    };
  },

  methods: {
    async onSubmit(values, { resetForm }) {
      try {
        await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
          withCredentials: true,
        });
        await axios.post("http://127.0.0.1:8000/api/login", values, {
          withCredentials: true,
          withXSRFToken: true,
        });
        resetForm();

        this.showToastNotification("success");
      } catch (err) {
        console.log(err);
      }
    },

    showToastNotification(result) {
      this.showToast = true;
      this.requestResult = result;

      setTimeout(() => {
        this.showToast = false;
        this.requestResult = "";
      }, 5000);
      console.log("worked");
    },

    async verifyEmail(verificationUrl) {
      try {
        await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
          withCredentials: true,
        });
        await axios.get(
          `http://127.0.0.1:8000/api/verify-email/${verificationUrl}`,
          {
            withCredentials: true,
            withXSRFToken: true,
          },
        );

        this.showToastNotification("success");
      } catch (err) {
        let result = "";

        if (err.response.status === 403) {
          this.showToastNotification("expired");
        } else if (err.response.status === 422) {
          result = "verified";
        }
        this.showToastNotification(result);
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
