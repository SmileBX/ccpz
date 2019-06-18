<template>
  <div class="pageContent">
    <div class="weui-cells">
      <div class="weui-cell">
        <span class="label">当前手机</span>
        <div class="weui-cell__bd">
           <input type="text" disabled :value="tel">
        </div>
      </div>
      <div class="weui-cell code__weui-cell">
        <span class="label">验证码</span>
        <div class="weui-cell__bd">
           <input type="number" v-model="code" placeholder="输入验证码">
        </div>
        <span class="btnCode color_ff952e" @tap="getCode">{{codeMsg}}</span>
      </div>
      <div class="weui-cell">
        <span class="label">新密码</span>
        <div class="weui-cell__bd">
           <input type="number" password="true" v-model="pwd" placeholder="输入6位支付密码">
        </div>
      </div>
      <div class="weui-cell">
        <span class="label">确认密码</span>
        <div class="weui-cell__bd">
           <input type="number" password="true" v-model="pwd2" placeholder="再次输入6位支付密码">
        </div>
      </div>
    </div>
    <div style="padding:80rpx 30rpx;">
      <div class="weui-btn btn-active fill" @tap="btnSubmit">确认</div>
    </div>
    
  </div>
</template>
<script>
import {
  post,
  toLogin,
  getCurrentPageUrlWithArgs,
  trim,
  valPhone
} from "@/utils";
export default {
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    if(toLogin(this.curPage)){
      this.GetMemberMobile();
    }
  },
  data() {
    return {
      userId: "",
      token: "",
      curPage: "",
      tel: "",  //获取到的当前的手机号
      pwd: "",
      pwd2: "",
      code: "",
      codeMsg: "获取验证码",
      timer: null,
      count: "",
      TIME_COUNT: 60,
      has_click: false
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "设置支付密码"
      });
    },
    getCode() {
      //点击发送验证码
      if (!this.has_click) {
        this.GetUpdatePswCode();
      }
    },
    valOther() {
      if (trim(this.code) == "") {
        wx.showToast({
          title: "请输入验证码!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (trim(this.pwd) == "" || trim(this.pwd2) == "") {
        wx.showToast({
          title: "请输入支付密码!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (trim(this.pwd) !== "" && trim(this.pwd2) !== "") {
        if (trim(this.pwd).length !== 6 || trim(this.pwd2).length !== 6) {
          wx.showToast({
            title: "请输入6位支付密码!",
            icon: "none",
            duration: 1500
          });
          return false;
        }
        if (trim(this.pwd) !== trim(this.pwd2)) {
          wx.showToast({
            title: "两次输入的支付密码不相等!",
            icon: "none",
            duration: 1500
          });
          return false;
        }
      }
      return true;
    },
    GetMemberMobile() {
      //获取绑定的手机号
      let that = this;
      post(
        "User/GetMemberMobile",
        {
          UserId: that.userId,
          Token: that.token
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          that.tel = res.data.Mobile;
        }
      });
    },
    GetUpdatePswCode() {
      //获取验证码
      let that = this;
      post(
        "User/GetUpdatePswCode",
        {
          UserId: that.userId,
          Token: that.token,
          Type: 1
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
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
    },
    UpdatePayPwd() {
      //设置支付密码
      let that = this;
      post(
        "User/UpdatePayPwd",
        {
          UserId: that.userId,
          Token: that.token,
          SecondPassWord: that.pwd,
          VerifyCode: that.code
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          //设置支付密码成功
          wx.showToast({
            title: "设置支付密码成功!",
            icon: "none",
            duration: 1500,
            success: function() {
              setTimeout(()=>{
                wx.switchTab({
                url: "/pages/my/main"
              });
              },1500)
              
            }
          });
        }
      });
    },
    btnSubmit() {
      //点击确定
      if(this.valOther()){
        this.UpdatePayPwd();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.weui-cells .label {
  width: 200rpx;
}
</style>
