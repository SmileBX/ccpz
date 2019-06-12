<template>
  <div class="pageContent">
    <div class="FormBox">
      <img class="topbgimg" src="/static/images/icons/bg1.jpg">
      <!-- 短租房使用背景bg2.jpg -->
      <div class="FormCon" style="margin-top:-260rpx;">
        <div class="formTitle">
          <div class="titletxt">{{pageTitle}}</div>
          <p class="subtitle">{{subTitle}}</p>
        </div>
        <div class="form-cells">
          <div class="form-cells-item">
            <div class="form-cells-navigate navigate-right">
              <div class="form-cells-hd">标题</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  placeholder="请填写适合标题"
                   v-model="Title"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <div class="form-cells-item">
            <div :class="{showDefaultCompany:'form-cells-navigate navigate-bottom'}">
              <div class="form-cells-hd">公司名称</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  placeholder="请输入公司名称"
                  @click="showDefaultCompany && getCompany"
                  v-model="Company"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <!--输入选择内容-->
          <div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">活动类型</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">活动区域</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="isShowAddr=true"
                    v-model="GladBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">活动价格</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PropertyPrice"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">活动人数</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PlanBuyNum"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">公司行业</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">意向行业</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    v-model="GladBuyerTrade"
                    @click="showTrade=true"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">场地总面积</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="AllArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">拼租面积</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PlanBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">活动时间</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="showDate=true"
                    v-model="PlanBuyDate"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">年龄层次</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="AgeLevel"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">男女比例</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="SexRatio"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">学历结构</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    v-model="EducationLvl"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <!--公司简介-->
          <div class="form-cells-item">
            <div class="form-cells-navigate navigate-right">
              <div class="form-cells-hd">公司简介</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  placeholder="请填写公司详细简介"
                  v-model="Synopsis"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
           <!--公司理念-->
          <!--办公室描述-->
          <div class="form-cells-item" v-if="TypeId==58">
            <div class="form-cells-navigate navigate-right">
              <div class="form-cells-hd">办公室描述</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  placeholder="描述一下办公室环境能够更加吸引优质候选人哦"
                  v-model="ContentDetail"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <!--上传图片-->
          <div class="form-cells-item">
            <div class="form-cells-hd">{{upImgTitle}}</div>
            <div class="form-cell-bd form-cell-img">
              <div class="upbtn" v-for="(item,pindex) in imgArr" :key="pindex">
                <span class="close" @click="delImg(pindex)">×</span>
                <img class="upimg" :src="item">
              </div>
              <div class="upbtn" @click="chosseImg" v-if="imgArr.length<picLength">
                <img class="upimg" src="/static/images/icons/upload_1.png">
              </div>
            </div>
          </div>
          <!--选项-->
          <!--地址-->
          <div class="form-cells-item">
            <div class="form-cells-navigate navigate-right">
              <div class="form-cells-hd">{{addrTitle}}</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  :placeholder="addrPlaceholder"
                  v-model="CompanyAddr"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <div class="form-cells-item">
            <div>
              <div class="form-cells-hd">{{addDetailTitle}}</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  :placeholder="addDetailPlaceholder"
                  v-model="CompanyDoorNum"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <!--标签-->
          <div class="form-cells-item" v-if="TypeId==58">
            <div class="form-cells-hd">拼租设施/设备</div>
            <div class="form-cell-bd">
              <div class="btns-group">
                <div class="btn cur">网络/无线</div>
                <div class="btn cur">打印机</div>
                <div class="btn cur">会议室</div>
                <div class="btn">前台</div>
                <div class="btn">独立卡座</div>
                <div class="btn">自定义+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 以下是组建公司显示 -->
      <div v-if="TypeId==58">
          <div class="formTitle" >
            <div class="titletxt c_333">想看看什么样的人</div>
            <p class="subtitle">将根据您的要求推荐优质合伙人</p>
          </div>
          <div class="FormCon mb10">
            <div class="form-cells">
              <div class="form-cells-item">
                <div class="form-cells-navigate navigate-right">
                  <div class="form-cells-hd">职位名称</div>
                  <div class="form-cell-bd">
                    <input
                      class="ipt"
                      type="text"
                      placeholder="请输入职位名称"
                      placeholder-style="color:#b5b5b5;"
                    >
                  </div>
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">经验要求</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">最低学历</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">合伙待遇</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">全职/兼职</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">工作时间</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item">
                <div class="form-cells-navigate navigate-right">
                  <div class="form-cells-hd">职位描述</div>
                  <div class="form-cell-bd">
                    <input
                      class="ipt"
                      type="text"
                      placeholder="请填写职位详细信息"
                      placeholder-style="color:#b5b5b5;"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="AddBtn_info">
            <img class="icon" src="/static/images/icons/add_icon.png" alt="">
            <div class="tips">添加新的职位信息</div>
          </div>
      </div>
      <div class="ftbox" @click="submitApply">
        <div class="btn">确认发布</div>
      </div>
    </div>
    <!--弹层-->
    <div class="mask" v-if="isShowMask" catchtouchmove="true" @click="cancle"></div>
    <div class="maskType boxSize" v-if="isShowMask" :class="showNoChange?'noParActive':''">
        <div class="flex">
              <span class="size" @click="cancle">取消</span>
              <span class="title">{{masktitle}}</span>
              <span class="color size" @click="subConfirm">确定</span>
        </div>
        <div v-if="showInput">
            <input type="text" placeholder="请输入设备要求" v-model="deviceTip" style="padding:0 30rpx;">
        </div>
        <scroll-view :scroll-y="true" style="height:480rpx;" :style="showNoChange?'height:200rpx':''" class="showItem" @scrolltolower="loadMore">
          <div v-for="(item,index) in list" :key="index">
              <p :class="{'itemactive':statu == index}" @click="chose(index)" style="margin-top:3rpx;">{{item.Name}}
              </p>
          </div>
        </scroll-view>
    </div> 
    <!--时间插件-->
    <van-action-sheet :show="showDate" @close="showDate=false" @select="showDate=false">
        <van-datetime-picker
        type="date"
        :value="currentDate"
        @confirm="onInput($event)"
        @cancel="showDate=false"
        :min-date="minDate"
        title="请选择时间"
        style="z-index:888!important"
        />
    </van-action-sheet> 
    <!--行业插件--> 
    <van-popup :show="showTrade" position="bottom" :overlay="true" @close="showTrade = false">
        <van-picker  show-toolbar title="请选择行业" @confirm="onConfirm"
          @cancel="showTrade = false" :columns="columns" @change="onChange($event)"/>
    </van-popup>
    <!--地区插件--> 
    <div class="shade bottom__shade" v-if="isShowAddr">
      <div class="mask"></div>
      <div class="shadeContent">
        <div class="shade__bd">
          <van-picker
            v-if="hasAddr"
            show-toolbar
            title="请选择区域"
            @confirm="onConfirmAddr"
            @cancel="isShowAddr=false"
            :columns="columns2"
            @change="onChangeAddr($event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//TypeId--58厂房发布  
