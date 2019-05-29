<template>
  <div class="pageContent">
    <div class="changeForm">
      <img src="/static/images/icons/huangguan.png" class="icon-huangguan" alt="">
      <h2 class="title">兑换码</h2>
      <div class="form">
        <div class="line">
          <input type="text" class="borderIpt" placeholder="请输入卡号">
        </div>
        <div class="line btn__line">
          <div class="weui-btn btn-active fill">立即兑换</div>
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
        title: "服务卡兑换"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.pageContent{
  height: 100vh;
  overflow: hidden;
  background-image: -moz-linear-gradient(180deg,#f5de98,#fff,);
  background-image: -webkit-linear-gradient(180deg,#f5de98,#fff,);
  background-image: linear-gradient(180deg,#f5de98,#fff,);
}
</style>
