<template>
  <div class="pageContent">
    <!-- 头部搜索 -->
    <div class="headerTop">
      <div class="inner flex flexAlignCenter">
        <div class="local">
          <span class="name">深圳</span>
          <span class="icon-arrow arrow-down"></span>
        </div>
        <div class="searchBox flex1">
          <div class="search">
            <img src="/static/images/icons/search.png" class="icon_search" alt>
            <span>搜索</span>
          </div>
        </div>
      </div>
    </div>
    <!-- tab切换 -->
    <div class="filterMenu pt15 bg_fff">
      <ul class="tabList menu flex justifyContentBetween">
        <li class="active">
          <div class="item">组建企业</div>
        </li>
        <li>
          <div class="item">组建团队</div>
        </li>
        <li>
          <div class="item">组建圈子</div>
        </li>
      </ul>
      <ul class="menu flex justifyContentBetween center">
        <li>
          <div class="item">
            行业
            <span class="icon-sj sj-down"></span>
          </div>
        </li>
        <li>
          <div class="item">
            区域
            <span class="icon-sj sj-down"></span>
          </div>
        </li>
        <li>
          <div class="item">
            面积
            <span class="icon-sj sj-down"></span>
          </div>
        </li>
        <li>
          <div class="item">
            价格
            <span class="icon-sj sj-down"></span>
          </div>
        </li>
        <li>
          <div class="item">
            更多
            <span class="icon-sj sj-down"></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="filterContent">
      <!-- <ul class="column levelPanel storeList" style="padding-top:0;">
        <li class="item">
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
              <p class="priceArea">
                <span class="price">3000</span>元/月
              </p>
              <p class="msgList">
                <span class="msgItem">工程设计</span>
                <span class="msgItem">
                  100m
                  <span class="sup">2</span>
                </span>
                <span class="msgItem">3卡2独</span>
                <span class="msgItem">罗湖</span>
              </p>
              <p class="tipsList">
                <span>股份合作</span>
                <span>可使用公司资质</span>
                <span>可挂牌</span>
              </p>
            </div>
          </div>
        </li>
        <li class="item">
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
              <p class="priceArea">
                <span class="price">3000</span>元/月
              </p>
              <p class="msgList">
                <span class="msgItem">工程设计</span>
                <span class="msgItem">
                  100m
                  <span class="sup">2</span>
                </span>
                <span class="msgItem">3卡2独</span>
                <span class="msgItem">罗湖</span>
              </p>
              <p class="tipsList">
                <span>股份合作</span>
                <span>可使用公司资质</span>
                <span>可挂牌</span>
              </p>
            </div>
          </div>
        </li>
        <li class="item">
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
              <p class="priceArea">
                <span class="price">3000</span>元/月
              </p>
              <p class="msgList">
                <span class="msgItem">工程设计</span>
                <span class="msgItem">
                  100m
                  <span class="sup">2</span>
                </span>
                <span class="msgItem">3卡2独</span>
                <span class="msgItem">罗湖</span>
              </p>
              <p class="tipsList">
                <span>股份合作</span>
                <span>可使用公司资质</span>
                <span>可挂牌</span>
              </p>
            </div>
          </div>
        </li>
        <li class="item">
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
              <p class="priceArea">
                <span class="price">3000</span>元/月
              </p>
              <p class="msgList">
                <span class="msgItem">工程设计</span>
                <span class="msgItem">
                  100m
                  <span class="sup">2</span>
                </span>
                <span class="msgItem">3卡2独</span>
                <span class="msgItem">罗湖</span>
              </p>
              <p class="tipsList">
                <span>股份合作</span>
                <span>可使用公司资质</span>
                <span>可挂牌</span>
              </p>
            </div>
          </div>
        </li>
      </ul>-->
      <div class="teamList">
        <div class="legalInfo flex">
          <!-- 组建圈子才有的运动按钮 -->
          <span class="motion">运动</span>
          <img src="/static/images/of/tx.jpg" class="tx" alt>
          <div class="info flex1">
            <div style="margin-bottom:16rpx;">
              <span class="name">吴正华</span>
              <img src="/static/images/icons/v.jpg" class="icon_attestation" alt>
              <span class="lookAttestation">2小时前活跃</span>
            </div>
            <p class="msgList">
              <span class="msgItem">技术总监</span>
              <span class="msgItem">深圳松大科技有限公司</span>
              <span class="attestationStatus">
                <span class="icon-gou"></span> 已认证
              </span>
            </p>
            <p class="msgList">
              <span class="msgItem">互联网</span>
              <span class="msgItem">投资500万</span>
              <span class="msgItem">民治</span>
            </p>
            <p class="slogan">本人已有公司，寻求可以一起拼搏的人才</p>
            <div class="tipsList border__tipsList flex1 bg_grey">
              <span>美工</span>
              <span>设计</span>
              <span>文员</span>
              <span>销售</span>
            </div>
          </div>
        </div>
        <div class="legalInfo flex">
          <img src="/static/images/of/tx.jpg" class="tx" alt>
          <div class="info flex1">
            <div style="margin-bottom:16rpx;">
              <span class="name">吴正华</span>
              <!-- <img src="/static/images/icons/v.jpg" class="icon_attestation" alt> -->
              <span class="lookAttestation">2小时前活跃</span>
            </div>
            <p class="msgList">
              <span class="msgItem">技术总监</span>
              <span class="msgItem">深圳松大科技有限公司</span>
              <span class="attestationStatus">
                <span class="icon-gou"></span> 已认证
              </span>
            </p>
            <p class="msgList">
              <span class="msgItem">互联网</span>
              <span class="msgItem">投资500万</span>
              <span class="msgItem">民治</span>
            </p>
            <p class="slogan">本人已有公司，寻求可以一起拼搏的人才</p>
            <div class="tipsList border__tipsList flex1 bg_grey">
              <span>美工</span>
              <span>设计</span>
              <span>文员</span>
              <span>销售</span>
            </div>
          </div>
        </div>
        <div class="legalInfo flex">
          <img src="/static/images/of/tx.jpg" class="tx" alt>
          <div class="info flex1">
            <div style="margin-bottom:16rpx;">
              <span class="name">吴正华</span>
              <img src="/static/images/icons/v.jpg" class="icon_attestation" alt>
              <span class="lookAttestation">2小时前活跃</span>
            </div>
            <p class="msgList">
              <span class="msgItem">技术总监</span>
              <span class="msgItem">深圳松大科技有限公司</span>
              <span class="attestationStatus">
                <span class="icon-gou"></span> 已认证
              </span>
            </p>
            <p class="msgList">
              <span class="msgItem">互联网</span>
              <span class="msgItem">投资500万</span>
              <span class="msgItem">民治</span>
            </p>
            <p class="slogan">本人已有公司，寻求可以一起拼搏的人才</p>
            <div class="tipsList border__tipsList flex1 bg_grey">
              <span>美工</span>
              <span>设计</span>
              <span>文员</span>
              <span>销售</span>
            </div>
          </div>
        </div>
      </div>
    </div>
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
        title: "组建"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.filterMenu .tabList {
  color: #333;
  font-size: 32rpx;
  border-bottom: none;
}
.tipsList {
  margin-top: 18rpx;
  span {
    font-size: 24rpx !important;
    margin-right: 20rpx;
    line-height: 1.3;
  }
}
</style>
