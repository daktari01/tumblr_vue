import FireBaseService from "../../services/authfirebase";

const user = {
  state: {
    user: {},
    errors: {},
  },
  getters: {
    getUserData: state => state.user,
    getUserErrors: state => state.errors,
  },
  mutations: {
    setUserData: (state, payload) => {
      state.user = payload.user;
    },
    setUserErrors: (state, payload) => {
      state.errors = payload;
    }
  },
  actions: {
    createNewUser: async({ commit }, payload) => {
      try{
        let response = await FireBaseService.register({email: payload.userEmail, password: payload.password});
        commit('setUserData', response);
      } catch (error) {
        commit('setUserErrors', error)
      }
    }
  },
};

export default user;
