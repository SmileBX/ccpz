<template>
  <div class="pageContent">
    <div class="FormBox">
      <img class="topbgimg" src="/static/images/icons/bg2.jpg" v-if="TypeId==58">
      <img class="topbgimg" src="/static/images/icons/bg1.jpg" v-else>
      <div class="FormCon" style="margin-top:-260rpx;">
        <div class="formTitle">
          <div class="titletxt">{{pageTitle}}</div>
          <p class="subtitle">{{subTitle}}</p>
        </div>
        <!--标题-->
        <div class="form-cells">
          <div class="form-cells-item">
            <div class="">
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
          <!--公司名称 -->
          <div class="form-cells-item" v-if="TypeId==36 || TypeId==52">
            <div :class="{showDefaultCompany:'form-cells-navigate navigate-bottom'}">
              <div class="form-cells-hd">公司名称</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择公司"
                  @click="showDefaultCompany && getCompany"
                  placeholder-style="color:#b5b5b5;"
                  v-model="Company"
                >
              </div>
            </div>
          </div>
          <!--公司-->
          <!-- <div class="form-cells-item" style="padding-right:0"  v-if="TypeId==36 || TypeId==52">
            <div class="form-cells-item">
              <div class="form-cell-bd">深圳木棉科技有限公司</div>
            </div>
            <div class="form-cells-item">
              <div class="form-cell-bd">深圳大漠时代文化传媒集团有限公司</div>
            </div>
          </div> -->
          <div v-if="TypeId==36">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column" @click="getProperty">
                  <div class="form-cells-hd">物业形式</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    v-model="PropertySort"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">物业单价</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PropertyPrice"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">意向购买区域</div>
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
                <div class="item2-column">
                  <div class="form-cells-hd">是否装修</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="getTrim(1)"
                    v-model="IsTrimMsg"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">计划购买日期</div>
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
                  <div class="form-cells-hd">计划购买面积</div>
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
                  <div class="form-cells-hd">意向拼购方行业</div>
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
                <div class="item2-column">
                  <div class="form-cells-hd">购买预算</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="BuyBudget"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <div v-if="TypeId==52">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">物业形式</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">物业单价</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请输入"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">意向购买区域</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">是否装修</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请输入"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">计划购买日期</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">计划购买面积</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请输入"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">意向拼购方行业</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">购买预算</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请输入"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <!--公司简介-->
          <div class="form-cells-item">
            <div class="">
            <!-- <div class="form-cells-navigate navigate-right"> -->
              <div class="form-cells-hd">公司简介</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  placeholder="请填写公司详细简介"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <!--厂房出租-->
          <div v-if="TypeId==58">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">起租期</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请填写"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">付款方式</div>
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
                  <div class="form-cells-hd">面积</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请填写"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">租金</div>
                  <div class="flex flexAlignCenter justifyContentCenter">
                      <input class="ipt" type="text"  placeholder="请填写" placeholder-style="color:#b5b5b5;">元/m <span class="sup">2</span> 
                  </div>
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">类型</div>
                  <input
                    class="ipt flex2"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">日租金</div>
                  <div class="flex flexAlignCenter justifyContentCenter">
                      <input
                        class="ipt flex2"
                        type="text"
                        placeholder="请选择"
                        placeholder-style="color:#b5b5b5;"
                        style="padding:0"
                      >
                      <p>
                        元/m
                        <span class="sup">2</span>
                        /天
                      </p>
                  </div>
                </div>
              </div>
              <!--公司简介 或者出租要求-->
              <div class="form-cells-item">
                <div class="">
                  <div class="form-cells-hd">{{introduce}}</div>
                  <div class="form-cell-bd">
                    <input
                      class="ipt"
                      type="text"
                      :placeholder="introducePlaceholder"
                      placeholder-style="color:#b5b5b5;"
                    >
                  </div>
                </div>
              </div>
          </div>
          <!--上传图片-->
          <div class="form-cells-item">
            <div class="form-cells-hd">{{upImgTitle}}</div>
            <div class="form-cell-bd form-cell-img">
              <div class="upbtn">
                <span class="close">×</span>
                <img class="upimg" src="/static/images/of/index_a1.jpg">
              </div>
              <div class="upbtn">
                <img class="upimg" src="/static/images/icons/upload_1.png">
              </div>
            </div>
          </div>
          <!--选项 start-->
          <div v-if="TypeId==52">
            <div class="form-cells-item form-cells-item2">
              <div class="item2-column">
                <div class="form-cells-hd">是否挂牌</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
              <div class="item2-column">
                <div class="form-cells-hd">业务分包</div>
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
                <div class="form-cells-hd">资质使用</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
              <div class="item2-column">
                <div class="form-cells-hd">股份合作</div>
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
                <div class="form-cells-hd">是否允许对外挂牌</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
              <!-- <div class="item2-column">
                <div class="form-cells-hd">实缴资本</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  placeholder-style="color:#b5b5b5;"
                >
              </div> -->
            </div>
          </div>
          <div v-if="TypeId==36">
            <div class="form-cells-item form-cells-item2">
              <div class="item2-column">
                <div class="form-cells-hd">业务分包</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  @click="getTrim(2)"
                  v-model="IsSubPackMsg"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
              <div class="item2-column">
                <div class="form-cells-hd">可否使用公司资质</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  @click="getTrim(3)"
                  v-model="IsSeniorMsg"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
            <div class="form-cells-item form-cells-item2">
              <div class="item2-column">
                <div class="form-cells-hd">股份合作</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  @click="getTrim(4)"
                  v-model="IsStockCooperationMsg"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
              <div class="item2-column">
                <div class="form-cells-hd">公司挂牌</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  @click="getTrim(5)"
                  v-model="IsCompanyListMsg"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
            <div class="form-cells-item form-cells-item2">
              <div class="item2-column">
                <div class="form-cells-hd">对方公司挂牌</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  @click="getTrim(6)"
                  v-model="IsAllowOtherListMsg"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
              <!-- <div class="item2-column">
                <div class="form-cells-hd">实缴资本</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  placeholder-style="color:#b5b5b5;"
                >
              </div> -->
            </div>
          </div>
          <!--选项 end-->
           <!--地址-->
          <div class="form-cells-item">
            <div class="">
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
        </div>
      </div>
      <!--按钮-->
      <div class="ftbox">
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
          @cancel="onCancel" :columns="columns" @change="onChange($event)"/>
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
//拼购--   设备拼购-52   物业拼购-36 
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
      isShowMask:false,//是否显示弹层
      showNoChange:false,//控制是否选择高度
      showArea:false,//显示区域
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
      PropertySort:'', //物业/设备形式
      PropertyPrice:'', //物业单价/设备单价
      GladBuyAreaId:'', //区域code代码
      GladBuyArea:'', //意向购买区域\设备使用区域  格式，'1级区域,2级区域'
      GladBuyerTradeId:'',//意向行业/主营业务Id
      GladBuyerTrade:'', //意向行业/主营业务   格式，'1级行业,2级行业'
      BuyBudget:'', //购买预算  
      IsTrimMsg:'',
      IsTrim:'',//是否装修  0-否   1-是
      PlanBuyArea:'', //计划购买面积
      PlanBuyDate:'', //计划购买日期
      Title:"",//标题
      showDefaultCompany:false,//只有一个公司默认显示
      Company:"",//公司名称-
      CompanyId:"",//公司Id
      CompanyAddr:'',//对应标题地址
      CompanyDoorNum:'',//对应标题地址门牌号

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
     columns2:[]

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
        if(this.TypeId==58){
          this.pageTitle = '厂房出租表单'
          this.subTitle = '(厂房/车位/土地/仓库等)'
          this.introduce = "出租要求"
          this.introducePlaceholder = "请填写出租要求"
          this.upImgTitle = "厂房照片"
          this.addrTitle = "详细地址"
          this.addrPlaceholder = "详细地址 如：如西莫敦199号"
          this.addDetailTitle = "补充几句"
          this.addDetailPlaceholder = "详细的描述会大大增加快速出租的机会"
        }else if(this.TypeId==52){
          this.pageTitle = '拼购设备表单'
          this.subTitle = '(设备/售卖机)'
          this.introduce = "公司简介"
          this.introducePlaceholder = "请填写公司详细简介"
          this.upImgTitle = "公司/团队照片"
          this.addrTitle = "公司地址"
          this.addrPlaceholder = "办公室大楼 如：如京基大厦"
          this.addDetailTitle = "门牌号"
          this.addDetailPlaceholder = "门牌号/楼号等 例：3楼418室"
        }else if(this.TypeId==36){
          this.pageTitle = '拼购物业表单'
          this.subTitle = '(物业)'
          this.introduce = "公司简介"
          this.introducePlaceholder = "请填写公司详细简介"
          this.upImgTitle = "公司/团队照片"
          this.addrTitle = "公司地址"
          this.addrPlaceholder = "办公室大楼 如：如京基大厦"
          this.addDetailTitle = "门牌号"
          this.addDetailPlaceholder = "门牌号/楼号等 例：3楼418室"
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
    //获取物业形式
    getProperty(){
      console.log(this.detailInfo,"detailInfo+++++++++++")
      this.isShowMask = true
      this.list = this.detailInfo.Property
      this.masktitle = '请选择物业形式'
    },
    //选择弹层item
    chose(e){
        this.statu = e
    },
    //是否装修
    getTrim(n){
      //1-是否装修 2-业务分包 3-是否可使用公司资质 4-股份合作 5-公司挂牌 6-对方公司挂牌
      this.isShowMask = true
      this.showNoChange = true
      console.log(this.showNoChange)
      if(n==1){
        this.list = [{Id:1,Name:'需要装修'},{Id:0,Name:'不需要装修'}]
        this.masktitle = '请选择是否装修'
      }
      if(n==2){
        this.list = [{Id:1,Name:'可业务分包'},{Id:0,Name:'无业务分包'}]
        this.masktitle = '请选择业务分包'
      }
      if(n==3){
        this.list = [{Id:1,Name:'公司资质是可以使用'},{Id:0,Name:'公司资质是不可使用'}]
        this.masktitle = '请选择公司资质'
      }
      if(n==4){
        this.list = [{Id:1,Name:'考虑未来股份合作'},{Id:0,Name:'不考虑未来股份合作'}]
        this.masktitle = '请选择股份合作'
      }
      if(n==5){
        this.list = [{Id:1,Name:'本公司已挂牌'},{Id:0,Name:'本公司未挂牌'}]
        this.masktitle = '请选择公司挂牌'
      }
      if(n==6){
        this.list = [{Id:1,Name:'允许对方挂牌'},{Id:0,Name:'不允许对方挂牌'}]
        this.masktitle = '请选择对方公司挂牌'
      }

    },
    //确定选择
    subConfirm(){
      console.log(this.list,"++++++++++++++++++++++++++++++++++")
      for(let i in this.list){
          if(i*1 == this.statu){
              if(this.masktitle =='请选择物业形式'){
                  this.PropertySort = this.list[i].Name;
              }
              if(this.masktitle =='请选择是否装修'){
                this.IsTrim = this.list[i].Id;
                if(this.list[i].Id==0){
                  this.IsTrimMsg = '否';
                }else{
                   this.IsTrimMsg = '是';
                }
              }
              if(this.masktitle =='请选择业务分包'){
                this.IsSubPack = this.list[i].Id;
                if(this.list[i].Id==0){
                  this.IsSubPackMsg = '否';
                }else{
                   this.IsSubPackMsg = '是';
                }
              }
              if(this.masktitle =='请选择公司资质'){
                this.IsSenior = this.list[i].Id;
                if(this.list[i].Id==0){
                  this.IsSeniorMsg = '否';
                }else{
                   this.IsSeniorMsg = '是';
                }
              }
              if(this.masktitle =='请选择股份合作'){
                this.IsStockCooperation = this.list[i].Id;
                if(this.list[i].Id==0){
                  this.IsStockCooperationMsg = '否';
                }else{
                   this.IsStockCooperationMsg = '是';
                }
              }
              if(this.masktitle =='请选择公司挂牌'){
                this.IsCompanyList = this.list[i].Id;
                if(this.list[i].Id==0){
                  this.IsCompanyListMsg = '否';
                }else{
                   this.IsCompanyListMsg = '是';
                }
              }
              if(this.masktitle =='请选择对方公司挂牌'){
                this.IsAllowOtherList = this.list[i].Id;
                if(this.list[i].Id==0){
                  this.IsAllowOtherListMsg = '否';
                }else{
                   this.IsAllowOtherListMsg = '是';
                }
              }
              if(this.masktitle =='请选择意向行业'){
                 
              }
          }
      }
      this.isShowMask = false
      this.showNoChange = false
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
     valOther() {
      //校验
      if (trim(this.PropertySort || this.GladBuyAreaId || this.PlanBuyDate || this.GladBuyerTradeId || this.IsTrim || this.IsCompanyList || this.IsAllowOtherList || this.IsSubPack ||this.IsSenior || this.IsStockCooperation) == "") {
        wx.showToast({
          title: "请选择需要选择的内容!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (trim(this.Title || this.CompanyId ||　this.CompanyAddr || this.CompanyDoorNum) == "") {
        wx.showToast({
          title: "请输入内容!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      // if (trim(this.setUpDate) == "") {
      //   wx.showToast({
      //     title: "请选择公司成立日期!",
      //     icon: "none",
      //     duration: 1500
      //   });
      //   return false;
      // }
      // if (trim(this.staffSize) == "") {
      //   wx.showToast({
      //     title: "请输入人员规模!",
      //     icon: "none",
      //     duration: 1500
      //   });
      //   return false;
      // }
      return true;
    },
    
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
</style>