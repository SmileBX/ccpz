<template>
  <div class="pageContent">
    <div class="filterMenu bg_fff" style="padding:0;">
      <ul class="menu bbLi__menu bbNo__menu li_33 flex center">
        <li :class="{'active':type===0}" @click="shiftMenu(0)">
          <div class="item">全部</div>
        </li>
        <li :class="{'active':type===1}" @click="shiftMenu(1)">
          <div class="item">获得</div>
        </li>
        <li :class="{'active':type===2}" @click="shiftMenu(2)">
          <div class="item">消耗</div>
        </li>
      </ul>
    </div>
    <scroll-view class="filterContent" scroll-y="true" @scrolltolower="moreLoad">
      <ul class="detailList" v-if="list.length>0">
        <li v-for="(item,index) in list" :key="index">
          <div class="flex">
            <div class="flex1">
              <p class="title">{{item.Statusstr}}</p>
            </div>
            <p class="change right text_r">
              <span class="changeNum" :class="[item.changeType===1 ? 'add':'reduce']">{{item.Change}}</span>
            </p>
          </div>
          <div class="flex">
            <div class="flex1">
              <p class="time">{{item.AddTime}}</p>
            </div>
            <p class="num right text_r">积分：{{item.After}}</p>
          </div>
        </li>
      </ul>
      <div
        class="noData center"
        style="padding:60rpx 30rpx;"
        v-if="hasDataList===false && hasDataList !=='' && page===1"
      >暂无数据</div>
      <div
        class="noData center"
        style="padding:20rpx 30rpx;"
        v-if="isOved && page>1"
      >我也是有底线的</div>
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
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.initData();
    this.getScoreList();
  },
  data() {
    return {
      userId: "",
      token: "",
      curPage: "",
      type: 0, //类型；0：全部；1：获得；2：消费
      list: [],
      isOved: false,
      hasDataList: "",
      page: 1,
      pageSize: 15
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "积分明细"
      });
    },
    initData(){
      this.list =[];
      this.isOved =false;
      this.hasDataList ="";
      this.page =1;
    },
    shiftMenu(index) {
      //切换tab
      this.type = index;
      this.hasDataList = "";
      this.isOved = false;
      this.page = 1;
      this.list = [];
      this.getScoreList();
    },
    getScoreList() {
      let that = this;
      post(
        "User/ScoreList",
        {
          UserId: that.userId,
          Token: that.token,
          Page: that.page,
          PageSize: that.pageSize,
          Type: that.type
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          if (res.data.length > 0) {
            if (that.page === 1) {
              that.list = [];
            }
            that.hasDataList = true;
            if(res.data.length < that.pageSize){
              that.isOved = true;
            }
            res.data.forEach(item => {
              if(item.Change[0]==="+"){
                that.$set(item,"changeType",1);
              }
              else{
                that.$set(item,"changeType",0);
              }
            });
            console.log(res.data);
            that.list = that.list.concat(res.data);
          } else {
            that.hasDataList = false;
          }
        }
      });
    },
    moreLoad(){
      if(!this.isOved){  //继续加载
        this.page++;
        this.getScoreList();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.bbLi__menu{
  font-size: 32rpx;
  color: #333;
}
.filterContent{
  height: calc(100vh - 90rpx);
  background: #fff;
  margin-top:20rpx;
}

</style>
