<template>
  <div class="bg_fff" style="height:100vh">
    <!-- 标签-->
    <div class="flex flexWrap justifyContentStart taglist">
      <span>美工</span>
      <span>设计</span>
      <span class="avtive">文员</span>
      <span>销售</span>
    </div>
    <!-- 底部 -->
    <div class="btnSub">确定</div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      taglist:[ ]
    }
  },
  onLoad() {
    this.setBarTitle();
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "标签管理"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.taglist{
  padding:0 50rpx;
  margin-bottom:60rpx;
  span.avtive{
    background:#FF952E;
    color:#fff
  }
}
.taglist span{
  width:28%;
  font-size:24rpx;
  text-align:center;
  background: #FFF7F0;
  margin-right:47rpx;
  margin-bottom: 18rpx;
  padding:10rpx 0;
}
.taglist span:nth-child(3n){
  margin-right:0
}
.btnSub{
  width:650rpx
}

</style>