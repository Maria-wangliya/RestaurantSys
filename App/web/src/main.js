import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import './assets/bootstrap/css/bootstrap.css'
 
import ElementUI from 'element-ui'
import './assets/index.js'
import './assets/theme-chalk/index.css'
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
