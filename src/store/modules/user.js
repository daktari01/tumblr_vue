import FireBaseService from "../../services/authfirebase";

const user = {
  state: {
    currentUser: {}
  },
  getters: {
    getCurrentUser: state => state.currentUser
  },
  mutations: {
    setCurrentUser: (state, payload) => {
      state.currentUser = payload;
    }
  },
  actions: {
    createNewUser: async ({ commit, dispatch }, payload) => {
      try {
        commit("resetNotifications");
        await FireBaseService.register({
          email: payload.userEmail,
          password: payload.password
        });
        commit("setNotifications", {
          message: "Registration success!",
          type: "success"
        });
      } catch (error) {
        dispatch("actionSetErrorMessages", [error.message]);
      }
    },
    loginUser: async ({ commit, dispatch }, payload) => {
      try {
        commit("resetNotifications");
        await FireBaseService.signin({
          email: payload.userEmail,
          password: payload.password
        });
        let currentUser = await FireBaseService.user();
        commit("setCurrentUser", currentUser);
        commit("setNotifications", {
          message: "Login success!",
          type: "success"
        });
      } catch (error) {
        dispatch("actionSetErrorMessages", [error.message]);
      }
    }
  }
};

export default user;
