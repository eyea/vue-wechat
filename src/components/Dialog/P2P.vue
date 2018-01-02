<template>
  <div>
    <!-- 注意不同的消息类型的分类 -->
    <span class="showTime">{{new Date()}}</span>

    <div class='chatBox' v-for='(item, index) in latestInfos' :key='index'>
      <img class='avator' v-bind:src='item.avatorUrl' alt="">
      <p class="content">
        {{ item.sendMessage.content}}
      </p>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      latestInfos: [{
        time: '1514904397000', // 发送时间(服务器时间为准还是本地时间)
        sendMessage: {
          type: 'text', // 消息类型 文本 图片 语音 红包 转发文章 小程序 从而采取不同的响应方案
          content: '明天去滑雪吧！'
        },
        isCurrentPeoson: 0, // 是否是当前的主人 1 是 0 否
        sendMessagePersonInfos: [{ // 发送者相关信息 按照事件来排序
          name: 'li',
          uid: 7758, // 通过该UID 点击头像可以查询到具体信息
          avatorUrl: 'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4'
        }, {
          time: '1514904883000',
          sendMessage: {
            type: 'text',
            content: '好啊~'
          },
          isCurrentPeoson: 1,
          sendMessagePersonInfos: [{
            name: 'dong',
            uid: 520,
            avatorUrl: 'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4'
          }]
        }]
      }]
    }
  }
}
</script>

<style scoped>
  .showTime {
    display: inline-block;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .chatBox {
    width: 50%;
  }
  .avator {
    display: inline-block;
    width: 50px;
    height: 50px;
  }
</style>


