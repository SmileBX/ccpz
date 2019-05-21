<template>
  <div class="page">
      <div class="head bg_fff ">
        <!--头像部分-->
          <div class="flex avatarhead">
              <img src="/static/images/of/ava.png" alt="" class="avatar">
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
  </div>
</template>

<script>

export default {
  data () {
    return {
      verMsg:'我是',
    }
  },

  components: {
  },

  methods: {
  },

  created () {
    // let app = getApp()
  }
}
</script>
