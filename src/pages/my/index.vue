<template>
  <div class="pageContent">
    <div class="memberTop">
      <img src="/static/images/icons/set.png" @click="gotoSet" class="icon_set" alt>
      <span class="btnModifyInfo" @tap="editInfo">修改个人资料</span>
      <!-- <div class="perInfo level__perInfo flex flexAlignCenter"> -->
      <div class="perInfo level__perInfo flex">
        <img @click="gotoPerson" :src="personInfo.Avatar" class="tx" alt>
        <div class="info flex1">
          <!-- <p class=""> -->
          <p class="mt10">
            <!-- <span class="name" v-html="personInfo.Name"></span> -->
            <span class="name">{{personInfo.Name}}</span>
            <img src="/static/images/icons/v2.png" v-if="personInfo.IsVip" class="icon_attestation" alt="">
            <img src="/static/images/icons/attestationTag2.png" v-if="personInfo.IsAUT" class="icon_attestationTag" alt="">
          </p>
        </div>
      </div>
    </div>
    <div class="main pdLR15">
      <div class="menuTop section radius8 bg_fff">
        <ul class="navList li_25 center">
          <li>
            <div class="outside" @click="gotoPage2(0)">
              <div class="icon-img">
                <img src="/static/images/icons/zhanghu.jpg" alt>
              </div>
              <p class="title">我的账户</p>
            </div>
          </li>
          <li>
            <div class="outside" @click="gotoPage2(1)">
              <div class="icon-img">
                <img src="/static/images/icons/myCollect.jpg" alt>
              </div>
              <p class="title">我的收藏</p>
            </div>
          </li>
          <li>
            <div class="outside" @click="gotoPage2(2)">
              <div class="icon-img">
                <img src="/static/images/icons/fabu.jpg" alt>
              </div>
              <p class="title">我的发布</p>
            </div>
          </li>
          <li>
            <div class="outside" @click="gotoPage2(3)">
              <div class="icon-img">
                <img src="/static/images/icons/liulan.jpg" alt>
              </div>
              <p class="title">我的浏览</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="section radius8 bg_fff mt10 mb20">
        <!-- 邀请好友送积分 -->
        <div style="padding:30rpx 20rpx;border-bottom:1px solid #e5e5e5;" @tap="gotoPage2(4)">
          <div class="inviteBox flex flexAlignCenter">
            <div class="flex1">
              <img src="/static/images/icons/invite.png" class="icon_invite" alt>邀请好友加入
            </div>
            <span class="msg">有机会得600积分</span>
            <span class="icon-arrow arrow-right"></span>
          </div>
        </div>
        <!-- 邀请好友送积分  end -->
        <div class="navBox">
          <ul class="navList li_25 center navList2">
            <li>
              <div class="outside" @click="gotoPage(0)">
                <div class="icon-img">
                  <img src="/static/images/icons/my_huiyuanguanli.jpg" alt>
                </div>
                <p class="title">会员管理</p>
              </div>
            </li>
            <li>
              <div class="outside" @click="gotoPage(1)">
                <div class="icon-img">
                  <img src="/static/images/icons/my_kaquanduihuan.jpg" alt>
                </div>
                <p class="title">服务卡兑换</p>
              </div>
            </li>
            <li>
              <div class="outside" @click="gotoPage(2)">
                <div class="icon-img">
                  <img src="/static/images/icons/my_jifen.jpg" alt>
                </div>
                <p class="title">我的积分</p>
              </div>
            </li>
            <li>
              <div class="outside" @click="gotoPage(3)">
                <div class="icon-img">
                  <img src="/static/images/icons/my_renzheng.jpg" alt>
                </div>
                <p class="title">我的认证</p>
              </div>
            </li>
            <li>
              <div class="outside" @click="gotoPage(4)">
                <div class="icon-img">
                  <img src="/static/images/icons/my_youhuiquan.jpg" alt>
                </div>
                <p class="title">优惠券</p>
              </div>
            </li>
            <li>
              <div class="outside" @click="gotoPage(5)">
                <div class="icon-img">
                  <img src="/static/images/icons/my_fapiao.jpg" alt>
                </div>
                <p class="title">发票管理</p>
              </div>
            </li>
            <li>
              <div class="outside" @click="gotoPage(6)">
                <div class="icon-img">
                  <img src="/static/images/icons/my_zengzhi.jpg" alt>
                </div>
                <p class="title">增值服务</p>
              </div>
            </li>
            <li>
              <div class="outside" @click="gotoPage(7)">
                <div class="icon-img">
                  <img src="/static/images/icons/my_jiameng.jpg" alt>
                </div>
                <p class="title">合作加盟</p>
              </div>
            </li>
            <li>
              <div class="outside" @click="gotoPage(8)">
                <div class="icon-img">
                  <img src="/static/images/icons/my_fankui.jpg" alt>
                </div>
                <p class="title">意见反馈</p>
              </div>
            </li>
            <li>
              <div class="outside" @click="gotoPage(9)">
                <div class="icon-img">
                  <img src="/static/images/icons/my_bangzhu.jpg" alt>
                </div>
                <p class="title">帮助中心</p>
              </div>
            </li>
            <li>
              <div class="outside" @click="gotoPage(10)">
                <div class="icon-img">
                  <img src="/static/images/icons/my_lianxi.jpg" alt>
                </div>
                <p class="title">联系客服</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { post, valPhone, toLogin, getCurrentPageUrlWithArgs,getNewMsgDot } from "@/utils";
