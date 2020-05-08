// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Master from './components/layouts/Master'
import VueRouter from 'vue-router'
import routes from './routes'
import { store } from './store/store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'vue-search-select/dist/VueSearchSelect.css'


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    //this route requires auth, check if logged in
    //if not, redirect to login page.
    if(!store.getters.loggedIn){
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)){
    //this route requires auth, check if logged in
    //if not, redirect to login page.
    if(store.getters.loggedIn){
      next({
        name: 'home',
      })
  } else {
      next()
    }
  } else {
    next()
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  components: { Master },
  template: '<Master/>',
})
