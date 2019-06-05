<template>
  <div class="pageContent">
    <div class="weui-cells" style="margin-top:0;margin-bottom:20rpx;">
      <div class="weui-cell">
        <label class="weui-label">公司行业*</label>
        <div class="weui-cell__bd text_r">
          <input type="text" disabled class="weui-input" placeholder="请选择">
        </div>
      </div>
      <div class="weui-cell">
        <label class="weui-label">职位*</label>
        <div class="weui-cell__bd text_r">
          <input type="text" class="weui-input" placeholder="请输入">
        </div>
      </div>
      <div class="weui-cell">
        <label class="weui-label">成立日期*</label>
        <div class="weui-cell__bd text_r">
          <input type="text" disabled class="weui-input" placeholder="请选择">
        </div>
      </div>
      <div class="weui-cell">
        <label class="weui-label">人员规模*</label>
        <div class="weui-cell__bd text_r">
          <input type="text" class="weui-input" placeholder="请输入">
        </div>
      </div>
      <div class="weui-cell">
        <label class="weui-label">办公面积</label>
        <div class="weui-cell__bd text_r">
          <input type="text" class="weui-input" placeholder="请输入">
        </div>
      </div>
      <div class="weui-cell">
        <label class="weui-label">办公地址</label>
        <div class="weui-cell__bd text_r">
          <input type="text" class="weui-input" placeholder="请输入">
        </div>
      </div>
      <div class="weui-cell">
        <label class="weui-label">负责人籍贯</label>
        <div class="weui-cell__bd text_r">
          <input type="text" disabled class="weui-input" placeholder="请选择">
        </div>
      </div>
    </div>
    <div class="pall bg_fff">
      <p style="margin-bottom:10rpx;">公司简介</p>
      <textarea name id cols="30" rows="10" placeholder="请输入公司简介"></textarea>
    </div>
    <div class="pall bg_fff">
      <p style="margin-bottom:10rpx;">公司理念</p>
      <textarea name id cols="30" rows="10" placeholder="请输入公司理念"></textarea>
    </div>

    <div style="margin-top:20rpx;">
      <!--上传图片-->
      <div class="uploadSection">
        <div class="item">
          <h2 class="uploadTitle">办公照片</h2>
          <div class="uploadImage clear">
            <!-- 上传展示的图片 -->
            <div class="upload-img img">
              <img src="/static/images/icons/upload-2.jpg" alt>
              <img src="/static/images/icons/cancle.png" class="close">
            </div>
            <!--上传按钮-->
            <div class="button-upload">
              <img src="/static/images/icons/upload-2.jpg" alt>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="weui-cells">
      <div class="weui-cell">
        <label class="weui-label">联系人</label>
        <div class="weui-cell__bd text_r">
           <input type="text" class="weui-input" placeholder="请输入">
        </div>
      </div>
      <div class="weui-cell">
        <label class="weui-label">联系电话</label>
        <div class="weui-cell__bd text_r">
           <input type="text" class="weui-input" placeholder="请输入">
        </div>
      </div>
      <div class="weui-cell">
        <label class="weui-label">微信</label>
        <div class="weui-cell__bd text_r">
           <input type="text" class="weui-input" placeholder="请输入">
        </div>
      </div>
      <div class="weui-cell">
        <label class="weui-label">邮箱</label>
        <div class="weui-cell__bd text_r">
           <input type="text" class="weui-input" placeholder="请输入">
        </div>
      </div>
      <div class="weui-cell">
        <label class="weui-label">官网</label>
        <div class="weui-cell__bd text_r">
           <input type="text" class="weui-input" placeholder="请输入">
        </div>
      </div>
    </div>
    <!--底部按钮-->
    <div style="padding:80rpx 30rpx;">
      <div class="weui-btn btn-active fill">提交</div>
    </div>
    <!-- 弹窗 -->
    <div class="shade">
      <div class="mask"></div>
      <div class="shadeContent">
        <div class="shade__hd flex flexAlignCenter center">
            <span class="btn btn-cancle">取消</span>
            <p class="title flex1">行业</p>
            <span class="btn btn-sure">确定</span>
        </div>
        <div class="shade__bd">
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { post, toLogin, getCurrentPageUrlWithArgs, trim } from "@/utils";
import { pathToBase64 } from "@/utils/image-tools";
export default {
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.GetTradeList();
  },
  data() {
    return {
      userId: "",
      token: "",
      curPage: "",
      tradeList:[],  //行业数据
      id:"",
      trade:"",
      job:"",
      setUpDate:"",
      staffSize:"",
      officeArea:"",
      nativePlace:"",
      companyIntro:"",
      companyCulture:"",
      contacts:"",
      contactsTel:"",
      weChatNum:"",
      mailbox:"",
      officialWebsite:""
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
        let otherSeniority = "";
        if (this.otherSeniority) {
          otherSeniority = await this.base64Img(this.otherSeniority);
        }
      }
    },
    UserBusinessAuthNext(companyPic){  //填写资料
      let that = this;
      post("User/UserBusinessAuthNext",{
        UserId:that.userId,
        Token:that.token,
        Company:{
          Id:that.id,  //企业认证id
          Trade:that.trade,  //行业格式'企业,行业'
          Job:that.job,   //职位
          SetUpDate:that.setUpDate,  //成立日期
          StaffSize:that.staffSize,   //人员规模
          OfficeArea:that.officeArea,  //办公面积
          OfficeAddr:that.officeAddr,  //办公地址
          NativePlace:that.nativePlace,  //负责人籍贯
          CompanyIntro:that.companyIntro,  //公司简介
          CompanyCulture:that.companyCulture,  //公司理念
          CompanyPic:companyPic,    //办公室照片
          Contacts:that.contacts,  //联系人
          ContactsTel:that.contactsTel,   //联系电话
          WeChatNum:that.weChatNum,   //微信
          Mailbox:that.mailbox,   //邮箱
          OfficialWebsite:that.officialWebsite   //官网
        }
      },that.curPage).then(res => {
        if(res.code===0){

        }
      })
    },
    GetTradeList(){  //获取行业
    let that = this;
      post("Goods/GetTradeList",{},that.curPage).then(res => {
        if(res.code===0 && res.data.length>0){
           that.tradeList = res.data;
        }
      })
    }
  }
};
</script>
<style lang='scss' scoped>
.weui-cells .weui-cell::before{
  left:0;
  right:0;
}
.uploadImage{
  padding-bottom:30rpx;
}
</style>