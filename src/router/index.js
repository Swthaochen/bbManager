import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import finance from '@/components/finance'
import emergency from '@/components/emergency'
import statistical from '@/components/statistical'
import coupons from '@/components/coupons'
import notHandle from '@/components/notHandled'
import haveHandled from '@/components/haveHandled'
import configPermise from '@/components/configPermise'
import secondManeger from '@/components/secondManeger'
import localManeger from '@/components/localManeger'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
       {
          path: '/finance',
          name: 'finance',
          component:finance,
          children:[
            {
              path:'/finance',
              name:'',
              component:notHandle
            },
            {
              path:'/haveHandled',
              name:'haveHandled',
              component:haveHandled
            }
          ]
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
          name: 'coupons',
          component: coupons
        },
        {
          path: '/configPermise',
          name: 'configPermise',
          component:configPermise,
          children:[
            {
              path:'/configPermise',
              name:'secondManeger',
              component:secondManeger
            },{
              path:'/localManeger',
              name:'localManeger',
              component:localManeger
            }
          ]
        }
      ]
    }
  ]
})