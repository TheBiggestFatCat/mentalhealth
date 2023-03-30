import Vue from 'vue'
import App from './App.vue'
import preventReClick from '@/js/preventReClick';

import router from '@/router/index.js';
Vue.use(preventReClick)
// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
