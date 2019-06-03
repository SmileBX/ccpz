<template>
  <div class="pageContent bg_fff" style="min-height:100vh">
    <div class="topTips">
      <div class="Tipsbox">
        <div class="icon">
          <img src="/static/images/icons/tips_icon.png">
        </div>
        <div class="txt">温馨提示：请正确选择发布信息的分类，分类错误会导致信息违规下架</div>
      </div>
    </div>
    <div class="navBox">
      <ul class="navList li_25 center navList2">
        <li @click="gotoFrom(item.Id)" v-for="(item,index) in brandList" :key="index">
          <div class="outside" >
            <div class="icon-img">
              <img :src="item.Img" alt>
            </div>
            <p class="title">{{item.Name}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { post,host,getCurrentPageUrlWithArgs} from "@/utils";
export default {
  data() {
    return {
      BrandId:"",  //品牌Id
      TypeId:"",//拼租类型Id
      curPage: "",
      userId: "",
      token: "",
      brandList:[]
    };
  },
  onLoad() {
    this.setBarTitle();
  },
  onShow(){
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.BrandId = this.$root.$mp.query.BrandId
    this.TypeId = this.$root.$mp.query.TypeId
    if(this.BrandId){
        this.getOnePage()
    }
    if(this.TypeId){
        this.getSecondPage()
    }
   
  },
  components: {},
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "发布"
      });
    },
    //获取分类页面
    getOnePage(){
        post('Goods/GetTypeL1',{
            BrandId:this.BrandId
        }).then(res=>{
          console.log(res,"一级页面")
          if(res.code==0){
              this.brandList = res.data
          }
        })
    },
    //获取发布二级页面
    getSecondPage(){
      post('Goods/GetTypeL2',{
            TypeId:this.TypeId
        }).then(res=>{
          console.log(res,"er级页面")
          if(res.code==0){
              this.brandList = res.data
          }
        })
    },
    //去往发布页面
    gotoFrom(id){
      wx.navigateTo({
        url: '/pages/Issue/rentOffic/main?TypeId='+id
      })
    }
  },

  created() {}
};
</script>
<style lang="scss" scoped>
.topTips {
  background: #fcdec2;
  padding: 40rpx;
  .Tipsbox {
    .icon {
      float: left;
      height: 80rpx;
      width: 80rpx;
      margin-right: 20rpx;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .txt {
      line-height: 40rpx;
      color: #666
    }
  }
}
.navList {
  font-size: 24rpx;
  color: #999;
  .outside {
    color: #999;
  }
  &.li_25 .icon-img,
  &.li_25 .icon-img img{
    width: 100rpx;
    height: 100rpx;
  }
}

</style>