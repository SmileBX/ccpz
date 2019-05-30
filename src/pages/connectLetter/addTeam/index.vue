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
    <div class="bg_fff group boxSize" style="padding:0;">
      <van-swipe-cell
        :right-width="65"
        class="swipe-cell"
        v-for="(item,index) in list"
        :key="index"
        
      >
        <van-cell-group>
          <van-cell>
            <div class="teamitem flexAlignCenter flex" @click="gotoAddNewTeam(item.Id,item.Name)">
              <block v-if="item.PicList.length===0">
                <img src="/static/images/icons/ava_bg.jpg" class="avatar" style="width:86rpx;height:86rpx;margin-right:30rpx;" alt="">
              </block>
              <block v-if="item.PicList.length<=4 && item.PicList.length>0">
                <div
                  class="avatarbox mrr2 flex justifyContentCenter flexAlignCenter alignContentCenter"
                  :class="'num_'+item.PicList.length"
                >
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
                <div
                  class="avatarbox mrr2 flex justifyContentCenter flexAlignCenter alignContentCenter"
                >
                  <img
                    :src="item2"
                    alt
                    class="avatar"
                    v-for="(item2,index2) in item.picList"
                    :key="index2"
                  >
                </div>
              </block>

              <div class="flex1 text_l">
                <p class="flex1 name">{{item.Name}}</p>
              </div>
              <div>
                <span class="icon-arrow arrow-right"></span>
              </div>
            </div>
          </van-cell>
        </van-cell-group>
        <span slot="right" class="van-swipe-cell__right" @click.stop="Delete(index,item.Id)">删除</span>
      </van-swipe-cell>
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
    Delete(index, id) {
      let that = this;
      wx.showModal({
        title: "是否删除该分组？",
        success(res) {
          if (res.confirm) {
            that.DelFriendsGroup(index,id);
          } else if (res.cancel) {
          }
        }
      });
      //点击删除按钮
    },
    gotoAddNewTeam(id, name) {
      console.log("fsdfsdfsd__________");
      wx.navigateTo({
        url:
          "/pages/connectLetter/addNewTeam/main?groupId=" +
          id +
          "&groupName=" +
          name
      });
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
        if (res.code === 0) {
          if (res.data.length > 0) {
            that.list = res.data;
          }
        }
      });
    },
    DelFriendsGroup(index,GroupId) {
      //删除好友分组
      let that = this;
      post(
        "User/DelFriendsGroup",
        {
          UserId: that.userId,
          Token: that.token,
          GroupId
        },
        that.curPage
      ).then(res => {
        if(res.code===0){
          wx.showToast({
            title: '删除分组成功!',
            icon: 'none',
            duration: 1500,
            success:function(){
              that.list.splice(index,1);
            }
          })
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.group .avatarbox {
  width: 86rpx;
  height: 86rpx;
  border-radius: 50%;
  overflow: hidden;
  background: #ccc;
  position: relative;
  flex-flow: row wrap-reverse;
  margin-right: 30rpx;
  .avatar {
    width: 28rpx;
    height: 28rpx;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 0 !important;
  }
  &.num_3,
  &.num_2,
  &.num_1 {
    .avatar {
      width: 43rpx;
      height: 43rpx;
    }
  }
  &.num_4 {
    .avatar {
      width: 43rpx;
      height: 43rpx;
    }
  }
}
.btn-addTeam {
  font-size: 32rpx;
  .icon_add2 {
    width: 34rpx;
    height: 34rpx;
  }
}
.group /deep/ .van-cell {
  padding: 0;
}
.van-swipe-cell__left,
.van-swipe-cell__right {
  display: inline-block;
  // height: 100%;
  width: 130rpx;
  height: 126rpx;
  font-size: 28rpx;
  line-height: 126rpx;
  color: #fff;
  text-align: center;
  background-color: #f44;
  position: relative;
  vertical-align: top;
  .icon-star {
    width: 40rpx;
    height: 40rpx;
    position: absolute;
    top: 50%;

    left: 0;
    right: 0;
    margin: 0 auto;
    margin-top: -20rpx;
  }
}
.group /deep/ .van-hairline--top::after,
.group /deep/ .van-hairline--left::after,
.group /deep/ .van-hairline--right::after,
.group /deep/ .van-hairline--bottom::after,
.group /deep/ .van-hairline--top-bottom::after,
.group /deep/ .van-hairline--surround::after {
  display: none !important;
}
.teamitem {
  height: 86rpx;
  line-height: 86rpx;
  padding: 20rpx 30rpx;
  color: #333;
  .name {
    font-size: 32rpx;
  }
}
</style>

