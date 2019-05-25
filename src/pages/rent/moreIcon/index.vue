<template>
  <div class="page bg_fff borderTop" style="height:100vh">
    <!-- tab切换 -->
    <div class="navBox">
      <ul class="navList li_20 center navList2 flex">
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/bangongshi.jpg" alt>
            </div>
            <p class="title">办公室</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/kawei.jpg" alt>
            </div>
            <p class="title">卡位</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/huiyishi.jpg" alt>
            </div>
            <p class="title">会议室</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/peixun.jpg" alt>
            </div>
            <p class="title">培训机构</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/duanzu.jpg" alt>
            </div>
            <p class="title">短租</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/shangpu.jpg" alt>
            </div>
            <p class="title">商铺</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/gongchang.jpg" alt>
            </div>
            <p class="title">工厂</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/shebei.jpg" alt>
            </div>
            <p class="title">设备</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/shoumaiji.jpg" alt>
            </div>
            <p class="title">自动售卖机</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/qita.jpg" alt>
            </div>
            <p class="title">其他</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      isShow:false,//蒙版
      ShowCenter:false,//中间一级遮罩层
      list:['不限','招商会','发布会','发布会','发布会','发布会','发布会','发布会','发布会','发布会','招商会','发布会',],//中间弹层列表
      ShowSecond:false,//二级联动
      ShowSecondRight:false,//二级联动右侧
      ShowPrice:false,//拼价格
    }
  },
  onLoad() {
    this.setBarTitle();
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "拼租"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.navList2 li{
  width:25%;
  box-sizing:border-box
}
</style>