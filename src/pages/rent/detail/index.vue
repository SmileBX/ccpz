<template>
  <div class="pageContent" v-if="showData">
    <!-- 详情 -->
    <!--  -->
    <pinzu v-if="type==21" :data="data" @checkLocation="checkLocation" @goUserCenter="goUserCenter" @previewImg="previewImg"></pinzu>
    <formation v-if="type==22" :data="data" @checkLocation="checkLocation" @goUserCenter="goUserCenter" @previewImg="previewImg"></formation>
    <activity v-if="type==23" :data="data" @checkLocation="checkLocation" @goUserCenter="goUserCenter" @previewImg="previewImg"></activity>
    <house v-if="type==24" :data="data" @checkLocation="checkLocation" @goUserCenter="goUserCenter" @previewImg="previewImg"></house>
    <!-- 底部 -->
    <div class="ftBtn" v-if="!data.Footer.IsHide">
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
          <div class="btn flex1 bg_ff952e color_fff" v-if="Footer.IsContact&&Footer.IsContact.Value==1" @click="isVip('contant')">极速联系</div>
          <div class="btn flex1 bg_ed3435 color_fff" v-if="Footer.IsAddFriend&&Footer.IsAddFriend.Value==1" @click="isVip('addFre')">加好友</div>
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
import {post,getCurrentPageUrlWithArgs} from '@/utils/index'
import {getAddressLocation} from '@/utils/location'
import pinzu from './pinzu/index.vue'
import formation from './formation/index.vue'
import house from "./house/index.vue";
import activity from "./activity/index.vue";
export default {
  components:{pinzu,formation,house,activity},
  data(){
    return {
      title:'详情',
      id:'',
      type:0,
      userId:'',
      token:'',
      showData:false,
      data:{},
      Footer:{},
      IsCollection:false, //收藏
      previewImgArr:[],//预览图片
    }
  },
  onLoad() {
    this.setBarTitle();
    console.log('this.$root.$mp.query.id',this.$root.$mp.query.id)
    this.previewImgArr=[];
    if(this.$root.$mp.query.id){
      this.id = this.$root.$mp.query.id
    }
    if(this.$root.$mp.query.type){
      this.type = this.$root.$mp.query.type
    }
  },
  onShow(){
    this.userId = wx.getStorageSync('userId')
    this.token = wx.getStorageSync('token')
    this.curPage = getCurrentPageUrlWithArgs();
    this.getData();
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: this.title
      });
    },
    // 获取详情
    async getData(){
      this.showData=false
      const res =await post('Goods/GetRent_xq',{
        UserId:this.userId,
        Token:this.token,
        Id:this.id
      },this.curPage)
      console.log(res,'请求成功')
      // 头部标题
      this.title = res.data.TypeName.Value;
      this.setBarTitle();
      // debugger;
      // 底部
      if(!res.data.Footer.IsHide){
        this.Footer = res.data.Footer.Value;
        const Footer = res.data.Footer.Value;
        this.IsCollection = Boolean(Footer.IsCollection.Value);
      }
      // 公司信息
      // 只有id不等于0时，展示
      if(res.data.CompanyInfo.Value.Id.Value){
        const data = res.data;
        res.data.CompanyInfos=[]
        const CompanyInfo = [];
        const Company = data.CompanyInfo.Value;
        // 法人
        Company["LegalPerson"] && CompanyInfo.push(Company["LegalPerson"]);
        // 籍贯
        Company["NativePlace"] && CompanyInfo.push(Company["NativePlace"]);
        // 注册资本
        Company["RegCapital"] && CompanyInfo.push(Company["RegCapital"]);
        // 实缴资本
        Company["RealCapital"] && CompanyInfo.push(Company["RealCapital"]);
        // 社会信用代码
        Company["RegNum"] && CompanyInfo.push(Company["RegNum"]);
        // 营业执照上传
        Company["BusinessLicense"] && CompanyInfo.push(Company["BusinessLicense"]);
        // 其他资质证书上传
        Company["OtherSeniority"] && CompanyInfo.push(Company["OtherSeniority"]);
        // 官网
        Company["OfficialWebsite"] && CompanyInfo.push(Company["OfficialWebsite"]);
        res.data.CompanyInfos =CompanyInfo
      }
      this.data = res.data
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
        await post('User/AddCollections',params,this.curPage)
        wx.showToast({title:'收藏成功'})
      }else{
        await post('User/ReCollections',params,this.curPage)
        wx.showToast({title:'取消收藏成功'})
      }
      this.IsCollection = !this.IsCollection
    },
    // 举报
    onReport(){
        wx.navigateTo({url:'/pages/mine2/report/main'})
    },
    // 判断是否会员
    async isVip(btn){
      let status = true;
      const res =await post('User/QueryVipInfo',{
        UserId:this.userId,
        Token:this.token
      })
      const data = res.data;
      // 没开通会员
      if(!data.IsVip){
        status = false;
        wx.showModal({
          title:'开通会员',
          content:'此功能需要开通会员，是否跳转开通会员页面?',
          confirmColor:'#ff952e',
          cancelColor:'#999',
          success(res){
            if (res.confirm) {
              wx.navigateTo({url:'/pages/member2/buyFunction/main?type=3'})
            }
          }
        })
      }
      if(!status){return false;}
      if(btn==='addFre'){
        
      // 有会员，有次数限制，且次数小于1
      if(data.IsVip&&data.IsGetNum===1&&data.GetNum<1){
        wx.showModal({
          title:'开通会员',
          content:'您购买的次卡次数已用完，请重新购买',
          confirmColor:'#ff952e',
          cancelColor:'#999',
          success(res){
            if (res.confirm) {
              wx.navigateTo({url:'/pages/member2/buyFunction/main?type=3'})
            }
          }
        })
      }else{
        this.addFre();
      }
      }else{
        this.contant();
      }
    },
    //添加好友
    addFre(){
        if(this.Footer.IsAddFriend.Value){
          wx.navigateTo({url:'/pages/messages/addFre/main?FriendId='+this.Footer.IsAddFriend.FriendId})
        }else{
          wx.showToast({
            title:'请先开通会员!',
            icon:'none'
          })
        }
    },
    // 联系
    contant(){
      if(this.Footer.IsContact.Value){
        wx.navigateTo({url:'/pages/messages/chatRoom/main?FriendId='+this.Footer.IsContact.FriendId})
      }else{
        wx.showToast({
          title:'请先开通会员!',
          icon:'none'
        })
      }
    },
    // 跳转到个人中心
    goUserCenter(){
      wx.navigateTo({
        url: `/pages/mine/person/main?type=2&Id=${this.data.ShopInfo.Value.ShopId}`
      });
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
    },
    // 预览图片
    previewImg(index) {
      if (this.previewImgArr.length < 1) {
        this.data.PicList.Value.map(item => {
          this.previewImgArr.push(item.PicUrl);
        });
      }
      wx.previewImage({
        urls: this.previewImgArr,
        current: this.previewImgArr[index]
      });
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