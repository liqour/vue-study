<template>
  <div>{{name}}</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'lison'
    }
  },
  // 钩子3：在组件被复用时调用, 页面已经渲染
  beforeRouteUpdate (to, from, next) {
    console.log(to.name, from.name)
  }
};
</script>
