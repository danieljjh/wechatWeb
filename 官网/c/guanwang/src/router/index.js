import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/views/shouye'
import about from '@/views/about'
import chan from '@/views/chan'
import tel from '@/views/tel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: shouye
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/chan',
      name: 'chan',
      component: chan
    },
    {
      path: '/tel',
      name: 'tel',
      component: tel
    }
  ]
})
