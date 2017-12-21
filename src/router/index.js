import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Footer from '@/components/Footer'

Vue.use(Router)
// 使用router-view 给每个组件命名，更加清晰的了解页面组成
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home
        // Footer: Footer
      }
    }
  ]
})
