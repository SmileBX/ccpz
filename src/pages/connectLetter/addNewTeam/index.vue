<template>
  <div class="page borderTop addteam">
    <!--输入框-->
    <div class="bg_fff flex flexAlignCenter pall" style="display:none;">
      <img src="/static/images/icons/search.png" alt class="icon_search">
      <input type="text" placeholder="搜索" class="flex1">
    </div>
    <div class="slidebg"></div>
    <!--分组名称-->
    <div class="bg_fff flex flexAlignCenter justifyContentBetween pall">
      <p>分组名称</p>
      <input
        type="text"
        placeholder="设置分组名称"
        v-model="groupName"
        class="flex2"
        style="font-size:30rpx;text-align:right"
      >
    </div>
    <div class="slidebg"></div>
    <!--添加成员-->
    <div class="bg_fff flex flexAlignCenter pall" @click="addMember">
      <img src="/static/images/icons/add2.jpg" alt class="icon_add2">
      <span class="fontColor99">添加成员</span>
      <span class="fontColor flex1" style="text-align:right">(2)</span>
    </div>
    <!--组列表-->
    <div class="boxSize">
      <!--字母-->
      <div class="lettertip">A</div>
      <!--字母对应的列表-->
      <van-swipe-cell :right-width="65" :on-close="onClose" class="swipe-cell">
        <van-cell-group>
          <van-cell class>
            <div class="flexAlignCenter flex">
              <div class="avatarbox mrr2">
                <img src="/static/images/of/ava.png" alt class="avatar">
              </div>
              <p class="flex1 fontBold listname">兄弟姐妹</p>
            </div>
          </van-cell>
        </van-cell-group>
        <span slot="right" class="van-swipe-cell__right">删除</span>
      </van-swipe-cell>
      <van-swipe-cell :right-width="65" :on-close="onClose" class="swipe-cell">
        <van-cell-group>
          <van-cell class>
            <div class="flexAlignCenter flex">
              <div class="avatarbox mrr2">
                <img src="/static/images/of/ava.png" alt class="avatar">
              </div>
              <p class="flex1 fontBold listname">兄弟姐妹</p>
            </div>
          </van-cell>
        </van-cell-group>
        <span slot="right" class="van-swipe-cell__right">删除</span>
      </van-swipe-cell>
      <van-swipe-cell :right-width="65" :on-close="onClose" class="swipe-cell">
        <van-cell-group>
          <van-cell class>
            <div class="flexAlignCenter flex">
              <div class="avatarbox mrr2">
                <img src="/static/images/of/ava.png" alt class="avatar">
              </div>
              <p class="flex1 fontBold listname">兄弟姐妹</p>
            </div>
          </van-cell>
        </van-cell-group>
        <span slot="right" class="van-swipe-cell__right">删除</span>
      </van-swipe-cell>
    </div>
    <!--底部按钮-->
    <div class="btnSub2" @click="btnSubmit">完成</div>
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
      groupName: "", //分组名称
      groupId: "", //分组id
      friendIdArr: []
    };
  },
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    
    if(this.$root.$mp.query.groupId && this.$root.$mp.query.groupId !=="undefined"){
      this.groupId = this.$root.$mp.query.groupId;
      this.groupName = this.$root.$mp.query.groupName;
      console.log("名称："+this.groupName);
      this.GetFriendsForGroup();
    }

  },
  components: {},

  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "新建分组"
      });
    },
    addMember() {
      // if(this.groupId=="" || this.groupId=="undefined"){
      //   this.AddFriendsGroup();
      // }
      wx.navigateTo({ url: "/pages/connectLetter/addMember/main" });
    },
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case "left":
        case "cell":
        case "outside":
          instance.close();
          break;
        case "right":
          Dialog.confirm({
            message: "确定删除吗？"
          }).then(() => {
            instance.close();
          });
          break;
      }
    },
    // AddFriendsGroup(){  //新建分组
    //   let that = this;
    //   post("User/AddFriendsGroup",{
    //     UserId:that.userId,
    //     Token:that.token,
    //     GroupName:that.groupName
    //   },that.curPage).then(res => {
    //      if(res.code===0){
    //        that.groupId = res.data;
    //      }
    //   })
    // },
    AddFriendsGroup() {
      //把好友加入分组
      let that = this;
      post(
        "User/AddFriendsGroup",
        {
          UserId: that.userId,
          Token: that.token,
          GroupName: that.groupName,
          FriendId: that.friendIdArr.join(",")
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          wx.showToast({
            title: "创建成功!",
            icon: "none",
            duration: 1500
          });
        }
      });
    },
    // EditFriendsGroup(){  //编辑好友组名
    //   let that = this;
    //   post("User/EditFriendsGroup",{
    //     UserId:that.userId,
    //     Token:that.token,
    //     GroupId:that.groupId,
    //     GroupName:that.groupName
    //   },that.curPage).then(res => {

    //   })
    // },
    GetFriendsForGroup(){  //获取某个分组里面的好友
       let that = this;
       post("User/GetFriendsForGroup",{
         UserId:that.userId,
         Token:that.token,
         GroupId:that.groupId
       },that.curPage).then(res => {
         
       })

    },
    btnSubmit() {
      if (this.groupName == "") {
        wx.showToast({
          title: "请输入分组名称！",
          icon: "none",
          duration: 1500
        });
      }else{
        this.AddFriendsGroup();
      }
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>
<style lang='scss' scoped>
@import "./index";
.swipe-cell {
  // width:100%!important;
  // height:200rpx!important;
}
// .delper{
//   background:#f00;
//   color:#fff;
//   height:100%;
//   width:65rpx;
// }
.van-swipe-cell__left,
.van-swipe-cell__right {
  display: inline-block;
  width: 130rpx;
  height: 120rpx;
  font-size: 28rpx;
  line-height: 120rpx;
  color: #fff;
  text-align: center;
  background-color: #f44;
}
</style>
