import Vue from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import FireBaseConfig from "./config/firebase"

Vue.config.productionTip = false;

firebase.initializeApp(FireBaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
