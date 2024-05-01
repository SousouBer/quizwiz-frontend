<template>
  <router-view></router-view>
  <Teleport to="body">
    <ToastMessage
      v-if="showToast"
      :title="toastTitle"
      :description="toastDescription"
      :result="requestResult"
      class="absolute w-11/12 sm:w-auto top-0 left-0 sm:left-auto sm:right-0 transform translate-y-4 translate-x-4 sm:translate-y-1/2 sm:-translate-x-10"
    />
  </Teleport>
</template>

<script>
import ToastMessage from "@/components/ToastMessage.vue";
export default {
  components: {
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
  },

  provide() {
    return {
      showToastNotification: this.showToastNotification,
    };
  },

  mounted() {
    const user = this.$store.getters.user;
    this.$store.dispatch("fetchContacts");

    if (!user) {
      this.$store.dispatch("fetchUser");
    }
  },
};
</script>
