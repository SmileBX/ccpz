<template>
  <div class="page bg_fff borderTop">
    <!--通知-->
    <div class=padwid>
        <div class="flex avatarhead flexAlignCenter boxSize">
            <img src="/static/images/of/ava.png" alt="" class="avatar">
            <div class="flex flexColumn flex1">
                <div class="flex">
                    <span class="flex1 font32">系统通知</span>
                    <span class="font_four">12:23</span>
                </div>
                <div class="fontColor">海量房源，总有一套适合你...</div>
            </div>
            
        </div>
        <div class="flex flexAlignCenter p1 boxSize">
            <img src="/static/images/of/ava.png" alt="" class="avatar">
            <div class="flex1 flex circlePosition">
                <span class="flex1 font32">好友请求</span>
                <span class="circleNum onlynum">3</span>
            </div>
        </div>
    </div>
    <div class="slidebg"></div>
    <!--消息列表-->
    <div class="padwid">
        <div class="flex avatarhead flexAlignCenter boxSize p2">
            <div class="circlePosition">
                <img src="/static/images/of/ava.png" alt="" class="avatar">
                <span class="circleNum msgnum">1</span>
            </div>
            <div class="flex flexColumn flex1">
                <div class="flex">
                    <span class="flex1 font32">部落格格屋</span>
                    <span class="font_four">12:23</span>
                </div>
                <div class="fontColor">笑起来好看的女孩，运气都好！</div>
            </div>
        </div>
        <div class="flex avatarhead flexAlignCenter boxSize p2">
            <div class="circlePosition">
                <img src="/static/images/of/ava.png" alt="" class="avatar">
                <span class="circleNum msgnum">86</span>
            </div>
            <div class="flex flexColumn flex1">
                <div class="flex">
                    <span class="flex1 font32">齐凯</span>
                    <span class="font_four">12:23</span>
                </div>
                <div class="fontColor">开心快乐两月！</div>
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
        title: "消息"
      });
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>
