import Vue from 'vue';
import Vuex from 'vuex';

const checkStorageSupport = (key: string = 'pstqr') => {
  const storage = localStorage;

  try {
    const testEntry: string = `${key}:test-entry`;

    storage.setItem(testEntry, testEntry);
    storage.removeItem(testEntry);

    return true;
  } catch (e) {
    return false;
  }
};

const setStorageValue = (key: string, value: string): void => {
  const storage = localStorage;

  storage.setItem(`${key}:barcodeNumbers`, value);
};

const getStorageValue = (key: string): any => {
  const storage = localStorage;

  const storedValue: any = storage.getItem(`${key}:barcodeNumbers`);

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
    restoreBarcodeNumbers(state: any): void {
      if (!state.hasStorageSupport) {
        return;
      }

      const storedValue: string = getStorageValue('pstqr');
      const decodedStoredValue: any = JSON.parse(storedValue);

      state.barcodeNumbers = decodedStoredValue;
    },
    storeBarcodeNumbers(state: any, data: any): void {
      if (!state.hasStorageSupport) {
        return;
      }

      const stringifiedBarcodeNumbers = JSON.stringify(data);

      setStorageValue('pstqr', stringifiedBarcodeNumbers);
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
