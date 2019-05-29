<template>
  <div class="pageContent">
    <div class="addCardFrom">
      <!-- 短信验证 -->
      <p class="tel" style="padding:26rpx 30rpx;color:#999;">请输入手机135*****3925收到的短信验证码</p>
      <div class="weui-cells mt0 mb10">
        <div class="weui-cell" style="padding-top:24rpx;padding-bottom:24rpx;">
          <label class="label">验证码</label>
          <div class="weui-cell__bd">
              <input type="text" placeholder="短信验证码">
          </div>
          <span class="codeMsg color_ff952e">获取验证码</span>
        </div>
      </div>
      <p class="text_r" style="padding:12rpx 30rpx;"><span class="color_ff952e">收不到验证码？</span></p>
      
      <div class="ftBtn center" style="padding:30rpx;margin-top:30rpx;">
        <div class="inner">
          <div class="btns">
            <div class="btn bg_ff952e color_fff" style="border-radius:16rpx;">验证信息</div>
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
  onShow() {
  },
  data() {
    return {
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "添加银行卡"
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.icon-del,
.icon-help{
  width: 36rpx;
  height: 36rpx;
}

.weui-cell{
 .label{
   width: 100rpx;
   margin-right: 30rpx;
 }
}

</style>