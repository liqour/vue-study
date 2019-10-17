import Vue from 'vue'
import Router from 'vue-router'
import routes from './router' // 路由列表

import {setTitle} from '@/lib/util'

Vue.use(Router)

const router = new Router({// 路由实列
  // mode: 'history',  // 默认 hash url中显示'#'
  // base: process.env.BASE_URL,
  routes // 简写,等同于routes: routes
})

const HAS_LOGINED = true // 虚拟变量, 模拟是否登录

// 全局守卫 to-前往的页面, from-需要离开的页面, next-函数
// 前置守卫
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title) // 设置网页标题
  if (to.name !== 'login') {
    if (HAS_LOGINED) next();
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINED) next({ name: 'home' });
    else next()
  }
})

// 全局守卫, 在导航被确认之前然后所有组件内守卫和所有异步路由组件被解析之后
// router.beforeResolve()

// 后置守卫
router.afterEach((to, from) => {
  // logining = false
})

/**
 * 1. 导航被触发
 * 2. 在失活的组件(即将离开的页面组件) 里面调用离开守卫 beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里面调用 beforeRouteUpdate
 * 5. 调用路由独享的守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件(即将进入的页面组件)里面调用 beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 触发DOM更新
 * 12. 用创建好的实列调用 beforeRouterEnter 守卫里传给next的回调函数
 */
export default router
