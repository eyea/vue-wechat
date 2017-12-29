<template>
  <div class='contactsContainer'>
    <!-- 固定四个 -->
    


    <!-- 分类展示 -->
    <div class='lists' v-for='(item, index) in lists' :key='index' @click='contactSb'>
        <div class='showPic'>
            <img class='avator' src={item.contactImgUrl} alt=''>
        </div>
        <div class='showInfo'>
            <h3 class='title'>
							{{item.title}}
						</h3>
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
          contactImgUrl: 'http://img.xiaopiu.com/images/defaultImg-727ca6ead8.png',
          title: 'New Friends'
        },
        {
          contactImgUrl: 'http://img.xiaopiu.com/images/defaultImg-727ca6ead8.png',
          title: 'Group Chat'
        },
        {
          contactImgUrl: 'http://img.xiaopiu.com/images/defaultImg-727ca6ead8.png',
          title: 'Tags'
        },
        {
          contactImgUrl: 'http://img.xiaopiu.com/images/defaultImg-727ca6ead8.png',
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

<style scoped>

.contactsContainer {
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
</style>