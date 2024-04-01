<template>
  <div class="mt-4">
    <span class="text-sm"
      >{{ question }}
      <router-link
        :to="link"
        class="text-cerulean-blue font-semibold text-sm"
        >{{ loginOrSignUp }}</router-link
      ></span
    >
  </div>
</template>

<script>
export default {
  props: {
    auth: String,
    link: String,
  },

  data() {
    return {
      question: "",
      loginOrSignUp: "",
    };
  },

  methods: {
    setAuthProperties() {
      if (this.auth === "login") {
        this.question = "Already have an account?";
        this.loginOrSignUp = "Log in";
      } else if (this.auth === "register") {
        this.question = "Don't have an account?";
        this.loginOrSignUp = "Sign up";
      }
    },
  },

  created() {
    this.setAuthProperties();
  },
};
</script>
