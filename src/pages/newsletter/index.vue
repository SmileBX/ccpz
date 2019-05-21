<template>
  <div >
    <newsletterList></newsletterList>
    <button @click="goGroup">跳转分组</button>
  </div>
</template>

<script>
import newsletterList from '@/components/newsletterBook.vue'
export default {
  data () {
    return {
    }
  },

  components: {
    newsletterList
  },

  methods: {
    goGroup(){
      wx.navigateTo({url: '/pages/pagesNewsletter/group/main'})
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>
