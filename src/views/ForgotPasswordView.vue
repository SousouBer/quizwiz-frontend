<template>
  <layouts-auth-main>
    <LayoutsAuthImage
      class="justify-center bg-light-pink"
      srcLink="/images/reset-password-cover.svg"
    />
    <layouts-form>
      <wrappers-form-heading class="gap-4 mb-12">
        <heading-form>Forgot password?</heading-form>
        <span
          >Don’t worry! It happens. Please enter the email associated<br />
          with your account.</span
        >
      </wrappers-form-heading>
      <ValidationForm v-slot="{ errors }" @submit="handleSubmit">
        <InputAuth
          label="Email address"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
          rules="required"
          :error="errors['email'] ? true : false"
        />
        <button-submit>Send</button-submit>
      </ValidationForm>
    </layouts-form>
  </layouts-auth-main>
</template>

<script>
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";
import LayoutsForm from "@/components/layouts/LayoutsForm.vue";
import LayoutsAuthImage from "@/components/layouts/LayoutsAuthImage.vue";
import WrappersFormHeading from "@/components/wrappers/WrappersFormHeading.vue";
import LayoutsAuthMain from "@/components/layouts/LayoutsAuthMain.vue";
import InputAuth from "@/components/ui/form/InputAuth.vue";

import { Form as ValidationForm } from "vee-validate";
import instance from "@/plugins/axios/axios";

export default {
  inject: ["showToastNotification"],
  components: {
    HeadingForm,
    ButtonSubmit,
    LayoutsForm,
    LayoutsAuthImage,
    WrappersFormHeading,
    LayoutsAuthMain,
    InputAuth,
    ValidationForm,
  },

  methods: {
    async handleSubmit(values, { resetForm, setErrors }) {
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
  },
};
</script>
