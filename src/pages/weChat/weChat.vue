<template>
  <div class='wechatContainer'>
    <div class='main'>
      <div class='lists' v-for='(item, index) in lists' :key='index' @click="openChat">
        <div class='showAvator'>
          <img class='avator' v-bind:src='item.imgUrl' alt=''>
          <span class='infoNum'>{{item.infoCount}}</span>
        </div>
        <div class='showSubmits'>
          <h3 class='title'>
            {{item.title}}
          </h3>
          <p class='submitInfo'>
            {{item.submitInfo}}
          </p>
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
        submitInfo: '摘要信息'
      }, {
        imgUrl: 'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
        infoCount: 10,
        title: '联系人名称',
        submitInfo: '摘要信息'
      }]
    }
  },
  methods: {
    openChat: function () {
      alert('o')
    }
  }
}
</script>


<style scoped>
.wechatContainer {
  width: 750px;
  height: 145px;
}

.lists {
  height: 100px;
  padding: 16px;
  border-bottom: 1px solid gray;
}
.showAvator {
  width: 110px;
  height: 98px;
  left: 35px;
  top: 21px;
  float: left;
}
.showAvator img.avator {
  display: inline-block;
  width: 98px;
  height: 98px;
  border-radius: 50%;
	background-color: rgba(235, 235, 235, .1);  
}
.showAvator .infoNum {
  display: block;
  width: 20px;
  height: 20px;
  color: #fff;
  border-radius: 50%;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(255, 0, 0, 1);
  float: right;
  margin-left: -12px;
  margin-top: -10px;
}

.showSubmits {
  width: 500px;
  height: 98px;
  margin-left: 20px;
  float: left;
  text-align: left;
}
.title {
  height: 48px;
  line-height: 74px;
}
.submitInfo {
  height: 38px;
  line-height: 38px;
}


</style>

