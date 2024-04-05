import "@/assets/main.css";
import "@/assets/styles.css";

import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import "./validators";

const app = createApp(App);

app.use(router);

app.mount("#app");
