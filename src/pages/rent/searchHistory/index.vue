<template>
  <div class="pageContent bg_fff">
    <!-- 搜索 -->
    <div class="searchTop">
      <div class="searchBox flex">
          <div class="search flex flex1">
            <img src="/static/images/icons/search.png" class="icon_search" alt>
            <input type="text" class="flex1" placeholder="请输入您要搜索的关键词">
            <img src="/static/images/icons/cancle.png" class="icon-del" alt="">
          </div>
          <span class="btnSearch">搜索</span>
        </div>
    </div>
    <div class="searchRecord">
      <div class="item">
        <div class="section__hd flex flexAlignCenter">
          <p class="title flex1">历史搜索</p>
          <img src="/static/images/icons/del.jpg" class="icon-del" alt="">
        </div>
        <div class="tipsList border__tipsList bg_grey">
          <span>拼租</span>
          <span>办公司</span>
          <span>组建圈子</span>
        </div>
      </div>
      <div class="item">
        <div class="section__hd">
          <p class="title">热门搜素</p>
        </div>
        <div class="tipsList border__tipsList bg_grey">
          <span>拼租</span>
          <span>办公司</span>
          <span>组建圈子</span>
          <span>拼租</span>
          <span>办公司</span>
          <span>组建圈子</span>
          <span>拼租</span>
          <span>办公司</span>
          <span>组建圈子</span>
          <span>拼租</span>
          <span>办公司</span>
          <span>组建圈子</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
        title: "搜索"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.pageContent {
  height: 100vh;
}
.searchBox{
  padding-left:30rpx;
  .search{
    border:1px solid #e5e5e5;
    background: #f2f2f2;
    border-radius: 10rpx;
    padding:8rpx 18rpx;
  }
  .icon-del{
    width: 36rpx;
    height: 36rpx;
  }
  .btnSearch{
    width: 120rpx;
    text-align: center;
    font-size: 30rpx;
    line-height: 74rpx;
  }
}
.section__hd {
  .title {
    font-weight: normal;
  }
  .icon-del{
    width: 30rpx;
    height: 30rpx;
  }
}
.tipsList {
  padding:0 30rpx;
  margin-top:0;
span{
  font-size: 28rpx;
  color:#333;
  padding:10rpx 20rpx;
  border-radius: 10rpx;
}
}
.searchRecord{
  .item{
    padding-bottom: 30rpx;
    position: relative;
    &::before{
      position: absolute;
      content: "";
      height: 1px;
      left:30rpx;
      right:30rpx;
      background: #f2f2f2;
      bottom:0;
    }
    &:last-child::before{
      display: none;
    }
  }
}

</style>