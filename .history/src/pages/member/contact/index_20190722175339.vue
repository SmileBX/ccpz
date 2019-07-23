<template>
  <div class="pageContent bg_fff" v-if="jianjie">
    <div class="weui-cells">
      <div class="weui-cell">
        <img src="/static/images/icons/con_tel.jpg" class="icon-nav" alt="">
        <button class="weui-cell__bd" style="border:none;text-align:left" plain @tap="makePhone">
           <p class="tel">{{info.Mobile}}</p>
           <p class="time">服务时间&nbsp;{{info.WebTel}}</p>
        </button>
        <span class="icon-arrow arrow-right"></span>
      </div>
      <div class="weui-cell">
        <img src="/static/images/icons/con_kefu.jpg" class="icon-nav" alt="">
        <button class="weui-cell__bd" plain style="border:none;text-align:left" open-type="contact" >
          <div class="weui-cell__bd">
              <p class="tel">在线客服</p>
              <p class="time">服务时间&nbsp;{{info.WebTel}}</p>
          </div>
          <span class="icon-arrow arrow-right"></span>
        </button>
       
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
    this.getConcat();
  },
  data(){
    return {
      info:{},
      jianjie:false
    }
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "联系客服"
      });
    },
    getConcat(){
       post("About/AboutUs",{}).then(res => {
        if(res.code===0){
          this.info = res.data;
          this.jianjie = true;
        }
      })
    },
    //联系客服
    makePhone(){
      wx.makePhoneCall({
        phoneNumber:this.info.Mobile //仅为示例，并非真实的电话号码
      })
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
