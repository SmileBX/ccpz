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
      flag:"",
      curPage: "",
      userId: "",
      token: "",
      onelist:[]
    }
  },
  onLoad() {
    this.setBarTitle();
  },
  onShow(){
    wx.setStorageSync("choseList",'')
    wx.setStorageSync("flag",'')
    wx.setStorageSync("type",'')
    this.onelist = []
    this.statu = ''
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.type=this.$root.$mp.query.typeTips
    this.flag =this.$root.$mp.query.flag
    this.initData()
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
    initData(){
      const _selectOneTags = this.$store.state.selectOneTags
      const _selectTwoTags = this.$store.state.selectTwoTags
      // console.log(_selectOneTags,_selectTwoTags,"{{{{{{{{{{{{{{")
      this.onelist.push(..._selectOneTags,..._selectTwoTags)
      // console.log(this.onelist,"_________")
    },
    getTagsCap(){
      post('Goods/GetTagsCap',{}).then(res=>{
        if(res.code==0){
          for(let i=0;i<res.data.length;i++){
            this.$set(res.data[i],"statu",false)
          }
          this.taglist = res.data
          // console.log(this.taglist,">>>>>>>>>>>")
          //标记不能选取的标签
          // for(let i=0;i<this.onelist.length;i++){
          //   // console.log(this.onelist[i])
          //   for(let j=0;j<this.taglist.length;j++){
          //   // console.log(this.taglist[j].Name)
          //     if(this.onelist[i] == this.taglist[j].Name){
          //         // console.log(this.taglist[j])
          //         this.$set(this.taglist[j],"statu",true)
          //     }
          //   }
          // }
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
          // console.log(this.taglist)
           //标记不能选取的标签
          // for(let i=0;i<this.onelist.length;i++){
          //   // console.log(this.onelist[i])
          //   for(let j=0;j<this.taglist.length;j++){
          //   // console.log(this.taglist[j].Name)
          //     if(this.onelist[i] == this.taglist[j].Name){
          //         // console.log(this.taglist[j])
          //         this.$set(this.taglist[j],"statu",true)
          //     }
          //   }
          // }
        }
      })
    },
    //或许已经选择的标签
    
    //选择标签
    choseTag(i){
        console.log(this.onelist.length,"this.onelist.length")
         console.log(i)
         if(this.taglist[i].statu){
              this.$set(this.taglist[i],"statu",false)
          }else{
            this.$set(this.taglist[i],"statu",true)
          }
          //不能选择已经编辑过的标签
        //  if(this.onelist.length == 0){
        //    //首次添加标签
        //    if(this.taglist[i].statu){
        //       this.$set(this.taglist[i],"statu",false)
        //     }else{
        //       this.$set(this.taglist[i],"statu",true)
        //     }
        //  }else{
        //    //编辑增加标签
        //     let num = 0
        //     for(let j=0;j<this.onelist.length;j++){
        //       if(this.taglist[i].Name!=this.onelist[j]){
        //         num++
        //       }
        //     }
        //     // console.log(num)
        //     if(num == this.onelist.length && num!=0){
        //       if(this.taglist[i].statu){
        //           this.$set(this.taglist[i],"statu",false)
        //       }else{
        //         this.$set(this.taglist[i],"statu",true)
        //       }
        //     }

        //  }
    },
    //确定标签
    addTagsSubmit(){
      // console.log("___",this.taglist)
      let choseList = []
      this.taglist.map(item=>{
        if(item.statu){
          choseList.push(item)
        }
      })
      choseList.map((key,index)=>{
          if(value==key.Name){
              console.log(key,index,"**********")
            choseList.splice(index,1)
        }
      })
      //不能选取已经选择过的标签
      // this.onelist.map((value)=>{
      //   console.log("Tttttttt")
      //   choseList.map((key,index)=>{
      //     if(value==key.Name){
      //         console.log(key,index,"**********")
      //         choseList.splice(index,1)
      //     }
      //   })
      // })
      
      console.log(choseList,"}}}}}}}}}}}}}}}")
      const _choseList = JSON.stringify(choseList)
      wx.setStorageSync("choseList",_choseList)
      wx.setStorageSync("flag",this.flag)
      wx.setStorageSync("type",this.type)
      // wx.navigateTo({
      //   url:"/pages/mine/editMenTags/main?typeTips="+this.type+"&flag="+this.flag
      // })
      // setTimeout(()=>{
      //   wx.redirectTo({url:"/pages/mine/editMenTags/main"})
      // },1500)
      wx.navigateBack()
     

      
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