<template>
  <div class="bg_fff" style="height:100vh">
    <!-- 标签-->
    <div class="flex flexWrap justifyContentStart taglist">
      <span v-for="(item,index) in taglist" :key="index" :class="{'avtive':item.statu}" @tap="choseTag(index)">{{item.Name}}</span>
      <!-- <span>设计</span>
      <span class="avtive">文员</span>
      <span>销售</span> -->
    </div>
    <!-- 底部 -->
    <div class="btnSub" @tap="addTagsSubmit">确定</div>
  </div>
</template>
<script>
import { post, valPhone, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
export default {
  data(){
    return {
      type:0, // 1-资源标签 2-能力标签
      taglist:[ ],
      flag:""
    }
  },
  onLoad() {
    this.setBarTitle();
  },
  onShow(){
    this.statu = ''
    this.type=this.$root.$mp.query.typeTips
    this.flag =this.$root.$mp.query.flag
    if(this.type==2){
      this.getTagsCap()
    }
    if(this.type==1){
      this.getTagsRes()
    }
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "标签管理"
      });
    },
    getTagsCap(){
      post('Goods/GetTagsCap',{}).then(res=>{
        if(res.code==0){
          for(let i=0;i<res.data.length;i++){
            this.$set(res.data[i],"statu",false)
          }
          this.taglist = res.data
          console.log(this.taglist)
        }
      })
    },
    getTagsRes(){
      post('Goods/GetTagsRes',{}).then(res=>{
        if(res.code==0){
          for(let i=0;i<res.data.length;i++){
            this.$set(res.data[i],"statu",false)
          }
          this.taglist = res.data
          console.log(this.taglist)
        }
      })
    },
    //选择标签
    choseTag(i){
      this.$set(this.taglist[i],"statu",true)
    },
    //确定标签
    addTagsSubmit(){
      console.log("___",this.taglist)
      let choseList = []
      this.taglist.map(item=>{
        if(item.statu){
          choseList.push(item)
        }
      })
      const _choseList = JSON.stringify(choseList)
      wx.setStorageSync("choseList",_choseList)
      wx.reLaunch({
        url:"/pages/mine/editMenTags/main?typeTips="+this.type+"&flag="+this.flag
      })

      
    }
  }
};
</script>
<style lang="scss" scoped>
.taglist{
  padding:0 50rpx;
  margin-bottom:60rpx;
  span.avtive{
    background:#FF952E;
    color:#fff
  }
}
.taglist span{
  width:28%;
  font-size:24rpx;
  text-align:center;
  background: #FFF7F0;
  margin-right:47rpx;
  margin-bottom: 18rpx;
  padding:10rpx 0;
}
.taglist span:nth-child(3n){
  margin-right:0
}
.btnSub{
  width:650rpx
}

</style>