import Vue from "vue";
import Vuex from "vuex";

//Import modules
import User from "./modules/user";
import Notifications from "./modules/notifications";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    User,
    Notifications
  }
});

export default store;
