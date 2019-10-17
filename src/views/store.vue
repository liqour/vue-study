<template>
  <div>
    <!-- v-model="inputValue" 双向绑定 -->
    <a-input @input="handleInput" />
    <!-- <p>{{inputValue}}</p> -->
    <a-show :content="inputValue" />
  </div>
</template>
<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'

export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    };
  },
  // 注册组件
  components: {
    AInput,
    AShow
  },
  methods: {
    handleInput(val) {
      this.inputValue = val
    }
  }
};
</script>
