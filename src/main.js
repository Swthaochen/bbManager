// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
<<<<<<< HEAD
import Axios from 'axios'
=======
import axios from 'axios'
>>>>>>> f68702909356cfb88b8af6dbab4ffa5eb41d93d8
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$axios = axios

Vue.use(ElementUI)
Vue.use(Axios)
Vue.config.productionTip = false
Vue.prototype.http = Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
