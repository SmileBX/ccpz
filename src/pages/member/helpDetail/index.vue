<template>
  <div class="pageContent bg_fff">
    <div class="content__hd">
      <h2 class="title">{{info.Title}}</h2>
    </div>
    <div class="content__bd">
      <div class="dataHtml" v-html="info.Content"></div>
    </div>
  </div>
</template>
<script>
import { post, toLogin, getCurrentPageUrlWithArgs, trim } from "@/utils";
export default {
  onLoad() {
    this.setBarTitle();
  },
  onShow(){
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.id = parseInt(this.$root.$mp.query.id);
    this.GetHelpCenter();
  },
  data() {
    return {
      userId:"",
      token:"",
      curPage:"",
      id:"",
      info:{}
    }
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "用户指导详情"
      });
    },
   GetHelpCenter(){
     let that = this;
     post("About/GetHelpCenter",{
       UserId:that.userId,
       Token:that.token,
       Id:that.id
     },that.curPage).then(res => {
       if(res.code ===0){
         that.info = res.data;
       }
     })
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
.scroll{
  height: 100vh;
}
</style>
