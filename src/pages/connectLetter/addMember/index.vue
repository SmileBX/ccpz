<template>
  <div v-if="isShow">
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
      <!-- <IndexList :data="playerList" @choose="onChoose" v-if="isShow" :friends="friendsList"></IndexList> -->
      <div class="index-list">
        <scroll-view
          scroll-y="true"
          @scroll="onListWrapScroll"
          ref="indexWrap"
          :scroll-top="scrollTop"
          id="scroll"
          class="sheight"
        >
          <ul class="index-list-wrap">
            <li
              v-for="(group,nindex) in playerList"
              :key="nindex"
              class="index-group"
              ref="indexGroup"
              :data-title="group.title"
              :class="'itemClient'+(nindex*1)"
            >
              <h3 class="index-group-title">{{group.title}}</h3>
              <ul>
                <li
                  @click="clickItem(item.Id,item.selected,nindex,sindex)"
                  v-for="(item,sindex) in group.items"
                  :key="sindex"
                  class="index-group-item"
                >
                  <div>
                    <input type="checkbox" class="checkbox-cart" :checked="item.selected">
                  </div>
                  <img :src="item.Headimgurl" class="avatar" alt>
                  <span class="name">{{item.NickName}}</span>
                </li>
              </ul>
            </li>
          </ul>
        </scroll-view>
        <!--字母-->
        <div class="index-nav">
          <ul>
            <li
              v-for="(item,index) in indexList"
              :key="index"
              @touchstart.prevent="_onTouchStartIndex(index)"
              :data-index="index"
              class="nav-item"
              :class="{'active':currentIndex===index}"
            >{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="btnSub2" @click="AddFriendsGroup">完成</div>
  </div>
</template>

<script>
// import IndexList from "@/components/IndexListMember.vue";
// import playerList from '@/utils/playlist.json'
import { post, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
const INDICATOR_INDURATION = 200;
const TITLE_HEIGHT = 30;
export default {
  data() {
    return {
      playerList: [],
      curPage: "",
      userId: "",
      token: "",
      groupId: "", //分组id
      groupName: "", //分组名称
      isShow: false,
      scrollTop: "",
      currentIndex: 0,
      moving: false,
      currentIndicator: ""
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
    }
    if (
      this.$root.$mp.query.groupName &&
      this.$root.$mp.query.groupName !== "undefined"
    ) {
      this.groupName = this.$root.$mp.query.groupName;
    }
    if (toLogin(this.curPage)) {
      this.GetFriendsForGroup();
    }
  },
  onReady() {
    //console.log(this.playerList,'playerList')
    this._calculateHeight();
  },
  watch: {
    currentIndex(newVal) {
      clearTimeout(this.timer);
      this.currentIndicator = this.indexList[this.currentIndex];
      this.moving = true;
      this.timer = setTimeout(() => {
        this.moving = false;
      }, INDICATOR_INDURATION);
    }
  },
  computed: {
    // indexList() {
    //   if (this.isShow) {
    //     // return this.playerList.map(group => {
    //     //   return group.title.substring(0, 1);
    //     // });
    //   }
    // }
  },
  components: {
    // IndexList
  },

  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "通讯录"
      });
    },
    initData() {
      this.playerList = [];
      this.isShow = false;
      this.scrollTop = "";
      this.currentIndex = 0;
      this.moving = false;
      this.currentIndicator = "";
    },
    AddFriendsGroup() {
      //创建分组
      let that = this;
      let selectedFriends = [];
      that.playerList.forEach(item => {
        item.items.forEach(item2 => {
          if (item2.selected) {
            selectedFriends.push(item2.Id);
          }
        });
      });
      if (selectedFriends.length <= 0) {
        wx.showToast({
          title: "请选择要添加的好友!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      // that.$store.commit("update", { selectedFriends });
      // let objUrl = '';
      // if(that.groupId !=="" && that.groupId){
      //   objUrl = "/pages/connectLetter/addNewTeam/main?groupId="+that.groupId;
      // }else{
      //   objUrl = "/pages/connectLetter/addNewTeam/main";
      // }
      // wx.redirectTo({
      //   url: objUrl
      // });
      post(
        "User/AddFriendsGroup",
        {
          UserId: that.userId,
          Token: that.token,
          GroupName: that.groupName,
          FriendId: selectedFriends.join(",")
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          wx.showToast({
            title: "创建成功!",
            icon: "none",
            duration: 1500,
            success: function() {
              wx.redirectTo({
                url:
                  "/pages/connectLetter/addNewTeam/main?groupId=" +
                  res.data.GroupId +
                  "&groupName=" +
                  that.groupName
              });
            }
          });
        }
      });
    },
    GetFriendsForGroup() {
      //获取没有分组的好友
      let that = this;
      post(
        "User/GetFriendsForGroup",
        {
          UserId: that.userId,
          Token: that.token,
          GroupId: 0
        },
        that.curPage
      ).then(res => {
        if (res.code === 0 && res.data.length > 0) {
          that.getResetFriends(res.data);
        }
      });
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

      that.isShow = true;
    },
    _calculateHeight() {
      this.listHeight = [];
      const list = this.playerList;
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < list.length; i++) {
        let item = list[i];
        var query = wx.createSelectorQuery();
        query
          .select(".itemClient" + i * 1)
          .boundingClientRect(rect => {
            height += rect.height;
            this.listHeight.push(height);
          })
          .exec();
      }
    },
    _onTouchStartIndex(index) {
      this.currentIndex = index;
      var query = wx.createSelectorQuery();
      query
        .select("#scroll")
        .boundingClientRect(rect => {
          this.scrollTop = this.listHeight[index];
        })
        .exec();
    },
    clickItem(id, isSelected, pIndex, index) {
      if (isSelected) {
        this.$set(this.playerList[pIndex].items[index], "selected", false);
      } else {
        this.$set(this.playerList[pIndex].items[index], "selected", true);
      }
    },
    onListWrapScroll(e) {
      clearTimeout(this.scrollTimer);
      this.scrollTimer = setTimeout(() => {
        let scrollTop = e.mp.detail.scrollTop;
        const listHeight = this.listHeight;
        for (let i = 0; i < listHeight.length - 1; i++) {
          if (
            scrollTop <= listHeight[i + 1] - TITLE_HEIGHT &&
            scrollTop >= listHeight[i]
          ) {
            this.currentIndex = i;
            // console.log(this.currentIndex,"i+++++++++")
            return;
          }
        }
      }, 10);
    }
  }
};
</script>
<style lang="scss" scoped>
.wrap {
  position: fixed;
  top: 120rpx;
  bottom: 90rpx;
  width: 100%;
}
.index-list {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  .index-list-wrap {
    // height: 100%;
    // overflow: auto;
    -webkit-overflow-scrolling: touch; //#issue-368550974
  }

  .index-group {
    padding-bottom: 20rpx;
  }

  .index-group-title {
    height: 60rpx;
    line-height: 60rpx;
    padding-left: 40rpx;
    font-size: 28rpx;
    color: #333;
    background: #f2f2f2;
  }

  .index-group-item {
    display: flex;
    align-items: center;
    padding: 20rpx 0 0 30rpx;
    list-style: none;
    .avatar {
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
      margin-left: 20rpx;
    }

    .name {
      margin-left: 40rpx;
      color: #333;
      font-size: 28rpx;
    }
  }
  // .index-group-item:after{
  //   position: absolute;
  //   content: "";
  //   height: 1px;
  //   width: 100%;
  //   background: #ececec;
  //   bottom:0;
  // }
  .index-nav {
    position: absolute;
    right: 15rpx;
    top: 50%;
    z-index: 100;
    width: 40rpx;
    padding: 30rpx 0;
    text-align: center;
    border-radius: 10;
    background: transparent;
    transform: translateY(-50%);

    .nav-item {
      padding: 6rpx;
      font-size: 23rpx;
      color: #333;
      list-style: none;

      &.active {
        color: #fff;
        width: 30rpx;
        height: 30rpx;
        border-radius: 50%;
        line-height: 30rpx;
        background: #ff9325;
      }
    }
  }

  .index-indicator {
    position: absolute;
    width: 100rpx;
    height: 100rpx;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 100rpx;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 35rpx;
    border-radius: 10rpx;
    pointer-events: none;
  }
}

.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.sheight {
  height: calc(100vh - 215rpx);
}
</style>
