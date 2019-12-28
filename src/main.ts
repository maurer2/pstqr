import Vue, { VNode } from 'vue';
import App from './App.vue';
import store from './store/store';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  beforeCreate() {
    // this.$store.commit('restoreBarcodeNumbers');

    const dummyData = ['123456789'];
    this.$store.commit('storeBarcodeNumbers', JSON.stringify(dummyData));
  },
  render(h): VNode {
    return h(App);
  },
}).$mount('#app');
