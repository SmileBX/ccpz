<template>
  <div class="pageContent">
    <div class="weui-cells" style="margin-top:0;margin-bottom:20rpx;">
      <div class="weui-cell" @tap="showSelect(0)">
        <label class="weui-label">公司行业</label>
        <div class="weui-cell__bd text_r">
          <input type="text" disabled :value="trade" class="weui-input" placeholder="请选择">
        </div>
      </div>
      <div class="weui-cell">
        <label class="weui-label">职位</label>
        <div class="weui-cell__bd text_r">
          <input type="text" class="weui-input" v-model="job" placeholder="请输入">
        </div>
      </div>
      <div class="weui-cell" @tap="showSelect(1)">
        <label class="weui-label">成立日期</label>
        <div class="weui-cell__bd text_r">
          <input type="text" disabled :value="setUpDate" class="weui-input" placeholder="请选择">
        </div>
      </div>
      <div class="weui-cell">
        <label class="weui-label">人员规模</label>
        <div class="weui-cell__bd text_r">
          <input type="text" class="weui-input" v-model="staffSize" placeholder="请输入">
        </div>
      </div>
      <div class="weui-cell">
        <label class="weui-label">办公面积</label>
        <div class="weui-cell__bd text_r">
          <input type="text" class="weui-input" v-model="officeArea" placeholder="请输入">
        </div>
      </div>
      <div class="weui-cell">
        <label class="weui-label">办公地址</label>
        <div class="weui-cell__bd text_r">
          <input type="text" class="weui-input" v-model="officeAddr" placeholder="请输入">
        </div>
      </div>
      <!-- <div class="weui-cell"  @tap="showSelect(2)"> -->
      <div class="weui-cell"  @tap="onAreaStatus">
        <label class="weui-label">负责人籍贯</label>
        <div class="weui-cell__bd text_r">
          <input type="text" :value="nativePlace" disabled class="weui-input" placeholder="请选择">
        </div>
      </div>
    </div>
    <div class="pall bg_fff" v-if="showtextarea">
      <p style="margin-bottom:10rpx;">公司简介</p>
      <textarea name id cols="30" rows="10" v-model="companyIntro" placeholder="请输入公司简介"></textarea>
    </div>
    <div class="pall bg_fff" v-if="showtextarea">
      <p style="margin-bottom:10rpx;">公司理念</p>
      <textarea name id cols="30" rows="10" v-model="companyCulture" placeholder="请输入公司理念"></textarea>
    </div>

    <div style="margin-top:20rpx;">
      <!--上传图片-->
      <div class="uploadSection">
        <div class="item">
          <h2 class="uploadTitle">办公照片</h2>
          <div class="uploadImage clear">
            <!-- 上传展示的图片 -->
            <block v-if="companyPic.length>0">
              <div class="upload-img img" v-for="(item,index) in companyPic" :key="index">
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
    </div>

    <div class="weui-cells" style="display:none;">
      <div class="weui-cell">
        <label class="weui-label">联系人</label>
        <div class="weui-cell__bd text_r">
          <input type="text" class="weui-input" v-model="contacts" placeholder="请输入">
        </div>
      </div>
      <div class="weui-cell">
        <label class="weui-label">联系电话</label>
        <div class="weui-cell__bd text_r">
          <input type="text" class="weui-input" v-model="contactsTel" placeholder="请输入">
        </div>
      </div>
      <div class="weui-cell">
        <label class="weui-label">微信</label>
        <div class="weui-cell__bd text_r">
          <input type="text" class="weui-input" v-model="weChatNum" placeholder="请输入">
        </div>
      </div>
      <div class="weui-cell">
        <label class="weui-label">邮箱</label>
        <div class="weui-cell__bd text_r">
          <input type="text" class="weui-input" v-model="mailbox" placeholder="请输入">
        </div>
      </div>
      <div class="weui-cell">
        <label class="weui-label">官网</label>
        <div class="weui-cell__bd text_r">
          <input type="text" class="weui-input" v-model="officialWebsite" placeholder="请输入">
        </div>
      </div>
    </div>
    <!--底部按钮-->
    <div style="padding:80rpx 30rpx;">
      <div class="weui-btn btn-active fill" @click="btnSubmit">提交</div>
    </div>
    <!-- 弹窗 -->
    <!-- 选择行业 -->
    <div class="shade bottom__shade" v-if="showShade[0]">
      <div class="mask" @tap="cancle(0)"></div>
      <div class="shadeContent">
        <!-- <div class="shade__hd flex flexAlignCenter center">
          <span class="btn btn-cancle" @tap="cancle(0)">取消</span>
          <p class="title flex1">行业</p>
          <span class="btn btn-sure" @tap="sureSelect(0)">确定</span>
        </div>-->
        <div class="shade__bd">
          <van-picker
            v-if="hasTrade"
            show-toolbar
            title="行业"
            @confirm="onConfirm"
            @cancel="onCancel"
            :columns="columns"
            @change="onChange($event)"
          />
        </div>
      </div>
    </div>
    <!-- 选择行业  end -->
    <!-- 选择成立日期 -->
    <div class="shade bottom__shade" v-if="showShade[1]">
      <div class="mask" @tap="cancle(1)"></div>
      <div class="shadeContent">
        <div class="shade__bd">
          <van-datetime-picker show-toolbar title="成立日期" @cancel="cancle(1)" @confirm="confirmDate" @change="changeDate($event)"  :value="currentDate" :min-date="minDate" :max-date="maxDate" type="date"/>
        </div>
      </div>
    </div>
    <!-- 选择成立日期  end -->
    <!-- 选择籍贯弹窗 -->
    <div class="shade bottom__shade" v-show="areaStatus">
      <div class="mask" @tap="closearea"></div>
      <div class="shadeContent">
        <div class="shade__bd">
          <!-- <van-popup :show="areaStatus" position="bottom"> -->
          <van-area :area-list="areaList" :value="areaValue" @cancel="closearea" @confirm="confirmBirthArr" @change="changeArr($event)" :columns-num="2" title="籍贯" />
          <!-- </van-popup> -->
              </div>
            </div>
        </div>
    <!-- 选择籍贯弹窗  end -->
  </div>
