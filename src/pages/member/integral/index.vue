<template>
  <div class="pageContent bg_fff">
    <div class="memberTop center">
      <span class="btnModifyInfo" @tap="gotoIntegralList">明细</span>
      <p class="num">{{score}}</p>
      <p class="title">积分</p>
    </div>
    <div class="integralMain">
      <h3 class="integralTitle center">
        <span class="bg_title"><span class="title">积分兑会员</span></span>
      </h3>
      <div class="integral__bd"  v-if="list.length>0">
        <swiper class="integralSwiper" previous-margin="60rpx" next-margin="30rpx" circular="true">
          <swiper-item class="item" v-for="(item,index) in list" :key="index" :class="{'one__item':item.ExpireDays===1,'month__item':item.ExpireDays===30,'season__item':item.ExpireDays===90,'year__item':item.ExpireDays===360}">
            <div class="outside">
              <div class="typePic" :class="{'one__gradient':item.ExpireDays===1,'month__gradient':item.ExpireDays===30,'season__gradient':item.ExpireDays===90,'year__gradient':item.ExpireDays===360}">
                <p class="type">会员{{item.Name}}</p>
                <img src="/static/images/icons/v3.png" class="icons-vip gradient-vip" alt>
              </div>
              <div class="txtBox flex flexAlignCenter">
                <div class="flex1">
                  <p class="type">会员{{item.Name}}</p>
                  <p class="num">{{item.NeedScore}}分</p>
                </div>
                <span class="weui-btn" @click="exchange(item)">立即兑换</span>
              </div>
            </div>
          </swiper-item>
        </swiper>
      </div>
    </div>
    <payPassword :showStatus.sync="showPayPawStatus" @success="submit"></payPassword>
  </div>
</template>
<script>
import { post, toLogin, getCurrentPageUrlWithArgs, trim } from "@/utils";
import payPassword from '@/components/payPassword.vue'
export default {
  components:{payPassword},
  data() {
    return {
      userId:"",
      token:"",
      curPage:"",
      score:0,
      list:[],  //积分兑换卡的列表数据
      showPayPawStatus:false,
      exchangeId:'',//要兑换的id
    }
  },
  onLoad() {
    this.setBarTitle();
  },
  onShow(){
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.exchangeId =''
    if(toLogin(this.curPage)){
      this.GetMemberScore();
      this.getdhScoreList();
    }
    
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "我的积分"
      });
    },
    GetMemberScore(){  //获取会员积分
      let that = this;
      post("User/GetMemberScore",{
        UserId:that.userId,
        Token:that.token
      },that.curPage).then(res => {
        if(res.code===0){
          that.score = res.data.Score;
        }
      })
    },
    getdhScoreList(){  //积分兑换商品列表
     let that = this;
      post("User/dhScoreList",{
        UserId:that.userId,
        Token:that.token
      },that.curPage).then(res => {
        if(res.code===0){  //获取成功
           that.list = res.data;
        }
      })

    },
    gotoIntegralList(){
      wx.navigateTo({
        url: '/pages/member2/integralList/main'
      })
    },
    // 立即兑换，弹出密码框
    exchange(item){
      if(this.score<item.NeedScore){
        wx.showToast({
          title:'积分不足！',
          icon:'none'
        })
        return false;
      }
      this.exchangeId = item.Id;
      this.showPayPawStatus = true;
    },
    // 输入密码后进行兑换
    async submit(password){
      try{
        const res = await post('User/GodhScore',{
          UserId:this.userId,
          Token:this.token,
          Id:this.exchangeId,
          Password:password,
        })
        if(res.code===0){
          this.showPayPawStatus = false;
          this.exchangeId =''
          wx.showToast({
            title:'兑换成功！'
          })
          setTimeout(()=>{
            this.GetMemberScore();
          },1500)
        }
      }catch(err){
        
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.pageContent{
  height: 100vh;
  overflow: hidden;
}
.memberTop {
  padding: 60rpx 0;
  .num {
    font-size: 72rpx;
    line-height: 1.3;
  }
  .title {
    font-size: 32rpx;
  }
  .btnModifyInfo {
    top: 30rpx;
  }
}
</style>
