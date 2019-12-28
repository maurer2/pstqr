import Vue from 'vue';
import Router from 'vue-router';

import HomeView from './views/HomeView.vue';
import BarcodeView from './views/BarcodeView.vue';
import InputView from './views/InputView.vue';
import StorageView from './views/StorageView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homeView',
      component: HomeView,
    },
    {
      path: '/barcodeView',
      name: 'barcodeView',
      component: BarcodeView,
      // component: () => import(webpackChunkName: "barcodeView" './views/BarcodeView.vue')
    },
    {
      path: '/inputView',
      name: 'inputView',
      component: InputView,
      // component: () => import(webpackChunkName: "inputView" './views/inputView.vue')
    },
    {
      path: '/storageView',
      name: 'storageView',
      component: StorageView,
      // component: () => import(
      //  webpackChunkName: "localStorageView" './views/LocalStorageView.vue'
      // )
    },
  ],
});
