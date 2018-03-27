import Vue from 'vue'
import Router from 'vue-router'
import List from 'components/List'
import Detail from 'components/Detail'
import Home from 'components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/',
    name: 'Home',
    component: Home
  },{
      path: '/list',
      name: 'List',
      component: List
    },{
      path : '/movie/:title',
      name : 'detail',
      component : Detail
    },
    {
      path: '*',
      redirect : '/'
    }
  ]
})
