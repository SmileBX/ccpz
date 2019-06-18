<template>
  <div class="pageContent bg_fff">
    <div class="memberTop center">
      <span class="btnModifyInfo">明细</span>
      <p class="num">0</p>
      <p class="title">积分</p>
    </div>
    <div class="integralMain">
      <h3 class="integralTitle center">
        <span class="bg_title"><span class="title">积分兑会员</span></span>
      </h3>
      <div class="integral__bd">
        <swiper class="integralSwiper" previous-margin="60rpx" next-margin="30rpx" circular="true">
          <swiper-item class="item one__item">
            <div class="outside">
              <div class="typePic one__gradient">
                <p class="type">会员次卡</p>
                <img src="/static/images/icons/v3.png" class="icons-vip gradient-vip" alt>
              </div>
              <div class="txtBox flex flexAlignCenter">
                <div class="flex1">
                  <p class="type">会员次卡</p>
                  <p class="num">2000分</p>
                </div>
                <span class="weui-btn">立即兑换</span>
              </div>
            </div>
          </swiper-item>
          <swiper-item class="item month__item">
            <div class="outside">
              <div class="typePic month__gradient">
                <p class="type">会员月卡</p>
                <img src="/static/images/icons/v3.png" class="icons-vip gradient-vip" alt>
              </div>
              <div class="txtBox flex flexAlignCenter">
                <div class="flex1">
                  <p class="type">会员月卡</p>
                  <p class="num">2000分</p>
                </div>
                <span class="weui-btn">立即兑换</span>
              </div>
            </div>
          </swiper-item>
          <swiper-item class="item season__item">
            <div class="outside">
              <div class="typePic season__gradient">
                <p class="type">会员季卡</p>
                <img src="/static/images/icons/v3.png" class="icons-vip gradient-vip" alt>
              </div>
              <div class="txtBox flex flexAlignCenter">
                <div class="flex1">
                  <p class="type">会员季卡</p>
                  <p class="num">2000分</p>
                </div>
                <span class="weui-btn">立即兑换</span>
              </div>
            </div>
          </swiper-item>
          <swiper-item class="item year__item">
            <div class="outside">
              <div class="typePic year__gradient">
                <p class="type">会员年卡</p>
                <img src="/static/images/icons/v3.png" class="icons-vip gradient-vip" alt>
              </div>
              <div class="txtBox flex flexAlignCenter">
                <div class="flex1">
                  <p class="type">会员年卡</p>
                  <p class="num">2000分</p>
                </div>
                <span class="weui-btn">立即兑换</span>
              </div>
            </div>
          </swiper-item>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  onLoad() {
    this.setBarTitle();
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "我的积分"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.pageContent{
  height: 100vh;
  overflow: hidden;
}
.memberTop {
  padding: 60rpx 0;
  .num {
    font-size: 72rpx;
    line-height: 1.3;
  }
  .title {
    font-size: 32rpx;
  }
  .btnModifyInfo {
    top: 30rpx;
  }
}
</style>
