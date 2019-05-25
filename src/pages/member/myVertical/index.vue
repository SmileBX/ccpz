<template>
  <div class="page pageVertical">
      <div class="bg_ff952e bg_certical"></div>
      <div class="card_bd bg_fff">
          <div class="avatarbox">
            <img src="/static/images/of/ava.png" alt="" class="avatar">
          </div>
          <div class="filterMenu" style="padding:0">
            <ul class="menu bbLi__menu bbNo__menu li_33 flex center flex justifyContentAround">
              <li class="active">
                <div class="item">个人认证</div>
              </li>
              <li>
                <div class="item">企业认证</div>
              </li>
            </ul>
          </div>
          <!--个人模块-->
          <div v-if="showCompany" class="bg_fff">
              <div class="weui-cells">
                <div class="weui-cell">
                  <div class="weui-cell_bd">
                    <p class="txt">姓名</p>
                  </div>
                  <input type="text" placeholder="请输入您的姓名">
                </div>
                <div class="weui-cell">
                  <div class="weui-cell_bd">
                    <p class="txt">身份证号</p>
                  </div>
                  <input type="text" placeholder="请输入您的身份证号">
                </div>
              </div>
          </div>
          <!--公司模块-->
          <div v-else class="bg_fff">
              <div class="weui-cells">
                <div class="weui-cell">
                  <div class="weui-cell_bd">
                    <p class="txt">企业名称</p>
                  </div>
                  <input type="text" placeholder="请输入企业名称">
                </div>
                <div class="weui-cell">
                  <div class="weui-cell_bd">
                    <p class="txt">企业注册号</p>
                  </div>
                  <input type="text" placeholder="请输入企业注册号">
                </div>
                <div class="weui-cell">
                  <div class="weui-cell_bd">
                    <p class="txt">法人姓名</p>
                  </div>
                  <input type="text" placeholder="请输入法人姓名">
                </div>
                <div class="weui-cell">
                  <div class="weui-cell_bd">
                    <p class="txt">法人身份证号</p>
                  </div>
                  <input type="text" placeholder="请输入法人身份证号">
                </div>
              </div>
          </div>
          <!--上传身份证-->
          <div class="idendityPic flex justifyContentBetween">
              <div>
                  <img src="/static/images/icons/iden-back.jpg" alt="" class="inendity_pic">
              </div>
              <div>
                  <img src="/static/images/icons/iden-top.jpg" alt="" class="inendity_pic">
              </div>
          </div>
          <!--企业-->
          <div style="padding:0 30rpx" class="bg_fff">
              <!--企业上传营业执照-->
              <div class="companyPic">
                  <p class="font30 fontBold company_pic_title">营业执照</p>
                  <div>
                      <img src="/static/images/icons/card_com.jpg" alt="" class="company_pic">
                  </div>
              </div>
              <!--企业上传其他照片-->
              <div class="otherPic">
                  <p class="font30 fontBold company_pic_title">其他资质</p>
                  <div>
                      <img src="/static/images/icons/uppic.jpg" alt="" class="up_pic">
                  </div>
              </div>
          </div>
          <!--企业end-->
          <div class="flex padwid bg_fff">
              <input type="checkbox" class="checkbox-cart">
              <p>
                <span>已阅读并同意</span>
                <span class="fontColor99">《成成企业拼租认证服务协议》</span>
              </p>
          </div>
          <!--底部按钮-->
          <div class="btn_box bg_fff">
              <div class="btnSub">提交</div>
          </div>
          


      </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      showCompany:false
    }
  },
  onLoad() {
    this.setBarTitle();
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "我的认证"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.btn_box{
  .btnSub{
    width:630rpx;
  }
}
.pageVertical{
  .card_bd{
    background:#fff!important
  }
  .avatarbox{
    margin:0;
    width:120rpx;
    height:120rpx;
    position:absolute;
    margin:0;
    top:-60rpx;
    left:50%;
    margin-left:-40rpx;
  }
}
</style>