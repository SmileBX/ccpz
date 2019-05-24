<template>
<!--公司信息空-->
  <div class="pageContent">
    <div class="pall bg_fff borderTop">
        <p style="margin-bottom:10rpx;">公司介绍</p>
        <textarea name="" id="" cols="30" rows="10" placeholder="请输入公司介绍"></textarea>
    </div>
    <div class="line2"></div>
    <div class="pall bg_fff borderTop">
        <p style="margin-bottom:10rpx;">公司理念</p>
        <textarea name="" id="" cols="30" rows="10" placeholder="请输入公司理念"></textarea>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">资源标签</p>
        </div>
        <span class="icon-arrow arrow-right"></span>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">能力标签</p>
        </div>
        <span class="icon-arrow arrow-right"></span>
      </div>
    </div>
    <div class="slidebg"></div> 
    <div>
        <!--上传图片-->
        <div class="uploadSection">
            <div class="item">
              <h2 class="uploadTitle">办公照片</h2>
              <div class="uploadImage clear">
                <!-- 上传展示的图片 -->
                <div class="upload-img img">
                  <img src="/static/images/icons/upload-2.jpg" alt>
                  <img src="/static/images/icons/cancle.png" class="close">
                </div>
                <!--上传按钮-->
                <div class="button-upload">
                  <img src="/static/images/icons/upload-2.jpg" alt>
                </div>
              </div>
            </div>
            <div class="item">
              <h2 class="uploadTitle">上传营业执照</h2>
              <div class="uploadImage clear">
                <!-- 上传展示的图片 -->
                <div class="upload-img img">
                  <img src="/static/images/icons/upload-2.jpg" alt>
                  <img src="/static/images/icons/cancle.png" class="close">
                </div>
                <!--上传按钮-->
                <div class="button-upload">
                  <img src="/static/images/icons/upload-2.jpg" alt>
                </div>
              </div>
            </div>
            <div class="item">
              <h2 class="uploadTitle">上传其他资质证书</h2>
              <div class="uploadImage clear">
                <!-- 上传展示的图片 -->
                <div class="upload-img img">
                  <img src="/static/images/icons/upload-2.jpg" alt>
                  <img src="/static/images/icons/cancle.png" class="close">
                </div>
                <!--上传按钮-->
                <div class="button-upload">
                  <img src="/static/images/icons/upload-2.jpg" alt>
                </div>
              </div>
            </div>
        </div>
        <!--公司信息-->
        <div class="weui-cells" style="margin-top:0">
          <div class="weui-cell">
            <div class="weui-cell__bd">
              <p class="txt">社会信用代码</p>
            </div>
            <input type="text" placeholder="请输入">
          </div>
          <div class="weui-cell">
            <div class="weui-cell__bd">
              <p class="txt">法定代表人籍贯</p>
            </div>
            <span class="fontColor ">请选择</span>
          </div>
        </div>
    </div> 
    
    <div class="weui-cells" >
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">联系人</p>
        </div>
        <input type="text" placeholder="请输入">
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">联系电话</p>
        </div>
        <input type="text" placeholder="请输入">
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">微信</p>
        </div>
        <input type="text" placeholder="请输入">
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">邮箱</p>
        </div>
        <input type="text" placeholder="请输入">
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">官网</p>
        </div>
        <input type="text" placeholder="请输入">
      </div>
    </div>
    <!--底部按钮-->
    <div style="padding:80rpx 30rpx;">
      <div class="weui-btn btn-active fill">保存</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      Company:false,//展示公司信息
    }
  },
  onLoad() {
    this.setBarTitle();
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "编辑信息"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.weui-cell::before{
  left:0;
  right: 0;
}
.weui-cell{
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
.pageContent{
  // .weui-btn.btn-active.fill{
  //   position:fixed;
  //   bottom:0rpx;
  //   width:690rpx;
  //   bottom:60rpx;
  // }
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

</style>
