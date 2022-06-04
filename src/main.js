import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./scss/bootstrap.scss";

// Import only the Bootstrap components we need
//import { Dropdown, Offcanvas, Popover } from 'bootstrap';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
