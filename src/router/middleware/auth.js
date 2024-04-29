export default async function auth({ next, store }) {
  try {
    await store.dispatch("fetchUser");

    if (store.getters.user) {
      return next({
        name: "quizzes",
      });
    }
  } catch {
    store.commit("setUser", {});
    return next();
  }
}
