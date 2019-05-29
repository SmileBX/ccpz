<template>
  <div class="pageContent">
    <div class="filterMenu bg_fff" style="padding:0;">
      <ul class="menu bbNo__menu bbLi__menu li_50 flex center">
        <li :class="{'active':tabIndex===0}" @click="shiftTab(0)">
          <div class="item">未使用</div>
        </li>
        <li :class="{'active':tabIndex===1}" @click="shiftTab(1)">
          <div class="item">已使用</div>
        </li>
        <li :class="{'active':tabIndex===1}" @click="shiftTab(1)">
          <div class="item">已过期</div>
        </li>
      </ul>
    </div>
    <div class="filterContent">
        <div class="couponList">
            <div class="item flex">
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
            </div>
            <div class="item flex">
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
            </div>
            <!-- 已使用 -->
            <div class="item flex">
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
            </div>
            <!-- 已过期 -->
            <div class="item flex">
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
    return {
      tabIndex: 0
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "优惠券"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.filterMenu {
  color: #333;
  font-size: 32rpx;
}
</style>
