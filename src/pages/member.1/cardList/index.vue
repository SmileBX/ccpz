<template>
  <div class="pageContent">
    <scroll-view scroll-y @scrolltolower="loadMore" style="height:100%;">
      <div class="cardList" v-if="cardList.length>0">
        <div
          class="item flex"
          v-for="(item,index) in cardList"
          :key="index"
          @click="selectCard(index)"
        >
          <!-- <img src="/static/images/card/cardBg.png" class="bg" alt> -->
          <div class="cardImg">
            <img :src="item.BankLogo" alt>
          </div>
          <div class="txtBox">
            <p class="title">{{item.BankName}}</p>
            <p class="type">
              <span @click.stop="DeleteBank(index,item.Id)">[解绑银行卡]</span>
            </p>
            <p class="number">
              <span class="xing" v-for="(item2,index2) in item.cardNoArr" :key="index2">{{item2}}</span>
            </p>
          </div>
        </div>
      </div>
      <p
        style="text-align:center;font-size:30rpx;color:#666;padding:120rpx 20rpx 80rpx;"
        v-if="noDataIsShow"
      >暂无数据</p>
      <p
        class="ovedMsg"
        v-if="isOved && page>1"
        style="text-align:center;padding:20rpx;font-size:26rpx;color:#666;"
      >我也是有底线的</p>
      <div class="ftBtn" style="height:100rpx">
        <div class="inner fixed bm0">
          <div class="btns">
            <div class="btn center bg_ff952e color_fff">
              <img src="/static/images/icons/add3.png" class="icon-add" alt>添加银行卡
            </div>
          </div>
        </div>
      </div>
    </scroll-view>
  </div>
</template>
<script>
// import { post, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
export default {
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    // this.initData();
    // this.curPage = getCurrentPageUrlWithArgs();
    // this.userId = wx.getStorageSync("userId");
    // this.token = wx.getStorageSync("token");
    // if (toLogin(this.curPage)) {
    //   this.getBankList();
    // }
  },
  data() {
    return {
      curPage: "",
      userId: "",
      token: "",
      page: 1,
      pageSize: 10,
      count: 0,
      allPage: 0,
      isLoad: false,
      isOved: false,
      noDataIsShow: false,
      cardList: [
        {
          BankCardName: "冬冬6",
          BankCardNo: "451254875421565485",
          BankLogo:
            "http://hh.wtvxin.com/upload/admin/2018-11-21/201811211521551423.png",
          BankName: "招商银行",
          CreateTime: "2019/5/6 16:47:04",
          Id: 23,
          IsBankAUT: 0,
          IsBankAUTstr: "未认证"
        },
        {
          BankCardName: "冬冬6",
          BankCardNo: "451254875421565485",
          BankLogo:
            "http://hh.wtvxin.com/upload/admin/2018-11-21/201811211521551423.png",
          BankName: "招商银行",
          CreateTime: "2019/5/6 16:47:04",
          Id: 23,
          IsBankAUT: 0,
          IsBankAUTstr: "未认证"
        }
      ]
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "我的银行卡"
      });
    },
    initData() {
      this.curPage = "";
      this.userId = "";
      this.token = "";
      this.page = 1;
      this.pageSize = 4;
      this.count = 0;
      this.allPage = 0;
      this.noDataIsShow = false;
      this.isLoad = false;
      this.isOved = false;
      this.cardList = [];
    },
    selectCard(index) {
      //选择银行卡后跳转
      const selectMyCard = this.$store.state.selectMyCard;
      if (!selectMyCard.status) {
        return false;
      }
      let myCardInfo = {
        id: this.cardList[index].Id,
        bankLogo: this.cardList[index].BankLogo,
        bankCardName: this.cardList[index].BankName,
        bankCardNo: this.cardList[index].BankCardNo
      };
      this.$store.commit("update", { myCardInfo });
      wx.redirectTo({ url: selectMyCard.url });
    },
    gotoAddCard() {
      wx.navigateTo({
        url: "/pages/master/addCard/main"
      });
    },
    getBankList() {
      let that = this;
      post(
        "Bank/BankList",
        {
          UserId: that.userId,
          Token: that.token,
          page: that.page,
          pagesize: that.pageSize
        },
        that.curPage
      ).then(result => {
        if (result.code === 0) {
          that.count = result.count;
          if (that.count == 0) {
            that.noDataIsShow = true;
          }
          if (parseInt(that.count) % that.pageSize === 0) {
            that.allPage = that.count / that.pageSize;
          } else {
            that.allPage = parseInt(that.count / that.pageSize) + 1;
          }
          if (that.allPage > that.page) {
            that.isLoad = true;
          } else {
            that.isLoad = false;
          }
          if (result.data.length > 0) {
            if (that.page === 1) {
              that.cardList = [];
            }
            result.data.forEach(item => {
              let cardNo = item.BankCardNo.replace(/\s/g, "").replace(
                /(\d{4})\d+(\d{4})$/,
                "**** **** **** $2"
              );
              console.log(cardNo);
              that.$set(item, "cardNoArr", cardNo.split(" "));
            });
            that.cardList = that.cardList.concat(result.data);
          }
        }
      });
    },
    DeleteBank(index, cardId) {
      let that = this;
      post(
        "Bank/DeleteBank",
        {
          UserId: that.userId,
          Token: that.token,
          Id: cardId
        },
        that.curPage
      ).then(result => {
        if (result.code === 0) {
          wx.showToast({
            title: "解绑成功!",
            icon: "none",
            duration: 1500,
            success: function() {
              setTimeout(function() {
                that.cardList.splice(index, 1);
              }, 1500);
            }
          });
        }
      });
    },
    loadMore() {
      //加载更多
      if (this.isLoad) {
        this.page++;
        this.getBankList();
      } else {
        if (this.page > 1) {
          this.isOved = true;
        } else {
          this.isOved = false;
        }
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.pageContent {
  height: calc(100vh - 20rpx);
  background: #fff;
  position: relative;
  top: 20rpx;
  overflow: hidden;
  overflow-y: auto;
}

.cardList {
  padding: 30rpx;
}

.cardList .item {
  color: rgba(255, 255, 255, 0.8);
  height: 260rpx;
  position: relative;
  padding: 40rpx;
  box-sizing: border-box;
  margin-bottom: 30rpx;
  background-image: -webkit-linear-gradient(left,#5da2d9,#3f69bd);
  border-radius: 16rpx;
}

.cardList .item:last-child {
  margin-bottom: 0;
}

.cardList .item .bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.cardImg {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  margin-right: 20rpx;
  background: rgba(255, 255, 255, 1);
  position: relative;
}

.cardImg img {
  width: 60rpx;
  height: 60rpx;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-top: -30rpx;
}

.item .cardImg,
.item .txtBox {
  position: relative;
  z-index: 3;
}

.txtBox .title {
  font-size: 36rpx;
}

.txtBox .type {
  font-size: 24rpx;
  color: #bee4f7;
}

.txtBox .number {
  line-height: 60rpx;
  margin-top: 30rpx;
}

.number .xing {
  font-size: 38rpx;
  color: rgba(255, 255, 255, 1);
  display: inline-block;
  vertical-align: middle;
  margin-right: 50rpx;
}

.number .xing:last-child {
  margin-right: 0;
}

.number .num {
  font-size: 40rpx;
}
.icon-add{
  width: 40rpx;
  height: 40rpx;
  margin-right: 10rpx;
  vertical-align: middle;
}
</style>