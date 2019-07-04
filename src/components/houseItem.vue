
<template>
<div>
  <div class="item" v-for="(item,index) in list" :key="index" @click="toDetail(item.Id)">
    <div class="outside">
      <div class="pictrueAll">
        <div class="pictrue img">
          <img :src="item.PicNo" alt mode="aspectFill">
        </div>
      </div>
      <div class="txtBox">
        <p class="title ellipsis">
          <!-- <span class="typeName" v-if="item.GladBuyerTrade !==''">{{item.GladBuyerTrade}}</span> -->
          {{item.Title}}
        </p>
        <p class="priceArea">
          <!-- <span class="price">￥{{item.PropertyPrice}}</span> -->
          <span class="price">{{item.PropertyPrice}} 元/月</span>
        </p>
        <p class="msgList" >
          <span class="msgItem" v-if="item.PlanBuyArea">{{item.PlanBuyArea}}</span>
          <span class="msgItem" v-if="item.GladBuyArea">{{item.GladBuyArea}}</span>
        </p>
        <p class="tipsList" v-if="item.ServiceName&&item.ServiceName.length>0">
          <span v-for="(item3,index3) in item.ServiceName" :key="index3" v-show="index3<5">{{item3}}</span>
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
	onLoad(){
    console.log('列表item',this.list)
    this.list.map(item=>{
      item.ServiceName=item.ServiceName.split(',')
    })
	},
  methods: {
    toDetail(id) {
		console.log('列表item',this.list)
		// return false;
      wx.navigateTo({ url: `/pages/rent/detail/main?id=${id}&type=24`});
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
