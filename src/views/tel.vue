<template>
  <div class="tel">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    // $on 表示事件监听
    this.$bus.$on('on-click', mes => {
      this.message = mes
    })
  }
}
</script>

<style>
  .tel{
    border: 1px solid red;
  }
</style>
