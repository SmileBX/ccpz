<template>
  <div class="pageContent">
    <div class="filterMenu bg_fff" style="padding:0;">
      <ul class="menu bbNo__menu bbLi__menu li_50 flex center">
        <li :class="{'active':tabIndex===0}" @click="shiftTab(0)">
          <div class="item">信息</div>
        </li>
        <li :class="{'active':tabIndex===1}" @click="shiftTab(1)">
          <div class="item">谁看过我</div>
        </li>
      </ul>
    </div>
    <scroll-view
      class="filterContent"
      scroll-y="true"
      @scrolltolower="moreLoad"
      v-if="list.length>0"
    >
      <!-- 信息 -->
      <div class="column levelPanel storeList" style="padding:0;" v-if="tabIndex===0">
        <block v-for="(item,index) in list" :key="index">
          <div
            class="section__hd bg_fff"
            v-if="index===0 || list[index-1].DateStr !== item.DateStr"
            style="margin-top:20rpx;"
          >
            <span class="time">{{item.DateStr}}</span>
          </div>
          <van-swipe-cell
            :right-width="65"
            async-close
            @close="btnDelFootPrint($event,item.Id,index)"
            class="swipe-cell"
          >
            <van-cell-group>
              <van-cell class="item">
                <div class="outside" @click.stop="gotoDetail(item.ProId,item.BrandId)">
                  <div class="pictrueAll">
                    <div class="pictrue img">
                      <img :src="item.PicNo" alt>
                    </div>
                  </div>
                  <div class="txtBox text_l">
                    <p class="title ellipsis" style="color:#333;">
                      <span class="typeName" v-if="item.TypeName !==''">{{item.TypeName}}</span>
                      {{item.Title}}
                    </p>
                    <p class="msgList" style="margin-top:20rpx;">
                      <span class="typeName msgItem" v-if="item.TypeName !==''">{{item.TypeName}}</span>
                      <span class="msgItem">{{item.GladBuyArea}}</span>
                    </p>
                    <div class="flex" style="margin-top:38rpx;">
                      <p class="priceArea flex1 flexAlignCenter">
                        <span class="price">￥{{item.PropertyPrice}}</span>
                      </p>
                      <span class="time">{{item.TimeStr}}</span>
                    </div>
                  </div>
                </div>
              </van-cell>
            </van-cell-group>
            <span
              slot="right"
              class="van-swipe-cell__right flex flexAlignCenter justifyContentCenter"
            >删除</span>
          </van-swipe-cell>
        </block>
      </div>
      <!-- 谁看过我 -->
      <div class="weui-cells readList readList2" style="background:none !important;" v-if="tabIndex===1">
        <block v-for="(item,index) in list" :key="index">
          <van-swipe-cell
            :right-width="65"
            async-close
            @close="btnDelFootPrint($event,item.Id,index)"
            class="swipe-cell"
          >
            <van-cell-group>
              <van-cell class="item">
                <div class="weui-cell" @click.stop="gotoPerson(item.ShopId)">
                  <img :src="item.Avatar" class="tx" alt>
                  <div class="weui-cell__bd text_l">
                    <p>
                      <span class="name">{{item.Name}}</span>
                      <img src="/static/images/icons/v.jpg" class="icon_attestation" alt>
                    </p>
                    <p class="msgList" v-if="item.Company !==''">
                      <span class="msgItem">{{item.Company[0].Job}}</span>
                      <span class="msgItem">{{item.Company[0].Name}}</span>
                    </p>
                  </div>
                  <span class="time">{{item.AddTimeStr}}到访</span>
                </div>
              </van-cell>
            </van-cell-group>
            <span
              slot="right"
              class="van-swipe-cell__right flex flexAlignCenter justifyContentCenter"
            >删除</span>
          </van-swipe-cell>
        </block>
      </div>
      <div class="noData center" style="padding:60rpx 30rpx;" v-if="list.length<1 && page===1">暂无数据</div>
      <div
        class="noData center"
        style="margin-top:0;line-height:80rpx;"
        v-if="hasDataList&& page!==1"
      >我也是有底线的!</div>
    </scroll-view>
  </div>
