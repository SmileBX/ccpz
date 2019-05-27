<template>
  <div class="pageContent bg_fff">
    <div class="LoginBox">
      <img src="/static/images/icons/loginPic.jpg" style="width:100%;" mode="widthFix" class="loginPic" alt="">
      <div class="ftBtn">
        <div class="inner">
          <div class="btns center">
            <div class="btn bg_3daf35">微信授权登陆</div>
            <div class="btn bg_ef8120">成成账号登陆</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  onLoad() {
  },
  data() {
    return {
      
    }
  },
  methods: {
    
    
  }
};
</script>
<style lang="scss" scoped>
.pageContent{
  height: 100vh;
  overflow: hidden;
}
.LoginBox{
  width: 472rpx;
  margin:0 auto;
  padding:100rpx 0;
}
.bg_3daf35{
  background: #3daf35;

}
.bg_ef8120{
  background: #ef8120;
}
.ftBtn{
  height: auto;
  padding-top:30rpx;
}
.ftBtn .btn{
  color:#fff;
  border-radius: 16rpx;
  margin-top:30rpx;
}
</style>
