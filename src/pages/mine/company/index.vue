<template>
  <div class="pageContent">
    <div class="storeDetail">
      <div class="section pb20" style="padding-bottom:0 !important;">
        <div class="swiper colorBlock bg_ff952e" style="padding-top:300rpx;"></div>
        <div class="shortInfo">
           <p class="editinfo">编辑</p>
          <div class="legalInfo flex">
            <img src="/static/images/of/tx.jpg" class="tx" alt>
            <div class="info flex1">
              <div style="margin-bottom:16rpx;">
                <span class="name">吴正华</span>
                <img src="/static/images/icons/v.jpg" class="icon_attestation" alt>
                <span class="lookAttestation"><img src="/static/images/icons/attestationTag.png" class="icon_attestationTag" alt="">查看认证</span>
              </div>
              <p class="msgList">
                <span class="msgItem">电子商务</span>
                <span class="msgItem">社区电商</span>
                <span class="msgItem">UI设计师</span>
              </p>
              <div class="msgList flex">
               <p class="slogan">深圳送达科技有限公司</p>
               <span class="attestationStatus">
                  <span> 切换</span>
                </span>
                <span class="attestationStatus">
                  <span class="icon-gou"></span> 已认证
                </span>
              </div>
            </div>
          </div>
          <div class="weui-cells noBorder__weui-cells column__weui-cells mt10">
            <div class="group flex justifyContentBetween">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">成立日期</div>
                <div class="weui-cell__bd">2016-05-23</div>
              </div>
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">人员规模</div>
                <div class="weui-cell__bd">100人</div>
              </div>
            </div>
            <div class="group flex justifyContentBetween">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">办公面积</div>
                <div class="weui-cell__bd">
                  <span>
                    200m
                    <span class="sup">2</span>
                  </span>
                </div>
              </div>
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">地区</div>
                <div class="weui-cell__bd">广东 深圳</div>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="locationBox pd15 company">
              <h3 class="title detail__title">公司简介</h3>
              <div class="con">深圳市松大科技有限公司隶属于深圳市松大电通集团，秉承集团在建筑电气及智能化领域的事业，专业从事建筑智能化系统的产品研发、生产、销售和售后服务，已形成监控防盗系列产品、建筑智能化教仪系列产品、灯光照明系列产品、智能家居系列产品、车载电视产品等五大系列，近百种“松大”品牌产品。</div>
          </div>
        </div>
          <!-- 公司理念 -->
        <div class="section">
            <div class="locationBox pd15">
              <h3 class="title detail__title">公司理念</h3>
              <div class="con">深圳市松大科技有限公司隶属于深圳市松大电通集团，秉承集团在建筑电气及智能化领域的事业，专业从事建筑智能化系统的产品研发、生产、销售和售后服务。</div>
            </div>
        </div>
      </div>
      <!-- 标签-->
      <div class="tagBox pd15 mt10 bg_fff" style="margin-bottom:20rpx">
          <div class="line flex flexColumn">
            <div class="flex justifyContentBetween"> 
                <h3 class="tagTile">资源标签</h3>
                <span class="icon-arrow arrow-right"></span>
            </div>
            <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentStart">
              <span>美工</span>
              <span>设计</span>
              <span>文员</span>
              <span>销售</span>
            </div>
          </div>
          <div class="line flex flexColumn">
            <div class="flex justifyContentBetween"> 
                <h3 class="tagTile">能力标签</h3>
                <span class="icon-arrow arrow-right"></span>
            </div>
            <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentStart">
              <span>广告策划</span>
              <span>室内设计</span>
              <span>市场营销</span>
              <span>销售</span>
              <span>品牌推广</span>
              <span>互联网</span>
            </div>
          </div>
        </div>
      
      </div>
    <!--公司相关-->
    <div>
        <!--上传图片-->
        <div class="uploadSection">
            <div class="item">
              <h2 class="uploadTitle">办公照片</h2>
              <div class="uploadImage clear">
                <!-- 上传展示的图片 -->
                <div class="upload-img img">
                  <img src="/static/images/icons/upload-2.jpg" alt>
                </div>
              </div>
            </div>
            <div class="item">
              <h2 class="uploadTitle">营业执照</h2>
              <div class="uploadImage clear">
                <!-- 上传展示的图片 -->
                <div class="upload-img img">
                  <img src="/static/images/icons/upload-2.jpg" alt>
                </div>
              </div>
            </div>
            <div class="item">
              <h2 class="uploadTitle">其他资质证书</h2>
              <div class="uploadImage clear">
                <!-- 上传展示的图片 -->
                <div class="upload-img img">
                  <img src="/static/images/icons/upload-2.jpg" alt>
                </div>
              </div>
            </div>
        </div>
        <!--公司信息-->
        <div class="weui-cells" style="margin-top:0">
          <div class="weui-cell" style="padding: 20rpx 30rpx;">
            <div class="weui-cell__bd">
              <p class="txt">社会信用代码</p>
            </div>
            <span class="fontColor ">968574125854X1244</span>
            <span class="icon-arrow arrow-right"></span>
          </div>
          <div class="weui-cell" style="padding: 20rpx 30rpx;">
            <div class="weui-cell__bd">
              <p class="txt">法定代表人籍贯</p>
            </div>
            <span class="fontColor ">湖南 长沙</span>
            <span class="icon-arrow arrow-right"></span>
          </div>
        </div>
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
    <!-- 公司简介 -->
      <div class="section" style="margin-top:20rpx">
        <div class="locationBox pd15">
          <div class="flex justifyContentBetween">
              <h3 class="title detail__title fontBold">公司简介</h3>
              <p class="fontColor99">编辑
                <span class="icon-arrow arrow-right"></span>
              </p>
          </div>
          <div class="con">深圳市松大科技有限公司隶属于深圳市松大电通集团，秉承集团在建筑电气及智能化领域的事业，专业从事建筑智能化系统的产品研发、生产、销售和售后服务。</div>
        </div>
      </div>
      <!-- 公司简介  end -->
      <!-- 公司理念 -->
      <div class="section" style="margin-top:20rpx">
        <div class="locationBox pd15">
          <div class="flex justifyContentBetween">
              <h3 class="title detail__title fontBold">公司理念</h3>
              <p class="fontColor99">编辑
                <span class="icon-arrow arrow-right"></span>
              </p>
          </div>
          <div class="con">深圳市松大科技有限公司隶属于深圳市松大电通集团，秉承集团在建筑电气及智能化领域的事业，专业从事建筑智能化系统的产品研发、生产、销售和售后服务。</div>
        </div>
      </div>
      <!-- 公司理念  end -->
      <!-- 照片 -->
      <div class="form-cells-item pall bg_fff" style="margin-top:20rpx">
        <div class="flex justifyContentBetween">
              <h3 class="title detail__title fontBold">上传照片</h3>
              <p class="fontColor99">编辑
                <span class="icon-arrow arrow-right"></span>
              </p>
          </div>
        <div class="form-cell-bd form-cell-img">
          <div class="upbtn">
            <span class="close" @click="delImg(pindex)">×</span>
            <img class="upimg" src="/static/images/icons/upload_1.png">
          </div>
          <div class="upbtn" @click="chosseImg" >
            <img class="upimg" src="/static/images/icons/upload_1.png">
          </div>
        </div>
      </div>
      <!-- 照片-->
      <!-- 底部 -->
      <!-- <div class="ftBtn">
        <div class="inner fixed bm0 flex">
          <div class="btns flex1 flex center">
            <div class="btn flex1 bg_ff952e color_fff">极速联系</div>
            <div class="btn flex1 bg_ed3435 color_fff">加好友</div>
          </div>
        </div>
      </div> -->
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
        title: "公司详情"
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
}
.pageContent{
  // .weui-btn.btn-active.fill{
  //   position:fixed;
  //   bottom:0rpx;
  //   width:690rpx;
  //   bottom:60rpx;
  // }
  .company{
    position:relative;
    padding:20rpx 0;
  }
  .company::after{
    position: absolute;
    content: "";
    height: 1px;
    width: 690rpx;
    left:30rpx;
    right:30rpx;
    background: #ececec;
    bottom:0
    
  }
  textarea{
    height:200rpx;
    width:100%;
  }
  .uploadImage {
    margin-bottom:0
  }
  .item{
    padding-bottom:20rpx;
  }
  .pall{
    padding:20rpx 30rpx;
  }
}
.weui-cell::before{
  left:0;
  right: 0;
}
.weui-cell{
  padding:0;
  margin-top:10rpx;
  input{
    text-align:right
  }
  .fontColor{
    color:#808080
  }
  .avatarbox{
    width:108rpx;
    height:108rpx;
    margin-right:0
  }
  
}
.tipsList{
  margin:10rpx 0;
}
.tipsList span{
  width:15%;
  font-size:24rpx;
  text-align:center;
  border: 1px solid #ff952e;
  background: none;
  color: #ff952e;
  margin-right:16rpx;
  margin-bottom: 18rpx;
}
.msgItem{
  padding:0 4rpx;
  border-left: none;
  color:#1a1a1a
}
.msgItem:last-child{
  border-left: 1px solid #e5e5e5;
}
.editinfo{
  color:#ff9325;
  font-size:24rpx;
  text-align:right;
}
</style>