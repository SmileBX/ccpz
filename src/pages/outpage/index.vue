<template>
  <div class="pageContent">
      <web-view :src="url" v-if="url"></web-view>
  </div>
</template>
<script>
import { post, toLogin, getCurrentPageUrlWithArgs, trim } from "@/utils";
export default {
  data() {
    return {
      url:""
    };
  },
  onLoad() {
    this.url = this.$root.$mp.query.url;console.log(this.url)
  },
  onShow() {
      this.url = this.$root.$mp.query.url;console.log(this.url)
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
