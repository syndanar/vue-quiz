import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './plugins/vuelidate.js';
import router from './router'
import store from './store'
import hub from './hub.js';

Vue.prototype.$eventsHub = hub;
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
