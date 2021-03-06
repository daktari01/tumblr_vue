const notifications = {
  state: {
    errorMessages: [],
    notifications: {
      message: "",
      type: ""
    }
  },
  getters: {
    getErrorMessages: state => state.errorMessages,
    getNotifications: state => state.notifications
  },
  mutations: {
    setErrorMessages: (state, payload) => {
      payload.forEach(error => {
        state.errorMessages.push(error);
      });
    },
    setNotifications: (state, payload) => {
      state.notifications.message = payload.message;
      state.notifications.type = payload.type;
    },
    resetNotifications: state => {
      state.notifications.message = null;
      state.notifications.type = null;
      state.errorMessages = [];
    }
  },
  actions: {
    actionSetErrorMessages: ({ commit }, payload) => {
      commit("setErrorMessages", payload);
    }
  }
};

export default notifications;
