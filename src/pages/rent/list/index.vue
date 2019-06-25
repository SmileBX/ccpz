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
          :class="{'active':item.str===isShadeType}"
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
    <!--弹层-->
    <div class="mask" v-if="isShade"></div>
    <!--行业分类-->
    <div
      class="modal_mask flex second"
      v-if="isShadeType == 'GladBuyerTrade' && filterMenu[0].selected"
     >
      <div class="scroll flex1">
        <div @click="getTrade(1,-1)" :class="{'active':tradeOneTab===-1}">
          <p>不限</p>
        </div>
        <div
          v-for="(item,index) in oneFilter.GladBuyerTrade.Value"
          :key="index"
          :class="{'active':tradeOneTab===index}"
          @click="getTrade(1,index,item.Id)"
        >
          <p>{{item.Name}}</p>
        </div>
      </div>
      <div class="scroll flex1" v-if="tradelist.length>0" style="border-left:1rpx solid #f2f2f2">
        <div @click="getTrade(2,-1)" :class="{'active':tradeTwoTab===-1}">
          <p>不限</p>
        </div>
        <div
          v-for="(item,index) in tradelist "
          :key="index"
          :class="{'active':tradeTwoTab===index}"
          @click="getTrade(2,index,item.Id)"
        >
          <p>{{item.Name}}</p>
        </div>
      </div>
    </div>
    <!--行业分类  end-->
    <!-- 地区 -->
    <div class="modal_mask" v-if="isShadeType == 'GladBuyArea' && filterMenu[1].selected">
      <div class="scroll scroll_price">
        <div
          v-for="(item,index) in  oneFilter.GladBuyArea.Value[0].Child"
          :key="index"
          @click="selectAreaTab(index,item.Name)"
          :class="{'active':areaTabIndex===index}"
        >
          <p>{{item.Name}}</p>
        </div>
      </div>
    </div>
    <!-- 地区  end -->
    <!-- 价格弹窗 -->
    <div class="modal_mask" v-if="isShadeType == 'PropertyPrice' && filterMenu[2].selected ">
      <div class="scroll scroll_price">
        <div
          v-for="(item,index) in  oneFilter.PropertyPrice.Value"
          :key="index"
          @click="selectPriceTab(index,'PropertyPrice',item)"
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
              <div class="btn bg_ff952e color_fff" @click="btnFilterPrice">确认</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 价格弹窗  end -->
    <!-- 更多的弹窗 -->
    <div
      class="modal_mask more__modal_mask"
      v-if="isShadeType == 'More' && filterMenu[3].selected "
     >
      <div class="modal__bd">
        <ul class="modal_mask_shop">
          <li v-for="(item,key,index) in moreFilter" :key="index">
            <block v-if="key !== 'PlanBuyDate' ">
              <div class="modal_shop_title">{{item.Text}}</div>
              <div class="mask_shop_bd">
                <block v-if="item.No || item.Yes">
                  <radio-group class="radio-group">
                    <label class="radio" @tap="changeStatu(key,true)">
                      <radio :value="item.Yes" :checked="item.Yes===1" color="#fff"/>是
                    </label>
                    <label class="radio" @tap="changeStatu(key,false)">
                      <radio :value="item.No" :checked="item.No===1" color="#fff"/>否
                    </label>
                  </radio-group>
                </block>
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
            <div class="btn flex1" style="background:#F2F2F2;" @tap="cancleMoreFilter">取消</div>
            <div class="btn flex1 bg_ff952e color_fff" @tap="sureMoreFilter">确定</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 更多的弹窗  end -->
    <!-- 日期选择 -->
    <div class="shade bottom__shade" style="z-index:300" v-if="isShowDate">
      <div class="mask" style="z-index:200;background:rgba(0,0,0,1);top:0;"></div>
      <div class="shadeContent" style="z-index:230">
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
      page: 1,
      pageSize: 12,
      cityCode: "", //城市code
      // cityName: "", //城市名称
      dataMoreFilter: {}, //不会变的更多的筛选数据
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
      this.twoTabIndex = 0;
      this.oneTabIndex = 0;
      this.isShade = false;
      this.keyWords = "搜索";
      this.initAll();
      this.initDataList();
      // debugger;
      this.getSubMenu();
    },
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
    toDetail(id) {
      console.log(id,'ididididi')
      wx.navigateTo({ url: "/pages/rent/pinzuDetail/main?id" + id });
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
      console.log("执行恢复更多");
      this.minNum = 0; //最小面积
      this.maxNum = 0; //最大面积
      this.setUpDate = "";
      this.isShowDate = false;
      this.moreFilter = Object.assign({}, this.dataMoreFilter);
    },
    //点击上面的一级类，及拼购拼租的时候，要清除所有行业等选择，跟筛选出来的筛选条件
    initAll() {
      //恢复行业等选择
      this.$set(this.filterMenu[0], "selected", false);
      this.$set(this.filterMenu[1], "selected", false);
      this.$set(this.filterMenu[2], "selected", false);
      this.$set(this.filterMenu[3], "selected", false);
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
    //如果有价格弹窗的时候，要在点击确认的时候，先判断输入的最高价有没有高于最低价，并且大于0
    valPriceShade() {
      let maxPrice = Number(trim(this.inputMaxPrice));
      let minPrice = Number(trim(this.inputMinPrice));
      console.log("最大价格:" + maxPrice);
      if (minPrice !== "") {
        if (Number.isInteger(minPrice) === false || minPrice < 0) {
          wx.showToast({
            title: "输入的不小于0的整数!",
            icon: "none",
            duration: 1500
          });
          return false;
        }
      }
      if (maxPrice !== "") {
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
    GetFilterQuery() {
      //获取对应发布筛选
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
          for (let key in res.data) {
            if (
              key == "GladBuyArea" ||
              key == "GladBuyerTrade" ||
              key == "PropertyPrice"
            ) {
              this.oneFilter = Object.assign(this.oneFilter, {
                [key]: res.data[key]
              });
            } else {
              if (res.data[key].Value) {
                for (let key2 in res.data[key].Value) {
                  res.data[key] = Object.assign({}, res.data[key], {
                    selected: -1
                  });
                }
              }
              this.moreFilter = Object.assign(this.moreFilter, {
                [key]: res.data[key]
              });
            }
            this.dataMoreFilter = JSON.parse(JSON.stringify(this.moreFilter));
          }
          console.log("更多里面的要更改的");
          console.log(this.moreFilter);
          console.log("更多里面的不要更改的");
          console.log(this.dataMoreFilter);
          console.log("menuone");
          console.log(this.oneFilter);
          that.hasFilter = true;
        }
      });
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
          MinNum: that.minNum,
          MaxNum: that.maxNum,
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
          // *********************拼租
          res.data.map(item => {
            if (item.FirstTags) {
              that.$set(item, "FirstTags", item.FirstTags.split("|"));
            } else {
              that.$set(item, "FirstTags", []);
            }
            if (item.SecondTags) {
              that.$set(item, "SecondTags", item.SecondTags.split("|"));
            } else {
              that.$set(item, "SecondTags", []);
            }
          });
          // **************
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
      console.log("index:" + index);
      this.$set(
        this.filterMenu[index],
        "selected",
        !this.filterMenu[index].selected
      );

      console.log("tttttttttttttttttt");
      console.log(this.filterMenu[index]);
      for (let key in this.filterMenu) {
        if (this.filterMenu[key].index !== index) {
          this.$set(this.filterMenu[key], "selected", false);
        }
      }
      if (this.filterMenu[index].selected) {
        this.isShade = true;
        this.isShadeType = this.filterMenu[index].str;
      } else {
        this.isShade = false;
        this.isShadeType = "";
      }
    },
    //点击一级行业查出对应的二级行业
    getTrade(typeIndex, index, id) {
      if (typeIndex === 1) {
        this.tradelist = [];
        this.tradeTwoTab = "";
        this.tradeOneTab = index;
        if (index !== -1) {
          this.oneFilter.GladBuyerTrade.Value.forEach(item => {
            if (item.Id == id) {
              this.tradelist = item.Child;
            }
          });
        } else {
          //行业不限的时候，搜索
          this.isShade = false;
          this.$set(this.filterMenu[0], "selected", false);
          //清除不是行业选项的所有的一些选择了的参数
          this.initArea();
          this.initPrice();
          this.initMore();
          this.initDataList(); //清除发布数据的一些参数
          this.getQueryRentList();
        }
      }
      if (typeIndex === 2) {
        this.tradeTwoTab = index;
        let tradeStr = "";
        if (index !== -1) {
          tradeStr =
            this.oneFilter.GladBuyerTrade.Value[this.tradeOneTab].Name +
            "," +
            this.tradelist[this.tradeTwoTab].Name;
        } else {
          //二级不限的时候
          tradeStr = this.oneFilter.GladBuyerTrade.Value[this.tradeOneTab].Name;
        }
        this.isShade = false;
        this.$set(this.filterMenu[0], "selected", false);
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
    //选择地区
    selectAreaTab(index, name) {
      this.areaTabIndex = index;
      this.isShade = false;
      // this.isShadeType = "";
      this.$set(this.filterMenu[1], "selected", false);
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
    selectPriceTab(index, key, item) {
      this.priceTabIndex = index;
      this.minPrice = item.MinPrice;
      this.maxPrice = item.MaxPrice;
      if (this.minPrice === 0 && this.maxPrice === 0) {
        //当选择不限的时候，要去掉下面输入的最高价跟最低价
        this.inputMinPrice = ""; //价格弹窗中输入的最低价
        this.inputMaxPrice = ""; //价格弹窗中输入的最高价
      }
    },
    //价格弹窗中最低价格或者最高价格获取到聚焦之后，价格选项去掉
    priceFocus(type) {
      this.priceTabIndex = "";
    },
    //点击了价格弹窗中的确定的时候，才开始搜出来
    btnFilterPrice() {
      if (this.valPriceShade()) {
        //开始筛选
        // this.initTrade();
        // this.initArea();
        // this.initMore();
        // this.initDataList();
        if (this.inputMinPrice) {
          this.minPrice = parseInt(this.inputMinPrice);
        }
        if (this.inputMaxPrice) {
          this.maxPrice = parseInt(this.inputMaxPrice);
        }
        this.isShade = false;
        this.$set(this.filterMenu[2], "selected", false);
        this.getQueryRentList();
      }
    },
    // **************************价格end******************************************
    //点击更多筛选的时候的可选项
    moreSelectItem(item2, index, key, item) {
      // let key2 = this.moreFilter[key]
      console.log("11111111", item);
      // key2.selected = -1
      // key2.selected = index
      // this.$set(this.moreFilter, key, {});
      // this.moreFilter[key].selected=index
      this.$set(item, "selected", -1);
      this.$set(item, "selected", index);
      // this.$set(item, {});
      // this.$set(this, "moreFilter", this.moreFilter);
      console.log("这里是取消了更多的选项_____", index);
      console.log(this.moreFilter);
      console.log("这个是dataMoreFilter++++++");
      console.log(this.dataMoreFilter);
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
    closeDate() {
      //取消日期选择
      this.isShowDate = false;
    },
    changeStatu(key, bol) {
      //选择是或者否的时候
      //修改对应的选项
      if (bol) {
        this.$set(this.moreFilter[key], "Yes", 1);
        this.$set(this.moreFilter[key], "No", 0);
      } else {
        this.$set(this.moreFilter[key], "Yes", 0);
        this.$set(this.moreFilter[key], "No", 1);
      }
    },
    //点击更多弹窗中的确定按钮
    sureMoreFilter() {
      let json = {};
      for (let key in this.moreFilter) {
        if (
          this.moreFilter[key].Value &&
          this.moreFilter[key].selected !== -1
        ) {
          if (key === "RentTimeLimit") {
            //短租的期限，取值Value
            json = Object.assign(json, {
              [key]: this.moreFilter[key].Value[this.moreFilter[key].selected]
                .Value
            });
          } else {
            json = Object.assign(json, {
              [key]: this.moreFilter[key].Value[this.moreFilter[key].selected]
                .Text
            });
          }
        } else {
          if (key === "PlanBuyDate" && trim(this.setUpDate)) {
            json = Object.assign(json, { [key]: this.setUpDate });
          }
          if (this.moreFilter[key].Yes || this.moreFilter[key].No) {
            this.moreFilter[key].Yes === 1
              ? (json = Object.assign(json, {
                  [key]: this.moreFilter[key].Yes
                }))
              : (json = Object.assign(json, {
                  [key]: this.moreFilter[key].No
                }));
          }
        }
      }
      console.log("已经选择的整合");
      console.log(json);
      //清除不是更多menu的一下选项
      this.initTrade();
      this.initPrice();
      this.initArea();
      this.initDataList();
      this.getQueryRentList(json);
      this.isShade = false;
      this.$set(this.filterMenu[3], "selected", false);
    },
    cancleMoreFilter() {
      //点击更多弹窗中的取消按钮
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