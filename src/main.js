// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMoment from 'vue-moment'
import VueResource from 'vue-resource'
import router from './router'
// import moment from 'vue-moment'
import store from './store'
import App from './App'

require('moment/locale/fr')
Vue.use(VueMoment)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
