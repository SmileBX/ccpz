<template>
  <div class="pageContent">
    <div class="weui-cells__title" style="padding:20rpx 30rpx;color:#999;">选择举报原因</div>
    <radio-group class="weui-cells mt0">
      <label
        class="weui-cell gou"
        v-for="(item,index) in reasonList"
        :key="index"
        @tap="selectReason(index)"
      >
        <div class="weui-cell__bd">
          <p class="txt">{{item.str}}</p>
        </div>
        <radio color="#fff" :checked="item.checked"/>
      </label>
    </radio-group>
    <!-- 补充说明 -->
    <div class="explain bg_fff mt10">
      <div class="eaditBox">
        <h3 style="font-size:30rpx;color:#999;">补充说明</h3>
        <textarea class="weui-area" v-model="content" maxlength=100 placeholder="补充文字说明或上传截图佐证您举报的内容，将会更容易通过审核哦(10~100字)"></textarea>
      </div>
      <!-- 上传图片 -->
      <div class="uploadImage clear" style="padding-top:20rpx;">
        <!-- 上传展示的图片 -->
        <block v-if="picList.length>0">
          <div class="upload-img img" v-for="(item,index) in picList" :key="index">
            <img :src="item" alt>
            <img src="/static/images/icons/cancle.png" @tap="delImg(index)" class="close">
          </div>
        </block>
        <!--上传按钮-->
        <div class="button-upload" @tap="upLoadImg" v-if="isUploadBtn">
          <img src="/static/images/icons/upload-2.jpg" alt>
        </div>
      </div>
      <!-- <div class="form-cell-bd form-cell-img pd15">
        <div class="upbtn">
          <span class="close">×</span>
          <img class="upimg" src="/static/images/of/index_a1.jpg">
        </div>
        <div class="upbtn">
          <img class="upimg" src="/static/images/icons/upload_1.png">
        </div>
      </div>-->
    </div>
    <div class="ftBtn" style="padding:60rpx 30rpx;">
      <div class="inner">
        <div class="btns">
          <div class="btn bg_ff952e color_fff center" style="border-radius:16rpx;" @tap="btnSubmit">确认提交</div>
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
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    if(this.$root.$mp.query.ReportId){
      this.ReportId = this.$root.$mp.query.ReportId
    }
  },
  data() {
    return {
      userId: "",
      token: "",
      curPage: "",
      content: "",
      picList: [],
      maxPicLen: 5,
      isUploadBtn: true,
      ReportId:0,//被举报人的id
      selectReasonIndex: 0, //选择的举报原因的第几个
      reasonList: [
        {
          str: "虚假个人信息",
          checked: true
        },
        {
          str: "发布不适当内容对我造成骚扰",
          checked: false
        },
        {
          str: "存在欺诈骗钱的行为",
          checked: false
        },
        {
          str: "发布假冒信息",
          checked: false
        },
        {
          str: "发布广告/色情/违法内容",
          checked: false
        }
      ]
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "举报"
      });
    },
    initData(){
      this.content = "";
      this.picList = [];
      this.isUploadBtn = true;
      this.selectReasonIndex = 0;
      this.reasonList =[
        {
          str: "虚假个人信息",
          checked: true
        },
        {
          str: "发布不适当内容对我造成骚扰",
          checked: false
        },
        {
          str: "存在欺诈骗钱的行为",
          checked: false
        },
        {
          str: "发布假冒信息",
          checked: false
        },
        {
          str: "发布广告/色情/违法内容",
          checked: false
        }
      ];

    },
    valOther() {
      //验证是否有输入了内容，是否输入了姓名、电话，增值服务的时候是否选择了服务
      if (trim(this.content) == "") {
        wx.showToast({
          title: "请输入内容！",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (trim(this.content).length < 10) {
        wx.showToast({
          title: "输入的内容不能少于10个字符！",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      return true;
    },
    upLoadImg() {
      //上传图片
      let _this = this;
      let num = _this.maxPicLen - _this.picList.length;
      if (num > 0) {
        wx.chooseImage({
          //进入这里面的时候this发生了改变
          count: num,
          sizeType: ["compressed"],
          sourceType: ["album", "camera"],
          success(res) {
            // tempFilePath可以作为img标签的src属性显示图片
            _this.picList = _this.picList.concat(res.tempFilePaths);
            if (_this.picList.length >= _this.maxPicLen) {
              _this.isUploadBtn = false;
            }
          }
        });
      } else {
        _this.isUploadBtn = false;
      }
    },
    delImg(index) {
      this.picList.splice(index, 1);
      this.isUploadBtn = true;
    },
    async base64Img(arr) {
      let base64Arr = [];
      for (let i = 0; i < arr.length; i += 1) {
        const res = await pathToBase64(arr[i]);
        base64Arr.push({
          PicUrl: res
        });
      }
      return base64Arr;
    },
    selectReason(index) {
      //选择举报原因
      if (this.reasonList[index].checked) {
        return false;
      }
      this.$set(this.reasonList[index], "checked", true);
      this.selectReasonIndex = index;
      this.reasonList.forEach((item,pIndex) => {
        if(pIndex !==index){
          this.$set(item, "checked", false);
        }
      });
      console.log(this.reasonList);
    },
    async btnSubmit() {
      //点击提交按钮的时候
      if (this.valOther() && toLogin(this.curPage)) {
        console.log("fdsjfsdfisdfsdf");
        let base64Arr = [];
        if (this.picList.length > 0) {
          base64Arr = await this.base64Img(this.picList);
        }
        console.log("_____________");
        console.log("选中原因时候的index:"+this.selectReasonIndex);
        let reason = this.reasonList[this.selectReasonIndex].str;
        console.log("gggggggggggggggggg");
        this.MemberFeedBack(JSON.stringify(base64Arr),reason);
      }
    },
    MemberFeedBack(picList,reason) {
      //提交反馈等
      let that = this;
      post(
        "User/MemberFeedBack",
        {
          UserId: that.userId,
          Token: that.token,
          PicList: picList, //上传的图片集合
          Content: that.content, //输入的内容
          Type: 4, //类型；1：合作加盟；2：增值服务；3：意见反馈
          MemberName: reason,//举报原因
          ReportId:this.ReportId
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          //提示提交成功
          wx.showToast({
            title: "提交成功！",
            icon: "none",
            duration: 1500,
            success: function() {
              setTimeout(() => {
                that.initData();
                wx.switchTab({
                  url: "/pages/my/main"
                });
              }, 1500);
            }
          });
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.explain {
  padding: 30rpx 0;
}
.eaditBox {
  padding: 0 30rpx;
  border-bottom: 1px solid #f2f2f2;
  textarea {
    height: 100rpx;
    font-size: 30rpx;
    margin-top: 40rpx;
  }
}
</style>