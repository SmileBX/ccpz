<template>
  <div class="mypopup" v-if="showPass">
        <div class="content">
            <div class="close_btn" @click="closePop">X</div>
            <div class="main">
                <div>请输入支付密码验证</div>
                <div class="pwipt">
                    <input type="password" @input="judgePassword" v-model="password" autofocus maxlength='6'>
                    <div class="border-right">
                        <span v-if="show1"></span>
                    </div>
                    <div class="border-right">
                        <span v-if="show2"></span>
                    </div>
                    <div class="border-right">
                        <span v-if="show3"></span>
                    </div>
                    <div class="border-right">
                        <span v-if="show4"></span>
                    </div>
                    <div class="border-right">
                        <span v-if="show5"></span>
                    </div>
                    <div>
                        <span v-if="show6"></span>
                    </div>
                </div>
                <div class="forgetpw" @click="findPass">忘记密码？</div>
            </div>
        </div>
      </div>
</template>
<script type="text/javascript">
const INDICATOR_INDURATION = 200;
const TITLE_HEIGHT = 30;

export default {
  // name: 'index-list',
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      }
    },
    hasSetStar:{
      type: Boolean,
      default: false
    },
    useLazyLoad: {
      type: Boolean,
      default: false
    }
  },
  // props:["playerList"],
  data() {
    return {
      password:"", //会员支付密码
      autofocus: true,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6:false,
    };
  },
  
  methods: {
    //关闭密码输入清空输入
    closePop: function() {
        this.password = '';
        this.judgePassword();
    },
    //设置支付密码
    findPass(){
      wx.navigateTo({url:"/pages/setpassword/main?url=orderpay"});
    },
    judgePassword: function() {
      console.log(this.password,this.password.length)
        if(this.password.length == 0) {
            this.show1 = false;this.show2 = false;this.show3 = false;this.show4 = false;this.show5 = false;this.show6 = false;
        }
        if(this.password.length == 1) {
            this.show1 = true;this.show2 = false;this.show3 = false;this.show4 = false;this.show5 = false;this.show6 = false;
        }
        if(this.password.length == 2) {
            this.show1 = true;this.show2 = true;this.show3 = false;this.show4 = false;this.show5 = false;this.show6 = false;
        }
        if(this.password.length == 3) {
            this.show1 = true;this.show2 = true;this.show3 = true;this.show4 = false;this.show5 = false;this.show6 = false;
        }
        if(this.password.length == 4) {
            this.show1 = true;this.show2 = true;this.show3 = true;this.show4 = true;this.show5 = false;this.show6 = false;
        }
        if(this.password.length == 5) {
            this.show1 = true;this.show2 = true;this.show3 = true;this.show4 = true;this.show5 = true;this.show6 = false;
        }
        if(this.password.length == 6) {
            this.show1 = true;this.show2 = true;this.show3 = true;this.show4 = true;this.show5 = true;this.show6 = true;
            console.log(this.show6)
            // 接口校验密码
            this.otherPay()
        }
    },
  },
  // destroyed() {
  //   clearTimeout(this.timer)
  //   clearTimeout(this.scrollTimer)
  // }
};
</script>

<style lang="scss" scoped>
.index-list {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  .index-list-wrap {
    // height: 100%;
    // overflow: auto;
    -webkit-overflow-scrolling: touch; //#issue-368550974
  }

  .index-group {
    padding-bottom: 20rpx;
  }

  .index-group-title {
    height: 60rpx;
    line-height: 60rpx;
    padding-left: 40rpx;
    font-size: 28rpx;
    color: #333;
    background: #f2f2f2;
  }

  .index-group-item {
    display: flex;
    align-items: center;
    padding: 20rpx 0 0 30rpx;
    list-style: none;
    .avatar {
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
    }

    .name {
      margin-left: 30rpx;
      color: #333;
      font-size: 28rpx;
    }
  }
  .index-group-item:after {
    position: absolute;
    content: "";
    height: 1px;
    width: 100%;
    background: #ececec;
    bottom: 0;
  }
  .index-nav {
    position: absolute;
    right: 15rpx;
    top: 42%;
    z-index: 100;
    width: 40rpx;
    padding: 30rpx 0;
    text-align: center;
    border-radius: 10;
    background: transparent;
    transform: translateY(-50%);

    .nav-item {
      padding: 5rpx;
      font-size: 22rpx;
      color: #333;
      list-style: none;

      &.active {
        color: #fff;
        width: 30rpx;
        height: 30rpx;
        border-radius: 50%;
        line-height: 30rpx;
        background: #ff9325;
      }
    }
  }

  .index-indicator {
    position: absolute;
    width: 100rpx;
    height: 100rpx;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 100rpx;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 35rpx;
    border-radius: 10rpx;
    pointer-events: none;
  }
}

.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.van-swipe-cell__left,
.van-swipe-cell__right {
  display: inline-block;
  // height: 100%;
  width: 130rpx;
  height: 120rpx;
  font-size: 28rpx;
  line-height: 120rpx;
  color: #fff;
  text-align: center;
  background-color: #f44;
  position: relative;
  vertical-align: top;
  .icon-star {
    width: 40rpx;
    height: 40rpx;
    position: absolute;
    top: 50%;

    left: 0;
    right: 0;
    margin: 0 auto;
    margin-top: -20rpx;
  }
}
.van-swipe-cell__right1 {
  background-color: #ff952e;
}
.index-group {
  padding-bottom: 0 !important;
}
.swipe-cell .index-group-item {
  padding: 0;
}
</style>
