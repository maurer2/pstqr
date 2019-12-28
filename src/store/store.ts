import Vue from 'vue';
import Vuex from 'vuex';

const checkStorageSupport = (key: string = 'pstqr') => {
  const storage = localStorage;

  try {
    const testEntry: string = `${key}-test-entry`;

    storage.setItem(testEntry, testEntry);
    storage.removeItem(testEntry);

    return true;
  } catch (e) {
    return false;
  }
};

const setStorageValue = (key: string = 'pstqr', value: any) => {
  const storage = localStorage;

  storage.setItem(`${key}-numbers`, value);
};

const getStorageValue = (key: string = 'pstqr', value: any) => {
  const storage = localStorage;

  const storedValue: any = storage.getItem(`${key}-numbers`);

  return storedValue;
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    barcodeNumbers: [] as string[],
    selectedBarcodeNumber: '',
    hasStorageSupport: checkStorageSupport(),
  },
  mutations: {
    restoreBarcodeNumbers(state: any, payload: any): void {
      if (!state.hasStorageSupport) {
        return;
      }

      const storedValue = getStorageValue(payload.key, 'value');
      console.log(storedValue);
    },
    storeBarcodeNumbers(state: any, data: any): void {
      if (!state.hasStorageSupport) {
        return;
      }

      setStorageValue('pstqr', data);
      console.log('data', data);
    },
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
