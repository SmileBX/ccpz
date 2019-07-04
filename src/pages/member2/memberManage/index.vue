<template>
  <div class="pageContent" v-if="hasData">
    <div class="manageTop">
      <!-- 未开通的时候 -->
      <div class="noGredge gradge" v-if="info.IsVip===0">
        <span class="status">未开通</span>
        <h2 class="title">精英会员</h2>
        <div class="con">
          <p class="msg">
            开通会员可以查看对方详细
            <br>信息，极速联系对方
          </p>
          <p class="text_r" @tap="gotoPage(2)">
            <span class="weui-btn">立即开通</span>
          </p>
        </div>
      </div>
      <!-- 会员卡 -->
      <div class="gradge" v-if="info.IsVip===1"  :class="{'one__gradient':info.cardBrand=='次卡','month__gradient':info.cardBrand=='月卡','season__gradient':info.cardBrand=='季卡','year__gradient':info.cardBrand=='年卡'}">
        <span class="status">{{info.cardBrand}}</span>
        <img src="/static/images/icons/v3.png" class="icons-vip.gradient-vip" alt="">
        <div class="perInfo" >
          <img :src="info.Avatar" class="tx" alt>
          <div class="info">
            <p class="name">
              {{info.Name}}
            </p>
            <p class="msg"> {{info.VipEndTime}}到期</p>
            <span class="weui-btn" @tap="contuineMoney">立即续费</span>
          </div>
        </div>
      </div>
      
    </div>
    <div class="navBox bg_fff">
      <div class="section__hd" style="padding-bottom:0;">
        <span class="title">收费服务</span>
      </div>
      <ul class="navList li_25 center navList2">
        <li>
          <div class="outside" @tap="gotoPage(0)">
            <div class="icon-img">
              <img src="/static/images/icons/zhiding.jpg" alt>
            </div>
            <p class="title">置顶功能</p>
          </div>
        </li>
        <li>
          <div class="outside" @tap="gotoPage(1)">
            <div class="icon-img">
              <img src="/static/images/icons/shuaxin.jpg" alt>
            </div>
            <p class="title">刷新功能</p>
          </div>
        </li>
      </ul>
    </div>
    <!--按钮-->
    <!-- <div class="ftBtn" style="height:100rpx" @click="addBankCard">
        <div class="inner fixed bm0">
          <div class="btns">
            <div class="btn center bg_ff952e color_fff">
              立即开通<span class="font_four color_fff">￥</span>698<span class="font_four color_fff">/年</span>
            </div>
          </div>
        </div>
    </div> -->
  </div>
</template>
<script>
import { post, valPhone, toLogin, getCurrentPageUrlWithArgs ,formatTime} from "@/utils";
export default {
  onLoad() {
    this.setBarTitle();
  },
  data() {
    return {
      menuArr:[
       "/pages/member2/isTopAbout/main", "/pages/member2/freshenAbout/main","/pages/member2/buyFunction/main?type=3",
      ],
      userId: "",
      token: "",
      curPage: "",
      hasData:false,
      info:{}
    };
  },
  onShow(){
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.hasData = false;
    this.info = {};
    this.QueryVipInfo()
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "会员管理"
      });
    },
    gotoPage(index){
        wx.navigateTo({
          url:this.menuArr[index]
        })
    },
    //续费
    contuineMoney(){
      let date = new Date(formatTime(new Date()).split(" ")[0]).getTime()
      let tt = new Date(this.info.VipEndTime).getTime()
      // if(date >= tt){
        wx.navigateTo({
          url:"/pages/member2/buyFunction/main?type=3"
        })
      // }
      
    },
    QueryVipInfo(){
      post('/User/QueryVipInfo',{
          UserId: this.userId,
          Token: this.token
      },this.curPage).then(res=>{
        console.log("res:",res)
        if(res.code==0){
          this.hasData = true;
          this.info={
            Avatar:res.data.Avatar, //头像
            IsVip:res.data.IsVip, //是否Vip
            Name:res.data.Name,  //昵称
            VipEndTime:res.data.VipEndTime  //到期时间
          }
          if(res.data.IsVip !==0){
            this.info = Object.assign({},this.info,{
              Content:res.data.gr.Content, //描述多少天内有效
              cardBrand:res.data.gr.Name,  //会员卡名称
              GradeName:res.data.gr.GradeName  //会员卡级别
            })
          }
        }
      })
    },
    
  }
};
</script>
<style lang="scss" scoped>
.section__hd .title {
  font-size: 32rpx !important;
  font-weight: normal !important;
}
</style>
