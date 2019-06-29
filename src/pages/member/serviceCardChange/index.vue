<template>
  <div class="pageContent">
    <div class="changeForm">
      <img src="/static/images/icons/huangguan.png" class="icon-huangguan" alt="">
      <h2 class="title">兑换码</h2>
      <div class="form">
        <div class="line">
          <input type="text" class="borderIpt" placeholder="请输入卡号" v-model="OnlyCode">
        </div>
        <div class="line btn__line" @tap="changeCard">
          <div class="weui-btn btn-active fill">立即兑换</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { post, valPhone, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
export default {
  onLoad() {
    this.setBarTitle();
  },
  data(){
    return {
      curPage: "",
      userId: "",
      token: "",
      OnlyCode:"",//兑换码
      changeName:""
    }
  },
  onShow(){
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "服务卡兑换"
      });
    },
    changeCard(){
      if(this.OnlyCode == ''){
        wx.showToast({title:"请输入卡号",icon:"none"})
        return false
      }else{
        post('User/CashVipCard',{
            UserId: this.userId,
            Token: this.token,
            OnlyCode:this.OnlyCode
          },this.curPage).then(res=>{
            console.log("兑换REs:",res)
            if(res.code == 0){
              this.changeName = res.data.Name
              wx.showToast({
                title:res.msg,
                icon:"success",
                duration:1500})
              setTimeout(()=>{
                wx.navigateTo({url:"/pages/member/changeStatus/main?changeName="+this.changeName})
              },1500)
            }else{
              wx.showToast({
                title:res.msg,
                icon:'none',
                duration:1500
                })
            }
          })

      }
      
    }
  }
};
</script>
<style lang="scss" scoped>
.pageContent{
  height: 100vh;
  overflow: hidden;
  background-image: -moz-linear-gradient(180deg,#f5de98,#fff);
  background-image: -webkit-linear-gradient(180deg,#f5de98,#fff);
  background-image: linear-gradient(180deg,#f5de98,#fff);
}
</style>
