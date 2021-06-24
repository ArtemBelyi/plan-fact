import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    staff: []
  },
  mutations: {
    SET_STAFF: (state, response) => {
      state.staff = response;
    }
  },
  actions: {
    GET_STAFF_API({ commit }) {
      return axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        commit('SET_STAFF', response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    }
  },
  getters: {
    STAFF(state) {
      console.log(state.staff);
      return state.staff;
    }
  }
});
