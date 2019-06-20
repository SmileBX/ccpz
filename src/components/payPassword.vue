<template>
  <!-- 支付密码组件 -->
  <div class="payPasswordComponent flex-content" v-if="showStatus" @click.self="close">
    <input type="number" password 
    v-model="password" @input="editPaw" :focus="focusflag" maxlength="6">
    <div class="box">
      <div class="header">
        请输入支付密码
        <div class="close" @click="close">×</div>
      </div>

      <div class="bodys flex-content" @click="onFocusflag">
        <div class="boxItem flex-content" v-for="i in 6" :key="i">
          <div class="item" v-show="i<password.length"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// showStatus 显示状态
// @success  输入6位密码时触发，回调参数：密码
export default {
    props:{
        showStatus:{
            type:Boolean,
            default:false
        }
    },
  data() {
    return {
      focusflag:true,
      password:''
      };
  },
  onShow(){
    console.log(this.password,"_____")
    this.password='';
    this.focusflag = true;
  },
  mounted() {},
  methods: {
    // 获取焦点
    onFocusflag(){
      this.focusflag = false;
      this.focusflag = true;
    },
    // 关闭
    close(){
      this.$emit('update:showStatus',false)
    },
    // 输入密码
    editPaw(e){
      console.log(e.mp.detail)
      console.log(this.password)
      if(this.password.length===6){
        this.$emit('success',this.password)
      }
    }
  }
};
</script>
<style lang="scss" scoped>
// 支付密码组件
.flex-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.payPasswordComponent {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  overflow:hidden;
  input {
    // display: none;
		// opacity: 0; 
		// visibility: hidden;
		position:absolute;
		z-index:-99999;
    top:0;
    left:-800rpx;
  }
  .box {
    width: 85%;
    background: #fff;
    border-radius: 10rpx;
  }
  .header {
    font-size: 35rpx;
    font-weight: 600;
    line-height: 100rpx;
    text-align: center;
    position: relative;
    border-bottom: 1rpx #e8e8e8 solid;
    .close {
      position: absolute;
      font-weight: 400;
      right: 10rpx;
      top: -20rpx;
      font-size: 50rpx;
      color: #999;
    }
  }
  .bodys {
    height: 200rpx;
    position: relative;
    .boxItem {
      width: 80rpx;
      height: 80rpx;
      border-left: 1rpx #c8c8c8 solid;
      border-top: 1rpx #999 solid;
      border-bottom: 1rpx #999 solid;
      &:first-child {
        border-left: 1rpx #999 solid;
      }
      &:last-child {
        border-right: 1rpx #999 solid;
      }
      .item {
        width: 20rpx;
        height: 20rpx;
        border-radius: 50%;
        background: #000;
      }
    }
  }
}
</style>