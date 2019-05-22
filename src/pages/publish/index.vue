<template>
  <div class="pageContent">
      <!-- 导航 -->
    <div class="publishCon">
      <div class="hd-title">快捷发布</div>
      <ul class="navList li_25 center navList2">
        <li>
          <div class="outside" @click="gotosubMenu">
            <div class="icon-img">
              <img src="/static/images/icons/index_menu1.jpg" alt>
            </div>
            <p class="title">拼租</p>
          </div>
        </li>
        <li>
          <div class="outside" @click="gotosubMenu">
            <div class="icon-img">
              <img src="/static/images/icons/index_menu2.jpg" alt>
            </div>
            <p class="title">组建团队</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/index_menu3.jpg" alt>
            </div>
            <p class="title">拼团活动</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/index_menu4.jpg" alt>
            </div>
            <p class="title">房源</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  onLoad() {
    this.setBarTitle();
  },
  components: {},
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "发布"
      });
    },
    gotosubMenu(){
      wx.navigateTo({
        url: '/pages/Issue/submenu/main'
      })
    }
  },

  created () {
    
  }
}
</script>
<style lang="scss" scoped>
  .publishCon{margin:30rpx;border-radius:10rpx;background: #fff;overflow: hidden;}
  .hd-title{font-size: 32rpx; padding: 20rpx 30rpx 0;}
</style>