<template>
  <div class='home'>
    {{food}}
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  // 钩子1：渲染该组件被确认前调用, 页面未渲染
  beforeRouteEnter (to, from, next) {
    // 方法内无法使用this, 如果需要使用, 则如下, 定义vm, 这个vm就是本路由实列
    next(vm => {
      console.log(vm);
    });
  },
  // 钩子2：页面即将离开前调用, 页面已经渲染
  beforeRouteLeave (to, from, next) {
    // const leave = confirm('您确认要离开吗？')
    // if(leave) next()
    // else next(false)
    next()
  },
  methods: {
    handleClick (type) {
      if (type === 'back') {
        // 回退
        // this.$router.go(-1);
        this.$router.back();
      } else if (type === 'push') {
        // 跳转
        // this.$router.push('/parent')
        // 跳转并传参
        const name = 'lison';
        this.$router.push({
          path: `/argu/${name}`

          // name: 'argu',
          // params: {
          //   name: 'lison'
          // }

          // query: {
          //   name: 'lison'
          // }
        });
      } else if (type === 'replace') {
        // 替换当前页, 不会留下记录影像返回上一页
        this.$router.replace({
          name: 'parent'
        });
      }
    }
  }
};
</script>
