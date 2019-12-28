import Vue, { VNode } from 'vue';
import App from './App.vue';
import store from './store/store';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  beforeCreate() {
    const dummyData = ['3000077901228187'];
    this.$store.commit('storeBarcodeNumbers', dummyData);

    this.$store.commit('restoreBarcodeNumbers');
  },
  render(h): VNode {
    return h(App);
  },
}).$mount('#app');
