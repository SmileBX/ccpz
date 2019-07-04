<template>
  <div class="pageContent">
    <!-- 功能开通的时候有的 -->
    <div class="buyInfo">
      <!-- 置顶功能 -->
      <div class="info" v-if="type==1" style="padding-bottom:20rpx">
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
      <div class="info" v-if="type==2" style="padding-bottom:20rpx">
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
          <img :src="avatar" class="tx" alt>
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
        <!-- <div class="weui-cell" v-if="type!=3">
          <div class="weui-cell__hd">购买数量</div>
          <div class="weui-cell__bd text_r">
            <div class="handleNumber">
              <span class="btn btn-reduce" @tap="delNum">-</span>
              <span class="num">{{num}}</span>
              <span class="btn btn-add" @tap="addNum">+</span>
            </div>
          </div>
        </div> -->
        <div class="weui-cell" @tap="goToPage(0)">
          <div class="weui-cell__hd">优惠券</div>
          <div class="weui-cell__bd text_r"><span v-if="Denomination>0">-</span>{{Denomination}}</div>
          <span class="icon-arrow arrow-right"></span>
        </div>
        <div class="weui-cell" @tap="goToPage(1)">
          <div class="weui-cell__hd">发票</div>
          <div class="weui-cell__bd text_r">
            <p class="txt color_ff952e" v-if="InvoiceHeaderName.length>0">
              {{InvoiceHeaderName}}
            </p>
            <p class="txt" v-else>
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
      avatar:"",
      isShowMask:false,
      list:[],
      statu:0,
      masktitle:"",
      cardBrand:"请选择",//卡的种类
      Id:0,//商品Id
      Password:"",//支付密码
      NeedMoney:0,//应付金额
      InvoiceId:0,//发票Id
      InvoiceHeaderName:"",//发票抬头
      CouponId:0,  //优惠券ID
      Denomination:"",//优惠券面额
      publishId:0,//发布Id
      payList:[
        {Id:1,Name:"微信"},{Id:2,Name:"余额"}
      ],
      aa:1,
      showPayPawStatus:false
    
    };
  },
  computed:{
    total(){
      return this.NeedMoney -this.Denomination*1
    }
  },
  onLoad() {
    this.setBarTitle();
    this.initData()

  },
  onShow() {
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.getMemberInfo()
    this.type = this.$root.$mp.query.type
    console.log(this.type,"type")
    // this.type = 1
    this.num = 1
    this.statu = 0
    this.aa = 1
    this.cardName = "",//当年的会员卡名称
    this.CouponId = this.$store.state.CouponInfo.CouponId
    this.Denomination = this.$store.state.CouponInfo.Denomination
    this.InvoiceId = this.$store.state.InvoiceInfo.InvoiceId
    this.InvoiceHeaderName = this.$store.state.InvoiceInfo.InvoiceHeaderName
    console.log( this.InvoiceHeaderName,this.CouponId," this.InvoiceHeaderName")
    
    if(this.$root.$mp.query.publishId){ //发布的Id
        this.publishId = this.$root.$mp.query.publishId
    }
    if(this.type == 1 || this.type == 2){
       this.getPrice() //获取置顶、刷新的单价
    }
    if(this.type == 3){
      this.QueryVipInfo()
    }
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "结算台"
      });
    },
    initData(){
      this.Password = ''
      this.cardBrand = '请选择'
      this.NeedMoney = 0
      this.Id = 0
      this.$store.commit("setSelectCoupon",{
        CouponId:0,
        Denomination:''
      })
      this.$store.commit("setSelectInvoice",{
        InvoiceId:0,
        InvoiceHeaderName:''

      })
    },
    QueryVipInfo(){
      post('/User/QueryVipInfo',{
          UserId: this.userId,
          Token: this.token
      },this.curPage).then(res=>{
        console.log("res:",res)
        if(res.code==0){
          if(res.data.IsVip !==0){
              this.cardName = res.data.gr.GradeName//精英会员3
          }
        }
      })
    },
    getMemberInfo(){
      post('User/GetMemberInfo',{
        UserId: this.userId,
        Token: this.token,
      },this.curPage).then(res=>{
        if(res.code==0){
          this.mobile = res.data.Name
          this.avatar = res.data.Avatar
        }
      })
    },
    choseCard(){
      this.isShowMask = true
      this.masktitle="请选择种类"
      this.getCardBrand()
    },
    getPrice(){
      let objUrl = ''
        if(this.type==1){
         objUrl = 'User/ReadTopSetting'
        }
        if(this.type==2){
           objUrl = 'User/ReadRefreshSetting'
        }
        post(objUrl,{
          UserId: this.userId,
          Token: this.token
        },this.curPage).then(res=>{
          if(res.code==0){
              this.NeedMoney = res.data.Price
            }

        })
    },
    //获取卡的种类
    getCardBrand(){
      post('User/VipGoodsList',{}).then(res=>{
        console.log("res:",res)
        this.list = res.data
      })
    },
    chose(i){
      // console.log(i)
      this.statu = i
    },
    subConfirm(){
      let _GradeName=this.list[this.statu].GradeName
      console.log(_GradeName.slice(-1))
      if(_GradeName.slice(-1)<this.cardName.slice(-1)){
        wx.showToast({
          title:'不能选择低于当前等级的会员卡哦！',
          icon:"none",
          duration:1500
        })
      }else{
        this.cardBrand = this.list[this.statu].Name
        this.NeedMoney = this.list[this.statu].NeedMoney
        this.Id = this.list[this.statu].Id
        this.isShowMask = false
      }
      
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
    //置顶-1 刷新-2 开通会员-3
    payMoney(){console.log("*********",this.type)
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
      console.log("___________",this.type)
      let objUrl = ''
      let pramas = {}
      if(this.type==3){
        objUrl = 'User/WechatApplet_Pay_Vip'
        pramas = {
          UserId:this.userId,
          Token:this.token,
          Id:this.Id,
          InvoiceId:this.InvoiceId,
          CouponId:this.CouponId
        }
      }
      if(this.type==2 || this.type == 1){
        if(this.type==1){
          objUrl = 'User/WechatApplet_PayTop'
        }else{
          objUrl = 'User/WechatApplet_PayRefresh'
        }
        pramas = {
          UserId:this.userId,
          Token:this.token,
          Id:this.publishId,
          InvoiceId:this.InvoiceId,
          CouponId:this.CouponId
        }
      }
console.log("___________",objUrl)
      post(objUrl, pramas,this.curPage).then(res=>{
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
          this.initData()
          if(this.type===3){
           wx.navigateTo({url:"/pages/member2/memberManage/main"})
          }else{
            wx.navigateBack()
          }
        }
      })
    },
    async submit(password){
      let objUrl = ''
      let pramas = {}
      if(this.type==3){
        objUrl = '/User/VipGoodsPay'
        pramas = {
            UserId:this.userId,
            Token:this.token,
            Id:this.Id,
            Password:password,
            InvoiceId:this.InvoiceId,
            CouponId:this.CouponId
        }
      }
      if(this.type==2 || this.type == 1){
        if(this.type==1){
          objUrl = 'User/Pay_TopPublish'
        }else{
          objUrl = 'User/Pay_RefreshPublish'
        }
        pramas = {
          UserId:this.userId,
          Token:this.token,
          Id:this.publishId,
          Password:password,
          InvoiceId:this.InvoiceId,
          CouponId:this.CouponId
        }
      }
     const res=await  post(objUrl,pramas,this.curPage)
        if(res.code==0){
          wx.showToast({
            title:"开通成功",
            icon:"success",
            duration:1500
          })
          this.showPayPawStatus = false
          setTimeout(res=>{
            this.initData()
            if(this.type===3){
            wx.navigateTo({url:"/pages/member2/memberManage/main"})
            }else{
              wx.navigateBack()
            }
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
