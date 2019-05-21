<template>
  <div >
    <button @click="goGroup">分组页面</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },

  components: {
  },

  methods: {
    goGroup(){
      wx.navigateTo({url: '/pages/newsletter/main'})
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>
