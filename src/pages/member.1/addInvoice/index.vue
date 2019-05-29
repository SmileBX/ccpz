<template>
  <div class="pageContent">
    <div class="weui-cells addInvoice__weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">发票类型</label>
        </div>
        <div class="weui-cell__bd">
          <div class="tag" :class="{'active':invoiceType===0}" @click="shiftInvoiceType(0)">个人</div>
          <div class="tag" :class="{'active':invoiceType===1}" @click="shiftInvoiceType(1)">公司</div>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">发票抬头</label>
        </div>
        <div class="weui-cell__bd">
          <input type="text" class="weui-input" v-model="headerName" placeholder="个人姓名或公司名称">
        </div>
      </div>
      <!-- 这个是公司的 -->
      <div class="weui-cell" v-if="invoiceType===1">
        <div class="weui-cell__hd">
          <label class="weui-label">公司税号</label>
        </div>
        <div class="weui-cell__bd">
          <input type="text" class="weui-input" v-model="taxNumber" placeholder="请输入公司纳税人识别号">
        </div>
      </div>
    </div>
    <div class="weui-cells addInvoice__weui-cells">
      <!-- 这个是个人的 -->
      <div class="weui-cell" v-if="invoiceType===0">
        <div class="weui-cell__hd">
          <label class="weui-label">电话号码</label>
        </div>
        <div class="weui-cell__bd">
          <input type="text" class="weui-input" v-model="regCall" placeholder="选填">
        </div>
      </div>
      <div class="weui-cell" v-if="invoiceType===0">
        <div class="weui-cell__hd">
          <label class="weui-label">邮箱</label>
        </div>
        <div class="weui-cell__bd">
          <input type="text" class="weui-input"  placeholder="选填">
        </div>
      </div>
      <!-- 以下是公司的 -->
      <div class="weui-cell" v-if="invoiceType===1">
        <div class="weui-cell__bd">
          <div class="title">需要增值税专用发票</div>
          <div class="msg">请先与公司财务确认需要开具的是专用发票</div>
        </div>
        <div class="weui-cell__ft">
          <switch :checked="isOpen" @change="switchStatus" color="#89674c"/>
        </div>
      </div>
      <!-- 以下是公司的开具增值税专用发票的时候 -->
      <div class="weui-cell" v-if="isOpen && invoiceType===1">
        <div class="weui-cell__hd">
          <label class="weui-label">注册地址</label>
        </div>
        <div class="weui-cell__bd">
          <input type="text" class="weui-input" v-model="regAddress" placeholder="请输入公司注册地址" >
        </div>
      </div>
      <div class="weui-cell" v-if="isOpen && invoiceType===1">
        <div class="weui-cell__hd">
          <label class="weui-label">公司电话</label>
        </div>
        <div class="weui-cell__bd">
          <input type="text" class="weui-input" v-model="regCall" placeholder="请输入公司电话" >
        </div>
      </div>
      <div class="weui-cell" v-if="isOpen && invoiceType===1">
        <div class="weui-cell__hd">
          <label class="weui-label">开户银行</label>
        </div>
        <div class="weui-cell__bd">
          <input type="text" class="weui-input" v-model="bankName" placeholder="请输入公司开户行名称">
        </div>
      </div>
      <div class="weui-cell" v-if="isOpen && invoiceType===1">
        <div class="weui-cell__hd">
          <label class="weui-label">银行账号</label>
        </div>
        <div class="weui-cell__bd">
          <input type="text" class="weui-input" v-model="bankAccount" placeholder="请输入公司银行账号">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">设为默认发票</div>
        <div class="weui-cell__ft text_r">
          <switch :checked="checked" color="#ff952e" @change="tab"/>
        </div>
      </div>
    </div>
    <div class="ftBtn">
      <div class="inner" style="padding:60rpx 30rpx;background:none;">
        <div class="btns">
          <div class="btn center bg_ff952e color_fff" style="border-radius:10rpx;" @click="btnSure">保存</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    // this.curPage = getCurrentPageUrlWithArgs()
    //   .replace(/\?/g, "%3F")
    //   .replace(/\=/g, "%3D")
    //   .replace(/\&/g, "%26");
    // this.userId = uni.getStorageSync("userId");
    // this.token = uni.getStorageSync("token");
    // if (this.invoiceId) {
    //   this.getInvoiceInfo();
    // }
  },
  data() {
    return {
      invoiceId: "", //编辑的时候传进来的id
      curPage: "",
      checked: true,
      isDefault: 1,
      invoiceType: 0, //0:个人；1：公司
      isOpen: false, //是否打开需要增值税专用发票
      isVATExclusive: 0, //0:不需要专用发票；1：需要
      userId: "",
      token: "",
      headerName: "", //抬头名称
      taxNumber: "", //税号
      bankName: "", //开户银行
      regCall: "", //注册电话
      bankAccount: "", //银行账号
      regAddress: "" //注册地址
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "新增常用发票"
      });
    },
    shiftInvoiceType(index) {
      this.invoiceType = index;
    },
    switchStatus() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.isVATExclusive = 1;
      } else {
        this.isVATExclusive = 0;
      }
    },
    tab() {
      console.log(this.checked);
      //var isDefault = "";
      if (this.isDefault === 1) {
        this.isDefault = 0;
        this.checked = false;
      } else {
        this.isDefault = 1;
        this.checked = true;
      }
    },
    Authentication() {
      if (this.headerName == "") {
        uni.showToast({
          title: "请输入抬头名称！",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (this.invoiceType === 0) {
        if (this.regCall != "") {
          if (
            !(
              /^0\d{2,3}-\d{7,8}$/.test(this.regCall) ||
              /^[1][3,4,5,6,7,8][0-9]{9}$/.test(this.regCall)
            )
          ) {
            uni.showToast({
              title: "请输入正确的电话格式！",
              icon: "none",
              duration: 1500
            });
            return false;
          }
        }
      }
      if (this.invoiceType === 1) {
        if (this.taxNumber == "") {
          uni.showToast({
            title: "请输入税号！",
            icon: "none",
            duration: 1500
          });
          return false;
        }
        if (this.isOpen) {
          if (this.regAddress == "") {
            uni.showToast({
              title: "请输入注册地址！",
              icon: "none",
              duration: 1500
            });
            return false;
          }
          if (this.regCall == "") {
            uni.showToast({
              title: "请输入公司电话！",
              icon: "none",
              duration: 1500
            });
            return false;
          }
          if (this.regCall != "") {
            if (
              !(
                /^0\d{2,3}-\d{7,8}$/.test(this.regCall) ||
                /^[1][3,4,5,6,7,8][0-9]{9}$/.test(this.regCall)
              )
            ) {
              uni.showToast({
                title: "请输入正确的电话格式！",
                icon: "none",
                duration: 1500
              });
              return false;
            }
          }
          if (this.bankName == "") {
            uni.showToast({
              title: "请输入开户银行！",
              icon: "none",
              duration: 1500
            });
            return false;
          }
          if (this.bankAccount == "") {
            uni.showToast({
              title: "请输入银行账号！",
              icon: "none",
              duration: 1500
            });
            return false;
          }
          //少了一个当银行卡号填写的时候，没有判断银行的卡号，需要拿到最新的h5代码
          if (
            this.bankAccount != "" &&
            !/^([1-9]{1})(\d{15}|\d{16}|\d{18})$/.test(this.bankAccount)
          ) {
            uni.showToast({
              title: "银行卡号格式错误！",
              icon: "none",
              duration: 1500
            });
            return false;
          }
        }
      }
      return true;
    },
    btnSure() {
      //点击保存按钮
      if (this.invoiceId == "") {
        if (this.Authentication()) {
          this.addInvoice();
        }
      } else {
        if (this.Authentication()) {
          this.updateInvoice();
        }
      }
    },
    async getInvoiceInfo() {
      //获取发票信息
      let result = await post("Invoice/GetInvoiceInfo", {
        Id: this.invoiceId,
        UserId: this.userId,
        Token: this.token
      });
      if (result.code === 0) {
        this.headerName = result.data.HeaderName;
        this.taxNumber = result.data.TaxNumber;
        this.bankName = result.data.BankName;
        this.regCall = result.data.RegCall;
        this.bankAccount = result.data.BankAccount;
        this.bankName = result.data.BankName;
        this.regAddress = result.data.RegAddress;
        this.isVATExclusive = result.data.IsVATExclusive;
        if (this.isVATExclusive === 1) {
          this.isOpen = true;
        }
        this.invoiceType = result.data.InvoiceTitle;
        this.isDefault = result.data.IsDefault;

        if (this.isDefault === 1) {
          this.checked = true;
        }
      }
    },
    async addInvoice() {
      //新增发票信息
      let result = await post("Invoice/Addinvoice", {
        UserId: this.userId,
        Token: this.token,
        InvoiceTitle: this.invoiceType,
        HeaderName: this.headerName,
        RegCall: this.regCall,
        IsDefault: this.isDefault,
        TaxNumber: this.taxNumber,
        BankName: this.bankName,
        BankAccount: this.bankAccount,
        RegAddress: this.regAddress,
        IsVATExclusive: this.isVATExclusive
      });
      let _this = this;
      if (result.code === 0) {
        uni.showToast({
          title: "新增成功！",
          icon: "none",
          duration: 1500,
          success: function() {
            setTimeout(function() {
              uni.redirectTo({
                url: "/pages/member/invoiceList/invoiceList"
              });
            }, 1500);
          }
        });
      } else if (result.code === 2) {
        uni.showToast({
          title: "登录超时！",
          icon: "none",
          duration: 1500,
          success: function() {
            uni.navigateTo({
              url: "/pages/login/login?askUrl=" + _this.curPage
            });
          }
        });
      } else {
        uni.showToast({
          title: result.msg,
          icon: "none",
          duration: 1500
        });
      }
    },
    async updateInvoice() {
      //编辑
      let result = await post("Invoice/UpdateInvoice", {
        Id: this.invoiceId,
        UserId: this.userId,
        Token: this.token,
        InvoiceTitle: this.invoiceType,
        HeaderName: this.headerName,
        RegCall: this.regCall,
        IsDefault: this.isDefault,
        TaxNumber: this.taxNumber,
        BankName: this.bankName,
        BankAccount: this.bankAccount,
        RegAddress: this.regAddress
      });
      let _this = this;
      if (result.code === 0) {
        uni.showToast({
          title: "保存成功！",
          icon: "none",
          duration: 1500,
          success: function() {
            setTimeout(function() {
              uni.redirectTo({
                url: "/pages/member/invoiceList/invoiceList"
              });
            }, 1500);
          }
        });
      } else if (result.code === 2) {
        uni.showToast({
          title: "登录超时！",
          icon: "none",
          duration: 1500,
          success: function() {
            uni.navigateTo({
              url: "/pages/login/login?askUrl=" + _this.curPage
            });
          }
        });
      } else {
        uni.showToast({
          title: result.msg,
          icon: "none",
          duration: 1500
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
