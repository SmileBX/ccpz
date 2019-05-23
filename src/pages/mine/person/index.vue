<template>
  <div class="pageContent">
    <div class="storeDetail">
      <div class="section pb20">
        <div class="swiper colorBlock bg_ff952e" style="padding-top:300rpx;"></div>
        <div class="shortInfo">
          <p class="editinfo">编辑</p>
          <div class="legalInfo flex">
            <img src="/static/images/of/tx.jpg" class="tx" alt>
            <div class="info flex1">
              <div style="margin-bottom:16rpx;">
                <span class="name">吴正华</span>
                <!-- <img src="/static/images/icons/v.jpg" class="icon_attestation" alt> -->
                <span class="lookAttestation"><img src="/static/images/icons/attestationTag.png" class="icon_attestationTag" alt="">查看认证</span>
              </div>
              <p class="msgList">
                <span class="msgItem">电子商务</span>
                <span class="msgItem">社区电商</span>
                <span class="msgItem">3年经验</span>
              </p>
            </div>
          </div>
          <div class="weui-cells noBorder__weui-cells column__weui-cells mt10">
            <div class="group flex justifyContentBetween">
              <div class="weui-cell">
                <div class="weui-cell__hd">成立日期</div>
                <div class="weui-cell__bd">2016-05-23</div>
              </div>
              <div class="weui-cell">
                <div class="weui-cell__hd">地区</div>
                <div class="weui-cell__bd">广东 深圳</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">办公面积</div>
                <div class="weui-cell__bd">
                  <span>
                    200m
                    <span class="sup">2</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 公司理念 -->
      <div class="section">
        <div class="locationBox pd15">
          <h3 class="title detail__title fontBold">公司理念</h3>
          <div class="con">深圳市松大科技有限公司隶属于深圳市松大电通集团，秉承集团在建筑电气及智能化领域的事业，专业从事建筑智能化系统的产品研发、生产、销售和售后服务。</div>
        </div>
      </div>
      <!-- 公司理念  end -->
    </div>
    <!--个人主页 -->
    <div class="section pd15 bg_fff" style="margin-top:20rpx">
      <h3 class="title detail__title fontBold">个人主页</h3>
      <div class="contactList clear">
          <div class="item"><img src="/static/images/icons/con_weixin.jpg" class="icon" alt="">yekl125321</div>
          <div class="item"><img src="/static/images/icons/con_tel.jpg" class="icon" alt="">13652365214</div>
          <div class="item"><img src="/static/images/icons/con_email.jpg" class="icon" alt="">96854123@qq.com</div>
          <div class="item"><img src="/static/images/icons/con_address.jpg" class="icon" alt="">布吉区-布吉关</div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="ftBtn">
      <div class="inner fixed bm0 flex">
        <div class="btns flex1 flex center">
          <div class="btn flex1 bg_ff952e color_fff">极速联系</div>
          <div class="btn flex1 bg_ed3435 color_fff">加好友</div>
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
        title: "基本信息"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.shortInfo {
  margin-top: -180rpx !important;
}
.storeNowrap .storeList .item,
.storeNowrap .storeList .pictrueAll img {
  width: 200rpx !important;
  height: 200rpx !important;
}
.group{
  padding:0;
  font-size:24rpx;
}
.msgItem{
  padding:0 4rpx;
  border-left: none;
  color:#1a1a1a
}
.msgItem:last-child{
  border-left: 1px solid #e5e5e5;
}
.weui-cells{
  padding:20rpx 0
}
.weui-cell{
  padding:0;
  margin-top:10rpx
}
.weui-cell:nth-child(2){
  margin-left:10rpx;
  text-align:right
}
.section {
  margin-bottom:0
}
.editinfo{
  color:#ff9325;
  font-size:24rpx;
  text-align:right;
}
</style>