<template>
  <div class='contactsContainer'>
    <!-- 固定四个 -->
    
    <div class="main">
      <!-- 分类展示 -->
      <div class='lists' v-for='(item, index) in lists' :key='index' @click='contactSb'>
          <div class='showPic'>
              <img class='avator' v-bind:src='item.contactImgUrl' alt=''>
          </div>
          <div class='showInfo'>
              <h3 class='title'>{{item.title}}</h3>
          </div>
      </div>      
    </div>

  </div>

</template>

<script>
export default {
  data () {
    return {
      lists: [
        {
          contactImgUrl: 'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
          title: 'New Friends'
        },
        {
          contactImgUrl: 'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
          title: 'Group Chat'
        },
        {
          contactImgUrl: 'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
          title: 'Tags'
        },
        {
          contactImgUrl: 'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
          title: 'Official Accounts'
        }
      ]
    }
  },
  methods: {
    contactSb: function () {
      alert('联系SB')
    }
  }
}
</script>

<style lang="scss" scoped>
.contactsContainer {
  .main {
    .lists {
      height: 62px;
      line-height: 62px;
      border-bottom: 1px solid gray;
      position: relative;
      box-sizing: border-box;
      .showPic {
        width: 42px;
        height: 42px;
        float: left;
        margin-top: 6px; // TODO: 垂直居中?
        .avator {
          width: 42px;
          height: 42px;
          display: block;
          margin: 0 auto;
        }
      }
      .showInfo {
        float: left;
        text-align: left;
        margin-left: 20px;
        .title {
          font-size: 12px;
        }
      }
    }
  }
}
</style>

