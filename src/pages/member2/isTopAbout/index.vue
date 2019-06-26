<template>
  <div class="pageContent bg_fff">
    <div class="swiper">
      <img src="/static/images/icons/isTop__ban.jpg" mode="widthFix" alt>
    </div>
    <div class="functionAbout">
      <h2 class="title">什么是置顶功能</h2>
      <div class="dataHtml">
        置顶功能是为平台用户提供的可以首页置顶展示自己所
        发布信息的服务。为短时间内想快速提高自己影响力的
        用户，获得更高更直接的曝光率，提升和其他用户合作
        的几率。购买置顶功能后，即为开通期间，单次置顶时
        长24小时。
      </div>
      <div class="priceArea center">
        <p class="price"><span class="num">{{price}}</span>/次</p>
        <p>单次购买价格</p>
      </div>
    </div>
    <!-- 底部的定位按钮 -->
    <div class="ftBtn" style="heigth:100rpx;" @tap="gotoPage">
      <div class="inner fixed bm0">
        <div class="btns">
          <div class="btn center bg_ff952e color_fff">立即购买</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { post, valPhone, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
export default {
  onLoad() {
    this.setBarTitle();
  },
  onShow(){
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.getData()
  },
  data() {
    return {
      userId: "",
      token: "",
      curPage: "",
      price:""
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "置顶功能"
      });
    },
    getData(){
      post('User/ReadTopSetting',{
          UserId: this.userId,
          Token: this.token
      },this.curPage).then(res=>{
        console.log(res)
        if(res.code==0){
          this.price = res.data.Price
        }
      })
    },
    gotoPage(){
      wx.navigateTo({
        url:"/pages/member2/buyFunction/main?type=1&price="+this.price
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.pageContent{
  height: 100vh;
  overflow: hidden;
  overflow-y:auto;
}
</style>
