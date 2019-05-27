<template>
  <div class="pageContent bg_fff">
    <div class="LoginBox">
      <img src="/static/images/icons/logo.jpg" class="logo" alt>
      <div class="from">
        <div class="line flex">
          <input type="text"  class=" weui-input flex1" placeholder="请输入手机号码">
          <span class="btnCode">获取动态码</span>
        </div>
        <div class="line flex">
          <input type="text" class="weui-input flex1" placeholder="动态码">
        </div>
      </div>
      <div class="ftBtn center" style="padding-top:60rpx;">
        <div class="inner">
          <div class="btns">
            <div class="btn bg_ef8120 color_fff">登录</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  onLoad() {
    this.setBarTitle();
  },
  data() {
    return {};
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "验证码登录"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.pageContent {
  height: 100vh;
  overflow: hidden;
}
.logo {
  width: 466rpx;
  height: 100rpx;
  display: block;
  margin: 0 auto;
  margin-bottom: 80rpx;
}
.LoginBox{
  border-top:1px solid #f2f2f2;
  padding:206rpx 70rpx 70rpx; 
}
.from .line{
  border-bottom: 1px solid #f2f2f2;
  padding-top:12rpx;
  padding-bottom: 12rpx;
  margin-top:50rpx;
}
.bg_ef8120{
  background: #ef8120;
}
.btnCode{
  color:#666;
}
</style>
