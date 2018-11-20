import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import finance from '@/components/finance'
import emergency from '@/components/emergency'
import statistical from '@/components/statistical'
import coupons from '@/components/coupons'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'login',
      component:login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {
          path: '/finance',
          name: 'finance',
          component:finance
        },
        {
          path: '/statistical',
          name: 'statistical',
          component: statistical
        },
        {
          path: '/emergency',
          name: 'emergency',
          component: emergency
        },
        {
          path: '/coupons',
          name:'coupons',
          component: coupons
        }
      ]
    }
  ]
})