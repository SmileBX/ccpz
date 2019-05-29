<template>
  <div class="pageContent">
    <div class="FormBox">
      <img class="topbgimg" src="/static/images/icons/bg1.jpg">
      <div class="FormCon" style="margin-top:-260rpx;">
        <div class="formTitle">
          <div class="titletxt">设备拼租表单</div>
          <p class="subtitle">(设备/售卖机)</p>
        </div>
        <div class="form-cells">
          <div class="form-cells-item">
            <div class="form-cells-navigate navigate-right">
              <div class="form-cells-hd">标题</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  placeholder="请填写适合标题"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <div class="form-cells-item">
            <div class="form-cells-navigate navigate-bottom">
              <div class="form-cells-hd">公司名称</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  placeholder="请输入公司名称"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <div class="form-cells-item" style="padding-right:0">
            <div class="form-cells-item">
              <div class="form-cell-bd">深圳木棉科技有限公司</div>
            </div>
            <div class="form-cells-item">
              <div class="form-cell-bd">深圳大漠时代文化传媒集团有限公司</div>
            </div>
          </div>
          <div class="form-cells-item form-cells-item2">
            <div class="item2-column">
              <div class="form-cells-hd">公司类别</div>
              <input
                class="ipt"
                type="text"
                disabled
                placeholder="请选择"
                placeholder-style="color:#b5b5b5;"
              >
            </div>
            <div class="item2-column">
              <div class="form-cells-hd">意向拼租行业</div>
              <input
                class="ipt"
                type="text"
                disabled
                placeholder="请选择"
                placeholder-style="color:#b5b5b5;"
              >
            </div>
          </div>
          <div class="form-cells-item form-cells-item2">
            <div class="item2-column">
              <div class="form-cells-hd">需求设备规格</div>
              <input
                class="ipt"
                type="text"
                disabled
                placeholder="请选择"
                placeholder-style="color:#b5b5b5;"
              >
            </div>
            <div class="item2-column">
              <div class="form-cells-hd">设备类型</div>
              <input
                class="ipt"
                type="text"
                disabled
                placeholder="请选择"
                placeholder-style="color:#b5b5b5;"
              >
            </div>
          </div>
          <div class="form-cells-item form-cells-item2">
            <div class="item2-column">
              <div class="form-cells-hd">价格区间</div>
              <input
                class="ipt"
                type="text"
                disabled
                placeholder="请选择"
                placeholder-style="color:#b5b5b5;"
              >
            </div>
            <div class="item2-column">
              <div class="form-cells-hd">设备租金</div>
              <input
                class="ipt"
                type="text"
                disabled
                placeholder="请选择"
                placeholder-style="color:#b5b5b5;"
              >
            </div>
          </div>
          <div class="form-cells-item form-cells-item2">
            <div class="item2-column">
              <div class="form-cells-hd">可租时间</div>
              <input
                class="ipt"
                type="text"
                disabled
                placeholder="请选择"
                placeholder-style="color:#b5b5b5;"
              >
            </div>
            <div class="item2-column">
              <div class="form-cells-hd">地区</div>
              <input
                class="ipt"
                type="text"
                disabled
                placeholder="请选择"
                placeholder-style="color:#b5b5b5;"
              >
            </div>
          </div>
          <div class="form-cells-item">
            <div class="form-cells-navigate navigate-right">
              <div class="form-cells-hd">公司简介</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  placeholder="请填写公司详细简介"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <div class="form-cells-item">
            <div class="form-cells-hd">设备照片上传</div>
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
          <div class="form-cells-item form-cells-item2">
            <div class="item2-column">
              <div class="form-cells-hd">可否注册</div>
              <input
                class="ipt"
                type="text"
                disabled
                placeholder="请选择"
                placeholder-style="color:#b5b5b5;"
              >
            </div>
            <div class="item2-column">
              <div class="form-cells-hd">可否挂牌</div>
              <input
                class="ipt"
                type="text"
                disabled
                placeholder="请选择"
                placeholder-style="color:#b5b5b5;"
              >
            </div>
          </div>
          <div class="form-cells-item form-cells-item2">
            <div class="item2-column">
              <div class="form-cells-hd">业务分包</div>
              <input
                class="ipt"
                type="text"
                disabled
                placeholder="请选择"
                placeholder-style="color:#b5b5b5;"
              >
            </div>
            <div class="item2-column">
              <div class="form-cells-hd">资质使用</div>
              <input
                class="ipt"
                type="text"
                disabled
                placeholder="请选择"
                placeholder-style="color:#b5b5b5;"
              >
            </div>
          </div>
          <div class="form-cells-item form-cells-item2">
            <div class="item2-column">
              <div class="form-cells-hd">股份合作</div>
              <input
                class="ipt"
                type="text"
                disabled
                placeholder="请选择"
                placeholder-style="color:#b5b5b5;"
              >
            </div>
            <div class="item2-column">
              <div class="form-cells-hd">实缴资本</div>
              <input
                class="ipt"
                type="text"
                disabled
                placeholder="请选择"
                placeholder-style="color:#b5b5b5;"
              >
            </div>
          </div>
          <div class="form-cells-item">
            <div class="form-cells-navigate navigate-right">
              <div class="form-cells-hd">公司地址</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  placeholder="办公大楼名称 例：京基大厦"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <div class="form-cells-item">
            <div>
              <div class="form-cells-hd">门牌号</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  placeholder="门牌号/楼号等 例：3楼416室"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ftbox">
        <div class="btn">确认发布</div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/style/style_fb.scss";
export default {
  data() {
    return {};
  },
  onLoad() {
    this.setBarTitle();
  },
  components: {},
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "发布"
      });
    }
  },

  created() {}
};
</script>
<style lang="scss" scoped>

</style>