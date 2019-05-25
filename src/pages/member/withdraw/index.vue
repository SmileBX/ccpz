<template>
  <div class="page">
    <div class="weui-cells card__weui-cells">
      <div class="weui-cell" @click="shiftCardList">
        <img :src="bankLogo" class="cardpic" alt>
        <div class="weui-cell__bd">
          <p class="name">{{bankCardName}}</p>
          <p class="cardnnum">尾号{{bankCardNo}}储蓄卡</p>
        </div>
        <span class="icon-arrow arrow-right"></span>
      </div>
    </div>
    <div class="widthdrawBox bg_fff mt10">
      <div class="charge">
        <p class="apoint" style="padding-top:20rpx;">提现金额</p>
        <p class="flex flexAlignBaseline" style="padding-top:10rpx;padding-bottom:20rpx;">
          <span class="fh">￥</span>
          <input v-model="amount" type="number" class="inputPrice flex1">
        </p>
      </div>
      <div class="tips" style="padding:20rpx 0;border-top:1px solid #f2f2f2;">账户余额：{{wallet}}</div>
    </div>
    <div class="ftBtn" style="padding:60rpx 30rpx;">
      <div class="inner">
        <div class="btns">
          <div class="btn bg_ff952e color_fff center" @click="submitWithdraw">预计两小时内到账，确认提现</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { post, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
export default {
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    // console.log("___________");
    // console.log(this.$store.state.myCardInfo);
    // this.bankCardId = this.$store.state.myCardInfo.id;
    // this.bankLogo = this.$store.state.myCardInfo.bankLogo;
    // this.bankCardName = this.$store.state.myCardInfo.bankCardName;
    // this.bankCardNo = this.$store.state.myCardInfo.bankCardNo.substring(
    //   this.$store.state.myCardInfo.bankCardNo.length - 4,
    //   this.$store.state.myCardInfo.bankCardNo.length
    // );
    // this.curPage = getCurrentPageUrlWithArgs();
    // this.userId = wx.getStorageSync("userId");
    // this.token = wx.getStorageSync("token");
    // if (toLogin(this.curPage)) {
    //   if (this.hasDefaultCard) {
    //     this.getBankList();
    //   }
    //   this.GetInstalMasterInfo();
    // }
  },
  data() {
    return {
      wallet: 0,
      curPage: "",
      userId: "",
      token: "",
      hasData: false,
      bankCardId: "",
      bankLogo: "",
      bankCardName: "中国银行",
      bankCardNo: "3790",
      hasDefaultCard: true,
      amount: "" //提现的金额
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "提现选择"
      });
    },
    shiftCardList() {
      this.hasDefaultCard = false;
      this.$store.commit("setSelectMyCard", {
        url: "/pages/master/depositmoney/main",
        status: true
      });
      wx.navigateTo({ url: "/pages/master/cardList/main" });
    },
    valOther() {
      let price = Number(this.amount);
      if (price < 1) {
        wx.showToast({
          title: "最低提现金额为1元!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (price > this.wallet) {
        wx.showToast({
          title: "输入的提现金额大于可提现金额!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (!this.bankCardId) {
        wx.showToast({
          title: "请选择提现的银行卡!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      return true;
    },
    submitWithdraw() {
      //提现
      if (this.valOther()) {
        this.MasterDrawMoneyApply();
      }
    },
    //获取师傅的个人信息
    GetInstalMasterInfo() {
      //师傅的信息
      let that = this;
      post(
        "InstalMaster/GetInstalMasterInfo",
        {
          MasterId: that.userId,
          Token: that.token
        },
        that.curPage
      ).then(result => {
        if (result.code === 0) {
          that.wallet = result.data.Wallet;
        }
      });
    },
    getBankList() {
      //获取银行卡
      let that = this;
      post(
        "Bank/BankList",
        {
          UserId: that.userId,
          Token: that.token,
          page: 1,
          pagesize: 1
        },
        that.curPage
      ).then(result => {
        if (result.code === 0) {
          if (result.data.length > 0) {
            that.bankCardId = result.data[0].Id;
            that.bankLogo = result.data[0].BankLogo;
            that.bankCardName = result.data[0].BankName;
            that.bankCardNo = result.data[0].BankCardNo.substring(
              result.data[0].BankCardNo.length - 4,
              result.data[0].BankCardNo.length
            );
            that.hasData = true;
          }
        }
      });
    },
    MasterDrawMoneyApply() {
      //提现
      let that = this;
      post(
        "InstalMaster/MasterDrawMoneyApply",
        {
          MasterId: that.userId,
          Token: that.token,
          Amount: that.amount,
          BankId: that.bankCardId
        },
        that.curPage
      ).then(result => {
        if (result.code === 0) {
          //提现成功
          wx.showToast({
            title: "提现申请成功！",
            icon: "none",
            duration: 1500,
            success: function() {
              setTimeout(function() {
                wx.redirectTo({
                  url: "/pages/master/sum/main"
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
.cardpic {
  width: 58rpx;
  height: 58rpx;
}
.widthdrawBox{
  padding:0 30rpx;
}
.card__weui-cells{
  .weui-cell{
    line-height: 1.5;
  }
}
.cardnnum{
  font-size: 24rpx;
  color: #999;
}
.charge {
  .apoint {
    padding: 10rpx 0;
    font-size: 30rpx;
  }
  input {
    flex-grow: 1;
    margin-left: 20rpx;
  }
}

.tips {
  color: #999;
}
.fh{
  font-size: 32rpx;
}
.inputPrice {
  margin-left: 0 !important;
  font-size: 50rpx;
}
.btns{
  .btn{
    border-radius: 16rpx;
  }
}
</style>