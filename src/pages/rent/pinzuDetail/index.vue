<template>
  <div class="pageContent" v-if="showData">
    <div class="storeDetail">
      <div class="section pb20">
        <div class="swiper">
          <img src="/static/images/of/storeDetail.jpg" style="width:100%;height:400rpx;" alt>
        </div>
        <div class="shortInfo">
          <h2 class="name">{{data.Title.Value}}</h2>
          <p class="priceArea">
            <span class="price">{{data.PropertyPrice.Value}}</span>元/月
          </p>
          <p class="msgList" v-if="data.FirstTags.Value.length>0">
            <span class="msgItem" 
              v-for="(item,index) in data.FirstTags.Value" :key="index">
              {{item}}
              </span>
            <!-- <span class="msgItem">
              100m
              <span class="sup">2</span>
            </span>
            <span class="msgItem">3卡2独</span>
            <span class="msgItem">罗湖</span> -->
          </p>
          <p class="tipsList" v-if="data.SecondTags.Value.length>0">
            <span v-for="(item,index) in data.SecondTags.Value" :key="index">{{item}}</span>
            <!-- <span>可使用公司资质</span>
            <span>可挂牌</span> -->
          </p>
          <p class="purpose">
            <span class="label">意向拼购方行业</span>
            <span>{{data.GladBuyerTrade.Value}}</span>
          </p>
        </div>
        <!-- 公司简介 -->
        <div class="comAbout pt15">
          <!-- 商铺详情的 -->
          <div class="weui-cells noBorder__weui-cells column__weui-cells mt0">
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">公司名称</div>
                <div class="weui-cell__bd">{{data.Company.Value}}</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">成立时间</div>
                <div class="weui-cell__bd">{{data.SetUpDate.Value}}</div>
              </div>
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">物业形式</div>
                <div class="weui-cell__bd">{{data.PropertySort.Value}}</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">计划购买面积</div>
                <div class="weui-cell__bd">
                  <span>
                    {{data.PlanBuyArea.Value}}
                    <!-- <span class="sup">2</span> -->
                  </span>
                </div>
              </div>
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">购买预算</div>
                <div class="weui-cell__bd">{{data.BuyBudget.Value}}</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <!-- 区间价格 -->
                <div class="weui-cell__hd">成立时间</div>
                <div class="weui-cell__bd">{{data.SetUpDate.Value}}</div>
              </div>
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">是否装修</div>
                <div class="weui-cell__bd">{{data.IsTrim.Value}}</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">计划购买日期</div>
                <div class="weui-cell__bd">{{data.PlanBuyDate.Value}}</div>
              </div>
            </div>
          </div>
          <!-- 商铺详情的  end -->
          <!-- 设备详情的 -->
          <div class="weui-cells noBorder__weui-cells column__weui-cells mt0" style="display:none">
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">{{data.SetUpDate.Text}}</div>
                <div class="weui-cell__bd">{{data.SetUpDate.Value}}</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">{{data.SetUpDate.Text}}</div>
                <div class="weui-cell__bd">{{data.SetUpDate.Value}}</div>
              </div>
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">{{data.SetUpDate.Text}}</div>
                <div class="weui-cell__bd">{{data.SetUpDate.Value}}</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">{{data.SetUpDate.Text}}</div>
                <div class="weui-cell__bd">{{data.SetUpDate.Value}}</div>
              </div>
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">{{data.SetUpDate.Text}}</div>
                <div class="weui-cell__bd">{{data.SetUpDate.Value}}</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">{{data.SetUpDate.Text}}</div>
                <div class="weui-cell__bd">{{data.SetUpDate.Value}}</div>
              </div>
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">{{data.SetUpDate.Text}}</div>
                <div class="weui-cell__bd">{{data.SetUpDate.Value}}</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">设备使用区域</div>
                <div class="weui-cell__bd">龙华</div>
              </div>
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">计划购买日期</div>
                <div class="weui-cell__bd">2019.05.15</div>
              </div>
            </div>
          </div>
          <!-- 设备详情的  end -->
          <!-- 公司简介 -->
          <div class="about">
            <div class="item">
              <h3 class="title label">{{data.Synopsis.Text}}</h3>
              <div
                class="con"
              >{{data.Synopsis.Value}}</div>
            </div>
            <div class="item">
              <h3 class="title label">{{data.PlanBuyDate.Text}}</h3>
              <div class="con">{{data.PlanBuyDate.Value}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 商铺详情、办公室详情才有的 -->
      <div class="section pt10 pb10">
        <div class="weui-cells noBorder__weui-cells column__weui-cells mt0">
          <div class="group flex flex-flow" >
            <div class="weui-cell firm" v-for="(item,index) in data.CompanyInfo.Value" :key="index">
                <div class="weui-cell__hd">{{item.Text}}</div>
                <div class="weui-cell__bd">{{item.Value}}</div>
            </div>
            <!-- <div class="weui-cell flex1">
                <div class="weui-cell__hd">{{item.Text}}</div>
                <div class="weui-cell__bd">{{item.Value}}</div>
            </div> -->
          </div>
        </div>
      </div>
      <!-- 商铺详情、办公室详情才有的 end -->
      <!-- 拼租条件 -->
      <div class="section pd15">
        <h3 class="title detail__title">拼租条件表明</h3>
        <p class="tipsList border__tipsList">
          <span>网络</span>
          <span>打印机</span>
          <span>会议室</span>
          <span>前台</span>
          <span>电梯</span>
        </p>
      </div>
      <!-- 拼租条件  end -->
      <div class="section">
        <div class="locationBox pd15">
          <h3 class="title detail__title">地理位置</h3>
          <div class="flex flexAlignCenter">
            <div class="flex1">
              <p class="address">{{data.CompanyDoorNum.Value}}</p>
              <!-- <p class="space">距离宝华站地铁站357米</p> -->
            </div>
            <img src="/static/images/icons/map.jpg" class="map" alt>
          </div>
        </div>
      </div>
      <!-- 短租的个人主页 -->
      <div class="section pd15">
        <h3 class="title detail__title">个人主页</h3>
        <div class="perInfo">
            <img src="/static/images/of/tx.jpg" class="tx" alt="">
            <p class="name">何洛洛</p>
        </div>
        <div class="contactList clear">
            <div class="item"><img src="/static/images/icons/con_weixin.jpg" class="icon" alt="">微信账号</div>
            <div class="item"><img src="/static/images/icons/con_tel.jpg" class="icon" alt="">手机号码</div>
            <div class="item"><img src="/static/images/icons/con_email.jpg" class="icon" alt="">邮箱</div>
            <div class="item"><img src="/static/images/icons/con_address.jpg" class="icon" alt="">布吉区-布吉关</div>
        </div>
      </div>
      <!-- 短租的个人主页  end -->
      <!-- 个人主页不同的样式 -->
      <div class="section pd15">
        <h3 class="title detail__title">个人主页</h3>
        <div class="perInfo flex level__perInfo flexAlignCenter">
            <img src="/static/images/of/tx.jpg" class="tx" alt="">
            <div class="info flex1">
               <p class="name">何洛洛</p>
               <p class="serviceTime">服务时间：07：00-23：00</p>
            </div>
            <img src="/static/images/icons/con_tel.jpg" class="icon_tel" alt="">
        </div>
      </div>
      <!-- 个人主页不同的样式  end -->
      <!-- 办公室描述 -->
      <div class="section">
        <div class="locationBox pd15">
          <h3 class="title detail__title">办公室描述</h3>
          <div class="con">
            <p>1、交通：距离地铁2号线科苑站约221米交通四通八达，畅通无阻;员工， 上下班在地理位置.上没有任何困扰</p>
            <p>2、装修：精装修、可分割</p>
            <p>3、管理费空调费: 27.5元/m</p>
            <p>4、家私：可商量带家私事宜</p>
          </div>
        </div>
      </div>
      <!-- 办公室描述 end -->
    </div>
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
          <div class="btn flex1 bg_ed3435 color_fff" @click="addFre">加好友</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {post} from '@/utils/index'
export default {
  data(){
    return {
      id:411,
      userId:'',
      token:'',
      IsCollection:false,
      showData:false,
      data:{
      },
    }
  },
  onLoad() {
    this.setBarTitle();
    if(this.$root.$mp.query.id){
      this.id = this.$root.$mp.query.id
    }
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
    onIsCollection(){
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
</style>