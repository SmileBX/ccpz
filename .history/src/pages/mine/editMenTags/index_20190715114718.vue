<template>
  <div class="bg_fff" style="height:100vh">
    <!-- 标签 擅长-->
      <div class="tagBox pd15 mt10 bg_fff" style="margin-bottom:20rpx">
          <div class="line flex flexColumn">
            <div> 
                <div class="tagTile2">{{tag1}}</div>
                <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentStart flex1" style="margin-top:20rpx">
                  <span v-for="(item,gindex) in goodList" :key="gindex" @tap="delTag(gindex)">{{item}} x</span>
                  <span class="AddTag" @tap="addTagDetail(1)">+ 添加</span>
                </div>
            </div>
          </div>
      </div>
       <!-- 标签 需要-->
       <div class="tagBox pd15 mt10 bg_fff" style="margin-bottom:20rpx">
          <div class="line flex flexColumn">
            <div> 
                <div class="tagTile2">{{tag2}}</div>
                <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentStart flex1 flexAlignCenter" style="margin-top:20rpx">
                  <span v-for="(item,nindex) in needList" :key="nindex" v-if="needList" @tap="delTag2(nindex)">{{item}} x</span>
                  <span class="AddTag" @tap="addTagDetail(2)">+ 添加</span>
                </div>
            </div>
          </div>
      </div>
    <!-- 底部 -->
    <div class="btnSub" @tap="saveTag">确定</div>
  </div>
