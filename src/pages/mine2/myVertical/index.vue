<template>
  <div class="page pageVertical">
    <div class="bg_ff952e bg_certical"></div>
      <div class="card_bd bg_fff">
        <div class="avatarbox">
          <img :src="Avatar" alt class="avatar">
        </div>
        <div class="filterMenu" style="padding:0">
          <ul class="menu bbLi__menu bbNo__menu li_33 flex center flex justifyContentAround">
            <li :class="{'active':verticalType==1}" @click="shiftTab(1)">
              <div class="item">个人认证</div>
            </li>
            <li :class="{'active':verticalType==2}" @click="shiftTab(2)">
              <div class="item">企业认证</div>
            </li>
          </ul>
        </div>
        <!--个人模块-->
        <div v-if="verticalType==1">
          <block v-if="userVerticalStatus==0 || userReset">
            <div class="weui-cells">
              <div class="weui-cell">
                <div class="weui-cell_bd">
                  <p class="txt">姓名</p>
                </div>
                <input type="text" v-model="userRName" placeholder="请输入您的姓名">
              </div>
              <div class="weui-cell">
                <div class="weui-cell_bd">
                  <p class="txt">身份证号</p>
                </div>
                <input type="text" v-model="idCard" placeholder="请输入您的身份证号">
              </div>
            </div>
            <!--上传身份证-->
            <div class="idendityPic flex justifyContentBetween">
              <div class="imgBox">
                <img
                  @click="upLoadImg(1)"
                  v-if="!idCardPositive"
                  src="/static/images/icons/iden-top.jpg"
                  alt
                  class="inendity_pic"
                >
                <img v-else :src="idCardPositive" alt class="inendity_pic">
                <img
                  v-if="idCardPositive"
                  src="/static/images/icons/cancle.png"
                  @click="delImg(1)"
                  class="icon-del"
                  alt
                >
              </div>
              <div class="imgBox">
                <img
                  @click="upLoadImg(2)"
                  v-if="!idCardNegative"
                  src="/static/images/icons/iden-back.jpg"
                  alt
                  class="inendity_pic"
                >
                <img v-else :src="idCardNegative" alt class="inendity_pic">
                <img
                  v-if="idCardNegative"
                  src="/static/images/icons/cancle.png"
                  @click="delImg(2)"
                  class="icon-del"
                  alt
                >
              </div>
            </div>
            <div class="flex padwid">
              <input type="checkbox" :checked="agreen" @click="agreen=!agreen" class="checkbox-cart">
              <p>
                <span>已阅读并同意</span>
                <span class="fontColor99" @tap="gotoAreement">《认证服务协议》</span>
              </p>
            </div>
            <div class="ftBtn center">
              <div class="inner">
                <div class="btns" style="padding:30rpx;margin-top:60rpx;">
                  <div class="btn color_fff bg_ff9325" style="border-radius:10rpx;" @click="btnSubmit">提交</div>
                </div>
              </div>
            </div>
          </block>
          <block v-if="userVerticalStatus !==0 && hasVerticalInfo && !userReset">
            <div class="list" style="padding:40rpx 30rpx;">
              <div class="verticalItem">
                <div class="person_info">
                  <p class="name" style="line-height:1;">{{userVerticalInfo.UserRName}}</p>
                  <p class="certical">个人认证：
                    <span v-if="userVerticalInfo.IsAUT===1" >已认证</span>
                    <span v-if="userVerticalInfo.IsAUT===2">不通过<span class="btnReset" @tap="btnUserReset">重新填写</span>
                    </span>
                    <span v-if="userVerticalInfo.IsAUT===3">待审核<span class="btnReset" @tap="btnUserReset">重新填写</span></span>
                  </p>
                  <p class="tips">认证时间 : {{userVerticalInfo.AuthTime}}</p>
                  <p class="tips">认证方式 : 身份证实名认证</p>
                </div>
                <img src="/static/images/icons/card.jpg" alt class="icon_card">
              </div>
            </div>
          </block>
        </div>
        <!-- 公司模块 -->
        <div v-if="verticalType==2">
          <scroll-view class="listScroll"  scroll-y="true">
          <div class="list" style="padding:40rpx 30rpx;">
            <div class="verticalItem" v-for="(item,index) in list"  :key="index">
              <div class="delBtn" @click="delBtn(item.Id)"><img src="/static/images/cancle.png" alt=""></div>
              <div class="person_info">
                <p class="name com_name">{{item.Name}}</p>
                <p class="certical">企业认证：
                  <span v-if="item.IsAUT===1" >已认证</span>
                  <span v-if="item.IsAUT===2" style="color:#f10d0d">不通过<span class="btnReset" @tap="gotoAdd(item.Id)">重新填写</span></span>
                  <span v-if="item.IsAUT===3">待审核<span class="btnReset" @tap="gotoAdd(item.Id)">重新填写</span></span>
                </p>
                <p class="tips">认证时间 : {{item.AuthTime}}</p>
                <p class="tips">认证方式 : 营业执照认证</p>
              </div>
              <img src="/static/images/icons/comCard.png" alt class="icon_card">
            </div>
          </div>
          </scroll-view>
          <!--底部按钮-->
          <div class="ftBtn center" v-if="showBtn">
            <div class="inner" style=";width:auto;padding:30rpx;border-radius:0 0 16rpx 16rpx">
              <div class="btns">
                <div class="btn color_fff bg_ff9325" style="border-radius:10rpx;" @tap="gotoAdd(-1)"><img src="/static/images/icons/add3.png" class="btn-add">认证新企业</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  </div>
