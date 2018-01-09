<template>
  <div class="home">
    <Header></Header>

    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ copyright }}</p>      
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import Footer from './Footer.vue'

  export default {
    name: 'Home',
    data () {
      return {
        title: 'welcome wechat',
        copyright: 'wonderful experience will come soon '
      }
    },
    components: {
      Header,
      Footer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    font-size: 20px;
  }
  h3 {
    color: green;
  }
</style>