</template>
<script>
import { post, valPhone, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
export default {
  data(){
    return {
      type:0, // 1-资源标签 2-能力标签
      taglist:[ ],
      curPage: "",
      userId: "",
      token: "",
      goodList:[],
      needList:[],
      tag1:"",
      tag2:""
    }
  },
  onLoad() {
    wx.setStorageSync("choseList",'')
    wx.setStorageSync("flag",'')
    wx.setStorageSync("type",'')
    this.setBarTitle();
  },
  onShow(){
    this.initData()
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    // this.initData()
    if(!wx.getStorageSync("type") || !wx.getStorageSync("flag")){
      if(this.type==2){
        if(!this.$root.$mp.query.flag){
          this.getTagsCap()
        }
        this.tag1='我擅长的技能'
        this.tag2='我需要的技能'
      }
      if(this.type==1){
        if(!this.$root.$mp.query.flag){
          this.getTagsRes()
        }
        this.tag1='我擅长的资源'
        this.tag2='我需要的资源'
      }
    }
    
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "标签编辑"
      });
    },
    initData(){
      const _type = wx.getStorageSync("type") //选择标签之后
      if(_type){
        this.type = _type
        console.log(this.type,"+++++++")
      }else{
        this.type=this.$root.$mp.query.typeTips
      }
      console.log(wx.getStorageSync("choseList"),"-*-*-*-*-*-*-*-*-*-")
      if(wx.getStorageSync("flag")){
        // console.log(this.$root.$mp.query.flag)
        let choseList = JSON.parse(wx.getStorageSync("choseList"))
        console.log("_____",choseList)
        let _choseList = []
        choseList.map(item=>{
            _choseList.push(item.Name)
        })

        if(wx.getStorageSync("flag")==1){
          // this.goodList = Object.assign([],this.goodList,_choseList)
          this.goodList.push(..._choseList)
          // this.goodList.map((item,index)=>{
          //   this.needList.map(key=>{
          //     if(item==key){
          //         console.log(item,index,"**********")
          //         this.goodList.splice(index,1)
          //     }
          //   })
          // })
          this.$store.commit("update",{
            selectOneTags:this.goodList
          })
        }else{
          console.log(" this.goodList:",this.goodList)
          // this.needList = Object.assign([],this.needList,_choseList)
          // this.needList.map((item2,index2)=>{
          //   this.goodList.map(key=>{
          //     if(item2==key){
          //         console.log(item2,index2,"**********")
          //         this.needList.splice(index2,1)
          //     }
          //   })
          // })
          this.needList.push(..._choseList)
          this.$store.commit("update",{
            selectTwoTags:this.needList
          })
        }
        console.log(" this.needList:",this.needList)
        
      }
    },
    getTagsCap(){
      console.log("执行1")
      post('User/GetTagsCap',{
        UserId:this.userId,
        Token:this.token
      },this.curPage).then(res=>{
          console.log(res)
        if(res.code==0){
          if(res.code==0){
            if(res.data.TagsCapGood[0].length<=0){
              this.goodList = res.data.TagsCapGood.splice(1)
            }else{
              this.goodList = res.data.TagsCapGood
            }
            if(res.data.TagsCapKnow[0].length<=0){
              this.needList = res.data.TagsCapKnow.splice(1)
            }else{
              this.needList = res.data.TagsCapKnow
            }
          }
          this.$store.commit("update",{
            selectOneTags:this.goodList
          })
          this.$store.commit("update",{
            selectTwoTags:this.needList
          })
          // this.goodList = res.data.TagsCapGood
          // this.needList = res.data.TagsCapKnow
        }
      })
    },
    getTagsRes(){
      console.log("执行2")
      post('User/GetTagsRes',{
        UserId:this.userId,
        Token:this.token
      },this.curPage).then(res=>{
          if(res.code==0){
            if(res.data.TagsResGood[0].length<=0){
              this.goodList = res.data.TagsResGood.splice(1)
            }else{
              this.goodList = res.data.TagsResGood
            }
            if(res.data.TagsResKnow[0].length<=0){
              this.needList = res.data.TagsResKnow.splice(1)
            }else{
              this.needList = res.data.TagsResKnow
            }
            this.$store.commit("update",{
              selectOneTags:this.goodList
            })
            this.$store.commit("update",{
              selectTwoTags:this.needList
            })
          }
      })
    },
    addTagDetail(n){
      wx.navigateTo({
        url:"/pages/mine/tags/main?typeTips="+this.type+"&flag="+n
      })
    },
    //保存标签
    saveTag(){
      let _goodList = []
      let _needList = []
      _goodList=this.goodList.join(',')
      _needList=this.needList.join(',')
      console.log(_needList)

      let objUrl = ''
      let _pramas = {}
      if(this.type==1){
        objUrl = 'User/EditTagsRes'
        _pramas = {
          UserId:this.userId,
          Token:this.token,
          TagsResGood:_goodList,
          TagsResKnow:_needList

        }

      }else{
        objUrl = 'User/EditTagsCap'
        _pramas = {
          UserId:this.userId,
          Token:this.token,
          TagsCapGood:_goodList,
          TagsCapKnow:_needList

        }
      }
      post(objUrl,_pramas,this.curPage).then(res=>{
        console.log("res:",res)
        if(res.code==0){
          wx.showToast({
            title:res.msg,
            inco:"success",
            duration:1500
          })
        }
        setTimeout(()=>{
        //  wx.redirectTo({url:"/pages/mine/person/main"})
      wx.navigateBack()
        },1500)
      })
    },
    //删除标签
    delTag(i){
      this.goodList.splice(i,1)
      console.log(this.goodList,"this.goodList{{{{{{{")
    },
    //删除标签
    delTag2(i){
      this.needList.splice(i,1)
    }
    
  }
};
</script>
<style lang="scss" scoped>
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
.tipsList{
  width:100%;
  span{
    width:23%;
    padding:10rpx 0;
    font-size:24rpx;
    text-align:center;
    background: #ff9325;
    border:none;
    color:#fff;
    margin-right:16rpx;
    margin-bottom: 18rpx;
    vertical-align: middle;
  }
  span:nth-child(4n){
    margin-right:0
  }
}
.tagTile2{
  font-size:32rpx;
  font-weight:bold;
  width:100%!important;
}
.AddTag{
  border:1rpx  solid #ff9325!important;
  color:#ff9325!important;
  background:#fff!important
}

</style>