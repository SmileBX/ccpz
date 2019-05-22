<template>
  <div class="pageContent bg_fff" style="min-height:100vh">
    <div class="topTips">
      <div class="Tipsbox">
        <div class="icon">
          <img src="/static/images/icons/tips_icon.png">
        </div>
        <div class="txt">温馨提示：请正确选择发布信息的分类，分类错误会导致信息违规下架</div>
      </div>
    </div>
    <div class="navBox">
      <ul class="navList li_25 center navList2">
        <li>
          <div class="outside" @click="gotoFrom">
            <div class="icon-img">
              <img src="/static/images/icons/bangongshi_2.jpg" alt>
            </div>
            <p class="title">办公室</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/kawei.jpg" alt>
            </div>
            <p class="title">卡位</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/huiyishi.jpg" alt>
            </div>
            <p class="title">会议室</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/peixun.jpg" alt>
            </div>
            <p class="title">培训机构</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/duanzu.jpg" alt>
            </div>
            <p class="title">短租</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/shangpu.jpg" alt>
            </div>
            <p class="title">商铺</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/gongchang.jpg" alt>
            </div>
            <p class="title">工厂</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/shebei.jpg" alt>
            </div>
            <p class="title">设备</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/shoumaiji.jpg" alt>
            </div>
            <p class="title">自动售卖机</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/qita.jpg" alt>
            </div>
            <p class="title">其他</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
    gotoFrom(){
      wx.navigateTo({
        url: '/pages/Issue/rentOffic/main'
      })
    }
  },

  created() {}
};
</script>
<style lang="scss" scoped>
.topTips {
  background: #fcdec2;
  padding: 40rpx;
  .Tipsbox {
    .icon {
      float: left;
      height: 80rpx;
      width: 80rpx;
      margin-right: 20rpx;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .txt {
      line-height: 40rpx;
      color: #666
    }
  }
}
.navList {
  font-size: 24rpx;
  color: #999;
  .outside {
    color: #999;
  }
  &.li_25 .icon-img,
  &.li_25 .icon-img img{
    width: 100rpx;
    height: 100rpx;
  }
}

</style>