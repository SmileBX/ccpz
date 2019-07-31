<template>
    <div class="pageContent invitePage">
        <img src="/static/images/icons/inviteBg.jpg" mode="widthFix" class="inviteBg" alt="">
        <div class="inviteContent">
            <!-- 第一个框 -->
            <div class="box">
                <div class="box__bd">
                   <img src="/static/images/icons/invite_img1.jpg" mode="widthFix" class="img_1" alt="">
                   <button class="btn" open-type="share" plain style="border:none">立即邀请</button>
                </div>
            </div>
            <!-- 第二个框 -->
            <div class="box">
                <div class="box__hd box__hd1"><img src="/static/images/icons/inviteBg2.png" class="icon_l" alt=""><span class="title">简单三步 立享权益</span><img src="/static/images/icons/inviteBg2.png" class="icon_r" alt=""></div>
                <div class="box__bd">
                    <div class="stepBox flex">
                        <div class="item flex1">
                            <div class="step__hd">
                                <span>1</span>
                            </div>
                            <p class="title">分享活动<br>给好友</p>
                        </div>
                        <div class="item flex1">
                            <div class="step__hd">
                                <span>2</span>
                            </div>
                            <p class="title">好友接受<br>邀请</p>
                        </div>
                        <div class="item flex1">
                            <div class="step__hd">
                                <span>3</span>
                            </div>
                            <p class="title">好友登录并<br>完成实名认证</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 第三个框 -->
            <div class="box" style="margin-top:38rpx;">
                <div class="box__bd">
                    <div class="box__hd box__hd2"><span class="title">我的邀请战绩</span></div>
                    <ul class="gains flex center">
                        <li class="item flex1" @click="gopage">
                            <p class="num">{{num}}</p>
                            <p class="title">共邀请好友</p>
                        </li>
                        <li class="item flex1">
                            <p class="num">{{score}}</p>
                            <p class="title">获得积分</p>
                        </li>
                    </ul>
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
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.getShare()
  },
  data() {
    return {
      curPage: "",
      userId: "",
      token: "",
      ReferralCode:"",//邀请码
      score:"",
      num:""

    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "邀请好友"
      });
    },
    getShare(){
        post('User/GetUserShareId',{
            UserId: this.userId,
            Token: this.token,
        },this.curPage).then(res=>{
            if(res.code==0){
                this.ReferralCode = res.data.ReferralCode
                this.score =  res.data.ShareScore
                this.num = res.data.ShareNum
            }
        })
    },
    gopage(){
        wx.navigateTo({
        url: "/pages/inviteRecord/main"
      });
    }
  },
  onShareAppMessage: function (res) {
        if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target,"___")
        }
        return {
            title: '分享好友得积分',
            imageUrl:'/static/images/icons/121.jpg',
            path: '/pages/loginWay/main?inviteCode='+this.ReferralCode
        }
    }
}
</script>