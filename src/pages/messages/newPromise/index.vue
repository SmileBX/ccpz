<template>
  <div class="page bg_fff borderTop">
    <!--通知列表-->
    <div class="padwid">
        <div class="flex avatarhead flexAlignCenter boxSize p2" v-for="(item,index) in noticeList" :key="index">
            <div class="avatarbox">
                <img :src="item.Headimgurl" alt="" class="avatar">
            </div>
            <div class="flex flex1 flexAlignCenter">
                <div class="flex flex1 flexColumn">
                    <span class="font32">{{item.NickName}}</span>
                    <span class="font_four">请求添加你为好友</span>
                </div>
                <div class="btnadd" v-if="item.Status==1">已添加</div>
                <div class="btnadd" v-if="item.Status==2">已忽略</div>
                <div class="ignoreBtn flex flexAlignCenter" v-if="item.Status==0">
                    <span class="ignore boxSize" @click="dealPermission(index,2)">忽略</span>
                    <span class="pass boxSize" @click="dealPermission(index,1)">通过</span>
                </div>
            </div>
        </div>
    </div>
    <p
      style="text-align:center;font-size:30rpx;color:#666;padding:120rpx 20rpx 80rpx;"
      v-if="hasData===false"
    >暂无数据</p>
    <p
      class="ovedMsg"
      v-if="isOved && page>1"
      style="text-align:center;padding:20rpx;font-size:26rpx;color:#666;"
    >我也是有底线的</p>
  </div>
</template>

<script>
//Status, --0:未处理 1:已添加 2:已忽略 3:已拒绝 4:等待验证
import { post,getCurrentPageUrlWithArgs} from "@/utils";
export default {
  data () {
    return {
      showbtn:false,//是否已添加
      showbtn2:false,//是否已忽略
      userId:'',
      token:'',
      curPage:'',
      Page:1,
      noticeList:[],
      hasData:false,//是否有数据，
      isOved:false,//是否加载完了数据

    }
  },
   onLoad() {
    this.setBarTitle();
  },
  onShow(){
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.initData()
    this.getNewPromise()
  },
  components: {
  },

  methods: {
    initData(){
        this.Page=1
        this.noticeList=[]
        this.isOved = false;
        this.hasData = "";

    },
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "新朋友"
      });
    },
    //获取好友请求列表
    getNewPromise(){
      post('User/Getfriend_req',{
          UserId: this.userId,
          Token: this.token,
          Page:this.Page,
      },this.curPage).then(res=>{
        console.log(res,"getNewPromise")
        if(res.data>=0){
            this.hasData = false
        }else{
            this.hasData = true
            this.noticeList = res.data
        }
      })
    },
    //处理好有请求
    dealPermission(index,ReqStatus){
      //1:添加 2:忽略
        post('User/Confriend_req',{
          UserId: this.userId,
          Token: this.token,
          ReqId:this.noticeList[index].Id,
          ReqStatus:ReqStatus
        },this.curPage).then(res=>{
            console.log(res,"处理好有请求")
            if(res.code==0){
                 wx.showToast({
                  title:'操作成功！',
                  duration:2000
                })
                // if(ReqStatus==1){
                //     this.$set(this.noticeList[index],'Status',1)
                // }else if(ReqStatus==2){
                //     this.$set(this.noticeList[index],'Status',2)
                // }
                this.initData();
                this.getNewPromise()
            }
           
        })
    }
  },

  created () {
    // let app = getApp()
  },
  onPullDownRefresh() {
    // 下拉刷新
     this.initData();
     this.getNewPromise()
  },
  // onReachBottom() {
  //   //上拉加载
  //   if (!this.isOved) {
  //     this.page++;
  //     this.getNewPromise()
  //   }
  // }
}
</script>
