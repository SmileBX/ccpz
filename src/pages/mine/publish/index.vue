<template>
  <div class="pagePublish">
    <!--顶部选项卡-->
    <div class="filterMenu bg_fff" style="padding:0">
      <ul class="menu bbLi__menu bbNo__menu li_33 flex center">
        <li
          v-for="(item, index) in tablist"
          :key="index"
          @click="selectIndex(index,item.Id)"
          :class="{'active':tabindex==index}"
        >
          <div class="item">{{item.name}}</div>
        </li>
      </ul>
    </div>
    <!--拼租列表-->
    <scroll-view class="scroll-box" scroll-y>
      <div class="boxSize column levelPanel storeList" v-if="tabindex==0">
        <!--item-->
        <block v-if="hasData">
          <div
            class="flex flexAlignCenter list_item bg_fff"
            v-for="(item,index) in pinzuList.data"
            :key="index"
          >
            <!-- <p>fsdfdsfdfdf</p> -->
            <van-swipe-cell
              async-close
              @close="delectData($event,index,item.Id)"
              :right-width="65"
              class="swipe-cell"
            >
              <van-cell-group>
                <van-cell class="item">
                  <div
                    class="outside"
                    @click.stop="selectItem(item.Id,index,pinzuList.selectedIndex)"
                  >
                    <input
                      type="checkbox"
                      class="checkbox-cart"
                      :checked="pinzuList.selectedIndex===index"
                      v-if="showEdit"
                    >
                    <div class="pictrueAll">
                      <span class="isTopTag" v-if="item.IsTop !=='' && item.IsRefresh !==''">已置顶刷新</span>
                      <span class="isTopTag" v-if="item.IsTop !==''">已置顶</span>
                      <span class="isTopTag" v-if="item.IsRefresh !==''">已刷新</span>
                      <div class="pictrue img">
                        <img :src="item.PicNo" alt>
                      </div>
                    </div>
                    <div class="txtBox flex1">
                      <p class="title ellipsis" style="color:#1a1a1a">
                        <span
                          class="typeName"
                          v-if="item.GladBuyerTrade !==''"
                        >{{item.GladBuyerTrade}}</span>
                        {{item.Title}}
                      </p>
                      <p class="msgList" v-if="item.FirstTags.length>0">
                        <span
                          class="msgItem"
                          v-for="(item2,index2) in item.FirstTags"
                          :key="index2"
                        >{{item2}}</span>
                      </p>
                      <p class="priceArea">
                        <span class="price">￥{{item.PropertyPrice}}</span>
                      </p>
                    </div>
                  </div>
                </van-cell>
              </van-cell-group>
              <span slot="right" class="van-swipe-cell__right">删除</span>
            </van-swipe-cell>
          </div>
        </block>
      </div>
      <!--组建列表-->
      <div class="boxSize column levelPanel storeList" v-if="tabindex==1">
        <div
          class="flex flexAlignCenter list_item bg_fff"
          v-for="(item,index) in zujianList"
          :key="index"
        >
          <input type="checkbox" class="checkbox-cart" checked v-if="showEdit">
          <van-swipe-cell :right-width="65" async-close @close="onClose" class="swipe-cell">
            <van-cell-group>
              <van-cell class="item">
                <div class="outside">
                  <!--类似头像小图片  组建-->
                  <div class="avatarbox mrr2">
                    <p class="avatar">公司</p>
                  </div>
                  <!--图片 其他-->
                  <!-- <div class="pictrueAll">
                        <div class="pictrue img">
                          <img src="/static/images/of/index_a1.jpg" alt>
                        </div>
                  </div>-->
                  <div class="txtBox">
                    <p class="title ellipsis" style="color:#1a1a1a">{{item.Title}}</p>
                    <p class="msgList">
                      <span class="msgItem">{{item.GladBuyerTrade}}</span>
                      <span class="msgItem">100m</span>
                      <span class="msgItem">3卡2独</span>
                      <span class="msgItem">{{item.Company}}</span>
                    </p>
                    <!--组建2-->
                    <p class="tipsList">
                      <span>股份合作</span>
                      <span>可使用公司资质</span>
                      <span>可挂牌</span>
                    </p>
                  </div>
                </div>
              </van-cell>
            </van-cell-group>
            <span slot="right" class="van-swipe-cell__right">删除</span>
          </van-swipe-cell>
        </div>
      </div>
      <!--拼活动列表-->
      <div class="boxSize column levelPanel storeList" v-if="tabindex==2">
        <!--item-->
        <div
          class="flex flexAlignCenter list_item bg_fff"
          v-for="(item,index) in huodongList"
          :key="index"
        >
          <input type="checkbox" class="checkbox-cart" checked v-if="showEdit">
          <van-swipe-cell :right-width="65" async-close @close="onClose" class="swipe-cell">
            <van-cell-group>
              <van-cell class="item" async-close @click="onClick" clickable>
                <div class="outside">
                  <div class="pictrueAll">
                    <div class="pictrue img">
                      <img :src="item.PicNo" alt>
                    </div>
                  </div>
                  <div class="txtBox">
                    <p class="title ellipsis" style="color:#1a1a1a">
                      <span class="typeName">{{item.TypeName}}</span>
                      {{item.Title}}
                    </p>
                    <p class="msgList">
                      <span class="msgItem">{{item.GladBuyerTrade}}</span>
                      <span class="msgItem">{{item.GladBuyArea}}</span>
                    </p>
                    <p class="priceArea">
                      <span class="price">{{item.PropertyPrice}}</span>场/月
                    </p>
                  </div>
                </div>
              </van-cell>
            </van-cell-group>
            <span slot="right" class="van-swipe-cell__right">删除</span>
          </van-swipe-cell>
        </div>
      </div>
      <!--房源列表-->
      <div class="boxSize column levelPanel storeList" v-if="tabindex==3">
        <!--item-->
        <div
          class="flex flexAlignCenter list_item bg_fff"
          v-for="(item,index) in fangList"
          :key="index"
        >
          <van-swipe-cell :right-width="65" async-close @close="onClose" class="swipe-cell">
            <van-cell-group>
              <van-cell class="item" async-close clickable>
                <div class="outside">
                  <input type="checkbox" class="checkbox-cart" v-if="showEdit">
                  <div class="pictrueAll">
                    <div class="pictrue img">
                      <img :src="item.PicNo" alt>
                    </div>
                  </div>
                  <div class="txtBox flex1">
                    <p class="title ellipsis" style="color:#1a1a1a">
                      <span class="typeName">{{item.TypeName}}</span>
                      {{item.Title}}
                    </p>
                    <p class="msgList">
                      <span class="msgItem">{{item.GladBuyerTrade}}</span>
                      <!-- <span class="msgItem">
                              100m
                              <span class="sup">2</span>
                      </span>-->
                      <span class="msgItem">{{item.GladBuyArea}}</span>
                      <span class="msgItem">{{item.PlanBuyArea}}</span>
                    </p>
                    <p class="priceArea">
                      <span class="price">{{item.PropertyPrice}}</span>元/月
                    </p>
                  </div>
                </div>
              </van-cell>
            </van-cell-group>
            <span slot="right" class="van-swipe-cell__right">删除</span>
          </van-swipe-cell>
        </div>
      </div>
    </scroll-view>
    <!-- 拼租 置顶 按钮底部 -->
    <div class="ftBtn fixed bm0 flex flexAlignCenter" v-if="showEdit">
      <div class="flex1">
        <span
          class="cancle"
          @click="setshowEdit(0)"
          style="display:inline-block;vertical-align:top;line-heigth:90rpx;height:90rpx;padding-right:30rpx"
        >取消</span>
      </div>
      <div class="flex center btn-right">
        <div class="btn bg_ff952e" @tap="gotoBuy(1)">刷新</div>
        <div class="btn bg_ed3435" @tap="gotoBuy(0)">置顶</div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="ftBtn fixed bm0" v-else>
      <div class="btns" @click="setshowEdit(1)">编辑</div>
    </div>
    <!-- <van-dialog id="van-dialog"/> -->
  </div>
