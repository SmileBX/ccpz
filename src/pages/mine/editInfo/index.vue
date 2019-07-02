<template>
  <div class="pageContent">
    <!--公司 个人信息空-->
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">头像</p>
        </div>
        <div class="avatarbox" @click="uplLoadAva">
            <img :src="Avatar" alt="" class="avatar">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">昵称</p>
        </div>
        <input type="text" placeholder="请输入" v-model="Name">
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">实名认证</p>
        </div>
        <input type="text" placeholder="未认证" disabled v-model="IsAUT" @tap="goVertical">
      </div>
      <div class="weui-cell" @click="showArea = true">
        <div class="weui-cell__bd">
           <p class="txt">地区</p>
        </div>
        <input type="text" placeholder="请选择" disabled v-model="Area"  >
      </div>
      <div class="weui-cell" @click="choseBusiness">
        <div class="weui-cell__bd">
           <!--公司-->
            <p class="txt" v-if="Company">公司行业</p>
            <!--个人-->
           <p class="txt" v-else>行业</p>
        </div>
        <input type="text" placeholder="请选择" disabled v-model="Trade"  >
      </div>
      <div class="weui-cell" @click="showDate=true"  v-if="Company">
        <div class="weui-cell__bd">
           <p class="txt">成立日期</p>
        </div>
        <input type="text" placeholder="请选择" disabled v-model="Name"  >
      </div>
       <!--公司-->
      <div class="weui-cell" v-if="Company">
        <div class="weui-cell__bd">
           <p class="txt">人员规模</p>
        </div>
        <input type="text" placeholder="请输入" v-model="Name">
      </div>
      <!--个人-->
      <div class="weui-cell" v-else @click="choseWorkTime">
        <div class="weui-cell__bd">
           <p class="txt">工作年限</p>
        </div>
        <input type="text" placeholder="请选择" disabled v-model="WorkLife"  >
      </div>
      <div class="weui-cell" v-if="Company">
        <div class="weui-cell__bd">
           <p class="txt">办公面积</p>
        </div>
        <input type="text" placeholder="请输入" v-model="Name">
      </div>
      <div class="weui-cell" v-if="Company">
        <div class="weui-cell__bd">
           <p class="txt">办公地址</p>
        </div>
        <input type="text" placeholder="请输入" v-model="Name"  >
      </div>
      <div class="weui-cell" @click="showArea2=true" v-if="Company">
        <div class="weui-cell__bd">
           <p class="txt">负责人籍贯</p>
        </div>
        <input type="text" placeholder="请选择" disabled v-model="Name"  >
      </div>


    </div>
    <!--弹层-->
    <!--时 间弹层-->
    <van-action-sheet :show="showDate" @close="showDate=false" @select="showDate=false">
        <van-datetime-picker
        type="date"
        :value="currentDate"
        @confirm="onInput($event)"
        @cancel="showDate=false"
        :min-date="minDate"
        title="成立日期"
        />
    </van-action-sheet> 
    <!--地区-->
    <van-popup :show="showArea" position="bottom" :overlay="true" @close="showArea = false">
      <van-area :area-list="areaList" @cancel="showArea = false" @confirm="confirmArea" title="地区"/>
    </van-popup>
    <!--籍贯-->
    <van-popup :show="showArea2" position="bottom" :overlay="true" @close="showArea2 = false">
      <van-area :area-list="areaList" @cancel="showArea2 = false" @confirm="confirmArea2" columns-num="2" title="籍贯"/>
    </van-popup>
    <!--组建遮罩层-->
    <div class="mask" v-if="isShow"></div>
    <!--行业-->
    <van-popup :show="showTrade" position="bottom" :overlay="true" @close="showTrade = false">
        <van-picker  show-toolbar title="请选择行业" @confirm="onConfirm"
          @cancel="showTrade = false" :columns="columns" @change="onChange($event)"/>
    </van-popup>
    <!--工作年限-->
    <div class="modal_mask" v-if="showWorkTime">
        <div class="tileText flex">
           <span @click="cancleMask">取消</span>
           <span class="font32">工作年限</span>
           <span @click="confirmWorkTime">确定</span>
        </div>
        <scroll-view :scroll-y="true" style="height:480rpx;" :style="showNoChange?'height:200rpx':''" class="showItem" @scrolltolower="loadMore">
          <div v-for="(item,index) in workTime" :key="index">
              <p :class="{'itemactive':statu == index}" @click="chose(index)" style="margin-top:3rpx;">{{item}}
              </p>
          </div>
        </scroll-view>
    </div>
    <!--底部按钮-->
    <div style="padding:80rpx 30rpx;" @click="nextStep">
      <div class="weui-btn btn-active fill">下一步</div>
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
      minDate: new Date().getTime(),
      areaList,
      workTime:['1年以下','2年经验','3年经验','4年经验','5年经验'],
      Company:false,//展示公司信息
      showDate:false,//展示时间弹层
      showArea:false,//展示地区
      showArea2:false,//展示籍贯
      isShow:false,//自写组建遮罩层
      showTrade:false,//展示行业
      showWorkTime:false,
      statu:0,//控制弹层item选中样式
      columns:[],//picker列表
      tradeList:{},//行业列表
      tradeListBox:[],//行业列表
      curPage: "",
      userId: "",
      token: "",
      AvatarwBase:"",//头像
      Avatar:"",
      ShowBase:false,//上传头像不从默认获取
      Name:"", //昵称
      Area:"",//地区 格式：'1级,2级'
      Trade:"", //行业 格式：'1级,2级'
      WorkLife:"",//年限
      WorkIdea:"", //理念
      WeChatNum:"", //微信号
      Contacts:"",
      ContactsTel:"",
      Email:"",
      IsAUT:"",//是否认证

    }
  },
  onLoad() {
    this.setBarTitle();
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.initData();
    this.getPerson()
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "编辑信息"
      });
    },
    initData(){
      console.log(this.ShowBase,"333333333");
      // console.log(this.$store.state.personInfo,"this.$store.state.personInfo")
      this.ShowBase = false
      // if(this.ShowBase){
      //   this.Avatar = this.$store.state.personInfo.Avatar
      //   // console.log(this.Avatar,"11111111111")
      // }
      this.Name = this.$store.state.personInfo.Name
      this.Area = this.$store.state.personInfo.Area
      this.Trade = this.$store.state.personInfo.Trade
      this.WorkLife = this.$store.state.personInfo.WorkLife
      this.Email = this.$store.state.personInfo.Email
      this.WeChatNum = this.$store.state.personInfo.WeChatNum
      this.Contacts = this.$store.state.personInfo.Contacts
      this.ContactsTel = this.$store.state.personInfo.ContactsTel
      this.WorkIdea = this.$store.state.personInfo.WorkIdea

      this.columns = []
     
    },
    //获取个人信息
    getPerson(){
      post('User/GetMemberInfo',{
        UserId: this.userId,
        Token: this.token,
      },this.curPage).then(res=>{
        if(res.code==0){
          console.log(res)
          if(!this.ShowBase){
            this.Avatar = res.data.Avatar
            console.log(this.ShowBase,"2222")
          }
            if(res.data.IsAUT==3){
              this.IsAUT = '待审核'
            }
            if(res.data.IsAUT==2){
              this.IsAUT = '认证失败'
            }
            if(res.data.IsAUT==1){
             this.IsAUT = '已认证'
            }
            if(res.data.IsAUT==0){
              this.IsAUT = '未认证'
            }
           this.Name = res.data.Name
           this.Email = res.data.Email
           this.WeChatNum = res.data.WeChatNum
           this.Contacts = res.data.Contacts
           this.ContactsTel = res.data.ContactsTel
           this.WorkLife = res.data.WorkLife
           this.WorkIdea = res.data.WorkIdea
           this.Trade = res.data.Trade
           this.Area = res.data.Area
           
        }
      })
    },
    //选择弹层item
    chose(e){
        this.statu = e
    },
    //上传头像
     uplLoadAva(){
      wx.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: (res) =>{
          // tempFilePath可以作为img标签的src属性显示图片
          this.Avatar = res.tempFilePaths[0]
          this.ShowBase = true
          console.log(this.ShowBase,"选择头像")
          wx.getFileSystemManager().readFile({
              filePath: this.Avatar, //选择图片返回的相对路径
              encoding: "base64", //编码格式
              success: res => {
                //成功的回调
                this.AvatarwBase = "data:image/png;base64," + res.data.toString();
                console.log(this.AvatarwBase.length, "选择图像的路径");
              }
            });
        }
      })
    },
    // async base64Img(path) {
    //   const base64Arr = await pathToBase64(path);
    //   return base64Arr;
    // },
    
    //获取行业信息
    //选择行业
    choseBusiness(){
       this.showTrade = true
       post('/Goods/GetTradeList').then(res=>{
         if(res.code==0){
           this.tradelistBox = res.data
           this.tradelistBox.forEach(item=>{
             let obj = {}
             let objArr = []
             item.Child.forEach(itemchild=>{
               objArr.push(itemchild.Name)
             });
             obj[item.Name] = objArr;
             this.tradeList = Object.assign(this.tradeList,obj)
           })
           console.log(this.tradeList)
           this.columns.push(
             {
               values:Object.keys(this.tradeList),
               className:'column1'
             },
             {
               values:this.tradeList[Object.keys(this.tradeList)[0]],
               className:'column2',
               defaultIndex:0
             }
           )
           console.log(this.columns)
         }
       })
    },
    //选择行业的时候
    onChange(e){
      const {picker,value,index} = e.mp.detail
      picker.setColumnValues(1,this.tradeList[value[0]])
    },
    //选择行业确定
    onConfirm(e){
        const {index,value} = e.mp.detail;
        this.Trade = value.join(",")
        this.showTrade = false
        this.$set(this.columns[1],"values",this.tradeList[value[0]])
    },
    //选择时间
    onInput(e){
        console.log(e,"时间")
        const  date= new Date(e.mp.detail)
        const year = date.getFullYear()
        let month = date.getMonth()+1
        let dd = date.getDate()
        month.toString().length<2 ? (month= "0"+month) : month
        dd.toString().length<2 ? (dd="0"+dd) : dd
        // this.prolist[i].estimateTime = `${year}-${month}-${dd}`
        // this.prolist[i].showDate = false
        // console.log(this.estimateTime,"交付时间")
    },
    //选择区域
    confirmArea(area){
        this.showArea = false
        let text = []
        const areas = area.mp.detail.values
        for(let i=0;i<areas.length;i++){
          text.push(areas[i].name)
        }
        this.Area = text.join(",");
        this.provinceCode=areas[0].code||'' ;
        this.cityCode=areas[1].code||'';
        this.districtCode=areas[2].code||'';
    },
    confirmArea2(area){
      this.showArea2 = false
      let text = ''
      const areas = area.mp.detail.values
      for(let i=0;i<areas.length;i++){
        text+=areas[i].name
      }
      this.provinceCode=areas[0].code||'',
      this.cityCode=areas[1].code||'',
      this.districtCode=areas[2].code||'',
      this.area = text;

    },
    
    //选择工作年限
    choseWorkTime(){
      this.isShow = true
      this.showWorkTime = true
    },
    //关闭弹框
    cancleMask(){
      this.isShow = false
      this.showTrade = false
      this.showWorkTime = false
    },
    //确认工作年限
    confirmWorkTime(){
      for(let i in this.workTime){
        if(i== this.statu){
          this.WorkLife = this.workTime[i]
        }
      }
      this.isShow = false
      this.showWorkTime = false
    },
    //保存数据
    saveData(){
      const personInfo = {
          Avatar: this.Avatar,
          Name:  this.Name,
          Area:  this.Area,
          WorkLife: this.WorkLife,
          WorkIdea:  this.WorkIdea,
          WeChatNum: this.WeChatNum,
          Contacts:  this.Contacts,
          ContactsTel: this.ContactsTel,
          Email: this.Email,
          Trade:this.Trade,
          AvatarwBase:this.AvatarwBase
      }
      this.$store.commit('update',{personInfo})
    },
    //下一步
    nextStep(){
      console.log(this.Avatar)
      this.saveData()
      //个人
      if(this.Company){
        wx.navigateTo({url:'/pages/mine/continueCompany/main'})
      }else{
         wx.navigateTo({url:'/pages/mine/continuePerson/main'})
      }
    },
    //去认证
    goVertical(){
      if(this.IsAUT=='未认证'){
         wx.navigateTo({url:'/pages/mine2/myVertical/main?verticalType=1'})
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
  input{
    text-align:right
  }
  .fontColor{
    color:#808080
  }
  .avatarbox{
    width:108rpx;
    height:108rpx;
    margin-right:0
  }
  
}
.pageContent{
  .weui-btn.btn-active.fill{
    position:fixed;
    bottom:0rpx;
    width:690rpx;
    bottom:60rpx;
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

</style>
