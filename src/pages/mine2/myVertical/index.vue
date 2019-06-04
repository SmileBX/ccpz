<template>
  <div class="page pageVertical">
    <div class="bg_ff952e bg_certical"></div>
    <div class="card_bd bg_fff">
      <div class="avatarbox">
        <img src="/static/images/of/ava.png" alt class="avatar">
      </div>
      <div class="filterMenu" style="padding:0">
        <ul class="menu bbLi__menu bbNo__menu li_33 flex center flex justifyContentAround">
          <li class="active">
            <div class="item">个人认证</div>
          </li>
          <li>
            <div class="item">企业认证</div>
          </li>
        </ul>
      </div>
      <!--个人模块-->
      <div v-if="verticalType===1">
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
            <input type="number" v-model="idCard" placeholder="请输入您的身份证号">
          </div>
        </div>
      </div>
      <!--公司模块-->
      <div v-if="verticalType===2">
        <div class="weui-cells">
          <div class="weui-cell">
            <div class="weui-cell_bd">
              <p class="txt">企业名称</p>
            </div>
            <input type="text" placeholder="请输入企业名称">
          </div>
          <div class="weui-cell">
            <div class="weui-cell_bd">
              <p class="txt">企业注册号</p>
            </div>
            <input type="text" placeholder="请输入企业注册号">
          </div>
          <div class="weui-cell">
            <div class="weui-cell_bd">
              <p class="txt">法人姓名</p>
            </div>
            <input type="text" placeholder="请输入法人姓名">
          </div>
          <div class="weui-cell">
            <div class="weui-cell_bd">
              <p class="txt">法人身份证号</p>
            </div>
            <input type="text" placeholder="请输入法人身份证号">
          </div>
        </div>
      </div>
      <!--上传身份证-->
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
      <!--企业-->
      <div style="padding:0 30rpx" v-if="verticalType===2">
        <!--企业上传营业执照-->
        <div class="companyPic">
          <p class="font30 fontBold company_pic_title">营业执照</p>
          <div>
            <img src="/static/images/icons/card_com.jpg" alt class="company_pic">
          </div>
        </div>
        <!--企业上传其他照片-->
        <div class="otherPic">
          <p class="font30 fontBold company_pic_title">其他资质</p>
          <div>
            <img src="/static/images/icons/uppic.jpg" alt class="up_pic">
          </div>
        </div>
      </div>
      <!--企业end-->
      <div class="flex padwid">
        <input type="checkbox" :checked="agreen" @click="agreen=!agreen" class="checkbox-cart">
        <p>
          <span>已阅读并同意</span>
          <span class="fontColor99">《成成企业拼租认证服务协议》</span>
        </p>
      </div>
      <!--底部按钮-->
      <div class="btn_box bg_fff">
        <div class="btnSub" @click="btnSubmit">提交</div>
      </div>
    </div>
  </div>
</template>
<script>
import { post, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
import { pathToBase64 } from "@/utils/image-tools";
export default {
  data() {
    return {
      verticalType: 1, //1:个人认证；2：企业认证
      agreen: true, //同意协议
      userId: "",
      token: "",
      curPage: "",
      userRName: "", //真实姓名
      idCard: "", //身份证号码
      idCardPositive: "", //身份证正面
      idCardNegative: "" //身份证反面
    };
  },
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "我的认证"
      });
    },
    valOther() {
      //个人认证的校验
      if (this.userRName == "") {
        wx.showToast({
          title: "请输入您的姓名!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (this.idCard == "") {
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
      if (this.idCardPositive == "") {
        wx.showToast({
          title: "请上传身份证正面照!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (this.idCardNegative == "") {
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
      let that = this;
      //个人认证
      console.log("jinglaile");
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
            duration: 1500
          });
        }
      });
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
</style>