</template>
<script>
import { post, toLogin, getCurrentPageUrlWithArgs, trim } from "@/utils";
import { pathToBase64 } from "@/utils/image-tools";
export default {
  data() {
    return {
      verticalType: 1, //1:个人认证；2：企业认证
      agreen: true, //同意协议
      userVerticalStatus:"",  //个人认证的状态:0未认证 1已认证 2认证失败 3待审核
      userReset:false,  //个人认证失败的时候是否点击了重新填写的按钮
      hasVerticalInfo:false,
      userVerticalInfo:{},  //个人认证信息
      userId: "",
      token: "",
      curPage: "",
      Avatar:"",
      userRName: "", //真实姓名
      idCard: "", //身份证号码
      idCardPositive: "", //身份证正面
      idCardNegative: "", //身份证反面
      list: [],//企业认证列表(有各种状态的)
      showBtn:true,//是否展示新企业按钮 查看他人认证不展示
    };
  },
  onLoad() {
    this.setBarTitle();
      this.userReset = false;
  },
  onShow() {
    console.log(this.$store.state.personInfo);
    this.$store.state.personInfo.Avatar;
    console.log("PPPPPPPPPPPPPPPPPPPPPPPP")
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.list = [];
    if(wx.getStorageSync("userInfo")){
      this.Avatar = wx.getStorageSync("userInfo").avatarUrl;
    }
    if(this.$root.$mp.query.verticalType !=="" && this.$root.$mp.query.verticalType){
       this.verticalType = this.$root.$mp.query.verticalType;
    }
    console.log("认证类型："+this.verticalType);
    if(this.verticalType==1){   //个人认证
      this.UserOwnerAuthInfo();
    }
    if(this.verticalType==2){  //公司认证
      this.UserBusinessAuthInfo();
    }
    
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: '我的认证'
      });
    },
    delBtn(id){
      wx.showModal({
        title:'删除企业认证',
        content:'您确定要删除该条企业认证吗？',
        confirmText:"确定",
        cancelText:"取消",
        cancelColor:"#999999",
        confirmColor:"#ff952e",
        success:(result)=>{
          if (result.confirm){
            this.UserBusinessAuthDel(id)
          }
        }
      })
    },
    UserBusinessAuthDel(id) {
      //删除认证
      let that = this;
      post(
        "User/UserBusinessAuthDel",
        {
          UserId: that.userId,
          Token: that.token,
          Id: id
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          //删除成功
          wx.showToast({
            title: "删除成功",
            icon: "none",
            duration: 1500,
            success:function(){
              setTimeout(()=>{
                that.UserBusinessAuthInfo()
              },1500)
            }
          });
        }
      });
    },
    gotoAreement(){  //跳转到协议查看
      wx.navigateTo({
        url: '/pages/agreement/main?type=1'
      })
    },
    btnUserReset(){  //个人认证失败且点击了重新提交的时候
      console.log("点击了个人认证中的重新提交")
      this.userReset = true;
      this.UserOwnerAuthxq();
    },
    shiftTab(index) {
      //切换个人、公司的认证
      this.verticalType = index;
      if (index == 2) {
        this.list = [];
        console.log("ffdfdfdfd");
        this.UserBusinessAuthInfo();
      }
    },
    valOther() {
      //个人认证的校验
      if (trim(this.userRName) == "") {
        wx.showToast({
          title: "请输入您的姓名!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (trim(this.idCard) == "") {
        wx.showToast({
          title: "请输入身份证号!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.idCard)) {
        wx.showToast({
          title: "请输入正确的身份证号格式!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (trim(this.idCardPositive) == "") {
        wx.showToast({
          title: "请上传身份证正面照!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (trim(this.idCardNegative) == "") {
        wx.showToast({
          title: "请上传身份证反面照!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (!this.agreen) {
        wx.showToast({
          title: "请选择同意协议!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      return true;
    },
    upLoadImg(index) {
      //上传图片
      let _this = this;
      wx.chooseImage({
        //进入这里面的时候this发生了改变
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          let imgPathArr = res.tempFilePaths[0];
          if (index == 1) {
            _this.idCardPositive = imgPathArr;
          }
          if (index == 2) {
            _this.idCardNegative = imgPathArr;
          }
        }
      });
    },
    delImg(index) {
      if (index == 1) {
        this.idCardPositive = "";
      }
      if (index == 2) {
        this.idCardNegative = "";
      }
    },
    async base64Img(path) {
      const base64Arr = await pathToBase64(path);
      return base64Arr;
    },
    async btnSubmit() {
      //点击提交
      if (this.valOther()) {
        let that = this;
        let img1 = await that.base64Img(that.idCardPositive);
        let img2 = await that.base64Img(that.idCardNegative);
        that.UserOwnerAuth(img1, img2);
      }
    },
    UserOwnerAuth(idCardPositive, idCardNegative) {
      //个人认证
      let that = this;
      post(
        "User/UserOwnerAuth",
        {
          UserId: that.userId,
          Token: that.token,
          UserRName: that.userRName, //真实姓名
          Idcard: that.idCard, //身份证号码
          IdcardPositive: idCardPositive, //身份证正面
          IdcardNegative: idCardNegative //身份证反面
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          //提交资料成功
          wx.showToast({
            title: "提交资料成功",
            icon: "none",
            duration: 1500,
            success:function(){
              setTimeout(() => {
                that.userVerticalStatus = 3;
                that.userReset = false;
                wx.navigateTo({
                  url:'/pages/VerticalStatus/main'
                });
                that.UserOwnerAuthInfo();
              },1500)
            }
          });
        }
      });
    },
    UserBusinessAuthInfo() {
      //企业认证查询转态
      let that = this;
      post(
        "User/UserBusinessAuthInfo",
        {
          UserId: that.userId,
          Token: that.token
        },
        that.curPage
      ).then(res => {
        if (res.code === 0 && res.data.length > 0) {
          that.list = res.data;
        }
      });
    },
    UserOwnerAuthInfo(){  //个人认证查询状态
       let that = this;
       post("User/UserOwnerAuthInfo",{
         UserId:that.userId,
         Token:that.token
       },that.curPage).then(res => {
          if(res.code===0){
            that.userVerticalInfo = res.data;
            that.userVerticalStatus = that.userVerticalInfo.IsAUT;
            that.hasVerticalInfo = true;
          }
       })
    },
    async UserOwnerAuthxq(){  //重新填写个人认证中的详情
      let that = this;
      const res = await post("User/UserOwnerAuthxq",{
        UserId:that.userId,
        Token:that.token
      },that.curPage)
      
         if(res.code===0){
            that.userRName = res.data.UserRName; //真实姓名
            that.idCard = res.data.Idcard; //身份证号码
            that.idCardPositive =await pathToBase64(res.data.IdcardNegative);
            that.idCardNegative =await pathToBase64(res.data.IdcardPositive);
         }

    },
    gotoAdd(id){
      let objUrl = '';
      if(id == -1){
        objUrl = "/pages/mine2/verticalCompany/main";
      }else{
        objUrl = "/pages/mine2/verticalCompany/main?id="+id;
      }
      wx.navigateTo({
        url: objUrl
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.weui-cells .weui-cell::before {
  display: block;
}
.btn_box {
  .btnSub {
    width: 630rpx;
  }
}
.pageVertical {
  .card_bd {
    background: #fff !important;
  }
  .avatarbox {
    margin: 0;
    width: 120rpx;
    height: 120rpx;
    position: absolute;
    margin: 0;
    top: -60rpx;
    left: 50%;
    margin-left: -40rpx;
  }
}
.pageVertical .weui-cell .weui-cell_bd {
  width: 180rpx;
}
.pageVertical .card_bd {
  border-radius: 16rpx;
  padding-top: 60rpx;
  box-sizing: border-box;
}
.pageVertical .filterMenu {
  margin-top: 0;
}
.icon-del {
  width: 36rpx;
  height: 36rpx;
  position: absolute;
  top: -18rpx;
  right: -18rpx;
  z-index: 3;
}
.imgBox {
  position: relative;
}
.bg_ff9325{
  background: #ff9325;
}
.verticalItem {
  background: #ff9325;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  padding: 40rpx 30rpx 30rpx;
  border-radius: 16rpx;
  margin-bottom: 30rpx;
  position: relative;
}
.delBtn{
  position: absolute;
  width: 60rpx;
  height: 60rpx;
  top: -24rpx;
  right: -24rpx;
  img{
    width: 40rpx;
    height: 40rpx;
    display: block;
    margin: 10rpx;
  }
}
.card_bd {
  height: calc(100vh - 150rpx);
}
.btn .btn-add{
  width: 40rpx;
  height: 40rpx;
  vertical-align: middle;
  margin-right: 20rpx;
}
.verticalItem .com_name{
  font-size: 32rpx !important;
}
.person_info .certical{
  font-size: 26rpx;
  margin-top:30rpx;
}
.listScroll {
  height: calc(100vh - 440rpx);
}
.btnReset{
  background: #fff;
  color:#ff9325;
  border-radius: 100rpx;
  padding: 0 10rpx;
  margin-left:18rpx;
}
</style>