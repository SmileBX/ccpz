<template>
  <div class="pageContent">
    <div class="section bg_fff pd15" v-if="type==2">
      <div class="form-cells-hd">选择服务</div>
      <checkbox-group class="checkboxGroup">
        <label class="check__label checkbox-cart" @tap="shiftCheckbox(1)">
          <checkbox :checked="isCultivate===1" class="checkbox" />股权培训
        </label>
        <label class="check__label checkbox-cart" @tap="shiftCheckbox(2)">
          <checkbox :checked="isEvaluate===1" class="checkbox" />资产评估
        </label>
        <label class="check__label checkbox-cart" @tap="shiftCheckbox(3)">
          <checkbox :checked="isGuide===1" class="checkbox" />拼租指导
        </label>
      </checkbox-group>
    </div>
    <div class="section bg_fff pd15">
      <textarea class="weui-area" v-model="content" placeholder="请输入内容"></textarea>
    </div>
    <div class="section bg_fff pd15" v-if="type==1 || type==3">
      <div class="form-cells-item">
        <div class="form-cells-hd">
          <block v-if="type==3">图片反馈</block>
          <block v-if="type==1">上传图片</block>
        </div>
        <!-- <div class="form-cell-bd form-cell-img">
          <div class="upbtn" v-for="(item,index) in picList" :key="index">
            <img src="/static/images/icons/cancle.png" @click="delImg(index)" class="close">
            <img class="upimg" :src="item">
          </div>
          <div class="upbtn" @tap="upLoadImg">
            <img class="upimg" src="/static/images/icons/upload_1.png">
          </div>
        </div> -->
        <div class="uploadImage clear" style="padding-left:0;">
            <!-- 上传展示的图片 -->
            <block v-if="picList.length>0">
              <div class="upload-img img" v-for="(item,index) in picList" :key="index">
                <img :src="item" alt>
                <img src="/static/images/icons/cancle.png" @click="delImg(index)" class="close">
              </div>
            </block>
            <!--上传按钮-->
            <div class="button-upload" @click="upLoadImg" v-if="isUploadBtn">
              <img src="/static/images/icons/upload-2.jpg" alt>
            </div>
          </div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <span class="label">姓名</span>
        <div class="weui-cell__bd">
          <input type="text" class="weui-input" v-model="memberName" placeholder="请输入您的姓名">
        </div>
      </div>
      <div class="weui-cell">
        <span class="label">电话</span>
        <div class="weui-cell__bd">
          <input type="text" class="weui-input" v-model="mobile" placeholder="请输入您的电话号码">
        </div>
      </div>
    </div>
    <div style="padding:80rpx 30rpx;">
      <div class="weui-btn btn-active fill" @tap="btnSubmit">提交</div>
    </div>
  </div>
