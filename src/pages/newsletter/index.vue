<template>
  <div class="borderTop">
    <!--顶部输入框-->
    <div class="bg_fff flex flexAlignCenter pall">
      <img src="/static/images/icons/search.png" alt class="icon_search">
      <input
        type="text"
        placeholder="搜索"
        class="flex1 bg_fff"
        v-model="inputName"
        @input="changeSearch"
      >
    </div>
    <div class="slidebg"></div>
    <!--分组按钮-->
    <div class="bg_fff flex flexAlignCenter pall" @click="goTo">
      <img src="/static/images/icons/fenzu.jpg" alt class="icon_fenzu">
      <span>分组</span>
    </div>

    <div class="wrap" style="z-index:20">
      <IndexList
        :data="playerList"
        :hasSetStar="true"
        :hasData="hasData"
        @choose="onChoose"
        @btnDel="btnDelFriend"
        @setStar="btnSetStar"
        @onClick="onClick"
        v-if="hasplayerList"
      ></IndexList>
    </div>
  </div>
</template>

<script>
import IndexList from "@/components/IndexList.vue";
import { post, toLogin, getCurrentPageUrlWithArgs,getNewMsgDot } from "@/utils";
export default {
  data() {
    return {
      playerList: [],
      friendArr: [],
      curPage: "",
      userId: "",
      token: "",
      inputName:'',
      hasplayerList: false,
      hasData:false
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
    getNewMsgDot();
  },
  components: {
    IndexList
  },

  methods: {
    onClose(e) {
      console.log("关闭", e);
    },
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "通讯录"
      });
    },
    initData() {
      this.playerList = [];
      this.hasplayerList = false;
      this.friendArr = [];
      this.inputName = "";
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
                NickName: item.NickName,
                Headimgurl: item.Headimgurl,
                IsStar: item.IsStar,
                NoteName:item.NoteName
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
                  NickName: item2.NickName,
                  Headimgurl: item2.Headimgurl,
                  IsStar: item2.IsStar,
                  NoteName:item.NoteName
                });
              }
            });
          });
          // that.playerList.map(item=>{
          // console.log(item.title);
          // })
          // let arrSort = [
          //   {title:'a'},
          //   {title:'t'},
          //   {title:'r'},
          //   {title:'h'},
          //   {title:'y'},
          //   {title:'x'},
          // ]
          function aaa(a,b){
                const aa = a.title
                const bb = b.title
              if(aa>bb){
                return 1;
              }else if(aa==bb){
                return 0;
              }else{
                return -1;
              }
          }
          let playerList = that.playerList.sort(aaa)
          // arrSort.sort(aaa)
          console.log("_________________",playerList);
          playerList.map(item=>{
          console.log(item.title);
          })
          // function compare(prop){
          //   return function (a,b){
          //     return a[prop] - a[prop]
          //   }
          // }
          that.friendArr = that.playerList
          that.hasplayerList = true;
          that.hasData = true
        }
      });
    },
    DelFriends(friendId, pIndex, index) {
      let that = this;
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
            duration: 1500,
            success: function() {
              setTimeout(() => {
                that.initData();
                that.getFriends();
              }, 1500);
            }
          });
        }
      });
    },
    setStarFriends(id, IsStar, pIndex, index) {
      // IsStar:1:是  0：取消
      let str = "";
      if (IsStar == 0) {
        str = "设为星标好友成功！";
        IsStar = 1;
      } else {
        str = "取消星标好友成功！";
        IsStar = 0;
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
        if (res.code === 0) {
          wx.showToast({
            title: str,
            icon: "none",
            duration: 1500,
            success: function() {
              setTimeout(() => {
                that.initData();
                that.getFriends();
              }, 1500);
            }
          });
        }
      });
    },
    btnDelFriend(id, pIndex, index) {
      let that = this;
      //子组件点击删除好友的时候
      wx.showModal({
        title: "是否删除该好友？",
          confirmColor:'#ff952e',
          cancelColor:'#999',
        success(res) {
          if (res.confirm) {
            that.DelFriends(id, pIndex, index);
          } else if (res.cancel) {
            
          }
        }
      });
    },
    btnSetStar(id, isStar, pIndex, index) {
      console.log("dsdfsdfsdf");
      this.setStarFriends(id, isStar, pIndex, index);
    },
    // 点击了列表
    onClick(item){
      console.log("点击了++++++++++++",item);
        wx.navigateTo({url: '/pages/messages/chatRoom/main?FriendId='+item.Id})
    },
    onChoose() {
      console.log("点击了++++++++++++");
    },
    // 改变搜索内容
    changeSearch(){
      const value = this.inputName
      this.playerList =[]
      // debugger;
      this.friendArr.map(list=>{
        const listArr=[]
        list.items.map(item=>{
         const index =  item.NickName.indexOf(value)
         if(index!==-1){
           listArr.push(item)
         }
        })
        if(listArr.length>0){
          this.playerList.push({
            items:listArr,
            title:list.title
          })
        }
      })
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
