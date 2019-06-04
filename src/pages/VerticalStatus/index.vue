<template>
  <div class="page pageVertical">
    <div class="top">
      <div class="icon">
        <img src="" alt="">
      </div>
      <p class="status">审核中</p>
      <img src="" mode="widthFix" class="VerticalBg" alt="">
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
      verticalType: 1, //1:个人认证；2：企业认证
      userId: "",
      token: "",
      curPage: ""
    };
  },
  onShow() {
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
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
.top .icon{
  width: 200rpx;
}
.VerticalBg{
  width: 100%;
  display: block;
}
</style>