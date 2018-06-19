import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/test/home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})

export default router
