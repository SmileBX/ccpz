<template>
  <div class="pageContent">
    <div class="addCardFrom" style="border-top:20rpx solid #f2f2f2">
      <div class="section__hd">
        <span class="title">银行卡号</span>
      </div>
      <div class="weui-cells eadit__weui-cells mt0">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input type="text" placeholder="仅支持绑定本人银行卡">
          </div>
          <img src="/static/images/icons/cancle.png" class="icon-del" alt="">
        </div>
      </div>
      
      <div class="ftBtn center" style="padding:30rpx;margin-top:60rpx;">
        <div class="inner">
          <div class="btns">
            <div class="btn bg_ff952e color_fff" style="border-radius:16rpx;">下一步</div>
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
.section__hd{
  .title{
    font-size: 32rpx;
    font-weight:normal;
  }
}
.addCardFrom{
  height: 100vh;
  background:#fff;
}
.eadit__weui-cells{
  .weui-cell:last-child:before{
    display: block;
  }
}

</style>