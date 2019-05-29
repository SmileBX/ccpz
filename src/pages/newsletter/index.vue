<template>
  <div class="borderTop">
    <!--顶部输入框-->
    <div class="bg_fff flex flexAlignCenter pall">
      <img src="/static/images/icons/search.png" alt class="icon_search">
      <input
        type="text"
        placeholder="搜索"
        class="flex1 bg_fff"
        :value="inputName"
        @input="bindKeyInput"
      >
    </div>
    <div class="slidebg"></div>
    <!--分组按钮-->
    <div class="bg_fff flex flexAlignCenter pall" @click="goTo">
      <img src="/static/images/icons/fenzu.jpg" alt class="icon_fenzu">
      <span>分组</span>
    </div>

    <div class="wrap" style="z-index:20">
      <van-swipe-cell :right-width="65" :left-width="65" @click="onClose">
        <span slot="left">选择</span>
        <van-cell-group>
          <van-cell title="单元格" value="内容"/>
        </van-cell-group>
        <span slot="right">删除</span>
      </van-swipe-cell>
      <!-- <IndexList
        :data="playerList"
        @choose="onChoose"
        @btnDel="btnDelFriend"
        @setStar="btnSetStar"
        v-if="hasplayerList"
      ></IndexList> -->
    </div>
  </div>
</template>

<script>
import IndexList from "@/components/IndexList.vue";
// import SwipeCell  from "../../../../static/vant/swipe-cell/index";
// import playerList from "@/utils/playlist.json";
import { post, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
export default {
  data() {
    return {
      playerList: [],
      curPage: "",
      userId: "",
      token: "",
      hasplayerList: false
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
    this.getFriends();
  },
  components: {
    IndexList
  },

  methods: {
    onClose(clickPosition) { 
     
    },
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "通讯录"
      });
    },
    initData() {
      this.playerList = [];
      this.hasplayerList = false;
    },
    goTo() {
      wx.navigateTo({ url: "/pages/connectLetter/addTeam/main" });
    },
    getFriends() {
      let that = this;
      post(
        "User/GetFriends",
        {
          UserId: that.userId,
          Token: that.token
        },
        that.curPage
      ).then(res => {
        console.log(res);

        if (res.code === 0 && res.data.length > 0) {
          let strArr = [];
          let starArr = []; //星标
          res.data.forEach(item => {
            if (item.IsStar !== 1) {
              strArr.push(item.FirstCode);
            } else {
              starArr.push(item);
            }
          });
          if (starArr.length > 0) {
            that.playerList.push({ title: "星标好友", items: [] });
            starArr.forEach(item => {
              that.playerList[0].items.push({
                Id: item.Id,
                name: item.NickName,
                avatar: item.Headimgurl,
                IsStar: item.IsStar
              });
            });
          }

          strArr = Array.from(new Set(strArr)); //数组去重
          strArr.forEach(item => {
            that.playerList.push({ title: item, items: [] });
          });
          console.log(that.playerList);
          res.data.forEach(item2 => {
            that.playerList.forEach(item => {
              if (item2.FirstCode == item.title) {
                item.items.push({
                  Id: item2.Id,
                  name: item2.NickName,
                  avatar: item2.Headimgurl,
                  IsStar: item2.IsStar
                });
              }
            });
          });
          console.log("_________________");
          console.log(that.playerList);
          that.hasplayerList = true;
        }
      });
    },
    DelFriends(friendId) {
      //删除好友
      post(
        "User/DelFriends",
        {
          UserId: that.userId,
          Token: that.token,
          FriendId: friendId
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          wx.showToast({
            title: "删除好友成功!",
            icon: "none",
            duration: 1500
          });
        }
      });
    },
    setStarFriends(id, IsStar, pIndex, index) {
      // IsStar:1:是  0：取消
      let str = "";
      if (IsStar == 0) {
        str = "取消星标好友成功！";
      } else {
        str = "设为星标好友成功！";
      }
      let that = this;
      post(
        "User/StarFriends",
        {
          UserId: that.userId,
          Token: that.token,
          FriendId: id,
          IsStar
        },
        that.curPage
      ).then(res => {
        wx.showToast({
          title: str,
          icon: "none",
          duration: 1500,
          success: function() {
            that.$set(that.playerList[pIndex].items[index], "IsStar", IsStar);
          }
        });
      });
    },
    btnDelFriend(id) {
      //子组件点击删除好友的时候
      DelFriends(id);
    },
    btnSetStar(id, isStar, pIndex, index) {
      console.log("dsdfsdfsdf");
      this.setStarFriends(id, isStar, pIndex, index);
    },
    onChoose() {
      console.log("点击了++++++++++++");
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>
<style>
.wrap {
  position: fixed;
  top: 300rpx;
  bottom: 0;
  width: 100%;
}
</style>
