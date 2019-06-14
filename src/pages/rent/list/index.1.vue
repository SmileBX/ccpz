<template>
  <div class="pageContent bg_fff" :class="(showMoreShop || showMoreEquip)?'over_hidden':''">
    <!-- 头部搜索 -->
    <div class="headerTop">
      <div class="inner flex flexAlignCenter">
        <div class="local">
          <span class="name">{{cityName}}</span>
          <span class="icon-arrow arrow-down"></span>
        </div>
        <div class="searchBox flex1">
          <div class="search">
            <img src="/static/images/icons/search.png" class="icon_search" alt>
            <span>搜索</span>
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
      <ul class="menu flex center" v-if="hasFilter">
        <li class="flex1" v-for="(item,key,index) in filter.one" :key="index"  :class="{'active':item.selected}">
          <div class="item" @click="filterShade(key,index)">
            {{item.Text}}
            <span class="icon-sj sj-down"></span>
          </div>
        </li>
        <!-- <li v-if="filter.arealist && filter.arealist !== '' ">
          <div class="item">
            区域
            <span class="icon-sj sj-down"></span>
          </div>
        </li>
        <li v-if="filter.PlanBuyArea && filter.PlanBuyArea !== '' ">
          <div class="item">
            面积
            <span class="icon-sj sj-down"></span>
          </div>
        </li>
        <li v-if="filter.PropertyPrice && filter.PropertyPrice !=='' ">
          <div class="item">
            价格
            <span class="icon-sj sj-down"></span>
          </div>
        </li>-->
        <li class="flex1">
          <div class="item" @click="moreFilter">
            更多
            <span class="icon-sj sj-down"></span>
          </div>
        </li>
      </ul>
    </div>

    <!--列表-->
    <scroll-view class="filterContent" scroll-y="true">
      <!--图标-->
      <!-- 一级分类对应的二级分类 -->
      <div class="navBox" v-if="twoTypeList.length>0">
        <ul class="navList li_20 center navList2">
          <li
            v-for="(item,index) in twoTypeList"
            :key="index"
            :class="{'active':index==twoTabIndex}"
            @click="shiftTwoType(index,item.PageId)"
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
      <ul class="column levelPanel storeList">
        <li class="item" @click="toDetail">
          <div class="outside">
            <div class="pictrueAll">
              <div class="pictrue img">
                <img src="/static/images/of/index_a1.jpg" alt>
              </div>
            </div>
            <div class="txtBox">
              <p class="title ellipsis">
                <span class="typeName">拼办公室</span>深圳连锁办公室拼租
              </p>
              <p class="priceArea">
                <span class="price">3000</span>元/月
              </p>
              <p class="msgList">
                <span class="msgItem">工程设计</span>
                <span class="msgItem">
                  100m
                  <span class="sup">2</span>
                </span>
                <span class="msgItem">3卡2独</span>
                <span class="msgItem">罗湖</span>
              </p>
              <p class="tipsList">
                <span>股份合作</span>
                <span>可使用公司资质</span>
                <span>可挂牌</span>
              </p>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="outside">
            <div class="pictrueAll">
              <div class="pictrue img">
                <img src="/static/images/of/index_a1.jpg" alt>
              </div>
            </div>
            <div class="txtBox">
              <p class="title ellipsis">
                <span class="typeName">拼办公室</span>深圳连锁办公室拼租
              </p>
              <p class="priceArea">
                <span class="price">3000</span>元/月
              </p>
              <p class="msgList">
                <span class="msgItem">工程设计</span>
                <span class="msgItem">
                  100m
                  <span class="sup">2</span>
                </span>
                <span class="msgItem">3卡2独</span>
                <span class="msgItem">罗湖</span>
              </p>
              <p class="tipsList">
                <span>股份合作</span>
                <span>可使用公司资质</span>
                <span>可挂牌</span>
              </p>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="outside">
            <div class="pictrueAll">
              <div class="pictrue img">
                <img src="/static/images/of/index_a1.jpg" alt>
              </div>
            </div>
            <div class="txtBox">
              <p class="title ellipsis">
                <span class="typeName">拼办公室</span>深圳连锁办公室拼租
              </p>
              <p class="priceArea">
                <span class="price">3000</span>元/月
              </p>
              <p class="msgList">
                <span class="msgItem">工程设计</span>
                <span class="msgItem">
                  100m
                  <span class="sup">2</span>
                </span>
                <span class="msgItem">3卡2独</span>
                <span class="msgItem">罗湖</span>
              </p>
              <p class="tipsList">
                <span>股份合作</span>
                <span>可使用公司资质</span>
                <span>可挂牌</span>
              </p>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="outside">
            <div class="pictrueAll">
              <div class="pictrue img">
                <img src="/static/images/of/index_a1.jpg" alt>
              </div>
            </div>
            <div class="txtBox">
              <p class="title ellipsis">
                <span class="typeName">拼办公室</span>深圳连锁办公室拼租
              </p>
              <p class="priceArea">
                <span class="price">3000</span>元/月
              </p>
              <p class="msgList">
                <span class="msgItem">工程设计</span>
                <span class="msgItem">
                  100m
                  <span class="sup">2</span>
                </span>
                <span class="msgItem">3卡2独</span>
                <span class="msgItem">罗湖</span>
              </p>
              <p class="tipsList">
                <span>股份合作</span>
                <span>可使用公司资质</span>
                <span>可挂牌</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </scroll-view>
    <!--弹层-->
    <div class="mask" v-if="isShade"></div>
    <!--行业分类-->
    <div class="modal_mask flex second" v-if="isShadeType == 'GladBuyerTrade'">
      <div class="scroll flex1">
        <div @click="getTrade(1,-1)" :class="{'active':tradeOneTab===-1}">
          <p>不限</p>
        </div>
        <div
          v-for="(item,index) in filter.one.GladBuyerTrade.Value"
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
    <!--弹层1：中间一级-->
    <!--房源弹层高度:modal_mask_house :class="{'modal_mask_house':index==item.index}"-->
    <!-- <div class="modal_mask">
      <div class="scroll">
        <div v-for="(item,index) in list " :key="index">
          <p>{{item}}</p>
        </div>
      </div>
    </div>-->
    <!--弹层3：中间一级 拼价格-->
    <div class="modal_mask" v-if="isShadeType == 'PropertyPrice'">
      <div class="scroll scroll_price">
        <div v-for="(item,index) in  filter.one.PropertyPrice.Value" :key="index" @click="selectOneTab(index,'PropertyPrice',item)" :class="{'active':selectOneTabIndex===index}">
          <p>{{item.Text}}</p>
        </div>
      </div>
      <div>
        <div class="scroll_price_item">
          <div class="p3">价格区间</div>
          <div class="flex justifyContentCenter scroll_price_itemCenter flexAlignCenter">
            <input type="number" v-model="inputMinPrice" @focus="priceFocus" placeholder="最低价">
            <p class="mm1">--</p>
            <input type="number" v-model="inputMaxPrice" @focus="priceFocus" placeholder="最高价">
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
    <!-- 物业形式 -->
    <div class="modal_mask" v-if="isShadeType == 'PropertySort'">
      <div class="scroll scroll_price">
        <div v-for="(item,index) in  filter.one.PropertySort.Value" :key="index" @click="selectOneTab(index,'PropertySort',item)" :class="{'active':selectOneTabIndex===index}">
          <p>{{item.Name}}</p>
        </div>
      </div>
    </div>
    <!-- 物业形式  end -->
    <!-- 地区 -->
    <div class="modal_mask" v-if="isShadeType == 'GladBuyArea'">
      <div class="scroll scroll_price">
        <div v-for="(item,index) in  filter.one.GladBuyArea.Value[0].Child" :key="index" @click="selectOneTab(index,'GladBuyArea',item)" :class="{'active':selectOneTabIndex===index}">
          <p>{{item.Name}}</p>
        </div>
      </div>
    </div>
    <!-- 地区  end -->
    <!-- 面积 -->
    <div class="modal_mask" v-if="isShadeType == 'PlanBuyArea'">
      <div class="scroll scroll_price">
        <div v-for="(item,index) in  filter.one.PlanBuyArea.Value" :key="index" @click="selectOneTab(index,'PlanBuyArea',item)" :class="{'active':selectOneTabIndex===index}">
          <p>{{item.Text}}</p>
        </div>
      </div>
    </div>
    <!-- 地区  end -->
    <!-- 更多的弹窗 -->
    <div class="modal_mask" v-if="isShadeType == 'more'">
      <div class="modal__bd">
        <ul class="modal_mask_shop">
          <li v-for="(item,key,index) in filter.more" :key="index">
            <block v-if="key !== 'PlanBuyDate' ">
              <div class="modal_shop_title">{{item.Text}}</div>
              <div class="mask_shop_bd">
                <block v-if="item.No || item.Yes">
                  <radio-group class="radio-group" @change="changeStatu">
                    <label class="radio">
                      <radio :value="item.Yes" :checked="item.Yes===1" color="#fff" />是
                    </label>
                    <label class="radio">
                      <radio :value="item.No" :checked="item.No===1" color="#fff" />否
                    </label>
                  </radio-group>
                </block>
                <block v-if="item.Value">
                  <div class="tipsList border__tipsList">
                    <span class="item" v-for="(item2,index2) in item.Value" :key="index2">{{item2}}</span>
                  </div>
                </block>
              </div>
            </block>
            <block v-else>
              <div class="modal_shop_title">{{item}}</div>
              <div class="ipt__selectDate flex flexAlignCenter mt10">
                <input type="text" disabled class="weui-input flex1" style="padding:0 20rpx;" placeholder="请选择日期">
                <span class="icon-arrow arrow-right"></span>
              </div>
            </block>
          </li>
        </ul>
      </div>
    </div>
    <!-- 更多的弹窗  end -->

    <!--设备、短租模板******************************-->
    <div class="modal_mask short_rent boxSize" style="height:100%" v-if="showMoreEquip">
      <div class="short_rent_child">
        <p class="font30 fontBold" style="text-align:left">租赁期限</p>
        <ul class="navList li_20 center navList2">
          <li>
            <p>一周</p>
          </li>
          <li>
            <p>半个月</p>
          </li>
          <li>
            <p>1个月</p>
          </li>
          <li>
            <p>2个月</p>
          </li>
          <li>
            <p>3个月</p>
          </li>
          <li>
            <p>4个月</p>
          </li>
          <li>
            <p>5个月</p>
          </li>
          <li>
            <p>6个月</p>
          </li>
        </ul>
      </div>
      <div class="short_rent_child">
        <p class="font30 fontBold" style="text-align:left">办公开式</p>
        <ul class="navList li_20 center navList2">
          <li>
            <p>写字楼</p>
          </li>
          <li>
            <p>商铺</p>
          </li>
          <li>
            <p>工厂</p>
          </li>
          <li>
            <p>会议室</p>
          </li>
          <li>
            <p>咖啡厅</p>
          </li>
          <li>
            <p>茶楼</p>
          </li>
          <li>
            <p>饮品店</p>
          </li>
        </ul>
      </div>
      <div class="btnSub2 flex">
        <div class="mask_btn_cancle">取消</div>
        <div class="mask_btn_confirm">确定</div>
      </div>
    </div>
    <!--办公室、商铺筛选更多******************************-->
    <div class="modal_mask boxSize" style="height:100%" v-if="showMoreShop">
      <scroll-view scroll-y="true" class="scroll modal_shop_scroll">
        <ul class="modal_mask_shop">
          <li>
            <div class="modal_shop_title">业务是否外包</div>
            <div class="mask_shop_bd">
              <radio-group class="radio-group" @change="changeStatu">
                <label class="radio">
                  <radio value="1" :checked="value==1" color="#fff"/>是
                </label>
                <label class="radio">
                  <radio value="0" :checked="value==0" color="#fff"/>否
                </label>
              </radio-group>
            </div>
          </li>
          <li>
            <div class="modal_shop_title">业务是否外包</div>
            <div class="mask_shop_bd">
              <radio-group class="radio-group" @change="changeStatu">
                <label class="radio">
                  <radio value="1" :checked="value==1" color="#fff"/>是
                </label>
                <label class="radio">
                  <radio value="0" :checked="value==0" color="#fff"/>否
                </label>
              </radio-group>
            </div>
          </li>
          <li>
            <div class="modal_shop_title">业务是否外包</div>
            <div class="mask_shop_bd">
              <radio-group class="radio-group" @change="changeStatu">
                <label class="radio">
                  <radio value="1" :checked="value==1"/>是
                </label>
                <label class="radio">
                  <radio value="0" :checked="value==0"/>否
                </label>
              </radio-group>
            </div>
          </li>
          <li>
            <div class="modal_shop_title">业务是否外包</div>
            <div class="mask_shop_bd">
              <radio-group class="radio-group" @change="changeStatu">
                <label class="radio">
                  <radio value="1" :checked="value==1"/>是
                </label>
                <label class="radio">
                  <radio value="0" :checked="value==0"/>否
                </label>
              </radio-group>
            </div>
          </li>
          <li>
            <div class="modal_shop_title">业务是否外包</div>
            <div class="mask_shop_bd">
              <radio-group class="radio-group" @change="changeStatu">
                <label class="radio">
                  <radio value="1" :checked="value==1"/>是
                </label>
                <label class="radio">
                  <radio value="0" :checked="value==0"/>否
                </label>
              </radio-group>
            </div>
          </li>
          <li>
            <div class="modal_shop_title">业务是否外包</div>
            <div class="mask_shop_bd">
              <radio-group class="radio-group" @change="changeStatu">
                <label class="radio">
                  <radio value="1" :checked="value==1"/>是
                </label>
                <label class="radio">
                  <radio value="0" :checked="value==0"/>否
                </label>
              </radio-group>
            </div>
          </li>
          <li>
            <div class="modal_shop_title">业务是否外包</div>
            <div class="mask_shop_bd">
              <radio-group class="radio-group" @change="changeStatu">
                <label class="radio">
                  <radio value="1" :checked="value==1"/>是
                </label>
                <label class="radio">
                  <radio value="0" :checked="value==0"/>否
                </label>
              </radio-group>
            </div>
          </li>
          <li>
            <div class="modal_shop_title">业务是否外包</div>
            <div class="mask_shop_bd">
              <radio-group class="radio-group" @change="changeStatu">
                <label class="radio">
                  <radio value="1" :checked="value==1"/>是
                </label>
                <label class="radio">
                  <radio value="0" :checked="value==0"/>否
                </label>
              </radio-group>
            </div>
          </li>
          <li>
            <div class="modal_shop_title">业务是否外包</div>
            <div class="mask_shop_bd">
              <radio-group class="radio-group" @change="changeStatu">
                <label class="radio">
                  <radio value="1" :checked="value==1"/>是
                </label>
                <label class="radio">
                  <radio value="0" :checked="value==0"/>否
                </label>
              </radio-group>
            </div>
          </li>
        </ul>
      </scroll-view>
      <div class="btnSub2 flex">
        <div class="mask_btn_cancle">取消</div>
        <div class="mask_btn_confirm">确定</div>
      </div>
    </div>
    <!--更多：弹层  end-->
    
  </div>
