import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import shouye from '@/components/shouye'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/shouye',
      name: 'shouye',
      component: shouye
    }
  ]
})
