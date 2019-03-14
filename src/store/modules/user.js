import FireBaseService from "../../services/authfirebase";

const user = {
  state: {
    user: {}
  },
  getters: {
    getUserData: state => state.user
  },
  mutations: {
    setUserData: (state, payload) => state.user = payload
  },
  actions: {
    createNewUser: async({ dispatch }, payload) => {
      try{
        let response = await FireBaseService.register({email: payload.userEmail, password: payload.password});
        dispatch('setUserData');
        console.log("Action called ====>", response);
      } catch (error) {
        console.log("Error--->", error);
      }
    }
  },
};

export default user;
