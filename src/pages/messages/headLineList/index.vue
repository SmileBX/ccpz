<template>
  <div class="pageContent">
    <ul class="topNewsList ">
      <li v-for="(item,index) in list" :key="index" @click="goDetail(item.Id)" 
        class="flex-center listBox">
        <div class="leftBox">
          <div class="title ellipsis">{{item.Title}}</div>
          <div class="left-bottom flex-center">
            <div class=""><img src="/static/images/icons/time.jpg" alt="">{{item.AddTime}}</div>
            <div class=""><img src="/static/images/icons/read.png" alt="">{{item.Hits}}</div>
            <p class="">{{item.Keywords}}</p>
          </div>
        </div>
        <!-- <div class="con ellipsis" v-html="item.Memo"></div> -->
        <img mode="widthFix" :src="item.Pic" class="pic" alt v-if="item.Pic">
      </li>
    </ul>
    <div class="noData" v-if="list.length<1">没有数据哦！</div>
    <div class="dataEnd" v-if="page>1&&isData">我也是有底线的！</div>
  </div>
</template>
<script>
import { post} from "@/utils";
export default {
  data(){
    return {
      pramas:"",//首页头条列表---消息页系统通知
      userId:'',
      token:'',
      list:[],//消息列表
      page:1,
      pageSize:12,
      isData:false,
      type:""
    }
  },

  onLoad() {
    this.type = this.$root.$mp.query.type
    this.setBarTitle();
  },
  onShow(){
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.isData = false;
    this.list=[]
    this.page=1;
    this.getNewsList()
  },
  methods: {
    setBarTitle() {
      let title = ''
      if(this.type == 1){
        title = "成成头条"
      }else{
        title = "系统通知"
      }
      wx.setNavigationBarTitle({
        title: title
      });
    },
    //获取头条
    getNewsList(){
      post('About/AboutList',{PageSize:this.pageSize,Page:this.page}).then(res=>{
        console.log(res) 
        if(res.data.length<1){
          this.isData = true;
        }else{
         this.list = this.list.concat(res.data) 
        }
      })
    },
    goDetail(id){
        wx.navigateTo({url:'/pages/messages/topNewsDetail/main?Id='+id})
    }
  },
  onReachBottom(){
    this.page+=1;
    this.getNewsList();
  },
  //下拉刷新
  onPullDownRefresh() {
    wx.stopPullDownRefresh();
    this.isData = false;
    this.list=[]
    this.page=1;
    this.getNewsList()
  },
};
</script>
<style lang="scss" scoped>
.topNewsList{
    margin:20rpx 0 0;
  .listBox{
    justify-content:space-between;
    margin:0;
    border-bottom:1rpx #ececec solid;
  }
  .leftBox{
    width:450rpx;
    .title{
    width:450rpx;
      font-size:30rpx;
      line-height:45rpx;
      // height:90rpx;
      white-space:normal;
      overflow: hidden;
    text-overflow: ellipsis;//可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 
    text-overflow: -o-ellipsis-lastline;
    display: -webkit-box!important;//必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
    -webkit-line-clamp: 2; //用来限制在一个块元素显示的文本的行数。这是一个 不规范的属性
    -webkit-box-orient: vertical;//必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。
    }
    .left-bottom{
        justify-content:space-between;
        font-size:24rpx;
        margin-top:30rpx;
      div{
        color:#999;
        margin-right:50rpx;
        display:flex;
        align-items:center;
        img{
          width:28rpx;
          height:28rpx;
          margin-right:10rpx;
        }
      }
      p{
        width:67rpx;
        height:36rpx;
        line-height:36rpx;
        text-align:center;
        color:#ff952e;
        background:#ffead5;
      }
    }
  }
  .pic{
    width:200rpx;
    height:150rpx;
  }
}
</style>
