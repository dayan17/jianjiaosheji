import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Shopcar from './views/Shopcar.vue'
import Me from './views/Me.vue'
import Detail from './views/Detail.vue'
import Recommend from '@/views/home/Recommend.vue'
import Furniture from '@/views/home/Furniture.vue'
import Family from '@/views/home/Family.vue'
import Activity from '@/views/home/Activity.vue'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  //base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component:Home,

      children:[
        {
          path:'recommend',
          name:'recommend',
          component:Recommend
        },
        {
          path:'furniture',
          name:'furniture',
          component:Furniture
        },
        {
          path:'family',
          name:'family',
          component:Family
        },
        {
          path:'activity',
          name:'activity',
          component:Activity
        },
        {
          path: '',
          redirect: '/home/recommend'
        }

      ]
    },
    {
      path:'/category',
      name:'category',
      component:Category
    },
    {
      path:'/shopcar',
      name:'shopcar',
      component:Shopcar
    },
    {
      path:'/me',
      name:'me',
      component:Me
    },
    {
      path:'/detail/:deid',
      name:'detail',
      component:Detail
    },
    {
      path:'/',
      redirect:'/home'
    }
    

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
