<template>
  <div class="pageContent">
    <div class="addCardFrom">
      <div class="weui-cells cardInfo__weui-cells">
        <div class="weui-cell">
          <label class="label">银行卡</label>
          <div class="weui-cell__bd">
            <p class="txt">中国银行储蓄卡</p>
          </div>
        </div>
        <div class="weui-cell">
          <label class="label">卡&nbsp;&nbsp;&nbsp;&nbsp;号</label>
          <div class="weui-cell__bd">
            <p class="txt">6217&nbsp;&nbsp;9969&nbsp;&nbsp;3300&nbsp;&nbsp;5620&nbsp;520</p>
          </div>
        </div>
      </div>
      <div class="weui-cells reserve__weui-cells">
        <div class="weui-cell flexAlignStart">
          <label class="label" style="margin-top:20rpx;">手机号</label>
          <div class="weui-cell__bd">
            <div class="weui-cell">
              <div class="weui-cell__bd">
                 <input type="text" placeholder="银行预留手机号">
              </div>
              <img src="/static/images/icons/help.jpg" class="icon-help" alt="">
            </div>
            <div class="weui-cell">
              <div class="weui-cell__bd txt__weui-cell__bd">
                 <p class="txt">135&nbsp;2643&nbsp;3925</p>
                 <p class="msg">注册手机号</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="agreement" style="padding:20rpx 30rpx;color:#999;margin-top:60rpx;">查看<span class="color_ff952e">《用户协议》</span></p>
      <div class="ftBtn center" style="padding:30rpx;">
        <div class="inner">
          <div class="btns">
            <div class="btn bg_ff952e color_fff" style="border-radius:16rpx;">同意协议并验证</div>
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
        title: "验证银行卡信息"
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
 .weui-cell{
   padding-left:0;
   padding-right: 0;
 }
}
.cardInfo__weui-cells{
  padding:20rpx 0;
  .weui-cell{
    padding:2rpx 30rpx;
    &::before{
      display: none;
    }
  }
}
.reserve__weui-cells{
  .weui-cell {
    padding: 10rpx 0 0 30rpx;
    .weui-cell{
      padding:20rpx 30rpx 20rpx 0;
      &::before{
        left:0;
        right: 0;
      }
    }
  }
  .msg{
    font-size:26rpx;
    color:#999;
  }
}
.txt__weui-cell__bd{
  line-height: 1.4;
}
</style>