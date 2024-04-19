<template>
  <div
    @click="toggleAnswer"
    :class="{ 'border-saturated-blue-40 bg-saturated-blue-10': isChecked }"
    class="cursor-pointer border rounded-lg flex justify-between items-center p-4 mb-3"
  >
    <span :class="{ 'text-saturated-blue': isChecked }" class="text-gray-800">{{
      title
    }}</span>
    <div class="relative">
      <Input
        :class="{
          'border border-light-gray': !isChecked,
        }"
        class="answer-checkbox w-4 h-4"
        type="checkbox"
        :name="name"
        :id="id"
        :checkedValue="id"
        :checked="isChecked"
      />
      <IconTick
        class="hidden show-tick-icon absolute top-0 right-0 transform -translate-x-1 translate-y-1"
        height="10"
        width="8"
      />
    </div>
  </div>
</template>

<script>
import IconTick from "@/components/icons/IconTick.vue";

export default {
  components: {
    IconTick,
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
  },

  computed: {
    isChecked() {
      const answersArray = this.$store.getters.answers;

      return answersArray.some((item) => item.answerId === this.id);
    },
  },

  methods: {
    toggleAnswer() {
      const answersArray = this.$store.getters.answers;

      const selectedAnswers = answersArray.filter(
        (answer) => answer.questionId === this.name,
      );

      const isSelected = selectedAnswers.some(
        (answer) => answer.answerId === this.id,
      );

      if (selectedAnswers.length >= this.points && !isSelected) {
        this.$store.commit("deselectAnswers", this.name);
        console.log(this.name);
      }

      this.$store.commit("setAnswer", {
        questionId: this.name,
        answerId: this.id,
      });
    },
  },
};
</script>
