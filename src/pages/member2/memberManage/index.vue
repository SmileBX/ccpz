<template>
  <div class="pageContent">
    <div class="manageTop">
      <!-- 未开通的时候 -->
      <div class="noGredge gradge" style="display:none;">
        <span class="status">未开通</span>
        <h2 class="title">精英会员</h2>
        <div class="con">
          <p class="msg">
            开通会员可以查看对方详细
            <br>信息，极速联系对方
          </p>
          <p class="text_r">
            <span class="weui-btn">立即开通</span>
          </p>
        </div>
      </div>
      <!-- 次卡 -->
      <div class="gradge one__gradient" style="display:none;">
        <span class="status">次卡</span>
        <img src="/static/images/icons/v3.png" class="icons-vip.gradient-vip" alt="">
        <div class="perInfo">
          <img src="/static/images/of/tx.jpg" class="tx" alt>
          <div class="info">
            <p class="name">
              罗曼蒂克的爱情
            </p>
            <p class="msg">仅可使用一次</p>
            <span class="weui-btn">立即续费</span>
          </div>
        </div>
      </div>
      <!-- 月卡 -->
      <div class="gradge month__gradient" style="display:none">
        <span class="status">月卡</span>
        <img src="/static/images/icons/v3.png" class="icons-vip.gradient-vip" alt="">
        <div class="perInfo">
          <img src="/static/images/of/tx.jpg" class="tx" alt>
          <div class="info">
            <p class="name">
              罗曼蒂克的爱情
            </p>
            <p class="msg">2019-05-20到期</p>
            <span class="weui-btn">立即续费</span>
          </div>
        </div>
      </div>
      <!-- 季卡 -->
      <div class="gradge season__gradient" style="display:none">
        <span class="status">季卡</span>
        <img src="/static/images/icons/v3.png" class="icons-vip.gradient-vip" alt="">
        <div class="perInfo">
          <img src="/static/images/of/tx.jpg" class="tx" alt>
          <div class="info">
            <p class="name">
              罗曼蒂克的爱情
            </p>
            <p class="msg">2019-05-20到期</p>
            <span class="weui-btn">立即续费</span>
          </div>
        </div>
      </div>
      <!-- 年卡 -->
      <div class="gradge year__gradient">
        <span class="status">年卡</span>
        <img src="/static/images/icons/v3.png" class="icons-vip.gradient-vip" alt="">
        <div class="perInfo">
          <img src="/static/images/of/tx.jpg" class="tx" alt>
          <div class="info">
            <p class="name">
              罗曼蒂克的爱情
            </p>
            <p class="msg">2019-05-20到期</p>
            <span class="weui-btn">立即续费</span>
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
          <div class="outside" @click="gotoPage(1)">
            <div class="icon-img">
              <img src="/static/images/icons/zhiding.jpg" alt>
            </div>
            <p class="title">制定功能</p>
          </div>
        </li>
        <li>
          <div class="outside" @click="gotoPage(2)">
            <div class="icon-img">
              <img src="/static/images/icons/shuaxin.jpg" alt>
            </div>
            <p class="title">刷新功能</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  onLoad() {
    this.setBarTitle();
  },
  data() {
    return {
      
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "会员管理"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.section__hd .title {
  font-size: 32rpx !important;
  font-weight: normal !important;
}
</style>
