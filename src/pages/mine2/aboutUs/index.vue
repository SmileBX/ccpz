<template>
  <div class="pageContent" v-if="jianjie">
    <div class="about">
      <div class="logo">
        <!-- <img :src="info.Logo" alt=""> -->
        <img style="width:100%" mode="widthFix"  src="/static/images/icons/logo.jpg" alt="">
      </div>
      <div class="info"><div v-html="info.Description"></div></div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__hd">
           <label class="weui-label">官方网站</label>
        </div>
        <div class="weui-cell__bd text_r">
          <p class="txt">{{info.WebUrl}}</p>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
           <label class="weui-label">客服电话</label>
        </div>
        <div class="weui-cell__bd text_r">
          <p class="txt">{{info.Mobile}}</p>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
           <label class="weui-label">公司邮箱</label>
        </div>
        <div class="weui-cell__bd text_r">
          <p class="txt">{{info.Email}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { post, toLogin, getCurrentPageUrlWithArgs, trim } from "@/utils";
export default {
  onLoad() {
    this.setBarTitle();
  },
  onShow(){
    this.AboutUs();
  },
  data() {
    return {
      info:{},
      jianjie:false
    }
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "关于我们"
      });
    },
    AboutUs(){
      post("About/AboutUs",{}).then(res => {
        if(res.code===0){
          this.info = res.data;
          this.jianjie = true;
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.pageContent{
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  background: #fff;
}
.weui-cells .weui-cell:last-child::before{
  display: block;
}
// .weui-cell::before{
//   left:0;
//   right: 0;
// }
.about{
  padding:60rpx 30rpx;
}
.about .logo{
  width: 70%;
  margin:20rpx auto;
}
.about .info{
  padding-top:30rpx;
}
</style>
