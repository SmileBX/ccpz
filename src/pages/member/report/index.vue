<template>
  <div class="pageContent">
    <div class="weui-cells__title" style="padding:20rpx 30rpx;color:#999;">选择举报原因</div>
    <radio-group class="weui-cells mt0">
      <label class="weui-cell">
        <div class="weui-cell__bd">
          <p class="txt">虚假个人信息</p>
        </div>
        <radio color="#ff952e" checked="true"/>
      </label>
      <label class="weui-cell">
        <div class="weui-cell__bd">
          <p class="txt">发布不适当内容对我造成骚扰</p>
        </div>
        <radio color="#ff952e"/>
      </label>
      <label class="weui-cell">
        <div class="weui-cell__bd">
          <p class="txt">存在欺诈骗钱的行为</p>
        </div>
        <radio color="#ff952e"/>
      </label>
      <label class="weui-cell">
        <div class="weui-cell__bd">
          <p class="txt">发布假冒信息</p>
        </div>
        <radio color="#ff952e"/>
      </label>
      <label class="weui-cell">
        <div class="weui-cell__bd">
          <p class="txt">发布广告/色情/违法内容</p>
        </div>
        <radio color="#ff952e"/>
      </label>
    </radio-group>
    <!-- 补充说明 -->
    <div class="explain bg_fff mt10">
      <div class="eaditBox">
        <h3 style="font-size:30rpx;color:#999;">补充说明</h3>
        <textarea class="weui-area" placeholder="补充文字说明或上传截图佐证您举报的内容，将会更容易通过审核哦(5~100字)"></textarea>
      </div>
      <!-- 上传图片 -->
      <div class="form-cell-bd form-cell-img pd15">
        <div class="upbtn">
          <span class="close">×</span>
          <img class="upimg" src="/static/images/of/index_a1.jpg">
        </div>
        <div class="upbtn">
          <img class="upimg" src="/static/images/icons/upload_1.png">
        </div>
      </div>
    </div>
    <div class="ftBtn" style="padding:60rpx 30rpx;">
      <div class="inner">
        <div class="btns">
          <div class="btn bg_ff952e color_fff center">下一步</div>
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
    return {};
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "举报"
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.explain{
  padding:30rpx 0;
}
.eaditBox {
  padding:0 30rpx;
  border-bottom: 1px solid #f2f2f2;
  textarea {
    height: 100rpx;
    font-size: 30rpx;
    margin-top: 40rpx;
  }
}
</style>