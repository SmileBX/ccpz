<template>
  <div class="storeDetail">
    <div class="section pb20">
      <div class="swiper">
        <img src="/static/images/of/storeDetail.jpg" style="width:100%;height:400rpx;" alt>
      </div>
      <div class="shortInfo">
        <h2 class="name">{{data.Title.Value}}</h2>
        <p class="priceArea">
          <span class="price">{{data.PropertyPrice.Value}}</span>元/月
        </p>
        <p class="msgList" v-if="data.FirstTags&&data.FirstTags.Value.length>0">
          <span class="msgItem" v-for="(item,index) in data.FirstTags.Value" :key="index">{{item}}</span>
          <!-- <span class="msgItem">
              100m
              <span class="sup">2</span>
            </span>
            <span class="msgItem">3卡2独</span>
          <span class="msgItem">罗湖</span>-->
        </p>
        <p class="tipsList" v-if="data.SecondTags&&data.SecondTags.Value.length>0">
          <span v-for="(item,index) in data.SecondTags.Value" :key="index">{{item}}</span>
          <!-- <span>可使用公司资质</span>
          <span>可挂牌</span>-->
        </p>
        <div class="flex">
          <!-- 公司行业 -->
          <p class="purpose" v-if="data.CompanyTrade">
            <span class="label">{{data.CompanyTrade.Text}}</span>
            <span>{{data.CompanyTrade.Value}}</span>
          </p>
          <!-- 意向拼购方行业 -->
          <p class="purpose" v-if="data.GladBuyerTrade">
            <span class="label">{{data.GladBuyerTrade.Text}}</span>
            <span>{{data.GladBuyerTrade.Value}}</span>
          </p>
        </div>
      </div>
      <!-- 公司简介 -->
      <div class="comAbout pt15">
        <!-- 商铺详情的 -->
        <div class="weui-cells noBorder__weui-cells column__weui-cells mt0">
          <div class="group flex">
            <!-- 公司名称 -->
            <div class="weui-cell flex1" v-if="data.Company">
              <div class="weui-cell__hd">{{data.Company.Text}}</div>
              <div class="weui-cell__bd">{{data.Company.Value}}</div>
            </div>
          </div>
          <div class="group flex">
            <!-- 成立时间 -->
            <div class="weui-cell flex1" v-if="data.SetUpDate">
              <div class="weui-cell__hd">{{data.SetUpDate.Text}}</div>
              <div class="weui-cell__bd">{{data.SetUpDate.Value}}</div>
            </div>
            <!-- 物业形式 -->
            <div class="weui-cell flex1" v-if="data.PropertySort">
              <div class="weui-cell__hd">{{data.PropertySort.Text}}</div>
              <div class="weui-cell__bd">{{data.PropertySort.Value}}</div>
            </div>
          </div>
          <div class="group flex">
            <!-- 计划购买面积 -->
            <div class="weui-cell flex1" v-if="data.PlanBuyArea">
              <div class="weui-cell__hd">{{data.PlanBuyArea.Text}}</div>
              <div class="weui-cell__bd">
                <span>
                  {{data.PlanBuyArea.Value}}
                  <!-- <span class="sup">2</span> -->
                </span>
              </div>
            </div>
            <!-- 购买预算 -->
            <div class="weui-cell flex1" v-if="data.BuyBudget">
              <div class="weui-cell__hd">{{data.BuyBudget.Text}}</div>
              <div class="weui-cell__bd">{{data.BuyBudget.Value}}</div>
            </div>
          </div>
          <div class="group flex">
            <div class="weui-cell flex1" v-if="data.SetUpDate">
              <!-- 区间价格 -->
              <!-- 成立时间 -->
              <div class="weui-cell__hd">{{data.SetUpDate.Text}}</div>
              <div class="weui-cell__bd">{{data.SetUpDate.Value}}</div>
            </div>
            <div class="weui-cell flex1" v-if="data.IsTrim">
              <div class="weui-cell__hd">{{data.IsTrim.Text}}</div>
              <div class="weui-cell__bd">{{data.IsTrim.Value}}</div>
            </div>
          </div>
          <div class="group flex">
            <div class="weui-cell flex1" v-if="data.PlanBuyDate">
              <div class="weui-cell__hd">{{data.PlanBuyDate.Text}}</div>
              <div class="weui-cell__bd">{{data.PlanBuyDate.Value}}</div>
            </div>
          </div>
        </div>
        <!-- 商铺详情的  end -->
        <!-- 设备详情的 -->
        <div
          class="weui-cells noBorder__weui-cells column__weui-cells mt0"
          style="display:none"
          v-if="false"
        >
          <div class="group flex">
            <div class="weui-cell flex1">
              <div class="weui-cell__hd">{{data.SetUpDate.Text}}</div>
              <div class="weui-cell__bd">{{data.SetUpDate.Value}}</div>
            </div>
          </div>
          <div class="group flex">
            <div class="weui-cell flex1">
              <div class="weui-cell__hd">{{data.SetUpDate.Text}}</div>
              <div class="weui-cell__bd">{{data.SetUpDate.Value}}</div>
            </div>
            <div class="weui-cell flex1">
              <div class="weui-cell__hd">{{data.SetUpDate.Text}}</div>
              <div class="weui-cell__bd">{{data.SetUpDate.Value}}</div>
            </div>
          </div>
          <div class="group flex">
            <div class="weui-cell flex1">
              <div class="weui-cell__hd">{{data.SetUpDate.Text}}</div>
              <div class="weui-cell__bd">{{data.SetUpDate.Value}}</div>
            </div>
            <div class="weui-cell flex1">
              <div class="weui-cell__hd">{{data.SetUpDate.Text}}</div>
              <div class="weui-cell__bd">{{data.SetUpDate.Value}}</div>
            </div>
          </div>
          <div class="group flex">
            <div class="weui-cell flex1">
              <div class="weui-cell__hd">{{data.SetUpDate.Text}}</div>
              <div class="weui-cell__bd">{{data.SetUpDate.Value}}</div>
            </div>
            <div class="weui-cell flex1">
              <div class="weui-cell__hd">{{data.SetUpDate.Text}}</div>
              <div class="weui-cell__bd">{{data.SetUpDate.Value}}</div>
            </div>
          </div>
          <div class="group flex">
            <div class="weui-cell flex1">
              <div class="weui-cell__hd">设备使用区域</div>
              <div class="weui-cell__bd">龙华</div>
            </div>
            <div class="weui-cell flex1">
              <div class="weui-cell__hd">计划购买日期</div>
              <div class="weui-cell__bd">2019.05.15</div>
            </div>
          </div>
        </div>
        <!-- 设备详情的  end -->
        <!-- 公司简介 -->
        <div class="about">
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
        <img :src="data.ShopInfo.Value.Avatar.Value" class="tx" alt>
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
      // 公司信息
      CompanyInfo: []
      };
  },
  onLoad() {
    console.log("data", this.data);
  },
  methods: {
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
      min-width: 345rpx;
    }
  }
}
</style>