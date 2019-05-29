<template>
  <div class="pageContent bg_fff">
    <div class="LoginBox">
      <img src="/static/images/icons/logo.jpg" class="logo" alt>
      <div class="from">
        <div class="line flex">
          <input type="text" class="weui-input flex1" v-model="Tel" placeholder="请输入手机号码">
          <span class="btnCode" @click="getCode">{{codeMsg}}</span>
        </div>
        <div class="line flex">
          <input type="text" v-model="Code" class="weui-input flex1" placeholder="动态码">
        </div>
        <div class="line flex">
          <input type="password" v-model="Pwd" class="weui-input flex1" placeholder="请输入至少6位密码">
        </div>
        <div class="line flex">
          <input type="password" v-model="Pwd2" class="weui-input flex1" placeholder="请再次输入密码">
        </div>
      </div>
      <div class="ftBtn center" style="padding-top:60rpx;">
        <div class="inner">
          <div class="btns">
            <div class="btn bg_ef8120 color_fff" @click="register">登录</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { host, post, get, valPhone } from "@/utils";
export default {
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    this.openId = wx.getStorageSync("openId");
    this.unionid = wx.getStorageSync("unionid");
    this.userInfo = wx.getStorageSync("userInfo");
  },
  data() {
    return {
      codeMsg: "获取验证码",
      timer: null,
      count: "",
      TIME_COUNT: 60,
      has_click: false,
      Tel: "",
      Pwd: "",
      Pwd2: "",
      Code: "",
      openId: "",
      unionid: "",
      userInfo: {}
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "绑定手机号"
      });
    },
    regResetPwdValOther() {
      if (this.Code == "") {
        wx.showToast({
          title: "验证码不能为空!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (this.Pwd == "" || this.Pwd2 == "") {
        wx.showToast({
          title: "密码不能为空!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (this.Pwd != this.Pwd2) {
        wx.showToast({
          title: "两次输入密码不同!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (this.Pwd.length < 6) {
        wx.showToast({
          title: "密码长度不能小于6个字符!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      return true;
    },
    getCode() {
      if (valPhone(this.Tel)) {
        if (!this.has_click) {
          this.getWxBindTelCode();
        }
      }
    },
    register() {
      let that = this;
      if (valPhone(that.Tel) && this.regResetPwdValOther()) {
        wx.request({
          url: host + "Login/BindOrRegister", //仅为示例，并非真实的接口地址
          method: "POST",
          data: {
            openId: that.openId,
            unionid: that.unionid,
            mobile: that.Tel,
            password: that.Pwd,
            yzcode: that.Code,
            userInfo: that.userInfo
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          success: function(res) {
            wx.hideLoading();
            if (res.data.meta.code === 0) {
              wx.setStorageSync("openId", "");
              wx.setStorageSync("unionid", ""); 
              wx.setStorageSync("userId", res.data.meta.dic.UserId);
              wx.setStorageSync("token", res.data.meta.dic.Token);
              wx.showToast({
                title: "登录成功！",
                icon: "success",
                duration: 1500
              });
              setTimeout(() => {
                wx.switchTab({
                  url: "/pages/my/main"
                });
              }, 1500);
            } else {
              wx.showToast({
                title: res.data.meta.msg + "!",
                icon: "none",
                duration: 1500
              });
            }
          },
          fail: function(error) {
            wx.hideLoading();
            wx.showToast({
              title: error + "，请刷新页面重试!",
              icon: "none",
              duration: 1500
            });
          },
          complete: function() {
            wx.hideLoading();
          }
        });
      }
    },
    //获取验证码
    async getWxBindTelCode() {
      let that = this;
      get("Login/GetMiniAppBindTelCode?mobile=" + that.Tel).then(result => {
        if (result.code === 0) {
          that.has_click = true;
          const TIME_COUNT = 90; // 90s后重新获取验证码
          that.count = TIME_COUNT;
          wx.showToast({
            title: "发送成功，请注意查收!",
            icon: "none",
            duration: 1500
          });
          that.timer = setInterval(() => {
            if (that.count > 0 && that.count <= TIME_COUNT) {
              that.count--;
              that.codeMsg = that.count + "s后重新获取";
            } else {
              clearInterval(that.timer);
              that.has_click = false;
              that.timer = null;
              that.codeMsg = "获取验证码";
            }
          }, 1000);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.pageContent {
  height: 100vh;
  overflow: hidden;
}
.logo {
  width: 466rpx;
  height: 100rpx;
  display: block;
  margin: 0 auto;
  margin-bottom: 80rpx;
}
.LoginBox {
  border-top: 1px solid #f2f2f2;
  padding: 180rpx 70rpx 70rpx;
}
.from .line {
  border-bottom: 1px solid #f2f2f2;
  padding-top: 12rpx;
  padding-bottom: 12rpx;
  margin-top: 50rpx;
}
.bg_ef8120 {
  background: #ef8120;
}
.btnCode {
  color: #666;
}
</style>
