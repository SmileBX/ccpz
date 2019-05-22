<template>
  <div class="page bg_fff borderTop">
    <!--通知列表-->
    <div class="padwid">
        <div class="flex avatarhead flexAlignCenter boxSize p2">
            <div>
                <img src="/static/images/of/ava.png" alt="" class="avatar">
            </div>
            <div class="flex flex1 flexAlignCenter">
                <div class="flex flex1 flexColumn">
                    <span class="font32">部落格格屋</span>
                    <span class="font_four">请求添加你为好友</span>
                </div>
                <div class="btnadd" v-if="showbtn">已添加</div>
                <div v-else class="ignoreBtn flex flexAlignCenter">
                    <span class="ignore boxSize">忽略</span>
                    <span class="pass boxSize">通过</span>
                </div>
            </div>
        </div>
        <div class="flex avatarhead flexAlignCenter boxSize p2">
            <div>
                <img src="/static/images/of/ava.png" alt="" class="avatar">
            </div>
            <div class="flex flex1 flexAlignCenter">
                <div class="flex flex1 flexColumn">
                    <span class="font32">部落格格屋</span>
                    <span class="font_four">请求添加你为好友</span>
                </div>
                <div class="btnadd">已添加</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      showbtn:false
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
        title: "新朋友"
      });
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>
