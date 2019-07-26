<template>
  <div class="pageContent">
    <div class="FormBox">
      <img class="topbgimg" src="/static/images/icons/bg2.jpg" v-if="BrandId==24">
      <img class="topbgimg" src="/static/images/icons/bg3.jpg" v-else-if="PageId==32||PageId==33 ||PageId==34 ">
      <img class="topbgimg" src="/static/images/icons/bg1.jpg" v-else>
      <!-- 短租房使用背景bg2.jpg -->
      <div class="FormCon" style="margin-top:-260rpx;">
        <div class="formTitle">
          <div class="titletxt">{{pageTitle}}</div>
          <p class="subtitle">{{subTitle}}</p>
        </div>
        <div class="form-cells">
          <div class="form-cells-item">
            <div class="">
              <div class="form-cells-hd">标题</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  placeholder="请填写适合标题"
                   v-model="Title"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <div class="form-cells-item" v-if="BrandId!=24">
            <div :class="showDefaultCompany?'form-cells-navigate navigate-bottom':''">
              <div class="form-cells-hd">公司/团队</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择公司/团队"
                  @tap="getCompany"
                  v-model="Company"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <!--输入选择内容-->
          <div v-if="PageId==36 || PageId==35">
               <div class="form-cells-item form-cells-item2">
                  <div class="item2-column">
                  <div class="form-cells-hd">起止时间</div>
                  <div class="flex flexAlignCenter">
                        <input
                            class="ipt"
                            type="text"
                            style="font-size:25rpx"
                            disabled
                            placeholder="开始时间"
                            @tap="getStartTime"
                            v-model="PlanStartTime"
                            placeholder-style="color:#b5b5b5;"
                        >
                        <span>-</span>
                        <input
                        class="ipt"
                        type="text"
                        style="font-size:25rpx"
                        disabled
                        placeholder="结束时间"
                        v-model="PlanEndTime"
                        @tap="getEndTime"
                        placeholder-style="color:#b5b5b5;"
                      >
                  </div>
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">活动区域</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @tap="isShowAddr=true"
                    v-model="GladBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">公司行业</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    v-model="CompanyTrade"
                    @tap="getCompanyTrade"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">意向行业</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    v-model="GladBuyerTrade"
                    @tap="showTrade=true"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">本公司人数</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PlanAllNum"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">拼活动公司人数</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PlanBuyNum"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">男女比例</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="SexRatio"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">学历结构</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    v-model="EducationLvl"
                    @tap="showEducation"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">年龄层次</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="AgeLevel"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">活动价格（元）</div>
                  <input
                    class="ipt"
                    type="number"
                    placeholder="请输入"
                    v-model="PropertyPrice"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <div v-if="PageId==43 || PageId==32 || PageId==33">
               <div class="form-cells-item form-cells-item2">
                  <div class="item2-column">
                  <div class="form-cells-hd">行业/主营业务</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    v-model="GladBuyerTrade"
                    @tap="showTrade=true"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">计划投资（元）</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="BuyBudget"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd" style="position:relative;">面积（&nbsp;m<span style="position:absolute;font-size:18rpx">2</span>&nbsp;&nbsp;）</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PlanBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">意向区域</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @tap="isShowAddr=true"
                    v-model="GladBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">成立日期</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请选择"
                    disabled
                    @tap="choseDate"
                    v-model="PlanBuyDate"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <!-- <div class="item2-column">
                  <div class="form-cells-hd" v-if="PageId==43">机构名称</div>
                  <div class="form-cells-hd" v-if="PageId==32">公司名称</div>
                  <div class="form-cells-hd" v-if="PageId==33">团队名称</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="Founder"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div> -->
              </div>
          </div>
          <div v-if="PageId==34">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">圈子属性</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请选择"
                    disabled
                    v-model="RingType"
                    @tap="choseRingType"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">计划人数</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="RingNum"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">计划投资（元）</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="BuyBudget"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">意向区域</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @tap="isShowAddr=true"
                    v-model="GladBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">活动频率</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    v-model="RingRate"
                    @tap="choseRing"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">成立日期</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请选择"
                    disabled
                    @tap="choseDate"
                    v-model="PlanBuyDate"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <div v-if="PageId==42">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">区域</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @tap="isShowAddr=true"
                    v-model="GladBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd" style="position:relative;">面积（&nbsp;m<span style="position:absolute;font-size:18rpx">2</span>&nbsp;&nbsp;）</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PlanBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">类型</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请选择"
                    disabled
                    v-model="PropertyType"
                    @tap="getPropertyType"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">住宅性质</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入(例：临街)"
                    v-model="PropertySort"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">宜住人数</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="NeedStation"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">户型</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="NeedApartment"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">楼层</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="NeedFloor"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">层高</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="NeedFloorHeight"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <!-- <div class="item2-column">
                  <div class="form-cells-hd">面宽</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="NeedFaceWidth"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div> -->
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">付款方式</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入(例：押2付1)"
                    v-model="PayType"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">转让费（元）</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PropertyPrice"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">月租金（元）</div>
                  <input
                    class="ipt"
                    type="number"
                    placeholder="请输入"
                    v-model="DeviceRent"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">装修情况</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="getTrim(1)"
                    v-model="Decoration"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">起租期</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请选输入(例：2年)"
                    v-model="PlanRentDate"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <div v-if="PageId==41">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">区域</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @tap="isShowAddr=true"
                    v-model="GladBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd" style="position:relative;">面积（&nbsp;m<span style="position:absolute;font-size:18rpx">2</span>&nbsp;&nbsp;）</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PlanBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">类型</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请选择"
                    disabled
                    v-model="PropertyType"
                    @tap="getPropertyType"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">办公性质</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入(例：临街)"
                    v-model="PropertySort"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">容纳工位</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="NeedStation"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">户型</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="NeedApartment"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">楼层</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="NeedFloor"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">起租期</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请选输入(例：2年)"
                    v-model="PlanRentDate"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">付款方式</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入(例：押2付1)"
                    v-model="PayType"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">租金（元）</div>
                  <input
                    class="ipt"
                    type="number"
                    placeholder="请输入"
                    v-model="PropertyPrice"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">是否可注册</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="getTrim(2)"
                    v-model="IsRegAreaMsg"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">装修情况</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="getTrim(1)"
                    v-model="Decoration"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">可否分割</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="getTrim(3)"
                    v-model="IsSubPackMsg"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <div v-if="PageId==37">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">区域</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @tap="isShowAddr=true"
                    v-model="GladBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd" style="position:relative;">面积（&nbsp;m<span style="position:absolute;font-size:18rpx">2</span>&nbsp;&nbsp;）</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PlanBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">类型</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请选择"
                    disabled
                    v-model="PropertyType"
                    @tap="getPropertyType"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">起租期</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请选输入(例：2年)"
                    v-model="PlanRentDate"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">付款方式</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入(例：押2付1)"
                    v-model="PayType"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">租金（元）</div>
                  <input
                    class="ipt"
                    type="number"
                    placeholder="请输入"
                    v-model="PropertyPrice"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">月租金（元）</div>
                  <input
                    class="ipt"
                    type="number"
                    placeholder="请输入"
                    v-model="DeviceRent"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <div v-if="PageId==38">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">区域</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @tap="isShowAddr=true"
                    v-model="GladBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd" style="position:relative;">面积（&nbsp;m<span style="position:absolute;font-size:18rpx">2</span>&nbsp;&nbsp;）</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PlanBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">类型</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请选择"
                    disabled
                    v-model="PropertyType"
                    @tap="getPropertyType"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">转让费（元）</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PropertyPrice"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <div v-if="PageId==39">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">区域</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @tap="isShowAddr=true"
                    v-model="GladBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd" style="position:relative;">面积（&nbsp;m<span style="position:absolute;font-size:18rpx">2</span>&nbsp;&nbsp;）</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PlanBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">类型</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请选择"
                    disabled
                    v-model="PropertyType"
                    @tap="getPropertyType"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">商铺性质</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入(例：临街)"
                    v-model="PropertySort"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">经营行业</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    v-model="GladBuyerTrade"
                    @tap="showTrade=true"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">经营状态</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入(例：在业)"
                    v-model="RunStatus"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">楼层</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="NeedFloor"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">层高</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="NeedFloorHeight"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <!-- <div class="item2-column">
                  <div class="form-cells-hd">面宽</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="NeedFaceWidth"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div> -->
              </div>
                <!-- <div class="item2-column">
                  <div class="form-cells-hd">进深</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="NeedFloorDepth"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div> -->
              
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">付款方式</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入(例：押2付1)"
                    v-model="PayType"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">租金（元）</div>
                  <input
                    class="ipt"
                    type="number"
                    placeholder="请输入"
                    v-model="PropertyPrice"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">起租期</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请选输入(例：2年)"
                    v-model="PlanRentDate"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <div v-if="PageId==40">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">区域</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @tap="isShowAddr=true"
                    v-model="GladBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd" style="position:relative;">面积（&nbsp;m<span style="position:absolute;font-size:18rpx">2</span>&nbsp;&nbsp;）</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PlanBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">类型</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请选择"
                    disabled
                    v-model="PropertyType"
                    @tap="getPropertyType"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">商铺性质</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入(例：临街)"
                    v-model="PropertySort"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">楼层</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="NeedFloor"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">层高</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="NeedFloorHeight"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <!-- <div class="item2-column">
                  <div class="form-cells-hd">面宽</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="NeedFaceWidth"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div> -->
              </div>
                <!-- <div class="item2-column">
                  <div class="form-cells-hd">进深</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="NeedFloorDepth"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div> -->
              
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">转让费（元）</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PropertyPrice"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <!--组件公司名称-->
          <!-- <div class="form-cells-item" v-if="PageId==43|| PageId==32 ||PageId==33">
            <div class="">
                  <div class="form-cells-hd" v-if="PageId==43">机构名称</div>
                  <div class="form-cells-hd" v-if="PageId==32">企业名称</div>
                  <div class="form-cells-hd" v-if="PageId==33">团队名称</div>
              <div class="form-cell-bd">
                <input
                    class="ipt"
                    type="text"
                    placeholder="请输入名称"
                    v-model="Founder"
                    placeholder-style="color:#b5b5b5;"
                  >
              </div>
            </div>
          </div> -->
          <!--简介-->
          <div class="form-cells-item">
            <div class="">
              <div class="form-cells-hd">{{introduce}}</div>
              <div class="form-cell-bd">
                <textarea
                  class="ipt"
                  type="text"
                  maxlength = "-1"
                  :placeholder="introducePlaceholder"
                  style="height:200rpx!important;"
                  v-model="Synopsis"
                  placeholder-style="color:#b5b5b5;"
                ></textarea>
                <!-- <input
                  class="ipt"
                  type="text"
                  :placeholder="introducePlaceholder"
                  v-model="Synopsis"
                  placeholder-style="color:#b5b5b5;"
                > -->
              </div>
            </div>
          </div>
          <!--房屋亮点-->
          <div class="form-cells-item" v-if="PageId==42 || PageId==41 || PageId==38 || PageId==37 || PageId==39 || PageId==40">
            <div class="">
              <div class="form-cells-hd">{{infoMore}}</div>
              <div class="form-cell-bd">
                <textarea
                  class="ipt"
                  type="text"
                  maxlength = "-1"
                  :placeholder="infoMorePlaceHolder"
                  style="height:200rpx!important;"
                  v-model="ContentDetail"
                  placeholder-style="color:#b5b5b5;"
                ></textarea>
                <!-- <input
                  class="ipt"
                  type="text"
                  :placeholder="infoMorePlaceHolder"
                  v-model="ContentDetail"
                  placeholder-style="color:#b5b5b5;"
                > -->
              </div>
            </div>
          </div>
          <!--接听时间段-->
          <div class="form-cells-item" v-if="PageId==42 || PageId==41 || PageId==38 || PageId==37 || PageId==39 || PageId==40">
            <div class="form-cells-navigate navigate-right">
              <div class="form-cells-hd">{{TimeLimit}}</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  disabled
                  :placeholder="TimeLimitPlaceHolder"
                  v-model="RentTime"
                  @tap="choseTimeLimit"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <!--上传图片-->
          <div class="form-cells-item">
            <div class="form-cells-hd">{{upImgTitle}}</div>
            <div class="form-cell-bd form-cell-img">
              <div class="upbtn" v-for="(item,pindex) in imgArr" :key="pindex">
                <span class="close" @tap="delImg(pindex)">×</span>
                <img class="upimg" :src="item">
              </div>
              <div class="upbtn" @tap="chosseImg" v-if="imgArr.length<picLength">
                <img class="upimg" src="/static/images/icons/upload_1.png">
              </div>
            </div>
          </div>
          <!--选项-->
          <!--地址/门牌号-->
          <div class="form-cells-item">
            <div class="">
              <div class="form-cells-hd">{{addrTitle}}</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  :placeholder="addrPlaceholder"
                  v-model="CompanyAddr"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <div class="form-cells-item">
            <div>
              <div class="form-cells-hd">{{addDetailTitle}}</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  :placeholder="addDetailPlaceholder"
                  v-model="CompanyDoorNum"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <!-- 标签 -->
          <div class="form-cells-item" v-if="PageId==42 || PageId==41 || PageId==39 || PageId==40">
            <div class="form-cells-hd">{{metion}}</div>
            <div class="form-cell-bd">
              <div class="btns-group">
                <div class="btn" :class="{'cur':item.active}" v-for="(item,dindex) in Devicelist" :key="dindex" @tap="addDeviceNum(dindex)">{{item.Name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 以下是组建公司显示 -->
      <div v-if="PageId==32 || PageId==33 || PageId==34">
          <div class="formTitle" >
            <div class="titletxt c_333">想看看什么样的人</div>
            <p class="subtitle">将根据您的要求推荐优质合伙人</p>
          </div>
          <div class="FormCon mb10 boxSize" v-for="(item,pindex) in PartnerList" :key="pindex">
            <div class="form-cells">
               <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">职位名称</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="item.JobTitle"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">工作时间</div>
                  <input
                    class="ipt"
                    type="text"
                    style="font-size:25rpx"
                    placeholder="请输入(例:2天/周 8小时/天)"
                     v-model="item.WorkTime"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">经验要求</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入工作年限"
                    v-model="item.Experience"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">最低学历</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="item.Degree"
                    placeholder-style="color:#b5b5b5;"
                  >
                  <!-- disabled @tap="touchEducation(pindex)"-->
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column" v-if="PageId==34">
                  <div class="form-cells-hd">性别要求</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入性别要求"
                     v-model="item.JobSex"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column" v-if="PageId==32 || PageId==33">
                  <div class="form-cells-hd">全职/兼职</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请选择"
                    disabled
                    v-model="item.JobType"
                    @tap="getJobType(pindex)"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column" v-if="PageId==32 || PageId==33">
                  <div class="form-cells-hd">合伙待遇</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    v-model="item.Treatment"
                    @tap="choseTreament(pindex)"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                
              </div>
              <div class="form-cells-item">
                <div class="">
                  <div class="form-cells-hd">职位描述</div>
                  <div class="form-cell-bd">
                    <input
                      class="ipt"
                      type="text"
                      placeholder="请填写职位详细信息"
                      v-model="item.PartDesc"
                      placeholder-style="color:#b5b5b5;"
                    >
                  </div>
                </div>
              </div>
              <!-- <div class="form-cells-item" v-if="PageId==32 || PageId==33">
                <div class="">
                  <div class="form-cells-hd">合伙待遇</div>
                  <div class="form-cell-bd">
                    <input
                      class="ipt"
                      type="text"
                      placeholder="请输入（股份、工资、奖金）"
                      v-model="item.Treatment"
                      placeholder-style="color:#b5b5b5;"
                    >
                  </div>
                </div>
              </div> -->
              <div class="addDetail bg_fff" v-if="PartnerList.length>1 && pindex !==PartnerList.length-1">
                <div class="btn btn-add" @click="delOrder(pindex)">
                  删除职位
                </div>
              </div>
              
              <!--职位弹层-->
              <div class="mask" v-if="item.ShowWork" @tap="cancle2(pindex)"></div>
              <div class="maskType boxSize" v-if="item.ShowWork" style="left:0">
                  <div class="flex">
                      <span class="size" @tap="cancle2(pindex)">取消</span>
                      <span class="title">{{masktitle2}}</span>
                      <span class="color size" @tap="subConfirm2(pindex)">确定</span>
                  </div>
                  <scroll-view :scroll-y="true"  style="height:480rpx;" class="showItem">
                      <div v-for="(item,index) in list" :key="index">
                          <p :class="{'itemactive':statu == index}" @tap="chose(index)" style="margin-top:3rpx;">{{item.Name}}
                          </p>
                      </div>
                  </scroll-view>  
              </div>
            </div>
          </div>
          <div class="AddBtn_info" @tap="addWork">
            <img class="icon" src="/static/images/icons/add_icon.png" alt="">
            <div class="tips">添加新的职位信息</div>
          </div>
      </div>
      <div class="ftbox" @tap="submitApply">
        <div class="btn">确认发布</div>
      </div>
    </div>
    <!--弹层-->
    <div class="mask" v-if="isShowMask" catchtouchmove="true" @tap="cancle"></div>
    <!---->
    <div class="maskType boxSize" v-if="isShowMask" :class="showNoChange?'noParActive':''">
      <div class="flex">
            <span class="size" @tap="cancle">取消</span>
            <span class="title">{{masktitle}}</span>
            <span class="color size" @tap="subConfirm">确定</span>
      </div>
      <!--滑动选择时间-->
      <div class="freeRoom" v-if="ShowTime">
          <div>
              <picker-view class="pickerView" :value="value" @change="bindDateChangeStart">
                  <picker-view-column class="pickerColumn">
                      <div class="pickerItem" v-for="(item,key) in hourses" :key='key'>{{item}}点</div>
                  </picker-view-column>
                  <picker-view-column class="pickerColumn">
                      <div class="pickerItem" v-for="(item,key) in minutes" :key='key'>{{item}}分</div>
                  </picker-view-column>
                  <picker-view-column class="pickerColumn">
                      <div class="pickerItem" v-for="(item,key) in hourses" :key='key'>{{item}}点</div>
                  </picker-view-column>
                  <picker-view-column class="pickerColumn">
                      <div class="pickerItem" v-for="(item,key) in minutes" :key='key'>{{item}}分</div>
                  </picker-view-column>
              </picker-view>
          </div>
      </div> 
      <div v-if="showInput">
          <input type="text" placeholder="请输入设备要求" v-model="deviceTip" style="padding:0 30rpx;">
      </div>
      <scroll-view :scroll-y="true" style="height:480rpx;" :style="showNoChange?'height:200rpx':''" class="showItem" @scrolltolower="loadMore" v-else>
        <div v-for="(item,index) in list" :key="index">
            <p :class="{'itemactive':statu == index}" @tap="chose(index)" style="margin-top:3rpx;">{{item.Name}}
            </p>
        </div>
      </scroll-view>
    </div> 
    <!--时间插件-->
    <div class="shade bottom__shade" v-show="showDate">
      <div class="mask" @tap="showDate = false"></div>
      <div class="shadeContent">
        <div class="shade__bd">
    <!-- <van-action-sheet :show="showDate" @close="showDate=false" @select="showDate=false"> -->
        <van-datetime-picker
        type="date"
        :value="currentDate"
        @confirm="onInput($event)"
        @cancel="showDate=false"
        :min-date="minDate"
        title="请选择时间"
        style="z-index:888!important"
        />
    <!-- </van-action-sheet>  -->
            </div>
        </div>
    </div>
    <!--行业插件-->
    <div class="shade bottom__shade" v-show="showTrade">
      <div class="mask" @tap="showTrade = false"></div>
      <div class="shadeContent">
        <div class="shade__bd">
    <!-- <van-popup :show="showTrade" position="bottom" :overlay="true" @close="showTrade = false"> -->
        <van-picker  show-toolbar title="请选择行业" @confirm="onConfirm"
          @cancel="showTrade = false" :columns="columns" @change="onChange($event)"/>
    <!-- </van-popup> -->
              </div>
        </div>
    </div>  
    <!--地区插件--> 
    <div class="shade bottom__shade" v-if="isShowAddr">
      <div class="mask"></div>
      <div class="shadeContent">
        <div class="shade__bd">
          <van-picker
            v-if="hasAddr"
            show-toolbar
            title="请选择区域"
            @confirm="onConfirmAddr"
            @cancel="isShowAddr=false"
            :columns="columns2"
            @change="onChangeAddr($event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//PageId--58厂房发布  
//拼活动 场地-pageid==36  活动-pageid=35
//组建 公司-pageid=32  团队-pageid＝　33  圈子-pageid-34 
        //机构- pageId=43
//住房   写字楼-pageid=41  住房-pageid=42 厂房出租-pageid=37 厂房转让pageid=38
        //商铺出租 pageid=39  商铺转让Pageid=40
import "@/style/style_fb.scss";
import { post,host,getCurrentPageUrlWithArgs} from "@/utils";
// import areaList from "@/utils/areaList";
import {pathToBase64} from "@/utils/image-tools";
export default {
  data() {
    return {
      urlPp:"",//路由
      currentDate: new Date().getTime(),
      minDate:new Date().getTime(),
      dateTips:false,
      hourses:[],
      minutes:[],
      publishId:"",//发布Id重新发布的时候使用
      curPage: "",
      userId: "",    
      token: "",
      TypeId:'',
      PageId:'',
      BrandId:"",
      detailInfo:[],
      picLength:6,//上传图片的长度

      imgArr:[],//上传图片的路径
      isShowMask:false,//是否显示弹层
      showNoChange:false,//控制是否选择高度
      showArea:false,//显示区域
      showInput:false,//显示输入框
      showDate:false,//显示时间
      showTrade:false,
      columns:[],//picker列表
      tradeList:{},//行业列表
      tradeListBox:[],//行业列表
      PlanRentDate:"",//起租期
      NeedStation:"",
      NeedApartment:"",
      NeedFloor:"",
      NeedFaceWidth:"",
      NeedFloorHeight:"",
      NeedFloorDepth:"",
      PayType:"",
      RunStatus:"",
      list:[],//弹层列表
      masktitle:"",//弹层标题
      masktitle2:"",
      statu:0,//控制弹层item选中样式

      PropertyPrice:'', //物业单价/设备单价
      GladBuyAreaId:'', //区域code代码
      GladBuyArea:'', //意向购买区域\设备使用区域  格式，'1级区域,2级区域'
      GladBuyerTradeId:'',//意向行业/主营业务Id
      GladBuyerTrade:'', //意向行业/主营业务   格式，'1级行业,2级行业'
      CompanyTrade:"",//公司行业
      companyTipFlag:false,//公司行业标识
      EducationLvl:"",//学历结构
      SexRatio:'', //男女比例
      AgeLevel:'', //年龄层次 
      EducationLvl:"",//学历结构
      Founder:"",//活动名称
      PlanBuyNum:"",//拼活动公司人数
      PlanAllNum:"",//本公司人数
      PlanStartTime:"",//开始时间
      PlanEndTime:"",//结束时间
      timeFlag:false,//开始时间的标识
      RingRate:"",//活动频率
      RingNum:"",//计划人数
      RingType:"",//圈子属性
      Decoration:"",
      IsRegArea:"",
      IsRegAreaMsg:"",
      IsSubPack:"",
      IsSubPackMsg:"",
      


      Title:"",//标题
      showDefaultCompany:false,//只有一个公司默认显示
      Company:"",//公司名称-
      CompanyId:"",//公司Id
      CompanyAddr:'',//对应标题地址
      CompanyDoorNum:'',//对应标题地址门牌号
      Synopsis:'',//简介
      BuyBudget:'', //购买预算-计划投资
      PlanBuyDate:'', //计划购买日期--可租时间--成立日期
      PlanBuyArea:'', //计划购买面积--机构面积
      PartnerList:[],
      showTouchEducation:false,//组件要求学历标识
      showTouchTreat:false,//待遇
      showJobType:false,
      
      RentTimeLimit:"",//租赁期限
      ContentDetail:"",//办公室环境描述
      PropertyType:'', //物业/设备类型
      PropertySort:"", //物业/设备形式
      SpecsType:"",//规格型号
      NeedOfficeNum:"",//卡位需求（格式：3卡2室）
      ServiceName:"",//设施/设备 以英文逗号隔开
      DeviceRent:"",//价格最小
      DevicePrice:"",//价格最大
      AllArea:"",//总面积
      CompanyCulture:"",//公司理念
      

      pageTitle:"",//页面标题
      subTitle:"",//副标题
      introduce:"",//简介标题
      introducePlaceholder:"",//简介的placeholder
      infoMore:"",//房屋两点
      infoMorePlaceHolder:"",
      TimeLimit:"",//接听时间段
      TimeLimitPlaceHolder:"",//
      RentTime:"",//接听时间
      RentTimeBox:[0,0,0,0],//临时接时间的


      upImgTitle:"",//上传图片标题
      addrTitle:"",//地址标题
      addrPlaceholder:"",//地址的
      addDetailTitle:"",//补充说明的
      addDetailPlaceholder:"",//补
      addressList:[],//地区列表
      addressList2:{},
      addressList3:[],//街道数组
      isShowAddr:false,
      hasAddr:false,
      columns2:[],
      Devicelist:[],
      //拼租设施/设备写死的数据
      Devicelist1:[
        {Id:1,Name:"宽带",active:false},{Id:2,Name:"床"},{Id:3,Name:"衣柜"},{Id:4,Name:"沙发"},{Id:5,Name:"停车位"},{Id:6,Name:"自定义+"},
      ],
      Devicelist2:[
        {Id:1,Name:"网络/电话",active:false},{Id:2,Name:"会议室"},{Id:3,Name:"电梯"},{Id:4,Name:"空调"},{Id:5,Name:"卡位"},{Id:6,Name:"阳台"},{Id:7,Name:"自定义+"}
      ],
      Devicelist3:[
        {Id:1,Name:"网络/电话",active:false},{Id:2,Name:"排污"},{Id:3,Name:"可明火"},{Id:4,Name:"管煤"},{Id:5,Name:"停车位"},{Id:6,Name:"自定义+"},
      ],
      deviceTip:"",//添加自定义
      educationList:[ 
        {Id:1,Name:"小学",active:true},{Id:2,Name:"中学"},{Id:3,Name:"高中"},{Id:4,Name:"中专"},{Id:5,Name:"大专"},{Id:6,Name:"本科"},{Id:7,Name:"硕士"},{Id:8,Name:"MBA"},
      ],
      ShowTime:false,//
      mm:0,//页面跳转的次数
      imgTips:true,//上传图片不执行函数

    };
    
  },
  onLoad() {
    this.mm = 0
    this.showDefaultCompany = false
    this.setBarTitle();
    this.trimData()
    this.initData()
  },
  onShow(){
    console.log(this.$root.$mp.query.url,"}}}}}}}}}}}}}}}}}}}}}}")
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.TypeId= this.$root.$mp.query.TypeId
    this.isShowMask =false
    this.showNoChange = false
    this.showArea =false
    this.showInput =false
    this.showTrade =  false
    this.showDate = false
    this.showTouchEducation = false
    this.columns = []
    this.columns2 = []
    this.tradeList = {},//行业列表
    this.tradeListBox = [],//行业列表
    this.deviceTip = ''
    this.PageId = this.$root.$mp.query.PageId
    if(this.$root.$mp.query.url){
      //是否需要重新编辑数据
      this.urlPp = this.$root.$mp.query.url
      this.publishId = this.$root.$mp.query.Id
      console.log(this.imgArr.length,"***********************")
      if(this.imgArr.length<=0){
        this.getDefaultData()
      }
    }
    
    console.log("PageId}}}",this.PageId)
    if(this.mm>=1){
      wx.switchTab({
        url:"/pages/my/main"
      })
    }else{
      this.GetPublishItems()
    }
    
  },
  components: {},
   methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "发布"
      });
    },
    //获取需要重新编辑发布的数据
    getDefaultData(){
      post('Goods/GetRent_Editxq',{
        UserId:this.userId,
        Token:this.token,
        Id:this.publishId
      },this.curPage).then(res=>{
         if(res.code==0){
           this.TypeId = res.data.TypeId
           this.Title = res.data.Title.Value
           this.Synopsis = res.data. Synopsis.Value
           if(res.data.Company){
             this.Company = res.data.Company.Value
              this.CompanyId = res.data.CompanyId.Value
           }
           if(res.data.CompanyAddr){
             this.CompanyAddr = res.data.CompanyAddr.Value
             this.CompanyDoorNum = res.data.CompanyDoorNum.Value
           }
           if(res.data.BuyBudget){
             this.BuyBudget = res.data.BuyBudget.Value
           }
           if(res.data.PlanBuyArea){
             this.PlanBuyArea = res.data.PlanBuyArea.Value
           }
           if(res.data.PlanBuyDate){
             this.PlanBuyDate = res.data.PlanBuyDate.Value
           }
           if(res.data.GladBuyArea){
             this.GladBuyArea = res.data.GladBuyArea.Value
              this.GladBuyAreaId = res.data.GladBuyAreaId.Value
           }
           if(res.data.GladBuyerTrade){
             this.GladBuyerTrade = res.data.GladBuyerTrade.Value
              this.GladBuyerTradeId = res.data.GladBuyerTradeId.Value
           }
           if(res.data.BuyBudget){
             this.BuyBudget = res.data.BuyBudget.Value
           }
           if(res.data.CompanyTradeId){
             this.CompanyTradeId = res.data.CompanyTradeId.Value
              this.CompanyTrade = res.data.CompanyTrade.Value
           }
           if(res.data.PropertyPrice){
              this.PropertyPrice = res.data.PropertyPrice.Value
           }
           if(res.data.PlanAllNum){
             this.PlanAllNum = res.data.PlanAllNum.Value
           }
           if(res.data.PlanBuyNum){
             this.PlanBuyNum = res.data.PlanBuyNum.Value
           }
            if(res.data.PlanStartTime){
              this.PlanStartTime = res.data.PlanStartTime.Value
            }
            if(res.data.PlanEndTime){
              this.PlanEndTime = res.data.PlanEndTime.Value 
            }
            if(res.data.AgeLevel){
              this.AgeLevel = res.data.AgeLevel.Value
            }
            if(res.data.SexRatio){
              this.SexRatio = res.data.SexRatio.Value
            }
            if(res.data.EducationLvl){
              this.EducationLvl = res.data.EducationLvl.Value
            }
            if(res.data.ContentDetail){
              this.ContentDetail = res.data.ContentDetail.Value
            } 
            if(res.data.PlanRentDate){
              this.PlanRentDate = res.data.PlanRentDate.Value
            }
            if(res.data.RunStatus){
              this.RunStatus = res.data.RunStatus.Value
            }
            if(res.data.RentTime){
              this.RentTime = res.data.RentTime.Value
            }
            if(res.data.PropertyType){
              this.PropertyType = res.data.PropertyType.Value
            }
            if(res.data.NeedFloor){
              this.NeedFloor = res.data.NeedFloor.Value
            }
            if(res.data.NeedFloorHeight){
              this.NeedFloorHeight = res.data.NeedFloorHeight.Value
            }
            if(res.data.PayType){
              this.PayType = res.data.PayType.Value
            }
            if(res.data.DeviceRent){
              this.DeviceRent = res.data.DeviceRent.Value
            }
            if(res.data.PropertySort){
              this.PropertySort = res.data.PropertySort.Value
            }
            if(res.data.Decoration){
              this.Decoration = res.data.Decoration.Value
            }
            if(res.data.PropertyType){
              this.PropertyType = res.data.PropertyType.Value
            }
            if(res.data.NeedStation){
              this.NeedStation = res.data.NeedStation.Value
            }
            if(res.data.NeedApartment){
              this.NeedApartment = res.data.NeedApartment.Value
            }
            if(res.data.IsRegArea){
              if(res.data.IsRegArea.Value == 1){
                  this.IsRegAreaMsg = '是'
              }else{
                  this.IsRegAreaMsg = '否'
              }
            }
            if(res.data.IsSubPack){
              if(res.data.IsSubPack.Value == 1){
                  this.IsSubPackMsg = '是'
              }else{
                  this.IsSubPackMsg = '否'
              }
            }
            if(res.data.BuyBudget){
              this.BuyBudget = res.data.BuyBudget.Value
            }
            if(res.data.RingType){
              this.RingType = res.data.RingType.Value
            }
            if(res.data.RingNum){
              this.RingNum = res.data.RingNum.Value
            }
            if( res.data.RingRate){
              this.RingRate = res.data.RingRate.Value
            }
            

          //  this.ServiceName = res.data.ServiceName.Value
           if(this.PageId==32 || this.PageId==33){
             let info = {}
             res.data.PartnerList.map(item=>{
               console.log(item)
               info={
                    JobTitle:item.Value.JobTitle.Value, //职位名称
                    Experience:item.Value.Experience.Value, //经验要求
                    Degree:item.Value.Degree.Value,      //学历要求
                    Treatment:item.Value.Treatment.Value,   //合伙待遇（股份、工资、奖金）
                    JobType:item.Value.JobType.Value,     //全职/兼职
                    WorkTime:item.Value.WorkTime.Value,    //工作时间、时间要求
                    PartDesc:item.Value.PartDesc.Value,    //职位描述、合伙描述
                    ShowWork:false,//学历要求
                    ShowTreatment:false,//待遇
               }
               this.PartnerList.push(info)
             })
            }
            if(this.PageId==34){
              let info = {}
              res.data.PartnerList.map(item=>{
               info={
                    JobTitle:item.Value.JobTitle.Value, //职位名称
                    Experience:item.Value.Experience.Value, //经验要求
                    Degree:item.Value.Degree.Value,      //学历要求
                    WorkTime:item.Value.WorkTime.Value,    //工作时间、时间要求
                    PartDesc:item.Value.PartDesc.Value,    //职位描述、合伙描述
                    JobSex:item.Value.JobSex.Value,      //性别要求
                }
               this.PartnerList.push(info)
             })
            }
         }
      })
    },
    aaa(){
      this.isShowAddr = true;
    },
    getEndTime(){
      this.showDate = true
      this.timeFlag = true
    },
    getStartTime(){
      this.showDate = true
    },
    //选择成立日期
    choseDate(){
        this.showDate = true
    },
    addDeviceNum(e){
      let num = 0
      this.Devicelist.map(item=>{
        if(item.active){
          num++
        }
      })
      if(this.Devicelist[e].Name=="自定义+"){
        if(num<=10){
          this.isShowMask = true
          this.showNoChange = true
          this.showInput=true
          console.log(this.showInput,"showInput")
          this.masktitle = '请输入自定义的内容'
        }else{
          wx.showToast({
            title:"最多添加10组哦~",
            icon:"none"
          })
        }
      }else{
        if(this.Devicelist[e].active){
          this.$set(this.Devicelist[e],"active",false)
        }else{
          if(num>10){
              wx.showToast({
                title:"最多添加10组哦~",
                icon:"none"
              })
            }else{
                this.$set(this.Devicelist[e],"active",true)
            }
        }
      }
    },
    onChangeAddr(event){  //选择的时候
      const { picker, value, index } = event.mp.detail;
      var quindex=picker.getColumnIndex(0);
      var jiedaoindex=picker.getColumnIndex(1);
      let arr3=[];
      this.addressList[quindex].Child[jiedaoindex].Child.forEach(item3 => {
        arr3.push(item3.Name)
      })
      this.addressList3=arr3;console.log(this.addressList3)
      // picker.setColumnValues(2, this.addressList3);
      this.columns2=[
        {
          values: Object.keys(this.addressList2),
          className: "column1"
          },
          {
            values: this.addressList2[Object.keys(this.addressList2)[quindex]],
            className: 'column2',
            defaultIndex: 0
          },
          {
            values: this.addressList3,
            className: 'column3',
            defaultIndex: 0
          }
      ]
    },
    onConfirmAddr(event){
       const { index, value } = event.mp.detail;
       console.log(event)
       this.GladBuyArea = value.join(",");
       this.GladBuyAreaId = this.addressList[index[0]].Child[index[1]].Child[index[2]].Code
       let arr3=[];
      this.addressList[0].Child[0].Child.forEach(item3 => {
        arr3.push(item3.Name)
      })
      this.addressList3=arr3;console.log(this.addressList3)
      //确定后重置数组
      this.columns2=[
        {
          values: Object.keys(this.addressList2),
          className: "column1"
          },
          {
            values: this.addressList2[Object.keys(this.addressList2)[0]],
            className: 'column2',
            defaultIndex: 0
          },
          {
            values: this.addressList3,
            className: 'column3',
            defaultIndex: 0
          }
      ]
      console.log(" this.GladBuyAreaId:" ,this.GladBuyAreaId)
       this.isShowAddr = false
    },
    initData(){
      this.isShowMask =false
      // this.showDefaultCompany = false
      this.showNoChange = false
      this.showArea =false
      this.showInput =false
      this.showTrade =  false
      this.showDate = false
      if(this.PageId==36 ||　this.PageId==35 || this.PageId==43 ||　this.PageId==32 || this.PageId==33 || this.PageId==34 || this.PageId==42){
          this.addDetailTitle = "门牌号"
        this.addDetailPlaceholder = "门牌号/楼号等 例：3楼418室"
        }
        if(this.PageId==36 ||　this.PageId==35){
          this.upImgTitle = "请上传活动场地照片"
          this.addrTitle = "公司地址"
          this.addrPlaceholder = "办公大楼名称 如：如京基大厦"
          
        }
        if(this.PageId==36){
          this.introduce = "场地简介"
          this.introducePlaceholder = "请填写场地详细简介"
          this.pageTitle = '拼场地表单'
          this.subTitle = '(行业交流会/推广会/发布会/其他活动)'
          
        }
        if(this.PageId==35){
          this.introduce = "活动简介"
          this.introducePlaceholder = "请填写活动详细简介"
          this.pageTitle = '拼活动表单'
          this.subTitle = '(旅游/拓展/生日会/联谊会/其他活动)'
        }
        if(this.PageId==43){
          this.pageTitle = '组建机构表单'
          this.subTitle = '(产业园/商会/协会/研究所/实验室/慈善会/其他)'
          this.introduce = "机构简介"
          this.introducePlaceholder = "请填写机构详细简介"
          this.upImgTitle = "请上传相关照片"
          this.addrTitle = "地理位置"
          this.addrPlaceholder = "位置名称 如：如京基大厦"
        }
        console.log(this.urlPp,"this.$root.query.url)")
        if(!this.urlPp){
          if(this.imgArr.length<=0){
              if(this.PageId==32 || this.PageId==33){
                this.PartnerList=[
                    {
                      JobTitle:'', //职位名称
                      Experience:'', //经验要求
                      Degree:'',      //学历要求
                      Treatment:'',   //合伙待遇（股份、工资、奖金）
                      JobType:'',     //全职/兼职
                      WorkTime:'',    //工作时间、时间要求
                      PartDesc:'',    //职位描述、合伙描述
                      ShowWork:false,//学历要求
                      ShowTreatment:false,//待遇

                  }
                ]
              }
              if(this.PageId==34){
                this.PartnerList=[
                    {
                      JobTitle:'', //职位名称
                      Experience:'', //经验要求
                      Degree:'',      //学历要求
                      WorkTime:'',    //工作时间、时间要求
                      PartDesc:'',    //职位描述、合伙描述
                      JobSex:'',      //性别要求
                  }
                ]
              }
          }
        }
        
        if(this.PageId==32){
          this.pageTitle = '组建企业表单'
          this.subTitle = '(将根据您的要求推荐优质候选人)'
          this.introduce = "企业简介"
          this.introducePlaceholder = "请填写企业详细简介"
          this.upImgTitle = "请上传相关照片"
          this.addrTitle = "公司地址"
          this.addrPlaceholder = "办公楼名称 如：如京基大厦"
        }
        if(this.PageId==33){
          this.pageTitle = '组建团队表单'
          this.subTitle = '(将根据您的要求推荐优质候选人)'
          this.introduce = "团队简介"
          this.introducePlaceholder = "请填写团队详细简介"
          this.upImgTitle = "请上传相关照片"
          this.addrTitle = "公司地址"
          this.addrPlaceholder = "办公楼名称 如：如京基大厦"
        }
        if(this.PageId==34){
          this.pageTitle = '组建圈子表单'
          this.subTitle = '(将根据您的要求推荐优质候选人)'
          this.introduce = "圈子简介"
          this.introducePlaceholder = "请填写圈子详细简介"
          this.upImgTitle = "请上传相关照片"
          this.addrTitle = "圈子地址"
          this.addrPlaceholder = "地址名称 如：如京基大厦"
          
        }
        if(this.PageId==41){
            this.pageTitle = '办公写字楼表单'
            this.subTitle = '(写字楼/商务中心)'
            this.introduce = "房源描述"
            this.introducePlaceholder = "请填写出租要求"
            this.upImgTitle = "房屋照片"
            this.addrTitle = "商铺地址"
            this.infoMore = "房屋亮点"
            this.infoMorePlaceHolder = "请填写房屋亮点"
            this.Devicelist = this.Devicelist2
            this.metion = '商铺配置'
        }
        if(this.PageId==42){
            this.pageTitle = '住房出租表单'
            this.subTitle = '(公寓/自建房)'
            this.introduce = "出租要求"
            this.introducePlaceholder = "请填写房屋出租要求"
            this.upImgTitle = "房屋照片"
            this.addrTitle = "房屋地址"
            this.infoMore = "房屋亮点"
            this.infoMorePlaceHolder = "请填写房屋亮点"
            this.Devicelist = this.Devicelist1
            this.metion = '房屋配置'
        }
        if(this.PageId==37){
            this.pageTitle = '厂房出租表单'
        }
        if(this.PageId==38){
            this.pageTitle = '厂房转让表单'
        }
        if(this.PageId==38 || this.PageId==37){
            this.subTitle = '(厂房/车位/土地/仓库等)'
            this.introduce = "出租要求"
            this.introducePlaceholder = "请填写房屋出租要求"
            this.upImgTitle = "厂房照片"
            this.addrTitle = "房屋地址"
            this.infoMore = "房屋亮点"
            this.infoMorePlaceHolder = "请填写房屋亮点"
        }
        if(this.PageId==39){
            this.pageTitle = '商铺出租表单'
        }
        if(this.PageId==40){
            this.pageTitle = '商铺转让表单'
        }
        if(this.PageId==39 || this.PageId==40){
            this.subTitle = '(厂房/车位/土地/仓库等)'
            this.introduce = "商铺简介"
            this.introducePlaceholder = "请填写商铺简介"
            this.upImgTitle = "商铺照片"
            this.addrTitle = "商铺地址"
            this.infoMore = "商铺亮点"
            this.Devicelist = this.Devicelist3
            this.metion = '房屋配置'
            this.infoMorePlaceHolder = "请填写商铺亮点"
        }
        if(this.PageId==40 ||　this.PageId==41 || this.PageId==42 || this.PageId==37 || this.PageId==38 || this.PageId==39){
            this.TimeLimit = "接听时间段"
            this.TimeLimitPlaceHolder = "选择只在所选时间内接听"
            this.addrPlaceholder = "详细地址如：如希尔顿小区"
            this.addDetailTitle = "补充几句"
            this.addDetailPlaceholder = "详细的描述会大大增加快速出租几率"
        }
    },
    //装修情况
     getTrim(n){
        this.isShowMask = true
        if(n==1){
          this.showNoChange = true
          this.list = [{Id:1,Name:'毛坯'},{Id:0,Name:'普装'},{Id:2,Name:'精装'}]
          this.masktitle = '请选择装修情况'
        }
        if(n==2){
          this.showNoChange = true
          this.list = [{Id:1,Name:'可以注册'},{Id:0,Name:'不允许注册'}]
          this.masktitle = '请选择可否注册'
        }
        if(n==3){
          this.showNoChange = true
          this.list = [{Id:1,Name:'可以分割'},{Id:0,Name:'不允许分割'}]
          this.masktitle = '请选择可否分割'
        }
     },
    gethous(){
      for (let i =0; i <= 24; i++) {
          if(i.toString().length<2){
            i="0"+i
          }
          this.hourses.push(i)
      }
    },
    getMinutes(){
      for (let i =0; i < 60; i++) {
          if(i.toString().length<2){
            i="0"+i
          }
          this.minutes.push(i)
      }
    },
    bindDateChangeStart (e) {
        this.RentTimeBox = e.mp.detail.value
        console.log(this.RentTimeBox,"this.RentTimeBox")
    },
    //选择接听时间
    choseTimeLimit(){
      console.log("选择接听时间")
        this.gethous()
        this.getMinutes()
        this.isShowMask = true
        this.ShowTime = true
        this.masktitle = '请选择接听时间'
    },
    //时间
    onInput(e) {
        console.log(e, "时间");
        const date = new Date(e.mp.detail);
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dd = date.getDate();
        month.toString().length < 2 ? (month = "0" + month) : month;
        dd.toString().length < 2 ? (dd = "0" + dd) : dd;
        if(this.timeFlag){
            this.PlanEndTime = `${year}-${month}-${dd}`;
        }else{
          this.PlanStartTime = `${year}-${month}-${dd}`;
          this.PlanBuyDate = `${year}-${month}-${dd}`;
        }
        this.showDate = false
        this.timeFlag = false
        
    },
    //获取公司行业
    getCompanyTrade(){
      this.companyTipFlag = true
      this.showTrade = true
    },
    //获取认证的公司
    getCompany(){
        if(this.showDefaultCompany){
          this.isShowMask = true
          this.showNoChange = true
          this.masktitle = '请选择公司'
          this.list = this.detailInfo.CompanyList
        }
    },
    //圈子属性
    choseRingType(){
      this.isShowMask = true
      this.list = this.detailInfo.RingType
      this.masktitle = '请选择圈子属性'
    },
    //活动频率
    choseRing(){
      this.isShowMask = true
      this.list = this.detailInfo.RingRate.Value
      this.masktitle = '请选择活动频率'
    },
    //学历结构
    showEducation(){
      this.isShowMask = true
      this.list = this.educationList
      this.masktitle = '请选择学历结构'
    },
    touchEducation(n){
      this.PartnerList[n].ShowWork = true
      this.list = this.educationList
      this.masktitle2 = '请选择学历要求'
      this.showTouchEducation = true
    },

    //获取设备类型
    getPropertyType(){
      this.isShowMask = true  
      let info = {}
      this.detailInfo.RoomType.Value.map(item=>{
          info={
            Name:item
          }
          this.list.push(info)
      })
      this.masktitle = '请选择类型'
    },
    //选择弹层item
    chose(e){
        this.statu = e
    },
    subConfirm2(n){
      console.log(this.showTouchTreat,"this.showTouchTreat")
      console.log(this.PartnerList)
        if(this.showTouchEducation){
          console.log("this.list:",this.list)
            // npm this.EducationLvl = this.list[i].Name
            this.PartnerList[n].Degree = this.list[this.statu].Name
        }
        if(this.showTouchTreat){
          console.log("this.list:",this.list)
            // npm this.EducationLvl = this.list[i].Name
            this.PartnerList[n].Treatment = this.list[this.statu].Name
        }
        if(this.showJobType){
          this.PartnerList[n].JobType = this.list[this.statu].Name
        }
        this.isShowMask = false
        this.showNoChange = false
        this.ShowTime = false
        this.showInput = false
        this.PartnerList[n].ShowWork = false
        this.PartnerList[n].ShowTreatment = false
        this.showTouchEducation = false
        this.showTouchTreat = false
        this.showJobType = false
        this.statu = 0
        this.list = []

    },
    //确定选择
    subConfirm(){
      // console.log(this.list,this.statu)
      for(let i in this.list){
          if(i*1 == this.statu){
              if(this.masktitle =='请选择圈子属性' ){
                // console.log("this.list:",this.list)
                  this.RingType = this.list[i].Name
              }
              if(this.masktitle =='请选择活动频率' ){
                // console.log("this.list:",this.list)
                  this.RingRate = this.list[i].Name
              }
              if(this.masktitle =='请选择学历结构' ){
                // console.log("this.list:",this.list)
                  this.EducationLvl = this.list[i].Name
                  // this.Degree = this.list[i].Name
              }
              if(this.masktitle =='请选择装修情况'){
                this.Decoration = this.list[i].Name;
                // if(this.list[i].Id==0){
                //   this.IsTrimMsg = '否';
                // }else{
                //    this.IsTrimMsg = '是';
                // }
              }
              if(this.masktitle =='请选择可否注册'){
                this.IsRegArea = this.list[i].Id;
                if(this.list[i].Id==0){
                  this.IsRegAreaMsg = '否';
                }else{
                   this.IsRegAreaMsg = '是';
                }
              }
              if(this.masktitle =='请选择可否分割'){
                this.IsSubPack = this.list[i].Id;
                if(this.list[i].Id==0){
                  this.IsSubPackMsg = '否';
                }else{
                   this.IsSubPackMsg = '是';
                }
              }
              if(this.masktitle =='请选择类型'){
                  this.PropertyType = this.list[i].Name;
              }
              if(this.masktitle =='请选择公司'){
                this.Company = this.list[i].Name
                this.CompanyId = this.list[i].Id
              }
          }
      }
      if(this.masktitle == '请选择接听时间'){
        console.log(this.RentTimeBox,"RentTimeBox___________")
        if(this.RentTimeBox[0]>this.RentTimeBox[2]){
          wx.showToast({
              title: '选择时间有误！',
              icon: 'none',
              duration: 2000
          });
          return false
        }else{
            let time = []
            for(let item of this.RentTimeBox){
              if(item.toString().length<2){
                item = "0"+item
              }
              time.push(item)
            }
            
            this.RentTime=time[0]+":"+time[1]+"至"+time[2]+":"+time[3] //时间
        }
    
      }
      
      //选择时间
      
      //自定义设备
      if(this.masktitle =='请输入自定义的内容'){
        console.log("______________________")
        let tips={
          Id:this.Devicelist.length,
          Name:this.deviceTip,
          active:true
        }
        this.Devicelist.unshift(tips)
      }
      this.isShowMask = false
      this.showNoChange = false
      this.ShowTime = false
      this.showInput = false
      this.showTouchEducation = false
      this.statu = 0
      this.list = []
      this.hourses = []
      this.minutes = []
    },
    //取消选择
    cancle(){
      this.isShowMask = false
      this.showNoChange = false
      this.ShowTime = false
      // this.showDefaultCompany = false
      this.showInput = false
      this.list = []
      this.statu = 0
      this.hourses = []
      this.minutes = []
    },
    cancle2(n){
      this.PartnerList[n].ShowWork = false
      this.isShowMask = false
      this.showNoChange = false
      // this.showDefaultCompany = false
      this.ShowTime = false
      this.showInput = false
      this.list = []
      this.statu = 0
    },
    //获取默认数据
    GetPublishItems(){
      let that = this;
      let pp = {}
      if(that.$root.$mp.query.url){
        pp = {
          UserId:that.userId,
          Token:that.token,
          Id:that.publishId
        }
      }else{
        pp = {
          UserId:that.userId,
          Token:that.token,
          TypeId:that.TypeId
        }
      }
      post('Goods/GetPublishItems',pp,that.curPage).then(res=>{
        console.log(res,"GetPublishItems")
        if(res.code==0){
            //已经认证了 获取信息 发布信息
          this.BrandId = res.data.BrandId
          // this.PageId = res.data.PageId
          this.initData()
          that.detailInfo = res.data;
          if(res.data.arealist.length>0){
            {
              this.addressList = res.data.arealist
             this.addressList.forEach(item => {
                let obj = {};
                let arr =[];
                item.Child.forEach(item2=>{
                  arr.push(item2.Name)
                });
                obj[item.Name] = arr;
                this.addressList2 = Object.assign(this.addressList2,obj);console.log("111111111",this.addressList2)
              })
              let arr3=[];
              this.addressList[0].Child[0].Child.forEach(item3 => {
                arr3.push(item3.Name)
              })
              this.addressList3=arr3;
              this.columns2.push(
                {
                values: Object.keys(this.addressList2),
                className: "column1"
                },
                {
                  values: this.addressList2[Object.keys(this.addressList2)[0]],
                  className: 'column2',
                  defaultIndex: 0
                },
                {
                  values: this.addressList3,
                  className: 'column3',
                  defaultIndex: 0
                }
              )
              this.hasAddr = true,
              console.log(this.hasAddr)
              }
            }
             //行业的信息
            {
              this.tradelistBox = res.data.tradelist
              this.tradelistBox.forEach(item=>{
              let obj = {}
              let objArr = []
              item.Child.forEach(itemchild=>{
                objArr.push(itemchild.Name)
              });
              obj[item.Name] = objArr;
              that.tradeList = Object.assign(that.tradeList,obj);
            }),
            that.columns.push(
                {
                values: Object.keys(that.tradeList),
                className: "column1"
                },
                {
                  values: that.tradeList[Object.keys(that.tradeList)[0]],
                  className: 'column2',
                  defaultIndex: 0
                }
              )
            }
            //公司的信息
            if(res.data.CompanyList.length>1){
                this.showDefaultCompany = true
            }else{
                this.showDefaultCompany = false
                this.Company = res.data.CompanyList[0].Name
                this.CompanyId = res.data.CompanyList[0].Id
                console.log(this.Company,"this.companyName")
            }
          

        }else{
            //没有认证 先去认证  code=5 企业认证  code=6个人认证
          if(res.code==6){
              if(this.mm<1){
                wx.showToast({
                  title:res.msg,
                  duration:1500,
                  icon:'none',
                  success:()=>{
                    
                  }
                })
                setTimeout(() => {
                  wx.navigateTo({
                    url: "/pages/mine2/myVertical/main?url=rentDevice"
                  });
                  this.mm ++
                }, 1500);
              }else{
                wx.showModal({
                    title:'请先认证才可以发布',
                    content:'是否跳转到认证页面',
                    success:(result)=>{
                      if (result.confirm) {
                         setTimeout(() => {
                          wx.navigateTo({
                            url: "/pages/mine2/myVertical/main?url=rentDevice"
                          });
                          this.mm ++
                    }, 1500);
                        } else if (result.cancel) {
                          wx.switchTab({
                            url:"/pages/my/main"
                          })
                        }
                    }
                  })
              }
              
            }else if(res.code==5){
              if(this.mm<1){
                console.log("{{{{{{{{{{{{")
                wx.showToast({
                  title:res.msg,
                  duration:1500,
                  icon:'none',
                })
                setTimeout(() => {
                  wx.navigateTo({
                    url: "/pages/mine2/verticalCompany/main?url=rentDevice"
                  });
                  this.mm ++
                }, 1500);
              }else if(this.mm>=1){
                wx.showModal({ //后天添加了提示导致两次提示
                    title:'请先认证才可以发布',
                    content:'是否跳转到认证页面',
                    success:(result)=>{
                      if (result.confirm) {
                         setTimeout(() => {
                          wx.navigateTo({
                            url: "/pages/mine2/verticalCompany/main?url=rentDevice"
                          });
                          this.mm ++
                    }, 1500);
                        } else if (result.cancel) {
                          wx.switchTab({
                            url:"/pages/my/main"
                          })
                        }
                    }
                  })
              }
              
            }
        }
      })
    },
    //选择全职兼职
    getJobType(n){
      this.PartnerList[n].ShowWork = true
      this.masktitle2 = '请选择工作类型'
      this.showJobType = true
      this.list = [
        {Id:1,Name:'全职'},{Id:2,Name:'兼职'}
      ]
    },
    //选择待遇
    choseTreament(n){
      console.log("111111111111111111111")
      this.PartnerList[n].ShowWork = true
      let info = {}
      let i = 0
      this.detailInfo.Treatment.Value.map(item=>{
        info={
          Id:i++,
          Name:item.Value
        }
        this.list.push(info)
      })
      this.masktitle2 = '请选择合伙待遇'
      this.showTouchTreat = true
    },
    onChange(event){  //选择行业
      const { picker, value, index } = event.mp.detail;
      picker.setColumnValues(1, this.tradeList[value[0]]);
    },
    onConfirm(event){  //选择行业确定
      console.log(event);
      const { index, value } = event.mp.detail;
      if(this.companyTipFlag){
        this.CompanyTrade = value.join(",");
        this.CompanyTradeId = this.tradelistBox[index[0]].Child[index[1]].Id
      }else{
        this.GladBuyerTrade = value.join(",");
        this.GladBuyerTradeId = this.tradelistBox[index[0]].Child[index[1]].Id
      }
      this.showTrade=false
      this.companyTipFlag = false
      // console.log(picker.setValues);
      this.$set(this.columns[1],'values',this.tradeList[value[0]]);
      this.$set(this.columns[1],'defaultIndex',index[1]);
      console.log(this.columns)
    },
    //上传图片
    chosseImg(){
      const that = this;
      that.imgTips = false
      let num = 0;
      if(that.imgArr.length<that.picLength){
          num = that.picLength - that.imgArr.length
          wx.chooseImage({
            count: num,
            sizeType: ['compressed'],
            sourceType: ['album','camera'],
            success: (res)=>{
               res.tempFilePaths.forEach(item=>{
                  that.imgArr.push(item)
                  console.log(that.imgArr,that.imgArr.length,"///////////////////////")
               })
            },
          });
      }
      
    },
    async base64Img(arr){
      let base64Arr = []
      for(let i = 0;i < arr.length;i++){
        const res = await pathToBase64(arr[i]);
        base64Arr.push({
          PicUrl:res
        })
      }
      return base64Arr
    },
    //删除图片
    delImg(index){
        this.imgArr.splice(index,1)
    },
    //提示语
    toastTip(tip){
       wx.showToast({
          title: tip,
          icon: "none",
          duration: 1500
        }); 
    },
    valOther() {
      //校验
      if (this.Title == '') {
        this.toastTip("请输入标题!")
        return false;
      }
      if (this.imgArr.length <= 0) {
        this.toastTip("请上传图片!")
        return false;
      }
      if (this.Synopsis == '') {
        this.toastTip("请描述简介要求!")
        return false;
      }
      if (this.GladBuyAreaId=='') {
        this.toastTip("请选择区域!") 
        return false;
      }
      if (this.CompanyAddr == '') {
        this.toastTip("请输入地址!")
        return false;
      }
      if(this.PageId==42 || this.PageId==41 || this.PageId==37 || this.PageId==38 || this.PageId==39 || this.PageId==40){
        if (this.CompanyDoorNum == '') {
          this.toastTip("请输入补充说明!")
          return false;
        }
        if (this.ContentDetail=='') {
          this.toastTip("请输入亮点!") 
          return false;
        }
        if (this.RentTime=='') {
          this.toastTip("请选择接听时间!") 
          return false;
        }
        if (this.PropertyPrice=='') {
          this.toastTip("请输入相关费用!") 
          return false;
        }
        if (this.PropertyType=='') {
          this.toastTip("请选择类型!") 
          return false;
        }
        if (this.PlanBuyArea=='') {
          this.toastTip("请输入建筑面积!") 
          return false;
        }
        
      }
      if(this.PageId==42 || this.PageId==41 || this.PageId==37 || this.PageId==39){
        if (this.PayType=='') {
          this.toastTip("请输入付款方式!") 
          return false;
        }
        if (this.PlanRentDate=='') {
          this.toastTip("请选择起租期!") 
          return false;
        }
        
      }
      if(this.PageId==42 || this.PageId==41){
        if (this.NeedApartment=='') {
          this.toastTip("请输入户型!") 
          return false;
        }
        if (this.Decoration=='') {
          this.toastTip("请选择装修情况!") 
          return false;
        }
      }
      if(this.PageId==42 || this.PageId==41 || this.PageId==39 || this.PageId==40){
        if (this.NeedFloor=='') {
          this.toastTip("请输入楼层!") 
          return false;
        }
        if (this.PropertySort=='') {
          this.toastTip("请输入性质!") 
          return false;
        }
      }
      if(this.PageId==42 || this.PageId==39 || this.PageId==40){
        // if (this.NeedFloorDepth=='') {
        //   this.toastTip("请输入进深!") 
        //   return false;
        // }
        if (this.NeedFloorHeight=='') {
          this.toastTip("请输入层高!") 
          return false;
        }
        // if (this.NeedFaceWidth=='') {
        //   this.toastTip("请输入面宽!") 
        //   return false;
        // }
      }
      if(this.PageId==42){
        if (this.DeviceRent=='') {
          this.toastTip("请输入租金要求!") 
          return false;
        }
        if (this.NeedStation=='') {
          this.toastTip("请输入宜住人数!") 
          return false;
        }
      }
      if(this.PageId==39){
        if (this.RunStatus=='') {
          this.toastTip("请输入经营状态!") 
          return false;
        }
        if (this.GladBuyerTrade=='') {
          this.toastTip("请选择行业!") 
          return false;
        }
      }
      if(this.PageId==41){
        console.log(this.IsSubPack,"this.IsSubPack__")
        if (this.IsRegAreaMsg=='') {
          this.toastTip("请选择可否注册!") 
          return false;
        }
        if (this.IsSubPackMsg=='') {
          this.toastTip("请选择可否分割!") 
          return false;
        }
        if (this.NeedStation=='') {
          this.toastTip("请输入工位要求!") 
          return false;
        }
      }
      if(this.PageId==36 || this.PageId==35 || this.PageId==43 || this.PageId==32 || this.PageId==33 || this.PageId==34){
          if (this.CompanyAddr == '') {
            this.toastTip("请输入地址!")
            return false;
          }
          if (this.CompanyDoorNum == '') {
            this.toastTip("请输入门牌号!")
            return false;
          }
          if (this.CompanyId == '') {
            this.toastTip("请选择公司!")
            return false;
          }
          // if (this.Founder == '') {
          //   this.toastTip(`请输入名称!`)
          //   return false;
          // }
      }
      if(this.PageId==36 || this.PageId==35 || this.PageId==43 || this.PageId==32 || this.PageId==33){
        if (this.GladBuyerTradeId == '') {
          this.toastTip("请选择行业!")
          return false;
        }
      }
      if(this.PageId==36 || this.PageId==35){
          if (this.PropertyPrice == '') {
            this.toastTip("请输入对应金额!")
            return false;
          }
          if (this.SexRatio == '') {
            this.toastTip("请输入男女比例!")
            return false;
          }
          if (this.AgeLevel == '') {
            this.toastTip("请输入年龄层次!")
            return false;
          }
          
          if (this.PlanStartTime =='') {
            this.toastTip("请选择开始时间!")
            return false;
          }
          if (this.PlanEndTime =='') {
            this.toastTip("请选择结束时间!")
            return false;
          }
          if (this.PlanEndTime !='' && this.PlanStartTime !='') {
            const _PlanEndTime = new Date(this.PlanEndTime)
            const _PlanStartTime = new　Date(this.PlanStartTime)
            console.log(_PlanEndTime.getTime()-_PlanStartTime.getTime())

            if(_PlanEndTime.getTime() < _PlanStartTime.getTime()){
              this.toastTip("开始时间不能大于结束时间!")
              return false;
            }
          }
          if (this.EducationLvl =='') {
            this.toastTip("请选择学历结构!")
            return false;
          }
          if (this.CompanyTradeId =='') {
            this.toastTip("请选择公司行业!")
            return false;
          }
          if (this.PlanAllNum == '') {
            this.toastTip("请输入本公司人数!")
            return false;
          }
          
          if (this.PlanBuyNum == '') {
            this.toastTip("请输入拼活动公司人数!")
            return false;
          }
      }
      if(this.PageId==43 || this.PageId==32 || this.PageId==33 || this.PageId==34){
        if (this.BuyBudget == '') {
          this.toastTip(`请输入投资预算!`)
          return false;
        }
        if (this.PlanBuyDate == '') { 
          this.toastTip(`请选择时间!`)
          return false;
        }
      }
      if(this.PageId==43 || this.PageId==32 || this.PageId==33){
        if (this.PlanBuyArea == '') {
          this.toastTip(`请输入面积!`)
          return false;
        }
      }
      if(this.PageId==32 || this.PageId==33 || this.PageId==34){
        for(let i=0;i<this.PartnerList.length;i++){
            if (this.PartnerList[i].JobTitle == '') {
              this.toastTip(`职位名称!`)
              return false;
            }
            if (this.PartnerList[i].Experience == '') {
              this.toastTip(`经验要求!`)
              return false;
            }
            if (this.PartnerList[i].Degree == '') {
              this.toastTip(`学历要求!`)
              return false;
            }
            if (this.PartnerList[i].WorkTime == '') {
              this.toastTip(`工作时间、时间要求!`)
              return false;
            }
            if (this.PartnerList[i].PartDesc == '') {
              this.toastTip(`职位描述、合伙描述!`)
              return false;
            }
        }
      }
      if(this.PageId==32 || this.PageId==33){
        for(let i=0;i<this.PartnerList.length;i++){
            if (this.PartnerList[i].JobType == '') {
              this.toastTip(`全职/兼职!`)
              return false;
            }
            if (this.PartnerList[i].Treatment == '') {
              this.toastTip(`合伙待遇!`)
              return false;
            }
        }
      }
      if(this.PageId==34){
        for(let i=0;i<this.PartnerList.length;i++){
            if (this.PartnerList[i].JobSex == '') {
            this.toastTip(`性别!`)
            return false;
          }
        }
        if (this.RingType == '') {
          this.toastTip(`请输入圈子属性!`)
          return false;
        }
        if (this.RingNum == '') {
          this.toastTip(`请输入圈子计划人数!`)
          return false;
        }
        if (this.RingRate == '') {
          this.toastTip(`请输入活动频率!`)
          return false;
        }
      }


      return true;
    },
    //增加职位
    addWork(){
      if(this.PartnerList.length>3){
        wx.showToast({
          title:"最多添加3个！",
          icon:"none",
          duration:1500
        })
      }else{
        let keys=this.PartnerList[0]
        let info={}
        // console.log(Object.keys(keys))
        Object.keys(keys).map(item=>{
          this.$set(info,item,"")
        })
        // console.log(info)
        const _keys=JSON.stringify(info)
        this.PartnerList.unshift(JSON.parse( _keys))
      }
      
    },
    delOrder(index){  //删除明细
     this.PartnerList.splice(index,1);
    },
    //提交发布
    async submitApply(){
      const that = this
      let PicList = await that.base64Img(that.imgArr);
      let _PicList = JSON.stringify(PicList)
      let pramas = {}
      let GoodsInfo = {}
      let _PartnerList = []
      let infoTips = {}
      if(that.PageId == 36 || that.PageId == 35){
          GoodsInfo = {
          Title:that.Title,
          CompanyId:that.CompanyId,
          Company:that.Company,
          CompanyAddr:that.CompanyAddr,
          CompanyDoorNum:that.CompanyDoorNum,
          Synopsis:that.Synopsis,
          CompanyTradeId:that.CompanyTradeId,
          CompanyTrade:that.CompanyTrade,
          GladBuyerTradeId:that.GladBuyerTradeId,
          GladBuyerTrade:that.GladBuyerTrade,
          PropertyPrice:that.PropertyPrice,
          PlanAllNum:that.PlanAllNum,
          PlanBuyNum:that.PlanBuyNum,
          PlanStartTime:that.PlanStartTime,
          PlanEndTime:that.PlanEndTime,
          GladBuyArea:that.GladBuyArea,
          GladBuyAreaId:that.GladBuyAreaId,
          AgeLevel:that.AgeLevel,
          SexRatio:that.SexRatio,
          EducationLvl:that.EducationLvl,
          // Founder:that.Founder
        }
      }
      if(that.PageId == 42){
        GoodsInfo = {
          Title:that.Title,
          CompanyAddr:that.CompanyAddr,
          CompanyDoorNum:that.CompanyDoorNum,
          Synopsis:that.Synopsis,
          ContentDetail:that.ContentDetail,
          RentTime:that.RentTime,
          ServiceName:that.ServiceName,
          GladBuyAreaId:that.GladBuyAreaId,
          GladBuyArea:that.GladBuyArea,
          PlanBuyArea:that.PlanBuyArea,
          PlanRentDate:that.PlanRentDate,
          PropertyType:that.PropertyType,
          NeedFloor:that.NeedFloor,
          // NeedFaceWidth:that.NeedFaceWidth,
          NeedFloorHeight:that.NeedFloorHeight,
          // NeedFloorDepth:that.NeedFloorDepth,
          PayType:that.PayType,
          PropertyPrice:that.PropertyPrice,
          DeviceRent:that.DeviceRent,
          Decoration:that.Decoration,
          PropertySort:that.PropertySort,
          NeedStation:that.NeedStation,
          NeedApartment:that.NeedApartment,
        }
      }
      if(that.PageId == 41){
        GoodsInfo = {
          Title:that.Title,
          CompanyAddr:that.CompanyAddr,
          CompanyDoorNum:that.CompanyDoorNum,
          Synopsis:that.Synopsis,
          ContentDetail:that.ContentDetail,
          RentTime:that.RentTime,
          ServiceName:that.ServiceName,
          GladBuyAreaId:that.GladBuyAreaId,
          GladBuyArea:that.GladBuyArea,
          PlanBuyArea:that.PlanBuyArea,
          PlanRentDate:that.PlanRentDate,
          PropertyType:that.PropertyType,
          PropertySort:that.PropertySort,
          NeedFloor:that.NeedFloor,
          PayType:that.PayType,
          PropertyPrice:that.PropertyPrice,
          Decoration:that.Decoration,
          IsRegArea:that.IsRegArea,
          IsSubPack:that.IsSubPack,
          NeedStation:that.NeedStation,
          NeedApartment:that.NeedApartment,
        }
      }
      if(that.PageId == 37){
        GoodsInfo = {
          Title:that.Title,
          CompanyAddr:that.CompanyAddr,
          CompanyDoorNum:that.CompanyDoorNum,
          Synopsis:that.Synopsis,
          ContentDetail:that.ContentDetail,
          RentTime:that.RentTime,
          GladBuyAreaId:that.GladBuyAreaId,
          GladBuyArea:that.GladBuyArea,
          PlanBuyArea:that.PlanBuyArea,
          PlanRentDate:that.PlanRentDate,
          PropertyType:that.PropertyType,
          PayType:that.PayType,
          PropertyPrice:that.PropertyPrice,
          DeviceRent:that.DeviceRent
        }
      }
      if(that.PageId == 38){
          GoodsInfo = {
            Title:that.Title,
            CompanyAddr:that.CompanyAddr,
            CompanyDoorNum:that.CompanyDoorNum,
            Synopsis:that.Synopsis,
            ContentDetail:that.ContentDetail,
            RentTime:that.RentTime,
            GladBuyAreaId:that.GladBuyAreaId,
            GladBuyArea:that.GladBuyArea,
            PlanBuyArea:that.PlanBuyArea,
            PropertyType:that.PropertyType,
            PropertyPrice:that.PropertyPrice
        }
      }
      if(that.PageId == 39){
          GoodsInfo = {
            Title:that.Title,
            CompanyAddr:that.CompanyAddr,
            CompanyDoorNum:that.CompanyDoorNum,
            Synopsis:that.Synopsis,
            ContentDetail:that.ContentDetail,
            RentTime:that.RentTime,
            ServiceName:that.ServiceName,
            GladBuyAreaId:that.GladBuyAreaId,
            GladBuyArea:that.GladBuyArea,
            PlanBuyArea:that.PlanBuyArea,
            PlanRentDate:that.PlanRentDate,
            PropertyType:that.PropertyType,
            PropertySort:that.PropertySort,
            NeedFloor:that.NeedFloor,
            // NeedFaceWidth:that.NeedFaceWidth,
            NeedFloorHeight:that.NeedFloorHeight,
            // NeedFloorDepth:that.NeedFloorDepth,
            RunStatus:that.RunStatus,
            GladBuyerTradeId:that.GladBuyerTradeId,
            GladBuyerTrade:that.GladBuyerTrade,
            PayType:that.PayType,
            PropertyPrice:that.PropertyPrice,
        }
      }
      if(that.PageId == 40){
          GoodsInfo = {
            Title:that.Title,
            CompanyAddr:that.CompanyAddr,
            CompanyDoorNum:that.CompanyDoorNum,
            Synopsis:that.Synopsis,
            ContentDetail:that.ContentDetail,
            RentTime:that.RentTime,
            ServiceName:that.ServiceName,
            GladBuyAreaId:that.GladBuyAreaId,
            GladBuyArea:that.GladBuyArea,
            PlanBuyArea:that.PlanBuyArea,
            PropertyType:that.PropertyType,
            PropertySort:that.PropertySort,
            NeedFloor:that.NeedFloor,
            // NeedFaceWidth:that.NeedFaceWidth,
            NeedFloorHeight:that.NeedFloorHeight,
            // NeedFloorDepth:that.NeedFloorDepth,
            PropertyPrice:that.PropertyPrice,
        }
      }
      if(that.PageId==43 ||　that.PageId==32　|| that.PageId==33){
          GoodsInfo = {
            Title:that.Title,
            CompanyId:that.CompanyId,
            Company:that.Company,
            CompanyAddr:that.CompanyAddr,
            CompanyDoorNum:that.CompanyDoorNum,
            Synopsis:that.Synopsis,
            GladBuyerTradeId:that.GladBuyerTradeId,
            GladBuyerTrade:that.GladBuyerTrade,
            GladBuyArea:that.GladBuyArea,
            GladBuyAreaId:that.GladBuyAreaId,
            // Founder:that.Founder,
            BuyBudget:that.BuyBudget,
            PlanBuyDate:that.PlanBuyDate,
            PlanBuyArea:that.PlanBuyArea
        }
        if(that.PageId==32　|| that.PageId==33){
          for(let i=0;i<that.PartnerList.length;i++){
              infoTips = {
                  JobTitle:that.PartnerList[i].JobTitle,
                  Experience:that.PartnerList[i].Experience,
                  Degree:that.PartnerList[i].Degree,
                  Treatment:that.PartnerList[i].Treatment,
                  JobType:that.PartnerList[i].JobType,
                  WorkTime:that.PartnerList[i].WorkTime,
                  PartDesc:that.PartnerList[i].PartDesc
              }
              _PartnerList.push(infoTips)
          }
          console.log("_PartnerList:",_PartnerList)
        }
      }
      if(that.PageId==34){
          GoodsInfo = {
            Title:that.Title,
            CompanyId:that.CompanyId,
            Company:that.Company,
            CompanyAddr:that.CompanyAddr,
            CompanyDoorNum:that.CompanyDoorNum,
            Synopsis:that.Synopsis,
            GladBuyArea:that.GladBuyArea,
            GladBuyAreaId:that.GladBuyAreaId,
            // Founder:that.Founder,
            BuyBudget:that.BuyBudget,
            PlanBuyDate:that.PlanBuyDate,
            RingType:that.RingType,
            RingNum:that.RingNum,
            RingRate:that.RingRate,
        }
        for(let i=0;i<that.PartnerList.length;i++){
            infoTips = {
                JobTitle:that.PartnerList[i].JobTitle,
                Experience:that.PartnerList[i].Experience,
                Degree:that.PartnerList[i].Degree,
                JobSex:that.PartnerList[i].JobSex,
                WorkTime:that.PartnerList[i].WorkTime,
                PartDesc:that.PartnerList[i].PartDesc
            }
            _PartnerList.push(infoTips)
        }
      }
      console.log(GoodsInfo,"+++++++++++")
      if(that.valOther()){
          if(that.PageId == 42 || that.PageId == 43 || that.PageId == 41){
            for(let i in that.Devicelist){
              if(that.Devicelist[i].active){
                that.ServiceName+=that.Devicelist[i].Name+","
              }
            }
            GoodsInfo.ServiceName = that.ServiceName
          console.log("that.ServiceName:",that.ServiceName)
          }
          console.log("_____")
          if(that.PageId==32　|| that.PageId==33 || that.PageId==34){
            if(this.urlPp){
              pramas={
                  UserId:this.userId,
                  Token:this.token,
                  Id:this.publishId,
                  PicList:_PicList,
                  GoodsInfo:GoodsInfo,
                  PartnerList:_PartnerList
              }
            }else{
              pramas={
                  UserId:this.userId,
                  Token:this.token,
                  TypeId:this.TypeId,
                  PicList:_PicList,
                  GoodsInfo:GoodsInfo,
                  PartnerList:_PartnerList
              }
            }
           
          }else{
            if(this.urlPp){
              pramas={
                  UserId:this.userId,
                  Token:this.token,
                  Id:this.publishId,
                  PicList:_PicList,
                  GoodsInfo:GoodsInfo
              }
            }else{
                pramas={
                  UserId:this.userId,
                  Token:this.token,
                  TypeId:this.TypeId,
                  PicList:_PicList,
                  GoodsInfo:GoodsInfo
              }
            }
            
          }
          // console.log(pramas,"pramas")
          that.submitAll(pramas)
          // that.submitAll(JSON.stringify(PicList),GoodsInfo)
        
      }
    },
    submitAll(pramas){
      post('Goods/RentSharing',pramas,this.curPage).then(res=>{
        console.log("res:",res)
            if(res.code==0){
              wx.showToast({
              title:res.msg,
              icon:'success',
              duration:1500,
            })
            setTimeout(() => {
              wx.navigateTo({
                url:'/pages/VerticalStatus/main'
              })
              this.trimData()
            },1500)
        }
      })
    },
    trimData(){
      this.urlPp = ''
      this.imgArr=[]
      this.Title = ''
      this.Company = ''
      this.CompanyAddr = ''
      this.CompanyDoorNum = ''
      this.CompanyCulture = ''
      this.Synopsis = ''
      this.GladBuyerTrade = ''
      this.PropertyType = ''
      this.PropertySort = ''
      this.PropertyPrice = ''
      this.PlanBuyArea = ''
      this.PlanBuyDate = ''
      this.GladBuyArea = ''
      this.BuyBudget = ''
      this.SpecsType = ''
      this.PlanBuyNum = ''
      this.deviceTip = ''
      this.DevicePrice = ''
      this.DeviceRent = ''
      this.ServiceName = ''
      this.NeedOfficeNum = ''
      this.RentTimeLimit = ''
      this.ContentDetail = ''
      this.AllArea = ''
      this.EducationLvl = ''
      this.SexRatio = ''
      this.AgeLevel = ''
      this.CompanyTrade = ''
      // this.Founder = ''
      this.PlanStartTime = ''
      this.PlanEndTime = ''
      this.PlanBuyNum = ''
      this.PlanAllNum = ''
      this.RingType = ''
      this.RingNum = ''
      this.RingRate = ''
      this.PartnerList=[]
      this.RentTime = ''
      this.NeedFloor = ''
      // this.NeedFaceWidth = ''
      this.NeedFloorHeight = ''
      // this.NeedFloorDepth = ''
      this.PayType = ''
      this.Decoration = ''
      this.Decoration = ''
      this.IsSubPack = ''
      this.IsSubPackMsg = ''
      this.IsRegArea = ''
      this.IsRegAreaMsg = ''
      this.NeedStation = ''
      this.NeedApartment = ''
      this.RunStatus = ''
      this.PlanRentDate = ''
      this.ServiceName = ''
      this.Devicelist = []
      this.Devicelist1 = [
        {Id:1,Name:"宽带",active:false},{Id:2,Name:"床"},{Id:3,Name:"衣柜"},{Id:4,Name:"沙发"},{Id:5,Name:"停车位"},{Id:6,Name:"自定义+"},
      ]
      this.Devicelist2 = [
        {Id:1,Name:"网络/电话",active:false},{Id:2,Name:"会议室"},{Id:3,Name:"电梯"},{Id:4,Name:"空调"},{Id:5,Name:"卡位"},{Id:6,Name:"阳台"},{Id:7,Name:"自定义+"}
      ]
      this.Devicelist3 = [
        {Id:1,Name:"网络/电话",active:false},{Id:2,Name:"排污"},{Id:3,Name:"可明火"},{Id:4,Name:"管煤"},{Id:5,Name:"停车位"},{Id:6,Name:"自定义+"},
      ]

    }
    
  },

  created() {}
};
</script>
<style lang="scss" scoped>
.form-cells .form-cells-item .ipt{
  padding-right:0
}
.maskType {
    background: #fff;
    width: 100%;
    height: 600rpx;
    padding: 30rpx 0;
    bottom: 0!important;
    position: fixed;
    z-index: 999;
    p {
        padding: 15rpx 30rpx;
        text-align:center;
    }
    .flex {
        justify-content: space-between;
        border-bottom: 1rpx solid #f2f2f2;
        padding: 20rpx;
        font-weight: 400;
        font-size: 30rpx;
        .color {
            color: #ff6325
        }
        .size {
            font-size: 26rpx;
        }
        .title {
            font-weight: bold;
        }
    }
    .itemactive {
        background: #ff6325;
        color: #fff
    }
}
.noParActive{
  height:320rpx!important;
}
.noChilActive{
  height:200rpx!important;
}
.upbtn{
  width:190rpx;
  height:190rpx
}
.freeRoom{
        .timeText{
            text-align: center;
        }
        .pickerView{
            width:100%;
            height: 400rpx;
            .pickerColumn{
                .pickerItem{
                    line-height:68rpx;
                    height:34rpx;
                    overflow:hidden;
                    text-align: center;
                }
            }
        }
    }
</style>