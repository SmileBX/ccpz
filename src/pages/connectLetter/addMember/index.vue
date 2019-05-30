<template>
  <div>
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
    <div class="wrap">
      <IndexList
        :data="playerList"
        @choose="onChoose"
        v-if="hasplayerList"
        :friends="friendsLst"
      ></IndexList>
    </div>
    <div class="btnSub2" @click="completeMember">完成</div>
  </div>
</template>

<script>
import IndexList from "@/components/IndexListMember.vue";
// import playerList from '@/utils/playlist.json'
import { post, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
export default {
  data() {
    return {
      playerList: [],
      curPage: "",
      userId: "",
      token: "",
      hasplayerList: false,
      friendsLst:[]
    };
  },
  onLoad() {
    this.setBarTitle();
    console.log(this.playerList);
  },
  onShow(){
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.initData();
   this.getFriends();
  },
  components: {
    IndexList
  },

  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "通讯录"
      });
    },
    initData() {
      this.playerList = [];
      this.hasplayerList = false;
    },
    completeMember() {
      wx.navigateTo({ url: "/pages/connectLetter/addNewTeam/main" });
    },
    onChoose(){
      //选择好友
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
          that.hasplayerList = true;
        }
      });
    }
    // goGroup(){
    //   wx.navigateTo({url: '/pages/pagesNewsletter/group/main'})
    // }
  },

  created() {
    // let app = getApp()
  }
};
</script>
<style>
.wrap {
  position: fixed;
  top: 120rpx;
  bottom: 90rpx;
  width: 100%;
}
</style>
