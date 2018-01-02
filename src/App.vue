<template>
  <div id='app'>

    <div class="main">
      <Header v-if='isMain'></Header>

      <WeChat v-if='progress === "WeChat"'></WeChat>

      <FriendsList v-if='progress === "FriendsList"'></FriendsList>

      <Discover v-if='progress === "Discover"'></Discover>

      <Me v-if='progress === "Me"'></Me>
      
      <Footer v-if='isMain'></Footer>
    </div>

    <!-- 个性化界面 -->
        <!-- 聊天界面 -->
    <P2PDialog v-if='progress === "P2PDialog"'></P2PDialog>    

    
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import WeChat from './pages/weChat/weChat.vue'
  import FriendsList from './pages/contacts/friendsList.vue'
  import Discover from './pages/discover/discover.vue'
  import Me from './pages/me/me.vue'
  import P2PDialog from './pages/weChat/P2PDialog.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'app',
    computed: mapState({
      progress: state => state.progress,
      isMain: state => state.isMain
    }),
    components: {
      Header,
      Footer,
      WeChat,
      FriendsList,
      Discover,
      Me,
      P2PDialog
    }
  }
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  height: 100vh;
}
.main {
  /* padding-top: 80px; */
}
</style>
