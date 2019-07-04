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
      <span class="fontColor flex1" style="text-align:right">&nbsp;</span>
    </div>
    <!--组列表-->
    <div class="boxSize">
      <IndexList :data="playerList" @btnDel="btnDelFriend" @setStar="btnSetStar" v-if="isShow"></IndexList>
    </div>
    <!--底部按钮-->
    <div class="btnSub2" @click="btnSubmit">完成</div>
  </div>
</template>

<script>
import { post, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
import IndexList from "@/components/IndexList.vue";
export default {
  data() {
    return {
      verMsg: "我是",
      curPage: "",
      userId: "",
      token: "",
      groupName: "", //分组名称
      groupId: "", //分组id
      playerList: [], //重组过后的
      isShow: false
    };
  },
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    this.initData();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    if (
      this.$root.$mp.query.groupId &&
      this.$root.$mp.query.groupId !== "undefined"
    ) {
      this.groupId = this.$root.$mp.query.groupId;
      this.groupName = this.$root.$mp.query.groupName;
      this.GetFriendsForGroup();
    }
  },
  components: {
    IndexList
  },

  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "新建分组"
      });
    },
    initData() {
      this.playerList = []; //重组过后的
      this.isShow = false;
      // this.groupName = "";
      this.groupId =""; //分组id
      this.groupName =""; //分组名称
    },
    getResetFriends(arr) {
      let that = this;
      let strArr = [];
      arr.forEach(item => {
        strArr.push(item.FirstCode);
      });
      strArr = Array.from(new Set(strArr)); //数组去重
      strArr.forEach(item => {
        that.playerList.push({ title: item, items: [] });
      });
      arr.forEach(item2 => {
        that.playerList.forEach(item => {
          if (item2.FirstCode == item.title) {
            item.items.push({
              Id: item2.Id,
              NickName: item2.NickName,
              Headimgurl: item2.Headimgurl,
              IsStar: item2.IsStar,
              NoteName: item2.NoteName
            });
          }
        });
      });
      console.log("这个是组合好的@@@@@@@@@@@@@");
      console.log(that.playerList);
      that.isShow = true;
    },
    addMember() {
      //点击添加成员
      if (!this.groupName || this.groupName == "") {
        wx.showToast({
          title: "请输入分组名称！",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      let objUrl = "";
      if (this.groupId && this.groupId !== "") {
        objUrl =
          "/pages/connectLetter/addMember/main?groupId=" +
          this.groupId +
          "&groupName=" +
          this.groupName;
      } else {
        objUrl =
          "/pages/connectLetter/addMember/main?groupName=" + this.groupName;
      }
      wx.navigateTo({ url: objUrl });
    },
    // onClose(clickPosition, instance) {
    //   switch (clickPosition) {
    //     case "left":
    //     case "cell":
    //     case "outside":
    //       instance.close();
    //       break;
    //     case "right":
    //       Dialog.confirm({
    //         message: "确定删除吗？"
    //       }).then(() => {
    //         instance.close();
    //       });
    //       break;
    //   }
    // },
    GetFriendsForGroup() {
      //获取某个分组里面的好友
      let that = this;
      post(
        "User/GetFriendsForGroup",
        {
          UserId: that.userId,
          Token: that.token,
          GroupId: that.groupId
        },
        that.curPage
      ).then(res => {
        if (res.code === 0 && res.data.length) {
          that.getResetFriends(res.data);
        }
      });
    },
    EditFriendsGroup() {
      //编辑好友分组
      let that = this;
      post(
        "User/EditFriendsGroup",
        {
          UserId: that.userId,
          Token: that.token,
          GroupId: that.groupId,
          GroupName: that.groupName
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          wx.showToast({
            title: "编辑成功!",
            icon: "none",
            duration: 1500
          });
        }
      });
    },
      //没有选择组员的时候，创建分组
    AddFriendsGroup() {
      let that = this;
      post(
        "User/AddFriendsGroup",
        {
          UserId: that.userId,
          Token: that.token,
          GroupName: that.groupName
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          wx.showToast({
            title: "创建成功",
            icon: "none",
            duration: 1500
          });
        }
      });
    },
    btnSubmit() {
      if (this.groupName == "" || !this.groupName) {
        wx.showToast({
          title: "请输入分组名称！",
          icon: "none",
          duration: 1500
        });
      } else {
        if (this.groupId && this.groupId !== "") {
          this.EditFriendsGroup();
        } else {
          this.AddFriendsGroup();
        }
        setTimeout(()=>{
          wx.navigateBack()
        },1500)
      }
    },
    GroupRemoveFriends(id) {
      let that = this;
      //移除某个分组中的好友
      post(
        "User/GroupRemoveFriends",
        {
          UserId: that.userId,
          Token: that.token,
          FriendId: id
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          wx.showToast({
            title: "删除分组成员成功!",
            icon: "none",
            duration: 1500,
            success: function() {
              setTimeout(()=>{
                // that.initData();
                that.playerList = []; //重组过后的
                that.isShow = false;
                that.GetFriendsForGroup();
              },1500)
              
            }
          });
        }
      });
    },
    btnDelFriend(id) {
      //点击删除某分组中的某个好友的时候
      //子组件点击删除好友的时候
      let that = this;
      wx.showModal({
        title: "是否删除该分组中的成员？",
          confirmColor:'#ff952e',
          cancelColor:'#999',
        success(res) {
          if (res.confirm) {
            that.GroupRemoveFriends(id);
          } else if (res.cancel) {

          }
        }
      });
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>
<style lang='scss' scoped>
@import "./index";
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
