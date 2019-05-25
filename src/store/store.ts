import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    convertedNumber: '' as string,
  },
  mutations: {
    addCalculatedNumber(state, value): void {
      state.convertedNumber = value;
    },
  },
  actions: {
    addCalculatedNumber(store, value): void {
      store.commit('addCalculatedNumber', value);
    },
  },
});
