<template>
  <layouts-auth-main>
    <LayoutsAuthImage
      class="justify-center bg-light-pink"
      srcLink="/images/reset-password-cover.svg"
    />
    <layouts-form>
      <wrappers-form-control class="gap-4 mb-12">
        <heading-form>Forgot password?</heading-form>
        <span
          >Don’t worry! It happens. Please enter the email associated<br />
          with your account.</span
        >
      </wrappers-form-control>
      <ValidationForm @submit="onSubmit">
        <InputAuth
          label="Email address"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
          :rules="validateEmail"
        />
        <button-submit>Send</button-submit>
      </ValidationForm>
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
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";
import LayoutsForm from "@/components/layouts/LayoutsForm.vue";
import LayoutsAuthImage from "@/components/layouts/LayoutsAuthImage.vue";
import WrappersFormControl from "@/components/wrappers/WrappersFormControl.vue";
import LayoutsAuthMain from "@/components/layouts/LayoutsAuthMain.vue";
import InputAuth from "@/components/ui/form/InputAuth.vue";
import ToastMessage from "@/components/toastMessages/ToastMessage.vue";

import { Form as ValidationForm } from "vee-validate";
import instance from "../services/Auth";

export default {
  components: {
    HeadingForm,
    ButtonSubmit,
    LayoutsForm,
    LayoutsAuthImage,
    WrappersFormControl,
    LayoutsAuthMain,
    InputAuth,
    ValidationForm,
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
    async onSubmit(values, { resetForm, setErrors }) {
      try {
        const response = await instance.forgotPassword(values);
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
  },
};
</script>
