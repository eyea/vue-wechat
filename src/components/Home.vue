<template>
  <div class="home">
    <h3>{{ title }}</h3>
    <p>{{ copyright }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        title: 'welcome wechat',
        copyright: 'wonderful experience will come soon '
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    color: green;
  }
  p {
    position: absolute;
    bottom: .1rem;
    left: 0;
    right: 0;
  }
</style>

