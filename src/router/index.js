import Vue from 'vue'
import Router from 'vue-router'
import Switcher from '@/components/Switcher'
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
