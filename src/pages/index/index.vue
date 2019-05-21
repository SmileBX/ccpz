<template>
  <div class="pageContent">
    <!-- 顶部搜索 -->
    <div class="headerTop">
      <div class="inner flex flexAlignCenter">
        <div class="local">
          <span class="name">深圳</span>
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
    <!-- banner -->
    <div class="bannerBox">
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
            <img :src="item.picUrl" alt="">
            <!-- <image src="item" class="slide-image" width="355" height="150"> -->
          </swiper-item>
        </block>
      </swiper>
    </div>
    <!-- 导航 -->
    <div class="section">
      <ul class="navList li_25 center navList2">
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/index_menu1.jpg" alt>
            </div>
            <p class="title">拼租</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/index_menu2.jpg" alt>
            </div>
            <p class="title">组建团队</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/index_menu3.jpg" alt>
            </div>
            <p class="title">拼团活动</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/index_menu4.jpg" alt>
            </div>
            <p class="title">房源</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 头条 -->
    <div class="section">
      <div class="toutiao pd15 flex">
        <div class="left flexColumn flex justifyContentCenter center">
          <span class="name">成成</span>
          <span class="tipsName">头条</span>
        </div>
        <div class="conMain flex1">
          <ul class="wenList">
            <li>
              <span class="type">出租</span>写字楼出租要注意什么呢？
            </li>
            <li>
              <span class="type">出租</span>写字楼出租要注意什么呢？
            </li>
            <li>
              <span class="type">出租</span>写字楼出租要注意什么呢？
            </li>
            <li>
              <span class="type">出租</span>写字楼出租要注意什么呢？
            </li>
            <li>
              <span class="type">出租</span>写字楼出租要注意什么呢？
            </li>
            <li>
              <span class="type">出租</span>写字楼出租要注意什么呢？
            </li>
            <li>
              <span class="type">出租</span>写字楼出租要注意什么呢？
            </li>
            <li>
              <span class="type">出租</span>写字楼出租要注意什么呢？
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 优质房源 -->
    <div class="section">
      <div class="section__hd flex flexAlignCenter">
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
    <!-- 热门商铺 -->
    <div class="section">
      <div class="section__hd flex flexAlignCenter">
        <div class="flex1">
          <p class="title">热门商铺</p>
        </div>
        <span class="icon-arrow arrow-right"></span>
      </div>
      <div class="section__bd">
        <scroll-view class="storeNowrap" scroll-x>
          <ul class="column storeList">
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
                  <div class="pictrue img">
                    <img src="/static/images/of/index_a1.jpg" alt>
                  </div>
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
                  <div class="pictrue img">
                    <img src="/static/images/of/index_a1.jpg" alt>
                  </div>
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
                  <div class="pictrue img">
                    <img src="/static/images/of/index_a1.jpg" alt>
                  </div>
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
                  <div class="pictrue img">
                    <img src="/static/images/of/index_a1.jpg" alt>
                  </div>
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
    <!-- 广告图 -->
    <div class="swiper pd15 bg_fff">
      <img src="/static/images/of/gg1.jpg" class="radius10" mode="widthFix" alt>
    </div>
    <!-- 为您推荐 -->
    <div class="section">
      <div class="section__hd flex flexAlignCenter" style="padding-bottom:15rpx;">
        <div class="flex1">
          <p class="title">为您推荐</p>
        </div>
        <span class="icon-arrow arrow-right"></span>
      </div>
      <div class="section__bd">
        <!-- 筛选条件 -->
        <div class="filterMenu">
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
        </div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      picList:[
        {'picUrl':'/static/images/of/banner1.jpg'},
        {'picUrl':'/static/images/of/banner1.jpg'},
        {'picUrl':'/static/images/of/banner1.jpg'},
        {'picUrl':'/static/images/of/banner1.jpg'}
      ]
    };
  },
  onLoad() {
    this.setBarTitle();
  },
  onShow() {},
  components: {},

  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "首页"
      });
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


</style>
