<template>
  <div class="pageContent bg_fff" :class="(showMoreShop || showMoreEquip)?'over_hidden':''">
    <!-- 头部搜索 -->
    <div class="headerTop">
      <div class="inner flex flexAlignCenter">
        <div class="local">
          <span class="name" @click.stop="goCitySelect">{{CityName}}</span>
          <span class="icon-arrow arrow-down"></span>
        </div>
        <div class="searchBox flex1">
          <div class="search" :class="{'flex':showSearch}" @click="keyWords='';showSearch=true">
            <img src="/static/images/icons/search.png" class="icon_search" alt>
            <input
              type="text"
              class="keyWords"
              v-if="showSearch"
              :focus="showSearch"
              @blur="showSearch=false;keyWords?keyWords=keyWords:keyWords='搜索'"
              @confirm="getQueryRentList"
              v-model="keyWords"
              confirm-type="搜索"
            >
            <span v-else>{{keyWords}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- tab切换 -->
    <div class="filterMenu pt15">
      <!-- 一级分类 -->
      <ul class="tabList menu flex justifyContentBetween" v-if="oneTypeList.length>0">
        <li
          v-for="(item,index) in oneTypeList"
          :key="index"
          @click="shiftOneType(index,item.Id)"
          :class="{'active':index===oneTabIndex}"
        >
          <div class="item">{{item.Name}}</div>
        </li>
      </ul>
      <!-- 一级分类  end -->
      <!-- 筛选出来的分类 -->
      <ul class="menu flex center" v-if="hasFilter">
        <li
          class="flex1"
          v-for="(item,index) in filterMenu"
          :key="index"
          :class="{'active':item.selected}"
        >
          <div class="item" @click="filterShade(index)">
            {{item.title}}
            <span class="icon-sj sj-down"></span>
          </div>
        </li>
      </ul>
      <!-- 筛选出来的分类  end -->
    </div>

    <!--列表-->
    <scroll-view class="filterContent" scroll-y="true" @scrolltolower="onReachBottom">
      <!--图标-->
      <!-- 一级分类对应的二级分类 -->
      <div class="navBox" v-if="twoTypeList.length>0">
        <ul class="navList li_20 center navList2">
          <li
            v-for="(item,index) in twoTypeList"
            :key="index"
            :class="{'active':index==twoTabIndex}"
            @click="shiftTwoType(index,item.PageId,item.Id)"
          >
            <div class="outside">
              <div class="icon-img">
                <img :src="item.Img" alt>
              </div>
              <p class="title">{{item.Name}}</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 一级分类对应的二级分类  end -->
      <div class="column levelPanel storeList" v-if="dataList&&dataList.length>0">
        <rentItem  :list="dataList" v-if="type*1 ===21"></rentItem>
        <formationItem  :list="dataList" v-if="type*1 ===22"></formationItem>
        <activityItem  :list="dataList" v-if="type*1 ===23"></activityItem>
        <houseItem  :list="dataList" v-if="type*1 ===24"></houseItem>

        <!-- <formationItem  :list="dataList" ></formationItem> -->
        <!-- <activityItem  :list="dataList" v-if="type*1 ===23"></activityItem> -->
        <!-- <houseItem  :list="dataList" v-if="type*1 ===24"></houseItem> -->
      </div>
      <!-- 暂无数据等提示 -->
      <div class="noData center" style="padding:60rpx 30rpx;" v-if="dataList.length<1&& page===1">暂无数据</div>
      <div
        class="noData center"
        style="margin-top:0;line-height:80rpx;"
        v-if="hasDataList&& page!==1"
      >我也是有底线的!</div>
      <!-- 暂无数据等提示  end -->
    </scroll-view>
    <div v-for="(filterItem,filterIndex) in filterMenu" :key="filterIndex">
    <!--弹层-->
    <div class="mask" v-if="isShade"></div>
    <!--行业分类-->
    <div
      class="modal_mask flex second"
      v-if="isShadeType == 'GladBuyerTrade' && filterItem.selected"
     >
      <div class="scroll flex1">
        <div @click="getTrade(1,-1,0,filterIndex)" :class="{'active':tradeOneTab===-1}">
          <p>不限</p>
        </div>
        <div
          v-for="(item,index) in filterItem.Value"
          :key="index"
          :class="{'active':tradeOneTab===index}"
          @click="getTrade(1,index,item,filterIndex)"
        >
          <p>{{item.Name}}</p>
        </div>
      </div>
      <div class="scroll flex1" v-if="tradelist.length>0" style="border-left:1rpx solid #f2f2f2">
        <div @click="getTrade(2,-1,0,filterIndex)" :class="{'active':tradeTwoTab===-1}">
          <p>不限</p>
        </div>
        <div
          v-for="(item,index) in tradelist "
          :key="index"
          :class="{'active':tradeTwoTab===index}"
          @click="getTrade(2,index,item,filterIndex)"
        >
          <p>{{item.Name}}</p>
        </div>
      </div>
    </div>
    <!--行业分类  end-->
    <!-- 地区 -->
    <div class="modal_mask" v-if="isShadeType == 'GladBuyArea' && filterItem.selected">
      <div class="scroll scroll_price">
        <div
          @click="selectDropDownList(filterItem,-2,'不限')"
          :class="{'active':filterItem.selectIndex===-2}"
        >
          <p>不限</p>
        </div>
        <div
          v-for="(item,index) in  filterItem.Value[0].Child"
          :key="index"
          @click="selectDropDownList(filterItem,index,item.Name)"
          :class="{'active':filterItem.selectIndex===index}"
        >
          <p>{{item.Name}}</p>
        </div>
      </div>
    </div>
    <!-- 地区  end -->
    <!-- 价格弹窗 -->
    <div class="modal_mask" v-if="isShadeType == 'PropertyPrice' && filterItem.selected ">
      <div class="scroll scroll_price">
        <div
          v-for="(item,index) in  filterItem.Value"
          :key="index"
          @click="selectPriceTab(index,item,filterItem)"
          :class="{'active':priceTabIndex===index}"
        >
          <p>{{item.Text}}</p>
        </div>
      </div>
      <div>
        <div class="scroll_price_item">
          <div class="p3">价格区间</div>
          <div class="flex justifyContentCenter scroll_price_itemCenter flexAlignCenter">
            <input type="number" v-model="inputMinPrice" @focus="priceFocus(1)" placeholder="最低价">
            <p class="mm1">--</p>
            <input type="number" v-model="inputMaxPrice" @focus="priceFocus(2)" placeholder="最高价">
          </div>
        </div>
        <div class="ftBtn center">
          <div class="inner">
            <div class="btns">
              <div class="btn bg_ff952e color_fff" @click="btnFilterPrice(filterItem)">确认</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 价格弹窗  end -->
    <!-- 面积 -->
    <div class="modal_mask" v-if="isShadeType == 'PlanBuyArea' && filterItem.selected">
      <div class="scroll scroll_price">
        <div
          v-for="(item,index) in  filterItem.Value"
          :key="index"
          @click="selectAcreage(filterItem,index,item)"
          :class="{'active':filterItem.selectIndex===index}"
        >
          <p>{{item.Text}}</p>
        </div>
      </div>
    </div>
    <!-- 面积 end -->
    <!-- 全职/兼职、合伙待遇、活动频率、圈子属性 -->
    <div class="modal_mask" 
      v-if="(isShadeType === 'JobType'||isShadeType === 'Treatment'||isShadeType === 'RingRate'||isShadeType === 'RingType')&& filterItem.selected">
      <div class="scroll scroll_price">
        <div
          @click="selectDropDownList(filterItem,-2,'不限')"
          :class="{'active':filterItem.selectIndex===-2}"
        >
          <p>不限</p>
        </div>
        <div
          v-for="(item,index) in  filterItem.Value"
          :key="index"
          @click="selectDropDownList(filterItem,index,item.Text)"
          :class="{'active':filterItem.selectIndex===index}"
        >
          <p>{{item.Text}}</p>
        </div>
      </div>
    </div>
    <!-- 全职/兼职、合伙待遇、活动频率、圈子属性end -->
    <!-- 更多的弹窗 -->
    <div
      class="modal_mask more__modal_mask"
      v-if="isShadeType == 'More' && filterItem.selected "
     >
      <div class="modal__bd">
        <ul class="modal_mask_shop">
          <li v-for="(item,key,index) in filterItem.list" :key="index">
            <block v-if="key !== 'PlanBuyDate'">
              <div class="modal_shop_title">{{item.Text}}</div>
              <div class="mask_shop_bd">
                <!-- 单选框 -->
                <block v-if="item.No===0 || item.Yes===0">
                  <radio-group class="radio-group">
                    <label class="radio" @tap="changeStatu(item,true)">
                      <radio :value="item.Yes" :checked="item.Yes" color="#fff"/>是
                    </label>
                    <label class="radio" @tap="changeStatu(item,false)">
                      <radio :value="item.No" :checked="item.No" color="#fff"/>否
                    </label>
                  </radio-group>
                </block>
                <!-- tab选项 -->
                <block v-if="item.Value">
                  <div class="tipsList border__tipsList">
                    <!-- <block v-if="item2.Name">{{item2.Name}}</block> -->
                    <span
                      class="item"
                      :class="{'active':item.selected==index2}"
                      @click="moreSelectItem(item2,index2,key,item)"
                      v-for="(item2,index2) in item.Value"
                      :key="index2"
                    >
                      <block v-if="item.Text">{{item2.Text}}</block>
                      <block v-else>{{item2.Name}}</block>
                    </span>
                  </div>
                </block>
              </div>
            </block>
            <!-- 选择日期 -->
            <block v-else>
              <div class="modal_shop_title">{{item}}</div>
              <div
                class="ipt__selectDate flex flexAlignCenter mt10"
                @click="isShowDate = !isShowDate"
              >
                <input
                  type="text"
                  disabled
                  class="weui-input flex1"
                  :value="setUpDate"
                  style="padding:0 20rpx;"
                  placeholder="请选择日期"
                >
                <span class="icon-arrow arrow-down"></span>
              </div>
            </block>
          </li>
        </ul>
      </div>
      <div class="ftBtn center">
        <div class="inner bm0 fixed">
          <div class="btns flex">
            <div class="btn flex1" style="background:#F2F2F2;" @tap="initMore">重置</div>
            <div class="btn flex1 bg_ff952e color_fff" @tap="sureMoreFilter(filterItem)">确定</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 更多的弹窗  end -->
    <!-- 日期选择 -->
    <div class="shade bottom__shade" style="z-index:300" v-if="isShowDate">
      <div class="mask" style="top:0;"></div>
      <div class="shadeContent" style="">
        <div class="shade__bd">
          <van-datetime-picker
            show-toolbar
            title="计划购买日期"
            @confirm="confirmDate"
            @cancel="closeDate"
            :value="currentDate"
            :min-date="minDate"
            type="date"
          />
        </div>
      </div>
    </div>
    <!-- 日期选择  end -->
    </div>
  </div>
</template>
<script>
import { post, toLogin, getCurrentPageUrlWithArgs, trim } from "@/utils";
import { mapState } from "vuex";
import rentItem from "@/components/rentItem.vue";
import houseItem from "@/components/houseItem.vue";
import activityItem from "@/components/activityItem.vue";
import formationItem from "@/components/formationItem.vue";
// 拼租 = 21,
// 组建 = 22,
// 拼活动 = 23,
// 房源 = 24,
// isHot ：
// 1-优质房源
// 2-热门商铺
// 3-为您推荐

export default {
  components: { 
    rentItem,houseItem,formationItem,activityItem
   },
  data() {
    return {
      userId: "",
      token: "",
      curPage: "",
      type: "", //一级类型id
      isHot:'', //热门筛选
      typeId: "", //筛选发布列表需要传入的二级类的id
      hasFilter: false, //是否搜出了对应的查询条件
      oneTypeList: [], //根据对应类型搜出对应的一级类
      oneTabIndex: 0, //一级类的tab
      oneId: "", //一级类id
      twoTypeList: [], //根据对应的一级类搜出对应的二级类
      twoTabIndex: 0, //二级类的tab
      pageId: "", //获取对应发布筛选查询接口中的pageId
      tradelist: [], //根据一级行业搜查对应的行业
      tradeOneTab: "", //选择行业中的一级tab
      tradeTwoTab: "", //选择行业中的二级tab
      isShadeType: "", //类型弹窗
      isShade: false, //遮罩
      areaTabIndex: "", //地区的选中的active
      filterMenu: [
        {
          index: 0,
          title: "行业",
          str: "GladBuyerTrade",
          selected: false
        },
        {
          index: 1,
          title: "地区",
          str: "GladBuyArea",
          selected: false
        },
        {
          index: 2,
          title: "价格",
          str: "PropertyPrice",
          selected: false
        },
        {
          index: 3,
          title: "更多",
          str: "More",
          selected: false
        }
      ],
      priceTabIndex: "", //价格弹窗的价格选择项active
      minPrice: 0, //最低价，价格弹窗的时候
      maxPrice: 0, //最高价，价格弹窗的时候
      inputMinPrice: "", //价格弹窗中输入的最低价
      inputMaxPrice: "", //价格弹窗中输入的最高价
      minNum: 0, //最小面积
      maxNum: 0, //最大面积
      acreageIndex:'',//面积选择index
      page: 1,
      pageSize: 12,
      cityCode: "", //城市code
      // cityName: "", //城市名称
      dataMoreFilter: [], //不会变的更多的筛选数据
      dataMoreFilter2: {},
      moreFilter: {}, //更多的筛选数据
      oneFilter: {}, //单个的在menu中排列的数据（行业、地区等）
      currentDate: new Date().getTime(),
      minDate: new Date().getTime(),
      isShowDate: false, //弹出选择计划日期
      setUpDate: "", //选择的计划日期
      dataList: [], //筛选出来的数据的列表
      hasDataList: false, //是否有数据
      //筛选条件对象
      goodsInfo: {}, //筛选条件对象
      keyWords: "搜索", //搜索关键词
      showSearch: false
    };
  },
  computed: {
    ...mapState(["CityName",'CityCode'])
  },
  onLoad() {
    this.type = this.$root.$mp.query.type || "";
    this.setBarTitle();
    this.cityCode = this.CityCode;
  },
  onShow() {
    this.init();
  },
  methods: {
    init() {
      this.userId = wx.getStorageSync("userId");
      this.token = wx.getStorageSync("token");
      this.curPage = getCurrentPageUrlWithArgs();
      // this.cityName = wx.getStorageSync("cityName");
      this.twoTypeList = [];
      this.goodsInfo={};
      this.twoTabIndex = 0;
      this.oneTabIndex = 0;
      this.isShade = false;
      this.keyWords = "搜索";
      this.initAll();
      this.initDataList();
      this.getSubMenu();
    },
    // 头部标题
    setBarTitle() {
      let title = "";
      switch (this.type * 1) {
        case 21:
          title = "拼租";
          break;
        case 22:
          title = "组建";
          break;
        case 23:
          title = "拼活动";
          break;
        case 24:
          title = "房源";
          break;
      }
      wx.setNavigationBarTitle({
        title
      });
    },
    //重置行业选择(选择了其他地区等的时候)
    initTrade() {
      this.tradeOneTab = "";
      this.tradeTwoTab = "";
      this.tradelist = [];
    },
    //重置地区选择
    initArea() {
      this.areaTabIndex = "";
    },
    //重置地区的选中的active
    initAreaTab(){
      this.areaTabIndex= ""; 
    },
    //重置价格选择
    initPrice() {
      this.priceTabIndex = "";
      this.minPrice = 0; //最低价，价格弹窗的时候
      this.maxPrice = 0; //最高价，价格弹窗的时候
      this.inputMinPrice = ""; //价格弹窗中输入的最低价
      this.inputMaxPrice = ""; //价格弹窗中输入的最高价
    },
    //重置更多的选择
    initMore() {
      console.log("执行恢复更多",this.dataMoreFilter);
      this.minNum = 0; //最小面积
      this.maxNum = 0; //最大面积
      // this.initAreaTab(); //地区的选中的active
      this.setUpDate = "";
      this.isShowDate = false;
      this.goodsInfo={};
      // return false;
      this.filterMenu.map(item=>{
        if(item.str ==='More'){
          item.list = JSON.parse(JSON.stringify(this.dataMoreFilter));
          console.log("执行恢复更多2",item.list);
        }
      })
    },
    //点击上面的一级类，及拼购拼租的时候，要清除所有行业等选择，跟筛选出来的筛选条件
    initAll() {
      //恢复行业等选择
      // debugger;
      this.isShadeType = "";
      //清除行业
      this.initTrade();
      //清除地区
      this.initArea();
      //清除价格
      this.initPrice();
      //清除更多
      this.initMore();
    },
    //重置发布列表数据的初始值
    initDataList() {
      this.dataList = []; //筛选出来的数据的列表
      this.hasDataList = false; //是否有数据
    },
    //获取一级类型
    getSubMenu() {
      let that = this;
      post("Goods/GetTypeL1", {
        BrandId: that.type
      }).then(res => {
        if (res.code === 0 && res.data.length > 0) {
          that.oneTypeList = res.data;
          if (res.data[0].PageId === 0) {
            //有下级类的时候
            that.oneId = res.data[0].Id;
            that.getSubTwoMenu();
          } else {
            //没有下级类的时候
            that.typeId = res.data[0].Id;
            that.pageId = res.data[0].PageId;
            that.getQueryRentList();
            that.GetFilterQuery();
          }
        }
      });
    },
    //获取二级类型
    getSubTwoMenu() {
      let that = this;
      post("Goods/GetTypeL2", {
        TypeId: that.oneId
      }).then(res => {
        if (res.code === 0 && res.data.length > 0) {
          that.twoTypeList = res.data;
          that.pageId = res.data[0].PageId;
          that.typeId = res.data[0].Id;
          that.getQueryRentList();
          that.GetFilterQuery();
        }
      });
    },
      //获取对应发布筛选
    GetFilterQuery() {
      let that = this;
      post(
        "Goods/GetFilterQuery",
        {
          UserId: that.userId,
          Token: that.token,
          PageId: that.pageId,
          Code: that.cityCode
        },
        that.curPage
      ).then(res => {
        if (res.code === 0 && Object.keys(res.data).length > 0) {
          this.filterMenu=[];
          const _res = res.data;
          // 行业
          this.filterMenuPush(_res,'GladBuyerTrade','行业')
          // 地区
          this.filterMenuPush(_res,'GladBuyArea','地区')
          // 价格
          this.filterMenuPush(_res,'PropertyPrice','价格')
          // 面积
          this.filterMenuPush(_res,'PlanBuyArea','面积')
          // 全职/兼职
          this.filterMenuPush(_res,'JobType','全职/兼职')
          // 合伙待遇
          this.filterMenuPush(_res,'Treatment','合伙待遇')
          // 活动频率
          this.filterMenuPush(_res,'RingRate','活动频率')
          // 圈子属性
          this.filterMenuPush(_res,'RingType','圈子属性')
          // 更多****************
          let params ={}
          // 物业类型
          if(_res.PropertyType){
            params.PropertyType = _res.PropertyType
          }
          // 物业形式
          if(_res.PropertySort){
            params.PropertySort= _res.PropertySort
          }
          // 是否可注册
          if(_res.IsRegArea){
            _res.IsRegArea.Yes= 0
            _res.IsRegArea.No= 0
            params.IsRegArea= _res.IsRegArea
          }
          // 是否允许挂牌
          if(_res.IsAllowOtherList){
            _res.IsAllowOtherList.Yes= 0
            _res.IsAllowOtherList.No= 0
            params.IsAllowOtherList= _res.IsAllowOtherList
          }
          // 可否分割
          if(_res.IsSubPack){
            _res.IsSubPack.Yes= 0
            _res.IsSubPack.No= 0
            params.IsSubPack= _res.IsSubPack
          }
          // 是否是否装修
          if(_res.IsTrim){
            _res.IsTrim.Yes= 0
            _res.IsTrim.No= 0
            params.IsTrim= _res.IsTrim
          }
          // 计划购买日期
          if(_res.PlanBuyDate){
            params.PlanBuyDate= _res.PlanBuyDate
          }
          // 只有list大于0的时候才展示更多
          if(Object.keys(params).length>0){
            this.filterMenu.push({
              title:'更多',
              str:'More',
              selected:false,
              list:params
            })
            this.dataMoreFilter = JSON.parse(JSON.stringify(params));
          }
          that.hasFilter = true;
        }
      });
    },
    // 筛选数组数据添加
    filterMenuPush(_res,key,name){
      if(_res[key]){
        
          if(_res[key]){
            this.filterMenu.push({
              title:name,
              str:key,
              selected:false,
              selectIndex:-1,
              Value:_res[key].Value
            })
          }
      }
    },
    //获取发布列表
    getQueryRentList() {
      let that = this;
      that.page === 1 &&(that.hasDataList = false)
      if (that.hasDataList) return false;
      post(
        "Goods/QueryRentList",
        {
          UserId: that.userId,
          Token: that.token,
          BrandId: that.type,
          Code: that.cityCode,
          TypeId: that.typeId,
          Page: that.page,
          PageSize: that.pageSize,
          MinNum: that.minNum||'',
          MaxNum: that.maxNum||'',
          MinPrice: that.minPrice,
          MaxPrice: that.maxPrice,
          KeyWords: this.keyWords === "搜索" ? "" : this.keyWords,
          GoodsInfo: this.goodsInfo
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          if (that.page === 1) {
            that.dataList = [];
          }
          if (res.data.length < that.pageSize) {
            that.hasDataList = true;
          }
          that.dataList = that.dataList.concat(res.data);
          console.log(that.dataList,'dataList')
        }
      });
    },
    //切换一级类
    shiftOneType(index, id) {
      this.oneTabIndex = index;
      this.oneId = id;
      this.hasFilter = false;
      this.page = 1;
      this.twoTypeList = [];
      this.tradelist = []; //根据一级行业搜查对应的行业
      this.tradeOneTab = ""; //选择行业中的一级tab
      this.tradeTwoTab = ""; //选择行业中的二级tab
      this.isShadeType = ""; //类型弹窗
      this.twoTabIndex = 0; //二级分类活动状态
      this.goodsInfo = {}; //筛选条件对象
      this.isShade = false; //遮罩
      this.initAll();
      if (this.oneTypeList[index].PageId !== 0) {
        //没有二级
        console.log("这里点击切换一级的时候，pageid不是0");
        this.pageId = this.oneTypeList[index].PageId;
        this.typeId = id;
        this.getQueryRentList();
        this.GetFilterQuery();
      } else {
        this.getSubTwoMenu();
      }
    },
    //切换二级类
    shiftTwoType(index, pageId, id) {
      this.pageId = pageId;
      this.page = 1;
      this.typeId = id;
      this.filter = {};
      this.goodsInfo = {}; //筛选条件对象
      this.hasFilter = false;
      this.twoTabIndex = index;
      this.initAll();
      // debugger;
      this.initDataList();
      this.GetFilterQuery();
      this.getQueryRentList();
    },
    changefilterMenu(tabIndex) {
      this.filterMenu.forEach((item, index) => {
        if (tabIndex === index) {
          this.$set(item, "selected", true);
        } else {
          this.$set(item, "selected", false);
        }
      });
    },
    // 点击show筛选弹窗
    filterShade(index) {
        const filterItem = this.filterMenu[index]
        this.isShadeType = filterItem.str;
        this.filterMenu[index].selected = !filterItem.selected;
        this.filterMenu[index].selected?(this.isShade = true):(this.isShade = false)
        this.filterMenu.map(item=>{
          filterItem.str!==item.str?item.selected = false:''
        })
      console.log("index:",this.filterMenu[index].selected);
    },
    //***********************行业---点击一级行业查出对应的二级************
    getTrade(typeIndex, index, item,filterIndex) {
      // 点击第一级
      if (typeIndex === 1) {
        this.tradelist = [];
        this.tradeTwoTab = "";
        this.tradeOneTab = index;
        if (index !== -1) {
          // this.oneFilter.GladBuyerTrade.Value.forEach(item => {
            if (item.Child&&item.Child.length>0) {
             this.tradelist = item.Child;
            }else{
              // 没有二级分类的时候
              const name = this.filterMenu[filterIndex].Value[index].Name;
              this.goodsInfo.GladBuyerTrade = name;
              this.getQueryRentList();
            }
          // });
        } else {
          //行业不限的时候，搜索
          this.isShade = false;
          this.goodsInfo.GladBuyerTrade = '';
          this.$set(this.filterMenu[0], "selected", false);
          //清除不是行业选项的所有的一些选择了的参数
          // this.initArea();
          // this.initPrice();
          // this.initMore();
          // this.initDataList(); //清除发布数据的一些参数
          this.getQueryRentList();
        }
      }
      // 点击第二级
      if (typeIndex === 2) {
        this.tradeTwoTab = index;
        let tradeStr = "";
        const name = this.filterMenu[filterIndex].Value[this.tradeOneTab].Name;
        if (index !== -1) {
          tradeStr = name +"," +this.tradelist[index].Name;
        } else {
          //二级不限的时候
          tradeStr = name;
        }
        this.isShade = false;
        this.$set(this.filterMenu[filterIndex], "selected", false);
        //清除不是行业选项的所有的一些选择了的参数
        // this.initArea();
        // this.initPrice();
        // this.initMore();
        // this.initDataList();
        // 赛选条件对象
        this.goodsInfo.GladBuyerTrade = tradeStr;
        this.getQueryRentList();
      }
    },
    //********************** */选择地区*********************************
    selectAreaTab(filterItem,index, name) {
      this.areaTabIndex = index;
      this.isShade = false;
      // this.isShadeType = "";
      this.$set(filterItem, "selected", false);
      //清除不是地区选项的menu
      // this.initTrade();
      // this.initPrice();
      // this.initMore();
      // this.initDataList();
      // 赛选条件对象
      this.goodsInfo.GladBuyArea = name;
      this.getQueryRentList();
    },

    // **************************价格******************************************
    //选择价格
    selectPriceTab(index, item,filterItem) {
      this.priceTabIndex = index;
      this.minPrice = item.MinPrice;
      this.maxPrice = item.MaxPrice;
      if (this.minPrice === 0 && this.maxPrice === 0) {
        //当选择不限的时候，要去掉下面输入的最高价跟最低价
        this.inputMinPrice = ""; //价格弹窗中输入的最低价
        this.inputMaxPrice = ""; //价格弹窗中输入的最高价
      }
        this.isShade = false;
        this.$set(filterItem, "selected", false);
        this.getQueryRentList();
    },
    //价格弹窗中最低价格或者最高价格获取到聚焦之后，价格选项去掉
    priceFocus(type) {
      this.priceTabIndex = "";
    },
    //点击了价格弹窗中的确定的时候，才开始搜出来
    btnFilterPrice(filterItem) {
      if (this.valPriceShade()) {
        //开始筛选
        // this.initTrade();
        // this.initArea();
        // this.initMore();
        // this.initDataList();
      console.log("最小价格1:" + this.inputMinPrice);
      console.log("最大价格1:" + this.inputMaxPrice);
          this.minPrice = this.inputMinPrice;
          this.maxPrice = this.inputMaxPrice;
        this.isShade = false;
        this.$set(filterItem, "selected", false);
        this.getQueryRentList();
      }
    },
    //如果有价格弹窗的时候，要在点击确认的时候，先判断输入的最高价有没有高于最低价，并且大于0
    valPriceShade() {
      let maxPrice = Number(trim(this.inputMaxPrice));
      let minPrice = Number(trim(this.inputMinPrice));
      console.log("最大价格:" + maxPrice);
      console.log("最小价格:" + minPrice);
      if (minPrice) {
        if (Number.isInteger(minPrice) === false || minPrice < 0) {
          wx.showToast({
            title: "输入的不小于0的整数!",
            icon: "none",
            duration: 1500
          });
          return false;
        }
      }
      if (maxPrice) {
        if (Number.isInteger(maxPrice) === false || maxPrice < 0) {
          wx.showToast({
            title: "输入的不小于0的整数!",
            icon: "none",
            duration: 1500
          });
          return false;
        }
      }
      if (maxPrice && minPrice) {
        if (maxPrice <= minPrice) {
          wx.showToast({
            title: "输入的最高价需高于最低价",
            icon: "none",
            duration: 1500
          });
          return false;
        }
      }
      return true;
    },
    // **************************价格end******************************************
    // ***************************选择面积******************************************
    selectAcreage(filterItem,index, item) {
      // this.acreageIndex = index;
      filterItem.selectIndex = index;
      this.isShade = false;
      // this.isShadeType = "";
      this.$set(filterItem, "selected", false);
      //清除不是地区选项的menu
      // this.initTrade();
      // this.initPrice();
      // this.initMore();
      // this.initDataList();
      // 赛选条件对象
      this.minNum= item.MinNum, //最小面积
      this.maxNum= item.MaxNum, //最大面积
      this.getQueryRentList();
    },
    // **************************面积end******************************************
    // **************************选择下拉筛选列表******************************************
      // index--激活的下标// Text--提交的文本// this.isShadeType--提交的key
    selectDropDownList(filterItem,index,Text){
      filterItem.selectIndex = index;
      this.goodsInfo[this.isShadeType] = Text==='不限'?'':Text
      filterItem.title = Text
      this.isShade = false;
      this.$set(filterItem, "selected", false);
      this.getQueryRentList();
    },
    // **************************选择下拉筛选列表end******************************************
//点击更多筛选的时候的tab可选项
    moreSelectItem(item2, index, key, item) {
      this.$set(item, "selected", index);
    },
    //选择计划购买日期
    confirmDate(e) {
      let dd = new Date(e.mp.detail);
      let year = dd.getFullYear();
      let month = dd.getMonth() + 1;
      let day = dd.getDate();
      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      this.setUpDate = year + "-" + month + "-" + day;
      this.currentDate = dd.getTime();
      this.isShowDate = false;
    },
      //取消日期选择
    closeDate() {
      this.isShowDate = false;
    },
      //选择是或者否的时候
    changeStatu(item,key, bol) {
      //修改对应的选项
      if (bol) {
        this.$set(item, "Yes", 1);
        this.$set(item, "No", 0);
      } else {
        this.$set(item, "Yes", 0);
        this.$set(item, "No", 1);
      }
    },
    //点击更多弹窗中的确定按钮
    sureMoreFilter(filterItem) {
      Object.keys(filterItem.list).map(key=>{
          const item = filterItem.list[key]
          // 标签选项
          if(item.Value&&item.selected!==undefined){
            this.goodsInfo[key] = item.Value[item.selected].Value
          }
          // 单选框
          if(item.Yes||item.No){
            this.goodsInfo[key] = item.Yes?1:0
          }
      });
          // 日期
          if(filterItem.list.PlanBuyDate){
          this.goodsInfo['PlanBuyDate'] = this.setUpDate
          }
      console.log('goodsInfo',filterItem,this.goodsInfo)
      //清除不是更多menu的一下选项
      // this.initTrade();
      // this.initPrice();
      // this.initArea();
      // this.initDataList();
      this.isShade = false;
      this.$set(filterItem, "selected", false);
      this.getQueryRentList();
    },
    //点击更多弹窗中的取消按钮
    cancleMoreFilter() {
      this.initMore();
      console.log("这里是取消了更多的选项");
      console.log(this.moreFilter);
      console.log("这个是dataMoreFilter");
      console.log(this.dataMoreFilter);
      this.isShade = false;
      this.$set(this.filterMenu[3], "selected", false);
    },
    goCitySelect() {
      console.log("这里是取消了更多的选项??????????");
      wx.navigateTo({ url: "/pages/city-select/main" });
    },
    // 上拉加载
    onReachBottom() {
      this.page += 1;
      console.log("这里是取消了更多的选项");
      this.getQueryRentList();
    }
  },
  // 下拉刷新
  onPullDownRefresh() {
    this.page = 1;
    wx.stopPullDownRefresh();
    this.init();
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
.navList2 .active .title,
.active {
  color: #ff952e;
}
.filterContent {
  height: calc(100vh - 228rpx);
}
.scroll {
  overflow: hidden;
  overflow-y: auto;
  // max-height: calc(100vh - 400rpx);
  max-height: 600rpx;
  height: auto;
  &.scroll_price {
    
  }
}
.modal_mask {
  bottom: inherit !important;
  height: inherit !important;
}
.scroll_price_item {
  margin-top: 0;
  position: relative;
  padding-top: 20rpx;
  padding-bottom: 40rpx;
  &::before {
    position: absolute;
    content: "";
    left: 30rpx;
    right: 30rpx;
    top: 0;
    height: 1px;
    background: #f2f2f2;
  }
}
.modal_shop_title {
  font-weight: normal !important;
}
.border__tipsList span {
  border-color: #e5e5e5;
  color: #666;
  padding: 4rpx 20rpx;
  font-size: 28rpx;
  border-radius: 6rpx;
  margin-right: 40rpx;
  &.active {
    border-color: #ff952e;
    color: #ff952e;
  }
}
.ipt__selectDate {
  border: 1px solid #e5e5e5;
  border-radius: 10rpx;
  .weui-input {
    line-height: 70rpx;
    height: 70rpx;
  }
}
.modal_mask_shop li {
  margin-bottom: 40rpx;
  margin-top: 0;
}
.more__modal_mask {
  height: calc(100vh - 230rpx) !important;
  overflow: hidden;
  overflow-y: auto;
}
.search {
  // transition:1s;
}
.keyWords {
  text-align: left;
  width: 90%;
}
</style>