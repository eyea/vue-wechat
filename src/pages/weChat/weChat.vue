<template>
  <div class='wechatContainer'>
    <div class='main'>
      <div class='lists' v-for='(item, index) in lists' :key='index' @click="openChat(item)">
        <div class='showAvator'>
          <img class='avator' v-bind:src='item.imgUrl' alt=''>
          <span class='infoNum'>{{item.infoCount}}</span> <!--注意大于99的情况-->
        </div>
        <div class='showSubmits'>
          <h3 class='title'>
            {{item.title}}
          </h3>
          <p class='submitInfo'>
            {{item.submitInfo}}
          </p>
        </div>
        <div class="right">
          <!-- TODO: 显示时间和别的图标 -->
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      lists: [{
        imgUrl: 'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
        infoCount: 9,
        title: '联系人名称',
        submitInfo: '摘要信息',
        lastUpdateTime: '12:30',
        chatType: 'p2p'// 聊天分类 个人、群聊、公众号
      }, {
        imgUrl: 'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
        infoCount: 10,
        title: '联系人名称',
        submitInfo: '摘要信息',
        lastUpdateTime: '12:30',
        chatType: 'groupChat'
      }]
    }
  },
  methods: {
    openChat: function (item) {
      // 从聊天列表点击进入聊天界面
      console.log(item)
      // 根据Item的某个字段来进入不同的路由
      if (item.chatType === 'p2p') {
        this.$store.commit('updateIsMain', false)
        this.$store.commit('updateProgress', 'P2PDialog')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wechatContainer {
  width: 100%;
  .main {
    .lists {
      width: 320px;
      height: 62px;
      border-bottom: 1px solid gray;
      position: relative;
      padding-top: 10px;
      padding-bottom: 10px;
      box-sizing: border-box;
      .showAvator {
        width: 50px;
        height: 62px;
        float: left;
        .avator {
          width: 42px;
          height: 42px;
        }
        .infoNum {
          display: inline-block;
          width: 16px;
          height: 16px;
          position: absolute;
          top: 8px;
          background-color: rgba(255, 0, 0, 1);
          color: #fff;
          border-radius: 50%;
          font-size: 10px;
        }
      }
      .showSubmits {
        float: left;
        width: 120px;
        text-align: left;
        margin-left: 20px;
        .title {
          font-size: 12px;
        }
        .submitInfo {
          font-size: 10px;
        }
      }
    }
  }
}
</style>
