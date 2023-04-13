import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import routes from './routes'

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// });

// export default router

const router =  createRouter({
  history: createWebHashHistory(),
  routes : [
    {
      path:'/',
      name:'Home',
      component:() => import('../views/Home.vue'),
    },
    {
      path:'/header',
      name:'Header',
      component:() =>import('../components/head/Header.vue'),
    },
    {
      path:'/footer',
      name:'Footer',
      component:() =>import('../components/foot/Footer.vue'),
    },
    {
      path:'/logincode',
      name:'LoginCode',
      component:() =>import('../views/LoginCode.vue'),
    },
    {
      path:'/personalData',
      name:'PersonalData',
      component:() =>import('../views/PersonalData')
    }
  ]
})

export default router