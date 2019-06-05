<template>
  <div class="pageContent">
    <div class="storeDetail">
      <div class="section pb20" style="padding-bottom:0 !important;">
        <div class="swiper colorBlock bg_ff952e" style="padding-top:300rpx;"></div>
        <div class="shortInfo">
          <div class="legalInfo flex">
            <img src="/static/images/of/tx.jpg" class="tx" alt>
            <div class="info flex1">
              <div style="margin-bottom:16rpx;">
                <span class="name">吴正华</span>
                <img src="/static/images/icons/v.jpg" class="icon_attestation" alt>
                <span class="lookAttestation"><img src="/static/images/icons/attestationTag.png" class="icon_attestationTag" alt="">查看认证</span>
              </div>
              <p class="msgList">
                <span class="msgItem">技术总监</span>
                <span class="msgItem">深圳松大科技有限公司</span>
                <span class="attestationStatus">
                  <span class="icon-gou"></span> 已认证
                </span>
              </p>
              <p class="slogan">本人已有公司，寻求可以一起拼搏的人才</p>
            </div>
          </div>
          <div class="weui-cells noBorder__weui-cells column__weui-cells mt10">
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">创始人</div>
                <div class="weui-cell__bd">张伊利</div>
              </div>
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">公司行业</div>
                <div class="weui-cell__bd">婚恋网</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">成立时间</div>
                <div class="weui-cell__bd">2016.02</div>
              </div>
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">计划投资</div>
                <div class="weui-cell__bd">100万</div>
              </div>
            </div>
            <div class="group flex">
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">办公地址</div>
                <div class="weui-cell__bd">民治</div>
              </div>
              <div class="weui-cell flex1">
                <div class="weui-cell__hd">办公面积</div>
                <div class="weui-cell__bd">
                  <span>
                    200m
                    <span class="sup">2</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tagBox pd15 mt10">
          <h3 class="title detail__title pb10">能力标签</h3>
          <div class="line flex">
            <span class="tagTile">我擅长</span>
            <div class="tipsList border__tipsList flex1 bg_grey">
              <span>美工</span>
              <span>设计</span>
              <span>文员</span>
              <span>销售</span>
            </div>
          </div>
          <div class="line flex">
            <span class="tagTile">想认识</span>
            <div class="tipsList border__tipsList flex1 bg_active">
              <span>广告策划</span>
              <span>室内设计</span>
              <span>市场营销</span>
              <span>销售</span>
              <span>品牌推广</span>
              <span>互联网</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 图表 -->
      <!-- <div class="section">
        <h3 class="title detail__title">圆形图</h3>
        <div class="content" style="height:375px">
           <mpvue-echarts :echarts="echarts" :onInit="onInit" canvasId="demo-canvas"></mpvue-echarts>
        </div>
      </div> -->
      <!-- 图表  end -->
      <!-- 教育经历 -->
      <div class="section pd15">
        <h3 class="title detail__title">教育经历</h3>
        <div class="line flex experience__line">
          <img src="/static/images/icons/jiaoyujl.jpg" class="icon_experience" alt>
          <div class="conBox">
            <h3 class="title detail__title">九江学院</h3>
            <p class="msgList">
              <span class="msgItem">本科/计算机应用技术</span>
              <span class="msgItem">2008-2012</span>
            </p>
          </div>
        </div>
      </div>
      <!-- 教育经历  end -->
      <!-- 工作经历 -->
      <div class="section pd15">
        <h3 class="title detail__title">工作经历</h3>
        <div class="line flex experience__line">
          <img src="/static/images/icons/gongzuojl.jpg" class="icon_experience" alt>
          <div class="conBox">
            <h3 class="title detail__title">深圳市松大科技有限公司</h3>
            <p class="msgList">
              <span class="msgItem">技术总监</span>
              <span class="msgItem">2017-至今</span>
            </p>
          </div>
        </div>
      </div>
      <!-- 工作经历  end -->
      <!-- 公司简介 -->
      <div class="section">
        <div class="locationBox pd15">
          <h3 class="title detail__title">公司简介</h3>
          <div
            class="con"
          >深圳市松大科技有限公司隶属于深圳市松大电通集团，秉承集团在建筑电气及智能化领域的事业，专业从事建筑智能化系统的产品研发、生产、销售和售后服务，已形成监控防盗系列产品、建筑智能化教仪系列产品、灯光照明系列产品、智能家居系列产品、车载电视产品等五大系列，近百种“松大”品牌产品。</div>
        </div>
      </div>
      <!-- 公司简介  end -->
      <!-- 公司理念 -->
      <div class="section">
        <div class="locationBox pd15">
          <h3 class="title detail__title">公司理念</h3>
          <div class="con">深圳市松大科技有限公司隶属于深圳市松大电通集团，秉承集团在建筑电气及智能化领域的事业，专业从事建筑智能化系统的产品研发、生产、销售和售后服务。</div>
        </div>
      </div>
      <!-- 公司理念  end -->
      <!-- 公司图片 -->
      <div class="section">
        <h3 class="title detail__title pd15">公司图片</h3>
        <div class="con" style="padding-left:30rpx;padding-bottom:60rpx;">
          <scroll-view class="storeNowrap" scroll-x>
            <ul class="column storeList">
              <li class="item">
                <div class="outside">
                  <div class="pictrueAll">
                    <img src="/static/images/of/index_a1.jpg" alt>
                  </div>
                </div>
              </li>
              <li class="item">
                <div class="outside">
                  <div class="pictrueAll">
                    <img src="/static/images/of/index_a1.jpg" alt>
                  </div>
                </div>
              </li>
              <li class="item">
                <div class="outside">
                  <div class="pictrueAll">
                    <img src="/static/images/of/index_a1.jpg" alt>
                  </div>
                </div>
              </li>
              <li class="item">
                <div class="outside">
                  <div class="pictrueAll">
                    <img src="/static/images/of/index_a1.jpg" alt>
                  </div>
                </div>
              </li>
              <li class="item">
                <div class="outside">
                  <div class="pictrueAll">
                    <img src="/static/images/of/index_a1.jpg" alt>
                  </div>
                </div>
              </li>
              <li class="item">
                <div class="outside">
                  <div class="pictrueAll">
                    <img src="/static/images/of/index_a1.jpg" alt>
                  </div>
                </div>
              </li>
              <li class="item">
                <div class="outside">
                  <div class="pictrueAll">
                    <img src="/static/images/of/index_a1.jpg" alt>
                  </div>
                </div>
              </li>
              <li class="item">
                <div class="outside">
                  <div class="pictrueAll">
                    <img src="/static/images/of/index_a1.jpg" alt>
                  </div>
                </div>
              </li>
            </ul>
          </scroll-view>
        </div>
      </div>
      <!-- 公司图片  end -->
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

      <!-- 人员需求 -->
      <div class="section pd15">
        <h3 class="title detail__title">人员需求</h3>
        <div class="con">
          <div class="post mt10">
            <div class="item">
              <div class="item__hd flex selectIpt">
                <span class="label">职工名称</span>
                <div class="info flex1">美工</div>
                <span class="twoArrow twoArrow-down"></span>
              </div>
              <div class="item__bd"  style="display:none;">
                <div class="twoArrowBox"><span class="twoArrow twoArrow-up"></span></div>
                
                <div class="weui-cells noBorder__weui-cells column__weui-cells mt0">
                  <div class="group flex">
                    <div class="weui-cell flex1">
                      <div class="weui-cell__hd">职位名称</div>
                      <div class="weui-cell__bd">美工</div>
                    </div>
                    <div class="weui-cell flex1">
                      <div class="weui-cell__hd">经验要求</div>
                      <div class="weui-cell__bd">5年</div>
                    </div>
                  </div>
                  <div class="group flex">
                    <div class="weui-cell flex1">
                      <div class="weui-cell__hd">最低学历</div>
                      <div class="weui-cell__bd">大专</div>
                    </div>
                    <div class="weui-cell flex1">
                      <div class="weui-cell__hd">合伙待遇</div>
                      <div class="weui-cell__bd">股份</div>
                    </div>
                  </div>
                  <div class="group flex">
                    <div class="weui-cell flex1">
                      <div class="weui-cell__hd">工作性质</div>
                      <div class="weui-cell__bd">全职</div>
                    </div>
                    <div class="weui-cell flex1">
                      <div class="weui-cell__hd">工作时间</div>
                      <div class="weui-cell__bd">8小时/天</div>
                    </div>
                  </div>
                  <div class="group">
                    <div class="weui-cell">
                      <div class="weui-cell__hd">职位描述</div>
                    </div>
                    <div class="weui-cell">
                      <div
                        class="weui-cell__bd"
                      >美工需要扎实的技术基础的，如果以前没做过，那么等着被批评的准备吧。因为每个人的欣赏和眼光不一样，现在主流的还是用PS，但是有些情况下需要出海报或者广告图的时候色彩会和打印室有误差。 其中涉及到调色的问题好。</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item overed__item">
              <div class="item__hd flex selectIpt"  style="display:none;">
                <span class="label">职工名称</span>
                <div class="info flex1">设计师</div>
                <span class="twoArrow twoArrow-down"></span>
              </div>
              <div class="item__bd">
                <div class="twoArrowBox"><span class="twoArrow twoArrow-up"></span></div>
                <img src="/static/images/icons/overedStatus.png" class="icons_status" alt="">
                <div class="weui-cells noBorder__weui-cells column__weui-cells mt0">
                  <div class="group flex">
                    <div class="weui-cell flex1">
                      <div class="weui-cell__hd">职位名称</div>
                      <div class="weui-cell__bd">设计师</div>
                    </div>
                    <div class="weui-cell flex1">
                      <div class="weui-cell__hd">经验要求</div>
                      <div class="weui-cell__bd">5年</div>
                    </div>
                  </div>
                  <div class="group flex">
                    <div class="weui-cell flex1">
                      <div class="weui-cell__hd">最低学历</div>
                      <div class="weui-cell__bd">大专</div>
                    </div>
                    <div class="weui-cell flex1">
                      <div class="weui-cell__hd">合伙待遇</div>
                      <div class="weui-cell__bd">股份</div>
                    </div>
                  </div>
                  <div class="group flex">
                    <div class="weui-cell flex1">
                      <div class="weui-cell__hd">工作性质</div>
                      <div class="weui-cell__bd">全职</div>
                    </div>
                    <div class="weui-cell flex1">
                      <div class="weui-cell__hd">工作时间</div>
                      <div class="weui-cell__bd">8小时/天</div>
                    </div>
                  </div>
                  <div class="group">
                    <div class="weui-cell">
                      <div class="weui-cell__hd">职位描述</div>
                    </div>
                    <div class="weui-cell">
                      <div
                        class="weui-cell__bd"
                      >美工需要扎实的技术基础的，如果以前没做过，那么等着被批评的准备吧。因为每个人的欣赏和眼光不一样，现在主流的还是用PS，但是有些情况下需要出海报或者广告图的时候色彩会和打印室有误差。 其中涉及到调色的问题好。</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 人员需求 end -->
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
// import echarts from 'echarts'
// import mpvueEcharts from 'mpvue-echarts'
// let chart = null;

