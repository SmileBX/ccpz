<template>
  <div class="pageContent">
    
  </div>
</template>
<script>
export default {
  onShow() {
    this.setBarTitle();
  },
  data() {
    return {
      type: ""
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "会员管理"
      });
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
