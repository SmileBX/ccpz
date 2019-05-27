<template>
  <div>
     <!--顶部输入框-->
      <div class="bg_fff flex flexAlignCenter pall">
          <img src="/static/images/icons/search.png" alt="" class="icon_search">
          <input type="text" placeholder="搜索" class="flex1 bg_fff" :value="inputName" @input="bindKeyInput">
      </div>
      <div class="wrap">
          <IndexList  :data="playerList" @choose="onChoose" v-if="playerList"></IndexList>
      </div>
      <div class="btnSub2" @click="completeMember">完成</div>
  </div>
</template>

<script>
import IndexList from '@/components/IndexListMember.vue'
import playerList from '@/utils/playlist.json'
export default {
  data () {
    return {
      playerList,
    }
  },
  onLoad(){
    this.setBarTitle()
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
    completeMember(){
        wx.navigateTo({url: '/pages/connectLetter/addNewTeam/main'})
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
    top:120rpx;
    bottom: 90rpx;
    width: 100%;
  }
</style>
