import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router/'
import './assets/bootstrap/css/bootstrap.css'

import ElementUI from 'element-ui'
import './assets/index.js'
import './assets/theme-chalk/index.css'
Vue.use(ElementUI)

import AllFoodList from './components/foodList/childrenCom/all'
import FoodList from './components/foodList/foodList'
import $ from 'jquery'

Vue.use(Vuex)

var store = new Vuex.Store({
  modules: {
    AllFoodList,
    FoodList
  }
})
new Vue({
  el: '#app',
  router,
  store,
 