import Home from '@/views/Home.vue'

// 路由优先级从上到下, 相同路由配置两边取最上面的
export default[
  // 静态路由
  {
    path: '/', // 基本属性,url访问路径
    alias: '/home_page',
    name: 'home',
    component: Home, // 基本属性, 组件
    props: route => ({ // 函数模式
      food: route.query.food
    }),
    // 独享守卫
    beforeEnter: (to, from ,next) => {
      // if(from.name === 'about') alert('这是从about页来的')
      // else alert('这不是从about页来的')
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // 懒加载, 当访问到该路径再加载以下组件
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'), // /* webpackChunkName: "about" */该参数标识打包的时候以该参数.[hash]值方式打包
    props: {// 对象模式
      food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  // 动态路径匹配
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true // 里面的参数使用路由的name属性
  },
  // 嵌套路由
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child', // 该处路径不用写'/'
        component: () => import('@/views/child.vue')
      }
    ]
  },
  // 命名路由
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  // 重定向
  {
    path: '/main',
    // redirect: '/'
    // redirect: {
    //   name: 'home'
    // }
    // redirect: to => {
    //   // return {
    //   //   // 逻辑代码
    //   //   name: 'home'
    //   // }
    //   return '/'
    // }
    redirect: to => '/'
  },
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  },
  // history模式, 404路径, 该路由一定放到最后
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
