
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
          <span class="typeName" v-if="item.GladBuyerTrade !==''">{{item.GladBuyerTrade}}</span>
          {{item.Title}}
        </p>
        <p class="priceArea">
          <!-- <span class="price">￥{{item.PropertyPrice}}</span> -->
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
      wx.navigateTo({ url: "/pages/rent/pinzuDetail/main?id=" + id });
    }
  }
};
</script>
<style lang="sass" scoped>

</style>
