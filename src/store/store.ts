import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    barcodeNumbers: [] as string[],
  },
  mutations: {
    addBarcodeNumber(state, number: string): void {
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
  getters: {
    hasBarcodeNumbers: (state) => state.barcodeNumbers.length > 0,
  },
});
