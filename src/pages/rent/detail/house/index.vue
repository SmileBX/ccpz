<template>
  <div class="storeDetail">
    <div class="section pb20">
      <div class="banner" @click="$emit('previewImg',bannerIndex-1)">
        <swiper class="swiper" circular @change="bannerChange">
          <block v-for="(item,index) in data.PicList.Value" :key="index" >
            <swiper-item>
              <img :src="item.PicUrl" style="width:100%;" alt mode="aspectFill">
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
        <p class="msgList" v-if="FirstTags&&FirstTags.length>0">
          <span class="msgItem" v-for="(item,index) in FirstTags" :key="index">{{item}}</span>
          
        </p>
        <p class="tipsList" v-if="data.ServiceName&&data.ServiceName.Value.length>0">
          <span v-for="(item,index) in data.ServiceName.Value" :key="index">{{item}}</span>
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
              <div class="weui-cell__hd mr12">{{item.Text}}</div>
              <div class="weui-cell__bd f26">{{item.Value}}</div>
            </div>
          </div>
        </div>
        <!-- 商铺详情的  end -->
        <!-- 公司简介 -->
        <div class="about" v-if="false">
          <div class="item" v-if="data.Synopsis">
            <h3 class="title label">{{data.Synopsis.Text}}</h3>
            <div class="con">{{data.Synopsis.Value}}</div>
          </div>
          <div class="item" v-if="data.PlanBuyDate">
            <h3 class="title label">{{data.PlanBuyDate.Text}}</h3>
            <div class="con">{{data.PlanBuyDate.Value}}</div>
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
    <!-- 设施/配置 -->
    <div class="section pd15" v-if="data.ServiceName&&data.ServiceName.Value.length>0">
      <h3 class="title detail__title">{{data.ServiceName.Text}}</h3>
      <p class="tipsList border__tipsList">
        <span v-for="(item,index) in data.ServiceName.Value" :key="index">{{item}}</span>
      </p>
    </div>
    <!-- 个人主页不同的样式 -->
    <div class="section pd15" v-if="data.ShopInfo">
      <h3 class="title detail__title">个人主页</h3>
      <div class="perInfo flex level__perInfo flexAlignCenter">
        <img :src="data.ShopInfo.Value.Avatar.Value" class="tx" alt @click="$emit('goUserCenter')">
        <div class="info flex1">
          <p class="name">{{data.ShopInfo.Value.Name.Value}}</p>
          <div class="flex serviceTime">
            <p class="serviceTime">{{data.ShopInfo.Value.Job.Value}}</p>
            <div v-if="data.ShopInfo.Value.Job.Value&&data.ShopInfo.Value.WorkLife.Value">&nbsp;|&nbsp;</div>
            <p class="serviceTime">{{data.ShopInfo.Value.WorkLife.Value}}</p>
          </div>
        </div>
        <!-- <img src="/static/images/icons/con_tel.jpg" class="icon_tel" alt> -->
      </div>
    </div>
    <!-- 个人主页不同的样式  end -->
    <!-- 简介 -->
    <div class="section" v-if="data.Synopsis">
      <div class="locationBox pd15">
        <h3 class="title detail__title">{{data.Synopsis.Text}}</h3>
        <div class="con" v-html="data.Synopsis.Value"></div>
      </div>
    </div>
    <!-- 简介 end -->
    <!-- 亮点 -->
    <div class="section" v-if="data.ContentDetail">
      <div class="locationBox pd15">
        <h3 class="title detail__title">{{data.ContentDetail.Text}}</h3>
        <div class="con" v-html="data.ContentDetail.Value"></div>
      </div>
    </div>
    <!-- 亮点 end -->
    <!-- 拼租条件  end -->
    <div class="section" v-if="data.CompanyAddr.Value">
      <div class="locationBox pd15">
        <h3 class="title detail__title">地理位置</h3>
        <div class="flex flexAlignCenter">
          <div class="flex1">
            <p class="address" style="font-size:28rpx">{{data.CompanyAddr.Value}}</p>
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
      // 面积、地区、等tag
      FirstTags: [],
      // 属性
      attrArr: [],
      bannerIndex:1,
    };
  },
  onLoad() {
    console.log("data", this.data);
    this.onFirstTags();
    this.onAttrArr();
  },
  methods: {
    // 面积、地区、等tag
    onFirstTags() {
      const data = this.data;
      this.FirstTags = [];
      const FirstTags = [];
      data["PlanBuyArea"] && FirstTags.push(data["PlanBuyArea"].Value);
      data["NeedApartment"] && FirstTags.push(data["NeedApartment"].Value);
      data["GladBuyArea"] && FirstTags.push(data["GladBuyArea"].Value);
      this.FirstTags = FirstTags;
      console.log(this.FirstTags, "this.FirstTags");
    },

    // 属性
    onAttrArr() {
      const data = this.data;
      const attrArr = [];
      // 类型
      data["PropertyType"] && attrArr.push(data["PropertyType"]);
      // 性质
      data["PropertySort"] && attrArr.push(data["PropertySort"]);
      // 注册
      if (data["IsRegArea"] && data["IsRegArea"].Value) {
        const obj = {
          Text: "注册",
          Value: data["IsRegArea"].Value ? "是" : "否"
        };
        attrArr.push(obj);
      }
      // 楼层
      data["NeedFloor"] && attrArr.push(data["NeedFloor"]);
      // 面宽
      data["NeedFaceWidth"] && attrArr.push(data["NeedFaceWidth"]);
      // 进深
      data["NeedFloorDepth"] && attrArr.push(data["NeedFloorDepth"]);
      // 层高
      data["NeedFloorHeight"] && attrArr.push(data["NeedFloorHeight"]);
      // 经营行业
      data["GladBuyerTrade"] && attrArr.push(data["GladBuyerTrade"]);
      // 经营状态
      data["RunStatus"] && attrArr.push(data["RunStatus"]);
      // 装修
      if (data["IsTrim"] && data["IsTrim"].Value) {
        const obj = {
          Text: "装修",
          Value: data["IsTrim"].Value ? "是" : "否"
        };
        attrArr.push(obj);
      }
      // 分割
      if (data["IsSubPack"] && data["IsSubPack"].Value) {
        const obj = {
          Text: "分割",
          Value: data["IsSubPack"].Value ? "是" : "否"
        };
        attrArr.push(obj);
      }
      // 付款方式
      data["PayType"] && attrArr.push(data["PayType"]);
      // 起租期限
      data["PlanRentDate"] && attrArr.push(data["PlanRentDate"]);
      // 考虑容纳工位数
      data["NeedStation"] && attrArr.push(data["NeedStation"]);
      // 户型
      data["NeedApartment"] && attrArr.push(data["NeedApartment"]);

      // 接听时间段
      data["RentTime"] && attrArr.push(data["RentTime"]);
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