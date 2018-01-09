<template>
  <div id='app'>

    <Header></Header>

    <div class="main">
      <WeChat v-if='progress === "WeChat"'></WeChat>

      <FriendsList v-if='progress === "FriendsList"'></FriendsList>

      <Discover v-if='progress === "Discover"'></Discover>

      <Me v-if='progress === "Me"'></Me>      
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import WeChat from './pages/weChat/weChat.vue'
  import FriendsList from './pages/contacts/friendsList.vue'
  import Discover from './pages/discover/discover.vue'
  import Me from './pages/me/me.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'app',
    computed: mapState({
      progress: state => state.progress
    }),
    components: {
      Header,
      Footer,
      WeChat,
      FriendsList,
      Discover,
      Me
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
  padding-top: 80px;
}
</style>
