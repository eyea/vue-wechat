import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    progress: 'FriendsList' // Wechat  FriendsList  Discover Me
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
