<template>
  <div class="storeDetail">
    <div class="section pb20">
      <div class="banner" @click="$emit('previewImg',bannerIndex-1)">
        <swiper class="swiper" circular @change="bannerChange">
          <block v-for="(item,index) in data.PicList.Value" :key="index" >
            <swiper-item>
              <img :src="item.PicUrl" style="width:100%;height:400rpx;" alt>
            </swiper-item>
          </block>
        </swiper>
        <div class="dot" v-if="data.PicList.Value.length>0">{{bannerIndex}}/{{data.PicList.Value.length}}</div>
      </div>
      <div class="shortInfo">
        <h2 class="name">{{data.Title.Value}}</h2>
        <p class="priceArea">
          <span class="price">{{data.PropertyPrice.Value}}</span>元/月
        </p>
        <p class="msgList" v-if="data.FirstTags&&data.FirstTags.Value.length>0">
          <span class="msgItem" v-for="(item,index) in data.FirstTags.Value" :key="index">{{item}}</span>
         
        </p>
        <p class="tipsList" v-if="data.SecondTags&&data.SecondTags.Value.length>0">
          <span v-for="(item,index) in data.SecondTags.Value" :key="index">{{item}}</span>
          <!-- <span>可使用公司资质</span>
          <span>可挂牌</span>-->
        </p>
      </div>
      <!-- 公司简介 -->
      <div class="comAbout pt15">
        <!-- 商铺详情的 -->
        <div class="weui-cells noBorder__weui-cells column__weui-cells mt0">
          <div class="group flex">
            <!-- 公司名称 -->
            <div class="weui-cell group-item" 
              v-for="(item,index) in attrArr" :key="index" v-show="item.Value">
              <div class="weui-cell__hd">{{item.Text}}</div>
              <div class="weui-cell__bd">{{item.Value}}</div>
            </div>
          </div>
        </div>
        <!-- 商铺详情的  end -->
        <div class="about">
           <!-- 公司简介 -->
          <div class="item" v-if="data.Synopsis&&data.Synopsis.Value">
            <h3 class="title label">{{data.Synopsis.Text}}</h3>
            <div class="con">{{data.Synopsis.Value}}</div>
          </div>
          <!-- 公司理念 -->
          <div class="item" v-if="data.CompanyCulture&&data.CompanyCulture.Value">
            <h3 class="title label">{{data.CompanyCulture.Text}}</h3>
            <div class="con">{{data.CompanyCulture.Value}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 公司信息 -->
    <div class="section pt10 pb10" v-if="data.CompanyInfos&&data.CompanyInfo.Value.Id.Value">
      <div class="weui-cells noBorder__weui-cells column__weui-cells mt0">
        <div class="group flex flex-flow">
          <div
            class="weui-cell firm"
            v-for="(item,index) in data.CompanyInfos"
            :key="index"
            v-show="item.Value"
          >
            <div class="weui-cell__hd">{{item.Text}}</div>
            <div class="weui-cell__bd">{{item.Value}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 公司信息 end -->
    <!-- 拼租条件 -->
    <div class="section pd15" v-if="data.ServiceName">
      <h3 class="title detail__title">{{data.ServiceName.Text}}</h3>
      <p class="tipsList border__tipsList">
        <span v-for="(item,index) in data.ServiceName.Value" :key="index">{{item}}</span>
      </p>
    </div>
    <!-- 拼租条件  end -->
    <!-- 个人主页不同的样式 -->
    <div class="section pd15" v-if="data.ShopInfo">
      <h3 class="title detail__title">个人主页</h3>
      <div class="perInfo flex level__perInfo flexAlignCenter">
        <img :src="data.ShopInfo.Value.Avatar.Value" class="tx" alt @click="$emit('goUserCenter')">
        <div class="info flex1">
          <p class="name">{{data.ShopInfo.Value.Name.Value}}</p>
          <p class="serviceTime">{{data.ShopInfo.Value.Job.Value}}</p>
        </div>
        <!-- <img src="/static/images/icons/con_tel.jpg" class="icon_tel" alt> -->
      </div>
    </div>
    <!-- 个人主页不同的样式  end -->
    <!-- 办公室描述 -->
    <div class="section" v-if="data.ContentDetail">
      <div class="locationBox pd15">
        <h3 class="title detail__title">{{data.ContentDetail.Text}}</h3>
        <div class="con" v-html="data.ContentDetail.Value">
          <!-- <p>1、交通：距离地铁2号线科苑站约221米交通四通八达，畅通无阻;员工， 上下班在地理位置.上没有任何困扰</p>
            <p>2、装修：精装修、可分割</p>
            <p>3、管理费空调费: 27.5元/m</p>
          <p>4、家私：可商量带家私事宜</p>-->
        </div>
      </div>
    </div>
    <!-- 办公室描述 end -->
    <div class="section">
      <div class="locationBox pd15">
        <h3 class="title detail__title">地理位置</h3>
        <div class="flex flexAlignCenter">
          <div class="flex1">
            <p class="address">{{data.CompanyAddr.Value}}</p>
            <p class="space">{{data.CompanyDoorNum.Value}}</p>
          </div>
          <img src="/static/images/icons/map.jpg" class="map" alt @click="checkLocation">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import {post} from '@/utils/index'
// import {getAddressLocation} from '@/utils/location'
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      // 属性
      attrArr: [],
      bannerIndex:1,
      };
  },
  onLoad() {
    console.log("data", this.data);
    this.onAttrArr()
  },
  methods: {
    // 属性
    onAttrArr() {
      const data = this.data;
      const attrArr = [];
      // 公司名称
      data["Company"] && attrArr.push(data["Company"]);
      // 公司行业
      data["CompanyTrade"] && attrArr.push(data["CompanyTrade"]);
      // 意向拼购方行业
      data["GladBuyerTrade"] && attrArr.push(data["GladBuyerTrade"]);
      // 成立时间
      data["SetUpDate"] && attrArr.push(data["SetUpDate"]);
      // 注册
      data["IsRegArea"] && attrArr.push(data["IsRegArea"]);
      // if (data["IsRegArea"] && data["IsRegArea"].Value) {
      //   const obj = {
      //     Text: "注册",
      //     Value: data["IsRegArea"].Value ? "是" : "否"
      //   };
      //   attrArr.push(obj);
      // }
      // 本公司是否挂牌
      data["IsCompanyList"] && attrArr.push(data["IsCompanyList"]);
      // 是否装修
      data["IsTrim"] && attrArr.push(data["IsTrim"]);
      // 总面积
      data["AllArea"] && attrArr.push(data["AllArea"]);
      // 计划购买面积
      data["PlanBuyArea"] && attrArr.push(data["PlanBuyArea"]);
      // 购买预算
      data["BuyBudget"] && attrArr.push(data["BuyBudget"]);
      // 物业形式
      data["PropertySort"] && attrArr.push(data["PropertySort"]);
      // 物业类型
      data["PropertyType"] && attrArr.push(data["PropertyType"]);
      // 出租卡位
      data["NeedOfficeNum"] && attrArr.push(data["NeedOfficeNum"]);
      // 租赁到期时间
      data["PlanBuyDate"] && attrArr.push(data["PlanBuyDate"]);
      // 期限
      data["RentTimeLimit"] && attrArr.push(data["RentTimeLimit"]);
      // 价格区间
      data["PropertyPrice1"] && attrArr.push(data["PropertyPrice1"]);
      // 计划日期
      // data["PlanBuyDate"] && attrArr.push(data["PlanBuyDate"]);
      this.attrArr = attrArr;
      console.log(this.attrArr, "this.attrArr");
    },
    // 查看地理位置
    checkLocation() {
      this.$emit("checkLocation");
      // if(this.data.CompanyAddr){
      //   const address = (this.data.CompanyAddr.Value||'') + (this.data.CompanyDoorNum.Value||'')
      //   console.log(address,'要转换的地址')
      //   getAddressLocation(address).then(res=>{
      //     console.log(res,'转换后的地址')
      //     wx.openLocation({
      //       latitude:res.lat,
      //       longitude:res.lng
      //     })
      //   })
      // }
    },
    // banner切换时
    bannerChange(e){
      console.log(e.mp.detail.current,this.bannerIndex)
      this.bannerIndex = e.mp.detail.current +1
    }
  }
};
</script>
<style lang="scss" scoped>
.firm {
  width: 45%;
  padding: 0;
  margin-left: 20rpx;
  display: flex;
  align-items: center;
  line-height: 70rpx;
}
.flex-flow {
  display: flex;
  flex-flow: row wrap;
}
.comAbout {
  .group {
    .weui-cell {
      padding: 6rpx 0 6rpx 30rpx;
    }
  }
}
.group {
  flex-flow: row wrap;
  padding: 0;
  .group-item {
    flex: 1 0 auto;
    min-width: 300rpx;
  }
}
</style>