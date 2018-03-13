<template>
  <div>
    <!-- 聊天header部分 -->
    <div class="header">
      <!-- 返回按钮 -->
      <span class="microIcon fl iconBack" v-show="showIconBack" @click='handleBack'>
        B
      </span>

      <!-- 显示title 包括文章 -->
      <span class="fl title">
        {{ title }} {{ inputStatus ? '(正在输入...)': ''}}
        <!-- 显示正在输入的状态 inputStatus -->
      </span>
  
      <!-- 显示搜索 -->
      <span class="fr microIcon iconPersonAvator" v-show="showIconPersonAvator">
        P
      </span>      
    </div>

    <!-- 主体聊天内容区域 -->
    <P2P></P2P>
  </div>
</template>

<script>
import P2P from '../../components/Dialog/P2P.vue'
export default {
  data () {
    return {
      title: '小糊涂神', // 从点击事件进入的标题
      showIconBack: true,
      showIconPersonAvator: true,
      inputStatus: true // 从state里获取
    }
  },
  methods: {
    handleBack: function (data) {
      console.log('dialog back event..', data)
      this.$store.commit('updateIsMain', true) // 回归到主界面
      this.$store.commit('updateProgress', 'WeChat') // 是否根据进来的页面原路动态返回？ 后期可以统一封装一下
    }
  },
  components: {
    P2P
  }
}
</script>

<style scoped>
  .header {
    height: 88px;
    line-height: 88px;
    color: #fff;
    background: #000;
    font-size: 28px;
  }
  .microIcon {
    width: 88px;
    height: 88px;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .title {
    height: 88px;
    line-height: 88px;
    max-width: 50vh;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>



