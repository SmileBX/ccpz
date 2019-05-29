<template>
  <div class="pageContent bg_fff">
    <div class="LoginBox">
      <img src="/static/images/icons/loginPic.jpg" style="width:100%;" mode="widthFix" class="loginPic" alt="">
      <div class="ftBtn">
        <div class="inner">
          <div class="btns center">
            <button  class="btn bg_3daf35" @click="loginTel" open-type="getUserInfo">微信授权登陆</button>
            <div class="btn bg_ef8120" style="display:none;">成成账号登陆</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Login } from "@/utils";
export default {
  onLoad() {
  },
  onShow(){
    if (this.$root.$mp.query.askUrl) {
      let askUrl = this.$root.$mp.query.askUrl
        .toString()
        .replace(/\%3F/g, "?")
        .replace(/\%3D/g, "=")
        .replace(/\%26/g, "&");
      wx.setStorageSync('askUrl',askUrl);
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    loginTel() {
      Login();
    }
    
  }
};
</script>
<style lang="scss" scoped>
.pageContent{
  height: 100vh;
  overflow: hidden;
}
.LoginBox{
  width: 472rpx;
  margin:0 auto;
  padding:100rpx 0;
}
.bg_3daf35{
  background: #3daf35;

}
.bg_ef8120{
  background: #ef8120;
}
.ftBtn{
  height: auto;
  padding-top:30rpx;
}
.ftBtn .btn{
  color:#fff;
  border-radius: 16rpx;
  margin-top:30rpx;
  &::before,
  &::after{
    display: none;
  }
}
</style>
