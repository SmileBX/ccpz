<template>
  <div class="pageContent">
    <div class="invoiceList" v-if="list.length>0" style="margin-top:20rpx">
      <div class="item" v-for="(item,index) in list" :key="index">
        <div class="item__bd" @click="selectInv(item.Id)">
          <div class="remarks">
            <text class="name">抬头名称：{{item.HeaderName}}</text>
          </div>
          <div class="type">类型：{{item.InvoiceTitlestr}}</div>
          <div class="type" v-if="item.InvoiceTitle===1">税号：{{item.TaxNumber}}</div>
        </div>
        <div class="item__ft flex">
          <label class="flexItem checkedLabel flex flexAlignCneter">
            <radio value="" :checked="item.IsDefault===1" color="#ff952e" />
            <span>已设为默认</span>
          </label>
          <div class="flexItem flex1 text_r">
            <div class="iconText inline-block" @click="gotoAddInvoice(item.Id)">
              <img src="/static/images/icons/eadit.jpg" class="icon-compose icon" alt="">编辑
            </div>
            <div class="iconText inline-block" @click="deleteBtn(index,item.Id)">
              <img src="/static/images/icons/del.jpg" class="icon-del icon" alt="">删除
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ftBtn" style="height:100rpx">
      <div class="inner fixed bm0">
        <div class="btns">
          <div class="btn center bg_ff952e color_fff"><img src="/static/images/icons/add3.png" class="icon-add" alt=""> 新增发票信息</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  onLoad() {
    wx.hideShareMenu();
  },
  data() {
    return {
      list: [
        {
          HeaderName: "闵poor",
          Id: 103,
          InvoiceTitle: 1,
          InvoiceTitlestr: "单位(公司)",
          IsDefault: 1,
          IsVATExclusive: 1,
          TaxNumber: "1254646898986865646"
        },
        {
          HeaderName: "闵poor",
          Id: 103,
          InvoiceTitle: 1,
          InvoiceTitlestr: "单位(公司)",
          IsDefault: 1,
          IsVATExclusive: 1,
          TaxNumber: "1254646898986865646"
        },
        {
          HeaderName: "闵poor",
          Id: 103,
          InvoiceTitle: 1,
          InvoiceTitlestr: "单位(公司)",
          IsDefault: 1,
          IsVATExclusive: 1,
          TaxNumber: "1254646898986865646"
        },{
          HeaderName: "闵poor",
          Id: 103,
          InvoiceTitle: 1,
          InvoiceTitlestr: "单位(公司)",
          IsDefault: 1,
          IsVATExclusive: 1,
          TaxNumber: "1254646898986865646"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.icon-add{
  width: 40rpx;
  height: 40rpx;
  margin-right: 10rpx;
  vertical-align: middle;
}
</style>
