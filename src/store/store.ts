import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    barcodeNumbers: [] as string[],
    selectedBarcodeNumber: '',
  },
  mutations: {
    addBarcodeNumber(state, number: string): void {
      const newBarcodeNumbers = [...state.barcodeNumbers];

      newBarcodeNumbers.push(number);
      state.barcodeNumbers = newBarcodeNumbers;
    },
    updateSelectedBarcodeNumber(state: any, number: string): void {
      state.selectedBarcodeNumber = number;
    },
  },
  actions: {
    addBarcodeNumber(store: any, number: string): void {
      store.commit('addBarcodeNumber', number);
    },
    updateSelectedBarcodeNumber(store: any, number: string): void {
      store.commit('updateSelectedBarcodeNumber', number);
    },
  },
  getters: {
    hasBarcodeNumbers: (state) => state.barcodeNumbers.length > 0,
  },
});
