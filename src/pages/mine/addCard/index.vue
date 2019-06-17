<template>
  <div class="pageContent">
    <div class="addCardFrom" style="border-top:20rpx solid #f2f2f2">
      <!-- <div class="section__hd">
        <span class="title">银行卡号</span>
      </div> -->
      <!-- <div class="weui-cells eadit__weui-cells mt0">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input type="text" placeholder="仅支持绑定本人银行卡" v-model="cardNum">
          </div>
          <img src="/static/images/icons/cancle.png" class="icon-del" alt="">
        </div>
      </div> -->
      <div class="addCard__form bg_fff">
        <div class="select__weui-cells">
          <div class="ipt flex flexAlignCenter">
            <div class="flex1">
              <input type="text" placeholder="请输入持卡人姓名" v-model="bankCardName" class="weui-input">
            </div>
          </div>
        </div>
        <div class="select__weui-cells">
          <div class="ipt flex flexAlignCenter">
            <div class="flex1">
              <input type="text" placeholder="请输入卡号" v-model="bankCardNo" class="weui-input">
            </div>
          </div>
        </div>
        <div class="select__weui-cells">
          <div class="ipt flex flexAlignCenter" @click="selectCardName">
            <div class="flex1">
              <input
                type="text"
                placeholder="选择银行名称"
                disabled="true"
                :value="BankName"
                class="weui-input"
              >
            </div>
            <span class="icon-arrow arrow-right"></span>
          </div>
        </div>
        <div class="select__weui-cells">
          <div class="ipt flex flexAlignCenter">
            <div class="flex1">
              <input type="text" placeholder="请输入开户行名称" v-model="bankAddress" class="weui-input">
            </div>
          </div>
        </div>
        <div class="select__weui-cells">
          <div class="ipt flex flexAlignCenter">
            <div class="flex1">
              <input type="text" placeholder="请输入手机号" v-model="mobile" class="weui-input">
            </div>
          </div>
        </div>
        <div class="select__weui-cells">
          <div class="ipt flex flexAlignCenter" style="overflow:hidden;">
            <div class="flex1">
              <input type="text" placeholder="请输入手机验证码" v-model="Code" class="weui-input">
            </div>
            <span class="btnCode" @click="getCode">{{codeMsg}}</span>
          </div>
        </div>
      </div>
      <div class="ftBtn center" style="padding:30rpx;margin-top:60rpx;" @click="bindCard">
        <div class="inner">
          <div class="btns">
            <div class="btn bg_ff952e color_fff" style="border-radius:16rpx;">确定</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { post, valPhone, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
export default {
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    this.bankId = this.$store.state.cardInfo.id;
    this.BankName = this.$store.state.cardInfo.bankName;
    this.curPage = getCurrentPageUrlWithArgs();
    this.mobile = wx.getStorageSync("mobile");
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    console.log(this.mobile);
    console.log(this.$store.state.cardInfo)
    // if (this.mobile) {
    //   this.tel =
    //     this.mobile.substring(0, 3) +
    //     "****" +
    //     this.mobile.substring(this.mobile.length - 4);
    // }
  },
  data() {
    return {
      cardNum:'',
      curPage: "",
      userId: "",
      token: "",
      bankCardName: "", //持卡人人名字
      bankCardNo: "", //银行卡号
      bankAddress: "", //开户地址
      bankId: "", //选择的银行Id
      BankName: "",
      mobile: "",
      tel: "",
      Code: "",
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
        title: "添加银行卡"
      });
    },
    initData(){
      this.curPage ="";
      this.userId = "";
      this.token = "";
      this.bankCardName = ""; //持卡人人名字
      this.bankCardNo = ""; //银行卡号
      this.bankAddress = ""; //开户地址
      this.bankId = ""; //选择的银行Id
      this.BankName = "";
      this.mobile = "";
      this.tel = "";
      this.Code = "";
      this.codeMsg = "获取验证码";
      this.timer = null;
      this.count = "";
      this.TIME_COUNT = 60;
      this.has_click = false;
    },
    selectCardName() {
      //选择银行卡
      this.$store.commit("setSelectCard", {
        url: "/pages/mine/addCard/main",
        status: true
      });
      wx.navigateTo({ url: "/pages/mine/chooseBank/main" });
    },
    gotoPage(){
      if(this.valCardNum()){
        wx.navigateTo({
          url:"/pages/mine/addCard2/main?cardNum="+this.cardNum
        })
      }
    },
    valOther() {
      if (this.bankCardName == "") {
        wx.showToast({
          title: "请输入持卡人姓名!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if(this.mobile == ""){
        wx.showToast({
          title: "请输入手机号码!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if(this.Code == ""){
        wx.showToast({
          title: "请输入手机验证码!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (this.bankCardNo == "") {
        wx.showToast({
          title: "请输入银行卡号!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (
        !/^([1-9]{1})(\d{15}|\d{16}|\d{17}|\d{18}|\d{19}|\d{20})$/.test(
          this.bankCardNo
        )
      ) {
        wx.showToast({
          title: "请输入正确的卡号格式!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      return true;
    },
    bindCard() {
      if (this.valOther() && toLogin(this.curPage)) {
        this.addBank();
      }
    },
    getCode() {
      if (valPhone(this.mobile)) {
        if (!this.has_click) {
          this.getWxBindTelCode();
        }
      }
    },
    //获取验证码
    async getWxBindTelCode() {
      let that = this;
      post("Bank/BindingBankCards", {
        Mobile: that.mobile,
        UserId: that.userId,
        Token: that.token,
      }).then(result => {
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
              that.has_click = false;
              clearInterval(that.timer);
              that.timer = null;
              that.codeMsg = "获取验证码";
            }
          }, 1000);
        }
      });
    },
    addBank() {
      let that = this;
      post(
        "Bank/AddBank",
        {
          UserId: that.userId,
          Token: that.token,
          Mobile: that.mobile,
          VerifyCode: that.Code,
          BankCardName: that.bankCardName,
          BankCardNo: that.bankCardNo,
          BankAddress: that.bankAddress,
          BankName: that.BankName,
         
        },
        that.curPage
      ).then(result => {
        if (result.code === 0) {
          wx.showToast({
            title: "新增成功!",
            icon: "none",
            duration: 1500,
            success: function() {
              setTimeout(function() {
                that.initData();
                wx.redirectTo({
                  url: "/pages/member2/cardList/main"
                });
              }, 1500);
            }
          });
        }
      });
    }
    
    
  }
};
</script>
<style lang='scss' scoped>
.icon-del,
.icon-help{
  width: 36rpx;
  height: 36rpx;
}
.section__hd{
  .title{
    font-size: 32rpx;
    font-weight:normal;
  }
}
.addCardFrom{
  height: 100vh;
  background:#fff;
}
.eadit__weui-cells{
  .weui-cell:last-child:before{
    display: block;
  }
}
.addCard__form {
    padding: 30rpx 0;
}

.ipt {
    position: relative;
}

.btnCode {
    position: absolute;
    width: 180rpx;
    text-align: center;
    top: 0;
    right: 0;
    height: 77rpx;
    line-height: 77rpx;
    background: #f4f7fc;
    z-index: 3;
}

</style>