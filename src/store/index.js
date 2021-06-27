import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    staff: [],
    changeStaff: []
  },
  mutations: {
    SET_STAFF: (state, response) => {
      state.staff = response;
    },
    SET_CHANGE_STAFF: (state, addStaff) => {
      state.changeStaff = addStaff;
    },
    REMOVE_ELEM_CHANGE_STAFF: (state, editedIndex) => {
      state.changeStaff.splice(editedIndex, 1);
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
    },
    GET_CHANGESTAFF({ commit }, addStaff) {
      return commit('SET_CHANGE_STAFF', addStaff);
    },
    REMOVE_ELEM_CHANGE_STAFF( {commit}, editedIndex ) {
      return commit('REMOVE_ELEM_CHANGE_STAFF', editedIndex);
    }
  },
  getters: {
    STAFF(state) {
      return state.staff;
    },
    CHANGE_STAFF(state) {
      return state.changeStaff;
    }
  }
});
