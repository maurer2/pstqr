import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    barcodeNumbers: [] as string[],
  },
  mutations: {
    addBarcodeNumber(state, number): void {
      const newBarcodeNumbers = [...state.barcodeNumbers];

      newBarcodeNumbers.push(number);
      state.barcodeNumbers = newBarcodeNumbers;
    },
  },
  actions: {
    addBarcodeNumber(store, number): void {
      store.commit('addBarcodeNumber', number);
    },
  },
});
