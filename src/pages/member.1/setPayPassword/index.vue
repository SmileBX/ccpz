<template>
  <div class="pageContent">
    <div class="weui-cells">
      <div class="weui-cell">
        <span class="label">当前手机</span>
        <div class="weui-cell__bd">
           <input type="text" value="13254521254">
        </div>
      </div>
      <div class="weui-cell code__weui-cell">
        <span class="label">验证码</span>
        <div class="weui-cell__bd">
           <input type="text" placeholder="输入验证码">
        </div>
        <span class="btnCode color_ff952e">发送验证码</span>
      </div>
      <div class="weui-cell">
        <span class="label">新密码</span>
        <div class="weui-cell__bd">
           <input type="text" placeholder="输入6位支付密码">
        </div>
      </div>
      <div class="weui-cell">
        <span class="label">确认密码</span>
        <div class="weui-cell__bd">
           <input type="text" placeholder="再次输入6位支付密码">
        </div>
      </div>
    </div>
    <div style="padding:80rpx 30rpx;">
      <div class="weui-btn btn-active fill">确认</div>
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
        title: "设置支付密码"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.weui-cells .label{
  width: 200rpx;
}

</style>