//拼活动 场地-37  活动-69
import "@/style/style_fb.scss";
import { post,host,getCurrentPageUrlWithArgs} from "@/utils";
// import areaList from "@/utils/areaList";
import {pathToBase64} from "@/utils/image-tools";
export default {
  data() {
    return {
      currentDate: new Date().getTime(),
      minDate: new Date().getTime(),
      curPage: "",
      userId: "",
      token: "",
      TypeId:'',
      detailInfo:[],
      picLength:6,//上传图片的长度
      imgArr:[],//上传图片的路径
      isShowMask:false,//是否显示弹层
      showNoChange:false,//控制是否选择高度
      showArea:false,//显示区域
      showInput:false,//显示输入框
      showTrade:false,
      columns:[],//picker列表
      tradeList:{},//行业列表
      tradeListBox:[],//行业列表
      showDate:false,//显示时间
      list:[],//弹层列表
      masktitle:"",//弹层标题
      statu:0,//控制弹层item选中样式
      IsCompanyList:'',//本公司是否挂牌       1:是  0:否
      IsCompanyListMsg:'',
      IsRegArea:'', //是否可注册
      IsRegAreaMsg:'',
      IsAllowOtherList:'',//是否允许对方挂牌    1:是  0:否
      IsAllowOtherListMsg:'',
      IsSubPack:'',//业务是否分包        1:是  0:否
      IsSubPackMsg:'',
      IsSenior:'',//公司资质是否可使用   1:是  0:否
      IsSeniorMsg:'',
      IsStockCooperation:'',//股份合作未来是否考虑  1:是  0:否
      IsStockCooperationMsg:'',
      PropertyType:'', //物业/设备类型
      PropertySort:"", //物业/设备形式
      PropertyPrice:'', //物业单价/设备单价
      GladBuyAreaId:'', //区域code代码
      GladBuyArea:'', //意向购买区域\设备使用区域  格式，'1级区域,2级区域'
      GladBuyerTradeId:'',//意向行业/主营业务Id
      GladBuyerTrade:'', //意向行业/主营业务   格式，'1级行业,2级行业'
      RentTimeLimit:"",//租赁期限
      ContentDetail:"",//办公室环境描述

      BuyBudget:'', //购买预算  
      IsTrimMsg:'',
      IsTrim:'',//是否装修  0-否   1-是
      PlanBuyArea:'', //计划购买面积
      PlanBuyDate:'', //计划购买日期--可租时间
      Title:"",//标题
      showDefaultCompany:false,//只有一个公司默认显示
      Company:"",//公司名称-
      CompanyId:"",//公司Id
      CompanyAddr:'',//对应标题地址
      CompanyDoorNum:'',//对应标题地址门牌号
      Synopsis:'',//简介
      SpecsType:"",//规格型号
      PlanBuyNum:"",//计划购买数量
      NeedOfficeNum:"",//卡位需求（格式：3卡2室）
      ServiceName:"",//设施/设备 以英文逗号隔开
      DeviceRent:"",//价格最小
      DevicePrice:"",//价格最大
      AllArea:"",//总面积

      pageTitle:"",//页面标题
      subTitle:"",//副标题
      introduce:"",//简介标题
      introducePlaceholder:"",//简介的placeholder
      upImgTitle:"",//上传图片标题
      addrTitle:"",//地址标题
      addrPlaceholder:"",//地址的
      addDetailTitle:"",//补充说明的
      addDetailPlaceholder:"",//补
      addressList:[],//地区列表
      addressList2:{},
      isShowAddr:false,
      hasAddr:false,
      columns2:[],
      //拼租设施/设备写死的数据
      Devicelist:[
        {Id:1,Name:"网络/无线",active:true},{Id:2,Name:"打印机"},{Id:3,Name:"会议室"},{Id:4,Name:"前台"},{Id:5,Name:"独立卡座"},{Id:6,Name:"自定义+"},
      ],
      deviceTip:"",//添加自定义
     

    };
    
  },
  onLoad() {
    this.setBarTitle();
  },
  onShow(){
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.TypeId = this.$root.$mp.query.TypeId
    console.log(this.TypeId,"TypeId")
    this.initData()
    this.GetPublishItems()
  },
  components: {},
   methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "发布"
      });
    },
    aaa(){
      this.isShowAddr = true;
      console.log("______________")
    },
    addDeviceNum(e){
      if(this.Devicelist[e].Name=="自定义+"){
        this.isShowMask = true
        this.showNoChange = true
        this.showInput=true
        this.masktitle = '请输入自定义的内容'
      }else{
        if(this.Devicelist[e].active){
          this.$set(this.Devicelist[e],"active",false)
        }else{
          this.$set(this.Devicelist[e],"active",true)
        }
      }
    },
    onChangeAddr(event){  //选择的时候
      const { picker, value, index } = event.mp.detail;
      picker.setColumnValues(1, this.addressList2[value[0]]);
    },
    onConfirmAddr(event){
       const { index, value } = event.mp.detail;
       console.log(event)
       let str = '';
      // console.log(this.addressList[index[0]].Child[index[1]].Code);
      //  console.log(index);
      //  console.log(this.addressList[index[0]].Code);
       this.GladBuyArea = value.join(",");
       this.GladBuyAreaId = this.addressList[index[0]].Child[index[1]].Code
       this.$set(this.columns2[1],'values',this.addressList2[value[0]]);
       this.$set(this.columns2[1],'defaultIndex',index[1]);
       console.log(" this.GladBuyAreaId:" ,this.GladBuyAreaId)
       this.isShowAddr = false
    },
    initData(){
        this.isShowMask =false
        this.showNoChange = false
        this.showArea =false
        this.showInput =false
        this.showTrade =  false
        this.showDate = false
        this.columns = []
        this.tradeList = {},//行业列表
        this.tradeListBox = [],//行业列表
        this.deviceTip = ''
        if(this.TypeId==37){
          this.pageTitle = '拼场地表单'
          this.subTitle = '(行业交流会/推广会/发布会/其他活动)'
          this.introduce = "公司简介"
          this.introducePlaceholder = "请填写公司详细简介"
          this.upImgTitle = "场地照片"
          this.addrTitle = "场地地址"
          this.addrPlaceholder = "场地名称 如：如京基大厦"
          this.addDetailTitle = "门牌号"
          this.addDetailPlaceholder = "门牌号/楼号等 例：3楼418室"
        }else if(this.TypeId==52 || this.TypeId==36 || this.TypeId==65 || this.TypeId==66 || this.TypeId==63 || this.TypeId==62 || this.TypeId == 64){
            this.introduce = "公司简介"
            this.introducePlaceholder = "请填写公司详细简介"
            if(this.TypeId==52 || this.TypeId==36 ||  this.TypeId==66 || this.TypeId==63 || this.TypeId==62 || this.TypeId == 64){
                this.addrTitle = "公司地址"
                this.addrPlaceholder = "办公室大楼 如：如京基大厦"
                this.addDetailTitle = "门牌号"
                this.addDetailPlaceholder = "门牌号/楼号等 例：3楼418室"
            }
            if(this.TypeId==52){
              this.pageTitle = '拼购设备表单'
              this.subTitle = '(设备/售卖机)'
              this.upImgTitle = "公司/团队照片"
            }
            if(this.TypeId==36){
              this.pageTitle = '拼购物业表单'
              this.subTitle = '(物业)'
              this.upImgTitle = "公司/团队照片"
            }
            if(this.TypeId==65){
              this.pageTitle = '办公室寻找拼租表单'
              this.subTitle = '(办公室/商铺/工厂/培训机构/其他)'
              this.upImgTitle = "办公室照片"
            }
            
        }
        
    },
    //时间
    onInput(e) {
        console.log(e, "时间");
        const date = new Date(e.mp.detail);
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dd = date.getDate();
        month.toString().length < 2 ? (month = "0" + month) : month;
        dd.toString().length < 2 ? (dd = "0" + dd) : dd;
        this.PlanBuyDate = `${year}-${month}-${dd}`;
        this.showDate = false
    },
    //获取认证的公司
    getCompany(){
        console.log(this.detailInfo,"detailInfo+++++++++++")
    },
    //获取短租办公形式
    getShortRent(){
      this.isShowMask = true
      this.list = this.detailInfo.ShortRent
      this.masktitle = '请选择办公形式'
    },
    //租赁期限
    getRentTimeLimit(){
      this.isShowMask = true
      let info = {}
      this.detailInfo.RentTimeLimit.Value.map(item=>{
          info={
            Name:item.Text
          }
          this.list.push(info)
      })
      
      this.masktitle = '请选择期限'
    },

    //获取物业形式-设备形式-办公形式
    getProperty(){
      console.log(this.detailInfo,"detailInfo+++++++++++")
      this.isShowMask = true
      this.list = this.detailInfo.Device
      if(this.TypeId == 36){
        this.masktitle = '请选择物业形式'
      }else if(this.TypeId == 52){
        this.masktitle = '请选择设备形式'
      }else if(this.TypeId == 62){
          this.masktitle = '请选择办公形式'
      }
      
    },
    //获取设备类型
    getPropertyType(){
      this.isShowMask = true  
      let info = {}
      this.detailInfo.DeviceType.Value.map(item=>{
          info={
            Name:item
          }
          this.list.push(info)
      })
      this.masktitle = '请选择设备类型'
    },
    //选择弹层item
    chose(e){
        this.statu = e
    },
    //确定选择
    subConfirm(){
      for(let i in this.list){
          if(i*1 == this.statu){
              if(this.masktitle =='请选择物业形式' || this.masktitle =='请选择设备形式'){
                  this.PropertySort = this.list[i].Name;
              }
              if(this.masktitle =='请选择办公形式' ){
                  this.PropertySort = this.list[i].Name;
              }
              
              if(this.masktitle =='请选择设备类型' ){
                  this.PropertyType = this.list[i].Name;
              }
              if(this.masktitle =='请选择期限' ){
                console.log("this.list:",this.list)
                  this.RentTimeLimit = this.list[i].Name
              }
              
              
          }
      }
      if(this.masktitle =='请输入自定义的内容'){
        console.log("______________________")
        let tips={
          Id:this.Devicelist.length,
          Name:this.deviceTip,
          active:true
        }
        this.Devicelist.unshift(tips)
      }
      this.isShowMask = false
      this.showNoChange = false
      this.showInput = false
      this.statu = 0
      this.list = []
    },
    //取消选择
    cancle(){
      this.isShowMask = false
      this.showNoChange = false
      this.statu = 0
    },
    //获取默认数据
    GetPublishItems(){
      let that = this;
      post('Goods/GetPublishItems',{
          UserId:that.userId,
          Token:that.token,
          TypeId:that.TypeId
      },that.curPage).then(res=>{
        console.log(res,"GetPublishItems")
        if(res.code==0){
            //已经认证了 获取信息 发布信息
          that.detailInfo = res.data;
          if(res.data.arealist.length>0){
            {
            this.addressList = res.data.arealist
             this.addressList.forEach(item => {
                let obj = {};
                let arr =[];
                item.Child.forEach(item2=>{
                  arr.push(item2.Name)
                });
                obj[item.Name] = arr;
                this.addressList2 = Object.assign(this.addressList2,obj);
              })
              
              this.columns2.push(
                {
                values: Object.keys(this.addressList2),
                className: "column1"
                },
                {
                  values: this.addressList2[Object.keys(this.addressList2)[0]],
                  className: 'column2',
                  defaultIndex: 0
                }
              )
              this.hasAddr = true,
              console.log(this.hasAddr)
              }
            }
             //行业的信息
            {
              this.tradelistBox = res.data.tradelist
              this.tradelistBox.forEach(item=>{
              let obj = {}
              let objArr = []
              item.Child.forEach(itemchild=>{
                objArr.push(itemchild.Name)
              });
              obj[item.Name] = objArr;
              that.tradeList = Object.assign(that.tradeList,obj);
            }),
            that.columns.push(
                {
                values: Object.keys(that.tradeList),
                className: "column1"
                },
                {
                  values: that.tradeList[Object.keys(that.tradeList)[0]],
                  className: 'column2',
                  defaultIndex: 0
                }
              )
            }
            //公司的信息
            if(res.data.CompanyList.lenght>1){
                this.showDefaultCompany = true
            }else{
                this.showDefaultCompany = false
                this.Company = res.data.CompanyList[0].Name
                this.CompanyId = res.data.CompanyList[0].Id
                console.log(this.Company,"this.companyName")
            }
          

        }else{
            //没有认证 先去认证  code=5 企业认证  code=6个人认证
            wx.showToast({
            title:res.msg,
            duration:1500,
            icon:'none',
          })
          if(res.code==6){
              setTimeout(() => {
                wx.navigateTo({
                  url: "/pages/mine2/myVertical/main?url=rentDevice"
                });
              }, 1500);
          }else if(res.code==5){
              setTimeout(() => {
                wx.navigateTo({
                  url: "/pages/mine2/verticalCompany/main?url=rentDevice"
                });
              }, 1500);
          }
        }
      })
    },
    onChange(event){  //选择行业
      const { picker, value, index } = event.mp.detail;
      picker.setColumnValues(1, this.tradeList[value[0]]);
    },
    onConfirm(event){  //选择行业确定
    console.log(event);
      const { index, value } = event.mp.detail;
      this.GladBuyerTrade = value.join(",");
      this.GladBuyerTradeId = this.tradelistBox[index[0]].Child[index[1]].Id
      this.showTrade=false
      // console.log(picker.setValues);
      this.$set(this.columns[1],'values',this.tradeList[value[0]]);
      this.$set(this.columns[1],'defaultIndex',index[1]);
      console.log(this.columns)
    },
    //上传图片
    chosseImg(){
      const that = this;
      let num = 0;
      if(that.imgArr.length<that.picLength){
          num = that.picLength - that.imgArr.length
          wx.chooseImage({
            count: num,
            sizeType: ['compressed'],
            sourceType: ['album','camera'],
            success: (res)=>{
               res.tempFilePaths.forEach(item=>{
                  that.imgArr.push(item)
               })
            },
          });
      }
    },
    async base64Img(arr){
      let base64Arr = []
      for(let i = 0;i < arr.length;i++){
        const res = await pathToBase64(arr[i]);
        base64Arr.push({
          picUrl:res
        })
      }
      return base64Arr
    },
    //删除图片
    delImg(index){
        this.imgArr.splice(index,1)
    },
    //提示语
    toastTip(tip){
       wx.showToast({
          title: tip,
          icon: "none",
          duration: 1500
        }); 
    },
    valOther() {
      //校验
      if (this.Title == '') {
        this.toastTip("请输入标题!")
        return false;
      }
      if (this.imgArr.length <= 0) {
        this.toastTip("请上传图片!")
        return false;
      }
      if (this.CompanyDoorNum == '') {
        this.toastTip("请输入门牌号!")
        return false;
      }
      if (this.CompanyAddr == '') {
        this.toastTip("请输入地址!")
        return false;
      }
      if (this.PropertyPrice == '') {
        this.toastTip("请输入对应金额!")
        return false;
      }
      if (this.CompanyId == '') {
        this.toastTip("请选择公司!")
        return false;
      }
      if (this.Synopsis == '') {
        this.toastTip("请输入简介!")
        return false;
      }
      if (this.PlanBuyArea == '') {
        this.toastTip("请输入面积!")
        return false;
      }
      if (this.GladBuyerTradeId == '') {
        this.toastTip("请选择行业!")
        return false;
      }
      if (this.PlanBuyNum == '') {
        this.toastTip("请输入数量!")
        return false;
      }
      if (this.AllArea == '') {
        this.toastTip("请输入总面积!")
        return false;
      }
      if (this.SexRatio == '') {
        this.toastTip("请输入男女比例!")
        return false;
      }
      if (this.AgeLevel == '') {
        this.toastTip("请输入年龄层次!")
        return false;
      }
      if (this.GladBuyAreaId=='') {
        this.toastTip("请选择区域!")
        return false;
      }
      if (this.PlanBuyDate =='') {
        this.toastTip("请选择时间!")
        return false;
      }
      if (this.EducationLvl =='') {
        this.toastTip("请选择学历结构!")
        return false;
      }
      
      
      
      return true;
    },
    //提交发布
    async submitApply(){
      console.log("++++++")
      const that = this
      let PicList = await that.base64Img(that.imgArr);
       let GoodsInfo={}
      if(that.TypeId == 36){
          GoodsInfo = {
          Title:that.Title,
          CompanyId:that.CompanyId,
          CompanyAddr:that.CompanyAddr,
          CompanyDoorNum:that.CompanyDoorNum,
          Synopsis:that.Synopsis,
          GladBuyerTradeId:that.GladBuyerTradeId,
          PropertySort:that.PropertySort,
          PropertyPrice:that.PropertyPrice,
          PlanBuyArea:that.PlanBuyArea,
          PlanBuyDate:that.PlanBuyDate,
          GladBuyAreaId:that.GladBuyAreaId,
          BuyBudget:that.BuyBudget,
          IsTrim:that.IsTrim,
          IsCompanyList:that.IsCompanyList,
          IsAllowOtherList:that.IsAllowOtherList,
          IsSenior:that.IsSenior,
          IsSubPack:that.IsSubPack,
          IsStockCooperation:that.IsStockCooperation
        }
      }
      
      if(that.valOther()){
          if(that.TypeId == 65 || that.TypeId == 64 || that.TypeId == 62){
            for(let i in that.Devicelist){
              if(that.Devicelist[i].active){
                that.ServiceName+=that.Devicelist[i].Name+","
              }
            }
          console.log("that.ServiceName:",that.ServiceName)
          }
        //that.submitAll(JSON.stringify(PicList),GoodsInfo)
      }
    },
    submitAll(PicList,GoodsInfo){
      post('Goods/RentSharing',{
          UserId:this.userId,
          Token:this.token,
          TypeId:this.TypeId,
          PicList:PicList,
          GoodsInfo:GoodsInfo

      },this.curPage).then(res=>{
        console.log("Goods/RentSharing",res)
        wx.showToast({
          title:res.msg,
          icon:'success',
          duration:1500,
        })
        if(res.code==0){
            setTimeout(() => {
              wx.navigateTo({
                url:'/pages/VerticalStatus/main'
              })
              this.trimData()
            },1500)
        }
      })
    },
    trimData(){
      this.imgArr=[]
      this.Title = ''
      this.CompanyId = ''
      this.CompanyAddr = ''
      this.CompanyDoorNum = ''
      this.Synopsis = ''
      this.GladBuyerTrade = ''
      this.PropertyType = ''
      this.PropertySort = ''
      this.PropertyPrice = ''
      this.PlanBuyArea = ''
      this.PlanBuyDate = ''
      this.GladBuyArea = ''
      this.BuyBudget = ''
      this.IsTrim = ''
      this.IsTrimMsg = ''
      this.IsRegArea = ''
      this.IsRegAreaMsg = ''
      this.IsCompanyList = ''
      this.IsCompanyListMsg = ''
      this.IsAllowOtherList = ''
      this.IsAllowOtherListMsg = ''
      this.IsSenior = ''
      this.IsSeniorMsg = ''
      this.IsSubPack = ''
      this.IsSubPackMsg = ''
      this.IsStockCooperation = ''
      this.IsStockCooperationMsg = ''
      this.SpecsType = ''
      this.PlanBuyNum = ''
      this.deviceTip = ''
      this.DevicePrice = ''
      this.DeviceRent = ''
      this.ServiceName = ''
      this.NeedOfficeNum = ''
      this.RentTimeLimit = ''
      this.ContentDetail = ''
    }
    
  },

  created() {}
};
</script>
<style lang="scss" scoped>
.form-cells .form-cells-item .ipt{
  padding-right:0
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
.noParActive{
  height:320rpx!important;
}
.noChilActive{
  height:200rpx!important;
}
.upbtn{
  width:190rpx;
  height:190rpx
}
</style>