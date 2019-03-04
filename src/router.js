import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Search from 'components/Search.vue'
import Hot from 'components/Hot.vue'
import Left from 'components/layout/Left.vue'
import Middle from 'components/layout/Middle.vue'
import Right from 'components/layout/Right'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'/hot',
      name:'hot',
      component:Hot,
      redirect: '/hot/left',
      children:[
        {
          path:'left',  
          name:'left',
          component:Left
        },
        {
          path:'middle',
          name:'mddle',
          component:Middle
        },
        {
          path:'right',
          name:'right',
          component:Right
        }
      ]
    }
  ]
})
