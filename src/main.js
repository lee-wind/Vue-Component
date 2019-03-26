// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/css/reset.css'
import '@/assets/css/common.scss'

// import './assets/js/flexible'

import MyMask from '@/plugins/mask/MyMask'
import Message from '@/plugins/message'
import Alert from '@/plugins/alert'
import Modal from '@/plugins/modal'
import Confirm from '@/plugins/confirm'

Vue.config.productionTip = false

Vue.component('MyMask', MyMask);
Vue.use(Message);
Vue.use(Alert)
Vue.use(Modal)
Vue.use(Confirm)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
