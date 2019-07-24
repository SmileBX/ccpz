<template>
  <div class="page pageVertical">
    <div class="top center">
      <div class="icon flex flexAlignCenter justifyContentCenter">
        <img src="/static/images/icons/verticalfail.png" alt>
      </div>
      <p class="status" style="margin-bottom:40rpx;">审核失败</p>
      <img src="/static/images/icons/verticalStatusBg.jpg" mode="widthFix" class="VerticalBg" alt>
    </div>
    <div class="msgBox">
      <h2 class="statusTips">抱歉，您的发布审核未通过！</h2>
      <p class="msg">发布的房源图片模糊、失真且与发布内容不符 合，判定为虚假图片</p>
    </div>
    <div class="againsubmit">重新发布</div>
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
    // if(this.$root.$mp.query.type && this.$root.$mp.query.type !==""){
    //   this.type = this.$root.$mp.query.type;
    // }
    // if(this.$root.$mp.query.id && this.$root.$mp.query.id !==""){
    //   this.id = this.$root.$mp.query.id;
    // }
    // if(this.$root.$mp.query.verticalType && this.$root.$mp.query.verticalType !==""){
    //   this.verticalType = this.$root.$mp.query.verticalType;
    // }
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
  padding-top:150rpx;
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
  padding:80rpx 100rpx 100rpx;
  color:#555;
  font-weight: 600;
  font-size: 26rpx;
  // margin-top:60rpx;
  line-height: 1.4;
  .statusTips{
    margin-bottom: 26rpx;
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
.againsubmit{
  width: 526rpx;
  height: 88rpx;
  border: #ccc 1px solid;
  color: #666;
  border-radius: 8rpx;
  text-align: center;
  line-height: 88rpx;
  margin: 0 auto
}
</style>