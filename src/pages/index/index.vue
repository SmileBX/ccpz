<template>
  <div class="pageContent">
    <!-- 顶部搜索 -->
    <div class="headerTop" style="padding-top:20rpx;padding-bottom:20rpx;">
      <div class="inner flex flexAlignCenter">
        <div class="local">
          <span class="name" @click="goSelectCity">{{CityName}}</span>
          <span class="icon-arrow arrow-down"></span>
        </div>
        <div class="searchBox flex1">
          <div class="search">
            <img src="/static/images/icons/search.png" class="icon_search" alt>
            <span>搜索</span>
          </div>
        </div>
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
          <span class="tipsName">头条</span> -->
          <img src="/static/images/icons/newsTips.jpg" class="tipImg" alt="">
        </div>
        <div class="conMain flex1">
          <ul class="wenList">
            <li v-for="(item,nindex) in newList" :key="nindex" @click="newsDetail(item.Id)">
              <span class="type">{{item.Keywords}}</span>{{item.Title}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 优质房源3 -->
    <div class="section">
      <div class="section__hd flex flexAlignCenter"  @click="goTo(3)">
        <div class="flex1">
          <p class="title">优质房源</p>
        </div>
        <span class="icon-arrow arrow-right"></span>
      </div>
      <div class="section__bd">
        <div class="tuClumn clear">
          <li>
            <img src="/static/images/icons/picMenu1.jpg" alt>
          </li>
          <li>
            <img src="/static/images/icons/picMenu2.jpg" alt>
          </li>
          <li>
            <img src="/static/images/icons/picMenu3.jpg" alt>
          </li>
        </div>
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
        <div class="storeNowrapBox">
          <scroll-view class="storeNowrap" scroll-x>
            <ul class="column storeList">
              <li class="item">
                <div class="outside">
                  <div class="pictrueAll">
                    <img src="/static/images/of/index_a1.jpg" alt>
                  </div>
                  <div class="txtBox">
                    <p class="title ellipsis">
                      <span class="typeName">拼办公室</span>深圳连锁办公室拼租
                    </p>
                    <p class="other">
                      <span class="priceArea">
                        <span class="price">3000</span>元/月
                      </span>
                      <span class="msgList">
                        <span class="msgItem">1室</span>
                        <span class="msgItem">
                          100m
                          <span class="sup">2</span>
                        </span>
                        <span class="msgItem">罗湖</span>
                      </span>
                    </p>
                  </div>
                </div>
              </li>
              <li class="item">
                <div class="outside">
                  <div class="pictrueAll">
                    <img src="/static/images/of/index_a1.jpg" alt>
                  </div>
                  <div class="txtBox">
                    <p class="title ellipsis">
                      <span class="typeName">拼办公室</span>深圳连锁办公室拼租
                    </p>
                    <p class="other">
                      <span class="priceArea">
                        <span class="price">3000</span>元/月
                      </span>
                      <span class="msgList">
                        <span class="msgItem">1室</span>
                        <span class="msgItem">
                          100m
                          <span class="sup">2</span>
                        </span>
                        <span class="msgItem">罗湖</span>
                      </span>
                    </p>
                  </div>
                </div>
              </li>
              <li class="item">
                <div class="outside">
                  <div class="pictrueAll">
                    <img src="/static/images/of/index_a1.jpg" alt>
                  </div>
                  <div class="txtBox">
                    <p class="title ellipsis">
                      <span class="typeName">拼办公室</span>深圳连锁办公室拼租
                    </p>
                    <p class="other">
                      <span class="priceArea">
                        <span class="price">3000</span>元/月
                      </span>
                      <span class="msgList">
                        <span class="msgItem">1室</span>
                        <span class="msgItem">
                          100m
                          <span class="sup">2</span>
                        </span>
                        <span class="msgItem">罗湖</span>
                      </span>
                    </p>
                  </div>
                </div>
              </li>
              <li class="item">
                <div class="outside">
                  <div class="pictrueAll">
                    <img src="/static/images/of/index_a1.jpg" alt>
                  </div>
                  <div class="txtBox">
                    <p class="title ellipsis">
                      <span class="typeName">拼办公室</span>深圳连锁办公室拼租
                    </p>
                    <p class="other">
                      <span class="priceArea">
                        <span class="price">3000</span>元/月
                      </span>
                      <span class="msgList">
                        <span class="msgItem">1室</span>
                        <span class="msgItem">
                          100m
                          <span class="sup">2</span>
                        </span>
                        <span class="msgItem">罗湖</span>
                      </span>
                    </p>
                  </div>
                </div>
              </li>
              <li class="item">
                <div class="outside">
                  <div class="pictrueAll">
                    <img src="/static/images/of/index_a1.jpg" alt>
                  </div>
                  <div class="txtBox">
                    <p class="title ellipsis">
                      <span class="typeName">拼办公室</span>深圳连锁办公室拼租
                    </p>
                    <p class="other">
                      <span class="priceArea">
                        <span class="price">3000</span>元/月
                      </span>
                      <span class="msgList">
                        <span class="msgItem">1室</span>
                        <span class="msgItem">
                          100m
                          <span class="sup">2</span>
                        </span>
                        <span class="msgItem">罗湖</span>
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </scroll-view>
        </div>
      </div>
    </div>
    <!-- 广告图 -->
    <div class="swiper pd15 bg_fff">
      <img src="/static/images/of/gg1.jpg" class="radius10" mode="widthFix" alt>
    </div>
    <!-- 为您推荐 -->
    <div class="section">
      <div class="section__hd flex flexAlignCenter" style="padding-bottom:15rpx;">
        <div>
          <p class="title">为您推荐</p>
        </div>
        <div class="flex1 text_r recommendMenu">
          <span class="active">拼租</span>
          <span>组建</span>
          <span>拼活动</span>
          <span>房源</span>
        </div>
        
      </div>
      <div class="section__bd">
        <!-- 筛选条件 -->
        <!-- <div class="filterMenu">
          <ul class="menu flex justifyContentBetween center">
            <li>
              <div class="item">
                行业
                <span class="icon-sj sj-down"></span>
              </div>
            </li>
            <li>
              <div class="item">
                区域
                <span class="icon-sj sj-down"></span>
              </div>
            </li>
            <li>
              <div class="item">
                面积
                <span class="icon-sj sj-down"></span>
              </div>
            </li>
            <li>
              <div class="item">
                价格
                <span class="icon-sj sj-down"></span>
              </div>
            </li>
            <li>
              <div class="item">
                更多
                <span class="icon-sj sj-down"></span>
              </div>
            </li>
          </ul>
        </div> -->
        <!-- 结果 -->
        <div class="filterContent">
          <ul class="column levelPanel storeList">
            <li class="item">
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
            </li>
            <li class="item">
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
            </li>
            <li class="item">
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
            </li>
            <li class="item">
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
            </li>
          </ul>
        </div>
      </div>
    </div>
    </scroll-view>
    <!-- 新用户礼包弹窗 -->
    <div class="shade middle__shade gift__shade" v-if="giftList.length>0 && isNewUser && showGiftCount===1">
      <div class="mask"></div>
      <div class="shadeContent">
         <div class="gift">
           <div class="gift__hd">
             <img src="/static/images/icons/giftTopBg.png" mode="widthFix" class="giftTopBg" alt="">
           </div>
           <div class="gift__bd">
             <div class="giftList">
               <div class="item flex" v-for="(item,index) in giftList" :key="index">
                 <div class="priceBox flex flexAlignCenter justifyContentCenter">
                   <p>￥<span class="num">{{item.Denomination}}</span></p>
                 </div>
                 <div class="txtBox flex1">
                   <p class="title ellipsis">{{item.Name}}</p>
                   <p class="time">{{item.StartEndTime}}</p>
                 </div>
               </div>
             </div>
           </div>
           <div class="gift__ft">
             <div class="btn">立即查看</div>
           </div>
         </div>
      </div>
    </div>
    <!-- 新用户礼包弹窗  end -->
  </div>
</template>

<script>
import { post,getCurrentPageUrlWithArgs} from "@/utils";
import { mapState, mapMutations } from "vuex"; //vuex辅助函数
import initLocation from '@/utils/initLocation'
export default {
  data() {
    return {
      // cityName:"",
      picList: [],//banner图
      newList:[],//头条消息
      publishType:[],//发布类型
      // CityName:"深圳"
      curPage:"",
      userId:"",
      token:"",
      giftList:[],  //新用户礼包
      isNewUser:true,   //是否是新用户
      showGiftCount:0
    };
  },
  onLoad() {     
    this.setBarTitle();
    initLocation(this)
  },
  onShow() {
    this.initData();
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    if(wx.getStorageSync("showGiftCount") !==""){
      this.showGiftCount = wx.getStorageSync("showGiftCount");
    }else{
      this.showGiftCount = 0;
    }
    console.log("showGiftCount:"+this.showGiftCount);
    if(this.userId && this.token){
       this.IsNewUser();
    }
    // this.getLocal();GetCityCode
    // 初始化定位和城市名称
    // .then(res=>{
    //   this.GetCityCode(this.CityName);
    console.log('getCityCode',this.getCityCode)
    // });
  },
  computed:{
    ...mapState(["CityName"])
  },
  components: {},

  methods: {
    initData(){
        this.getBannerList()
        this.getpublishType()
        this.getNews()
    },
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "首页"
      });
    },
    //获取发布类型
    getpublishType(){
      post('Goods/GetBrandList').then(res=>{
        console.log(res,"GetBrandList")
        if(res.code==0){
            this.publishType = res.data
        }
      })
    },
    //获取轮播图
    getBannerList(){
       post('Banner/BannerList',{
          Cid:1 //Cid=0:全部广告图 Cid=1:首页滚动图片 Cid=2:首页广告图 Cid=3:优质房源 Cid=4:成成企业拼租
       }).then(res=>{
         if(res.code==0){
            this.picList = res.data
         }
       })
    },
    //后台获取点击广告的次数（记录）--userId token
    record(id){
      post('Banner/BannerHits',{
        Id:id
      })
    },
    //获取首页头条默认显示三条
    getNews(){
      post('About/AboutList',{
        PageSize:3,
        Page:1
      }).then(res=>{
          if(res.code==0){
            this.newList = res.data
          }
      })
    },


    goTo(n){
        if(n==1){  //头条消息headLineList
            wx.navigateTo({url:'/pages/messages/headLineList/main?url=index'})
        }else if(n==5){ //5组件团队
            wx.navigateTo({url:'/pages/rent/buildTeam/main'})
        }
    },
    goToList(id){
       wx.navigateTo({url:'/pages/rent/list/main?type='+id})
    },
    //头条详情
    newsDetail(id){
      wx.navigateTo({url:'/pages/messages/topNewsDetail/main?url=index&Id='+id})
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
    goSelectCity(){
      wx.navigateTo({url:'/pages/city-select/main'})
    },
    GetNewCoupon(){  //新用户礼包列表
      let that = this;
      post("Coupon/GetNewCoupon",{
        UserId:that.userId,
        Token:that.token
      },that.curPage).then(res => {
        if(res.code===0){
          that.giftList = res.data;
        }
      })
    },
    IsNewUser(){  //判断是否是新用户
      let that = this;
      post("Coupon/IsNewUser",{
        UserId:that.userId,
        Token:that.token
      },that.curPage).then(res => {
         if(res.code===0){
           if(res.data.IsNewUser===1){  //是新用户
              //that.isNewUser = true;
              that.giftList = res.data.list;
              if(that.showGiftCount===0){
                that.showGiftCount++;
                wx.setStorageSync("showGiftCount",that.showGiftCount);
                that.GetNewCoupon();
              }
           }else{
             //that.isNewUser = false;
           }
         }
      })
    }
  },

  created() {}
};
</script>
<style lang="scss" scoped>
.section {
  background: #fff;
  margin-bottom: 20rpx;
}
.navList{
  padding:0;
}
.navList .icon-img,
.navList .icon-img img{
   width:100rpx;
   height:100rpx;
   margin-bottom: 10rpx;
}
.tipImg{
  width:74rpx;
  height: 74rpx;
}
.wenList li .type{
  color:#ff952e;
  border-color:#ff952e;
}
.indexPage{
  height: calc( 100vh - 96rpx );
  height: -webkit-calc( 100vh - 96rpx );
  height: -moz-calc( 100vh - 96rpx );
  height: -ms-calc( 100vh - 96rpx );
  height: -o-calc( 100vh - 96rpx );
  background: #fff;
}
.section{
  margin-bottom:0;
}
.toutiao {
  padding:16rpx 30rpx;
  position: relative;
  &::before,
  &::after{
    position: absolute;
    content: "";
    height: 1px;
    left:30rpx;
    right: 30rpx;
    background: #f2f2f2;
  }
  &::before{
    top:0;
  }
  &::after{
    bottom:0;
  }
}
.recommendMenu{
  font-size: 28rpx;
  color:#999;
  span{
    margin-left:40rpx;
    &.active{
      color:#ff952e;
    }
  }
  
}
.gift__shade .gift {
  width:590rpx;
  // background: #fff;
}
.giftTopBg{
  width:100%;
  display: block;
}
.gift .gift__hd{
  margin-top:-60rpx;
}
.gift__bd,
.gift__ft{
  background: #fff;
  padding:30rpx;
}
.gift__bd{
  padding-bottom: 0;
}
.giftList{
  height: 438rpx;
  overflow: hidden;
  overflow-y: auto;
}
.giftList .item{
  border-radius: 12rpx;
  background: #fdf4ec;
  overflow: hidden;
  margin-bottom: 20rpx;
  position: relative;
}
.giftList .item .priceBox{
  position: absolute;
  height: 100%;
  background-image: -webkit-linear-gradient(177deg, #ff9468,#fdb973);
  color:#fff;
  font-size: 28rpx;
  width: 142rpx;
  text-align: center;
  .num{
    font-size: 48rpx;
  }
  &::before{
    position: absolute;
    content: "";
    width:24rpx;
    height: 24rpx;
    border-radius: 50%;
    z-index: 10;
    background: #fff;
    top:50%;
    margin-top: -12rpx;
    left:-12rpx;
  }
}
.giftList .item .txtBox{
  padding:26rpx;
  padding-left:168rpx;
  .title{
    font-size: 32rpx;
    margin-bottom: 10rpx;
  }
  .time{
    font-size: 24rpx;
    color:#aaaaaa;
  }
}
.gift__ft{
  padding-bottom: 30rpx;
}
.gift__ft .btn{
  font-size: 32rpx;
  background: #ff952e;
  width: 75%;
  box-shadow: 0  0 10rpx #f0d4ba; 
  margin:0 auto;
  color:#fff;
  border-radius: 200rpx;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
}
</style>