</template>
<script>
import { post, toLogin, getCurrentPageUrlWithArgs, trim } from "@/utils";
import areaList from "@/utils/areaList";
import { pathToBase64 } from "@/utils/image-tools";
export default {
  onLoad() {
    this.setBarTitle();
  },
  onShow() {
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.columns = []
    if(this.$root.$mp.query.id !=="" && this.$root.$mp.query.id){
      this.id = this.$root.$mp.query.id;
    }
    this.GetTradeList();
  },
  data() {
    return {
      areaList,
      userId: "",
      token: "",
      curPage: "",
      showShade: [false,false,false],
      tradeList: {}, //行业数据
      columns: [],  //选择行业弹窗需要传入的数据
      id: "",
      trade: "",
      job: "",
      setUpDate: "",
      staffSize: "",
      officeArea: "",
      nativePlace: "",
      companyIntro: "",
      companyCulture: "",
      companyPic:[],
      maxPicLen:6,
      isUploadBtn:true,
      contacts: "",
      contactsTel: "",
      weChatNum: "",
      mailbox: "",
      officialWebsite: "",
      hasTrade: false,  //是否已经返回了行业数据
      currentDate: new Date().getTime(),
      maxDate: new Date().getTime(),
      minDate: new Date().setFullYear(1600,0,1),
      areaValue:"",
      areaStatus:false,
      showtextarea:true,//显示文本域，层级太高隐藏
    };
  },
  methods: {
    onAreaStatus(){
      
      this.areaStatus = true;
      this.showtextarea=false;
      console.log("再次打开的时候areaValue:"+this.areaValue);
      console.log(this.areaStatus,'areaStatus')
    },
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "认证新企业"
      });
    },
    showSelect(index) {
      //弹窗是否显示
      this.$set(this.showShade, index, true);
      this.showtextarea=false;
    },
    cancle(index) {
      //弹窗的取消
      this.$set(this.showShade, index, false);
      this.showtextarea=true;
    },
    //关闭籍贯
    closearea(){
      this.areaStatus=false;
      this.showtextarea=true;
    },
    onChange(event) {
      //选择行业
      const { picker, value, index } = event.mp.detail;
      picker.setColumnValues(1, this.tradeList[value[0]]);
    },
    onConfirm(event) {
      //选择行业确定
      console.log(event);
      const { index, value } = event.mp.detail;
      this.trade = value.join(",");
      this.$set(this.showShade, 0, false);
      this.$set(this.columns[0], "defaultIndex", index[0]);
      this.$set(this.columns[1], "values", this.tradeList[value[0]]);
      this.$set(this.columns[1], "defaultIndex", index[1]);
      this.showtextarea=true;
    },
    onCancel() {
      this.$set(this.showShade, 0, false);
      this.showtextarea=true;
    },
    changeDate(e){  //选择成立日期
      
    },
    confirmDate(e){  //选择成立日期的点击确定
      let dd = new Date(e.mp.detail);
      let year = dd.getFullYear();
      let month = dd.getMonth()+1;
      let day = dd.getDate();
       month = month < 10 ? '0'+month : month;
       day = day < 10 ? '0'+day : day;
       this.setUpDate = year+"-"+month+"-"+day
      this.currentDate = dd.getTime();
      this.$set(this.showShade, 1, false);
      this.showtextarea=true;
    },
    changeArr(e){

    },
    confirmBirthArr(e){  //选择籍贯的点击确定
      let arr = e.mp.detail.values;
      // console.log(e);
      let str = '';
      arr.forEach(item => {
        str += item.name;
        // code.push(item.code);
      })
      this.nativePlace = str;
      this.areaStatus = false;
      this.areaValue = arr[arr.length-1].code;
      this.showtextarea=true;
      console.log("code:"+this.areaValue);
    },
    initdata(){
      this.trade="";
      this.job="";
      this.setUpDate="";
      this.staffSize="";
      this.contactsTel="";
      this.officeAddr="";
      this.companyPic=[];
      this.companyIntro="";
      this.companyCulture="";
      this.nativePlace="";
      this.officeArea="";
    },
    valOther() {
      //认证的校验
      if (trim(this.trade) == "") {
        wx.showToast({
          title: "请选择公司行业!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (trim(this.job) == "") {
        wx.showToast({
          title: "请输入职位!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (trim(this.setUpDate) == "") {
        wx.showToast({
          title: "请选择公司成立日期!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if (trim(this.staffSize) == "") {
        wx.showToast({
          title: "请输入人员规模!",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      if(trim(this.contactsTel) !==""){
        if(!((/^0\d{2,3}-\d{7,8}$/).test(this.contactsTel) || (/^[1][3,4,5,6,7,8][0-9]{9}$/).test(this.contactsTel))){
          wx.showToast({
            title: "请输入正确的电话格式！",
            icon: "none",
            duration: 1500
          });
          return false;
        }
      }
      if(trim(this.mailbox) !==""){
        if(!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.mailbox)){
          wx.showToast({
            title: "请输入正确的邮箱格式！",
            icon: "none",
            duration: 1500
          });
          return false;
        }
      }
      return true;
    },
    upLoadImg() {
      //上传图片
      let _this = this;
      let num = _this.maxPicLen - _this.companyPic.length;
      if(num>0){
        wx.chooseImage({
          //进入这里面的时候this发生了改变
          count: num,
          sizeType: ["compressed"],
          sourceType: ["album", "camera"],
          success(res) {
            // tempFilePath可以作为img标签的src属性显示图片
            _this.companyPic = _this.companyPic.concat(res.tempFilePaths);
            if(_this.companyPic.length >= _this.maxPicLen){
              _this.isUploadBtn = false;
            }
          }
        });
      }else{
        _this.isUploadBtn = false;
      }
    },
    delImg(index) {
     this.companyPic.splice(index,1);
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
    async btnSubmit() {
      //提交下.一.步
      if (this.valOther()) {
        let companyPic = [];
        if(this.companyPic.length>0){
           companyPic = await this.base64Img(this.companyPic);
        }
        // this.UserBusinessAuthNext(JSON.stringify(companyPic));
        
        if(this.$root.$mp.query.id !=="" && this.$root.$mp.query.id){
          this.id = this.$root.$mp.query.id;
          this.UserBusinessAuthNext(JSON.stringify(companyPic));
        }else{
          //提交第一步
          let that=this
          var Name = this.$store.state.userCompany.Name
          var RegNum = this.$store.state.userCompany.RegNum
          var LegalPerson = this.$store.state.userCompany.LegalPerson
          var Idcard = this.$store.state.userCompany.Idcard
          var IdcardPositive = this.$store.state.userCompany.IdcardPositive
          var IdcardNegative = this.$store.state.userCompany.IdcardNegative
          var BusinessLicense = this.$store.state.userCompany.BusinessLicense
          var OtherSeniority = this.$store.state.userCompany.OtherSeniority
          post(
            "User/UserBusinessAuth",
            {
              UserId: that.userId,
              Token: that.token,
              Company: {
                Name: Name,
                RegNum: RegNum,
                LegalPerson: LegalPerson,
                Idcard: Idcard,
                IdcardPositive: IdcardPositive,
                IdcardNegative: IdcardNegative,
                BusinessLicense: BusinessLicense,
                OtherSeniority: OtherSeniority
              }
            },
            that.curPage
          ).then(res => {
            if (res.code === 0) {
              that.id=res.data.Id;
              that.UserBusinessAuthNext(JSON.stringify(companyPic));
            }
          });
        }
        
      }
    },
    UserBusinessAuthNext(companyPic) {
      //填写资料
      let that = this;
      post(
        "User/UserBusinessAuthNext",
        {
          UserId: that.userId,
          Token: that.token,
          Company: {
            Id: that.id, //企业认证id
            Trade: that.trade, //行业格式'企业,行业'
            Job: that.job, //职位
            SetUpDate: that.setUpDate, //成立日期
            StaffSize: that.staffSize, //人员规模
            OfficeArea: that.officeArea, //办公面积
            OfficeAddr: that.officeAddr, //办公地址
            NativePlace: that.nativePlace, //负责人籍贯
            CompanyIntro: that.companyIntro, //公司简介
            CompanyCulture: that.companyCulture, //公司理念
            CompanyPic: companyPic, //办公室照片
            Contacts: that.contacts, //联系人
            ContactsTel: that.contactsTel, //联系电话
            WeChatNum: that.weChatNum, //微信
            Mailbox: that.mailbox, //邮箱
            OfficialWebsite: that.officialWebsite //官网
          }
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          wx.showToast({
            title: "提交成功!",
            icon: "none",
            duration: 1500,
            success:function(){
              setTimeout(() => {
                that.initdata();
                wx.navigateBack();
              },1500)
            }
          });

        }
      });
    },
    GetTradeList() {
      //获取行业
      let that = this;
      post("Goods/GetTradeList", {}, that.curPage).then(res => {
        if (res.code === 0 && res.data.length > 0) {
          res.data.forEach(item => {
            let json = {};
            let arr = [];
            item.Child.forEach(item2 => {
              // Name
              arr.push(item2.Name);
            });
            json[item.Name] = arr;
            that.tradeList = Object.assign(that.tradeList, json);
          });
          console.log(that.tradeList);
          that.columns.push(
            {
              values: Object.keys(that.tradeList),
              defaultIndex: 0,
              className: "column1"
            },
            {
              values: that.tradeList[Object.keys(that.tradeList)[0]],
              className: "column2",
              defaultIndex: 0
            }
          );
          console.log("________");
          console.log(that.columns);
          // let objkey = Object.keys(that.tradeList)[0];
          // that.selectTrade =objkey +","+that.tradeList[objkey][0];
          that.hasTrade = true;
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.weui-cells .weui-cell::before {
  left: 0;
  right: 0;
}
.uploadImage {
  padding-bottom: 30rpx;
}
</style>