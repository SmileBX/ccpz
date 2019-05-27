<template>
  <div class="page borderTop addteam">
    <!--输入框-->
      <div class="bg_fff flex flexAlignCenter pall">
          <img src="/static/images/icons/search.png" alt="" class="icon_search">
          <input type="text" placeholder="搜索" class="flex1">
      </div>
      <div class="slidebg"></div>
      <!--分组按钮-->
      <div class="bg_fff flex flexAlignCenter pall" @click="addTeam">
          <img src="/static/images/icons/add2.jpg" alt="" class="icon_add2">
          <span>新建分组</span>
      </div>
      <div class="slidebg"></div>
      <!--组列表-->
      <div class="bg_fff group boxSize">
          <div class="teamitem flexAlignCenter flex p25">
              <div class="avatarbox mrr2">
                <img src="/static/images/of/ava.png" alt="" class="avatar">
              </div>
              <p class="flex1 fontBold">兄弟姐妹</p>
              <div>
                  <span class="icon-arrow arrow-right"></span>
              </div>
          </div>
          <div class="teamitem flexAlignCenter flex p25">
              <div class="avatarbox mrr2">
                <img src="/static/images/of/ava.png" alt="" class="avatar">
              </div>
              <p class="flex1 fontBold">好友群</p>
              <div>
                  <span class="icon-arrow arrow-right"></span>
              </div>
          </div>
          
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      verMsg:'我是',
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
        title: "分组"
      });
    },
    addTeam(){
       wx.navigateTo({url: '/pages/connectLetter/addNewTeam/main'})
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>
