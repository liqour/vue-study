const state = {
  userName: 'lison'
}
const getters = {
  firstLetter: (state) =>{
    return state.userName.substr(0, 1)
  }
}
const mutations = {
  //
}
const actions = {
  //
}

export default {
  namespaced: true, // 命名空间, 使模块更加密闭
  getters,
  state,
  mutations,
  actions
}
