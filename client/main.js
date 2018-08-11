import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
let routes;

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
  template: '<App/>',
  components: { App },
  router
}).$mount('#app');
