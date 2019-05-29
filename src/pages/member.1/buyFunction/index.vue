<template>
  <div class="pageContent">
    <!-- 功能开通的时候有的 -->
    <div class="buyInfo" style="display:none;">
      <!-- 置顶功能 -->
      <div class="info">
        <div class="flex priceBox flexAlignCenter">
          <p class="title">置顶功能</p>
          <p class="flex1 priceArea text_r">
            ￥
            <span class="num">288</span>/次
          </p>
        </div>
        <div class="con">您当前正在购买置顶功能，每次置顶24小时。置顶为虚拟产品，购买后不会过期，不支持退款。</div>
      </div>
      <!-- 刷新功能 -->
      <div class="info">
        <div class="flex priceBox flexAlignCenter">
          <p class="title">刷新功能</p>
          <p class="flex1 priceArea text_r">
            ￥
            <span class="num">188</span>/次
          </p>
        </div>
        <div class="con">您当前正在购买刷新功能，以前发布的信息通过刷新会显示在前面。刷新为虚拟产品，购买后不会过期，不支持退款。</div>
      </div>
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd">购买数量</div>
          <div class="weui-cell__bd text_r">
            <div class="handleNumber">
              <span class="btn btn-reduce">-</span>
              <span class="num">1</span>
              <span class="btn btn-add">+</span>
            </div>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">优惠券</div>
          <div class="weui-cell__bd text_r">&nbsp;</div>
          <span class="icon-arrow arrow-right"></span>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">发票</div>
          <div class="weui-cell__bd text_r">
            <p class="txt">
              <span class="color_ff952e">电子普通发票</span>（会员服务-个人）
            </p>
          </div>
          <span class="icon-arrow arrow-right"></span>
        </div>
      </div>
    </div>
    <!-- 功能开通的时候有的  end -->
    <!-- 购买会员的时候有的 -->
    <div class="buyInfo">
      <div class="buyMemberInfo">
        <div class="perInfo level__perInfo flex flexAlignCenter">
          <img src="/static/images/of/tx.jpg" class="tx" alt>
          <div class="info flex1">
            <p class="name">
              13526458542
            </p>
          </div>
        </div>
        <div class="infoBox weui-cells">
          <div class="weui-cell">
            <div class="weui-cell__hd">服务名称</div>
            <div class="weui-cell__bd text_r">
              <p class="txt">精英会员</p>
            </div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell__hd">选择类型</div>
            <div class="weui-cell__bd text_r">
              <p class="txt">年卡</p>
            </div>
            <span class="icon-arrow arrow-right"></span>
          </div>
          <div class="weui-cell">
            <div class="weui-cell__hd">应付金额</div>
            <div class="weui-cell__bd text_r">
              <p class="txt">
                <span class="price">
                  ￥<span class="num">698</span>
                </span>
              </p>
            </div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell__bd">
              <p class="msg">您当前正在开通精英会员服务，会员服务为虚拟产品，不支持退款。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd">优惠券</div>
          <div class="weui-cell__bd text_r">&nbsp;</div>
          <span class="icon-arrow arrow-right"></span>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">发票</div>
          <div class="weui-cell__bd text_r">
            <p class="txt">
              <span class="color_ff952e">电子普通发票</span>（会员服务-个人）
            </p>
          </div>
          <span class="icon-arrow arrow-right"></span>
        </div>
      </div>
    </div>
    <!-- 购买会员的时候有的  end -->
    <!-- 支付方式 -->
    <div class="payMethod">
      <div class="section__hd" style="padding-bottom:0;">
        <span class="title">支付方式</span>
      </div>
      <radio-group>
        <label class="check__item flex flexAlignCenter">
          <img src="/static/images/icons/pay_weixin.jpg" class="icon-pay" alt>
          <p class="title flex1">微信</p>
          <radio color="#ff952e" value checked="true"/>
        </label>
        <label class="check__item flex flexAlignCenter">
          <img src="/static/images/icons/pay_yue.jpg" class="icon-pay" alt>
          <p class="title flex1">余额</p>
          <radio color="#ff952e" value/>
        </label>
      </radio-group>
    </div>
    <!-- 底部的定位按钮 -->
    <div class="ftBtn" style="heigth:100rpx;">
      <div class="inner fixed bm0">
        <div class="btns">
          <div class="btn center bg_ff952e color_fff">立即支付</div>
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
      cHeight: ""
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "结算台"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.weui-cell {
  .txt {
    color: #999;
  }
}
.buyInfo {
  background: #fff;
  margin-top: 1px;
  .info {
    padding: 30rpx;
    padding-bottom: 0;
    .con {
      padding: 30rpx;
      border: 1px solid #f2f2f2;
      border-top: none;
      border-radius: 0 0 16rpx 16rpx;
      color: #999;
    }
  }
  .priceBox {
    padding: 30rpx;
    background: #ff952e;
    color: #fff;
    border-radius: 16rpx 16rpx 0 0;
    font-size: 24rpx;
    .num {
      font-size: 40rpx;
    }
  }
  .title {
    font-size: 32rpx;
  }
}
.section__hd .title {
  font-weight: normal;
}
</style>
