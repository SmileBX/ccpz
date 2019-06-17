<template>
  <div class="pageContent">
    <div class="memberTop center">
      <p class="num">{{Wallet}}</p>
      <p class="title">余额</p>
    </div>
    <ul class="tabList li_50 flex center">
      <li @click="gotoPage(0)">
        <div class="item">充值</div>
      </li>
      <li @click="gotoPage(1)"> 
        <div class="item">提现</div>
      </li>
    </ul>
    <div class="weui-cells icon__weui-cells">
      <div class="weui-cell" @click="gotoPage(2)">
        <img src="/static/images/icons/mingxi.jpg" class="icon-menu" alt="">
        <div class="weui-cell__bd">
          <p class="txt">明细</p>
        </div>
        <span class="icon-arrow arrow-right"></span>
      </div>
      <div class="weui-cell" @click="gotoPage(3)">
        <img src="/static/images/icons/yinhangkaguanli.jpg" class="icon-menu" alt="">
        <div class="weui-cell__bd">
          <p class="txt">银行卡管理</p>
        </div>
        <span class="icon-arrow arrow-right"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { post,getCurrentPageUrlWithArgs} from "@/utils";
export default {
  onLoad() {
    
  },
  onShow() {
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.setBarTitle();
    this.getCharge()
  },
  data() {
    return {
      curPage: "",
      userId: "",    
      token: "",
      Wallet:0,
      menuArr:["/pages/mine2/deposit/main","/pages/mine2/withdraw/main","/pages/mine2/moneyList/main","/pages/member2/cardList/main"],
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "我的账户"
      });
    },
    gotoPage(index){
      wx.navigateTo({
        url:this.menuArr[index]
      })
     
    },
    getCharge(){
      post('/User/GetMemberWallet',{
        UserId:this.userId,
        Token:this.token
      },this.curPage).then(res=>{
        if(res.code==0){
            this.Wallet = res.data.Wallet
            this.$store.commit("update", { Wallet:this.Wallet });
        }
      })
    },
  }
};
</script>
<style lang='scss' scoped>
.tabList{
  background: #fff;
  li{
    padding:30rpx 20rpx;
    font-size: 30rpx;
    .item{
      line-height: 1.4;
      border-left:1px solid #e5e5e5;
      
    }
    &:first-child .item{
        border-left:none;
      }
  }
}
.memberTop {
  padding: 60rpx 0;
  .num {
    font-size: 72rpx;
    line-height: 1.3;
  }
  .title {
    font-size: 32rpx;
  }
}
.icon__weui-cells{
  .weui-cell::before{
    left:0;
    right:0;
  }
}

</style>