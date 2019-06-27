<template>
  <div class="pageContent">
    <div class="dataHtml" v-if="hasData">
      <div v-html="data.Content"></div>
    </div>
  </div>
</template>
<script>
import { post, toLogin, getCurrentPageUrlWithArgs, trim } from "@/utils";
export default {
  onLoad() {
    
  },
  onShow() {
    if (this.$root.$mp.query.type !== "" && this.$root.$mp.query.type) {
      this.type = this.$root.$mp.query.type;
    } else {
      this.type = 1;
    }
    this.setBarTitle();
    if (this.type == 1) {
      this.AuthServiceTreat();
    } else {
      if (this.$root.$mp.query.id !== "" && this.$root.$mp.query.id) {
        this.id = this.$root.$mp.query.id;
        this.BannerHits();
      }
    }
  },
  data() {
    return {
      data: {},
      hasData: false,
      id: "", //首页广告位跳转过来的
      type: "", //1:认证协议；2：首页广告位跳转过来的
      hasBannerData: false,
      bannerData: {}
    };
  },
  methods: {
    setBarTitle() {
      let tit = "";
      if (this.type == 1) {
        tit = "认证服务协议";
      } else {
        tit = "成成拼租";
      }
      wx.setNavigationBarTitle({
        title: tit
      });
    },
    AuthServiceTreat() {
      //认证服务协议
      let that = this;
      post("About/AuthServiceTreat", {}).then(res => {
        if (res.code === 0) {
          that.data = res.data;
          that.hasData = true;
        }
      });
    },
    BannerHits() {
      //首页广告位跳转过来的详情
      let that = this;
      post("Banner/BannerHits", {
        Id: that.id
      }).then(res => {
        if (res.code === 0) {
          that.bannerData = res.data;
          that.hasBannerData = true;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.dataHtml {
  font-size: 30rpx;
  padding: 30rpx;
}
</style>
