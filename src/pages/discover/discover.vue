<template>
  <div class="discoverContainer">
    <!-- 根据不同规则来显示 -->
    <div class='lists' v-for='(item, index) in lists' :key='index' @click='handleDiscover'>
        <div class='showPic'>
            <img class='avator' src={item.discoverImgUrl} alt=''>
        </div>
        <div class='showInfo'>
            <h3 class='title'>
							{{item.title}}
						</h3>
        </div>
        <div class='showAvator' v-show='item.tips'>
          <img class='avator' src={item.tips.tipsImgUrl} alt=''>
          <span class='infoNum'>{{item.infoCount}}</span>
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
          discoverImgUrl: 'http://img.xiaopiu.com/images/defaultImg-727ca6ead8.png',
          title: 'Monments',
          tips: {
            tipsImgUrl: 'http://img.xiaopiu.com/images/defaultImg-727ca6ead8.png'
          }
        },
        {
          discoverImgUrl: 'http://img.xiaopiu.com/images/defaultImg-727ca6ead8.png',
          title: 'Scan QR Code'
        },
        {
          discoverImgUrl: 'http://img.xiaopiu.com/images/defaultImg-727ca6ead8.png',
          title: 'Shake'
        },
        {
          discoverImgUrl: 'http://img.xiaopiu.com/images/defaultImg-727ca6ead8.png',
          title: 'Top Stories'
        },
        {
          discoverImgUrl: 'http://img.xiaopiu.com/images/defaultImg-727ca6ead8.png',
          title: 'Search'
        },
        {
          discoverImgUrl: 'http://img.xiaopiu.com/images/defaultImg-727ca6ead8.png',
          title: 'Games'
        },
        {
          discoverImgUrl: 'http://img.xiaopiu.com/images/defaultImg-727ca6ead8.png',
          title: 'Mini Programs'
        }
      ]
    }
  },
  methods: {
    handleDiscover: function () {
      alert('discover')
    }
  }
}
</script>

<style scoped>
.discoverContainer {
	font-size: 24px;
}
.lists {
  height: 80px;
  padding: 10px;
  border-bottom: 1px solid gray;
}
.showPic {
  width: 80px;
  height: 90px;
  left: 35px;
  top: 21px;
  float: left;
}
.showPic img.avator {
  display: inline-block;
  width: 76px;
  height: 76px;
  border: 1px solid red;
  background-color: rgba(235, 235, 235, 0.1);
}
.showInfo {
  width: 500px;
  height: 80px;
  margin-left: 20px;
  float: left;
  text-align: left;
}
.title {
  height: 80px;
  line-height: 80px;
}

.showAvator {
  width: 96px;
  height: 80px;
  right: 35px;
  top: 21px;
  float: right;
}
.showAvator img.avator {
  display: inline-block;
  width: 76px;
  height: 76px; 
  border: 1px solid red;
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
</style>

