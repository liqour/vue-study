const getters = {
  appNameWithVersion: (state)=>{// 这里的state 代表同级的state.js
    return `${state.appName}v2.0`
  }
}

export default getters
