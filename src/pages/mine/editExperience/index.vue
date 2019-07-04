<template>
  <div class="pageContent">
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__ff">
           <p class="txt">{{title}}</p>
        </div>
        <input type="text" placeholder="2-20个字符不能包含特殊字符" v-model="name" class="weui-cell_tt">
      </div>
      <div class="weui-cell" @tap="showEducation" v-if="tip==1">
        <div class="weui-cell__ff">
           <p class="txt">学历</p>
        </div>
        <input type="text" placeholder="请选择学历" disabled v-model="Major" class="weui-cell_tt" >
        <span class="icon-arrow arrow-right"></span>
      </div>
      <div class="weui-cell ">
        <div class="weui-cell__ff">
           <p class="txt">{{subTitle}}</p>
        </div>
        <input type="text" placeholder="2-20个字符不能包含特殊字符"  v-model="subname" class="weui-cell_tt">
      </div>
      <div class="weui-cell">
        <div class="weui-cell__ff">
           <p class="txt">时间</p>
        </div>
        <div class="flex flexAlignCenter weui-cell_tt">
              <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="开始时间"
                  @tap="getStartTime"
                  v-model="IntStart"
                  placeholder-style="color:#b5b5b5;"
              >
              <span>———</span>
              <input
              class="ipt inpt2"
              type="text"
              disabled
              placeholder="结束时间"
              v-model="IntEnd"
              @tap="getEndTime"
              placeholder-style="color:#b5b5b5;"
            >
        </div>
      </div>
      
    </div>
    <!--弹层-->
    <div class="mask" v-if="isShowMask" catchtouchmove="true" @tap="cancleMask"></div>
    <!---->
    <div class="maskType boxSize" v-if="isShowMask" :class="showNoChange?'noParActive':''">
      <div class="flex">
            <span class="size" @tap="cancleMask">取消</span>
            <span class="title">{{masktitle}}</span>
            <span class="color size" @tap="subConfirm">确定</span>
      </div>
      <!--滑动选择时间-->
      <div class="freeRoom" v-if="ShowTime">
          <div>
              <picker-view class="pickerView" :value="value" @change="bindDateChangeStart" >
                  <picker-view-column class="pickerColumn">
                      <div class="pickerItem" v-for="(item,key) in years" :key='key'>{{item}}</div>
                  </picker-view-column>
              </picker-view>
          </div>
      </div>

      <scroll-view :scroll-y="true" style="height:480rpx;"  class="showItem" @scrolltolower="loadMore" v-else>
        <div v-for="(item,index) in list" :key="index">
            <p :class="{'itemactive':statu == index}" @tap="chose(index)" style="margin-top:3rpx;">{{item.Name}}
            </p>
        </div>
      </scroll-view>
    </div> 
    <!--底部按钮-->
    <div style="padding:30rpx 30rpx;margin-top:50rpx" @tap="DelStep" v-if="Id">
      <div class="weui-btn btn-active fill_one">删除</div>
    </div>
    <div style="padding:40rpx 30rpx;" @tap="saveStep">
      <div class="weui-btn btn-active fill">保存</div>
    </div>
  </div>
