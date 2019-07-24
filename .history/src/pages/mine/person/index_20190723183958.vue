<template>
  <div class="pageContent" v-if="hasData">
    <div class="storeDetail">
       <div class="pagePerson pall">
          <p class="editinfo" @tap="editInfo" v-if="type==1" style="color:#9A9A9A">编辑</p>
          <div class="legalInfo flex">
            <img :src="personInfo.Avatar" class="tx" alt style="border-radius:50%">
            <div class="info flex1">
              <div>
                <span class="name" style="color:#1a1a1a">{{personInfo.Name}}</span>
                <img src="/static/images/icons/v.png" class="icon_attestation" alt v-if="personInfo.IsAUT">
                <span class="lookAttestation" @tap="seeVertical" v-if="type==1"><img src="/static/images/icons/attestationTag.png" class="icon_attestationTag" alt="">查看认证</span>
              </div>
              <p class="msgList list_itt">
                <span class="msgItem font22" v-if="personInfo.Trade">{{personInfo.Trade}}</span>
                <span class="msgItem font22" v-else>未透漏行业</span>
                <span class="msgItem font22" v-if="personInfo.WorkLife">{{personInfo.WorkLife}}</span>
                <span class="msgItem font22" v-else>未透漏经验</span>
              </p>
              <block v-if="companyInfo.length>0">
                <div class="msgList flex list_itt" v-for="(item,key) in companyInfo" :key="key">
                  <p class="msgList">
                    <span class="msgItem font22" v-if="item.Job">{{item.Job}}</span>
                    <span class="msgItem font22" v-else>未透漏职位</span>
                    <span class="msgItem font22" v-if="item.Name">{{item.Name}}</span>
                    <span class="msgItem font22" v-else>未透漏公司</span>
                  </p>
                  <span class="attestationStatus color_white font22 my_attion"  @tap="editCompany(item.Id)" v-if="type==1">
                    <span> 编辑</span>
                  </span>
                  <span class="attestationStatus color_white font22 my_attion" @tap="changeCompany"  v-if="type==1">
                    <span > 切换</span>
                  </span>
                  <span class="attestationStatus color_white font22 my_attion" v-if="item.IsAUT">
                    <span class="icon-gou"></span> {{item.IsAUT}}
                  </span>
                  <div class="msgList flex" v-if="companyInfo.length==0">
                    <p class="msgList">
                      未透露公司
                    </p>
                    <span class="attestationStatus color_white font22 my_attion " @tap="companyVertical">
                      <span class="icon-gou"></span> 去认证
                    </span>
                  </div>
                </div>
              </block>
              <!-- <p class="msgList list_itt">
                <span class="msgItem" style="font-size:24rpx">个人简介：</span>
                <span class="msgItem2" style="font-size:24rpx;line-height:1.3" v-if="personInfo.WorkIdea">{{personInfo.WorkIdea}}</span>
                <span class="msgItem2" style="font-size:24rpx" v-else>主人很懒...什么也没留下</span>
              </p> -->
            </div>
          </div>
        </div>
        <block v-if="type==2">
        <div class="weui-cells noBorder__weui-cells column__weui-cells" style="margin-bottom:20rpx" v-for="(item,skey) in companyInfo" :key="skey">
            <div class="group flex justifyContentBetween">
              <div class="weui-cell">
                <div class="weui-cell__hd">成立日期</div>
                <div class="weui-cell__bd" v-if="item.SetUpDate">{{item.SetUpDate}}</div>
                <div class="weui-cell__bd" v-else>无</div>
              </div>
              <div class="weui-cell">
                <div class="weui-cell__hd">人员规模</div>
                <div class="weui-cell__bd" v-if="item.StaffSize">{{item.StaffSize}}</div>
                <div class="weui-cell__bd" v-else>无</div>
              </div>
            </div>
            <div class="group flex justifyContentBetween">
              <div class="weui-cell">
                <div class="weui-cell__hd">办公面积</div>
                <div class="weui-cell__bd" v-if="item.OfficeArea">{{item.OfficeArea}}</div>
                <div class="weui-cell__bd" v-else>无</div>
              </div>
              <div class="weui-cell">
                <div class="weui-cell__hd">地区</div>
                <div class="weui-cell__bd" v-if="item.NativePlace">{{item.NativePlace}}</div>
                <div class="weui-cell__bd" v-else>无</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">办公地址</div>
                <div class="weui-cell__bd" v-if="item.OfficeAddr">{{item.OfficeAddr}}</div>
                <div class="weui-cell__bd" v-else>无</div>
              </div>
            </div>
        </div>
        </block>
        <!--个人简介-->
         <div class="tagBox pd15 bg_fff" style="margin-bottom:20rpx">
          <div class="line flex flexColumn">
              <div class="flex justifyContentBetween">
                  <h3 class="fontBold" style="font-size:32rpx;line-height:1.5">个人简介</h3>
                    <p class="fontColor99" @tap="gotoPage(1)" v-if="type!=2">查看更多
                      <span class="icon-arrow arrow-right"></span>
                    </p>
              </div>
            </div>
            
          <div class="line flex flexColumn">
                <p v-if="personInfo.WorkIdea">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{personInfo.WorkIdea}}
                </p>
                <p v-else>
                  主人很懒...什么也没留下
                </p>
          </div>
      </div>
      <!-- 标签-->
      <div class="tagBox pd15 bg_fff">
          <div class="line flex flexColumn">
            <div class="flex justifyContentBetween"> 
                <h3 class="tagTile">资源标签</h3>
                <p class="fontColor99" @tap="gotoPage(0)" v-if="type!=2">编辑
                  <span class="icon-arrow arrow-right"></span>
                </p>
                <!-- v-if="personInfo.TagsResGood[0] && personInfo.TagsResKnow[0]" -->
            </div>
            <div class="flex mt10" >
                <div>我擅长</div>
                <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentStart flex1 tipsGray" v-if="personInfo.TagsResGood.length>0">
                  <span v-for="(item,tindex) in personInfo.TagsResGood" :key="tindex">{{item}}</span>
                </div>
                <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentStart flex1" v-else>
                  <span v-if="type==1" @tap="gotoPage(0)">请添加</span>
                  <span v-if="type==2">未添加</span>
                </div>
            </div>
            <div class="flex mt10" >
                <div>想认识</div>
                <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentStart flex1" v-if="personInfo.TagsResKnow.length>0">
                  <span v-for="(item,pindex) in personInfo.TagsResKnow" :key="pindex">{{item}}</span>
                </div>
                <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentStart flex1" v-else>
                  <span v-if="type==1" @tap="gotoPage(0)">请添加</span>
                  <span v-if="type==2">未添加</span>
                </div>
            </div>
          </div>
      </div>
       <!-- 标签-->
      <div class="tagBox pd15 mt10 bg_fff" style="margin-bottom:20rpx">
          <div class="line flex flexColumn">
            <div class="flex justifyContentBetween"> 
                <h3 class="tagTile">能力标签</h3>
                <p class="fontColor99" @tap="gotoPage(1)" v-if="type!=2">编辑
                  <span class="icon-arrow arrow-right"></span>
                </p>
                <!-- v-if="personInfo.TagsCapGood[0] && personInfo.TagsCapKnow[0]" -->
            </div>
            <div class="flex mt10" >
                <div>我擅长</div>
                <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentStart flex1 tipsGray" v-if="personInfo.TagsCapGood.length>0">
                  <span v-for="(item,cindex) in personInfo.TagsCapGood" :key="cindex">{{item}}</span>
                </div>
                <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentStart flex1" v-else>
                  <span v-if="type==1" @tap="gotoPage(1)">请添加</span>
                  <span v-if="type==2">未添加</span>
                </div>
            </div>
            <div class="flex mt10">
                <div>想认识</div>
                <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentStart flex1" v-if="personInfo.TagsCapKnow.length>0">
                  <span v-for="(item,sindex) in personInfo.TagsCapKnow" :key="sindex">{{item}}</span>
                </div>
                <div class="tipsList border__tipsList bg_active flex flexWrap justifyContentStart flex1" v-else>
                  <span v-if="type==1" @tap="gotoPage(1)">请添加</span>
                  <span v-if="type==2">未添加</span>
                </div>
            </div>
            
          </div>
      </div>
      <!-- 教育经历-->
      <div class="section" style="margin-top:20rpx">
        <div class="locationBox pd15">
          <h3 class="title detail__title fontBold">教育经历</h3>
          <div class="flex justifyContentBetween addpaddingtop" v-for="(item,aindex) in personInfo.EduList" :key="aindex">
            <div class="flex">
                <img src="/static/images/icons/jiaoyujl.jpg" alt="" class="addPro">
                <div style="margin-left:30rpx">
                    <p>{{item.School}}</p>
                    <p class="font_four flex">
                      <span class="mrr2">{{item.Major}}/{{item.Education}}</span>
                      <span>{{item.IntStart}}-{{item.IntEnd}}</span>
                    </p>
                </div>
            </div>
            <p class="fontColor99" @tap="editEdcu(1,item.Id)" v-if="type!=2">编辑
              <span class="icon-arrow arrow-right"></span>
            </p>
          </div>
          <div class="flex flexAlignCenter justifyContentCenter mt15" v-if="type==1" @tap="AddExperience(1)">
              <img src="/static/images/icons/add2.jpg" alt="" class="add_pic mrr2">
              <span>添加经历</span>
          </div>
          <div class="flex flexAlignCenter justifyContentCenter mt15" v-if="type==2&&personInfo.WorkList.length<=0">
              <span>未添加经历</span>
          </div>
        </div>
      </div>
      <!-- 工作经历-->
      <div class="section" style="margin-top:20rpx">
        <div class="locationBox pd15">
          <h3 class="title detail__title fontBold">工作经历</h3>
          <div class="flex justifyContentBetween addpaddingtop" v-for="(item,windex) in personInfo.WorkList" :key="windex">
              <div class="flex">
                <img src="/static/images/icons/gongzuojl.jpg" alt="" class="addPro">
                <div style="margin-left:30rpx">
                    <p>{{item.Company}}</p>
                    <p class="font_four flex">
                      <span class="mrr2">{{item.Job}}</span>
                      <span>{{item.IntStart}}-{{item.IntEnd}}</span>
                    </p>
                </div>
              </div>
              <p class="fontColor99" @tap="editEdcu(2,item.Id)" v-if="type!=2">编辑
                <span class="icon-arrow arrow-right"></span>
              </p>
          </div>
          <div class="flex flexAlignCenter justifyContentCenter mt15" v-if="type==1" @tap="AddExperience(2)">
              <img src="/static/images/icons/add2.jpg" alt="" class="add_pic mrr2">
              <span>添加经历</span>
          </div>
          <div class="flex flexAlignCenter justifyContentCenter mt15" v-if="type==2&&personInfo.WorkList.length<=0">
              <span>未添加经历</span>
          </div>
        </div>
      </div>
      <!--个人主页 -->
      <div class="section pd15 bg_fff" style="margin-top:20rpx" v-if="type==1">
        <h3 class="title detail__title fontBold">联系方式</h3>
        <div class="contactList2 clear">
            <div class="item">
              <p>
                  <img src="/static/images/icons/con_weixin.jpg" class="icon" alt="">
                  <span>微信</span>
              </p>
              <span v-if="personInfo.WeChatNum" v-html="personInfo.WeChatNum"></span>
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
      <!-- 公司介绍 -->
      <div class="section" v-if="type==2 && companyInfo[0].CompanyIntro.length>0" style="margin-top:20rpx">
        <div class="locationBox pd15 company">
            <h3 class="title detail__title">公司简介</h3>
            <div class="con">{{companyInfo[0].CompanyIntro}}</div>
        </div>
      </div>
      <!-- 公司理念 -->
      <div class="section" v-if="type==2 && companyInfo[0].CompanyCulture.length>0" style="margin-top:20rpx">
          <div class="locationBox pd15">
            <h3 class="title detail__title">公司理念</h3>
            <div class="con">{{companyInfo[0].CompanyCulture}}</div>
          </div>
      </div>
      <!--照片-->
      <div class="form-cells-item pall bg_fff" style="margin-top:20rpx" v-if="type==2&&companyInfo[0].CompanyPic[0].length>0" >
        <div class="flex justifyContentBetween">
              <h3 class="title detail__title fontBold">公司照片</h3>
          </div>
        <div class="form-cell-bd form-cell-img">
          <div class="upbtn" v-for="(item,pindex) in companyInfo[0].CompanyPic" :key="pindex">
            <img class="upimg" :src="item">
          </div>
          
        </div>
      </div>
    </div>
    
    <!-- 底部 -->
    <div class="ftBtn" v-if="type==2 && personInfo.Footer.IsHide==0">
      <div class="inner fixed bm0 flex">
        <div class="iconGroup flex flexAlignCenter">
          <div class="item flex1" @tap="onReport">
            <img src="/static/images/icons/jubao.jpg" alt>
            <p>举报</p>
          </div>
          <div class="item flex1" @tap="onIsCollection">
            <img v-if="!IsCollection" src="/static/images/icons/shoucang.png" alt>
            <img v-else src="/static/images/icons/shoucang-action.png" alt>
            <p>收藏</p>
          </div>
        </div>
        <div class="btns flex1 flex center">
          <div class="btn flex1 bg_ff952e color_fff" @tap="isVip('contant')" >极速联系</div>
          <div class="btn flex1 bg_ed3435 color_fff"  @tap="isVip('addFre')" v-if="IsAddFriend">加好友</div>
        </div>
      </div>
    </div>
    <!--弹层-->
    <div class="mask" v-if="isShowMask" catchtouchmove="true" @tap="cancle"></div>
    <div class="maskType boxSize" v-if="isShowMask" :class="showNoChange?'noParActive':''">
        <div class="flex">
              <span class="size" @tap="cancle">取消</span>
              <span class="title">{{masktitle}}</span>
              <span class="color size" @tap="subConfirm">确定</span>
        </div>
        <scroll-view :scroll-y="true" style="height:200rpx;" :style="showNoChange?'height:200rpx':''" class="showItem" @scrolltolower="loadMore">
          <div v-for="(item,index) in list" :key="index">
              <p :class="{'itemactive':statu == index}" @tap="chose(index)" style="margin-top:3rpx;">{{item.Name}}
              </p>
          </div>
        </scroll-view>
    </div> 
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
      type:0,//1-个人 2-他人
      Id:"",//他人的Id
      curPage: "",
      userId: "",
      token: "",
      personInfo:{},
      companyInfo:[],
      hasData:false,
      isShowMask:false,
      showNoChange:false,//控制是否选择高度
      masktitle:"",
      list:[],
      statu:0,
      companyId:"",
      IsCollection:false,
      IsAddFriend:false, //加好友
      IsContact:false,//极速联系
      addFriendId:"",//好友Id
      conFriendId:"",//极速联系Id
      ReportId:0,//举报他人的id
      menuAr:['/pages/mine/editMenTags/main?typeTips=1','/pages/mine/editMenTags/main?typeTips=2']
    }
  },
  onShow(){
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.type = this.$root.$mp.query.type
    if(this.$root.$mp.query.Id){  //进入他人主页传递的Id
       this.Id = this.$root.$mp.query.Id
    }
    // console.log(this.type)
    // this.Id = 10394
    // this.type = 2
    this.companyInfo = []
    this.list = []
    this.hasData = false
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
      console.log(this.type)
      let objUrl = ''
      let pramas = {}
      if(this.type==2){
        objUrl = 'User/OtherHomePage'
        pramas = {
          UserId: this.userId,
          Token: this.token,
          ShopId :this.Id
        }
      }else{
        objUrl = 'User/MyHomePage'
        pramas = {
          UserId: this.userId,
          Token: this.token,
        }
      }
      post(objUrl,pramas,this.curPage).then(res=>{
        console.log("Res:",res)
        if(res.code==0){
          if(res.data.Area){
            this.$set(res.data,"Area",res.data.Area.split(',').slice(1).join('-'))
          }
          this.$set(res.data,"Trade",res.data.Trade.split(',').join(' '))
          if( res.data.TagsCapGood[0].length<=0){
              this.$set(res.data,"TagsCapGood",res.data.TagsCapGood.splice(1))
          }
          if( res.data.TagsCapKnow[0].length<=0){
              this.$set(res.data,"TagsCapKnow",res.data.TagsCapKnow.splice(1))
          }
          if( res.data.TagsResGood[0].length<=0){
              this.$set(res.data,"TagsResGood",res.data.TagsResGood.splice(1))
          }
          if( res.data.TagsResKnow[0].length<=0){
              this.$set(res.data,"TagsResKnow",res.data.TagsResKnow.splice(1))
          }
          this.personInfo = res.data
          this.hasData = true
          if(this.type==2){
            var arr = Object.keys(res.data.Footer.Value);
            if(arr.length > 0){
              this.IsCollection = res.data.Footer.Value.IsCollection.Value
              this.IsAddFriend = res.data.Footer.Value.IsAddFriend.Value
              this.IsContact = res.data.Footer.Value.IsContact.Value
              this.addFriendId = res.data.Footer.Value.IsAddFriend.FriendId
              this.conFriendId = res.data.Footer.Value.IsContact.TempId
              this.ReportId = res.data.Footer.Value.IsReportId.Value
            }
          }
          if(res.data.CyList.length>1){
            this.companyInfo.push(this.personInfo.CyList[0])
           }else{
             this.companyInfo = res.data.CyList
           }
          console.log(this.companyInfo)
        }
      })
    },
    //查看个人认证
    seeVertical(){
      wx.navigateTo({url:"/pages/mine2/myVertical/main?verticalType=1"})
    },
    //编辑公司信息
    editCompany(id){
      console.log(id)
      wx.navigateTo({url:"/pages/mine2/continueCompany/main?id="+id})
    },
    //添加经验
    AddExperience(n){
      wx.navigateTo({url:"/pages/mine/editExperience/main?tip="+n})
    },
    //编辑经验
    editEdcu(n,id){
      wx.navigateTo({url:"/pages/mine/editExperience/main?tip="+n+"&Id="+id})
    },
    //切换公司
    changeCompany(){
      this.isShowMask = true
      this.showNoChange = true
      this.masktitle = '请选择公司'
      this.list = this.personInfo.CyList
    },
    chose(e){
      this.statu = e
    },
    cancle(){
      this.isShowMask = false
      this.showNoChange = false
      this.list =[]
      this.statu = 0
    },
    subConfirm(){
      for(let i in this.list){
           if(i*1 == this.statu){
              if(this.masktitle =='请选择公司'){
                  let  _companyInfo = []
                   _companyInfo.push(this.list[i])
                  this.companyInfo=Object.assign(this.companyInfo, _companyInfo);
                  console.log(this.companyInfo)
              }
           }
      }
      this.isShowMask = false
      this.showNoChange = false
      this.list =[]
      this.statu = 0
    },
    //收藏
    async onIsCollection(){
      // Type:0://产品 1://商家
      const params = {
        UserId:this.userId,
        Token:this.token,
        Type:1,
        Id:this.Id 
      }
      if(!this.IsCollection){
        let res = await post('User/AddCollections',params)
        if(res.code==0){
           wx.showToast({title:'收藏成功'})
        }else{
          wx.showToast({
            title:res.msg,
            icon:"none"
            })
          return false
        }
       
      }else{
        let res = await post('User/ReCollections',params)
        if(res.code==0){
           wx.showToast({title:'取消收藏成功'})
        }else{
          wx.showToast({
            title:res.msg,
            icon:"none"
            })
          return false
        }
      }
      // const res = await post('User/AddCollections',params)
      this.IsCollection = !this.IsCollection
    },
    //举报
    onReport(){
       wx.navigateTo({url:"/pages/mine2/report/main?ReportId="+this.ReportId})
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
    //极速联系
    contant(){
      wx.navigateTo({url:`/pages/messages/chatRoom/main?FriendId=${this.addFriendId}&TempId=${this.conFriendId}`})
      
    },
    //加好友
    addFre(){
      //IsVip,1-有会员卡 0-无会员卡
      //GetNum, 可请求加好友。剩余次数
      //IsGetNum, 1-有次数限制 0-无次数限制

      //条件IsVip==1&&IsGetNum==0[可发送加好友请求]，
      //条件IsVip==1&&IsGetNum==1&&GetNum>0[可发送加好友请求]，
      //条件IsVip==1&&IsGetNum==1&&GetNum<1
      //[需要弹出提示加好友次数用完了，
      //续费会员卡或购买更高级会员卡，确定是否，跳转购买会员卡页面]，
      //条件IsVip==0[需要弹出提示购买会员卡，确定是否，跳转购买会员卡页面]，
      wx.navigateTo({url:"/pages/messages/addFre/main?FriendId="+this.addFriendId})
     
    },
    //认证公司
    companyVertical(){
      wx.navigateTo({url:'/pages/mine2/verticalCompany/main'})
    }
    

  },
  // onUnload(){
  //   wx.reLaunch({
  //     url:"/pages/my/main"
  //   })

  // }
};
</script>
<style lang="scss" scoped>
.pagePerson{
  background:#E6E6E6;
}
.storeNowrap .storeList .item,
.storeNowrap .storeList .pictrueAll img {
  width: 200rpx !important;
  height: 200rpx !important;
}
.color_white{
    font-size: 22rpx!important;
    color: #ff952e!important;
    border:1rpx solid #ff9325!important
}
.group{
  padding:0;
  font-size:24rpx;
}
.msgItem,.msgItem2{
  padding:0 4rpx;
  border-left: none;
  color:#9A9A9A
}
.msgItem:last-child{
  border-left: 1px solid #9A9A9A;
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
// .icon-gou{
//   &::before {
//         border-left: 2px solid #fff;
//         border-bottom: 2px solid #fff;
//     }
// }
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
  margin-left:15rpx;
  span{
    width:19%;
    font-size:22rpx;
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
.maskType {
    background: #fff;
    width: 100%;
    height: 600rpx;
    padding: 30rpx 0;
    bottom: 0!important;
    position: fixed;
    z-index: 999;
    p {
        padding: 15rpx 30rpx;
        text-align:center;
    }
    .flex {
        justify-content: space-between;
        border-bottom: 1rpx solid #f2f2f2;
        padding: 20rpx;
        font-weight: 400;
        font-size: 30rpx;
        .color {
            color: #ff2925
        }
        .size {
            font-size: 26rpx;
        }
        .title {
            font-weight: bold;
        }
    }
    .itemactive {
        background: #ff2925;
        color: #fff
    }
}
.noParActive{
  height:320rpx!important;
}
.lookAttestation {
  display:inline-flex;
  align-items:center
}
.list_itt{
  margin-top:15rpx;
}
.my_attion{
  height:26rpx!important;
  line-height:26rpx!important;
  padding:3rpx 10rpx 3rpx 5rpx!important;
  margin-left:20rpx!important
}
.addpaddingtop{
  padding-top: 20rpx;
}

</style>