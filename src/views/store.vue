<template>
  <div>
    <!-- v-model="inputValue" 双向绑定 -->
    <a-input @input="handleInput" />
    <p>{{inputValue}} -> lastLetter is {{inpurtValueLastLetter}}</p>
    <!-- <a-show :content="inputValue" /> -->
    <p>appName:{{appName}}, appNameWithVersion:{{appNameWithVersion}}</p>
    <p>userName:{{userName}}, firstLetter is: {{firstLetter}}</p>
  </div>
</template>
<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
// import { mapState, mapGetters } from 'vuex'
import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user')
const { mapGetters } = createNamespacedHelpers('user')

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
  computed: {
    // appName () {
    //   return this.$store.state.appName
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // }
    // ...展开操作符或者剩余操作符
    // ...mapState([
    //   'appName'
    // ])
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName
    // })
    // ...mapState('user', {
    //   userName: state => state.userName
    // }),
    ...mapGetters([
      // 'appNameWithVersion',
      'firstLetter'
    ]),
    // firstLetter () {
    //   return this.userName.substr(0, 1)
    // },
    // appNameWithVersion(){
    //   return this.$store.getters.appNameWithVersion
    // },
    inpurtValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    }
  },
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
};
</script>
