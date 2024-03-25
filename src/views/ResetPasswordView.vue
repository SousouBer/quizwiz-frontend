<template>
  <main class="flex flex-row">
    <div
      class="bg-light-pink items-center justify-center h-screen w-custom-45 hidden lg:flex"
    >
      <img
        src="@/assets/images/reset-password-cover.svg"
        alt="Reset Password Cover"
      />
    </div>
    <div class="p-4 sm:p-16 sm:pr-56 sm:pt-14 flex-grow">
      <link-back></link-back>
      <div class="flex flex-col gap-4 mb-12">
        <heading-form>Reset password</heading-form>
        <span>Please, type something you'll remember.</span>
      </div>
      <form>
        <div class="flex flex-col mb-6">
          <label-base labelFor="new_password">New password</label-base>
          <input-base
            inputType="password"
            inputName="new_password"
            inputId="new_password"
            inputPlaceholder="Must be 8 characters"
            :isPasswordInput="true"
          ></input-base>
        </div>
        <div class="flex flex-col mb-6">
          <label-base style="color: #344054" labelFor="confirm_password"
            >Confirm password</label-base
          >
          <input-base
            inputType="password"
            inputName="confirm_password"
            inputId="confirm_password"
            inputPlaceholder="Repeat password"
            :isPasswordInput="true"
          ></input-base>
        </div>
        <button-submit>Reset password</button-submit>
      </form>
      <link-authentication auth="login" link="/login"></link-authentication>
    </div>
  </main>
</template>

<script>
import LinkBack from "@/components/ui/links/LinkBack.vue";
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import LabelBase from "@/components/ui/form/LabelBase.vue";
import InputBase from "@/components/ui/form/InputBase.vue";
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";
import LinkAuthentication from "@/components/ui/form/LinkAuthentication.vue";

export default {
  components: {
    LinkBack,
    HeadingForm,
    InputBase,
    LabelBase,
    ButtonSubmit,
    LinkAuthentication,
  },
};
</script>
