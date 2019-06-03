<template>
    <div class="pageContent invitePage">
        <img src="/static/images/icons/inviteBg.jpg" mode="widthFix" class="inviteBg" alt="">
        <div class="inviteContent">
            <!-- 第一个框 -->
            <div class="box">
                <div class="box__bd">
                   <img src="/static/images/icons/invite_img1.jpg" mode="widthFix" class="img_1" alt="">
                   <div class="btn">立即邀请</div>
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
                        <li class="item flex1">
                            <p class="num">0</p>
                            <p class="title">共邀请好友</p>
                        </li>
                        <li class="item flex1">
                            <p class="num">0</p>
                            <p class="title">获得积分</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

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
        title: "邀请好友"
      });
    }
  }
}
</script>