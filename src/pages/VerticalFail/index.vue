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
      <p class="msg">{{AuditReasonText}}</p>
    </div>
    <div class="againsubmit" @click="gopage()">重新发布</div>
  </div>
</template>
<script>
import { post, valPhone, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
export default {
  data() {
    return {
      AuditReasonText:"",//审核失败的原因
      id:"",  //需要审核的id
      PageId:"",
      userId: "",
      token: "",
      curPage: ""
    };
  },
  onShow() {
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.id = this.$root.$mp.query.Id;
    this.Editxq()
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "发布"
      });
    },
    //审核失败原因
    Editxq() {
      post(
        "Goods/GetRent_Editxq",
        {
          UserId: this.userId,
          Token: this.token,
          Id: this.id
        },
        this.curPage
      ).then(res => {
        if (res.code == 0) {
          this.AuditReasonText=res.data.AuditReason.Value;console.log("**********",this.AuditReasonText)
          this.PageId=res.data.PageId;console.log("+++++++++",this.PageId)
        }
      });
    },
    //重新发布
    gopage(){
      var PageId=this.PageId;
      if(PageId==""){
        wx.redirectTo({
          url: '/pages/rent/rentOffic/main'
        })
      }else{
        wx.redirectTo({
          url: '/pages/rent/rentDevice/main'
        })
      }
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