<template>
  <div class='discoverContainer'>
    <div class='main'>
      <!-- 根据不同规则来显示 -->
      <div class='lists' v-for='(item, index) in lists' :key='index' @click='handleDiscover'>
          <div class='showPic'>
              <img class='avator' v-bind:src='item.discoverImgUrl' alt=''>
          </div>
          <div class='showInfo'>
              <h3 class='title'>{{item.title}}</h3>
          </div>
          <div class='showAvator' v-show='item.tips'>
            <img class='avator' v-bind:src='item.tips ? item.tips.tipsImgUrl : ""' alt=''>
            <span class='infoNum'>{{item.infoCount}}</span>
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
          discoverImgUrl:
            'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
          title: 'Monments',
          tips: {
            tipsImgUrl:
              'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4'
          }
        },
        {
          discoverImgUrl:
            'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
          title: 'Scan QR Code'
        },
        {
          discoverImgUrl:
            'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
          title: 'Shake'
        },
        {
          discoverImgUrl:
            'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
          title: 'Top Stories'
        },
        {
          discoverImgUrl:
            'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
          title: 'Search'
        },
        {
          discoverImgUrl:
            'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
          title: 'Games'
        },
        {
          discoverImgUrl:
            'https://avatars3.githubusercontent.com/u/17020223?s=200&u=a4eeebc47fe103d73123f8f44e97937580c6a4e3&v=4',
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

<style lang='scss' scoped>
.discoverContainer {
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
      .showAvator {
        width: 50px;
        height: 62px;
        float: right;
        margin-right: 20px;
        margin-top: 6px;
        .avator {
          width: 42px;
          height: 42px;
        }
        .infoNum {
          display: inline-block;
          width: 10px;
          height: 10px;
          position: absolute;
          top: 8px;
          background-color: rgba(255, 0, 0, 1);
          color: #fff;
          border-radius: 50%;
          font-size: 10px;
        }
      }
    }
  }
}
</style>

