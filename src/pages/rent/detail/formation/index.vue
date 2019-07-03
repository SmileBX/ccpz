<template>
  <div class="pageContent">
    <div class="storeDetail">
      <div class="section pb20" style="padding-bottom:0 !important;">
        <!-- 个人信息 -->
        <div class="shortInfo1 userInfo">
          <div class="legalInfo flex">
            <img
              :src="data.ShopInfo.Value.Avatar.Value"
              class="tx"
              alt
              @click="$emit('goUserCenter')"
            />
            <div class="info flex1">
              <div style="margin-bottom:16rpx;" class="flex-center">
                <span class="name">{{data.ShopInfo.Value.Name.Value}}</span>
                <img src="/static/images/icons/v.png" mode="aspectFit" class="icon_attestation" alt />
                <span class="lookAttestation">
                  <img
                    src="/static/images/icons/attestationTag.png"
                    class="icon_attestationTag"
                    alt
                  />查看认证
                </span>
              </div>
              <p class="msgList flex-center">
                <span class="msgItem">创始人{{data.CompanyInfo.Value.LegalPerson.Value}}</span>
                <span class="msgItem">{{data.CompanyInfo.Value.Company.Value}}</span>
                <span class="attestationStatus">
                  <span class="icon-gou" v-if="data.CompanyInfo.Value.IsAUT.Value"></span> 已认证
                </span>
              </p>
              <!-- <p class="msgList flex-center">
                <span class="msgItem" v-if="data.GladBuyerTrade&&data.GladBuyerTrade.Value">{{data.GladBuyerTrade.Value}}</span>
                <span class="msgItem" v-if="data.RingType">{{data.RingType.Value}}</span>
                <span class="msgItem">计划投资{{data.BuyBudget.Value}}万</span>
              </p>-->
              <p class="slogan">{{data.Title.Value}}</p>
            </div>
          </div>
          <div class="lat flex-center">
            <div class="left">{{data.AddTime.Value}}</div>
            <div class="right flex-center">
              <img src="/static/images/icons/lat.png" alt />
              {{data.GladBuyArea.Value}}
            </div>
          </div>
        </div>
        <!-- 个人信息end -->
        <div class="weui-cells noBorder__weui-cells column__weui-cells mt10">
          <!-- 机构名称、类型 -->
          <div class="group flex" style="flex-flow:row wrap">
            <!-- 名称 -->
            <div
              class="weui-cell flex1"
              style="flex:1 0 auto;width:300rpx;"
              v-for="(item,index) in attrArr"
              :key="index"
              v-show="item.Value"
            >
              <div class="weui-cell__hd">{{item.Text}}</div>
              <div class="weui-cell__bd">{{item.Value}}</div>
            </div>
          </div>
        </div>
        <!-- 公司简介 -->
        <div class="section">
          <div class="locationBox pd15">
            <h3 class="title detail__title">{{data.Synopsis.Text}}</h3>
            <div class="con">{{data.Synopsis.Value}}</div>
          </div>
        </div>
        <!-- 公司简介  end -->
        <!-- 能力标签 -->
        <div class="tagBox pd15 mt10" v-if="false">
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
        <!-- 能力标签end -->
      </div>
      <!-- 图表 -->
      <!-- <div class="section">
        <h3 class="title detail__title">圆形图</h3>
        <div class="content" style="height:375px">
           <mpvue-echarts :echarts="echarts" :onInit="onInit" canvasId="demo-canvas"></mpvue-echarts>
        </div>
      </div>-->
      <!-- 图表  end -->
      <!-- 教育经历 -->
      <div class="section pd15" v-if="false">
        <h3 class="title detail__title">教育经历</h3>
        <div class="line flex experience__line">
          <img src="/static/images/icons/jiaoyujl.jpg" class="icon_experience" alt />
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
      <div class="section pd15" v-if="false">
        <h3 class="title detail__title">工作经历</h3>
        <div class="line flex experience__line">
          <img src="/static/images/icons/gongzuojl.jpg" class="icon_experience" alt />
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
      <!-- 公司理念 -->
      <div class="section" v-if="false">
        <div class="locationBox pd15">
          <h3 class="title detail__title">公司理念</h3>
          <div class="con">深圳市松大科技有限公司隶属于深圳市松大电通集团，秉承集团在建筑电气及智能化领域的事业，专业从事建筑智能化系统的产品研发、生产、销售和售后服务。</div>
        </div>
      </div>
      <!-- 公司理念  end -->
      <!-- 公司图片 -->
      <div class="section" v-if="data.PicList&&data.PicList.Value.length>0">
        <h3 class="title detail__title pd15">公司图片</h3>
        <div class="con" style="padding-left:30rpx;padding-bottom:60rpx;">
          <scroll-view class="storeNowrap" scroll-x>
            <ul class="column storeList">
              <li
                class="item"
                v-for="(item,index) in data.PicList.Value"
                :key="index"
                @click="$emit('previewImg',index)"
              >
                <div class="outside">
                  <div class="pictrueAll">
                    <img :src="item.PicUrl" alt />
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
              <p class="address">{{data.CompanyAddr.Value}}</p>
              <p class="space">{{data.CompanyDoorNum.Value}}</p>
            </div>
            <img src="/static/images/icons/map.jpg" class="map" @click="checkLocation" alt />
          </div>
        </div>
      </div>

      <!-- 人员需求 -->
      <div class="section pd15" v-if="data.PartnerList&&PartnerList.length>0">
        <h3 class="title detail__title">人员需求</h3>
        <div class="con">
          <div class="post mt10">
            <div class="item" v-for="(item,index) in PartnerList" :key="index">
              <div class="item__hd flex selectIpt" v-show="!item.status">
                <span class="label">{{item.JobTitle.Text}}</span>
                <div class="info flex1">{{item.JobTitle.Value}}</div>
                <span class="twoArrow twoArrow-down" @click="item.status = true"></span>
              </div>
              <div class="item__bd" v-show="item.status">
                <div class="twoArrowBox" @click="item.status = false">
                  <span class="twoArrow twoArrow-up"></span>
                </div>

                <div class="weui-cells noBorder__weui-cells column__weui-cells mt0">
                  <div class="group flex">
                    <div class="weui-cell flex1">
                      <div class="weui-cell__hd">{{item.JobTitle.Text}}</div>
                      <div class="weui-cell__bd">{{item.JobTitle.Value}}</div>
                    </div>
                    <div class="weui-cell flex1">
                      <div class="weui-cell__hd">{{item.Experience.Text}}</div>
                      <div class="weui-cell__bd">{{item.Experience.Value}}</div>
                    </div>
                  </div>
                  <div class="group flex">
                    <div class="weui-cell flex1">
                      <div class="weui-cell__hd">{{item.Degree.Text}}</div>
                      <div class="weui-cell__bd">{{item.Degree.Value}}</div>
                    </div>
                    <div class="weui-cell flex1">
                      <div class="weui-cell__hd">{{item.WorkTime.Text}}</div>
                      <div class="weui-cell__bd">{{item.WorkTime.Value}}</div>
                    </div>
                  </div>
                  <div class="group flex" v-if="item.JobType&&item.Treatment">
                    <div class="weui-cell flex1">
                      <div class="weui-cell__hd">{{item.JobType.Text}}</div>
                      <div class="weui-cell__bd">{{item.JobType.Value}}</div>
                    </div>
                    <div class="weui-cell flex1">
                      <div class="weui-cell__hd">{{item.Treatment.Text}}</div>
                      <div class="weui-cell__bd">{{item.Treatment.Value}}</div>
                    </div>
                  </div>
                  <div class="group flex" v-if="item.JobSex">
                    <div class="weui-cell flex1">
                      <div class="weui-cell__hd">{{item.JobSex.Text}}</div>
                      <div class="weui-cell__bd">{{item.JobSex.Value}}</div>
                    </div>
                  </div>
                  <div class="group">
                    <div class="weui-cell">
                      <div class="weui-cell__hd">职位描述</div>
                    </div>
                    <div class="weui-cell">
                      <div class="weui-cell__bd">{{item.PartDesc.Value}}</div>
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
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      //   echarts,
      //   onInit: initChart
      attrArr: [],
      showPartnerStatus: -1,
      PartnerList:[],
    };
  },
  onLoad() {
    this.attrArr = [];
    console.log("attrArr1", this.data);
    const data = this.data;
    data["Founder"] && this.attrArr.push(data["Founder"]);
    data["PlanBuyDate"] && this.attrArr.push(data["PlanBuyDate"]);
    data["RingRate"] && this.attrArr.push(data["RingRate"]);
    data["PlanBuyArea"] && this.attrArr.push(data["PlanBuyArea"]);
    data["RingNum"] && this.attrArr.push(data["RingNum"]);
    data["RingType"] && this.attrArr.push(data["RingType"]);
    data["BuyBudget"] && this.attrArr.push(data["BuyBudget"]);
    const PartnerList = []
    data.PartnerList.map(item=>{
      const value = item.Value
      PartnerList.push({
        IsClose:item.IsClose,
        status:false,
        JobTitle:value.JobTitle||{},
        JobSex:value.JobSex||{},
        Experience:value.Experience||{},
        Degree:value.Degree||{},
        PartDesc:value.PartDesc||{},
        WorkTime:value.WorkTime||{},
        JobType:value.JobType||{},
        Treatment:value.Treatment||{}
      })
    })
    this.PartnerList = PartnerList;
    console.log("partnerList", this.PartnerList);
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "公司详情"
      });
    },
    // 显示隐藏职位信息
    showPartner(index) {
      this.showPartnerStatus = index;
    },
    // 查看地理位置
    checkLocation() {
      this.$emit("checkLocation");
    },
  }
};
</script>
<style lang="scss" scoped>
.storeNowrap .storeList .item,
.storeNowrap .storeList .pictrueAll img {
  width: 200rpx !important;
  height: 200rpx !important;
}
.group {
  padding: 0;
}
.flex-center {
  display: flex;
  align-items: center;
}
.msgList {
  margin-bottom: 20rpx;
  .msgItem {
    border-left: 2rpx solid #999;
    padding: 0 20rpx !important;
    &:first-child {
      border-left: none;
      padding: 0 20rpx 0 0 !important;
    }
  }
}
.mb20 {
  margin-bottom: 20rpx;
}
.userInfo {
  background: #e6e6e6;
  padding: 30rpx 40rpx;
  .tx {
    border-radius: 50%;
    width: 80rpx;
    height: 80rpx;
  }
  .info {
    margin-left: 30rpx;
    .name {
      font-weight: 600;
      font-size: 32rpx;
      margin-right: 20rpx;
    }
    .icon_attestation {
      width: 24rpx;
      height: 24rpx;
    }
    .lookAttestation {
      padding: 0 20rpx;
      display: flex;
      align-items: center;
      height: 30rpx;
      font-size: 22rpx;
      img {
        width: 18rpx;
        height: 22rpx;
      }
    }
    .msgList {
      font-size: 24rpx;
      line-height: 24rpx;
      height: 24rpx;
      overflow: hidden;
      .attestationStatus {
        box-sizing: border-box;
        border: 1rpx solid #ff952e;
        padding: 0 5rpx 0 0;
        height: 24rpx;
        line-height: 18rpx;
        overflow: hidden;
        .icon-gou {
          // margin-right:4rpx;
        }
      }
    }
    .slogan {
      line-height: 40rpx;
      font-size: 28rpx;
    }
  }
  .lat {
    justify-content: space-between;
    font-size: 22rpx;
    color: #999;
    margin-top: 20rpx;
    .right {
      img {
        width: 17rpx;
        height: 21rpx;
        margin-right: 10rpx;
      }
    }
  }
}
.pictrueAll img {
  border-radius: 8rpx;
}
</style>