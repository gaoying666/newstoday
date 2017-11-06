import Vue from 'vue'
import Router from 'vue-router'
import Topic from '@/components/topic/topic'
import Detail from '@/components/detail/details'

Vue.use(Router)
export default new Router({
  routes: [
    {
      // 路径
      path: '/topic/:type',
      // 组件
      component: Topic
    },
    {
      path: '/topic/detail/:type/:id',
      component: Detail
    },
    {
      path: '/*',
      redirect: '/topic/all'
    }
  ]
})