</template>
<script>
import { post, valPhone, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
import { pathToBase64 } from "@/utils/image-tools";
import areaList from "@/utils/areaList";
export default {
  data(){
    return {
      currentDate: new Date().getTime(),
      minDate: new Date().setFullYear(1600,0,1),
      showDate:false,//展示时间弹层
      showDateTips:false,
      ShowTime:false,//时间
      curPage: "",
      userId: "",
      token: "",
      tip:0,
      Id:"",//编辑的Id
      title:"",
      subTitle:"",
      //教育开始
      name:"",//学校
      subname:"",//学历
      Major:"",//专业
      IntStart:"",//开始
      IntEnd:"",//结束
      educationList:[ 
        {Id:1,Name:"小学",active:true},{Id:2,Name:"中学"},{Id:3,Name:"高中"},{Id:4,Name:"中专"},{Id:5,Name:"大专"},{Id:6,Name:"本科"},{Id:7,Name:"硕士"},{Id:8,Name:"MBA"},
      ],
      timeList:[],
      list:[],
      isShowMask:false,
      statu:0,
      masktitle:"",
      TimeBox:0,
      years:[]

    }
  },
  onLoad() {
    this.setBarTitle();
   
  },
  onShow(){
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.initData()
    
   
    
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "编辑信息"
      });
    },
    getTime(){
      let nowTime = new Date().getFullYear()
      console.log(nowTime)
      for(let num=0;num<=20;num++){
        this.timeList.push(nowTime)
        nowTime--
      }
      // console.log(this.timeList)
    },
    bindDateChangeStart (e) {
      console.log(e.mp)
      this.TimeBox = e.mp.detail.value
    },
    initData(){ //1-教育  2-工作
      this.name = ''
      this.subname = ''
      this.Major = ''
      this.IntStart = ''
      this.IntEnd = ''
      this.tip = this.$root.$mp.query.tip
      this.Id = ''
      if(this.tip==1){
        this.title="学校"
        this.subTitle='专业'
      }else{
        this.title="公司"
        this.subTitle='职位'
      }
      if(this.$root.$mp.query.Id){
        this.Id = this.$root.$mp.query.Id
        let objUrl = ""
        if(this.$root.$mp.query.Id && this.tip==1){
          objUrl = "User/QueryMemberEdu"
        }
        if(this.$root.$mp.query.Id && this.tip==2){
          objUrl = "User/QueryMemberWork"
        }
         this.getExperice(objUrl,this.Id)
      }
    },
    
    //获取经历工作
    getExperice(objUrl,id){
       post(objUrl,{
        UserId:this.userId,
        Token:this.token,
        Id:id
      },this.curPage).then(res=>{
        // console.log(res,"__________")
        if(res.code==0){
          if(this.tip==1){
            this.name = res.data.School
            this.subname = res.data.Education
            this.IntStart = res.data.IntStart
            this.IntEnd = res.data.IntEnd
            this.Major = res.data.Major
          }
          if(this.tip==2){
            this.name = res.data.Company
            this.subname = res.data.Job
            this.IntStart = res.data.IntStart
            this.IntEnd = res.data.IntEnd
          }
          
        }
      })
    },
    //学历结构
    showEducation(){
      this.isShowMask = true
      this.list = this.educationList
      this.masktitle = '请选择学历结构'
    },
    
    //选择弹层item
    chose(e){
        this.statu = e
    },
    //关闭弹框
    cancleMask(){
      this.isShowMask = false
      this.ShowTime = false
      this.showDateTips = false
      this.TimeBox = 0
    },
    getEndTime(){
      this.timeList=[]
      this.years = []
      this.getTime()
      this.isShowMask = true
      this.ShowTime = true
      this.showDateTips = true
      this.timeList.unshift('至今')
      this.years.push(...this.timeList)
      this.masktitle ='请选择结束时间'
      // console.log(this.years,"____")
    },
    getStartTime(){
      this.timeList=[]
      this.years = []
      this.getTime()
      this.isShowMask = true
      this.ShowTime = true
      this.years.push(...this.timeList)
      this.masktitle ='请选择开始时间'
      // console.log(this.years,"((((((((((((((")
    },
    //确定选择
    subConfirm(){
      for(let i in this.list){
          if(i*1 == this.statu){
              if(this.masktitle =='请选择学历结构' ){
                  this.Major = this.list[i].Name
              }
              
          }
      }
      if(this.masktitle =='请选择开始时间'){
        this.IntStart = this.years[this.TimeBox]
      }
      if(this.masktitle =='请选择结束时间' && this.showDateTips){
        this.IntEnd = this.years[this.TimeBox]
      }
      this.TimeBox = 0
      this.isShowMask = false
      this.ShowTime = false
      this.showDateTips = false
    },
    valOther(){
      if(this.name == '' || this.subname == ''){
        wx.showToast({
          title:"请填写相关信息",
          icon:"none",
          duration:1500
        })
        return false
      }
      if(this.tip==1){
        if (this.Major =='') {
          wx.showToast({
            title:"请选择专业",
            icon:"none",
            duration:1500
          })
          return false;
        }
      }
      if (this.IntStart =='') {
        wx.showToast({
          title:"请选择开始时间",
          icon:"none",
          duration:1500
        })
        return false;
      }
      if (this.IntEnd =='') {
        wx.showToast({
          title:"请选择结束时间",
          icon:"none",
          duration:1500
        })
        return false;
      }
      if (this.IntStart !='' && this.IntEnd !='') {
        if(this.IntEnd<this.IntStart){
          wx.showToast({
            title:"开始时间不能大于结束时间",
            icon:"none",
            duration:1500
          })
          return false;
        }
      }
      return true
    },
    //删除经历
    DelStep(){
      const that = this
      let objUrl = ""
      if(that.tip==1){
         objUrl = 'User/DelMemberEdu'
      }else{
         objUrl = 'User/DelMemberWork'
      }
      wx.showModal({
        title:"是否删除该经历？",
        content:"删除后不可恢复",
          confirmColor:'#ff952e',
          cancelColor:'#999',
        success(res){
          if(res.confirm){
            post(objUrl,{
                UserId:that.userId,
                Token:that.token,
                Id:that.Id,
            },that.curPage).then(res=>{
              if(res.code==0){
                wx.showToast({
                  title:res.msg,
                  icon:"success",
                  duration:1500
                })
                setTimeout(()=>{
                  wx.navigateBack()
                },1500)
              }
            })
          }else if(res.cancle){
              console.log('用户点击取消')
          }
        }
      })
      
    },
    //保存经历
    saveStep(){
      let objUrl = ""
      let pramas = {}
      if(this.Id){
        if(this.tip==1){
            objUrl = 'User/EditMemberEdu'
            pramas = {
              UserId:this.userId,
              Token:this.token,
              Id:this.Id,
              School:this.name,
              Education:this.subname,
              Major:this.Major,
              IntStart:this.IntStart.toString(),
              IntEnd:this.IntEnd.toString()
            }

        }else{
          objUrl = 'User/EditMemberWork'
            pramas = {
              UserId:this.userId,
              Token:this.token,
              Id:this.Id,
              Company:this.name,
              Job:this.subname,
              IntStart:this.IntStart.toString(),
              IntEnd:this.IntEnd.toString()
            }
        }
      }else{
        if(this.tip==1){
            objUrl = 'User/AddMemberEdu'
            pramas = {
              UserId:this.userId,
              Token:this.token,
              School:this.name,
              Education:this.subname,
              Major:this.Major,
              IntStart:this.IntStart.toString(),
              IntEnd:this.IntEnd.toString()
            }

        }else{
          objUrl = 'User/AddMemberWork'
            pramas = {
              UserId:this.userId,
              Token:this.token,
              Company:this.name,
              Job:this.subname,
              IntStart:this.IntStart.toString(),
              IntEnd:this.IntEnd.toString()
            }
        }
      }
        
      if(this.valOther()){
        post(objUrl,pramas,this.curPage).then(res=>{
          console.log("Res:",res)
          if(res.code==0){
              wx.showToast({
                title:res.msg,
                icon:"success",
                duration:1500
              })
              setTimeout(()=>{
                wx.navigateBack()
              },1500)
          }
        })
      }
    }
    
    
    
  }
};
</script>
<style lang="scss" scoped>
.weui-cell::before{
  left:0;
  right: 0;
}
.weui-cell{
  width:100%;
  .weui-cell__ff{
    width:15%;
  }
  .weui-cell_tt{
    width:70%;
    text-align:left;
    box-sizing: border-box;
    input{
      display:flex;
      width:35%;
    }
    .inpt2{
      text-align:right;
    }
  }
  input{
    text-align:left
  }
  .fontColor{
    color:#808080
  }
}
.maskType {
    background: #fff;
    width: 100%;
    height: 600rpx;
    padding: 30rpx 0;
    bottom: 0!important;
    position: fixed;
    z-index: 999;
    p {
        padding: 15rpx 30rpx;
        text-align:center;
    }
    .flex {
        justify-content: space-between;
        border-bottom: 1rpx solid #f2f2f2;
        padding: 20rpx;
        font-weight: 400;
        font-size: 30rpx;
        .color {
            color: #ff6325
        }
        .size {
            font-size: 26rpx;
        }
        .title {
            font-weight: bold;
        }
    }
    .itemactive {
        background: #ff6325;
        color: #fff
    }
}
.pageContent{
  .weui-btn.btn-active.fill{
    width:690rpx;
  }
}
.showItem{
  p {
        padding: 15rpx 30rpx;
        text-align:center;
    }
}
.itemactive {
      background: #ff2925;
      color: #fff
  }
  .fill_one{
    background: #fff;
    color:#ff9325
  }
  .freeRoom{
        .timeText{
            text-align: center;
        }
        .pickerView{
            width:100%;
            height: 400rpx;
            .pickerColumn{
                .pickerItem{
                    line-height:80rpx;
                    height:40rpx;
                    overflow:hidden;
                    text-align: center;
                }
            }
        }
    }

</style>
