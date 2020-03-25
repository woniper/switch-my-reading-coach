import Vue from 'vue'
import Router from 'vue-router'
import Switcher from '@/components/Switcher'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Switcher',
      component: Switcher
    }
  ]
})
