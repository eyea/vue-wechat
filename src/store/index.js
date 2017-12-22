import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    progress: 'WeChat'
  },

  mutations: {
    updateProgress (state, progress) {
      state.progress = progress
    }
  }
})
