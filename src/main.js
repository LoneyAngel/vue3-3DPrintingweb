import "./assets/css/main.css"; //引入根css文件
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
app.use(pinia).use(router).mount("#app");
