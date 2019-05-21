<template>
  <div class="pageContent">
    <div class="storeDetail">
      <div class="section pb20">
        <div class="swiper">
          <img src="/static/images/of/storeDetail.jpg" style="width:100%;height:400rpx;" alt>
        </div>
        <div class="shortInfo">
          <h2 class="name">星河世纪大厦拼购商铺</h2>
          <p class="priceArea">
            <span class="price">8000</span>元/月
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
            <span>业务分包</span>
            <span>可使用公司资质</span>
            <span>可挂牌</span>
          </p>
          <p class="purpose">
            <span class="label">意向拼购方行业</span>
            <span>珠宝销售</span>
          </p>
        </div>
        <!-- 公司简介 -->
        <div class="comAbout pt15">
          <!-- 商铺详情的 -->
          <div class="weui-cells noBorder__weui-cells column__weui-cells mt0">
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">公司名称</div>
                <div class="weui-cell__bd">深耐科技有限公司</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">成立时间</div>
                <div class="weui-cell__bd">2019.05.06</div>
              </div>
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">物业形式</div>
                <div class="weui-cell__bd">新物业</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">计划购买面积</div>
                <div class="weui-cell__bd">
                  <span>
                    200m
                    <span class="sup">2</span>
                  </span>
                </div>
              </div>
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">购买预算</div>
                <div class="weui-cell__bd">100万</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">区间价格</div>
                <div class="weui-cell__bd">8000-1万</div>
              </div>
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">是否装修</div>
                <div class="weui-cell__bd">是</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">计划购买日期</div>
                <div class="weui-cell__bd">2019.05.05</div>
              </div>
            </div>
          </div>
          <!-- 商铺详情的  end -->
          <!-- 设备详情的 -->
          <div class="weui-cells noBorder__weui-cells column__weui-cells mt0" style="display:none">
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">公司名称</div>
                <div class="weui-cell__bd">深耐科技有限公司</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">规格型号</div>
                <div class="weui-cell__bd">2JHL60</div>
              </div>
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">设备类型</div>
                <div class="weui-cell__bd">工程</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">设备单价</div>
                <div class="weui-cell__bd">1000元/个</div>
              </div>
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">计划购买数量</div>
                <div class="weui-cell__bd">5台</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">设备形式</div>
                <div class="weui-cell__bd">二手设备</div>
              </div>
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">购买预算</div>
                <div class="weui-cell__bd">10万</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">设备使用区域</div>
                <div class="weui-cell__bd">龙华</div>
              </div>
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">计划购买日期</div>
                <div class="weui-cell__bd">2019.05.15</div>
              </div>
            </div>
          </div>
          <!-- 设备详情的  end -->
          <div class="about">
            <div class="item">
              <h3 class="title label">公司简介</h3>
              <div
                class="con"
              >深圳市松大科技有限公司隶属于深圳市松大电通集团，秉承集团在建筑电气及智能化领域的事业，专业从事建筑智能化系统的产品研发、生产、销售和售后服务，已</div>
            </div>
            <div class="item">
              <h3 class="title label">公司理念</h3>
              <div class="con">深圳市松大科技有限公司教育装备产品事业部致力于教育装备产品的研发、生产、销售。</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 商铺详情、办公室详情才有的 -->
      <div class="section pt10 pb10">
        <div class="weui-cells noBorder__weui-cells column__weui-cells mt0">
          <div class="group flex">
            <div class="weui-cell flex1">
              <div class="weui-cell__hd">法人代表</div>
              <div class="weui-cell__bd">丽莎</div>
            </div>
            <div class="weui-cell flex1">
              <div class="weui-cell__hd">籍贯</div>
              <div class="weui-cell__bd">中国</div>
            </div>
          </div>
          <div class="group flex">
            <div class="weui-cell flex1">
              <div class="weui-cell__hd">注册资本</div>
              <div class="weui-cell__bd">有</div>
            </div>
            <div class="weui-cell flex1">
              <div class="weui-cell__hd">实缴资本</div>
              <div class="weui-cell__bd">有</div>
            </div>
          </div>
          <div class="group flex">
            <div class="weui-cell flex1">
              <div class="weui-cell__hd">社会信用代码</div>
              <div class="weui-cell__bd">有</div>
            </div>
            <div class="weui-cell flex1">
              <div class="weui-cell__hd">营业执照上传</div>
              <div class="weui-cell__bd">有</div>
            </div>
          </div>
          <div class="group flex">
            <div class="weui-cell flex1">
              <div class="weui-cell__hd">自他资质证书上传</div>
              <div class="weui-cell__bd">有</div>
            </div>
            <div class="weui-cell flex1">
              <div class="weui-cell__hd">官网</div>
              <div class="weui-cell__bd">有</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 商铺详情、办公室详情才有的 end -->
      <!-- 拼租条件 -->
      <div class="section pd15">
        <h3 class="title detail__title">拼租条件表明</h3>
        <p class="tipsList border__tipsList">
          <span>网络</span>
          <span>打印机</span>
          <span>会议室</span>
          <span>前台</span>
          <span>电梯</span>
        </p>
      </div>
      <!-- 拼租条件  end -->
      <div class="section">
        <div class="locationBox pd15">
          <h3 class="title detail__title">地理位置</h3>
          <div class="flex flexAlignCenter">
            <div class="flex1">
              <p class="address">宝安 宝安中心区 天健时尚空间</p>
              <p class="space">距离宝华站地铁站357米</p>
            </div>
            <img src="/static/images/icons/map.jpg" class="map" alt>
          </div>
        </div>
      </div>
      <!-- 短租的个人主页 -->
      <div class="section pd15">
        <h3 class="title detail__title">个人主页</h3>
        <div class="perInfo">
            <img src="/static/images/of/tx.jpg" alt="">
            <p class="name">何洛洛</p>
        </div>
        <div class="contactList clear">
            <div class="item"><img src="/static/images/icons/con_weixin.jpg" class="icon" alt="">微信账号</div>
            <div class="item"><img src="/static/images/icons/con_tel.jpg" class="icon" alt="">手机号码</div>
            <div class="item"><img src="/static/images/icons/con_email.jpg" class="icon" alt="">邮箱</div>
            <div class="item"><img src="/static/images/icons/con_address.jpg" class="icon" alt="">布吉区-布吉关</div>
        </div>
      </div>
      <!-- 短租的个人主页  end -->
      <!-- 办公室描述 -->
      <div class="section">
        <div class="locationBox pd15">
          <h3 class="title detail__title">办公室描述</h3>
          <div class="con">
            <p>1、交通：距离地铁2号线科苑站约221米交通四通八达，畅通无阻;员工， 上下班在地理位置.上没有任何困扰</p>
            <p>2、装修：精装修、可分割</p>
            <p>3、管理费空调费: 27.5元/m</p>
            <p>4、家私：可商量带家私事宜</p>
          </div>
        </div>
      </div>
      <!-- 办公室描述 end -->
    </div>
    <!-- 底部 -->
    <div class="ftBtn">
      <div class="inner fixed bm0 flex">
        <div class="iconGroup flex flexAlignCenter">
          <div class="item flex1">
            <img src="/static/images/icons/jubao.jpg" alt>
            <p>举报</p>
          </div>
          <div class="item flex1">
            <img src="/static/images/icons/shoucang.jpg" alt>
            <p>收藏</p>
          </div>
        </div>
        <div class="btns flex1 flex center">
          <div class="btn flex1 bg_ff952e color_fff">极速联系</div>
          <div class="btn flex1 bg_ed3435 color_fff">加好友</div>
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
        title: "商铺详情"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>