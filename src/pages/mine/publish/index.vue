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
    <scroll-view class="scroll-box" scroll-y @scrolltolower="moreLoad">
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
                    @click.stop="selectItem(item.Id,index,pinzuList.selectedIndex,item.Status)"
                  >
                    <input
                      type="checkbox"
                      class="checkbox-cart"
                      :disabled="item.Status!==1"
                      :checked="pinzuList.selectedIndex===index && item.Status===1"
                      v-if="showEdit"
                    >
                    <div class="pictrueAll">
                      <span class="isTopTag" v-if="item.IsTop && item.IsRefresh">已置顶刷新</span>
                      <span class="isTopTag" v-if="item.IsTop&&!item.IsRefresh">已置顶</span>
                      <span class="isTopTag" v-if="item.IsRefresh&&!item.IsTop">已刷新</span>
                      <span class="isTopTag" v-if="item.Status!==1">{{item.Status===0?'待审核':item.Status===2?'审核失败':''}}</span>
                      <div class="pictrue img">
                        <img :src="item.PicNo" alt mode="aspectFill">
                      </div>
                    </div>
                    <div class="txtBox flex1">
                      <p class="title ellipsis" style="color:#1a1a1a">
                        <span class="typeName" v-if="item.TypeName !==''">{{item.TypeName}}</span>
                        {{item.Title}}
                      </p>
                      <p class="msgList">
                        <span
                          class="msgItem"
                          v-if="item.GladBuyerTrade !==''"
                        >{{item.GladBuyerTrade}}</span>
                        <block v-if="item.FirstTags.length>0">
                          <span
                            class="msgItem"
                            v-for="(item2,index2) in item.FirstTags"
                            :key="index2"
                          >{{item2}}</span>
                        </block>
                      </p>
                      <p class="priceArea">
                        <span class="price">￥{{item.PropertyPrice}}</span>
                        <span class="againsubmit" @click.stop="gopage(item.Status)" :class="{'addcolor':item.Status===2}">{{item.Status===2?'查看原因':'重新发布'}}</span>
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
        <block v-if="hasData">
          <div
            class="flex flexAlignCenter list_item bg_fff"
            v-for="(item,index) in zujianList.data"
            :key="index"
          >
            <van-swipe-cell
              :right-width="65"
              async-close
              @close="delectData($event,index,item.Id)"
              class="swipe-cell"
            >
              <van-cell-group>
                <van-cell class="item">
                  <div
                    class="outside"
                    @click.stop="selectItem(item.Id,index,zujianList.selectedIndex,item.Status)"
                  >
                    <span
                      class="isTopTag zujian__isTopTag"
                      v-if="item.IsTop&& item.IsRefresh">已置顶刷新</span>
                    <span class="isTopTag zujian__isTopTag" v-if="item.IsTop&&!item.IsRefresh">已置顶</span>
                    <span class="isTopTag zujian__isTopTag" v-if="item.IsRefresh&&!item.IsTop">已刷新</span>
                      <span class="isTopTag" v-if="item.Status!==1">{{item.Status===0?'待审核':item.Status===2?'审核失败':''}}</span>
                    <input
                      type="checkbox"
                      class="checkbox-cart"
                      :disabled="item.Status!==1"
                      :checked="zujianList.selectedIndex===index && item.Status===1"
                      v-if="showEdit"
                    >
                    <!--类似头像小图片  组建-->
                    <div class="avatarbox mrr2">
                      <p class="avatar">{{item.GrName}}</p>
                    </div>
                    <!--图片 其他-->
                    <div class="txtBox flex1">
                      <p
                        class="title ellipsis"
                        style="color:#1a1a1a;margin-bottom:22rpx !important;"
                      >{{item.Title}}</p>
                      <p class="msgList">
                        <span class="msgItem" v-if="item.GladBuyerTrade !==''">{{item.GladBuyerTrade}}</span>
                        <span class="msgItem">{{item.Company}}</span>
                      </p>
                      <!--组建2-->
                      <p class="tipsList" v-if="item.jobArr.length>0" style="position: relative">
                        <span
                          v-for="(item2,index2) in item.jobArr"
                          v-if="index<5"
                          :key="index2"
                        >{{item2}}</span>
                      </p>
                      <div class="againsubmit" @click.stop="gopage(item.Status)" :class="{'addcolor':item.Status===2}">{{item.Status===2?'查看原因':'重新发布'}}</div>
                    </div>
                  </div>
                </van-cell>
              </van-cell-group>
              <span slot="right" class="van-swipe-cell__right">删除</span>
            </van-swipe-cell>
          </div>
        </block>
      </div>
      <!--拼活动列表-->
      <div class="boxSize column levelPanel storeList" v-if="tabindex==2">
        <!--item-->
        <block>
          <div
            class="flex flexAlignCenter list_item bg_fff"
            v-for="(item,index) in huodongList.data"
            :key="index"
          >
            <van-swipe-cell
              :right-width="65"
              async-close
              @close="delectData($event,index,item.Id)"
              class="swipe-cell"
            >
              <van-cell-group>
                <van-cell class="item">
                  <div
                    class="outside"
                    @click.stop="selectItem(item.Id,index,huodongList.selectedIndex,item.Status)"
                  >
                    <input
                      type="checkbox"
                      class="checkbox-cart"
                      :disabled="item.Status!==1"
                      :checked="huodongList.selectedIndex===index && item.Status===1"
                      v-if="showEdit"
                    >
                    <div class="pictrueAll">
                      <span class="isTopTag" v-if="item.IsTop && item.IsRefresh">已置顶刷新</span>
                      <span class="isTopTag" v-if="item.IsTop&&!item.IsRefresh">已置顶</span>
                      <span class="isTopTag" v-if="item.IsRefresh&&!item.IsTop">已刷新</span>
                      <span class="isTopTag" v-if="item.Status!==1">{{item.Status===0?'待审核':item.Status===2?'审核失败':''}}</span>
                      <div class="pictrue img">
                        <img :src="item.PicNo" alt mode="aspectFill">
                      </div>
                    </div>
                    <div class="txtBox flex1">
                      <p class="title ellipsis" style="color:#1a1a1a">
                        <span class="typeName" v-if="item.TypeName !==''">{{item.TypeName}}</span>
                        {{item.Title}}
                      </p>
                      <p class="msgList">
                        <!-- <span class="msgItem" v-if="item.GladBuyerTrade !==''">{{item.GladBuyerTrade}}</span> -->
                        <span class="msgItem">{{item.AddTime}}</span>
                        <span class="msgItem">{{item.GladBuyArea}}</span>
                      </p>
                      <p class="priceArea">
                        <span class="price">￥{{item.PropertyPrice}}</span>
                        <span class="againsubmit" @click.stop="gopage(item.Status)" :class="{'addcolor':item.Status===2}">{{item.Status===2?'查看原因':'重新发布'}}</span>
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
      <!--房源列表-->
      <div class="boxSize column levelPanel storeList" v-if="tabindex==3">
        <!--item-->
        <block>
          <div
            class="flex flexAlignCenter list_item bg_fff"
            v-for="(item,index) in fangList.data"
            :key="index"
          >
            <van-swipe-cell
              :right-width="65"
              async-close
              @close="delectData($event,index,item.Id)"
              class="swipe-cell"
            >
              <van-cell-group>
                <van-cell class="item">
                  <div
                    class="outside"
                    @click.stop="selectItem(item.Id,index,fangList.selectedIndex,item.Status)"
                  >
                    <input
                      type="checkbox"
                      class="checkbox-cart"
                      :disabled="item.Status!==1"
                      :checked="fangList.selectedIndex===index && item.Status===1"
                      v-if="showEdit"
                    >
                    <div class="pictrueAll">
                      <span class="isTopTag" v-if="item.IsTop && item.IsRefresh">已置顶刷新</span>
                      <span class="isTopTag" v-if="item.IsTop&&!item.IsRefresh">已置顶</span>
                      <span class="isTopTag" v-if="item.IsRefresh&&!item.IsTop">已刷新</span>
                      <span class="isTopTag" v-if="item.Status!==1">{{item.Status===0?'待审核':item.Status===2?'审核失败':''}}</span>
                      <div class="pictrue img">
                        <img :src="item.PicNo" alt mode="aspectFill">
                      </div>
                    </div>
                    <div class="txtBox flex1">
                      <p class="title ellipsis" style="color:#1a1a1a">
                        <span class="typeName" v-if="item.TypeName !==''">{{item.TypeName}}</span>
                        {{item.Title}}
                      </p>
                      <p class="msgList">
                        <span
                          class="msgItem"
                          v-if="item.GladBuyerTrade !==''"
                        >{{item.GladBuyerTrade}}</span>
                        <span class="msgItem">{{item.GladBuyArea}}</span>
                        <span class="msgItem" v-if="item.PlanBuyArea !==''">
                          {{item.PlanBuyArea}}m<span class="sup">2</span>
                        </span>
                      </p>
                      <p class="priceArea">
                        <span class="price">￥{{item.PropertyPrice}}</span>
                        <span class="againsubmit" @click.stop="gopage(item.Status)" :class="{'addcolor':item.Status===2}">{{item.Status===2?'查看原因':'重新发布'}}</span>
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
      <div class="noData center" style="padding:60rpx 30rpx;" v-if="!hasData && isRequest">暂无数据</div>
      <div
        class="noData center"
        style="margin-top:0;line-height:80rpx;"
        v-if="isOver&& page!==1"
      >我也是有底线的!</div>
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
        <div class="btn bg_ff952e" @tap="gotoBuy(2)">刷新</div>
        <div class="btn bg_ed3435" @tap="gotoBuy(1)">置顶</div>
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
  //Status 0-待审核,1-审核通过,2-审核失败
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
      page: 1,
      pageSize: 15,
      pinzuList: {
        selectedIndex: "",
        data: []
      }, //拼租
      zujianList: {
        selectedIndex: "",
        data: []
      }, //组建
      huodongList: {
        selectedIndex: "",
        data: []
      }, //活动
      fangList: {
        selectedIndex: "",
        data: []
      }, //房源
      hasData: false,
      isOver: false,
      isRequest:false   //是否请求成功
    };
  },
  onLoad() {
      this.setBarTitle();
      this.tabindex=0;
      this.BrandId = 21;
  },
  onShow(){
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.initData();
    this.getMyPublish();
  },
  components: {},

  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "我的发布"
      });
    },
    gopage(status){
      if(status==2){
        wx.navigateTo({
          url: `/pages/VerticalFail/main`
        })
      }
    },
    initData() {
      this.isRequest = false;
      this.showEdit = false;
      this.hasData = false;
      this.isOver = false;
      this.page = 1;
    },
    initDataList() {
      this.pinzuList = {
        selectedIndex: "",
        data: []
      }; //拼租
      this.zujianList = {
        selectedIndex: "",
        data: []
      }; //组建
      this.huodongList = {
        selectedIndex: "",
        data: []
      }; //活动
      this.fangList = {
        selectedIndex: "",
        data: []
      }; //房源
    },
    selectIndex(index, id) {
      this.tabindex = index;
      this.BrandId = id;
      this.initData();
      this.getMyPublish();
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
    selectItem(id, index, selectedIndex, status) {
      //如果已经点击编辑的，点全的时候就应该是选择，否则跳转到详情页
      if (this.showEdit) {
        //点击了编辑
        if (status !== 1) {
          wx.showToast({
            title: "该条信息没有审核通过，不可以选择！",
            icon: "none",
            duration: 1500
          });
          return false;
        }
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
      //1:置顶；2：刷新
      let isTop = "";
      let isRefresh = "";
      let item = "";
      let msg = "";
      let publishId = "";
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
      if (type === 1) {
        if (isTop !== "") {
          msg = "您已经购买了该条信息的置顶功能，是否要继续购买？"; 
        }else{
          msg = "您确定要购买该条信息的置顶功能么？";
        }
      }
      if (type === 2) {
        if (isRefresh !== "") {
          msg = "您已经购买了该条信息的刷新功能，是否要继续购买？";
        }else{
          msg = "您确定要购买该条信息的刷新功能么？";
        }
      }
      wx.showModal({
        // title: "提示",
        content: msg,
          confirmColor:'#ff952e',
          cancelColor:'#999',
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
      //滑块的点击删除
    delectData(e, index, id) {
      e.mp.detail.instance.close()
      let that = this;
      wx.showModal({
        title: "删除确认",
        content: "您确定要删除该条数据么？",
          confirmColor:'#ff952e',
          cancelColor:'#999',
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
    getMyPublish() {
      const index = this.tabindex;
      post(
        "Goods/MyPublish",
        {
          UserId: this.userId,
          Token: this.token,
          Page: this.page,
          PageSize: this.pageSize,
          BrandId: this.BrandId
        },
        this.curPage
      ).then(res => {
        if (res.code == 0) {
          this.isRequest = true;
          if (this.page === 1) {
            this.initDataList();
            this.hasData = false;
          }
          if (res.data.length < this.pageSize) {
            this.isOver = true;
          }
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
              this.$set(
                this.pinzuList,
                "data",
                this.pinzuList.data.concat(res.data)
              );
            } else if (index == 1) {
              res.data.map(item => {
                if (item.NeedJob !== "") {
                  this.$set(item, "jobArr", item.NeedJob.split(","));
                } else {
                  this.$set(item, "jobArr", []);
                }
              });
              this.$set(
                this.zujianList,
                "data",
                this.zujianList.data.concat(res.data)
              );
            } else if (index == 2) {
              this.$set(
                this.huodongList,
                "data",
                this.huodongList.data.concat(res.data)
              );
            } else {
              this.$set(
                this.fangList,
                "data",
                this.fangList.data.concat(res.data)
              );
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
            success: () => {
              // 获取发布列表
              this.getMyPublish();
              // setTimeout(() => {
              //   if (this.tabindex === 0) {
              //     this.pinzuList.data.splice(index, 1);
              //   }
              //   if (this.tabindex === 1) {
              //     this.zujianList.data.splice(index, 1);
              //   }
              //   if (this.tabindex === 2) {
              //     this.huodongList.data.splice(index, 1);
              //   }
              //   if (this.tabindex === 3) {
              //     this.fangList.data.splice(index, 1);
              //   }
              //   e.mp.detail.instance.close();
              // }, 1500);
            }
          });
        }
      });
    },
    moreLoad() {
      //加载更多
      if (!this.isOver) {
        this.page++;
        this.getMyPublish();
      }
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
  height: 220rpx;
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
  z-index: 3;
  left: 0;
  top: 0;
  padding: 2rpx 10rpx;
  font-size: 22rpx;
  line-height: 1.4;
  &.zujian__isTopTag {
    // left: 30rpx;
    left: 0;
    top: 20rpx;
  }
}
.storeList.levelPanel {
  padding: 20rpx 0;
}
.list_item {
  margin-bottom: 20rpx !important;
  padding-left: 0 !important;
  .outside {
    padding: 20rpx 30rpx !important;
    height: 220rpx;
    box-sizing: border-box;
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
    width: 100%;
    position: relative;
    .againsubmit{
      position: absolute;
      display: block;
      top: 0;
      right: 0;
      font-size: 22rpx;
      color: #666;
      padding: 4rpx 20rpx;
      line-height: 44rpx;
      height: 40rpx;
      border: #ff6666 1rpx solid;
      border-radius: 8rpx;
      z-index: 10
    }
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
  margin-right: 30rpx !important;
  width: 90rpx !important;
  height: 90rpx !important;
  .avatar {
    color: #fff;
    width: 90rpx;
    height: 90rpx;
    line-height: 90rpx;
    font-size: 24rpx;
    text-align: center;
  }
}
.filterMenu {
  color: #1a1a1a;
}
.addcolor{
  color: #ff6666!important
}
.againsubmit{
  position: absolute;
  display: block;
  bottom: 30rpx;
  right: 30rpx;
  font-size: 22rpx;
  color: #666;
  padding: 4rpx 20rpx;
  line-height: 44rpx;
  height: 40rpx;
  border: #ff6666 1rpx solid;
  border-radius: 8rpx;
  z-index: 10
}
</style>
