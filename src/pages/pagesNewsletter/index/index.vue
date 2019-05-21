<template>
  <div >
    <button @click="goGroup">跳转分组</button>
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
      wx.navigateTo({url: '/pagesNewsletter/group/main'})
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>
<style lang="scss">

</style>

