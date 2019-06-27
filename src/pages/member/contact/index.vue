<template>
  <div class="pageContent bg_fff">
    <div class="weui-cells">
      <div class="weui-cell">
        <img src="/static/images/icons/con_tel.jpg" class="icon-nav" alt="">
        <button class="weui-cell__bd" style="border:none;text-align:left" plain>
           <p class="tel">40000000000000</p>
           <p class="time">服务时间&nbsp;09：00-20：00</p>
        </button>
        <span class="icon-arrow arrow-right"></span>
      </div>
      <div class="weui-cell">
        <img src="/static/images/icons/con_kefu.jpg" class="icon-nav" alt="">
        <button class="weui-cell__bd" plain style="border:none;text-align:left" open-type="contact" >
           <p class="tel">在线客服</p>
           <p class="time">服务时间&nbsp;09：00-20：00</p>
        </button>
        <span class="icon-arrow arrow-right"></span>
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
        title: "联系客服"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.weui-cell::before{
  left:0;
  right: 0;
}
.weui-cell__bd{
  line-height: 1.5;
}
.icon-nav{
  width: 80rpx;
  height: 80rpx;
  margin-right: 20rpx;
}
.tel{
  font-size: 32rpx;
}
.time{
  font-size: 24rpx;
  color:#999;
}
</style>
