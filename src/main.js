import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";

import App from "./App.vue";

import "./style.css";
import "./assets/styles/base.scss";
import "./assets/styles/sf-common.scss";
import "vfonts/FiraCode.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
