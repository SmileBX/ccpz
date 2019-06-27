<template>
  <div class="pageContent">
    <!-- 功能开通的时候有的 -->
    <div class="buyInfo">
      <!-- 置顶功能 -->
      <div class="info" v-if="type==1">
        <div class="flex priceBox flexAlignCenter">
          <p class="title">置顶功能</p>
          <p class="flex1 priceArea text_r">
            ￥
            <span class="num">{{NeedMoney}}</span>/次
          </p>
        </div>
        <div class="con">您当前正在购买置顶功能，每次置顶24小时。置顶为虚拟产品，购买后不会过期，不支持退款。</div>
      </div>
      <!-- 刷新功能 -->
      <div class="info" v-if="type==2">
        <div class="flex priceBox flexAlignCenter">
          <p class="title">刷新功能</p>
          <p class="flex1 priceArea text_r">
            ￥
            <span class="num">{{NeedMoney}}</span>/次
          </p>
        </div>
        <div class="con">您当前正在购买刷新功能，以前发布的信息通过刷新会显示在前面。刷新为虚拟产品，购买后不会过期，不支持退款。</div>
      </div>
      <!-- <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd">购买数量</div>
          <div class="weui-cell__bd text_r">
            <div class="handleNumber">
              <span class="btn btn-reduce">-</span>
              <span class="num">1</span>
              <span class="btn btn-add">+</span>
            </div>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">优惠券</div>
          <div class="weui-cell__bd text_r">&nbsp;</div>
          <span class="icon-arrow arrow-right"></span>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">发票</div>
          <div class="weui-cell__bd text_r">
            <p class="txt">
              <span class="color_ff952e">电子普通发票</span>（会员服务-个人）
            </p>
          </div>
          <span class="icon-arrow arrow-right"></span>
        </div>
      </div> -->
    </div>
    <!-- 功能开通的时候有的  end -->
    <!-- 购买会员的时候有的 -->
    <div class="buyInfo" v-if="type==3">
      <div class="buyMemberInfo">
        <div class="perInfo level__perInfo flex flexAlignCenter">
          <img src="/static/images/icons/tx.jpg" class="tx" alt>
          <div class="info flex1">
            <p class="name">
              {{mobile}}
            </p>
          </div>
        </div>
        <div class="infoBox weui-cells">
          <div class="weui-cell">
            <div class="weui-cell__hd">服务名称</div>
            <div class="weui-cell__bd text_r">
              <p class="txt">精英会员</p>
            </div>
          </div>
          <div class="weui-cell" @tap="choseCard">
            <div class="weui-cell__hd">选择类型</div>
            <div class="weui-cell__bd text_r">
              <p class="txt">{{cardBrand}}</p>
            </div>
            <span class="icon-arrow arrow-right"></span>
          </div>
          <div class="weui-cell">
            <div class="weui-cell__hd">应付金额</div>
            <div class="weui-cell__bd text_r">
              <p class="txt">
                <span class="price">
                  ￥<span class="num">{{NeedMoney}}</span>
                </span>
              </p>
            </div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell__bd">
              <p class="msg">您当前正在开通精英会员服务，会员服务为虚拟产品，不支持退款。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="weui-cells">
        <div class="weui-cell" v-if="type!=3">
          <div class="weui-cell__hd">购买数量</div>
          <div class="weui-cell__bd text_r">
            <div class="handleNumber">
              <span class="btn btn-reduce" @tap="delNum">-</span>
              <span class="num">{{num}}</span>
              <span class="btn btn-add" @tap="addNum">+</span>
            </div>
          </div>
        </div>
        <div class="weui-cell" @tap="goToPage(0)">
          <div class="weui-cell__hd">优惠券</div>
          <div class="weui-cell__bd text_r"><span v-if="Denomination>0">-</span>{{Denomination}}</div>
          <span class="icon-arrow arrow-right"></span>
        </div>
        <div class="weui-cell" @tap="goToPage(1)">
          <div class="weui-cell__hd">发票</div>
          <div class="weui-cell__bd text_r">
            <p class="txt">
              <span class="color_ff952e">电子普通发票</span>（会员服务-个人）
            </p>
          </div>
          <span class="icon-arrow arrow-right"></span>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">实付金额</div>
          <div class="weui-cell__bd text_r">
            <p class="txt">
              <span class="color_ff952e">￥{{total}}</span>
            </p>
          </div>
        </div>
      </div>
    <!-- 购买会员的时候有的  end -->
    <!-- 支付方式 -->
    <div class="payMethod">
      <div class="section__hd" style="padding-bottom:0;">
        <span class="title">支付方式</span>
      </div>
      <radio-group  @change="radioChange">
        <label class="check__item flex flexAlignCenter" v-for="(item,index) in payList" :key="index">
          <img src="/static/images/icons/pay_weixin.jpg" class="icon-pay" alt v-if="item.Id==1">
          <img src="/static/images/icons/pay_yue.jpg" class="icon-pay" alt  v-if="item.Id==2">
          <p class="title flex1">{{item.Name}}</p>
          <radio color="#fff" :value="item.Id" :checked="item.Id==aa"/>
        </label>
      </radio-group>
    </div>
    <!-- 底部的定位按钮 -->
    <div class="ftBtn" style="heigth:100rpx;" @tap="payMoney">
      <div class="inner fixed bm0">
        <div class="btns">
          <div class="btn center bg_ff952e color_fff">立即支付</div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="isShowMask" catchtouchmove="true" @click="cancle"></div>
    <div class="maskType boxSize" v-if="isShowMask">
        <div class="flex">
              <span class="size" @click="isShowMask=false">取消</span>
              <span class="title">{{masktitle}}</span>
              <span class="color size" @click="subConfirm">确定</span>
        </div>
        <scroll-view :scroll-y="true" style="height:480rpx;" class="showItem" @scrolltolower="loadMore">
          <div v-for="(item,index) in list" :key="index">
              <p :class="{'itemactive':statu == index}" @click="chose(index)" style="margin-top:3rpx;">{{item.Name}}
              </p>
          </div>
        </scroll-view>
    </div>
    <payPassword :showStatus.sync="showPayPawStatus" @success="submit"></payPassword>
  </div>
