
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
          <p class="msgList" v-if="item.FirstTagss&&item.FirstTagss.length>0">
            <span class="msgItem" v-for="(item2,index2) in item.FirstTagss" :key="index2">{{item2}}</span>
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
      default: () => []
    }
  },
  data() {
    return {};
  },
  onLoad() {
    console.log("列表item", this.list);
          // *********************拼租
          this.list.map(item => {
            if (item.FirstTags) {
              this.$set(item, "FirstTagss", item.FirstTags.split("|"));
            } else {
              this.$set(item, "FirstTagss", []);
            }
    console.log("列表item", item.FirstTagss);
            if (item.SecondTags) {
              this.$set(item, "SecondTags", item.SecondTags.split("|"));
            } else {
              this.$set(item, "SecondTags", []);
            }
    console.log("列表item", item.SecondTags);
          });
          // **************
  },
  methods: {
    toDetail(id) {
      console.log("列表id", id);
      // return false;
      wx.navigateTo({ url: `/pages/rent/detail/main?id=${id}&type=21`});
    }
  }
};
</script>
<style lang="sass" scoped>

</style>
