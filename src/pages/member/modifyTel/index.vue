<template>
  <div class="pageContent">
    <div class="weui-cells">
      <div class="weui-cell">
        <span class="label">当前手机</span>
        <div class="weui-cell__bd">
          <input type="text" disabled :value="tel">
        </div>
      </div>
      <div class="weui-cell">
        <span class="label">新手机号</span>
        <div class="weui-cell__bd">
          <input type="text" v-model="mobile" placeholder="输入新手机号">
        </div>
      </div>
      <div class="weui-cell code__weui-cell">
        <span class="label">验证码</span>
        <div class="weui-cell__bd">
          <input type="number" v-model="code" placeholder="输入验证码">
        </div>
        <span class="btnCode color_ff952e" @click="getCode">{{codeMsg}}</span>
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
    if (toLogin(this.curPage)) {
      this.GetMemberMobile();
    }
  },
  data() {
    return {
      userId: "",
      token: "",
      curPage: "",
      tel: "", //数据返回的原来的手机号
      mobile: "", //自己填写的手机号
      code: "", //验证码
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
        title: "修改手机号"
      });
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
    getCode() {
      //点击发送验证码
      if (valPhone(trim(this.mobile))) {
        if (!this.has_click) {
          this.GetBindTelCode();
        }
      }
    },
    GetBindTelCode() {
      let that = this;
      post(
        "User/GetBindTelCode",
        {
          UserId: that.userId,
          Token: that.token,
          Mobile: that.mobile,
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
    UpdateMobile() {
      let that = this;
      //修改手机号
      post(
        "User/UpdateMobile",
        {
          UserId: that.userId,
          Token: that.token,
          Mobile: that.mobile,
          VerifyCode: that.code,
          Type: 1
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          wx.showToast({
            title: "修改手机号成功!",
            icon: "none",
            duration: 1500,
            success:function(){
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
      //点击确定按钮
      if(valPhone(trim(this.mobile)) && trim(this.code) !==""){
        this.UpdateMobile();
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
