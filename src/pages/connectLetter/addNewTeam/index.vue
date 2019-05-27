<template>
  <div class="page borderTop addteam">
    <!--输入框-->
      <div class="bg_fff flex flexAlignCenter pall">
          <img src="/static/images/icons/search.png" alt="" class="icon_search">
          <input type="text" placeholder="搜索" class="flex1">
      </div>
      <div class="slidebg"></div>
      <!--分组名称-->
      <div class="bg_fff flex flexAlignCenter justifyContentBetween pall">
          <p>分组名称</p>
          <input type="text" placeholder="设置分组名称" class="flex2 fontColor" style="font-size:30rpx;text-align:right">
      </div>
      <div class="slidebg"></div>
      <!--添加成员-->
      <div class="bg_fff flex flexAlignCenter pall">
          <img src="/static/images/icons/add2.jpg" alt="" class="icon_add2">
          <span class="fontColor99">添加成员</span>
          <span class="fontColor flex1" style="text-align:right">(2)</span>
      </div>
      <!--组列表-->
      <div class="boxSize">
        <!--字母-->
          <div class="lettertip">A</div>
          <!--字母对应的列表-->
          <van-swipe-cell :right-width="65" :on-close="onClose"       class="swipe-cell">
            <van-cell-group>
              <van-cell class="">
                  <div class="flexAlignCenter flex">
                      <div class="avatarbox mrr2">
                        <img src="/static/images/of/ava.png" alt="" class="avatar">
                      </div>
                      <p class="flex1 fontBold listname">兄弟姐妹</p>
                  </div>
              </van-cell>
            </van-cell-group>
            <span slot="right" class="van-swipe-cell__right">删除</span>
          </van-swipe-cell>
          <van-swipe-cell :right-width="65" :on-close="onClose"       class="swipe-cell">
            <van-cell-group>
              <van-cell class="">
                  <div class="flexAlignCenter flex">
                      <div class="avatarbox mrr2">
                        <img src="/static/images/of/ava.png" alt="" class="avatar">
                      </div>
                      <p class="flex1 fontBold listname">兄弟姐妹</p>
                  </div>
              </van-cell>
            </van-cell-group>
            <span slot="right" class="van-swipe-cell__right">删除</span>
          </van-swipe-cell>
          <van-swipe-cell :right-width="65" :on-close="onClose"       class="swipe-cell">
            <van-cell-group>
              <van-cell class="">
                  <div class="flexAlignCenter flex">
                      <div class="avatarbox mrr2">
                        <img src="/static/images/of/ava.png" alt="" class="avatar">
                      </div>
                      <p class="flex1 fontBold listname">兄弟姐妹</p>
                  </div>
              </van-cell>
            </van-cell-group>
            <span slot="right" class="van-swipe-cell__right">删除</span>
          </van-swipe-cell>
      </div>
      <!--底部按钮-->
      <div class="btnSub2">完成</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      verMsg:'我是',
    }
  },
   onLoad() {
    this.setBarTitle();
  },

  components: {
  },

  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "新建分组"
      });
    },
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            instance.close();
          });
          break;
      }
    }

  },

  created () {
    // let app = getApp()
  }
}
</script>
<style lang='scss' scoped>
@import "./index";
.swipe-cell{
  // width:100%!important;
  // height:200rpx!important;
}
// .delper{
//   background:#f00;
//   color:#fff;
//   height:100%;
//   width:65rpx;
// }
.van-swipe-cell__left,
.van-swipe-cell__right {
  display: inline-block;
  width: 130rpx;
  height: 120rpx;
  font-size: 28rpx;
  line-height: 120rpx;
  color: #fff;
  text-align: center;
  background-color: #f44;
}
</style>
