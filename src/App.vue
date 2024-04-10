<template>
  <router-view></router-view>
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
};
</script>
