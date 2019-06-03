<template>
  <div class="pageContent invitePage">
      <scroll-view class="inviteRecord" scroll-y="true">
          <div class="box__hd box__hd2">
            <span class="title">我的邀请记录</span>
          </div>
          <div class="recordeList">
              <div class="item flex flexAlignCenter">
                  <div class="flex1 flex flexAlignCenter">
                      <img src="/static/images/icons/mingxi.jpg" class="tx" alt="">
                      <div class="txtBox flex1">
                          <p class="name ellipsis">AIYO</p>
                          <p class="time">2019-05-28 18:20</p>
                      </div>
                      <p class="score"><span class="fh">+</span><span class="num">80</span>积分</p>
                  </div>
              </div>
              <div class="item flex flexAlignCenter">
                  <div class="flex1 flex flexAlignCenter">
                      <img src="/static/images/icons/mingxi.jpg" class="tx" alt="">
                      <div class="txtBox flex1">
                          <p class="name ellipsis">AIYO</p>
                          <p class="time">2019-05-28 18:20</p>
                      </div>
                      <p class="score"><span class="fh">+</span><span class="num">80</span>积分</p>
                  </div>
              </div>
              <div class="item flex flexAlignCenter">
                  <div class="flex1 flex flexAlignCenter">
                      <img src="/static/images/icons/mingxi.jpg" class="tx" alt="">
                      <div class="txtBox flex1">
                          <p class="name ellipsis">AIYO</p>
                          <p class="time">2019-05-28 18:20</p>
                      </div>
                      <p class="score"><span class="fh">+</span><span class="num">80</span>积分</p>
                  </div>
              </div>
              <div class="item flex flexAlignCenter">
                  <div class="flex1 flex flexAlignCenter">
                      <img src="/static/images/icons/mingxi.jpg" class="tx" alt="">
                      <div class="txtBox flex1">
                          <p class="name ellipsis">AIYO</p>
                          <p class="time">2019-05-28 18:20</p>
                      </div>
                      <p class="score"><span class="fh">+</span><span class="num">80</span>积分</p>
                  </div>
              </div>
              <div class="item flex flexAlignCenter">
                  <div class="flex1 flex flexAlignCenter">
                      <img src="/static/images/icons/mingxi.jpg" class="tx" alt="">
                      <div class="txtBox flex1">
                          <p class="name ellipsis">AIYO</p>
                          <p class="time">2019-05-28 18:20</p>
                      </div>
                      <p class="score"><span class="fh">+</span><span class="num">80</span>积分</p>
                  </div>
              </div>
              <div class="item flex flexAlignCenter">
                  <div class="flex1 flex flexAlignCenter">
                      <img src="/static/images/icons/mingxi.jpg" class="tx" alt="">
                      <div class="txtBox flex1">
                          <p class="name ellipsis">AIYO</p>
                          <p class="time">2019-05-28 18:20</p>
                      </div>
                      <p class="score"><span class="fh">+</span><span class="num">80</span>积分</p>
                  </div>
              </div>
          </div>
      </scroll-view>
  </div>
</template>
<script>
export default {
  onLoad() {
      this.setBarTitle();
  },
  onShow() {},
  data() {
    return {};
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "邀请记录"
      });
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
