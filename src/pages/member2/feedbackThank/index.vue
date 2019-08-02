<template>
  <div class="page pageVertical">
    <div class="top center">
      <div class="icon flex flexAlignCenter justifyContentCenter">
        <img src="/static/images/icons/feedback.png" alt>
      </div>
      <p class="status" style="margin-bottom:20rpx;">提交成功</p>
    </div>
    <div class="msgBox">
      <p class="msg">感谢您的支持与联系，我们将尽快安排工作人员联系您，祝生活工作愉快！</p>
    </div>
    <div class="btnSub" @click="gopage">完成</div>
  </div>
</template>
<script>
import { post, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
export default {
  data() {
    return {
      
    };
  },
  onShow() {
    
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "成成快拼"
      });
    },
    gopage(){
      wx.switchTab({
        url:"/pages/my/main"
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.pageVertical{
  height: 100vh;
  overflow: hidden;
  background: #fff;
}
.top {
  color:#ff952e;
  background: #fff;
  padding-top:100rpx;
  // padding-bottom: 60rpx;
  .icon {
    width: 194rpx;
    height: 194rpx;
    background: #fff;
    border-radius: 50%;
    margin:0 auto 20rpx;
    img {
      width: 140rpx;
      height: 140rpx;
    }
  }
  .status {
    font-size: 44.62rpx;
  }
}
.msgBox{
  padding: 0 75rpx;
  color:#666;
  // margin-top:60rpx;
  line-height: 1.4;
  .statusTips{
    margin-bottom: 18rpx;
    font-size: 36rpx;
    color:#333;
    font-weight: 600;
  }
  text-align: center;
}
.btnSub{
  width: 600rpx;
  margin-top: 260rpx;
}
</style>