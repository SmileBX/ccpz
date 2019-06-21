<template>
  <div class="bg_fff" style="height:100vh">
    <!-- 标签-->
      <div class="tagBox pd15 mt10 bg_fff" style="margin-bottom:20rpx">
          <div class="line flex flexColumn">
            <div class=""> 
                <h3 class="tagTile">资源标签</h3>
                <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentStart flex1 tipsGray" style="margin-top:20rpx">
                  <span >美工</span>
                  <span >设计</span>
                  <span >文员</span>
                  <span >销售</span>
                </div>
            </div>
          </div>
      </div>
       <!-- 标签-->
      
    <!-- 底部 -->
    <div class="btnSub">确定</div>
  </div>
</template>
<script>
import { post, valPhone, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
export default {
  data(){
    return {
      type:0, //2-能力标签 1-资源标签
      taglist:[ ]
    }
  },
  onLoad() {
    this.setBarTitle();
  },
  onShow(){
    
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "标签编辑"
      });
    },
    
   
    
  }
};
</script>
<style lang="scss" scoped>
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
.tipsList{
  width:100%;
  span{
    width:23%;
    padding:10rpx 0;
    font-size:24rpx;
    text-align:center;
    background: #ff9325;
    border:none;
    color:#fff;
    margin-right:16rpx;
    margin-bottom: 18rpx;
  }
  span:nth-child(4n){
    margin-right:0
  }
}

</style>