
<template>
<div>
  <div class="item" v-for="(item,index) in list" :key="index" @click="toDetail(item.Id)">
    <div class="outside">
      <div class="pictrueAll">
        <div class="pictrue img">
          <img :src="item.PicNo" alt>
        </div>
      </div>
      <div class="txtBox">
        <p class="title ellipsis">
          <span class="typeName" v-if="item.TypeName">{{item.TypeName}}</span>
          {{item.Title}}
        </p>
        <p class="priceArea">
          <!-- <span class="price">￥{{item.PropertyPrice}}</span> -->
          <span class="price">{{item.PropertyPrice}} 元</span>
        </p>
        <p class="msgList">
          <span class="msgItem" v-if="item.LegalPerson">{{item.LegalPerson}}</span>
          <span class="msgItem" v-if="item.Company">{{item.Company}}</span>
        </p>
        <p class="msgList" >
          <span class="msgItem" v-if="item.GladBuyerTrade">{{item.GladBuyerTrade}}</span>
          <span class="msgItem" v-if="item.GladBuyArea">{{item.GladBuyArea}}</span>
        </p>
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
      default: ()=>[]
    }
  },
	data() {
    return {

    }
  },
	mounted(){
		console.log('列表item',this.list)
	},
  methods: {
    toDetail(id) {
		console.log('列表item',this.list)
		// return false;
      wx.navigateTo({ url: `/pages/rent/detail/main?id=${id}&type=23`});
    }
  }
};
</script>
<style lang="scss" scoped>
.msgList{
  margin:15rpx 0;
}
</style>
