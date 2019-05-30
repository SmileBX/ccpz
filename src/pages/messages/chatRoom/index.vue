<template>
  <div class="page borderTop">
    <!--聊天列表-->
    <div class="padwid">
        <div class="flex flexAlignCenter boxSize p2 justifyContentEnd">
            <div class="flex flexAlignEnd justifyContentEnd mrr2" style="width:75%;">
                <span class="fontColor">已读</span>
                <div class="tagmsg">
                    <p class="boxSize">你好，请问房子还在吗？</p>
                    <span class="sj rsj"></span>
                </div>
            </div>
            <div class="avatarbox mr0">
                <img src="/static/images/of/ava.png" alt="" class="avatar">
            </div>
        </div>
        <div class="flex flexAlignCenter boxSize p2 justifyContentStart" >
            <div class="avatarbox mr0">
                <img src="/static/images/of/ava.png" alt="" class="avatar">
            </div>
            <div class="flex flexAlignEnd mrl2" style="width:75%">
                <!-- <span class="fontColor">已读</span> -->
                <div class="tagmsg bg_fff">
                  <span class="sj lsj"></span>
                    <p class="boxSize" style="color:#1a1a1a">你好，请你好，请问房子还在吗？你好，请问房子还在吗？问房你好，请你好，请问房子还在吗？你好，请问房子还在吗？问房子还在吗？子还在吗？</p>
                </div>
            </div>
        </div>


    </div>
    <!--底部按钮 输入框 下拉按钮-->
    <div class="bottomicon">
        <!--常用语按钮-->
        <div class="borderTop usedMes" @click="getMessage">
            <span class="bg_fff">常用语</span>
        </div>
        <div class="inputbtn flex flexAlignCenter bg_fff ">
            <input type="text" placeholder="想对他说点什么呢？" class="flex1">
            <div class="flex flexAlignCenter">
                <img src="/static/images/icons/smile.jpg" alt="" class="logimg">
                <img src="/static/images/icons/add.jpg" alt="" class="logimg">
            </div>
        </div>
        <!--按钮组-->
        <div v-if="showBtn">
            <div v-if="isshow" class="icon_box flex">
              <div class="flex flexAlignCenter flexColumn">
                  <img src="/static/images/icons/photo.jpg" alt="" class="icon_put">
                  <p class="fontColor">拍照</p>
              </div>
              <div class="flex flexAlignCenter flexColumn">
                  <img src="/static/images/icons/albrem.jpg" alt="" class="icon_put">
                  <p class="fontColor">相册</p>
              </div>
              <div class="flex flexAlignCenter flexColumn">
                  <img src="/static/images/icons/location.jpg" alt="" class="icon_put">
                  <p class="fontColor">位置</p>
              </div>
            </div>
        </div>
        <!--常用语-->
        <div class="messagelist" v-if="showMessage">
            <!-- <p>你好？房子还在吗？</p>
            <p>你好？房子还在吗？</p>
            <p>你好？房子还在吗？</p> -->
            <van-swipe-cell :right-width="65" :on-close="onClose"  class="swipe-cell">
                <van-cell-group>
                  <van-cell>
                     <p>你好？房子还在吗？</p> 
                  </van-cell>
                </van-cell-group>
                <span slot="right" class="van-swipe-cell__right">删除</span>
            </van-swipe-cell>
            <!-- <van-swipe-cell :right-width="65" :on-close="onClose"   class="swipe-cell">
                <van-cell-group>
                  <van-cell>
                     <p>你好？房子还在吗？</p> 
                  </van-cell>
                </van-cell-group>
                <span slot="right" class="van-swipe-cell__right">删除</span>
            </van-swipe-cell>
            <van-swipe-cell :right-width="65" :on-close="onClose"  class="swipe-cell">
                <van-cell-group>
                  <van-cell>
                     <p>你好？房子还在吗？</p> 
                  </van-cell>
                </van-cell-group>
                <span slot="right" class="van-swipe-cell__right">删除</span>
            </van-swipe-cell> -->
            <p class="colorRed">添加常用语</p>
        </div>
    </div>
    <!--弹层-->
    <div class="mask" v-if="isShowMask" catchtouchmove="true"></div>
    <div class="centerMask "  v-if="isShowMask">
        <div class="fontBold mestitle">新增常用语</div>
        <textarea name="" id="" cols="30" rows="10" fixed placeholder="输入您的常用回复">
            
        </textarea>
        <div class="flex mesbtn borderTop">
            <p>保存</p>
            <p class="fontColor99">发送</p>
        </div>
    </div>
  </div>
</template>

<script>
import { post,getCurrentPageUrlWithArgs} from "@/utils";
export default {
  data () {
    return {
      isshow:true,
      isShowMask:false,//是否展示遮罩层
      showBtn:false, //展示图片组
      showMessage:true,//展示常用列表
    }
  },
   onLoad() {
    this.setBarTitle();
  },

  components: {
  },

  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "对话框"
      });
    },
    //获取常用语列表
    getMessage(){
      this.showMessage = true
      post('User/GetUser_wordtype').then(res=>{
        console.log(res,"+++++++++++++++++")
      })
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>
<style scoped lang="scss">
  .usedMes{
      padding:20rpx 30rpx!important;
      span{
        border-radius:20rpx;
        padding:10rpx 25rpx
      }
  }
  .messagelist{
    .swipe-cell{
      width:100%;
        border:1rpx solid red;
    }
    p{
      padding:20rpx 0;
      text-align: center;
      border-top:1rpx solid #ececec;
      border:1rpx solid blue
    }
  }
  .centerMask{
    width:650rpx;
    height:400rpx;
    top:50%;
    left:50rpx;
    margin-top:-200rpx;
    position:fixed;
    z-index:9999;
    background:#fff;
    border-radius:10rpx;
    padding:0 30rpx;
    box-sizing: border-box;
    textarea{
      margin-top:20rpx;
      height:200rpx;
    }
    .mestitle{
      margin-top:30rpx;
    }

  }
  .mesbtn{
    p{
      width:50%;
      padding:30rpx;
      box-sizing: border-box;
      text-align:center;
    }
    p:last-child{
      border-left:1rpx solid #ececec
    }
  }
  .van-swipe-cell__left,
  .van-swipe-cell__right {
    display: inline-block;
    width: 130rpx;
    height: 120rpx;
    font-size: 28rpx;
    line-height: 120rpx;
    color: #fff;
    text-align: center;
    background-color: #f44;
  }
</style>