//type:1:合作加盟；2：增值服务；3：意见反馈;这个是跳转到feedback需要传的
export default {
  data() {
    return {
      menuArr:["/pages/member2/memberManage/main","/pages/member/serviceCardChange/main","/pages/member/integral/main","/pages/mine2/myVertical/main","/pages/mine2/myCoupon/main","/pages/member2/invoiceList/main","/pages/member2/feedback/main?type=2","/pages/member2/feedback/main?type=1","/pages/member2/feedback/main?type=3","/pages/member/help/main","/pages/member/contact/main"],
      menuArr2:["/pages/mine2/account/main","/pages/mine2/myCollect/main","/pages/mine/publish/main","/pages/member/browse/main","/pages/inviteFriends/main"],
      curPage: "",
      userId: "",
      token: "",
      personInfo:{}
    }
  },
  onLoad() {
  },
  onShow(){
    this.setBarTitle();
    this.bankId = this.$store.state.cardInfo.id;
    this.bankName = this.$store.state.cardInfo.bankName;
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.getPerson()
    getNewMsgDot();
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "我的"
      });
    },
    //获取个人信息
    getPerson(){
      post('User/GetMemberInfo',{
        UserId: this.userId,
        Token: this.token,
      },this.curPage).then(res=>{
        if(res.code==0){
          this.personInfo = res.data
          wx.setStorageSync("mobile",res.data.ContactsTel);
          console.log(res)
        }
      })
    },
    gotoPage(index){
      //type:1:合作加盟；2：增值服务；3：意见反馈;
      wx.navigateTo({
        url:this.menuArr[index]
      })
    },
    gotoPage2(index){
      wx.navigateTo({
        url:this.menuArr2[index]
      })
    },
    gotoPerson(){
      wx.navigateTo({
        url:"/pages/mine/person/main?type=1"
      })
    },
    gotoSet(){
      wx.navigateTo({
        url:"/pages/member/set/main"
      })
    },
    editInfo(){
      wx.navigateTo({
        url:"/pages/mine/editInfo/main"
      })
    }
  }

};
</script>
<style lang="scss" scoped>
.navList {
  font-size: 24rpx;
}
.radius8{
overflow: hidden;
}
.menuTop {
  box-shadow: 0 0 20rpx #efefef;
  margin-top: -60rpx;
  position: relative;
  z-index: 3;
}
.inviteBox{
  height: 80rpx;
  line-height: 80rpx;
  background: #fff4ea;
  border-radius: 200rpx;
  padding:0 20rpx 0 30rpx;
  font-size: 27.3rpx;
  color:#ff952e;
   .icon_invite{
     width: 54rpx;
     height: 54rpx;
     vertical-align: middle;
     margin-right: 20rpx;
   }
   .msg{
     color:#999;
     font-size: 24rpx;
   }
}
.navList2 .icon-img{
  margin-bottom: 0 !important;
}
.icon_attestationTag{
  width: 30rpx;
  height:30rpx;
}
.icon_attestationTag {
  width: 30rpx;
  height:30rpx;  
}
</style>
