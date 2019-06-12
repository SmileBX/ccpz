<template>
  <div class="pageContent">
      <!-- 导航 -->
    <div class="publishCon">
      <div class="hd-title">快捷发布</div>
      <ul class="navList li_25 center navList2">
        <li v-for="(item,index) in publishType" :key="index">
          <div class="outside" @click="gotosubMenu(item.Id)">
            <div class="icon-img">
              <img :src="item.Img" alt>
            </div>
            <p class="title">{{item.Name}}</p>
          </div>
        </li>
      </ul>
    </div>
    <!--弹层-->
    <div class="mask" v-if="isShowMask" catchtouchmove="true" @click="isShowMask=false"></div>
    <div class="modal_mask boxSize"  v-if="isShowMask">
        <div class="flex justifyContentStart flexAlignStart">
            <div class="icon-img">
                <img src="/static/images/icons/index_menu1.jpg" alt="" >
            </div>
            <div>
                <p class="font32">拼租表单</p>
                <p class="font_four">寻找志同道合的团队或个人，资源共享重组</p>
            </div>
        </div>
        <div class="weui-cells  ">
          <div class="weui-cell" @click="goPinZu(item.Id)" v-for="(item,pindex) in pinzuList" :key="pindex">
            <div class="icon-img2">
                <img :src="item.Img" alt="" >
            </div>
            <div class="weui-cell__bd">
              <p class="txt">{{item.Name}}</p>
            </div>
            <span class="icon-arrow arrow-right"></span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { post,getCurrentPageUrlWithArgs} from "@/utils";
export default {
  data () {
    return {
      publishType:[],//发布类型
      pinzuList:[],//拼租类型
      isShowMask:false,//是否显示拼租分类弹层
    }
  },
  onLoad() {
    this.setBarTitle();
  },
  onShow(){
    this.isShowMask = false
    this.getpublishType()
  },
  components: {},
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "发布"
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
    gotosubMenu(id){
      post('Goods/GetTypeL1',{
            BrandId:id
        }).then(res=>{
          console.log(res,"一级页面")
          if(res.code==0){
              res.data.map(item=>{
                if(item.PageId==0){
                    this.isShowMask=true
                    this.pinzuList = res.data
                }else{
                    this.goOnePin(id) 
                }
              })
          }
        })
    },
    //去往拼租二级页面
    goPinZu(id){  
        wx.navigateTo({
          url: '/pages/rent/submenu/main?TypeId='+id  
        })
    },
    //直接去往发布页面
    goOnePin(id){
        wx.navigateTo({
          url: '/pages/rent/submenu/main?BrandId='+id  
        })
    }
    
  },

  created () {
    
  }
}
</script>
<style lang="scss" scoped>
  .publishCon{margin:30rpx;border-radius:10rpx;background: #fff;overflow: hidden;}
  .hd-title{font-size: 32rpx; padding: 20rpx 30rpx 0;}
  .modal_mask{
      border-top-left-radius: 25rpx;
      border-top-right-radius: 25rpx;
      padding:40rpx;
  }
  .icon-img{
     width: 90rpx;
     height: 90rpx;
     margin-right:30rpx;
}
.icon-img img {
    width: 100%;
    height: 100%;
}
.icon-img2{
    width: 38rpx;
    height: 36rpx;
    vertical-align: middle;
    margin-right:30rpx;
}
.icon-img2 img {
    width: 100%;
    height: 100%;
}
</style>