import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    progress: 'WeChat', // WeChat  FriendsList  Discover Me
    isMain: true // isMain 是否是主界面
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
