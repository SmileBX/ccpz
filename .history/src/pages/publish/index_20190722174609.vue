<template>
  <div class="pageContent">
      <!-- 导航 -->
    <div class="publishCon">
      <div class="hd-title">快捷发布</div>
      <ul class="navList li_25 center navList2">
        <li v-for="(item,index) in publishType" :key="index">
          <div class="outside" @click="gotosubMenu(item.Id,index)">
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
                <img :src="imgurl" alt="" >
            </div>
            <div>
                <p class="font32">{{title}}表单</p>
                <p class="font_four" v-if="showId==21">拼租找到合伙人，社会资源最大化利用</p>
                <p class="font_four" v-if="showId==22">寻找志同道合团队或个人，一起创业</p>
                <p class="font_four" v-if="showId==23">寻找企业一起联谊做活动，资源整合</p>
                <p class="font_four" v-if="showId==24">发布优质房源设备</p>
            </div>
        </div>
        <div class="weui-cells  ">
          <div class="weui-cell" @click="goPinZu(item.Id,item.PageId,item.BrandId)" v-for="(item,pindex) in pinzuList" :key="pindex">
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
      title:"",
      publishType:[],//发布类型
      pinzuList:[],//拼租类型
      isShowMask:false,//是否显示拼租分类弹层
      imgurl:'',
      showId:0
    }
  },
  onLoad() {
    this.isShowMask = false
    this.setBarTitle();
  },
  onShow(){
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
    gotosubMenu(id,i){
       this.isShowMask=true
       this.showId = id
       this.title = this.publishType[i].Name
       this.imgurl = this.publishType[i].Img
      post('Goods/GetTypeL1',{
            BrandId:id
        }).then(res=>{
          console.log(res,"一级页面")
          if(res.code==0){
              res.data.map(item=>{
                  this.pinzuList = res.data
              })
          }
        })
    },
    goPinZu(id,pid,bid){ 
      //如果pageId=0去二级页面 BrandId  TypeId
      if(pid==0){
          wx.navigateTo({ 
            url: '/pages/rent/submenu/main?TypeId='+id  
          })
      }else{  //直接发布
          wx.navigateTo({
            url: '/pages/rent/rentOffic/main?TypeId='+id+"&PageId="+pid
          })
      }
    },
    
    
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