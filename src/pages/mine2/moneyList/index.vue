<template>
  <div class="pageContent">
    <div class="filterMenu bg_fff" style="padding:0;">
      <ul class="menu bbLi__menu bbNo__menu li_33 flex center">
        <li :class="{active:item.Id==aa}" v-for="(item,index) in menulist" :key="index" @click="tabMenu(item.Id)">
          <div class="item">{{item.Name}}</div>
        </li>
      </ul>
    </div>
    <scroll-view class="filterContent" scroll-y="true">
      <ul class="detailList" v-if="moneylist.length>0">
        <li v-for="(item,index) in moneylist" :key="index">
          <div class="flex">
            <div class="flex1">
              <p class="title text-overflow">{{item.Remark}}</p>
            </div>
            <p class="change right text_r" v-if="item.Change>0"><span class="changeNum add">+{{item.Change}}</span></p>
            <p class="change right text_r" v-if="item.Change<0"><span class="changeNum reduce">-{{item.Change}}</span></p>
          </div>
          <div class="flex">
            <div class="flex1">
              <p class="time">{{item.AddTime}}</p>
            </div>
            <p class="num right text_r">余额：{{item.After}}</p>
          </div>
        </li>
      </ul>
      <p
        style="text-align:center;font-size:30rpx;color:#666;padding:120rpx 20rpx 80rpx;"
        v-else
      >暂无数据</p>
    </scroll-view>
  </div>
</template>
<script>
import { post,getCurrentPageUrlWithArgs,formatTime} from "@/utils";
export default {
  data(){
    return {
      menulist:[
        {Id:0,Name:'全部'},{Id:1,Name:'充值记录'},{Id:2,Name:'提现记录'},{Id:3,Name:'购买记录'}
      ],
      curPage: "",
      userId: "",    
      token: "",
      aa:0,
      moneylist:[]
    }
  },
  onLoad() {
    
  },
  onShow(){
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.setBarTitle();
    this.getMoneyList()
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "收支明细"
      });
    },
    tabMenu(id){
      this.aa = id
      this.getMoneyList()
    },
    getMoneyList(){
      post('/Recharge/GetBudgetList',{
        UserId:this.userId,
        Token:this.token,
        Type:this.aa
      },this.curPage).then(res=>{
        // console.log("res:",res)
        if(res.code==0){
          this.moneylist = res.data
          res.data.map(item=>{
            let date= new Date(item.AddTime)
            let time = formatTime(date)
            item=Object.assign(item,{AddTime:time})
            // console.log(item.AddTime)
            this.$set(item,"AddTime",time.split(' ')[0].split('/').join('-')+" "+time.split(' ')[1].split(':').splice(0,2).join(':'))
            
          })
          
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.bbLi__menu{
  font-size: 32rpx;
  color: #333;
}
.filterContent{
  height: calc(100vh - 90rpx);
  background: #fff;
  margin-top:20rpx;
}
.text-overflow{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space :nowrap
}

</style>
