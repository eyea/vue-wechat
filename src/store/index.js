import Vue from 'vue'
import Vuex from 'vuex'
import socket from './socket'

Vue.use(Vuex)

const state = {
  progress: 'WeChat', // WeChat  FriendsList  Discover Me
  isMain: true // isMain 是否是主界面
}

const mutations = {
  updateProgress (state, progress) {
    state.progress = progress
  },
  updateIsMain (state, flag) {
    state.isMain = flag
  }
}

const actions = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  socket
})
