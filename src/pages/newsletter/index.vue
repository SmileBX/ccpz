<template>
  <div  class="borderTop">
     <!--顶部输入框-->
      <div class="bg_fff flex flexAlignCenter pall ">
          <img src="/static/images/icons/search.png" alt="" class="icon_search">
          <input type="text" placeholder="搜索" class="flex1 bg_fff" :value="inputName" @input="bindKeyInput">
      </div>
      <div class="slidebg"></div>
       <!--分组按钮-->
      <div class="bg_fff flex flexAlignCenter pall" @click="goTo">
          <img src="/static/images/icons/fenzu.jpg" alt="" class="icon_fenzu">
          <span>分组</span>
      </div>
      <div class="wrap">
          <IndexList  :data="playerList" @choose="onChoose" v-if="playerList"></IndexList>
      </div>
  </div>
</template>

<script>
import IndexList from '@/components/IndexList.vue'
import playerList from '@/utils/playlist.json'
export default {
  data () {
    return {
      playerList,
    }
  },
  onLoad(){
    this.setBarTitle();
    console.log(this.playerList)
  },

  components: {
    IndexList
  },

  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "通讯录"
      });
    },
    goTo(){
         wx.navigateTo({url: '/pages/connectLetter/addTeam/main'})
    }
    // goGroup(){
    //   wx.navigateTo({url: '/pages/pagesNewsletter/group/main'})
    // }
  },

  created () {
    // let app = getApp()
  }
}
</script>
<style>
  .wrap {
    position: fixed;
    top:300rpx;
    bottom: 0;
    width: 100%;
  }
</style>
