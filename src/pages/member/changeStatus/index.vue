<template>
  <div class="pageContent bg_fff">
    <div class="changeStatus">
      <img src="/static/images/icons/success.jpg" class="icon-status" alt="">
      <div class="txtBox center">
         <h2 class="statusTxt successTxt">兑换成功</h2>
         <p class="msg">恭喜您成功兑换&nbsp;会{{changeName}}</p>
      </div>
      <div class="weui-btn btn-active fill">完成</div>
    </div>
  </div>
</template>
<script>
export default {
  onLoad() {
    this.setBarTitle();
  },
  data(){
    return {
      changeName:"",//兑换的种类
    }
  },
  onShow(){
    this.changeName = this.$root.$mp.query.changeName
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "服务卡兑换"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.pageContent{
  height: 100vh;
  overflow: hidden;
}
</style>