</template>
<script>
import { post, valPhone, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
import payPassword from '@/components/payPassword.vue'
export default {
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.mobile = wx.getStorageSync("mobile");
    this.type = this.$root.$mp.query.type
    this.cardBrand = "请选择"
    this.num = 1
    this.statu = 1
    this.aa = 1
    if(this.$root.$mp.query.Denomination){
      this.CouponId = this.$root.$mp.query.CouponId
      this.Denomination = this.$root.$mp.query.Denomination
      console.log( this.Denomination,this.CouponId," this.Denomination")
    }
    if(this.$root.$mp.query.InvoiceId){
        this.InvoiceId = this.$root.$mp.query.InvoiceId
    }
    if(this.$root.$mp.query.price){
        this.NeedMoney = this.$root.$mp.query.price
    }
    console.log(this.type,this.NeedMoney,"{{{{{{{{{{{")
  },
  components:{
    payPassword
  },
  data() {
    return {
      type:0,//置顶-1 刷新-2 开通会员-3
      num:1,//购买次数
      userId:"",
      token:"",
      curPage:"",
      cHeight: "",
      mobile:"",
      isShowMask:false,
      list:[],
      statu:0,
      masktitle:"",
      cardBrand:"请选择",//卡的种类
      Id:0,//商品Id
      Password:"",//支付密码
      NeedMoney:0,//应付金额
      InvoiceId:0,//发票Id
      CouponId:0,  //优惠券ID
      Denomination:"",//优惠券面额
      payList:[
        {Id:1,Name:"微信"},{Id:2,Name:"余额"}
      ],
      aa:1,
      showPayPawStatus:false
    
    };
  },
  computed:{
    total(){
      if(this.type==3){
        return this.NeedMoney -this.Denomination*1
      }else{
        return (this.NeedMoney * this.num) -this.Denomination*1
      }
      
    }
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "结算台"
      });
    },
    choseCard(){
      this.isShowMask = true
      this.masktitle="请选择种类"
      this.getCardBrand()
    },
    //获取卡的种类
    getCardBrand(){
      post('User/VipGoodsList',{}).then(res=>{
        console.log("res:",res)
        this.list = res.data
      })
    },
    chose(i){
      console.log(i)
      this.statu = i
    },
    subConfirm(){
      this.cardBrand = this.list[this.statu].Name
      this.NeedMoney = this.list[this.statu].NeedMoney
      this.Id = this.list[this.statu].Id
      this.isShowMask = false
    },
    //去选择优惠券 开发票
    goToPage(index){
      if(index==0){
        wx.navigateTo({
          url:"/pages/mine2/myCoupon/main?money="+this.NeedMoney+"&url=member2/buyFunction"
        })
      }else if(index==1){
        wx.navigateTo({
          url:"/pages/member2/invoiceList/main?invoiceType=1&url=member2/buyFunction"
        })
      }
    },
    radioChange(e){
      this.aa = e.mp.detail.value
    },
    delNum(){
      if(this.num==1){
        this.toastTip('不能小于1！')
      }else{
        this.num--
      }
    },
    addNum(){
      this.num++
    },
    //提示语
    toastTip(tip){
       wx.showToast({
          title: tip,
          icon: "none",
          duration: 1500
        }); 
        return false
    },
    //支付
    payMoney(){
      if(this.type==3 && this.Id==0){
          this.toastTip("请选择卡类型!")
          return false
      }else{
        this.toPayMoney()
      }
      
    },
    toPayMoney(){
      console.log("9999")
      if(this.aa==1){ //1微信支付  2-余额支付
        this.getWxPay()
        console.log("8888")
      }else{
        this.showPayPawStatus = true
      }
    },
    getWxPay(){
      console.log("___________")
      post('User/WechatApplet_Pay_Vip',{
          UserId:this.userId,
          Token:this.token,
          Id:this.Id,
          InvoiceId:this.InvoiceId,
          CouponId:this.CouponId
      },this.curPage).then(res=>{
        console.log(res)
        if(res.code==0){
            const JsParam = JSON.parse(res.data.JsParam)
            this.wxPayMoney(JsParam)
        }
      })
    },
    wxPayMoney(JsParam){
      wx.requestPayment({
        timeStamp:JsParam.timeStamp,
        nonceStr:JsParam.nonceStr,
        package:JsParam.package,
        signType: 'MD5',
        paySign:JsParam.paySign,
        success: (res)=>{ 
          wx.navigateTo({url:"/pages/member2/memberManage/main"})
        }
      })
    },
    async submit(password){
     const res=await  post('/User/VipGoodsPay',{
          UserId:this.userId,
          Token:this.token,
          Id:this.Id,
          Password:password,
          InvoiceId:this.InvoiceId,
          CouponId:this.CouponId

        },this.curPage)
        if(res.code==0){
          wx.showToast({
            title:"开通成功",
            icon:"success",
            duration:1500
          })
          this.showPayPawStatus = false
          setTimeout(res=>{
            wx.navigateTo({url:"/pages/member2/memberManage/main"})
          },1500)
        }
    }
  }
};
</script>
<style lang="scss" scoped>
.weui-cell {
  .txt {
    color: #999;
  }
}
.buyInfo {
  background: #fff;
  margin-top: 1px;
  .info {
    padding: 30rpx;
    padding-bottom: 0;
    .con {
      padding: 30rpx;
      border: 1px solid #f2f2f2;
      border-top: none;
      border-radius: 0 0 16rpx 16rpx;
      color: #999;
    }
  }
  .priceBox {
    padding: 30rpx;
    background: #ff952e;
    color: #fff;
    border-radius: 16rpx 16rpx 0 0;
    font-size: 24rpx;
    .num {
      font-size: 40rpx;
    }
  }
  .title {
    font-size: 32rpx;
  }
}
.section__hd .title {
  font-weight: normal;
}
.maskType {
    background: #fff;
    width: 100%;
    height: 600rpx;
    padding: 30rpx 0;
    bottom: 0!important;
    position: fixed;
    z-index: 999;
    p {
        padding: 15rpx 30rpx;
        text-align:center;
    }
    .flex {
        justify-content: space-between;
        border-bottom: 1rpx solid #f2f2f2;
        padding: 20rpx;
        font-weight: 400;
        font-size: 30rpx;
        .color {
            color: #ff2925
        }
        .size {
            font-size: 26rpx;
        }
        .title {
            font-weight: bold;
        }
    }
    .itemactive {
        background: #ff2925;
        color: #fff
    }
}
</style>
