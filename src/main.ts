import { createApp } from "vue";
import "@/styles/globalStyles.css";
import Index from "./Index.vue";
import router from "./routers";

const app = createApp(Index);

app.use(router);

app.mount("#app");
