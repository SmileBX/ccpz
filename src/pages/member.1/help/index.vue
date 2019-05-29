<template>
  <div class="pageContent bg_fff">
    <div class="weui-cells help__weui-cells">
      <div class="item">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p class="txt">平台简介</p>
          </div>
          <span class="icon-arrow arrow-up"></span>
        </div>
        <div class="spread">
          <div
            class="con"
          >拼租小程序是成成企业推出的全新租房服务平台。致力于为租客提供一手，真实的租房信息拼租小程序是成成企业推出的全新租房服务平台。致力于为租客提供一手，真实的租房信息</div>
        </div>
      </div>
      <div class="item">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p class="txt">用户指导</p>
          </div>
          <span class="icon-arrow arrow-down"></span>
        </div>
        <div class="spread">
          <div class="weui-cell">
            <div class="weui-cell__bd">
              <p class="txt">1、如何提现？</p>
            </div>
            <span class="icon-arrow arrow-right"></span>
          </div>
          <div class="weui-cell">
            <div class="weui-cell__bd">
              <p class="txt">2、如何变更提现银行卡？</p>
            </div>
            <span class="icon-arrow arrow-right"></span>
          </div>
          <div class="weui-cell">
            <div class="weui-cell__bd">
              <p class="txt">3、提现手续费多少？</p>
            </div>
            <span class="icon-arrow arrow-right"></span>
          </div>
          <div class="weui-cell">
            <div class="weui-cell__bd">
              <p class="txt">4、申请提现后，多久能到账？</p>
            </div>
            <span class="icon-arrow arrow-right"></span>
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
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "帮助中心"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.help__weui-cells{
    border-top:20rpx solid #f2f2f2;
}
.pageContent{
    height: 100vh;
    overflow: hidden;
}
</style>
