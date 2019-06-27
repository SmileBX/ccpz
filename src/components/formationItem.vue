
<template>
  <div class="teamList">
    <!-- <div class="item" v-for="(item,index) in list" :key="index" @click="toDetail(item.Id)">
    <div class="outside">
      <div class="pictrueAll">
        <div class="pictrue img">
          <img :src="item.PicNo" alt>
        </div>
      </div>
      <div class="txtBox">
        <p class="title ellipsis">
          <span class="typeName" v-if="item.GladBuyerTrade !==''">{{item.GladBuyerTrade}}</span>
          {{item.Title}}
        </p>
        <p class="priceArea">
          <span class="price">{{item.PropertyPrice}} 元/月</span>
        </p>
        <p class="msgList" v-if="item.FirstTags.length>0">
          <span class="msgItem" v-for="(item2,index2) in item.FirstTags" :key="index2">{{item2}}</span>
        </p>
        <p class="tipsList" v-if="item.SecondTags.length>0">
          <span v-for="(item3,index3) in item.SecondTags" :key="index3" v-if="index3<3">{{item3}}</span>
        </p>
      </div>
    </div>
    </div>-->

    <!-- ------------------------------- -->
    <div class="legalInfo flex" v-for="(item,index) in list" :key="index" @click="toDetail(item.Id)">
      <!-- 组建圈子才有的运动按钮 -->
      <span class="motion" v-if="item.RingType">{{item.RingType}}</span>
      <img :src="item.Headimgurl" class="tx" alt>
      <div class="info flex1">
        <div style="margin-bottom:16rpx;">
          <span class="name">{{item.NickName}}</span>
          <img src="/static/images/icons/v.jpg" class="icon_attestation" alt v-if="item.IsAUT*1">
          <span class="lookAttestation">2小时前活跃</span>
        </div>
        <p class="msgList">
          <span class="msgItem">{{item.LegalPerson}}</span>
          <span class="msgItem">{{item.Company}}</span>
          <span class="attestationStatus" v-if="item.CompanyIsAUT">
            <span class="icon-gou"></span> 已认证
          </span>
        </p>
        <p class="msgList">
          <span class="msgItem" v-if="item.Founder">{{item.Founder}}</span>
          <span class="msgItem">投资{{item.BuyBudget}}万</span>
          <span class="msgItem">{{item.GladBuyArea}}</span>
        </p>
        <p class="slogan">{{item.Title}}</p>
        <div class="tipsList border__tipsList flex1 bg_grey" v-if="item.NeedJob">
          <span v-for="(tab,tabIndex) in item.NeedJob" :key="tabIndex">{{tab}}</span>
          <!-- <span>设计</span>
          <span>文员</span>
          <span>销售</span> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 拼租列表
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  mounted() {
    console.log("列表item", this.list);
  },
  methods: {
    toDetail(id) {
      console.log("列表item", this.list);
      // return false;
      wx.navigateTo({ url: `/pages/rent/detail/main?id=${id}&type=22` });
    }
  }
};
</script>
<style scoped lang="scss">
.legalInfo{
  border-bottom:20rpx #f5f5f5 solid;
  .tx{
    border-radius:50%;
  }
}
</style>
