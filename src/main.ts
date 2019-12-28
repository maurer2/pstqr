import Vue, { VNode } from 'vue';
import App from './App.vue';
import store from './store/store';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  beforeCreate() {
    this.$store.commit('restoreBarcodeNumbers');
  },
  render(h): VNode {
    return h(App);
  },
}).$mount('#app');