</template>
<script>
import { post, toLogin, getCurrentPageUrlWithArgs, trim,valPhone } from "@/utils";
import { pathToBase64 } from "@/utils/image-tools";
export default {
  onShow() {
    //type:1:合作加盟；2：增值服务；3：意见反馈
    if(this.$root.$mp.query.type && this.$root.$mp.query.type !=="undefined"){
      this.type = parseInt(this.$root.$mp.query.type);
    }else{
      this.type =3;
    }
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.setBarTitle();
  },
  data() {
    return {
      type: "",
      userId:"",
      token:"",
      curPage:"",
      content:"",
      memberName:"",
      mobile:"",
      isCultivate:1,
      isEvaluate:0,
      isGuide:0,
      picList:[],
      maxPicLen:5,
      isUploadBtn:true
    };
  },
  methods: {
    setBarTitle() {
      let name = "";
      if (this.type == 1) {
        name = "合作加盟";
      } else if (this.type == 2) {
        name = "增值服务";
      } else if (this.type == 3) {
        name = "意见反馈";
      } else {
        name = "拼租";
      }
      wx.setNavigationBarTitle({
        title: name
      });
    },
    shiftCheckbox(index){  //checkbox切换的时候
      if(index===1){  //股权培训
        if(this.isCultivate===1){
          this.isCultivate=0;
        }else{
          this.isCultivate=1;
        }
      }
      if(index===2){  //资产评估
        if(this.isEvaluate===1){
          this.isEvaluate = 0;
        }else{
          this.isEvaluate =1;
        }
      }
      if(index===3){  //拼租指导
        if(this.isGuide===1){
          this.isGuide =0;
        }else{
          this.isGuide=1;
        }
      }
    }, 
    upLoadImg() {
      //上传图片
      let _this = this;
      let num = _this.maxPicLen - _this.picList.length;
      if(num>0){
        wx.chooseImage({
          //进入这里面的时候this发生了改变
          count: num,
          sizeType: ["compressed"],
          sourceType: ["album", "camera"],
          success(res) {
            // tempFilePath可以作为img标签的src属性显示图片
            _this.picList = _this.picList.concat(res.tempFilePaths);
            if(_this.picList.length >= _this.maxPicLen){
              _this.isUploadBtn = false;
            }
          }
        });
      }else{
        _this.isUploadBtn = false;
      }
    },
    delImg(index) {
     this.picList.splice(index,1);
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
    valOther(){  //验证是否有输入了内容，是否输入了姓名、电话，增值服务的时候是否选择了服务
      if(trim(this.content) ==""){
        wx.showToast({
          title: '请输入内容！',
          icon: 'none',
          duration: 1500
        })
        return false;
      }
      if(trim(this.content).length<10){
         wx.showToast({
          title: '输入的内容不能少于10个字符！',
          icon: 'none',
          duration: 1500
        })
        return false;
      }
      if(trim(this.memberName) == ""){
         wx.showToast({
          title: '请输入您的姓名！',
          icon: 'none',
          duration: 1500
        })
        return false;
      }
      if(trim(this.mobile) == ""){
         wx.showToast({
          title: '请输入您的电话！',
          icon: 'none',
          duration: 1500
        })
        return false;
      }
      if(this.type===2){  //增值服务的时候，选择服务必须选择一个
        let num = 0;
        if(this.isCultivate===1 || this.isEvaluate===1 || this.isGuide===1){
          num++;
        }
        if(num<=0){
            wx.showToast({
            title: '选择服务必须选择一个！',
            icon: 'none',
            duration: 1500
          })
          return false;
        }
      }
      return true;
    },
    async btnSubmit(){  //点击提交按钮的时候
      if(this.valOther() && valPhone(this.mobile)){
        let base64Arr = [];
        if(this.picList.length>0){
          base64Arr =  await this.base64Img(this.picList);
        }
        this.MemberFeedBack(JSON.stringify(base64Arr));
      }
    },
    MemberFeedBack(picList){  //提交反馈等
      let that = this;
      post("User/MemberFeedBack",{
        UserId:that.userId,
        Token:that.token,
        PicList:picList,  //上传的图片集合
        Content:that.content,  //输入的内容
        Type:that.type,  //类型；1：合作加盟；2：增值服务；3：意见反馈
        MemberName:that.memberName, //姓名
        Mobile:that.mobile,  //电话
        IsCultivate:that.isCultivate,  //股权培训
        IsEvaluate:that.isEvaluate,  //资产评估
        IsGuide:that.isGuide   //拼租指导

      },that.curPage).then(res => {
        if(res.code===0){
          //提示提交成功
          wx.showToast({
            title: '提交成功！',
            icon: 'none',
            duration: 1500,
            success:function(){
              setTimeout(() => {
                wx.switchTab({
                  url: '/pages/my/main'
                })
              },1500)
            }
          })
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.section {
  margin-top: 20rpx;
}
.weui-area {
  height: 220rpx;
}
.form-cells-hd {
  font-size: 30rpx;
}
.weui-cell::before {
  left: 0;
  right: 0;
}
.label {
  width: 110rpx;
}
.checkboxGroup {
  font-size: 30rpx;
  color: #666;
  .check__label {
    margin-top: 20rpx;
    display: inline-block;
    margin-right: 40rpx;
    
  }
}
</style>
