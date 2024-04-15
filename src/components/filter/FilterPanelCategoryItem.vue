<template>
  <span
    @click="toggleCategory(id)"
    :class="[defineSelectedClasses]"
    class="cursor-pointer rounded-3xl px-4 py-1 font-semibold whitespace-nowrap text-sm"
  >
    {{ label }}
  </span>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "All quizzes",
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },

  methods: {
    toggleCategory(id) {
      let categoriesParam = this.$route.query.categories || "";
      categoriesParam = categoriesParam.split(",").filter(Boolean);

      const index = categoriesParam.indexOf(id.toString());
      if (index === -1) {
        categoriesParam.push(id.toString());
      } else {
        categoriesParam.splice(index, 1);
      }

      const queryParams = {
        ...this.$route.query,
        categories: categoriesParam.join(","),
      };
      this.$router.push({ query: queryParams });

      this.$store.commit("toggleSelectedCategory", id);
    },
  },

  computed: {
    defineSelectedClasses() {
      const selectedCategories = this.$route.query.categories || "";

      if (selectedCategories.includes(this.id)) {
        return "border-b-2 border-black pt-2 pb-4 px-1 rounded-none text-black";
      }
      return "border-b-2 border-transparent rounded-none px-1 pb-4 pt-2 text-medium-dark-gray";
    },
  },
};
</script>
