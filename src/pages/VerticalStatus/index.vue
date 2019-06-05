<template>
  <div class="page pageVertical">
    <div class="top center">
      <div class="icon flex flexAlignCenter justifyContentCenter">
        <img src="/static/images/icons/verticalStatus2.jpg" alt>
      </div>
      <p class="status" style="margin-bottom:40rpx;">审核中</p>
      <img src="/static/images/icons/verticalStatusBg.jpg" mode="widthFix" class="VerticalBg" alt>
    </div>
    <div class="msgBox">
      <h2 class="statusTips">提交成功，请等待管理员审核</h2>
      <p class="msg">预计3个小时内审核完毕，审核结果会发送到消息上</p>
    </div>
  </div>
</template>
<script>
import { post, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
export default {
  data() {
    return {
      type: 1, //1:发布审核；2：认证审核
      verticalType:"",   //认证审核中是个人认证还是企业认证；1:个人认证；2：企业认证
      id:"",  //需要审核的id
      userId: "",
      token: "",
      curPage: ""
    };
  },
  onShow() {
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    if(this.$root.$mp.query.type && this.$root.$mp.query.type !=="undefined"){
      this.type = this.$root.$mp.query.type;
    }
    if(this.$root.$mp.query.id && this.$root.$mp.query.id !=="undefined"){
      this.id = this.$root.$mp.query.id;
    }
    if(this.$root.$mp.query.verticalType && this.$root.$mp.query.verticalType !=="undefined"){
      this.verticalType = this.$root.$mp.query.verticalType;
    }
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "发布"
      });
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
  color:#fff;
  background: #ff952e;
  padding-top:160rpx;
  // padding-bottom: 60rpx;
  .icon {
    width: 194rpx;
    height: 194rpx;
    background: #fff;
    border-radius: 50%;
    margin:0 auto 20rpx;
    img {
      width: 94rpx;
      height: 94rpx;
    }
  }
  .status {
    font-size: 44.62rpx;
  }
}
.msgBox{
  padding:120rpx;
  color:#666;
  margin-top:60rpx;
  line-height: 1.4;
  .statusTips{
    margin-bottom: 18rpx;
    font-size: 36rpx;
    color:#333;
    font-weight: 600;
  }
  text-align: center;
}
.VerticalBg {
  width: 100%;
  display: block;
}
</style>