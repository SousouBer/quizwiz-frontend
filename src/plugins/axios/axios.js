import axios from "axios";
import store from "@/store/quiz/index";
import router from "@/router";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  withCredentials: true,
  withXSRFToken: true,
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("userIsAuthenticated");

      store.commit("setUserIsAuthenticated", false);
      router.push({ name: "login" });
    }

    if (error.message === "Network Error") {
      router.push({ name: "500ServerError" });
    }
    return Promise.reject(error);
  },
);

export default instance;
