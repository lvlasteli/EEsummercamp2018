import Vue from 'vue';
import Router from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

import App from './App';
// import Progress from './components/Progress';

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(BootstrapVue);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    }
  ]
});

new Vue({
  el: '#app',
  render: h => h(App),
  template: '<App/>',
  components: { App },
  router
}).$mount('#app');

export default router;
