<template>
  <div class="discoverContainer">
    <!-- 根据不同规则来显示 -->
    <div class='lists' v-for='(item, index) in lists' :key='index' @click='handleDiscover'>
        <div class='showPic'>
            <img class='avator' v-bind:src='item.discoverImgUrl' alt=''>
        </div>
        <div class='showInfo'>
            <h3 class='title'>
							{{item.title}}
						</h3>
        </div>
        <div class='showAvator' v-show='item.tips'>
          <img class='avator' v-bind:src='item.tips ? item.tips.tipsImgUrl : ""' alt=''>
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
          discoverImgUrl: 'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
          title: 'Monments',
          tips: {
            tipsImgUrl: 'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4'
          }
        },
        {
          discoverImgUrl: 'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
          title: 'Scan QR Code'
        },
        {
          discoverImgUrl: 'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
          title: 'Shake'
        },
        {
          discoverImgUrl: 'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
          title: 'Top Stories'
        },
        {
          discoverImgUrl: 'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
          title: 'Search'
        },
        {
          discoverImgUrl: 'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
          title: 'Games'
        },
        {
          discoverImgUrl: 'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
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
  border-radius: 50%;
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
</style>

