<template>
  <div class="pageContent invitePage">
      <scroll-view class="inviteRecord" scroll-y="true">
          <div class="box__hd box__hd2">
            <span class="title">我的邀请记录</span>
          </div>
          <div class="recordeList" v-if="hasData==true">
              <div class="item flex flexAlignCenter" v-for="(item,index) in shareList" :key="index">
                  <div class="flex1 flex flexAlignCenter">
                      <img :src="item.Avatar" class="tx" alt="">
                      <div class="txtBox flex1">
                          <p class="name ellipsis">{{item.Name}}</p>
                          <p class="time">{{item.AddTime}}</p>
                      </div>
                      <p class="score"><span class="fh">+</span><span class="num">{{item.Change }}</span>积分</p>
                  </div>
              </div>
          </div>
          <p
            style="text-align:center;font-size:30rpx;color:#666;padding:120rpx 20rpx 80rpx;"
            v-if="hasData==false"
            >暂无数据</p>
      </scroll-view>
      
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
        this.getShareCord()
  },
  data() {
    return {
        curPage: "",
        userId: "",
        token: "",
        shareList:[],
        hasData:false,
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "邀请记录"
      });
    },
    getShareCord(){
        post('User/ShareScoreList',{
            UserId: this.userId,
            Token: this.token,
            Page:1
        },this.curPage).then(res=>{
            if(res.code==0){
                if(res.count <= 0){
                    this.hasData = false
                }else{
                     this.shareList = res.data
                     this.hasData = true
                }
            }
            console.log(this.hasData)
        })
    }
  }
};
</script>
<style lang="scss" scoped>
 .inviteRecord{
     height: calc( 100vh - 20rpx );
     background: #fff;
     margin-top:20rpx;
 }
 .box__hd2{
     padding:40rpx 0;
    //  margin:0 40rpx;
     width: 75%;
     margin:0 auto;
     &::before{
         top:50%;
         margin-top:-4rpx;
     }
 }
 .recordeList{
     margin-top:-40rpx;
     .item{
         padding:30rpx;
         position: relative;
         &::before{
             position: absolute;
             content: "";
             height: 1px;
             left:30rpx;
             right: 0;
             background:#f2f2f2;
             bottom: 0;
         }
     }
     .tx{
         width: 100rpx;
         height: 100rpx;
         border-radius: 50%;
         margin-right: 24rpx;
     }
     .name{
         font-size: 32rpx;
     }
     .time{
         font-size: 24rpx;
         color:#999999;
     }
     .score{
         color:#fc431f;
         font-size: 24rpx;
         .num{
             font-size: 40rpx;
         }
         .fh{
             font-size: 40rpx;
         }
     }
 }

</style>
