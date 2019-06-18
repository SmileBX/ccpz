<template>
  <div class="pageContent">
    <div class="invoiceList" v-if="list.length>0" style="margin-top:20rpx">
      <div class="item" v-for="(item,index) in list" :key="index">
        <div class="item__bd" @click="selectInv(item.Id)">
          <div class="remarks">
            <text class="name">抬头名称：{{item.HeaderName}}</text>
          </div>
          <div class="type">类型：{{item.InvoiceTitlestr}}</div>
          <div class="type" v-if="item.InvoiceTitle===2">税号：{{item.TaxNumber}}</div>
        </div>
        <div class="item__ft flex">
          <label
            class="flexItem checkedLabel flex gou flexAlignCneter"
            @tap="SetDefaultinvoice(index,item.Id)"
          >
            <radio value :checked="item.IsDefault===1" color="#ff952e"/>
            <span v-if="item.IsDefault===1" style="color:#ff952e">已设为默认</span>
            <span v-else>设为默认</span>
          </label>
          <div class="flexItem flex1 text_r">
            <div class="iconText inline-block" @click="gotoAddInvoice(item.Id)">
              <img src="/static/images/icons/eadit.jpg" class="icon-compose icon" alt>编辑
            </div>
            <div class="iconText inline-block" @click="deleteBtn(index,item.Id)">
              <img src="/static/images/icons/del.jpg" class="icon-del icon" alt>删除
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="noData center" style="padding:60rpx 30rpx;" v-if="hasDataList===false && hasDataList !=='' && page===1">暂无数据</div>
    <div class="ftBtn" style="height:100rpx">
      <div class="inner fixed bm0">
        <div class="btns">
          <div class="btn center bg_ff952e color_fff" @click="gotoAddInvoice(-1)">
            <img src="/static/images/icons/add3.png" class="icon-add" alt> 新增发票信息
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { post, toLogin, getCurrentPageUrlWithArgs, trim } from "@/utils";
export default {
  onLoad() {
    wx.hideShareMenu();
  },
  onShow() {
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.list = [];
    this.hasDataList = "";
    this.getInvoiceList();
  },
  data() {
    return {
      userId: "",
      token: "",
      curPage: "",
      list: [],
      hasDataList: "",
      page: 1
    };
  },
  methods: {
    getInvoiceList() {  //获取发票列表
      let that = this;
      post(
        "About/invoiceList",
        {
          UserId: that.userId,
          Token: that.token
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          if (res.data.length > 0) {
            that.hasDataList = true;
            that.list = res.data;
          } else {
            that.hasDataList = false;
          }
        }
      });
    },
    SetDefaultinvoice(index, id) {
      //设置为默认
      let that = this;
      if (that.list[index].IsDefault === 1) {
        return false;
      }
      post(
        "About/SetDefaultinvoice",
        {
          UserId: that.userId,
          Token: that.token,
          Id: id
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          that.list.forEach((item, indexOf) => {
            if (indexOf !== index) {
              that.$set(item, "IsDefault", 0);
            } else {
              that.$set(item, "IsDefault", 1);
            }
          });
          wx.showToast({
            title: "设置默认发票成功！",
            icon: "none",
            duration: 1500
            // success:function(){
            //   setTimeout(()=>{
            //     that.list = [];
            //     that.getInvoiceList();
            //   },1500)
            // }
          });
        }
      });
    },
    deleteBtn(index, id){
      let that = this;
      post("About/Deleteinvoice",{
        UserId: that.userId,
          Token: that.token,
          Id: id
      },that.curPage).then(res => {
         if (res.code === 0) {
          wx.showToast({
            title: "删除成功",
            icon: "none",
            duration: 1500,
            success: function() {
              that.list.splice(index, 1);
              if(that.list.length===0){
                that.hasDataList = "";
              }
            }
          });
        }
      });
    },
    gotoAddInvoice(id) {
      console.log(id);
      let objUrl = "";
      if (id !==-1) {
        objUrl = "/pages/member2/addInvoice/main?id=" + id;
      } else {
        objUrl = "/pages/member2/addInvoice/main";
      }
      wx.navigateTo({
        url: objUrl
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.icon-add {
  width: 40rpx;
  height: 40rpx;
  margin-right: 10rpx;
  vertical-align: middle;
}
</style>
