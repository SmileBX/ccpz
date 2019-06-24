<template>
  <div class="pageContent">
    <div class="storeDetail">
       <div class="pagePerson pall">
          <p class="editinfo" @tap="editInfo">编辑</p>
          <div class="legalInfo flex">
            <img :src="personInfo.Avatar" class="tx" alt style="border-radius:50%">
            <div class="info flex1">
              <div style="margin-bottom:16rpx;">
                <span class="name" style="color:#fff">{{personInfo.Name}}</span>
                <img src="/static/images/icons/v.jpg" class="icon_attestation" alt v-if="personInfo.IsAUT">
                <span class="lookAttestation"><img src="/static/images/icons/attestationTag.png" class="icon_attestationTag" alt="" @tap="seeVertical">查看认证</span>
              </div>
              <p class="msgList">
                <span class="msgItem font22" v-if="personInfo.Trade">{{personInfo.Trade}}</span>
                <span class="msgItem font22" v-else>未透漏行业</span>
                <span class="msgItem font22" v-if="personInfo.WorkLife">{{personInfo.WorkLife}}</span>
                <span class="msgItem font22" v-else>未透漏经验</span>
              </p>
              <div class="msgList flex ">
                <p class="msgList">
                  <span class="msgItem font22" v-if="personInfo.CyList[0].job">{{personInfo.CyList[0].job}}</span>
                  <span class="msgItem font22" v-else>未透漏职位</span>
                  <span class="msgItem font22" v-if="personInfo.CyList[0].Name">{{personInfo.CyList[0].Name}}</span>
                  <span class="msgItem font22" v-else>未透漏公司</span>
                </p>
               <span class="attestationStatus color_white font22">
                  <span > 切换</span>
                </span>
                <span class="attestationStatus color_white font22" v-if="personInfo.CyList[0].IsAUT">
                  <span class="icon-gou"></span> 已认证
                </span>
                <span class="attestationStatus color_white font22">
                  <span> 编辑</span>
                </span>
              </div>
            </div>
          </div>
          
        </div>
        <div class="weui-cells noBorder__weui-cells column__weui-cells" style="margin-bottom:20rpx">
            <div class="group flex justifyContentBetween">
              <div class="weui-cell">
                <div class="weui-cell__hd">成立日期</div>
                <div class="weui-cell__bd">无</div>
              </div>
              <div class="weui-cell">
                <div class="weui-cell__hd">人员规模</div>
                <div class="weui-cell__bd">无</div>
              </div>
            </div>
            <div class="group flex justifyContentBetween">
              <div class="weui-cell">
                <div class="weui-cell__hd">办公面积</div>
                <div class="weui-cell__bd">无</div>
              </div>
              <div class="weui-cell">
                <div class="weui-cell__hd">地区</div>
                <div class="weui-cell__bd">无</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">办公地址</div>
                <div class="weui-cell__bd">无</div>
              </div>
            </div>
      </div>
      <!-- 标签-->
      <div class="tagBox pd15 mt10 bg_fff" style="margin-bottom:20rpx">
          <div class="line flex flexColumn">
            <div class="flex justifyContentBetween"> 
                <h3 class="tagTile">资源标签</h3>
                <p class="fontColor99" @tap="gotoPage(0)" v-if="personInfo.TagsResGood[0] && personInfo.TagsResKnow[0]">编辑
                  <span class="icon-arrow arrow-right"></span>
                </p>
            </div>
            <div class="flex mt10" >
                <div>我擅长</div>
                <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentEnd flex1 tipsGray" v-if="personInfo.TagsResGood[0]">
                  <span >美工</span>
                  <span >设计</span>
                  <span >文员</span>
                  <span >销售</span>
                </div>
                <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentEnd flex1" v-else>
                  <span>+添加</span>
                </div>
            </div>
            <div class="flex mt10" >
                <div>想认识</div>
                <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentEnd flex1" v-if="personInfo.TagsResKnow[0]">
                  <span>美工</span>
                  <span>设计</span>
                  <span>文员</span>
                  <span>销售</span>
                </div>
                <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentEnd flex1" v-else>
                  <span>+添加</span>
                </div>
            </div>
          </div>
      </div>
       <!-- 标签-->
      <div class="tagBox pd15 mt10 bg_fff" style="margin-bottom:20rpx">
          <div class="line flex flexColumn">
            <div class="flex justifyContentBetween"> 
                <h3 class="tagTile">能力标签</h3>
                <p class="fontColor99" @tap="gotoPage(1)" v-if="personInfo.TagsCapGood[0] && personInfo.TagsCapKnow[0]">编辑
                  <span class="icon-arrow arrow-right"></span>
                </p>
            </div>
            <div class="flex mt10" >
                <div>我擅长</div>
                <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentEnd flex1 tipsGray" v-if="personInfo.TagsCapGood[0]">
                  <span >美工</span>
                  <span >设计</span>
                  <span >文员</span>
                  <span >销售</span>
                </div>
                <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentEnd flex1" v-else>
                  <span>+添加</span>
                </div>
            </div>
            <div class="flex mt10">
                <div>想认识</div>
                <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentEnd flex1" v-if="personInfo.TagsCapKnow[0]">
                  <span>美工</span>
                  <span>设计</span>
                  <span>文员</span>
                  <span>销售</span>
                </div>
                <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentEnd flex1" v-else>
                  <span>+添加</span>
                </div>
            </div>
            
          </div>
      </div>
      <!-- 教育经历-->
      <div class="section" style="margin-top:20rpx">
        <div class="locationBox pd15">
          <h3 class="title detail__title fontBold">教育经历</h3>
          <div class="flex justifyContentBetween">
            <div class="flex">
                <img src="/static/images/icons/jiaoyujl.jpg" alt="" class="addPro">
                <div style="margin-left:30rpx">
                    <p>九江学院</p>
                    <p class="font_four flex">
                      <span class="mrr2">本科/应用计算机技术</span>
                      <span>2005-2008</span>
                    </p>
                </div>
            </div>
            <p class="fontColor99">编辑
              <span class="icon-arrow arrow-right"></span>
            </p>
          </div>
          <div class="flex flexAlignCenter justifyContentCenter mt15">
              <img src="/static/images/icons/add2.jpg" alt="" class="add_pic mrr2">
              <span >添加经历</span>
          </div>
        </div>
      </div>
      <!-- 工作经历-->
      <div class="section" style="margin-top:20rpx">
        <div class="locationBox pd15">
          <h3 class="title detail__title fontBold">工作经历</h3>
          <div class="flex justifyContentBetween">
              <div class="flex">
                <img src="/static/images/icons/jiaoyujl.jpg" alt="" class="addPro">
                <div style="margin-left:30rpx">
                    <p>腾讯科技</p>
                    <p class="font_four flex">
                      <span class="mrr2">技术总监</span>
                      <span>2005-至今</span>
                    </p>
                </div>
              </div>
              <p class="fontColor99">编辑
                <span class="icon-arrow arrow-right"></span>
              </p>
          </div>
          <div class="flex flexAlignCenter justifyContentCenter mt15">
              <img src="/static/images/icons/add2.jpg" alt="" class="add_pic mrr2">
              <span>添加经历</span>
          </div>
        </div>
      </div>

      <!--个人主页 -->
      <div class="section pd15 bg_fff" style="margin-top:20rpx">
        <h3 class="title detail__title fontBold">联系方式</h3>
        <div class="contactList2 clear">
            <div class="item">
              <p>
                  <img src="/static/images/icons/con_weixin.jpg" class="icon" alt="">
                  <span>微信</span>
              </p>
              <span v-if="personInfo.WeChatNum">{{personInfo.WeChatNum}}</span>
              <span v-else>未填写</span>
            </div>
            <div class="item">
              <p>
                <img src="/static/images/icons/con_tel.jpg" class="icon" alt="">
                <span>电话</span>
              </p>
              <span v-if="personInfo.ContactsTel">{{personInfo.ContactsTel}}</span>
              <span v-else>未填写</span>
            </div>
            <div class="item">
              <p>
                  <img src="/static/images/icons/con_email.jpg" class="icon" alt="">
                  <span>邮箱</span>
              </p>
              <span v-if="personInfo.Email">{{personInfo.Email}}</span>
              <span v-else>未填写</span>
            </div>
            <div class="item">
              <p>
                  <img src="/static/images/icons/con_address.jpg" class="icon" alt="">
                  <span>地址</span>
              </p>
              <span v-if="personInfo.Area">{{personInfo.Area}}</span>
              <span v-else>未填写</span>
            </div>
        </div>
      </div>
      
    </div>
    <!-- 底部 -->
    <!-- <div class="ftBtn">
      <div class="inner fixed bm0 flex">
        <div class="btns flex1 flex center">
          <div class="btn flex1 bg_ff952e color_fff">极速联系</div>
          <div class="btn flex1 bg_ed3435 color_fff">加好友</div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import { post, valPhone, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
export default {
  onLoad() {
    this.setBarTitle();
  },
  data(){
    return {
      curPage: "",
      userId: "",
      token: "",
      personInfo:{},
      menuAr:['/pages/mine/tags/main?typeTips=1','/pages/mine/tags/main?typeTips=2']
    }
  },
  onShow(){
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.getMyHomePage()
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "基本信息"
      });
    },
    //编辑个人基本资料
    editInfo(){
      wx.navigateTo({
        url:"/pages/mine/editInfo/main"
      })
    },
    //编辑标签
    gotoPage(index){
      wx.navigateTo({url:this.menuAr[index]})
    },
    getMyHomePage(){
      post('User/MyHomePage',{
        UserId: this.userId,
        Token: this.token,
      },this.curPage).then(res=>{
        console.log("Res:",res)
        if(res.code==0){
          this.$set(res.data,"Area",res.data.Area.split(',').slice(1).join('-'))
          this.$set(res.data,"Trade",res.data.Trade.split(',').join(' '))
          this.personInfo = res.data
          console.log(res.data.TagsCapKnow.length)
        }
      })
    },
    //查看个人认证
    seeVertical(){
      wx.navigateTo({url:"/pages/mine2/myVertical/main"})
    }

  }
};
</script>
<style lang="scss" scoped>
.pagePerson{
  background:#ff9325
}
.storeNowrap .storeList .item,
.storeNowrap .storeList .pictrueAll img {
  width: 200rpx !important;
  height: 200rpx !important;
}
.group{
  padding:0;
  font-size:24rpx;
}
.msgItem{
  padding:0 4rpx;
  border-left: none;
  color:#ffff
}
.msgItem:last-child{
  border-left: 1px solid #fff;
}
.weui-cells{
  padding:20rpx 50rpx;
  margin:0
}
.weui-cell{
  padding:0;
}
.weui-cell:nth-child(2){
  margin-left:10rpx;
  text-align:right
}
.section {
  margin-bottom:0
}
.editinfo{
  color:#fff;
  font-size:24rpx;
  text-align:right;
}
.attestationStatus{
  border:1rpx solid #fff;
  padding:5rpx;

}
.icon-gou{
  &::before {
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
    }
}
.contactList2 {
    font-size: 30rpx;
    margin-top: 10rpx;
    .item {
        width: 100%;
        padding: 12rpx 0;
        display: flex;
        justify-content: space-between;
    }
    .icon {
        width: 41rpx;
        height: 41rpx;
        vertical-align: middle;
        margin-right: 10rpx;
    }
}
.tipsList{
  width:100%;
  span{
    width:19%;
    font-size:24rpx;
    text-align:center;
    background: #FFF7F0;
    border:none;
    color: #ff952e;
    margin-right:16rpx;
    margin-bottom: 18rpx;
  }
  span:nth-child(4n){
    margin-right:0
  }
}
.tipsGray{
  span{
    background:#f2f2f2;
    color:#9B9B9B;
  }
}
.addPro{
  width:60rpx;
  height:60rpx
}
.add_pic{
  width:30rpx;
  height:30rpx
}
 
</style>