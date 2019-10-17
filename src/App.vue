<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/about">About</router-link> -->
      <router-link :to="{ name: 'about' }">About</router-link>
    </div>
    <transition-group :name="routerTransition">
      <router-view key="default"/>
      <router-view key="email" name="email"/>
      <router-view key="tel" name="tel"/>
    </transition-group>
  </div>
</template>

<script>
export default {
  data(){
    return {
      routerTransition: ''
    }
  },
  watch: {
    '$route' (to){
      to.query && to.query.transitionName && (this.routerTransition = to.query.transitionName)
    }
  }
}
</script>

<style lang='less'>
// 页面进入的效果
// 开始加载
.router-enter{
  opacity: 0; // 透明度0
}
// 组件加载效果0->1
.router-enter-active{
  transition: opacity 1s ease;
}
// 页面完全显示的状态
.router-enter-to{
  opacity: 1; // 透明度0
}

// 页面离开的效果
// 准备离开
.router-leave{
  opacity: 1; // 透明度0
}
// 组件加载效果1->0
.router-leave-active{
  transition: opacity 1s ease;
}
// 页面完全离开的状态
.router-leave-to{
  opacity: 0; // 透明度0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
