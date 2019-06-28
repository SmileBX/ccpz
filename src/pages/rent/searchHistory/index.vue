<template>
  <div class="pageContent bg_fff">
    <!-- 搜索 -->
    <div class="searchTop">
      <div class="searchBox flex">
          <div class="search flex flex1">
            <img src="/static/images/icons/search.png" class="icon_search" alt>
            <input type="text" @input="changeKeyWords" confirm-type="search" @confirm="gotoList" class="flex1" :value="keyWords" placeholder="请输入您要搜索的关键词">
            <img src="/static/images/icons/cancle.png"  class="icon-del" @tap="delKeyWords" alt="">
          </div>
          <span class="btnSearch" @tap="gotoList">搜索</span>
        </div>
    </div>
    <div class="searchRecord">
      <div class="item">
        <div class="section__hd flex flexAlignCenter">
          <p class="title flex1">历史搜索</p>
          <img src="/static/images/icons/del.jpg" class="icon-del" @tap="clearHistory" alt="" v-if="hisList.length>0">
        </div>
        <div class="tipsList border__tipsList bg_grey" v-if="hisList.length>0">
          <span v-for="(item,index) in hisList" :key="index" :class="{'active':hisTabIndex===index}"  @click="selectHistory(1,index,item)">{{item}}</span>
        </div>
      </div>
      <div class="item">
        <div class="section__hd">
          <p class="title">热门搜素</p>
        </div>
        <div class="tipsList border__tipsList bg_grey"  v-if="hotList.length>0">
          <span v-for="(item,index) in hotList" :class="{'active':hotTabIndex===index}" :key="index" @click="selectHistory(2,index,item)">{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { post, toLogin, getCurrentPageUrlWithArgs,trim } from "@/utils";
export default {
  data() {
    return {
      userId:"",
      token:"",
      curPage:"",
      brandId:"",
      hotList:[],  //热门搜素
      hisList:[],  //历史搜索
      hasData:false,
      hotTabIndex:"",
      hisTabIndex:"",
      keyWords:""
    };
  },
  onLoad() {
    this.setBarTitle();
  },
  onShow(){
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    if(this.$root.$mp.query.brandId && this.$root.$mp.query.brandId !==""){
      this.brandId = this.$root.$mp.query.brandId;
      
    }else{
      this.brandId = 21;
    }
    this.getSearchSkip();
  },
  components: {},
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "搜索"
      });
    },
    selectHistory(type,index,item){
      // type: 1:历史搜索；2：热门搜素
      parseInt(index);
      if(type===1){  
        if(index === this.hisTabIndex){
          this.hisTabIndex = '';
          this.keyWords = "";
        }else{
           this.hotTabIndex = '';
            this.hisTabIndex = index;
          this.keyWords = item;
        }
      }
      if(type===2){
        if(index === this.hotTabIndex){  //已经选过的时候，要清除掉
          this.hotTabIndex = '';
          this.keyWords = "";
        }else{
          this.hotTabIndex = index;
          this.hisTabIndex = '';
          this.keyWords = item;
        }
      }
    },
    changeKeyWords(){  //当搜索框里面的文字发生变化的时候，要把热门搜素跟搜素历史的选中给清除掉
      this.hotTabIndex = "";
      this.hisTabIndex = "";
    },
    delKeyWords(){  //删除输入的文字
     this.keyWords = '';
    },
    gotoList(){  //点击搜索的时候
      if(trim(this.keyWords) !==""){
        //跳转到
        wx.redirectTo({
          url: `/pages/rent/list/main?type=${this.brandId}&keyWords=${this.keyWords}`
        })
      }
    },
    clearHistory(){  //点击清空的删除图标的时候
    let that = this;
      wx.showModal({
        // title: '提示',
        content: '您确定要清空搜索历史么？',
        success (res) {
          if (res.confirm) {
            that.SearchClear();
          } else if (res.cancel) {
            
          }
        }
      })

    },
    getSearchSkip(){  //获取搜索历史等
      post("Goods/SearchSkip",{
        UserId:this.userId,
        Token:this.token,
        BrandId:this.brandId
      },this.curPage).then(res => {
        if(res.code===0){
          this.hasData = true;
          if(res.data.HisSearch.length>0){
            this.hisList = res.data.HisSearch;
          }
          if(res.data.HotSearch.length>0){
            this.hotList = res.data.HotSearch;
          }
        }
      })
    },
    SearchClear(){  //清空历史搜索
      post("Goods/SearchClear",{
        UserId:this.userId,
        Token:this.token
      },this.curPage).then(res => {
         if(res.code===0){
           wx.showToast({
            title: '清空历史搜索成功！',
            icon: 'none',
            duration: 1500,
            success:() => {
              setTimeout(() => {
                this.hisList = [];
                this.hisTabIndex = '';
              },1500)
            }
          })

         }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.pageContent {
  height: 100vh;
}
.searchBox{
  padding-left:30rpx;
  .search{
    border:1px solid #e5e5e5;
    background: #f2f2f2;
    border-radius: 10rpx;
    padding:8rpx 18rpx;
  }
  .icon-del{
    width: 36rpx;
    height: 36rpx;
  }
  .btnSearch{
    width: 120rpx;
    text-align: center;
    font-size: 30rpx;
    line-height: 74rpx;
  }
}
.section__hd {
  .title {
    font-weight: normal;
  }
  .icon-del{
    width: 30rpx;
    height: 30rpx;
  }
}
.tipsList {
  padding:0 30rpx;
  margin-top:0;
span{
  font-size: 28rpx;
  color:#333;
  padding:10rpx 20rpx;
  border-radius: 10rpx;
  &.active{
    background: #ff952e;
    color:#fff;
  }
}
}
.searchRecord{
  .item{
    padding-bottom: 30rpx;
    position: relative;
    &::before{
      position: absolute;
      content: "";
      height: 1px;
      left:30rpx;
      right:30rpx;
      background: #f2f2f2;
      bottom:0;
    }
    &:last-child::before{
      display: none;
    }
  }
}

</style>