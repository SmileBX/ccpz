<template>
  <div class="pageContent bg_fff">
    <scroll-view class="scroll" scroll-y @scrolltolower="loadMore">
    <div class="weui-cells help__weui-cells">
      <div class="item">
        <div class="weui-cell" @tap="jianjie=!jianjie">
          <div class="weui-cell__bd">
            <p class="txt">平台简介</p>
          </div>
          <span class="icon-arrow" :class="{'arrow-up':!jianjie,'arrow-down':jianjie}"></span>
        </div>
        <div class="spread" v-if="con !=='' && !jianjie">
          <div class="con">{{con.Description}}</div>
        </div>
      </div>
      <div class="item">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p class="txt">用户指导</p>
          </div>
          <!-- <span class="icon-arrow arrow-down"></span> -->
        </div>
        <div class="spread">
          <div class="weui-cell" v-for="(item,index) in list" :key="index" @tap="gotoDetail(item.Id)">
            <div class="weui-cell__bd">
              <p class="txt">{{index+1}}、{{item.Title}}</p>
            </div>
            <span class="icon-arrow arrow-right"></span>
          </div>
        </div>
      </div>
    </div>
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
  onShow(){
    this.initData();
    this.AboutUs();
    this.HelpCenterList();
  },
  data() {
    return {
      page:1,
      pageSize:15,
      list:[],
      isOver:false,
      con:"",   //平台简介
      jianjie:false  //点击平台简介收起展开；false：收起；true：展开
    }
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "帮助中心"
      });
    },
    initData(){
      this.page = 1;
      this.list = [];
      this.isOver = false;
      this.con = {};
      this.jianjie = {};
    },
    AboutUs(){
      post("About/AboutUs",{}).then(res => {
        if(res.code===0){
          this.con = res.data;
        }
      })
    },
    HelpCenterList(){  //获取帮助中心的列表
      let that = this;
      post("About/HelpCenterList",{
        Page:that.page,
        PageSize:that.pageSize
      }).then(res => {
        if(res.code===0){
          if(that.page===1){
            that.list = [];
          }
          if(res.data.length < that.pageSize){
            that.isOver = true;
          }
          if(res.data.length>0){
            that.list = that.list.concat(res.data);
          }
        }
      })
    },
    gotoDetail(id){  //跳转到详情页 
      wx.navigateTo({
        url: `/pages/member/helpDetail/main?id=${id}`
      })
    },
    loadMore(){
      if(!this.isOver){
        this.page++;
        this.HelpCenterList();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.help__weui-cells{
    border-top:20rpx solid #f2f2f2;
}
.pageContent{
    height: 100vh;
    overflow: hidden;
}
.scroll{
  height: 100vh;
}
</style>
