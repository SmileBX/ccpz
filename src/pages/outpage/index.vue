<template>
  <div class="pageContent">
      <web-view :src="url"></web-view>
  </div>
</template>
<script>
import { post, toLogin, getCurrentPageUrlWithArgs, trim } from "@/utils";
export default {
  onLoad() {
    
  },
  onShow() {
      this.url = this.$root.$mp.query.url;console.log(this.url)
  },
  data() {
    return {
      url:""
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "成成拼租"
      });
    },
  }
};
</script>
<style lang="scss" scoped>
</style>
