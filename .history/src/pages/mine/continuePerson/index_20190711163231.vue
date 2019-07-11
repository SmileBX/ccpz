<template>
  <div class="pageContent">
    <div class="pall bg_fff borderTop">
        <p style="margin-bottom:10rpx;">个人简介</p>
        <textarea name="" id="" class="txt_produce" cols="10" rows="2" maxlength="30" placeholder="请输入个人简介" v-model="WorkIdea"></textarea>
    </div>
    <!--个人信息空-->
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">联系人</p>
        </div>
        <input type="text" placeholder="请输入" v-model="Contacts">
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">联系电话</p>
        </div>
        <input type="text" placeholder="请输入" v-model="ContactsTel">
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">微信</p>
        </div>
        <input type="text" placeholder="请输入" v-model="WeChatNum">
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">邮箱</p>
        </div>
        <input type="text" placeholder="请输入" v-model="Email">
      </div>
    </div>
    <div style="padding:80rpx 30rpx;" @click="submitPatic">
      <div class="weui-btn btn-active fill">保存</div>
    </div>
    
  </div>
</template>
<script>
import { pathToBase64 } from "@/utils/image-tools";
import { post, valPhone, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
export default {
  data(){
    return {
      stepOne:"",//上一步的数据
      curPage: "",
      userId: "",
      token: "",
      Avatar:"",//头像
      AvatarBase:"",
      Name:"", //昵称
      Area:"",//地区 格式：'1级,2级'
      Trade:"", //行业 格式：'1级,2级'
      WorkLife:"",//年限
      Job:"",//职位
      WorkIdea:"", //理念
      WeChatNum:"", //微信号
      Contacts:"",
      ContactsTel:"",
      Email:"",
    }
  },
  onLoad() {
    this.setBarTitle();
  },
  onShow(){
    // console.log(this.$store.state.personInfo,"__________")
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.Avatar = this.$store.state.personInfo.Avatar
    this.Name = this.$store.state.personInfo.Name
    this.Job = this.$store.state.personInfo.Job
    this.Area = this.$store.state.personInfo.Area
    this.Trade = this.$store.state.personInfo.Trade
    this.WorkLife = this.$store.state.personInfo.WorkLife
    this.Contacts = this.$store.state.personInfo.Contacts
    this.WorkIdea = this.$store.state.personInfo.WorkIdea
    this.WeChatNum = this.$store.state.personInfo.WeChatNum
    this.Email = this.$store.state.personInfo.Email
    this.ContactsTel = this.$store.state.personInfo.ContactsTel
    this.AvatarwBase = this.$store.state.personInfo.AvatarwBase
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "编辑信息"
      });
    },
    initData(){
      this.Avatar = ""
      this.Name = ""
      this.Job = ""
      this.Area = ""
      this.Trade = ""
      this.WorkLife = ""
      this.WorkIdea = ""
      this.WeChatNum = "" 
      this.Contacts = ""
      this.ContactsTel = ""
      this.Email = ""
      this.AvatarwBase = ""
      const personInfo = {
          Avatar: this.Avatar,
          Name:  this.Name,
          Job:  this.Job,
          Area:  this.Area,
          WorkLife: this.WorkLife,
          WorkIdea:  this.WorkIdea,
          WeChatNum: this.WeChatNum,
          Contacts:  this.Contacts,
          ContactsTel: this.ContactsTel,
          Email: this.Email,
          Trade:this.Trade,
          AvatarwBase:this.AvatarwBase
      }
      this.$store.commit('update',{personInfo})
    },
    //验证
    valOther() {
      if(this.ContactsTel != ''){
        if(!(/^1[3|4|5|6|7|8][0-9]\d{4,8}$/.test(this.ContactsTel))){
          wx.showToast({
            title: "请输入正确的手机号码！",
            icon: "none",
            duration: 2000
          })
          return false
        }
      }
      if( this.Email != '' ){
        if(!(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(this.Email))){
          wx.showToast({
            title: "请输入正确的邮箱格式！",
            icon: "none",
            duration: 2000
          })
          return false
        }
      }
      return true;
    },
    // async base64Img(path) {
    //   const base64Arr = await pathToBase64(path);
    //   return base64Arr;
    // },
    //提交资料
    async submitPatic(){
      // console.log(this.Avatar,"///////////////")
      // let _Avatar = await this.base64Img(this.Avatar)
      // console.log(this.AvatarwBase,"**************")
      if(this.valOther()){
        post('User/UpdateMemberInfo',{
          UserId: this.userId,
          Token: this.token,
          Avatar: this.AvatarwBase,
          Name: this.Name,
          Job: this.Job,
          Area: this.Area,
          WorkLife: this.WorkLife,
          WeChatNum: this.WeChatNum,
          Contacts: this.Contacts,
          ContactsTel: this.ContactsTel,
          Email:this.Email,
          Trade:this.Trade,
          WorkIdea:  this.WorkIdea,
        },this.curPage).then(res=>{
          if(res.code==0){
            wx.showToast({
              title: "保存成功！",
              icon: "none",
              duration: 1500
            })
            setTimeout(()=>{
              wx.switchTab({url:'/pages/my/main'})
              this.initData()
            },1500)
          }
        })
      }
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
