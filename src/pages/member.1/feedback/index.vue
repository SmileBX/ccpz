<template>
  <div class="pageContent">
    <div class="section bg_fff pd15" v-if="type==3">
      <div class="form-cells-hd">选择服务</div>
      <checkbox-group class="checkboxGroup">
        <label class="check__label">
          <checkbox value class="checkbox" color="#ff952e" checked/>股权培训
        </label>
        <label class="check__label">
          <checkbox value class="checkbox" color="#ff952e" checked/>资产评估
        </label>
        <label class="check__label">
          <checkbox value class="checkbox" color="#ff952e" checked/>拼租指导
        </label>
      </checkbox-group>
    </div>
    <div class="section bg_fff pd15">
      <textarea class="weui-area" placeholder="请输入内容"></textarea>
    </div>
    <div class="section bg_fff pd15" v-if="type==1 || type==2">
      <div class="form-cells-item">
        <div class="form-cells-hd">
          <block v-if="type==1">图片反馈</block>
          <block v-if="type==2">上传图片</block>
        </div>
        <div class="form-cell-bd form-cell-img">
          <div class="upbtn">
            <span class="close">×</span>
            <img class="upimg" src="/static/images/of/index_a1.jpg">
          </div>
          <div class="upbtn">
            <img class="upimg" src="/static/images/icons/upload_1.png">
          </div>
        </div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <span class="label">姓名</span>
        <div class="weui-cell__bd">
          <input type="text" class="weui-input" placeholder="请输入您的姓名">
        </div>
      </div>
      <div class="weui-cell">
        <span class="label">电话</span>
        <div class="weui-cell__bd">
          <input type="text" class="weui-input" placeholder="请输入您的电话号码">
        </div>
      </div>
    </div>
    <div style="padding:80rpx 30rpx;">
      <div class="weui-btn btn-active fill">提交</div>
    </div>
  </div>
</template>
<script>
export default {
  onShow() {
    //type:1:意见反馈；2：合作加盟；3：增值服务
    this.type = this.$root.$mp.query.type;
    this.setBarTitle();
  },
  data() {
    return {
      type: ""
    };
  },
  methods: {
    setBarTitle() {
      let name = "";
      if (this.type == 1) {
        name = "意见反馈";
      } else if (this.type == 2) {
        name = "合作加盟";
      } else if (this.type == 3) {
        name = "增值服务";
      } else {
        name = "拼租";
      }
      wx.setNavigationBarTitle({
        title: name
      });
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
