import FireBaseService from "../../services/authfirebase";

const user = {
  state: {
    user: {},
    errors: {},
    status: {
      loggedIn: false,
      email: '',
    },
  },
  getters: {
    getUserData: state => state.user,
    getUserLogin: state => state.status,
    getUserErrors: state => state.errors,
  },
  mutations: {
    setUserData: (state, payload) => {
      state.user = payload.user;
    },
    setUserLogin: (state, payload) => {
      state.status.loggedIn = true;
      state.status.email = payload.user.email;
    },
    setUserErrors: (state, payload) => {
      state.errors = payload;
    }
  },
  actions: {
    createNewUser: async({ commit }, payload) => {
      try {
        let response = await FireBaseService.register({email: payload.userEmail, password: payload.password});
        commit('setUserData', response);
      } catch (error) {
        commit('setUserErrors', error)
      }
    },
    loginUser: async({ commit }, payload) => {
      try {
        let response = await FireBaseService.signin({email: payload.userEmail, password: payload.password});
        commit('setUserLogin', response);
      } catch (error) {
        commit('setUserErrors', error)
      }
    }
  },
};

export default user;
