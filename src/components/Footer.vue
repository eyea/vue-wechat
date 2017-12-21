<template>
  <div class="tabs">
    <div class="tab" v-for='(item, index) in tabs' :key='index'>
      <div class="icon">
        {{ item.icon }}
      </div>
      <div class="text">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
        tabs: [{
          icon: 'img',
          text: '微信'
        }, {
          icon: 'img',
          text: '通讯录'
        }, {
          icon: 'img',
          text: '发现'
        }, {
          icon: 'img',
          text: '我'
        }]
      }
    }
  }
</script>

<style scoped>
  .tabs {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 44px;
    line-height: 44px;    
  }
  .tab {
    width: 25%;
    border: 1px solid #eee;
    box-sizing: border-box;
    text-align: center;
    height: 44px;
  }
  .icon {
    height: 8px;
    line-height: 24px;
  }
  .text {
    height: 14px;
    font-size: 12px;
  }
</style>

