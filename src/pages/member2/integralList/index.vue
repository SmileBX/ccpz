<template>
  <div class="pageContent">
    <div class="filterMenu bg_fff" style="padding:0;">
      <ul class="menu bbLi__menu bbNo__menu li_33 flex center">
        <li :class="{'active':type===0}" @click="shiftMenu(0)">
          <div class="item">全部</div>
        </li>
        <li :class="{'active':type===1}" @click="shiftMenu(1)">
          <div class="item">获得</div>
        </li>
        <li :class="{'active':type===2}" @click="shiftMenu(2)">
          <div class="item">消耗</div>
        </li>
      </ul>
    </div>
    <scroll-view class="filterContent" scroll-y="true">
      <ul class="detailList" v-if="list.length>0">
        <li v-for="(item,index) in list" :key="index">
          <div class="flex">
            <div class="flex1">
              <p class="title">完善资料</p>
            </div>
            <p class="change right text_r">
              <span class="changeNum add">+20</span>
            </p>
          </div>
          <div class="flex">
            <div class="flex1">
              <p class="time">{{item.AddTime}}</p>
            </div>
            <p class="num right text_r">积分：{{item.After}}</p>
          </div>
        </li>
        <li>
          <div class="flex">
            <div class="flex1">
              <p class="title">兑换会员次卡</p>
            </div>
            <p class="change right text_r"><span class="changeNum reduce">-200</span></p>
          </div>
          <div class="flex">
            <div class="flex1">
              <p class="time">2018-08-12 11:06</p>
            </div>
            <p class="num right text_r">积分：20</p>
          </div>
        </li>
        <li>
          <div class="flex">
            <div class="flex1">
              <p class="title">完善资料</p>
            </div>
            <p class="change right text_r"><span class="changeNum add">+20</span></p>
          </div>
          <div class="flex">
            <div class="flex1">
              <p class="time">2018-08-12 11:06</p>
            </div>
            <p class="num right text_r">积分：120</p>
          </div>
        </li>
        <li>
          <div class="flex">
            <div class="flex1">
              <p class="title">兑换会员次卡</p>
            </div>
            <p class="change right text_r"><span class="changeNum reduce">-200</span></p>
          </div>
          <div class="flex">
            <div class="flex1">
              <p class="time">2018-08-12 11:06</p>
            </div>
            <p class="num right text_r">积分：20</p>
          </div>
        </li>
        <li>
          <div class="flex">
            <div class="flex1">
              <p class="title">完善资料</p>
            </div>
            <p class="change right text_r"><span class="changeNum add">+20</span></p>
          </div>
          <div class="flex">
            <div class="flex1">
              <p class="time">2018-08-12 11:06</p>
            </div>
            <p class="num right text_r">积分：120</p>
          </div>
        </li>
        <li>
          <div class="flex">
            <div class="flex1">
              <p class="title">兑换会员次卡</p>
            </div>
            <p class="change right text_r"><span class="changeNum reduce">-200</span></p>
          </div>
          <div class="flex">
            <div class="flex1">
              <p class="time">2018-08-12 11:06</p>
            </div>
            <p class="num right text_r">积分：20</p>
          </div>
        </li>
        <li>
          <div class="flex">
            <div class="flex1">
              <p class="title">完善资料</p>
            </div>
            <p class="change right text_r"><span class="changeNum add">+20</span></p>
          </div>
          <div class="flex">
            <div class="flex1">
              <p class="time">2018-08-12 11:06</p>
            </div>
            <p class="num right text_r">积分：120</p>
          </div>
        </li>
        <li>
          <div class="flex">
            <div class="flex1">
              <p class="title">兑换会员次卡</p>
            </div>
            <p class="change right text_r"><span class="changeNum reduce">-200</span></p>
          </div>
          <div class="flex">
            <div class="flex1">
              <p class="time">2018-08-12 11:06</p>
            </div>
            <p class="num right text_r">积分：20</p>
          </div>
        </li>
        <li>
          <div class="flex">
            <div class="flex1">
              <p class="title">完善资料</p>
            </div>
            <p class="change right text_r"><span class="changeNum add">+20</span></p>
          </div>
          <div class="flex">
            <div class="flex1">
              <p class="time">2018-08-12 11:06</p>
            </div>
            <p class="num right text_r">积分：120</p>
          </div>
        </li>
        <li>
          <div class="flex">
            <div class="flex1">
              <p class="title">兑换会员次卡</p>
            </div>
            <p class="change right text_r"><span class="changeNum reduce">-200</span></p>
          </div>
          <div class="flex">
            <div class="flex1">
              <p class="time">2018-08-12 11:06</p>
            </div>
            <p class="num right text_r">积分：20</p>
          </div>
        </li>
        <li>
          <div class="flex">
            <div class="flex1">
              <p class="title">完善资料</p>
            </div>
            <p class="change right text_r"><span class="changeNum add">+20</span></p>
          </div>
          <div class="flex">
            <div class="flex1">
              <p class="time">2018-08-12 11:06</p>
            </div>
            <p class="num right text_r">积分：120</p>
          </div>
        </li>
        <li>
          <div class="flex">
            <div class="flex1">
              <p class="title">兑换会员次卡</p>
            </div>
            <p class="change right text_r"><span class="changeNum reduce">-200</span></p>
          </div>
          <div class="flex">
            <div class="flex1">
              <p class="time">2018-08-12 11:06</p>
            </div>
            <p class="num right text_r">积分：20</p>
          </div>
        </li>
      </ul>
    </scroll-view>
  </div>
</template>
<script>
export default {
  onLoad() {
    this.setBarTitle();
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "积分明细"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.bbLi__menu{
  font-size: 32rpx;
  color: #333;
}
.filterContent{
  height: calc(100vh - 90rpx);
  background: #fff;
  margin-top:20rpx;
}

</style>
