import Vue, { VNode } from 'vue';
import App from './App.vue';
import store from './store/store';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render(h): VNode {
    return h(App);
  },
}).$mount('#app');