</template>

<script>
import { post, valPhone, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
export default {
  data() {
    return {
      showEdit: false, //是否显示底部刷新置顶
      tablist: [
        { name: "拼租", Id: 21 },
        { name: "组建", Id: 22 },
        { name: "拼活动", Id: 23 },
        { name: "房源", Id: 24 }
      ],
      BrandId: 21, //拼租 = 21,组建 = 22,拼活动 = 23,房源 = 24,
      tabindex: 0,
      pinzuList: {}, //拼租
      zujianList: {}, //组建
      huodongList: {}, //活动
      fangList: {}, //房源
      hasData: false
    };
  },
  onLoad() {
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.setBarTitle();
    this.getMyPublish(0);
  },

  components: {},

  methods: {
    onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("e", e);
    },
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "我的发布"
      });
    },
    selectIndex(index, id) {
      this.tabindex = index;
      this.BrandId = id;
      this.showEdit = false;
      this.getMyPublish(index);
    },
    setshowEdit(type) {
      this.showEdit = !this.showEdit;
      if (type === 0) {
        //表示点击的是取消，需要去掉已经选择的项
        if (this.tabindex === 0) {
          this.$set(this.pinzuList, "selectedIndex", "");
        }
        if (this.tabindex === 1) {
          this.$set(this.zujianList, "selectedIndex", "");
        }
        if (this.tabindex === 2) {
          this.$set(this.huodongList, "selectedIndex", "");
        }
        if (this.tabindex === 3) {
          this.$set(this.fangList, "selectedIndex", "");
        }
      }
    },
    selectItem(id, index, selectedIndex) {
      //如果已经点击编辑的，点全的时候就应该是选择，否则跳转到详情页
      if (this.showEdit) {
        //点击了编辑
        if (index === selectedIndex) {
          return false;
        } else {
          if (this.tabindex === 0) {
            this.$set(this.pinzuList, "selectedIndex", index);
          }
          if (this.tabindex === 1) {
            this.$set(this.zujianList, "selectedIndex", index);
          }
          if (this.tabindex === 2) {
            this.$set(this.huodongList, "selectedIndex", index);
          }
          if (this.tabindex === 3) {
            this.$set(this.fangList, "selectedIndex", index);
          }
        }
      } else {
        let type = this.tablist[this.tabindex].Id;
        wx.navigateTo({
          url: `/pages/rent/detail/main?id=${id}&type=${type}`
        });
      }
    },
    gotoBuy(type) {
      //0:置顶；1：刷新
      let isTop = "";
      let isRefresh = "";
      let item = "";
      let msg = "";
      let publishId = "";
      let isGoto = false;
      if (this.tabindex === 0) {
        item = this.pinzuList.data[this.pinzuList.selectedIndex];
      }
      if (this.tabindex === 1) {
        item = this.zujianList.data[this.zujianList.selectedIndex];
      }
      if (this.tabindex === 2) {
        item = this.huodongList.data[this.huodongList.selectedIndex];
      }
      if (this.tabindex === 3) {
        item = this.fangList.data[this.fangList.selectedIndex];
      }
      isTop = item.IsTop;
      isRefresh = item.IsRefresh;
      publishId = item.Id;
      console.log(
        "isTop:" + isTop,
        "isRefresh:" + isRefresh,
        "publishId:" + publishId
      );
      if (type === 0) {
        if (isTop !== "") {
          isGoto = true;
        } else {
          msg = "您已经购买了该条信息的置顶功能，是否要继续购买？";
        }
      }
      if (type === 1) {
        if (isRefresh !== "") {
          isGoto = true;
        } else {
          msg = "您已经购买了该条信息的刷新功能，是否要继续购买？";
        }
      }
      wx.showModal({
        // title: "提示",
        content: msg,
        success(res) {
          if (res.confirm) {
            //跳转到对应的购买页面
            wx.navigateTo({
              url: `/pages/member2/buyFunction/main?type=${type}&publishId=${publishId}`
            });
          } else if (res.cancel) {
          }
        }
      });
    },
    delectData(e, index, id) {
      //滑块的点击删除
      // e.mp.detail.instance.close()
      let that = this;
      wx.showModal({
        // title: "提示",
        content: "您确定要删除该条数据么？",
        success(res) {
          if (res.confirm) {
            //跳转到对应的购买页面
            that.deletePublish(e, index, id);
          } else if (res.cancel) {
          }
        }
      });
    },
    //发布列表
    getMyPublish(index) {
      post(
        "Goods/MyPublish",
        {
          UserId: this.userId,
          Token: this.token,
          Page: 1,
          BrandId: this.BrandId
        },
        this.curPage
      ).then(res => {
        if (res.code == 0) {
          if (res.data.length > 0) {
            if (index == 0) {
              res.data.map(item => {
                if (item.FirstTags) {
                  this.$set(item, "FirstTags", item.FirstTags.split("|"));
                } else {
                  this.$set(item, "FirstTags", []);
                }
                if (item.SecondTags) {
                  this.$set(item, "SecondTags", item.SecondTags.split("|"));
                } else {
                  this.$set(item, "SecondTags", []);
                }
              });
              this.pinzuList = Object.assign({}, this.pinzuList, {
                data: res.data,
                selectedIndex: ""
              });

              // this.pinzuList= res.data;
            } else if (index == 1) {
              this.zujianList = Object.assign({}, this.zujianList, {
                data: res.data,
                selectedIndex: ""
              });
              // this.zujianList = res.data;
            } else if (index == 2) {
              this.huodongList = Object.assign({}, this.huodongList, {
                data: res.data,
                selectedIndex: ""
              });
              // this.huodongList = res.data;
            } else {
              this.fangList = Object.assign({}, this.fangList, {
                data: res.data,
                selectedIndex: ""
              });
              // this.fangList = res.data;
            }
            this.hasData = true;
          }
        }
      });
    },
    //删除发布
    deletePublish(e, index, id) {
      post(
        "Goods/DelMyPublish",
        {
          UserId: this.userId,
          Token: this.token,
          IdStr: id
        },
        this.curPage
      ).then(res => {
        if (res.code == 0) {
          wx.showToast({
            title: "删除成功",
            icon: "none",
            duration: 1500,
            success: ()=> {
              setTimeout(() => {
                if (this.tabindex === 0) {
                  this.pinzuList.data.splice(index,1);
                }
                if (this.tabindex === 1) {
                  this.zujianList.data.splice(index,1);
                }
                if (this.tabindex === 2) {
                  this.huodongList.data.splice(index,1);
                }
                if (this.tabindex === 3) {
                  this.fangList.data.splice(index,1);
                }
                e.mp.detail.instance.close();
              }, 1500);
            }
          });
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
@import "./index";
.demo-swipe-cell {
  user-select: none;
}
.scroll-box {
  height: calc(100vh - 160rpx);
}
.van-swipe-cell__left,
.van-swipe-cell__right {
  display: inline-block;
  width: 130rpx;
  height: 240rpx;
  font-size: 28rpx;
  line-height: 240rpx;
  color: #fff;
  text-align: center;
  background-color: #f44;
}
.isTopTag {
  background: rgba(255, 149, 46, 0.6);
  color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  padding: 2rpx 10rpx;
  font-size: 22rpx;
  line-height: 1.4;
}
.storeList.levelPanel {
  padding: 20rpx 0;
}
.list_item {
  margin-bottom: 20rpx !important;
  padding-left: 0 !important;
  .outside {
    padding: 20rpx 30rpx !important;
  }
}
.levelPanel .item .pictrueAll {
  width: 240rpx !important;
  height: 180rpx !important;
}
.levelPanel .item .outside {
  padding: 0;
}
.storeList.levelPanel .item .outside {
  padding: 0;
}
.levelPanel .item .outside .txtBox .title {
  margin-bottom: 30rpx !important;
}
.txtBox {
  text-align: left;
  .priceArea {
    margin-top: 30rpx;
  }
}
.ftBtn {
  height: 90rpx;
  width: 100%;
  background: #fff;
  .cancle {
    line-height: 80rpx;
    padding-left: 30rpx;
  }
}
.btn-right {
  width: 50%;
  .btn {
    height: 90rpx;
    line-height: 90rpx;
    color: #fff;
    width: 100%;
    text-align: center;
  }
}
.btns {
  position: absolute;
  right: 0;
  height: 90rpx;
  line-height: 90rpx;
  width: 20%;
  background: #ff9325;
  color: #fff;
  text-align: center;
}
.avatarbox {
  background: #ff9325;
  border-radius: 50%;
  .avatar {
    color: #fff;
    width: 80rpx;
    height: 80rpx;
    line-height: 80rpx;
    font-size: 24rpx;
    text-align: center;
  }
}
.filterMenu {
  color: #1a1a1a;
}
</style>