</template>
<script>
import { post, valPhone, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
export default {
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.MemberFootprint();
  },
  data() {
    return {
      tabIndex: 0, //0：我的浏览；1：谁看过我
      userId: "",
      token: "",
      curPage: "",
      page: 1,
      pageSize: 15,
      list: [],
      isOver: false,
      hasDataList: false
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "我的浏览"
      });
    },
    initData() {
      this.page = 1;
      this.list = [];
      this.isOver = false;
      this.hasDataList = false;
    },
    gotoDetail(id,brandId) {
      wx.navigateTo({
        url: `/pages/rent/detail/main?type=${brandId}&id=${id}`
      });
    },
    gotoPerson(id){  //跳转到他人或者个人主页；type;1:个人；2：他人
      wx.navigateTo({
        url: `/pages/mine/person/main?type=2&Id=${id}`
      });
    },
    shiftTab(index) {
      this.initData();
      this.tabIndex = parseInt(index);
      this.MemberFootprint();
    },
    MemberFootprint() {
      //浏览列表
      let that = this;
      post(
        "User/MemberFootprint",
        {
          UserId: that.userId,
          Token: that.token,
          PageSize: that.pageSize,
          Page: that.page,
          Type: that.tabIndex
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          if (that.page === 1) {
            that.list = [];
          }
          if (res.data.length > 0) {
            that.hasDataList = true;
            that.list = that.list.concat(res.data);
          }
          if (res.data.length < that.pageSize) {
            that.isOver = true;
          }
        }
      });
    },
    btnDelFootPrint(e, id, index) {
      //删除
      let that = this;
      wx.showModal({
        // title: '提示',
        content: "你确定要删除么？",
        success(res) {
          if (res.confirm) {
            post(
              "User/DelFootprint",
              {
                UserId: that.userId,
                Token: that.token,
                Id: id
              },
              that.curPage
            ).then(res => {
              if (res.code === 0) {
                //删除成功
                wx.showToast({
                  title: "删除成功！",
                  icon: "none",
                  duration: 1500,
                  success: function() {
                    setTimeout(() => {
                      that.list.splice(index, 1);
                      e.mp.detail.instance.close();
                    }, 1500);
                  }
                });
              }
            });
          } else if (res.cancel) {
            e.mp.detail.instance.close();
          }
        }
      });
    },
    moreLoad() {
      //加载更多
      if (!this.isOver) {
        this.page++;
        this.MemberFootprint();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.filterMenu {
  color: #333;
  font-size: 32rpx;
}
.item /deep/ .van-cell {
  padding: 0 !important;
}
.item /deep/ .van-cell::after,
.swipe-cell::after,
.weui-cell::before,
.swipe-cell /deep/ .van-swipe-cell::before,
.swipe-cell /deep/ .van-swipe-cell::after,
.readList /deep/ .swipe-cell::before,
.readList /deep/ .swipe-cell::after {
  display: none !important;
}
.van-swipe-cell__right {
  width: 130rpx;
  height: 100%;
  font-size: 28rpx;
  color: #fff;
  text-align: center;
  background-color: #f44;
}

.storeList .section__hd {
  // border-bottom: 1px solid #f2f2f2;
  padding: 10rpx 30rpx;
}
.filterContent {
  height: calc(100vh - 90rpx);
  height: -webkit-calc(100vh - 90rpx);
  overflow: hidden;
}
.storeList.levelPanel .item {
  position: relative;
  // &::before {
  //   position: absolute;
  //   content: "";
  //   left: 30rpx;
  //   right: 0;
  //   height: 1px;
  //   background: #f2f2f2;
  //   bottom: 0;
  // }
}
.storeList.levelPanel .item .outside {
  padding: 30rpx !important;
}
.storeList.levelPanel .item .outside::before,
.storeList.levelPanel .item::before {
  display: none;
}
.readList {
  .weui-cell {
    padding-top: 30rpx;
    padding-bottom: 30rpx;
    &::before {
      left: 30rpx;
      right: 0;
    }
  }
}
.readList2 /deep/ .van-cell {
  position: relative;
  &::before{
    position: absolute;
    content: "";
    left:30rpx;
    right:0;
    height: 1px;
    background: #f2f2f2
  }
}
</style>
