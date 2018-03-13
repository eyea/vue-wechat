import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    progress: 'WeChat',
    isMain: true  // 是否是在四个主界面
  },

  mutations: {
    updateProgress (state, progress) {
      state.progress = progress
    },
    updateIsMain (state, flag) {
      state.isMain = flag
    }
  }
})
