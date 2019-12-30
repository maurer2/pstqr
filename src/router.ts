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
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/inputView',
      name: 'Input',
      component: InputView,
      // component: () => import(webpackChunkName: "inputView" './views/inputView.vue')
    },
    {
      path: '/barcodeView',
      name: 'Barcode',
      component: BarcodeView,
      // component: () => import(webpackChunkName: "barcodeView" './views/BarcodeView.vue')
    },
    {
      path: '/storageView',
      name: 'Storage',
      component: StorageView,
      // component: () => import(webpackChunkName: "storageView" './views/StorageView.vue')
    },
  ],
});
