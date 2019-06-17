<template>
  <div class="page">
      <div class="head bg_fff ">
        <!--头像部分-->
          <div class="flex avatarhead">
              <div class="avatarbox">
                  <img src="/static/images/of/ava.png" alt="" class="avatar">
              </div>
              <div class="flex1">
                  <p>哈哈哈哈</p>
                  <p class="font_four">女 27岁 深圳</p>
              </div>
          </div>
          <!--填写验证信息-->
          <div class="vertical flex flexColumn">
              <p class="font_four">填写验证信息</p>
              <input type="text" v-model="verMsg" placeholder="我是..." class="flex1 yanz">
          </div>
      </div>
      <div class="setclass">设置备注与分组</div>
      <div class="bg_fff group boxSize">
          <div class="flex flexAlignCenter slide boxSize sign">
              <p>备注</p>
              <input type="text"  v-model="specName" class="flex1">
          </div>
          <div class="flex flexAlignCenter slide boxSize">
              <p>分组</p>
              <p class="flex flex1">
                  <input type="text"  v-model="specPlace" class="flex1">
                  <span class="icon-arrow arrow-right"></span>
              </p>
          </div>
      </div>
      <!--加好友-->
      <div class="btnSub addtop" @click="addFriend">加好友</div>
  </div>
</template>

<script>
import {post,getLocation} from '@/utils'
export default {
  data () {
    return {
      userId:'',
      token:'',
      FriendId:'16',
      lat:0,
      lng:0,
      verMsg:'',
      specName:'傻不傻',
      specPlace:'我的好友',
    }
  },
  onLoad() {
    this.setBarTitle();
    if(this.$root.$mp.query.FriendId){
      this.FriendId = this.$root.$mp.query.FriendId
    }
    const res =getLocation()
      console.log(res)
      this.lat = res.latitude;
      this.lng=res.longitude;
  },
  onShow(){
    this.userId = wx.getStorageSync('userId')
    this.token = wx.getStorageSync('token')

  },

  components: {
  },

  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "添加好友"
      });
    },
    initData(){
      this.verMsg ='';
    },
    // 添加好友
    async addFriend(){
      const res = await post('User/Addfriend_req',{
        UserId:this.userId,
        Token:this.token,
        FriendId:this.FriendId,
        AuthInfo:this.verMsg,
        Lat:this.lat,
        Lng:this.lng
      })
      if(res.code==0){
      wx.showToast({
        title:'发送成功!'
      })
      }
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>
