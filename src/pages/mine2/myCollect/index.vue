<template>
  <div class="pageContent">
    <div class="filterMenu bg_fff" style="padding:0;">
      <ul class="menu bbNo__menu bbLi__menu li_50 flex center">
        <li :class="{'active':tabIndex===0}" @click="shiftTab(0)">
          <div class="item">信息</div>
        </li>
        <li :class="{'active':tabIndex===1}" @click="shiftTab(1)">
          <div class="item">用户</div>
        </li>
      </ul>
    </div>
    <!-- 分类 -->
    <div class="nav" v-if="tabIndex===0">
      <div
        class="nav-list"
        :class="{'active':item.Id === navActiveId}"
        v-for="(item,index) in nav"
        :key="index"
        @click="onClickNav(item.Id)"
      >
        <div class="nav-item">{{item.Name}}</div>
      </div>
    </div>
    <scroll-view class="filterContent bg_fff mt10" scroll-y="true">
      <!-- 信息 -->
      <div class="column levelPanel storeList" style="padding:0;" v-if="tabIndex===0">
        <block v-for="(item,index) in list" :key="index">
          <van-swipe-cell
            :right-width="65"
            async-close
            @close="ReCollections($event,item.Id,index)"
            class="swipe-cell"
          >
            <van-cell-group>
              <van-cell class="item" @click="goDetail(item)">
                <div class="outside">
                  <div class="pictrueAll">
                    <div class="pictrue img">
                      <img :src="item.PicNo" alt />
                    </div>
                  </div>
                  <div class="txtBox text_l">
                    <p class="title ellipsis" style="color:#333">
                      {{item.Title}}
                      <!-- <span class="typeName">拼办公室</span> -->
                    </p>
                    <p class="msgList" style="margin-top:20rpx;">
                      <span class="msgItem" v-if="item.TypeName !=='' ">{{item.TypeName}}</span>
                      <span class="msgItem">{{item.GladBuyArea}}</span>
                    </p>
                    <div class="flex" style="margin-top:38rpx;">
                      <p class="priceArea flex1 flexAlignCenter">
                        <span class="price">￥{{item.PropertyPrice}}</span>
                      </p>
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
      <!-- 用户-->
      <div class="weui-cells readList mt0" v-if="tabIndex===1">
        <block v-for="(item,key) in list" :key="key">
          <van-swipe-cell
            :right-width="65"
            class="swipe-cell"
            async-close
            @close="ReCollections($event,item.Id,key)"
          >
            <van-cell-group>
              <van-cell class="item" @click="goUserCenter(item.ShopId)">
                <div class="weui-cell">
                  <img :src="item.Avatar" class="tx" alt />
                  <div class="weui-cell__bd text_l">
                    <p>
                      <span class="name">{{item.Name}}</span>
                      <img src="/static/images/icons/v.jpg" class="icon_attestation" alt />
                    </p>
                    <p class="msgList">
                      <span class="msgItem">{{item.Company[0].Job}}</span>
                      <span class="msgItem">{{item.Company[0].Name}}</span>
                    </p>
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
import { post, toLogin, getCurrentPageUrlWithArgs, trim } from "@/utils";
export default {
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.getNav();
  },
  data() {
    return {
      tabIndex: 0, //0：产品；1：商家
      userId: "",
      token: "",
      curPage: "",
      pageSize: 15,
      page: 1,
      nav: [],
      navActiveId: 0, //激活的分类
      list: [],
      isOver: false,
      hasDataList: false
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "我的收藏"
      });
    },
    // 获取分类
    getNav() {
      post("Goods/GetBrandList").then(res => {
        this.nav = res.data;
        this.navActiveId = res.data[0].Id;
        this.MemberCollections();
      });
    },
    initData() {
      this.page = 1;
      this.list = [];
      this.isOver = false;
      this.hasDataList = false;
    },
    shiftTab(index) {
      this.tabIndex = parseInt(index);
      this.initData();
      this.MemberCollections();
    },
    // 点击分类时
    onClickNav(id){
      this.navActiveId = id;
      this.MemberCollections();
    },
    MemberCollections() {
      let that = this;
      const params = {
          UserId: this.userId,
          Token: this.token,
          PageSize: this.pageSize,
          Page: this.page,
          Type: this.tabIndex
      }
      this.tabIndex===0&&(params.BrandId=this.navActiveId)
      post("User/MemberCollections",params,that.curPage)
        .then(res => {
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
    ReCollections(e, id, index) {
      //取消收藏
      let that = this;
      wx.showModal({
        // title: '提示',
        content: "你确定要取消收藏么？",
        confirmColor: "#ff952e",
        cancelColor: "#999",
        success(res) {
          if (res.confirm) {
            post(
              "User/DelCollections",
              {
                UserId: that.userId,
                Token: that.token,
                Id: id
              },
              that.curPage
            ).then(res => {
              if (res.code === 0) {
                //取消收藏成功
                wx.showToast({
                  title: "取消收藏成功！",
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
        this.MemberCollections();
      }
    },
    // 跳转到个人中心
    goUserCenter(ShopId) {
      wx.navigateTo({
        url: `/pages/mine/person/main?type=2&Id=${ShopId}`
      });
    },
    // 跳转详情
    goDetail(item) {
      wx.navigateTo({
        url: `/pages/rent/detail/main?id=${item.ProId}&type=${item.BrandId}`
      });
    }
  },
  //下拉刷新
  onPullDownRefresh() {
    this.initData();
    wx.stopPullDownRefresh();
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
  border-bottom: 1px solid #f2f2f2;
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
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30rpx;
  line-height: 70rpx;
  background: #fff;
  border-top: 1rpx #e8e8e8 solid;
  .active {
    color: #ff952e;
    border-bottom: #ff952e 4rpx solid;
  }
}
</style>
