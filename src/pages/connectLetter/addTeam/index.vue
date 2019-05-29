<template>
  <div class="page borderTop addteam">
    <!--输入框-->
    <div class="bg_fff flex flexAlignCenter pall" style="display:none;">
      <img src="/static/images/icons/search.png" alt class="icon_search">
      <input type="text" placeholder="搜索" class="flex1">
    </div>
    <div class="slidebg"></div>
    <!--分组按钮-->
    <div class="bg_fff flex flexAlignCenter pall btn-addTeam color_ff952e" @click="addTeam">
      <img src="/static/images/icons/add2.jpg" alt class="icon_add2">
      <span>新建分组</span>
    </div>
    <div class="slidebg"></div>
    <!--组列表-->
    <div class="bg_fff group boxSize">
      <div class="teamitem flexAlignCenter flex p25" v-for="(item,index) in list" :key="index" @click="gotoAddNewTeam(item.Id,item.Name)">
        <block v-if="item.PicList.length<=4 && item.PicList.length>0">
          <div class="avatarbox mrr2 flex justifyContentCenter flexAlignCenter alignContentCenter" :class="'num_'+item.PicList.length">
            <img
              :src="item2"
              alt
              class="avatar"
              v-for="(item2,index2) in item.PicList"
              :key="index2"
            >
          </div>
        </block>
        <block v-if="item.PicList.length>4">
          <div class="avatarbox mrr2 flex justifyContentCenter flexAlignCenter alignContentCenter">
            <img
              :src="item2"
              alt
              class="avatar"
              v-for="(item2,index2) in item.picList"
              :key="index2"
            >
          </div>
        </block>

        <div class="flex1">
          <p class="flex1">{{item.Name}}</p>
        </div>
        <div>
          <span class="icon-arrow arrow-right"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { post, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
export default {
  data() {
    return {
      verMsg: "我是",
      curPage: "",
      userId: "",
      token: "",
      list: []
    };
  },
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    if (toLogin(this.curPage)) {
      this.GetFriendsGroup();
    }
  },
  components: {},

  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "分组"
      });
    },
    addTeam() {
      wx.navigateTo({ url: "/pages/connectLetter/addNewTeam/main" });
    },
    gotoAddNewTeam(id,name){
      wx.navigateTo({ url: "/pages/connectLetter/addNewTeam/main?groupId="+id+"&groupName="+name });
    },
    GetFriendsGroup() {
      let that = this;
      post(
        "User/GetFriendsGroup",
        {
          UserId: that.userId,
          Token: that.token
        },
        that.curPage
      ).then(res => {
        if(res.code===0){
          if(res.data.length>0){
            that.list = res.data;
          }
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.group .avatarbox {
  width: 90rpx;
  height: 90rpx;
  border-radius: 50%;
  overflow: hidden;
  background: #ccc;
  position: relative;
  flex-flow: row wrap-reverse;
  margin-right: 30rpx;
  .avatar {
    width: 30rpx;
    height: 30rpx;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 0 !important;
  }
  &.num_3,&.num_2,&.num_1{
    .avatar{
      width: 45rpx;
      height: 45rpx;
    }
  }
  &.num_4{
    .avatar{
      width: 45rpx;
      height: 45rpx;
    }
  }
}
.btn-addTeam{
  font-size: 32rpx;
  .icon_add2{
    width: 34rpx;
    height: 34rpx;
  }
}
</style>

