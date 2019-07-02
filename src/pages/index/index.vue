<template>
  <div class="pageContent">
    <!-- 顶部搜索 -->
    <div class="headerTop" style="padding-top:20rpx;padding-bottom:20rpx;">
      <div class="inner flex flexAlignCenter">
        <div class="local">
          <span class="name" @click="goSelectCity">{{CityName}}</span>
          <span class="icon-arrow arrow-down"></span>
        </div>
        <div class="searchBox flex1" @click="showSearch = true">
          <div class="search">
            <img src="/static/images/icons/search.png" class="icon_search" alt>
            <span>搜索</span>
          </div>
        </div>
      </div>
    </div>
      <!-- 搜索导航 -->
      <div class="position-fixed mask" v-show="showSearch" @clcik.self="showSearch = false;">
        <div class="box">
          <!-- 请选择要搜索的分类 -->
          <div class="box-title">请选择要搜索的分类</div>
          <ul class="navList li_25 center navList2 searchNav">
            <li @click="goSearch(item.Id)" v-for="(item,index) in publishType" :key="index">
              <div class="outside">
                <div class="icon-img">
                  <img :src="item.Img" alt>
                </div>
                <p class="title">{{item.Name}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    <scroll-view class="indexPage" scroll-y>
      <!-- banner -->
      <div class="bannerBox" style="padding:0;margin-bottom:0;">
        <swiper
          indicator-dots="true"
          autoplay="true"
          interval="3000"
          class="banner"
          previous-margin="60rpx"
          next-margin="30rpx"
          circular="true"
          indicator-active-color="rgba(255,255,255,0.8)"
        >
          <block v-for="(item,index) in picList" :key="index">
            <swiper-item class="item">
              <img :src="item.Pic" alt @click="record(item.Id)">
              <!-- <image src="item" class="slide-image" width="355" height="150"> -->
            </swiper-item>
          </block>
        </swiper>
      </div>
      <!-- 导航 -->
      <div class="section">
        <ul class="navList li_25 center navList2">
          <li @click="goToList(item.Id)" v-for="(item,index) in publishType" :key="index">
            <div class="outside">
              <div class="icon-img">
                <img :src="item.Img" alt>
              </div>
              <p class="title">{{item.Name}}</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 头条1 -->
      <div class="section">
        <div class="toutiao flex">
          <div class="left flexColumn flex justifyContentCenter center" @click="goTo(1)">
            <!-- <span class="name">成成</span>
            <span class="tipsName">头条</span>-->
            <img src="/static/images/icons/newsTips.jpg" class="tipImg" alt>
          </div>
          <div class="conMain flex1">
            <ul class="wenList">
              <li v-for="(item,nindex) in newList" :key="nindex" @click="newsDetail(item.Id)">
                <span class="type">{{item.Keywords}}</span>
                {{item.Title}}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 优质房源3 -->
      <div class="section">
        <div class="section__hd flex flexAlignCenter" @click="goTo(3)">
          <div class="flex1">
            <p class="title">优质房源</p>
          </div>
          <span class="icon-arrow arrow-right"></span>
        </div>
        <div class="section__bd">
          <block v-if="ggaoList.length>0">
            <ul class="tuClumn clear">
              <li v-for="(item,index) in ggaoList" @tap="gotoList(item.Id,item.Url)" :key="index">
                <img :src="item.Pic" alt>
              </li>
            </ul>
          </block>
          <!-- <block v-else>
          <ul class="tuClumn clear">
            <li @tap="gotoList(1)">
              <img src="/static/images/icons/picMenu1.jpg" alt>
            </li>
            <li @tap="gotoList(2)">
              <img src="/static/images/icons/picMenu2.jpg" alt>
            </li>
            <li @tap="gotoList(3)">
              <img src="/static/images/icons/picMenu3.jpg" alt>
            </li>
          </ul>
          </block>-->
        </div>
      </div>
      <!-- 热门商铺2 -->
      <div class="section">
        <div class="section__hd flex flexAlignCenter" @click="goTo(2)">
          <div class="flex1">
            <p class="title">热门商铺</p>
          </div>
          <span class="icon-arrow arrow-right"></span>
        </div>
        <div class="section__bd">
          <div
            class="noData center"
            style="padding:60rpx 30rpx;margin-top:0;"
            v-if="hotStoreList.length<1 && page===1"
          >暂无数据</div>
          <div class="storeNowrapBox" v-if="hotStoreList.length>0">
            <scroll-view class="storeNowrap" scroll-x>
              <ul class="column storeList">
                <li
                  class="item"
                  v-for="(item,index) in hotStoreList"
                  :key="index"
                  @tap="gotoRouseDetail(item.Id)"
                >
                  <div class="outside">
                    <div class="pictrueAll">
                      <img :src="item.PicNo" alt>
                    </div>
                    <div class="txtBox">
                      <p class="title ellipsis">
                        <span
                          class="typeName"
                          v-if="item.GladBuyerTrade !==''"
                        >{{item.GladBuyerTrade}}</span>
                        {{item.Title}}
                      </p>
                      <p class="other">
                        <span class="priceArea">
                          <span class="price">￥{{item.PropertyPrice}}</span>
                        </span>
                        <span class="msgList">
                          <span class="msgItem">{{item.TypeName}}</span>
                          <span class="msgItem">{{item.GladBuyArea}}</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </li>
                <!-- <houseItem :list="hotStoreList"></houseItem> -->
              </ul>
            </scroll-view>
          </div>
        </div>
      </div>
      <!-- 广告图 -->
      <div
        class="swiper pd15 bg_fff"
        v-if="ggaoPic.length>0"
        @tap="gotoList(ggaoPic[0].Id,ggaoPic[0].Url)"
      >
        <img :src="ggaoPic[0].Pic" class="radius10" mode="widthFix" alt>
      </div>
      <!-- 为您推荐 -->
      <div class="section">
        <div class="section__hd flex flexAlignCenter" style="padding-bottom:15rpx;">
          <div>
            <p class="title">为您推荐</p>
          </div>
          <div class="flex1 text_r recommendMenu">
            <span
              :class="{'active':menuTab===index}"
              v-for="(item,index) in brandIdList"
              :key="index"
              @tap="shiftMenu(index,item.id)"
            >{{item.title}}</span>
          </div>
        </div>
        <div class="section__bd">
          <div
            class="noData center"
            style="padding:60rpx 30rpx;margin-top:0;"
            v-if="recomendList.length<1 && page===1"
          >暂无数据</div>
          <!-- 结果 -->
          <div class="filterContent" v-if="recomendList.length>0">
            <ul class="column levelPanel storeList">
              <!-- <li class="item">
                <div class="outside">
                  <div class="pictrueAll">
                    <div class="pictrue img">
                      <img src="/static/images/of/index_a1.jpg" alt>
                    </div>
                  </div>
                  <div class="txtBox">
                    <p class="title ellipsis">
                      <span class="typeName">拼办公室</span>深圳连锁办公室拼租
                    </p>
                    <p class="priceArea">
                      <span class="price">3000</span>元/月
                    </p>
                    <p class="msgList">
                      <span class="msgItem">工程设计</span>
                      <span class="msgItem">
                        100m
                        <span class="sup">2</span>
                      </span>
                      <span class="msgItem">3卡2独</span>
                      <span class="msgItem">罗湖</span>
                    </p>
                    <p class="tipsList">
                      <span>股份合作</span>
                      <span>可使用公司资质</span>
                      <span>可挂牌</span>
                    </p>
                  </div>
                </div>
              </li>-->
              <!-- 拼租组件 -->
              <rentItem :list="recomendList" v-if="menuTab===0"></rentItem>
              <!-- 拼租组件  end -->
              <!-- 组建组件 -->
              <formationItem :list="recomendList" v-if="menuTab===1"></formationItem>
              <!-- 组建组件 end -->
              <!-- 拼活动组件 -->
              <activityItem :list="recomendList" v-if="menuTab===2"></activityItem>
              <!-- 拼活动组件  end -->
              <!-- 房源组件 -->
              <houseItem :list="recomendList" v-if="menuTab===3"></houseItem>
              <!-- 房源组件  end -->
            </ul>
            <p style="padding:0 30rpx 40rpx;color:#999;text-align:center">
              <span @tap="gotoMoreList" style="padding:20rpx 30rpx;">加载更多..</span>
            </p>
          </div>
        </div>
      </div>
    </scroll-view>
    <!-- 新用户礼包弹窗 -->
    <div
      class="shade middle__shade gift__shade"
      v-if="giftList.length>0 && isNewUser && showGiftCount===1"
    >
      <div class="mask"></div>
      <div class="shadeContent">
        <div class="gift">
          <img
            src="/static/images/icons/cancle2.png"
            class="icon-close"
            @click="closeGiftShade"
            alt
          >
          <div class="gift__hd">
            <img src="/static/images/icons/giftTopBg.png" mode="widthFix" class="giftTopBg" alt>
          </div>
          <div class="gift__bd">
            <div class="giftList">
              <div class="item flex" v-for="(item,index) in giftList" :key="index">
                <div class="priceBox flex flexAlignCenter justifyContentCenter">
                  <p>
                    ￥
                    <span class="num">{{item.Denomination}}</span>
                  </p>
                </div>
                <div class="txtBox flex1">
                  <p class="title ellipsis">{{item.Name}}</p>
                  <p class="time">{{item.StartEndTime}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="gift__ft">
            <div class="btn" @click="gotoCoupon">立即查看</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 新用户礼包弹窗  end -->
  </div>
</template>

<script>
import { post, getCurrentPageUrlWithArgs } from "@/utils";
import { mapState, mapMutations } from "vuex"; //vuex辅助函数
import location from "@/utils/location";
import rentItem from "@/components/rentItem.vue";
import houseItem from "@/components/houseItem.vue";
import activityItem from "@/components/activityItem.vue";
import formationItem from "@/components/formationItem.vue";
export default {
  //IsHot:1-优质房源;2-热门商铺;3-为您推荐
  data() {
    return {
      // cityName:"",
      showSearch:false,//显示搜索的分类
      picList: [], //banner图
      newList: [], //头条消息
      publishType: [], //发布类型
      cityCode: "", //城市code
      // CityName:"深圳"
      curPage: "",
      userId: "",
      token: "",
      giftList: [], //新用户礼包
      isNewUser: true, //是否是新用户
      showGiftCount: 0,
      brandIdList: [
        {
          id: 21,
          title: "拼租"
        },
        {
          id: 22,
          title: "组建"
        },
        {
          id: 23,
          title: "拼活动"
        },
        {
          id: 24,
          title: "房源"
        }
      ], //为您推荐中的品牌id;拼租 = 21,组建 = 22,拼活动 = 23,房源 = 24,
      menuTab: -1, //为您推荐中的tab选中
      page: 1,
      ggaoList: [], //广告位
      ggaoPic: [], //为您推荐上面的广告
      hotStoreList: [], //热门商铺的列表
      recomendList: [] //为您推荐的列表
    };
  },
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    this.menuTab = -1;
    this.recomendList = [];
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    location(this).then(res => {
      this.cityCode = res.CityCode;
      this.getQueryRentList(24, 2, 20,0); //热门商铺
      this.getQueryRentList(21, 3, 20,0); //为您推荐
    });
    this.initData();
    if (wx.getStorageSync("showGiftCount") !== "") {
      this.showGiftCount = wx.getStorageSync("showGiftCount");
    } else {
      this.showGiftCount = 0;
    }
    console.log("showGiftCount:" + this.showGiftCount);
    if (this.userId && this.token) {
      this.IsNewUser();
    }
    // this.getLocal();GetCityCode
    // 初始化定位和城市名称
    // .then(res=>{
    //   this.GetCityCode(this.CityName);
    // });
  },
  computed: {
    ...mapState(["CityName"])
  },
  components: {
    rentItem,
    houseItem,
    activityItem,
    formationItem
  },

  methods: {
    initData() {
      this.getBannerList(1); //获取banner
      this.getBannerList(3); //优质房源广告位
      this.getBannerList(4); //成成企业拼租广告位
      this.getpublishType();
      this.getNews();
    },
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "首页"
      });
    },
    gotoList(id, objUrl) {
      if (objUrl !== "") {
        wx.navigateTo({
          url: objUrl
        });
      } else {
        wx.navigateTo({
          url: "/pages/agreement/main?type=2&id=" + id
        });
      }
    },
    //获取发布类型
    getpublishType() {
      post("Goods/GetBrandList").then(res => {
        console.log(res, "GetBrandList");
        if (res.code == 0) {
          this.publishType = res.data;
        }
      });
    },

    getBannerList(type) {
      //获取轮播图,广告位
      post("Banner/BannerList", {
        Cid: type //Cid=0:全部广告图 Cid=1:首页滚动图片 Cid=2:首页广告图 Cid=3:优质房源 Cid=4:成成企业拼租
      }).then(res => {
        if (res.code == 0) {
          if (type === 1) {
            this.picList = res.data;
          }
          if (type === 3) {
            this.ggaoList = res.data;
            console.log("___________________");
            console.log(this.ggaoList);
          }
          if (type === 4) {
            this.ggaoPic = res.data;
          }
        }
      });
    },
    //后台获取点击广告的次数（记录）--userId token
    record(id) {
      post("Banner/BannerHits", {
        Id: id
      });
    },
    //获取首页头条默认显示三条
    getNews() {
      post("About/AboutList", {
        PageSize: 3,
        Page: 1
      }).then(res => {
        if (res.code == 0) {
          this.newList = res.data;
        }
      });
    },
    goTo(n) {
      if (n == 1) {
        //头条消息headLineList
        wx.navigateTo({ url: "/pages/messages/headLineList/main?type=1" });
      }
      if (n == 2) {
        //跳转到房源并带参数
        wx.navigateTo({ url: "/pages/rent/list/main?type=24&isHot=2" });
      }
      if (n == 3) {
        //跳转到房源并带参数
        wx.navigateTo({ url: "/pages/rent/list/main?type=24&isHot=1" });
      }
      if (n == 5) {
        //5组件团队
        wx.navigateTo({ url: "/pages/rent/buildTeam/main" });
      }
    },
    goToList(id) {
      wx.navigateTo({ url: "/pages/rent/list/main?type=" + id });
    },
    //头条详情
    newsDetail(id) {
      wx.navigateTo({
        url: "/pages/messages/topNewsDetail/main?url=index&Id=" + id
      });
    },
    // getLocal(){
    //   let that = this;
    //   wx.getLocation({
    //   type: 'wgs84',
    //     success (res) {
    //       const latitude = res.latitude;
    //       const longitude = res.longitude;
    //       wx.request({
    //         url: 'https://api.map.baidu.com/geocoder/v2/?ak=KpdqD9A6OzIRDWUV1Au2jcPgy9BZxDGG&location=' + latitude + ',' + longitude + '&output=json&pois=1',
    //         data: {},
    //         header: {
    //           'Content-Type': 'application/json'
    //         },
    //         success: function (res2) {
    //           that.GetCityCode(res2.data.result.addressComponent.city);
    //           // that.cityName=res2.data.result.addressComponent.city;
    //         },
    //         fail: function () {
    //           // that.cityName="深圳市"
    //           that.GetCityCode("深圳市");
    //         },
    //         complete: function () {
    //         }
    //       })
    //     }
    //   })
    // },
    // GetCityCode(localName){  //根据定位城市名获取对应的城市代码code
    //   console.log('当前选择城市',localName)
    //  post("Area/GetCityCode",{
    //    Name:localName
    //  }).then(res => {
    //    this.cityName = res.data.Name;
    //     wx.setStorageSync("cityName",res.data.Name);
    //     wx.setStorageSync("cityCode",res.data.Code);
    //  })
    // },
    // 跳转选择城市
    goSelectCity() {
      wx.navigateTo({ url: "/pages/city-select/main" });
    },
    GetNewCoupon() {
      //新用户礼包列表
      let that = this;
      post(
        "Coupon/GetNewCoupon",
        {
          UserId: that.userId,
          Token: that.token
        },
        that.curPage
      ).then(res => {});
    },
    IsNewUser() {
      //判断是否是新用户
      let that = this;
      post(
        "Coupon/IsNewUser",
        {
          UserId: that.userId,
          Token: that.token
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          if (res.data.IsNewUser === 1) {
            //是新用户
            that.isNewUser = true;
            that.giftList = res.data.list;
            if (that.showGiftCount === 0) {
              that.showGiftCount++;
              wx.setStorageSync("showGiftCount", that.showGiftCount);
              that.GetNewCoupon();
            }
          } else {
            that.isNewUser = false;
          }
        }
      });
    },
    closeGiftShade() {
      //关闭礼包弹窗
      this.isNewUser = false;
    },
    gotoCoupon() {
      //跳转到优惠券
      wx.navigateTo({
        url: "/pages/mine2/myCoupon/main"
      });
    },
    shiftMenu(index, id) {

      console.log("切换的" + id);
      this.getQueryRentList(parseInt(id), 3, 20,index);
    },
    gotoMoreList() {
      //点击为您推荐中的加载更多的时候，跳转到相对应的列表中去
      let type = this.brandIdList[this.menuTab].id;
      wx.navigateTo({
        url: `/pages/rent/list/main?type=${type}&isHot=3`
      });
    },
    gotoRouseDetail(id) {
      //热门商铺跳转详情
      let type = this.brandIdList[3].id;
      wx.navigateTo({
        url: `/pages/rent/detail/main?type=${type}&id=${id}`
      });
    },
    getQueryRentList(brandId, hotType, pageSize,index) {
      let that = this;
      //获取发布列表
      post(
        "Goods/QueryRentList",
        {
          UserId: that.userId,
          Token: that.token,
          IsHot: hotType, //1:优质房源；2：热门商铺；3：为您推荐
          BrandId: brandId,
          Code: that.cityCode,
          Page: that.page,
          PageSize: pageSize
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          if (hotType === 2) {
            if (that.page === 1) {
              that.hotStoreList = [];
            }
            //热门商铺
            if (res.data.length > 0) {
              that.hotStoreList = res.data;
            }
          }
          if (hotType === 3) {
            if (that.page === 1) {
              that.recomendList = [];
            }
            //为您推荐
            if (res.data.length > 0) {
              that.recomendList = res.data;
            }
          }
          
        //切换为您推荐中的选项
        index!==undefined&&(this.menuTab = index)
        }
      });
    },
    // 跳转搜索
    goSearch(id){
      wx.navigateTo({
        url:`/pages/rent/searchHistory/main?brandId=${id}`
      })
      this.showSearch = false;
    },
  },

  created() {}
};
</script>
<style lang="scss" scoped>
.position-fixed{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index:100;
}
.box{
  width:94%;
  height:330rpx;
  background:#fff;
  margin:300rpx auto 0;
  border-radius:5rpx;
}
.box-title{
  line-height:120rpx;
  font-size:32rpx;
  text-align:center;
}
.searchNav{
}
.section {
  background: #fff;
  margin-bottom: 20rpx;
}
.navList {
  padding: 0;
}
.navList .icon-img,
.navList .icon-img img {
  width: 100rpx;
  height: 100rpx;
  margin-bottom: 10rpx;
}
.tipImg {
  width: 74rpx;
  height: 74rpx;
}
.wenList li .type {
  color: #ff952e;
  border-color: #ff952e;
}
.indexPage {
  height: calc(100vh - 96rpx);
  height: -webkit-calc(100vh - 96rpx);
  height: -moz-calc(100vh - 96rpx);
  height: -ms-calc(100vh - 96rpx);
  height: -o-calc(100vh - 96rpx);
  background: #fff;
}
.section {
  margin-bottom: 0;
}
.toutiao {
  padding: 16rpx 30rpx;
  position: relative;
  &::before,
  &::after {
    position: absolute;
    content: "";
    height: 1px;
    left: 30rpx;
    right: 30rpx;
    background: #f2f2f2;
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
}
.recommendMenu {
  font-size: 28rpx;
  color: #999;
  span {
    margin-left: 40rpx;
    &.active {
      color: #ff952e;
    }
  }
}
.gift__shade .gift {
  width: 590rpx;
  // background: #fff;
}
.giftTopBg {
  width: 100%;
  display: block;
}
.gift {
  position: relative;
}
.gift .gift__hd {
  margin-top: -60rpx;
}
.gift__bd,
.gift__ft {
  background: #fff;
  padding: 30rpx;
}
.gift__bd {
  padding-bottom: 0;
}
.giftList {
  height: 438rpx;
  overflow: hidden;
  overflow-y: auto;
}
.giftList .item {
  border-radius: 12rpx;
  background: #fdf4ec;
  overflow: hidden;
  margin-bottom: 20rpx;
  position: relative;
}
.giftList .item .priceBox {
  position: absolute;
  height: 100%;
  background-image: -webkit-linear-gradient(177deg, #ff9468, #fdb973);
  color: #fff;
  font-size: 28rpx;
  width: 142rpx;
  text-align: center;
  .num {
    font-size: 48rpx;
  }
  &::before {
    position: absolute;
    content: "";
    width: 24rpx;
    height: 24rpx;
    border-radius: 50%;
    z-index: 10;
    background: #fff;
    top: 50%;
    margin-top: -12rpx;
    left: -12rpx;
  }
}
.giftList .item .txtBox {
  padding: 26rpx;
  padding-left: 168rpx;
  .title {
    font-size: 32rpx;
    margin-bottom: 10rpx;
  }
  .time {
    font-size: 24rpx;
    color: #aaaaaa;
  }
}
.gift__ft {
  padding-bottom: 30rpx;
}
.gift__ft .btn {
  font-size: 32rpx;
  background: #ff952e;
  width: 75%;
  box-shadow: 0 0 10rpx #f0d4ba;
  margin: 0 auto;
  color: #fff;
  border-radius: 200rpx;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
}
.shade .icon-close {
  width: 44rpx;
  height: 44rpx;
  position: absolute;
  right: 0;
  top: -60rpx;
  z-index: 30;
}
</style>
