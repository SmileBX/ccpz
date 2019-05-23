<template>
  <div class="pageContent">
    <!--公司 个人信息空-->
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">头像</p>
        </div>
        <div class="avatarbox">
            <img src="/static/images/icons/ava_bg.jpg" alt="" class="avatar">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">昵称</p>
        </div>
        <input type="text" placeholder="请输入">
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">实名认证</p>
        </div>
        <span class="fontColor">未认证</span>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">地区</p>
        </div>
        <span class="fontColor ">请选择</span>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
            <!--个人-->
           <p class="txt">行业</p>
           <!--公司-->
            <p class="txt" v-if="Company">公司行业</p>
        </div>
        <span class=" fontColor">请选择</span>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">成立日期</p>
        </div>
        <span class="fontColor ">请选择</span>
      </div>
      <!--个人-->
      <div class="weui-cell" v-if="Company">
        <div class="weui-cell__bd">
           <p class="txt">工作年限</p>
        </div>
        <span class=" fontColor">请选择</span>
      </div>
      <!--公司-->
      <div class="weui-cell" v-if="Company">
        <div class="weui-cell__bd">
           <p class="txt">人员规模</p>
        </div>
        <input type="text" placeholder="请输入">
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">办公面积</p>
        </div>
        <input type="text" placeholder="请输入">
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">办公地址</p>
        </div>
        <input type="text" placeholder="请输入" >
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">负责人籍贯</p>
        </div>
        <span class="fontColor ">请选择</span>
      </div>


    </div>
    <div style="padding:80rpx 30rpx;">
      <div class="weui-btn btn-active fill">下一步</div>
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