</template>
<script>
import { post, toLogin, getCurrentPageUrlWithArgs, trim } from "@/utils";
export default {
  data() {
    return {
      userId: "",
      token: "",
      curPage: "",
      type: "", //一级类型id
      filter: {}, //获取的对应的筛选的选项
      hasFilter: false,
      oneTypeList: [], //根据对应类型搜出对应的一级类
      oneTabIndex: 0, //一级类的tab
      oneId: "", //一级类id
      twoTypeList: [], //根据对应的一级类搜出对应的二级类
      twoTabIndex: 0, //二级类的tab
      twoId: "", //二级类id
      pageId: "", //获取对应发布筛选查询接口中的pageId
      tradelist: [], //根据一级行业搜查对应的行业
      tradeOneTab: "", //选择行业中的一级tab
      tradeTwoTab: "", //选择行业中的二级tab
      isShadeType: "", //类型弹窗
      isShade: false, //遮罩
      filterMenuIsShow: [false,false,false,false], //记录行业等每个点击时候的弹窗转态
      PriceShade: false, //价格弹窗
      tabFilterIndex:"",   //筛选行业等menu的active
      selectOneTabIndex:"",  //行业筛选中弹窗只有一个选择的时候
      MinPrice:"",   //最低价，价格弹窗的时候
      MaxPrice:"",  //最高价，价格弹窗的时候
      inputMinPrice:"",  //价格弹窗中输入的最低价
      inputMaxPrice:"", //价格弹窗中输入的最高价
      minNum:"",  //最小面积
      maxNum:"",  //最大面积
      page:1,
      pageSize:10,
      cityCode:"",  //城市code
      cityName:"",  //城市名称
      pramas: "",
      ShowCenter: false, //中间一级遮罩层
      list: [
        "不限",
        "招商会",
        "发布会",
        "发布会",
        "发布会",
        "发布会",
        "发布会",
        "发布会",
        "发布会",
        "发布会",
        "招商会",
        "发布会"
      ], //中间弹层列表
      ShowSecond: false, //二级联动
      ShowSecondRight: false, //二级联动右侧
      showMoreEquip: false, //设备短租模板
      showMoreShop: false //更多办公室-设备
    };
  },
  components:{
  },
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.cityName = wx.getStorageSync("cityName");
    this.cityCode = wx.getStorageSync("cityCode");
    if (
      this.$root.$mp.query.type !== "undefined" &&
      this.$root.$mp.query.type
    ) {
      this.type = this.$root.$mp.query.type;
      this.getSubMenu();
    }
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "拼租"
      });
    },
    toDetail() {
      wx.navigateTo({ url: "/pages/rent/storeDetail/main" });
    },
    valPriceShade(){  //如果有价格弹窗的时候，要在点击确认的时候，先判断输入的最高价有没有高于最低价，并且大于0
       let maxPrice = trim(this.inputMaxPrice);
       let minPrice = trim(this.inputMinPrice);
       console.log("进来了整个函数")
       if(maxPrice !=="" &&  minPrice !==""){
         if(maxPrice <= minPrice){
            wx.showToast({
              title: '输入的最高价需高于最低价',
              icon: 'none',
              duration: 1500
            })
            return false;
         }else{
           this.MinPrice = minPrice;   //最低价，价格弹窗的时候
           this.MaxPrice = maxPrice;  //最高价，价格弹窗的时候
         }
       }
      return true;
    },
    getSubMenu() {
      //获取一级类型
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
          }
        }
      });
    },
    getSubTwoMenu() {
      //获取二级类型
      let that = this;
      post("Goods/GetTypeL2", {
        TypeId: that.oneId
      }).then(res => {
        if (res.code === 0 && res.data.length > 0) {
          that.twoTypeList = res.data;
          that.pageId = res.data[0].PageId;
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
          Code:that.cityCode
        },
        that.curPage
      ).then(res => {
        if (res.code === 0 && Object.keys(res.data).length > 0) {
          let json = {
            one: {},
            more: {}
          };
          for (let key in res.data) {
            if (
              key == "GladBuyArea" ||
              key == "GladBuyerTrade" ||
              key == "PropertyPrice" 
            ) {
              
                res.data[key] = Object.assign(res.data[key],{'selected':false });
                json.one = Object.assign(json.one, { [key]: res.data[key]});
              
              
            } else {
              json.more = Object.assign(json.more, { [key]: res.data[key] });
            }
          }
          that.filter = json;
          console.log(that.filter);
          // that.filterMenuIsShow = [];
          // for (let i = 0; i < Object.keys(that.filter.one).length; i++) {
          //   that.filterMenuIsShow.push(false);
          // }
          that.hasFilter = true;
        }
      });
    },
    getQueryRentList(keyWords){  //获取发布列表
      let that = this;
      post("Goods/QueryRentList",{
        UserId:that.userId,
        Token:that.token,
        BrandId:that.type,
        Code:that.cityCode,
        TypeId:that.pageId,
        Page:that.page,
        PageSize:that.pageSize,
        MinNum:that.minNum,
        MinPrice:that.MinPrice,
        MaxPrice:that.MaxPrice,
        KeyWords:keyWords

      },that.curPage).then(res => {
       
      })

    },
    getTrade(typeIndex, index, id) {
      //点击一级行业查出对应的二级行业
      if (typeIndex == 1) {
        this.tradelist = [];
        this.tradeTwoTab = "";
        this.tradeOneTab = index;
        this.filter.one.GladBuyerTrade.Value.forEach(item => {
          if (item.Id == id) {
            this.tradelist = item.Child;
          }
        });
      }
      if (typeIndex == 2) {
        this.tradeTwoTab = index;
        this.getQueryRentList();
      }
    },
    shiftOneType(index,id){  //切换一级类
      this.oneTabIndex = index;
      this.oneId = id;
      this.filter = {}; //获取的对应的筛选的选项
      this.hasFilter =false;
      this.twoTypeList = [];
      this.tradelist= []; //根据一级行业搜查对应的行业
      this.tradeOneTab = ""; //选择行业中的一级tab
      this.tradeTwoTab = ""; //选择行业中的二级tab
      this.isShadeType = ""; //类型弹窗
      this.isShade = false; //遮罩
      this.filterMenuIsShow = []; //记录行业等每个点击时候的弹窗转态
      this.PriceShade = false; //价格弹窗
      this.tabFilterIndex ="";   
      this.getSubTwoMenu();
    },
    shiftTwoType(index, pageId) {
      //切换二级类
      this.pageId = pageId;
      this.filter = {};
      this.hasFilter = false;
      this.twoTabIndex = index;
      this.GetFilterQuery();
    },
    filterShade(key, index) {
      //点击筛选menu（行业、地区等）
      //清除对应弹窗
      console.log("键值：" + key + "  index:" + index);
      console.log("index:" + index);
      this.$set(this.filter.one[key], "selected", !this.filter.one[key].selected);
      //  this.filter = Object.assign({},this.filter,{
      //    [key]:this.filter.one[key]
      //  });
       
      // this.$set(this.filter.one[key], "selected", !this.filter.one[key].selected);
      // this.$forceUpdate();
      // this.filter.one = Object.assign(this.filter.one);
      console.log(this.filter.one[key]);
      for(let key2 in this.filter.one){
        if(key !== key2){
          // this.$set(this.filter.one[key2], "selected", false);
         // this.filter.one[key2] = Object.assign(this.filter.one[key2],"selected",false);
          this.$set(this.filter.one[key2], "selected", false);
          // this.filter = Object.assign({},this.filter,{
          //   [key2]:this.filter.one[key2]
          // });
        }
      }
      console.log(this.filter.one);
      // console.log(this.filter.one[key].selected);
      // for (let i = 0; i < this.filterMenuIsShow.length; i++) {
      //   if (i === index && !this.filterMenuIsShow[i]) {
      //     this.$set(this.filterMenuIsShow, i, true);
      //   } else {
      //     this.$set(this.filterMenuIsShow, i, false);
      //   }
      // }
      if (this.filter.one[key].selected) {
        this.isShade = true;
        this.isShadeType = key;
      } else {
        this.isShade = false;
        this.isShadeType = "";
        
      }
      // if (key == "GladBuyerTrade" && this.filterMenuIsShow[index]) {
      //   //显示行业弹窗
      //   console.log("dfsfsdfsdfsdfsdf");
      //   this.tradeShade = true;
      // } else {
      //   this.tradeShade = false;
      // }
      // if (key == "PropertyPrice" && this.filterMenuIsShow[index]) {  //显示价格的
      //   this.PriceShade = true;
      // } else {
      //   this.PriceShade = false;
      // }
    },
    moreFilter(){  //点击更多的筛选
    console.log("gengduo")
     this.isShadeType = 'more';
     console.log(this.isShadeType);
    },
    selectOneTab(index,key,item){  //下拉只有一个选项的时候的操作
      this.selectOneTabIndex = index;
      if(this.isShadeType =='PropertyPrice'){
        this.MinPrice = item.MinPrice;
        this.MaxPrice = item.MinPrice;
      }else{
        this.isShadeType = '';
        this.isShade = false;  //在这里开始筛选数据
        this.$set(this.filter.one[key], "selected", false);
        console.log(this.filter.one[key]);
      }
    },
    priceFocus(){  //价格弹窗中最低价格或者最高价格获取到聚焦之后，价格选项去掉
      if(this.isShadeType =='PropertyPrice'){
        this.selectOneTabIndex = "";
      }
    },
    btnFilterPrice(){  //点击了价格弹窗中的确定的时候，才开始搜出来
      if(this.valPriceShade()){  //开始筛选
        
      }
    }
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
  &.scroll_price{
    
  }
}
.modal_mask {
  bottom: inherit !important;
  height: inherit !important;
}
.scroll_price_item{
  margin-top:0;
  position: relative;
  padding-top:20rpx;
  padding-bottom: 40rpx;
  &::before{
    position: absolute;
    content: "";
    left:30rpx;
    right:30rpx;
    top:0;
    height: 1px;
    background:#f2f2f2;
  }
}
.modal_shop_title{
  font-weight: normal !important;
}
.border__tipsList span{
  border-color:#e5e5e5;
  color:#666;
  padding:4rpx 20rpx;
  font-size: 28rpx;
  border-radius: 6rpx;
  margin-right: 40rpx;
}
.ipt__selectDate{
  border:1px solid #e5e5e5;
  border-radius: 10rpx;
  .weui-input{
    line-height: 70rpx;
    height: 70rpx;
  }
}
.modal_mask_shop li{
  margin-bottom: 40rpx;
  margin-top:0;
}
</style>