<template>
  <div class="page">
      <div class="head bg_fff ">
        <!--头像部分-->
          <div class="flex avatarhead">
              <div class="avatarbox">
                  <img src="/static/images/of/ava.png" alt="" class="avatar">
              </div>
              <div class="flex1">
                  <p>哈哈哈哈</p>
                  <p class="font_four">女 27岁 深圳</p>
              </div>
          </div>
          <!--填写验证信息-->
          <div class="vertical flex flexColumn">
              <p class="font_four">填写验证信息</p>
              <input type="text" v-model="verMsg" class="flex1 yanz">
          </div>
      </div>
      <div class="setclass">设置备注与分组</div>
      <div class="bg_fff group boxSize">
          <div class="flex flexAlignCenter slide boxSize sign">
              <p>备注</p>
              <input type="text"  v-model="specName" class="flex1">
          </div>
          <div class="flex flexAlignCenter slide boxSize">
              <p>分组</p>
              <p class="flex flex1">
                  <input type="text"  v-model="specPlace" class="flex1">
                  <span class="icon-arrow arrow-right"></span>
              </p>
          </div>
      </div>
      <!--加好友-->
      <div class="btnSub addtop">加好友</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      verMsg:'我是',
      specName:'傻不傻',
      specPlace:'我的好友',
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
        title: "添加好友"
      });
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>