// function initChart(canvas, width, height) {
//   chart = echarts.init(canvas, null, {
//     width: width,
//     height: height
//   });
//   canvas.setChart(chart);

//   // var option = {}; // ECharts 配置项
//   var option = {
//     color: ['#37a2da', '#32c5e9', '#67e0e3'],
//     tooltip: {
//       trigger: 'axis',
//       axisPointer: { // 坐标轴指示器，坐标轴触发有效
//         type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
//       },
//       confine: true
//     },
//     legend: {
//       data: ['热度', '正面', '负面']
//     },
//     grid: {
//       left: 20,
//       right: 20,
//       bottom: 15,
//       top: 40,
//       containLabel: true
//     },
//     xAxis: [
//       {
//         type: 'value',
//         axisLine: {
//           lineStyle: {
//             color: '#999'
//           }
//         },
//         axisLabel: {
//           color: '#666'
//         }
//       }
//     ],
//     yAxis: [
//       {
//         type: 'category',
//         axisTick: { show: false },
//         data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
//         axisLine: {
//           lineStyle: {
//             color: '#999'
//           }
//         },
//         axisLabel: {
//           color: '#666'
//         }
//       }
//     ],
//     series: [
//       {
//         name: '热度',
//         type: 'bar',
//         label: {
//           normal: {
//             show: true,
//             position: 'inside'
//           }
//         },
//         data: [300, 270, 340, 344, 300, 320, 310],
//         itemStyle: {
//           emphasis: {
//             color: '#37a2da'
//           }
//         }
//       },
//       {
//         name: '正面',
//         type: 'bar',
//         stack: '总量',
//         label: {
//           normal: {
//             show: true
//           }
//         },
//         data: [120, 102, 141, 174, 190, 250, 220],
//         itemStyle: {
//           emphasis: {
//             color: '#32c5e9'
//           }
//         }
//       },
//       {
//         name: '负面',
//         type: 'bar',
//         stack: '总量',
//         label: {
//           normal: {
//             show: true,
//             position: 'left'
//           }
//         },
//         data: [-20, -32, -21, -34, -90, -130, -110],
//         itemStyle: {
//           emphasis: {
//             color: '#67e0e3'
//           }
//         }
//       }
//     ]
//   }

//   chart.setOption(option);

//   return chart; // 返回 chart 后可以自动绑定触摸操作
// }

export default {
  onLoad() {
    this.setBarTitle();
  },
  data() {
    // return {
    //   echarts,
    //   onInit: initChart
    // }
  },
  components:{
    // mpvueEcharts
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "公司详情"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.shortInfo {
  margin-top: -180rpx !important;
}
.storeNowrap .storeList .item,
.storeNowrap .storeList .pictrueAll img {
  width: 200rpx !important;
  height: 200rpx !important;
}
.group{
  padding:0;
}
</style>