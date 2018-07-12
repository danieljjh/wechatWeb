import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import shouye from '@/components/shouye'
import car from '@/components/table/car'
import guanli from '@/components/table/guanli'
import list from '@/components/table/list'

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
      redirect: '/car',
      component: shouye,
      children:[
        {
          path: '/car',
          name: 'car',
          component: car
        },
        {
          path: '/guanli',
          name: 'guanli',
          component: guanli
        },
        {
          path: '/list',
          name: 'list',
          component: list
        }
      ]

    }
  ]
})
