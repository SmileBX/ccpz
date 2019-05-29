<template>
  <div class="pageContent bg_fff">
    <div class="swiper">
      <img src="/static/images/of/freshen__ban.jpg" mode="widthFix" alt>
    </div>
    <div class="functionAbout">
      <h2 class="title">什么是刷新功能</h2>
      <div class="dataHtml">
        刷新功能是为平台用户提供的可以刷新展示自己所发布信息的服务。为短时间内想快速提高自己影响力的用户
，获得更高更直接的曝光率，提升和其他用户合作的几率。购买刷新功能后，即有一次可刷新的机会，单次仅
可刷新一条发布的内容，刷新展示时长24小时。
      </div>
      <div class="priceArea center">
        <p class="price"><span class="num">188</span>/次</p>
        <p>单次购买价格</p>
      </div>
    </div>
    <!-- 底部的定位按钮 -->
    <div class="ftBtn" style="heigth:100rpx;">
      <div class="inner fixed bm0">
        <div class="btns">
          <div class="btn center bg_ff952e color_fff">立即购买</div>
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
  data() {
    return {};
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "刷新功能"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.pageContent{
  height: 100vh;
  overflow: hidden;
  overflow-y:auto;
}
</style>
