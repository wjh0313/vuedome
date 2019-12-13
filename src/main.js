import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router.js'
import VueCookies from 'vue-cookies'


Vue.use(VueCookies)

Vue.config.productionTip = false
Vue.prototype.axios = axios
axios.defaults.withCredentials = true

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next()
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
