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
        <div class="inputbtn flex flexAlignCenter bg_fff ">
            <input type="text" placeholder="想对他说点什么呢？" class="flex1">
            <div class="flex flexAlignCenter">
                <img src="/static/images/icons/smile.jpg" alt="" class="logimg">
                <img src="/static/images/icons/add.jpg" alt="" class="logimg">
            </div>
        </div>
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
  </div>
</template>

<script>

export default {
  data () {
    return {
      isshow:true
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
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>
