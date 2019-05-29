<template>
  <div class="pageContent">
    <div class="weui-cells">
      <div class="weui-cell" @click="gotoPage(0)">
        <div class="weui-cell__bd">
           <p class="txt">修改手机号</p>
        </div>
        <span class="icon-arrow arrow-right"></span>
      </div>
      <div class="weui-cell" @click="gotoPage(1)">
        <div class="weui-cell__bd">
           <p class="txt">设置支付密码</p>
        </div>
        <span class="icon-arrow arrow-right"></span>
      </div>
      <div class="weui-cell" @click="gotoPage(2)">
        <div class="weui-cell__bd">
           <p class="txt">关于我们</p>
        </div>
        <span class="icon-arrow arrow-right"></span>
      </div>
    </div>
    <div style="padding:80rpx 30rpx;">
      <div class="weui-btn btn-active fill">退出登录</div>
    </div>
    
  </div>
</template>
<script>
export default {
  onLoad() {
    this.setBarTitle();
  },
  data() {
    return {
      menuArr:["/pages/member/modifyTel/main","/pages/member/setPayPassword/main","/pages/member/aboutUs/main"]
    }
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "设置"
      });
    },
    gotoPage(index){
      wx.navigateTo({
        url:this.menuArr[index]
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.weui-cell::before{
  left:0;
  right: 0;
}

</style>
