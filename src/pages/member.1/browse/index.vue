<template>
  <div class="pageContent">
    <div class="filterMenu bg_fff" style="padding:0;">
      <ul class="menu bbNo__menu bbLi__menu li_50 flex center">
        <li :class="{'active':tabIndex===0}" @click="shiftTab(0)">
          <div class="item">信息</div>
        </li>
        <li :class="{'active':tabIndex===1}" @click="shiftTab(1)">
          <div class="item">谁看过我</div>
        </li>
      </ul>
    </div>
    <scroll-view class="filterContent bg_fff mt10" scroll-y="true">
      <!-- 信息 -->
      <div class="column levelPanel storeList" style="padding:0;" v-if="tabIndex===0">
        <div class="section__hd">
          <span class="time">05月04日</span>
        </div>
        <div class="item">
          <div class="outside">
            <div class="pictrueAll">
              <div class="pictrue img">
                <img src="/static/images/of/index_a1.jpg" alt>
              </div>
            </div>
            <div class="txtBox">
              <p class="title ellipsis">
                <span class="typeName">拼办公室</span>深圳连锁办公室拼租
              </p>
              <p class="msgList" style="margin-top:20rpx;">
                <span class="msgItem">工程设计</span>
                <span class="msgItem">
                  100m
                  <span class="sup">2</span>
                </span>
                <span class="msgItem">3卡2独</span>
                <span class="msgItem">罗湖</span>
              </p>
              <div class="flex" style="margin-top:38rpx;">
                <p class="priceArea flex1 flexAlignCenter">
                  <span class="price">3000</span>元/月
                </p>
                <span class="time">13:12</span>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="outside">
            <div class="pictrueAll">
              <div class="pictrue img">
                <img src="/static/images/of/index_a1.jpg" alt>
              </div>
            </div>
            <div class="txtBox">
              <p class="title ellipsis">
                <span class="typeName">拼办公室</span>深圳连锁办公室拼租
              </p>
              <p class="msgList" style="margin-top:20rpx;">
                <span class="msgItem">工程设计</span>
                <span class="msgItem">
                  100m
                  <span class="sup">2</span>
                </span>
                <span class="msgItem">3卡2独</span>
                <span class="msgItem">罗湖</span>
              </p>
              <div class="flex" style="margin-top:38rpx;">
                <p class="priceArea flex1 flexAlignCenter">
                  <span class="price">3000</span>元/月
                </p>
                <span class="time">13:12</span>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="outside">
            <div class="pictrueAll">
              <div class="pictrue img">
                <img src="/static/images/of/index_a1.jpg" alt>
              </div>
            </div>
            <div class="txtBox">
              <p class="title ellipsis">
                <span class="typeName">拼办公室</span>深圳连锁办公室拼租
              </p>
              <p class="msgList" style="margin-top:20rpx;">
                <span class="msgItem">工程设计</span>
                <span class="msgItem">
                  100m
                  <span class="sup">2</span>
                </span>
                <span class="msgItem">3卡2独</span>
                <span class="msgItem">罗湖</span>
              </p>
              <div class="flex" style="margin-top:38rpx;">
                <p class="priceArea flex1 flexAlignCenter">
                  <span class="price">3000</span>元/月
                </p>
                <span class="time">13:12</span>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="outside">
            <div class="pictrueAll">
              <div class="pictrue img">
                <img src="/static/images/of/index_a1.jpg" alt>
              </div>
            </div>
            <div class="txtBox">
              <p class="title ellipsis">
                <span class="typeName">拼办公室</span>深圳连锁办公室拼租
              </p>
              <p class="msgList" style="margin-top:20rpx;">
                <span class="msgItem">工程设计</span>
                <span class="msgItem">
                  100m
                  <span class="sup">2</span>
                </span>
                <span class="msgItem">3卡2独</span>
                <span class="msgItem">罗湖</span>
              </p>
              <div class="flex" style="margin-top:38rpx;">
                <p class="priceArea flex1 flexAlignCenter">
                  <span class="price">3000</span>元/月
                </p>
                <span class="time">13:12</span>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="outside">
            <div class="pictrueAll">
              <div class="pictrue img">
                <img src="/static/images/of/index_a1.jpg" alt>
              </div>
            </div>
            <div class="txtBox">
              <p class="title ellipsis">
                <span class="typeName">拼办公室</span>深圳连锁办公室拼租
              </p>
              <p class="msgList" style="margin-top:20rpx;">
                <span class="msgItem">工程设计</span>
                <span class="msgItem">
                  100m
                  <span class="sup">2</span>
                </span>
                <span class="msgItem">3卡2独</span>
                <span class="msgItem">罗湖</span>
              </p>
              <div class="flex" style="margin-top:38rpx;">
                <p class="priceArea flex1 flexAlignCenter">
                  <span class="price">3000</span>元/月
                </p>
                <span class="time">13:12</span>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="outside">
            <div class="pictrueAll">
              <div class="pictrue img">
                <img src="/static/images/of/index_a1.jpg" alt>
              </div>
            </div>
            <div class="txtBox">
              <p class="title ellipsis">
                <span class="typeName">拼办公室</span>深圳连锁办公室拼租
              </p>
              <p class="msgList" style="margin-top:20rpx;">
                <span class="msgItem">工程设计</span>
                <span class="msgItem">
                  100m
                  <span class="sup">2</span>
                </span>
                <span class="msgItem">3卡2独</span>
                <span class="msgItem">罗湖</span>
              </p>
              <div class="flex" style="margin-top:38rpx;">
                <p class="priceArea flex1 flexAlignCenter">
                  <span class="price">3000</span>元/月
                </p>
                <span class="time">13:12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 谁看过我 -->
      <div class="weui-cells readList" v-if="tabIndex===1">
        <div class="weui-cell">
          <img src="/static/images/of/tx.jpg" class="tx" alt>
          <div class="weui-cell__bd">
            <p>
              <span class="name">李刚</span>
              <img src="/static/images/icons/v.jpg" class="icon_attestation" alt>
            </p>
            <p class="msgList">
              <span class="msgItem">CEO</span>
              <span class="msgItem">上海某网络公司</span>
            </p>
          </div>
          <span class="time">8小时前到访</span>
        </div>
        <div class="weui-cell">
          <img src="/static/images/of/tx.jpg" class="tx" alt>
          <div class="weui-cell__bd">
            <p>
              <span class="name">李刚</span>
              <img src="/static/images/icons/v.jpg" class="icon_attestation" alt>
            </p>
            <p class="msgList">
              <span class="msgItem">CEO</span>
              <span class="msgItem">上海某网络公司</span>
            </p>
          </div>
          <span class="time">8小时前到访</span>
        </div>
        <div class="weui-cell">
          <img src="/static/images/of/tx.jpg" class="tx" alt>
          <div class="weui-cell__bd">
            <p>
              <span class="name">李刚</span>
              <img src="/static/images/icons/v.jpg" class="icon_attestation" alt>
            </p>
            <p class="msgList">
              <span class="msgItem">CEO</span>
              <span class="msgItem">上海某网络公司</span>
            </p>
          </div>
          <span class="time">8小时前到访</span>
        </div>
        <div class="weui-cell">
          <img src="/static/images/of/tx.jpg" class="tx" alt>
          <div class="weui-cell__bd">
            <p>
              <span class="name">李刚</span>
              <img src="/static/images/icons/v.jpg" class="icon_attestation" alt>
            </p>
            <p class="msgList">
              <span class="msgItem">CEO</span>
              <span class="msgItem">上海某网络公司</span>
            </p>
          </div>
          <span class="time">8小时前到访</span>
        </div>
      </div>
    </scroll-view>
  </div>
</template>
<script>
export default {
  onLoad() {
    this.setBarTitle();
  },
  onShow() {},
  data() {
    return {
      tabIndex:0
    };
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "我的浏览"
      });
    },
    shiftTab(index){
      this.tabIndex = parseInt(index);
    }
  }
};
</script>
<style lang="scss" scoped>
.filterMenu {
  color: #333;
  font-size: 32rpx;
}
.storeList .section__hd {
  border-bottom: 1px solid #f2f2f2;
  padding: 10rpx 30rpx;
}
.filterContent {
  height: calc(100vh - 90rpx);
  height: -webkit-calc(100vh - 90rpx);
  overflow: hidden;
}
.storeList.levelPanel .item {
  position: relative;
  &::before {
    position: absolute;
    content: "";
    left: 30rpx;
    right: 0;
    height: 1px;
    background: #f2f2f2;
    bottom: 0;
  }
}
.storeList.levelPanel .item .outside {
  padding: 30rpx !important;
}
.readList {
  .weui-cell {
    padding-top: 30rpx;
    padding-bottom: 30rpx;
    &::before {
      left: 30rpx;
      right: 0;
    }
    &:last-child:before {
      display: block;
    }
  }
}
</style>
