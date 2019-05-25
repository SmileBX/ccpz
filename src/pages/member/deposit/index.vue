<template>
  <div class="pageContent">
    <div class="widthdrawBox bg_fff">
      <div class="charge">
        <p class="apoint" style="padding-top:20rpx;">充值金额</p>
        <p class="flex flexAlignBaseline" style="padding-top:10rpx;padding-bottom:20rpx;">
          <span class="fh">￥</span>
          <input v-model="amount" type="number" class="inputPrice flex1">
        </p>
      </div>
    </div>
    <div class="tips" style="padding:20rpx 30rpx;">账户余额：{{wallet}}</div>
    <div class="ftBtn" style="padding:60rpx 30rpx;">
      <div class="inner">
        <div class="btns">
          <div class="btn bg_ff952e color_fff center">下一步</div>
        </div>
      </div>
    </div>
    <!-- 选择付款、提现弹窗 -->
    <div class="shade bottom__shade" style="display:none;">
      <div class="mask"></div>
      <div class="shadeContent" style="min-height:700rpx;">
        <div class="shade__hd">
          <span class="icon-back">
            <img src="/static/images/icons/close.jpg" alt>
          </span>
          <p class="title">选择到账银行卡</p>
        </div>
        <div class="shade__bd">
          <div class="content weui-cells selectCard__weui-cells">
            <radio-group>
              <label class="weui-cell">
                <img src class="icon-card" alt>
                <div class="weui-cell__bd">
                  <p class="txt">中国建行储蓄卡(3578)</p>
                </div>
                <radio color="#ff952e" checked="true"/>
              </label>
              <label class="weui-cell">
                <img src class="icon-card" alt>
                <div class="weui-cell__bd">
                  <p class="txt">深圳农商银行储蓄卡(3578)</p>
                </div>
                <radio color="#ff952e"/>
              </label>
            </radio-group>
            <div class="weui-cell">
              <img src="/static/images/icons/add4.jpg" class="icon-card" alt>
              <div class="weui-cell__bd">
                <p class="txt">添加新卡提现</p>
              </div>
              <span class="icon-arrow arrow-right"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 确认支付弹窗 -->
    <div class="shade bottom__shade">
      <div class="mask"></div>
      <div class="shadeContent" style="min-height:700rpx;">
        <div class="shade__hd">
          <span class="icon-back">
            <img src="/static/images/icons/close.jpg" alt>
          </span>
          <p class="title">确认付款</p>
        </div>
        <div class="shade__bd">
          <div class="payInfo">
              <p class="priceArea center">￥<span class="num">10.00</span></p>
          </div>
          <div class="weui-cells mt0">
            <div class="weui-cell">
              <label class="label" style="color:#999;">订单信息</label>
              <div class="weui-cell__bd text_r">
                <p class="txt">充值</p>
              </div>
            </div>
            <div class="weui-cell">
              <label class="label" style="color:#999;">付款方式</label>
              <div class="weui-cell__bd text_r">
                <p class="txt">工商银行（2154）</p>
              </div>
              <span class="icon-arrow arrow-right"></span>
            </div>
          </div>
          <div class="ftBtn" style="padding:60rpx 30rpx 0;margin-top:50rpx;">
            <div class="inner">
              <div class="btns">
                <div class="btn  bg_ff952e color_fff center">立即付款</div>
              </div>
            </div>
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
  onShow() {},
  data() {
    return {
      amount: "",
      wallet: 0
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "充值"
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.widthdrawBox {
  padding: 0 30rpx 40rpx;
  margin-top: 1px;
}

.charge {
  .apoint {
    padding: 10rpx 0;
    font-size: 30rpx;
  }
  input {
    flex-grow: 1;
    margin-left: 20rpx;
  }
}

.tips {
  color: #999;
}
.fh {
  font-size: 32rpx;
}
.inputPrice {
  margin-left: 0 !important;
  font-size: 50rpx;
}
.btns {
  .btn {
    border-radius: 16rpx;
  }
}
.shade{
  .weui-cells{
    .weui-cell:last-child::before{
      display: block;
    }
  }
}
.selectCard__weui-cells {
  .weui-cell {
    padding: 24rpx 30rpx;
  }
}
.payInfo{
  padding: 50rpx 30rpx 20rpx;
}
.priceArea{
  font-size: 32rpx;
  .num{
    font-size: 54rpx;
  }
}
</style>