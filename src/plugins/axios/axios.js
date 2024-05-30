import axios from "axios";
import store from "@/store/quiz/index";
import router from "@/router";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  withXSRFToken: true,
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      store.commit("setUser", {});
      this.$route.push({ name: "login" });
    }

    if (error.message === "Network Error") {
      router.push({ name: "500ServerError" });
    }
    return Promise.reject(error);
  },
);

export default instance;
