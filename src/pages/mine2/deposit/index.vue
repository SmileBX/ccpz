<template>
  <div class="pageContent">
    <div class="widthdrawBox bg_fff"  @click="setfocus">
      <div class="charge">
        <p class="apoint" style="padding-top:20rpx;">充值金额</p>
        <p class="flex flexAlignBaseline" style="padding-top:10rpx;padding-bottom:20rpx;">
          <span class="fh">￥</span>
          <input v-model="amount" type="digit" :focus="focus" class="inputPrice flex1">
        </p>
      </div>
    </div>
    <div class="tips" style="padding:20rpx 30rpx;">账户余额：{{Wallet}}</div>
    <div class="ftBtn" style="padding:60rpx 30rpx;" @click="showPay=true">
      <div class="inner">
        <div class="btns">
          <div class="btn bg_ff952e color_fff center">下一步</div>
        </div>
      </div>
    </div>
    <!-- 选择付款、提现弹窗 -->
    <!-- <div class="shade bottom__shade" v-if="showPayWay">
      <div class="mask"></div>
      <div class="shadeContent" style="min-height:700rpx;">
        <div class="shade__hd">
          <span class="icon-back">
            <img src="/static/images/icons/close.jpg" alt>
          </span>
          <p class="title">选择到账银行卡</p>
        </div>
        <div class="shade__bd">
          <div class="content weui-cells selectCard__weui-cells">
            <radio-group>
              <label class="weui-cell">
                <img src="/static/images/icons/wx.jpg" class="icon-card" alt>
                <div class="weui-cell__bd">
                  <p class="txt">微信支付</p>
                </div>
                <radio color="#fff" checked="true"/>
              </label>
              <label class="weui-cell" v-for="(item,index) in cardlist" :key="index">
                <img :src="item.BankLogo" class="icon-card" alt>
                <div class="weui-cell__bd">
                  <p class="txt">{{item.BankName}}({{item.BankCardNo}})</p>
                </div>
                <radio color="#fff"/>
              </label>
            </radio-group>
            <div class="weui-cell" @click="gotoPage">
              <img src="/static/images/icons/add4.jpg" class="icon-card" alt>
              <div class="weui-cell__bd">
                <p class="txt">添加新卡提现</p>
              </div>
              <span class="icon-arrow arrow-right"></span>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- 确认支付弹窗 -->
    <div class="shade bottom__shade" v-if="showPay">
      <div class="mask"></div>
      <div class="shadeContent" style="min-height:700rpx;">
        <div class="shade__hd">
          <span class="icon-back" @click="showPay=false">
            <img src="/static/images/icons/close.jpg" alt>
          </span>
          <p class="title">确认付款</p>
        </div>
        <div class="shade__bd">
          <div class="payInfo">
              <p class="priceArea center">￥<span class="num">{{amount}}</span></p>
          </div>
          <div class="weui-cells mt0">
            <div class="weui-cell">
              <label class="label" style="color:#999;">订单信息</label>
              <div class="weui-cell__bd text_r">
                <p class="txt">充值</p>
              </div>
            </div>
            <div class="weui-cell" @click="getPayWay">
              <label class="label" style="color:#999;">付款方式</label>
              <div class="weui-cell__bd text_r">
                <p class="txt">微信支付</p>
              </div>
              <!-- <span class="icon-arrow arrow-right"></span> -->
            </div>
          </div>
          <div class="ftBtn" style="padding:60rpx 30rpx 0;margin-top:50rpx;" @click="payCharge">
            <div class="inner">
              <div class="btns">
                <div class="btn  bg_ff952e color_fff center">立即付款</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { post,getCurrentPageUrlWithArgs} from "@/utils";
export default {
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    this.amount = ' '
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.Wallet = this.$store.state.Wallet
    // this.getCharge()
  },
  data() {
    return {
      amount: "",
      focus:true,
      Wallet:0,
      showPay:false,
      // showPayWay:false,
      cardlist:[]
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "充值"
      });
    },
    setfocus(){
      this.focus=true;
      console.log(this.focus)
    },
    // getCharge(){
    //   post('/User/GetMemberWallet',{
    //     UserId:this.userId,
    //     Token:this.token
    //   },this.curPage).then(res=>{
    //     if(res.code==0){
    //         this.Wallet = res.data.Wallet
    //     }
    //   })
    // },
    getCardList(){
      post('Bank/BankList',{
          UserId:this.userId,
          Token:this.token
      },this.curPage).then(res=>{
          console.log("res:",res)
          this.cardlist = res.data
      })
    },
    payCharge(){
      if(this.amount>0){
        post('Recharge/WechatApplet_AddRecharge',{
            UserId:this.userId,
            Token:this.token,
            RechargeAmount:this.amount
        },this.curPage).then(res=>{
          console.log("Res",res)
          if(res.code==0){
              const JsParam = JSON.parse(res.data.JsParam)
              this.payMoney(JsParam)
          }
        })
      }else{
        wx.showToast({
          title:"充值金额不能小于0",
          icon:"none",
          duration:1500
        })
      }
    },
    payMoney(JsParam){
      wx.requestPayment({
        timeStamp:JsParam.timeStamp,
        nonceStr:JsParam.nonceStr,
        package:JsParam.package,
        signType: 'MD5',
        paySign:JsParam.paySign,
        success: (res)=>{ 
          this.showPay = false
          this.getCharge()
        }
      })
    }
    // getPayWay(){
    //   this.showPayWay = true
    //   this.showPay = false
    //   this.getCardList()
    // },
    // gotoPage(){
    //    wx.navigateTo({
    //       url:"/pages/mine/addCard/main"
    //     })
    // }


  },
  
};
</script>
<style lang='scss' scoped>
.widthdrawBox {
  padding: 0 30rpx 40rpx;
  margin-top: 1px;
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
.fh {
  font-size: 32rpx;
}
.inputPrice {
  margin-left: 0 !important;
  font-size: 50rpx;
}
.btns {
  .btn {
    border-radius: 16rpx;
  }
}
.shade{
  .weui-cells{
    .weui-cell:last-child::before{
      display: block;
    }
  }
}
.selectCard__weui-cells {
  .weui-cell {
    padding: 24rpx 30rpx;
  }
}
.payInfo{
  padding: 50rpx 30rpx 20rpx;
}
.priceArea{
  font-size: 32rpx;
  .num{
    font-size: 54rpx;
  }
}
</style>