<template>
  <div class="flex items-center gap-2 mb-4">
    <label class="font-semibold text-dark-blue-gray text-sm" :for="labelFor">{{
      labelFor
    }}</label>
    <div class="flex items-center relative">
      <input
        :class="checkboxClass"
        type="checkbox"
        :name="name"
        :checked="checkbox"
        @change="uncheckCheckbox"
      />
      <IconCheck
        @click="toggleIcon"
        :color="tickIconColor"
        class="cursor-pointer hidden absolute show-tick-icon top-0 left-0 transform translate-x-1/3 translate-y-1"
      />
    </div>
  </div>
</template>

<script>
import IconCheck from "@/components/icons/IconCheck.vue";

export default {
  props: {
    labelFor: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },

  components: {
    IconCheck,
  },

  data() {
    return {
      isChecked: false,
    };
  },

  methods: {
    uncheckCheckbox() {
      if (this.name === "my_quizzes") {
        this.$store.commit("setMyQuizzes");
      } else {
        this.$store.commit("setCompletedQuizzes");
      }
    },

    toggleIcon(event) {
      event.stopPropagation();
      this.uncheckCheckbox();
    },
  },

  computed: {
    checkbox() {
      if (this.name === "my_quizzes") {
        return this.$store.getters.myQuizzes;
      } else if (this.name === "not_completed_quizzes") {
        return this.$store.getters.completedQuizzes;
      }
      return "";
    },

    checkboxClass() {
      return window.innerWidth <= 640
        ? "filter-checkbox-mobile"
        : "filter-checkbox";
    },

    tickIconColor() {
      return this.checkboxClass === "filter-checkbox-mobile"
        ? "#7F56D9"
        : "#fff";
    },
  },
};
</script>
