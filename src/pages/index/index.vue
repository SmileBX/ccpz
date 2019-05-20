<template>
  <div class="pageContent">
    <!-- 顶部搜索 -->
    <div class="headerTop">
      <div class="inner">
        <div class="local"></div>
        <div class="searchBox">
          <span class="icon_search"></span>
          <span>搜索</span>
        </div>
       </div>
    </div>
    <!-- banner -->

    <!-- 导航 -->
    <ul class="navList li_25 center navList2">
      <li>
        <div class="outside">
          <div class="icon-img">
            <img src="/static/images/icons/serve_order.png" alt>
          </div>
          <p class="title">拼租</p>
        </div>
      </li>
      <li>
        <div class="outside">
          <div class="icon-img">
            <img src="/static/images/icons/serve_order.png" alt>
          </div>
          <p class="title">组建团队</p>
        </div>
      </li>
      <li>
        <div class="outside">
          <div class="icon-img">
            <img src="/static/images/icons/serve_order.png" alt>
          </div>
          <p class="title">拼团活动</p>
        </div>
      </li>
      <li>
        <div class="outside">
          <div class="icon-img">
            <img src="/static/images/icons/serve_order.png" alt>
          </div>
          <p class="title">房源</p>
        </div>
      </li>
    </ul>
    <!-- 头条 -->
    <div class="toutiao">
      <div class="left">
        <span class="name">成成</span>
        <span class="tipsName">头条</span>
      </div>
      <div class="conMain">
        <ul class="wenList">
          <li><span class="type">出租</span>写字楼出租要注意什么呢？</li>
          <li><span class="type">出租</span>写字楼出租要注意什么呢？</li>
          <li><span class="type">出租</span>写字楼出租要注意什么呢？</li>
          <li><span class="type">出租</span>写字楼出租要注意什么呢？</li>
          <li><span class="type">出租</span>写字楼出租要注意什么呢？</li>
          <li><span class="type">出租</span>写字楼出租要注意什么呢？</li>
          <li><span class="type">出租</span>写字楼出租要注意什么呢？</li>
          <li><span class="type">出租</span>写字楼出租要注意什么呢？</li>
        </ul>
      </div>
    </div>
    <!-- 优质房源 -->
    <div class="section">
      <div class="section__hd">
        <p class="title">优质房源</p>
        <span class="icon-arrow icon-arrowRight"></span>
      </div>
      <div class="section__bd">
        <div class="tuClumn">
          <div class="left">
            <img src="" alt="">
          </div>
          <div class="rignt">
            <img src="" alt="">
            <img src="" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- 热门商铺 -->
    <div class="section">
      <div class="section__hd">
        <p class="title">热门商铺</p>
        <span class="icon-arrow icon-arrowRight"></span>
      </div>
      <div class="section__bd">
        <scroll-view class="storeList">
          <div class="item">
            <div class="itemBox">
              <div class="img"></div>
              <div class="txtBox">
                <p class="title"><span class="name">新银座</span>商铺拼租可月付</p>
                <p class="other"><span class="priceArea"><span class="price">3000</span>元/月</span><span class="msg">1室</span><span class="msg">100m<em class="up">2</em></span><span class="msg">罗湖</span></p>
              </div>
            </div>
          </div>
        </scroll-view>
      </div>
    </div>
    <!-- 广告图 -->
    <div class="swiper">
      <img src="" alt="">
    </div>
    <!-- 为您推荐 -->
    <div class="section">
      <div class="section__hd">
        <p class="title">为您推荐</p>
        <span class="icon-arrow icon-arrowRight"></span>
      </div>
      <div class="section__bd">
        
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  onLoad(){
    this.setBarTitle()
  },
  onShow(){

  },
  components: {
  },

  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "首页"
      })
    }
  },

  created () {
    
  }
}
</script>
<style lang="scss" scoped>
</style>
