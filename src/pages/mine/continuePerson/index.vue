<template>
  <div class="pageContent">
    <div class="pall bg_fff borderTop">
        <p style="margin-bottom:10rpx;">创业理念</p>
        <textarea name="" id="" cols="30" rows="10" placeholder="请输入创业理念"></textarea>
    </div>
    <!--个人信息空-->
    <div class="weui-cells">
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
    </div>
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
  .weui-btn.btn-active.fill{
    position:fixed;
    bottom:0rpx;
    width:690rpx;
    bottom:60rpx;
  }
}

</style>
