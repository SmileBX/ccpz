<template>
  <div class="pageContent">
    <div class="memberTop">
      <img src="/static/images/icons/set.png" class="icon_set" alt>
      <span class="btnModifyInfo">修改资料</span>
      <div class="perInfo level__perInfo flex">
        <img src="/static/images/of/tx.jpg" class="tx" alt>
        <div class="info flex1">
          <p>
            <span class="name">罗曼蒂克的爱情</span>
          </p>
        </div>
      </div>
    </div>
    <div class="main pdLR15">
      <div class="menuTop section radius8 bg_fff">
        <ul class="navList li_25 center">
          <li>
            <div class="outside">
              <div class="icon-img">
                <img src="/static/images/icons/zhanghu.jpg" alt>
              </div>
              <p class="title">我的账户</p>
            </div>
          </li>
          <li>
            <div class="outside">
              <div class="icon-img">
                <img src="/static/images/icons/myCollect.jpg" alt>
              </div>
              <p class="title">我的收藏</p>
            </div>
          </li>
          <li>
            <div class="outside">
              <div class="icon-img">
                <img src="/static/images/icons/fabu.jpg" alt>
              </div>
              <p class="title">我的发布</p>
            </div>
          </li>
          <li>
            <div class="outside">
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
        <div style="padding:30rpx 20rpx;border-bottom:1px solid #e5e5e5;">
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
              <div class="outside">
                <div class="icon-img">
                  <img src="/static/images/icons/my_huiyuanguanli.jpg" alt>
                </div>
                <p class="title">会员管理</p>
              </div>
            </li>
            <li>
              <div class="outside">
                <div class="icon-img">
                  <img src="/static/images/icons/my_kaquanduihuan.jpg" alt>
                </div>
                <p class="title">服务卡兑换</p>
              </div>
            </li>
            <li>
              <div class="outside">
                <div class="icon-img">
                  <img src="/static/images/icons/my_jifen.jpg" alt>
                </div>
                <p class="title">我的积分</p>
              </div>
            </li>
            <li>
              <div class="outside">
                <div class="icon-img">
                  <img src="/static/images/icons/my_renzheng.jpg" alt>
                </div>
                <p class="title">我的认证</p>
              </div>
            </li>
            <li>
              <div class="outside">
                <div class="icon-img">
                  <img src="/static/images/icons/my_youhuiquan.jpg" alt>
                </div>
                <p class="title">优惠券</p>
              </div>
            </li>
            <li>
              <div class="outside">
                <div class="icon-img">
                  <img src="/static/images/icons/my_fapiao.jpg" alt>
                </div>
                <p class="title">发票管理</p>
              </div>
            </li>
            <li>
              <div class="outside">
                <div class="icon-img">
                  <img src="/static/images/icons/my_zengzhi.jpg" alt>
                </div>
                <p class="title">增值服务</p>
              </div>
            </li>
            <li>
              <div class="outside">
                <div class="icon-img">
                  <img src="/static/images/icons/my_jiameng.jpg" alt>
                </div>
                <p class="title">合作加盟</p>
              </div>
            </li>
            <li>
              <div class="outside">
                <div class="icon-img">
                  <img src="/static/images/icons/my_fankui.jpg" alt>
                </div>
                <p class="title">意见反馈</p>
              </div>
            </li>
            <li>
              <div class="outside">
                <div class="icon-img">
                  <img src="/static/images/icons/my_bangzhu.jpg" alt>
                </div>
                <p class="title">帮助中心</p>
              </div>
            </li>
            <li>
              <div class="outside">
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
export default {
  onLoad() {
    this.setBarTitle();
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "我的"
      });
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
</style>
