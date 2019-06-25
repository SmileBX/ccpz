<template>
  <div class="pageContent pageVertical">
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell_bd">
          <p class="txt">企业名称</p>
        </div>
        <input type="text" v-model="name" placeholder="请输入企业名称">
      </div>
      <div class="weui-cell">
        <div class="weui-cell_bd">
          <p class="txt">企业注册号</p>
        </div>
        <input type="text" v-model="regNum" placeholder="请输入企业注册号">
      </div>
      <div class="weui-cell">
        <div class="weui-cell_bd">
          <p class="txt">法人姓名</p>
        </div>
        <input type="text" v-model="legalPerson" placeholder="请输入法人姓名">
      </div>
      <div class="weui-cell">
        <div class="weui-cell_bd">
          <p class="txt">法人身份证号</p>
        </div>
        <input type="text" v-model="idCard" placeholder="请输入法人身份证号">
      </div>
    </div>
    <!--上传身份证-->
    <div class="uploadBox bg_fff mt10">
      <div>
        <p class="font30 fontBold company_pic_title" style="padding:30rpx 30rpx 0;margin-bottom:0;">身份证照</p>
        <div class="idendityPic flex justifyContentBetween">
          <div class="imgBox">
            <img
              @click="upLoadImg(1)"
              v-if="idCardPositive=='' "
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
              v-if="idCardNegative=='' "
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
      </div>
      <!--企业-->
      <div style="padding:0 30rpx">
        <!--企业上传营业执照-->
        <div class="companyPic">
          <p class="font30 fontBold company_pic_title">营业执照</p>
          <div class="imgBox">
            <img
              @click="upLoadImg(3)"
              v-if="businessLicense == '' "
              src="/static/images/icons/card_com.jpg"
              alt
              class="company_pic"
            >
            <img v-else :src="businessLicense" alt class="company_pic">
            <img
              v-if="businessLicense"
              src="/static/images/icons/cancle.png"
              @click="delImg(3)"
              class="icon-del"
              alt
            >
          </div>
        </div>
        <!--企业上传其他照片-->
        <div class="otherPic">
          <p class="font30 fontBold company_pic_title">其他资质</p>
          <div class="flex">
            <div class="imgBox">
              <img
                @click="upLoadImg(4)"
                v-if="!otherSeniority"
                src="/static/images/icons/uppic.jpg"
                alt
                class="up_pic"
              >
              <img v-else :src="otherSeniority" alt class="up_pic">
              <img
                v-if="otherSeniority"
                src="/static/images/icons/cancle.png"
                @click="delImg(4)"
                class="icon-del"
                alt
              >
            </div>
          </div>
        </div>
      </div>
      <!--企业end-->
    </div>
    <div class="ftBtn center">
      <div class="inner">
        <div class="btns">
          <div class="btn color_fff bg_ff952e" @click="btnSubmit">{{btnTxt}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { post, toLogin, getCurrentPageUrlWithArgs,trim } from "@/utils";
import { pathToBase64 } from "@/utils/image-tools";
export default {
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    if(this.$root.$mp.query.id && this.$root.$mp.query.id !==""){
      console.log("fdddddddddddddddddddddddddddddddddd")
      this.btnTxt = "保存";
      this.id = parseInt(this.$root.$mp.query.id);
      //获取对应的企业认证信息
      this.UserBusinessAuthxq();
    }
  },
  data() {
    return {
      userId: "",
      token: "",
      curPage: "",
      btnTxt:"下一步",
      id:"",  //企业认证id
      name: "", //企业名称
      regNum: "", //企业注册号,
      legalPerson: "", //法人
      idCard: "", //法人身份证号
      idCardPositive: "", //身份证正面
      idCardNegative: "", //身份证反面
      businessLicense: "", //营业执照
      otherSeniority: "" //其他资质
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "认证新企业"
      });
    },
    valOther() {
      //认证的校验
      if (trim(this.name) == "") {
        wx.showToast({
          title: "请输入企业名称!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (trim(this.regNum) == "") {
        wx.showToast({
          title: "请输入企业注册号!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (trim(this.legalPerson) == "") {
        wx.showToast({
          title: "请输入法人姓名!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (trim(this.idCard) == "") {
        wx.showToast({
          title: "请输入法人身份证号!",
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
      if (trim(this.businessLicense) == "") {
        wx.showToast({
          title: "请上传营业执照!",
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
          if (index == 3) {
            _this.businessLicense = imgPathArr;
          }
          if (index == 4) {
            _this.otherSeniority = imgPathArr;
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
      if (index == 3) {
        this.businessLicense = "";
      }
      if (index == 4) {
        this.otherSeniority = "";
      }
    },
    async base64Img(path) {
      const base64Arr = await pathToBase64(path);
      return base64Arr;
    },
    async btnSubmit() {
      //提交下一步
      if (this.valOther()) {
        console.log("竟来了");
        let idcardPositive = await this.base64Img(this.idCardPositive);
        let idcardNegative = await this.base64Img(this.idCardNegative);
        let businessLicense = await this.base64Img(this.businessLicense);
        let otherSeniority ="";
        if(this.otherSeniority){
          otherSeniority = await this.base64Img(this.otherSeniority);
        }
        if(this.id && this.id !==""){
          this.UserBusinessAuthEdit(idcardPositive,idcardNegative,businessLicense,otherSeniority);
        }else{
           this.UserBusinessAuth(idcardPositive,idcardNegative,businessLicense,otherSeniority);
        }
        
      }
    },
    UserBusinessAuth(
      idcardPositive,
      idcardNegative,
      businessLicense,
      otherSeniority
    ) {
      let that = this;
      post(
        "User/UserBusinessAuth",
        {
          UserId: that.userId,
          Token: that.token,
          Company: {
            Name: that.name,
            RegNum: that.regNum,
            LegalPerson: that.legalPerson,
            Idcard: that.idCard,
            IdcardPositive: idcardPositive,
            IdcardNegative: idcardNegative,
            BusinessLicense: businessLicense,
            OtherSeniority: otherSeniority
          }
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          wx.showToast({
            title: "提交资料成功",
            icon: "none",
            duration: 1500,
            success:function(){
              setTimeout(() => {
                wx.redirectTo({
                  url: '/pages/mine2/continueCompany/main?id='+res.data.Id
                })
              },1500)
            }
          });
        }
      });
    },
    UserBusinessAuthxq(){  //获取对应的企业认证详情
      let that = this;
      post("User/UserBusinessAuthxq",{
        UserId:that.userId,
        Token:that.token,
        Id:that.id
      },that.curPage).then(res => {
        if(res.code===0){
          that.name = res.data.Name;
          that.regNum = res.data.RegNum;
          that.legalPerson = res.data.LegalPerson;
          that.idCard = res.data.Idcard;
        }
      })
    },
    UserBusinessAuthEdit(idcardPositive,
      idcardNegative,
      businessLicense,
      otherSeniority){  //编辑对应的企业认证
      let that = this;
      post("User/UserBusinessAuthEdit",{
        UserId:that.userId,
        Token:that.token,
        Company:{
           Id:that.id,
          Name: that.name,
          RegNum: that.regNum,
          LegalPerson: that.legalPerson,
          Idcard: that.idCard,
          IdcardPositive: idcardPositive,
          IdcardNegative: idcardNegative,
          BusinessLicense: businessLicense,
          OtherSeniority: otherSeniority
        }
      },that.curPage).then(res => {
        if (res.code === 0) {
          wx.showToast({
            title: "提交修改资料成功！",
            icon: "none",
            duration: 1500,
            success:function(){
              setTimeout(() => {
                wx.redirectTo({
                  url:"/pages/mine2/myVertical/main?verticalType=2"
                })
              },1500)
            }
          });
        }
      })
    }
  }
};
</script>
<style lang='scss' scoped>
.weui-cells .weui-cell::before {
  display: block;
}
.btn_box {
  .btnSub {
    width: 630rpx;
  }
}
.pageVertical .weui-cell {
  font-size: 30rpx;
}
.pageVertical .companyPic .company_pic {
  width: 690rpx;
}
.pageVertical .idendityPic .inendity_pic{
  width:320rpx;
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
.ftBtn {
  padding: 30rpx;
}
.ftBtn .btn{
  border-radius: 16rpx;
}
</style>