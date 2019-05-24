<template>
  <div class="page bg_fff" style="height:100vh">
    <div class="slidebg"></div>
    <div class="flex flexAlignCenter pall">
        <img src="/static/images/icons/attestationTag.png" alt="" class="incon_atten">
        <span class="font_four fontBold cer-we">您已通过实名认证</span>
    </div>
    <!--card-->
    <div class="padwid infobg">
        <div class="person_info">
          <p class="name">李刚</p>
          <p class="certical">认证实名</p>
          <p class="tips">认证时间 : 2019-03-25 10:36:26</p>
          <p class="tips">认证方式 :  身份证实名认证</p>
        </div>
        <img src="/static/images/icons/card.jpg" alt="" class="icon_card">
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
        title: "认证信息"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
  .incon_atten{
    width:18rpx;
    height:22rpx;
  }
  .cer-we{
    margin-left:20rpx;
    color:#1a1a1a;
  }
  .infobg{
    background:#ff9325;
    border-radius:15rpx;
    width:690rpx;
    height:315rpx;
    margin:0 auto;
    box-sizing:border-box;
    padding:30rpx;
    position:relative;
  }
</style>