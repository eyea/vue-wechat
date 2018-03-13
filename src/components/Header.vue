<template>
  <div class="header">
    <!-- 返回按钮 -->
    <span class="microIcon fl iconBack" v-show="showIconBack">
      B
    </span>

    <!-- 阅读文章时候 显示 × title 和分享图标 -->
    <span class="microIcon fl iconClose" v-show="showIconClose">
      C
    </span>

    <!-- 显示title 包括文章 -->
    <span class="fl title">
      {{ title }}
    </span>

    <!-- 显示 showBtnAddLists-->
    <span class="fr microIcon iconAddLists" v-show="showIconAddLists">
      L
    </span>
 
    <!-- 显示搜索 -->
    <span class="fr microIcon iconSearch" v-show="showIconSearch">
      S
    </span>  

    <!-- 显示别的功能的图标 -->
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        showIconBack: true, // showIconBack showIconClose showIconSearch showIconAddLists 需要从stroe里进行更新
        showIconClose: false,
        title: '微信测试版',
        showIconSearch: true,
        showIconAddLists: true
      }
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

