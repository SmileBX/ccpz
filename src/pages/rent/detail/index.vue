<template>
  <div class="pageContent" v-if="showData">
    <!-- 详情 -->
    <!--  -->
    <pinzu v-if="type==21" :data="data" @checkLocation="checkLocation"></pinzu>
    <formation v-if="type==22" :data="data"></formation>
    <!-- 底部 -->
    <div class="ftBtn">
      <div class="inner fixed bm0 flex">
        <div class="iconGroup flex flexAlignCenter">
          <div class="item flex1" @click="onReport">
            <img src="/static/images/icons/jubao.jpg" alt>
            <p>举报</p>
          </div>
          <div class="item flex1" @click="onIsCollection">
            <img v-if="!IsCollection" src="/static/images/icons/shoucang.png" alt>
            <img v-else src="/static/images/icons/shoucang-action.png" alt>
            <p>收藏</p>
          </div>
        </div>
        <div class="btns flex1 flex center">
          <div class="btn flex1 bg_ff952e color_fff" @click="contant">极速联系</div>
          <div class="btn flex1 bg_ed3435 color_fff" v-if="data.IsAddFriend&&data.IsAddFriend.Value==1" @click="addFre">加好友</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 拼租 = 21,
// 组建 = 22,
// 拼活动 = 23,
// 房源 = 24,
import {post} from '@/utils/index'
import {getAddressLocation} from '@/utils/location'
import pinzu from './pinzu/index.vue'
import formation from './formation/index.vue'
// import houseItem from "@/components/houseItem.vue";
// import activityItem from "@/components/activityItem.vue";
export default {
  components:{pinzu,formation},
  data(){
    return {
      id:'',
      type:0,
      userId:'',
      token:'',
      IsCollection:false,
      showData:false,
      data:{},
    }
  },
  onLoad() {
    this.setBarTitle();
    console.log('this.$root.$mp.query.id',this.$root.$mp.query.id)
    if(this.$root.$mp.query.id){
      this.id = this.$root.$mp.query.id
    }
    if(this.$root.$mp.query.type){
      this.type = this.$root.$mp.query.type
    }
      this.showData=false
  },
  onShow(){
    this.userId = wx.getStorageSync('userId')
    this.token = wx.getStorageSync('token')
    this.getData();
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "商铺详情"
      });
    },
    // 获取详情
    async getData(){
      const res =await post('Goods/GetRent_xq',{
        UserId:this.userId,
        Token:this.token,
        Id:this.id
      })
      console.log(res,'请求成功')
      this.data = res.data
      // 收藏
      this.IsCollection= res.data.IsCollection.Value
      this.showData=true
    },
    // 收藏
    async onIsCollection(){
      // Type:0://产品 1://商家
      const params = {
        UserId:this.userId,
        Token:this.token,
        Type:0,
        Id:this.id
      }
      if(!this.IsCollection){
        await post('User/AddCollections',params)
        wx.showToast({title:'收藏成功'})
      }else{
        await post('User/ReCollections',params)
        wx.showToast({title:'取消收藏成功'})
      }
      // const res = await post('User/AddCollections',params)
      this.IsCollection = !this.IsCollection
    },
    // 举报
    onReport(){

    },
    //添加好友
    addFre(){
      if(this.data.IsAddFriend.Value){
        wx.navigateTo({url:'/pages/messages/addFre/main?FriendId='+this.data.IsAddFriend.FriendId})
      }else{
        wx.showToast({
          title:'请先开通会员!',
          icon:'none'
        })
      }
    },
    // 联系
    contant(){
      if(this.data.IsContact.Value){
        wx.navigateTo({url:'/pages/messages/chatRoom/main?FriendId='+this.data.IsContact.FriendId})
      }else{
        wx.showToast({
          title:'请先开通会员!',
          icon:'none'
        })
      }
    },
    // 查看地理位置
    checkLocation(){
      if(this.data.CompanyAddr){
        const address = (this.data.CompanyAddr.Value||'') + (this.data.CompanyDoorNum.Value||'')
        console.log(address,'要转换的地址')
        getAddressLocation(address).then(res=>{
          console.log(res,'转换后的地址')
          wx.openLocation({
            latitude:res.lat,
            longitude:res.lng
          })
        })
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.firm{
  width:45%;
  padding:0;
  margin-left:20rpx;
  display:flex;
  align-items:center;
  line-height:70rpx;
}
.flex-flow{
  display:flex;
  flex-flow:row wrap;
}
.comAbout{
  .group{
    .weui-cell{
      padding: 6rpx 0 6rpx 30rpx;
      min-width:345rpx;
    }
  }
}
</style>