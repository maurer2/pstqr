import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Barcode from './views/Barcode.vue';
import Card from './views/Card.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/barcode',
      name: 'barcode',
      component: Barcode,
      // component: () => import(/* webpackChunkName: "barcode" */ './views/Barcode.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: Card,
      // component: () => import(/* webpackChunkName: "cardInput" */ './views/Card.vue')
    },
  ],
});
