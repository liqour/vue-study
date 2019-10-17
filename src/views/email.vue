<template>
  <div class="email">
    <button @click="handleClick">按我</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      // $emit 表示绑定事件
      this.$bus.$emit('on-click', 'hello')
    }
  },
  // 生命周期钩子
  mounted () {

  }
}
</script>

<style>
.email {
  border: 1px solid green;
}
</style>
