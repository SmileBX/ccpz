<template>
  <div class="pageContent">
    <div class="filterMenu bg_fff" style="padding:0;">
      <ul class="menu bbNo__menu bbLi__menu li_50 flex center">
        <li :class="{'active':status===1}" @click="tabStatus(1)">
          <div class="item">未使用</div>
        </li>
        <li :class="{'active':status===2}" @click="tabStatus(2)">
          <div class="item">已使用</div>
        </li>
        <li :class="{'active':status===3}" @click="tabStatus(3)">
          <div class="item">已过期</div>
        </li>
      </ul>
    </div>
    <div class="filterContent">
      <div class="couponList">
        <div class="item flex" v-for="(item,index) in data" :key="index" @tap="SelectCoupon(index)">
          <!-- 未使用 -->
          <div v-if="status===1">
            <img src="/static/images/icons/couponBg.png" class="bg" alt>
          </div>

          <!-- 已使用 -->
          <div v-if="status===2">
            <img src="/static/images/icons/couponBg2.png" class="bg" alt>
            <img src="/static/images/icons/useed.png" class="icon-status" alt>
          </div>
          <!--已过期 -->
          <div v-if="status===3">
            <img src="/static/images/icons/couponBg2.png" class="bg" alt>
            <img src="/static/images/icons/overed.png" class="icon-status" alt>
          </div>

          <div class="priceBox flex flexAlignCenter flexColumn justifyContentCenter">
            <p class="price">
              ￥
              <span class="num">{{item.Denomination}}</span>
            </p>
            <p class="type">直接减免</p>
          </div>
          <div class="txtBox flex1">
            <p class="title">{{item.Title}}</p>
            <p class="time">有效期至{{item.EndTime}}</p>
            <p class="msg">{{item.ScopeOfUse}}</p>
          </div>
        </div>
        <!-- <div class="item flex">
                <img src="/static/images/icons/couponBg.png" class="bg" alt="">
                <div class="priceBox flex flexAlignCenter flexColumn justifyContentCenter">
                    <p class="price">￥<span class="num">10</span></p>
                    <p class="type">直接减免</p>
                </div>
                <div class="txtBox flex1">
                    <p class="title">新用户优惠券</p>
                    <p class="time">有效期至2019-06-08</p>
                    <p class="msg">仅限用户购买会员和购买刷新置顶功能使用</p>
                </div>
        </div>-->
        <!-- 已使用 -->
        <!-- <div class="item flex">
                <img src="/static/images/icons/couponBg2.png" class="bg" alt="">
                <img src="/static/images/icons/useed.png" class="icon-status" alt="">
                <div class="priceBox flex flexAlignCenter flexColumn justifyContentCenter">
                    <p class="price">￥<span class="num">10</span></p>
                    <p class="type">直接减免</p>
                </div>
                <div class="txtBox flex1">
                    <p class="title">新用户优惠券</p>
                    <p class="time">有效期至2019-06-08</p>
                    <p class="msg">仅限用户购买会员和购买刷新置顶功能使用</p>
                </div>
        </div>-->
        <!-- 已过期 -->
        <!-- <div class="item flex">
                <img src="/static/images/icons/couponBg2.png" class="bg" alt="">
                <img src="/static/images/icons/overed.png" class="icon-status" alt="">
                <div class="priceBox flex flexAlignCenter flexColumn justifyContentCenter">
                    <p class="price">￥<span class="num">10</span></p>
                    <p class="type">直接减免</p>
                </div>
                <div class="txtBox flex1">
                    <p class="title">新用户优惠券</p>
                    <p class="time">有效期至2019-06-08</p>
                    <p class="msg">仅限用户购买会员和购买刷新置顶功能使用</p>
                </div>
        </div>-->
      </div>
      <div class="noData" v-if="data.length<1">暂时没有数据哦！</div>
      <div class="bottomData" v-if="data.length>0&&notData">我也是有底线的！</div>
    </div>
  </div>
</template>
<script>
import { post } from "@/utils";
export default {
  data() {
    return {
      userId: "",
      token: "",
      page: 1,
      pageSize: 12,
      status: 1,
      notData: false,
      data: [],
      money:0,//商品价格
      pramas:''
    };
  },
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    this.status = 1;
    this.notData = false;
    this.page = 1;
    this.data = []
    this.pramas = ''
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.money = this.$root.$mp.query.money
    if(this.$root.$mp.query.url && this.$root.$mp.query.url !==""){
        this.pramas = this.$root.$mp.query.url
    }
    console.log(this.money,this.pramas,"___")
    this.getData();
    this.$store.commit("setSelectCoupon",{
      CouponId:'',//优惠券ID
      Denomination:''//优惠券面值
    })
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "优惠券"
      });
    },
    async getData() {
      if (this.notData) {
        return false;
      }
      this.page===1&&(this.data=[])
      const res = await post("User/CouponList", {
        UserId: this.userId,
        Token: this.token,
        Page: this.page,
        PageSize: this.pageSize,
        Status: this.status
      });
      if (res.code == 0) {
        this.data = this.data.concat(res.data);
        if (res.data.length < this.pageSize) {
          this.notData = true;
        }
      }
    },
    // 切换tab
    tabStatus(index) {
      this.status = index;
      this.notData = false;
      this.page = 1;
      this.data = [];
      this.getData();
    },
    //选择优惠券--  Denomination,优惠券面额 MeetConditions,使用条件(例：满200元才能使用，值就是200)，0-无限制条件
    SelectCoupon(i){
      if(this.pramas){
         
          const _MeetConditions = this.data[i].MeetConditions
          const CouponId = this.data[i].Id
          const Denomination = this.data[i].Denomination
          console.log(this.money,_MeetConditions,"}}}}}}}}}}}")
          // console.log(parseInt(this.money)>=parseInt(_MeetConditions),"wwwwwwwwwwwwwwwwww")
          if(this.status == 1){  //可使用且满足使用条件
            if(parseInt(this.money)>=parseInt(_MeetConditions)){
              // wx.navigateTo({
              //   url:"/pages/"+this.pramas+"/main?CouponId="+CouponId+"&Denomination="+Denomination
              // })
              this.$store.commit("setSelectCoupon",{
                CouponId:CouponId,//优惠券ID
                Denomination:Denomination//优惠券面值
              })
              wx.navigateBack()
            }else{
              wx.showToast({
                title:`商品金额要达到${_MeetConditions}才可以使用`,
                icon:"none",
                duration:1500
              })
            }
            console.log(this.data[i])
          }
      }
      
    }
  },
  // 上拉加载
  onReachBottom() {
    this.page += 1;
    this.getData();
  },
  // 下拉刷新
  onPullDownRefresh() {
    wx.stopPullDownRefresh(); //停止下拉刷新
    this.notData = false;
    this.page = 1;
    this.data = [];
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
.filterMenu {
  color: #333;
  font-size: 32rpx;
}
.bottomData {
  font-size: 30rpx;
  line-height: 100rpx;
  color: #999;
  text-align: center;
}
</style>
