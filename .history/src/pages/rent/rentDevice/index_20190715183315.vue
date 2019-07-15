<template>
  <div class="pageContent">
    <div class="FormBox">
      <img class="topbgimg" src="/static/images/icons/bg2.jpg" v-if=" PageId==28">
      <img class="topbgimg" src="/static/images/icons/bg1.jpg" v-else>
      <div class="FormCon" style="margin-top:-260rpx;">
        <div class="formTitle">
          <div class="titletxt">{{pageTitle}}</div>
          <p class="subtitle">{{subTitle}}</p>
        </div>
        
        <div class="form-cells">
          <!--标题-->
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
          <!--公司名称 -->
          <div class="form-cells-item">
            <div :class="showDefaultCompany?'form-cells-navigate navigate-bottom':''">
              <div class="form-cells-hd">公司名称</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择公司"
                  @click="getCompany"
                  placeholder-style="color:#b5b5b5;"
                  v-model="Company"
                >
              </div>
            </div>
          </div>
          <!--输入选择内容-->
          <div v-if="PageId==25">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column" @click="getProperty">
                  <div class="form-cells-hd">物业形式</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    v-model="PropertySort"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">物业单价</div>
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
                  <div class="form-cells-hd">意向购买区域</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="isShowAddr=true"
                    v-model="GladBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">是否装修</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="getTrim(1)"
                    v-model="IsTrimMsg"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">计划购买日期</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="showDate=true"
                    v-model="PlanBuyDate"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">计划购买面积</div>
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
                  <div class="form-cells-hd">意向拼购方行业</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    v-model="GladBuyerTrade"
                    @click="showTrade=true"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">购买预算</div>
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
                  <div class="form-cells-hd">物业类型</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    v-model="PropertyType"
                    @click="getPropertyType"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <div v-if="PageId==26">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">设备类型</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    v-model="PropertyType"
                    @click="getPropertyType"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">规格型号</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="SpecsType"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">计划购买数量</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请选择"
                    v-model="PlanBuyNum"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">设备形式</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="getProperty"
                    v-model="PropertySort"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">计划购买日期</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="showDate=true"
                    v-model="PlanBuyDate"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">设备使用区域</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="isShowAddr=true"
                    v-model="GladBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">设备单价</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PropertyPrice"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">购买预算</div>
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
                  <div class="form-cells-hd">意向行业</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    v-model="GladBuyerTrade"
                    @click="showTrade=true"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <div v-if="PageId==30">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">意向拼租行业</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择" 
                    v-model="GladBuyerTrade"
                    @click="showTrade=true"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">计划租赁日期</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="showDate=true"
                    v-model="PlanBuyDate"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">意向区域</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="isShowAddr=true"
                    v-model="GladBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">所需面积</div>
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
                  <div class="form-cells-hd">公司行业</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    v-model="CompanyTrade"
                    @click="getCompanyTrade"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">租赁期限</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="getRentTimeLimit"
                    v-model="RentTimeLimit"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">价格区间</div>
                  <div class="flex flexAlignCenter">
                        <input
                            class="ipt"
                            type="text"
                            placeholder="最低价"
                            v-model="DeviceRent"
                          placeholder-style="color:#b5b5b5;"
                        >
                        <span>-</span>
                        <input
                        class="ipt"
                        type="text"
                        placeholder="最高价"
                        v-model="DevicePrice"
                        placeholder-style="color:#b5b5b5;"
                      >
                  </div>
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">是否装修</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="getTrim(1)"
                    v-model="IsTrimMsg"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">需卡位数量</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入（比如：3卡2室）"
                    v-model="NeedOfficeNum"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <div v-if="PageId==31">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">意向拼租行业</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择" 
                    v-model="GladBuyerTrade"
                    @click="showTrade=true"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">设备需求规格</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="SpecsType"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">设备租金</div>
                  <input
                      class="ipt"
                      type="text"
                      placeholder="请输入"
                      v-model="PropertyPrice"
                     placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">起租时间</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="showDate=true"
                    v-model="PlanBuyDate"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">地区</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="isShowAddr=true"
                    v-model="GladBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">租赁期限</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="getRentTimeLimit"
                    v-model="RentTimeLimit"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">设备形式</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="getProperty"
                    v-model="PropertySort"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">价格区间</div>
                  <div class="flex flexAlignCenter">
                        <input
                            class="ipt"
                            type="text"
                            placeholder="最低价"
                            v-model="DeviceRent"
                            placeholder-style="color:#b5b5b5;"
                        >
                        <span>-</span>
                        <input
                        class="ipt"
                        type="text"
                        placeholder="最高价"
                        v-model="DevicePrice"
                        placeholder-style="color:#b5b5b5;"
                      >
                  </div>
                </div>
              </div>
          </div>
          <div v-if="PageId==29">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">意向拼租行业</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择" 
                    v-model="GladBuyerTrade"
                    @click="showTrade=true"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">设备需求规格</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="SpecsType"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">设备形式</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    v-model="PropertySort"
                    @click="getProperty"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">设备数量</div>
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
                  <div class="form-cells-hd">出售价格</div>
                  <input
                      class="ipt"
                      type="text"
                      placeholder="请输入"
                      v-model="PropertyPrice"
                     placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">起租时间</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="showDate=true"
                    v-model="PlanBuyDate"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">租赁期限</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="getRentTimeLimit"
                    v-model="RentTimeLimit"
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
                    @click="isShowAddr=true"
                    v-model="GladBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <div v-if="PageId==28">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">意向拼租行业</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择" 
                    v-model="GladBuyerTrade"
                    @click="showTrade=true"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">办公形式</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="getShortRent"
                    v-model="PropertySort"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">出租价格</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PropertyPrice"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">总面积</div>
                  <input
                      class="ipt"
                      type="text"
                      placeholder="请输入"
                      v-model="AllArea"
                      placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">出租面积</div>
                  <input
                      class="ipt"
                      type="text"
                      placeholder="请输入"
                      v-model="PlanBuyArea"
                     placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">卡位数量</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入（格式：3卡2室）"
                    v-model="NeedOfficeNum"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">租赁期限</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="getRentTimeLimit"
                    v-model="RentTimeLimit"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">计划租赁日期</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    @click="showDate=true"
                    v-model="PlanBuyDate"
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
                    @click="getCompanyTrade"
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
                    @click="isShowAddr=true"
                    v-model="GladBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <div v-if="PageId==27">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">意向拼租行业</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择" 
                    v-model="GladBuyerTrade"
                    @click="showTrade=true"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">卡座数量</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="NeedOfficeNum"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">租赁到期时间</div>
                  <input
                      class="ipt"
                      type="text"
                      disabled
                      placeholder="请选择"
                      @click="showDate=true"
                      v-model="PlanBuyDate"
                      placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">出租价格</div>
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
                  <div class="form-cells-hd">总面积</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="AllArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">出租面积</div>
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
                  <div class="form-cells-hd">公司行业</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    v-model="CompanyTrade"
                    @click="getCompanyTrade"
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
                    @click="isShowAddr=true"
                    v-model="GladBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <!--公司简介-->
          <div class="form-cells-item">
            <div class="">
            <!-- <div class="form-cells-navigate navigate-right"> -->
              <div class="form-cells-hd">公司简介</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  placeholder="请填写公司详细简介"
                  v-model="Synopsis"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <!--公司理念-->
          <div class="form-cells-item" v-if="PageId==30 || PageId==31 || PageId==28 ||  PageId==29 ||  PageId==27">
            <div class="">
              <div class="form-cells-hd">公司理念</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  placeholder="请填写公司详细简介"
                  v-model="CompanyCulture"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <!--办公室描述-->
          <div class="form-cells-item" v-if="PageId == 29 || PageId == 27 || PageId == 28">
            <div class="">
            <!-- <div class="form-cells-navigate navigate-right"> -->
              <div class="form-cells-hd">办公室描述</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  placeholder="描述办公室环境能够更加吸引优质的候选人哦！"
                  v-model="ContentDetail"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <!--厂房出租-->
          <div v-if="TypeId==58">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">起租期</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请填写"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">付款方式</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">面积</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请填写"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">租金</div>
                  <div class="flex flexAlignCenter justifyContentCenter">
                      <input class="ipt" type="text"  placeholder="请填写" placeholder-style="color:#b5b5b5;">元/m <span class="sup">2</span> 
                  </div>
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">类型</div>
                  <input
                    class="ipt flex2"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">日租金</div>
                  <div class="flex flexAlignCenter justifyContentCenter">
                      <input
                        class="ipt flex2"
                        type="text"
                        placeholder="请选择"
                        placeholder-style="color:#b5b5b5;"
                        style="padding:0"
                      >
                      <p>
                        元/m
                        <span class="sup">2</span>
                        /天
                      </p>
                  </div>
                </div>
              </div>
              <!--公司简介 或者出租要求-->
              <div class="form-cells-item">
                <div class="">
                  <div class="form-cells-hd">{{introduce}}</div>
                  <div class="form-cell-bd">
                    <input
                      class="ipt"
                      type="text"
                      :placeholder="introducePlaceholder"
                      placeholder-style="color:#b5b5b5;"
                    >
                  </div>
                </div>
              </div>
          </div>
          <!--上传图片-->
          <div class="form-cells-item">
            <div class="form-cells-hd">{{upImgTitle}}</div>
            <div class="form-cell-bd form-cell-img">
              <div class="upbtn" v-for="(item,pindex) in imgArr" :key="pindex">
                <span class="close" @click="delImg(pindex)">×</span>
                <img class="upimg" :src="item">
              </div>
              <div class="upbtn" @click="chosseImg" v-if="imgArr.length<picLength">
                <img class="upimg" src="/static/images/icons/upload_1.png">
              </div>
            </div>
          </div>
          <!--选项 start-->
          <div class="flex item-columnbox">
              <div class="item2-column" v-if="PageId!=29">
                <div class="form-cells-hd">业务分包</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  @click="getTrim(2)"
                  v-model="IsSubPackMsg"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
              <div class="item2-column" v-if="PageId!=29">
                <div class="form-cells-hd">可否使用公司资质</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  @click="getTrim(3)"
                  v-model="IsSeniorMsg"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
              <div class="item2-column">
                <div class="form-cells-hd">股份合作</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  @click="getTrim(4)"
                  v-model="IsStockCooperationMsg"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
              <div class="item2-column" v-if="PageId == 26 || PageId==25 || PageId==30 || PageId==27">
                  <div class="form-cells-hd">公司挂牌</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  @click="getTrim(5)"
                  v-model="IsCompanyListMsg"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
              <div class="item2-column" v-if="PageId == 31 || PageId==25 || PageId==30  || PageId==27">
                <div class="form-cells-hd">可否注册</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  @click="getTrim(7)"
                  v-model="IsRegAreaMsg"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
              <div class="item2-column" v-if="PageId!=30">
                <div class="form-cells-hd">对方公司挂牌</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  @click="getTrim(6)"
                  v-model="IsAllowOtherListMsg"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
          </div>
          <!--选项 end-->
           <!--地址-->
          <div class="form-cells-item" >
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
          <!--标签-->
          <div class="form-cells-item" v-if="PageId == 30 || PageId == 27 || PageId == 28 || PageId == 27">
              <div class="form-cells-hd">拼租设施/设备</div>
              <div class="form-cell-bd">
                <div class="btns-group">
                  <div class="btn" :class="{'cur':item.active}" v-for="(item,dindex) in Devicelist" :key="dindex" @click="addDeviceNum(dindex)">{{item.Name}}</div>
                </div>
              </div>
            </div>
        </div>
          
      </div>
      <!--按钮-->
      <div class="ftbox" @click="submitApply">
        <div class="btn">确认发布</div>
      </div>
    </div>
    <!--弹层-->
    <div class="mask" v-if="isShowMask" catchtouchmove="true" @click="cancle"></div>
    <div class="maskType boxSize" v-if="isShowMask" :class="showNoChange?'noParActive':''">
        <div class="flex">
              <span class="size" @click="cancle">取消</span>
              <span class="title">{{masktitle}}</span>
              <span class="color size" @click="subConfirm">确定</span>
        </div>
        <div v-if="showInput">
            <input type="text" placeholder="请输入设备要求" v-model="deviceTip" style="padding:0 30rpx;">
        </div>
        <scroll-view :scroll-y="true" style="height:480rpx;" :style="showNoChange?'height:200rpx':''" class="showItem" @scrolltolower="loadMore">
          <div v-for="(item,index) in list" :key="index">
              <p :class="{'itemactive':statu == index}" @click="chose(index)" style="margin-top:3rpx;">{{item.Name}}
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
//TypeId--58厂房发布  
//拼购--   设备拼购--pageid=26   物业拼购-pageid=25 else --没有公司理念
//寻找拼租  办公室拼租-pageid=30  设备寻找-pageid=31  --公司理念
//提供拼租  短租办公pageid=28  提供设备拼租-pageid=29   提供拼租 --pageid=27  --公司理念 --环境
import "@/style/style_fb.scss";
import { post,host,getCurrentPageUrlWithArgs} from "@/utils";
// import areaList from "@/utils/areaList";
import {pathToBase64} from "@/utils/image-tools";
export default {
  data() {
    return {
      currentDate: new Date().getTime(),
      minDate: new Date().getTime(),
      curPage: "",
      userId: "",
      token: "",
      TypeId:'',
      PageId:'',
      detailInfo:[],
      picLength:6,//上传图片的长度
      imgArr:[],//上传图片的路径
      isShowMask:false,//是否显示弹层
      showNoChange:false,//控制是否选择高度
      showArea:false,//显示区域
      showInput:false,//显示输入框
      showTrade:false,
      columns:[],//picker列表
      tradeList:{},//行业列表
      tradeListBox:[],//行业列表
      showDate:false,//显示时间
      list:[],//弹层列表
      masktitle:"",//弹层标题
      statu:0,//控制弹层item选中样式
      PropertyType:'', //物业/设备类型
      PropertySort:"", //物业/设备形式
      PropertyPrice:'', //物业单价/设备单价
      GladBuyAreaId:'', //区域code代码
      GladBuyArea:'', //意向购买区域\设备使用区域  格式，'1级区域,2级区域'
      GladBuyerTradeId:'',//意向行业/主营业务Id
      GladBuyerTrade:'', //意向行业/主营业务   格式，'1级行业,2级行业'
      RentTimeLimit:"",//租赁期限
      RentTimeLimitValue:"",//传参
      ContentDetail:"",//办公室环境描述
      CompanyCulture:'', //公司理念
      IsTrimMsg:'',
      IsTrim:'',//是否装修  0-否   1-是
      IsCompanyList:'',//本公司是否挂牌       1:是  0:否
      IsCompanyListMsg:'',
      IsRegArea:'', //是否可注册
      IsRegAreaMsg:'',
      IsAllowOtherList:'',//是否允许对方挂牌    1:是  0:否
      IsAllowOtherListMsg:'',
      IsSubPack:'',//业务是否分包        1:是  0:否
      IsSubPackMsg:'',
      IsSenior:'',//公司资质是否可使用   1:是  0:否
      IsSeniorMsg:'',
      IsStockCooperation:'',//股份合作未来是否考虑  1:是  0:否
      IsStockCooperationMsg:'',
      CompanyTrade:"",//公司行业
      companyTipFlag:false,//公司行业标识

      BuyBudget:'', //购买预算 
      PlanBuyArea:'', //计划购买面积
      PlanBuyDate:'', //计划购买日期--可租时间
      Title:"",//标题
      showDefaultCompany:false,//只有一个公司默认显示
      Company:"",//公司名称-
      CompanyId:"",//公司Id
      CompanyAddr:'',//对应标题地址
      CompanyDoorNum:'',//对应标题地址门牌号
      Synopsis:'',//简介
      SpecsType:"",//规格型号
      PlanBuyNum:"",//计划购买数量--活动人数
      NeedOfficeNum:"",//卡位需求（格式：3卡2室）
      ServiceName:"",//设施/设备 以英文逗号隔开
      DeviceRent:"",//价格最小
      DevicePrice:"",//价格最大
      AllArea:"",//总面积

      pageTitle:"",//页面标题
      subTitle:"",//副标题
      introduce:"",//简介标题
      introducePlaceholder:"",//简介的placeholder
      upImgTitle:"",//上传图片标题
      addrTitle:"",//地址标题
      addrPlaceholder:"",//地址的
      addDetailTitle:"",//补充说明的
      addDetailPlaceholder:"",//补
      addressList:[],//地区列表
      addressList2:{},
      isShowAddr:false,
      hasAddr:false,
      columns2:[],
      //拼租设施/设备写死的数据
      Devicelist:[
        {Id:1,Name:"网络/无线",active:true},{Id:2,Name:"打印机"},{Id:3,Name:"会议室"},{Id:4,Name:"前台"},{Id:5,Name:"独立卡座"},{Id:6,Name:"自定义+"},
      ],
      deviceTip:"",//添加自定义
      ShowTime:"",//展示时分秒
      mm:0//页面跳转的次数
     

    };
  },
  onLoad() {
    this.mm = 0
    this.showDefaultCompany = false
    this.setBarTitle();
    this.initData()
  },
  onShow(){
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.TypeId = this.$root.$mp.query.TypeId;
    this.PageId = this.$root.$mp.query.PageId;
    console.log("TypeId",this.TypeId);
    console.log("PageId",this.PageId);
    this.initData()
    // console.log(this.mm,"{{{{{{{{{{{{{{{{{{{{{")
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
    aaa(){
      this.isShowAddr = true;
      console.log("______________")
    },
     //获取公司行业
    getCompanyTrade(){
      this.companyTipFlag = true
      this.showTrade = true
    },

    addDeviceNum(e){
      if(this.Devicelist[e].Name=="自定义+"){
        this.isShowMask = true
        this.showNoChange = true
        this.showInput=true
        this.masktitle = '请输入自定义的内容'
      }else{
        if(this.Devicelist[e].active){
          this.$set(this.Devicelist[e],"active",false)
        }else{
          this.$set(this.Devicelist[e],"active",true)
        }
      }
    },
    onChangeAddr(event){  //选择的时候
      const { picker, value, index } = event.mp.detail;
      picker.setColumnValues(1, this.addressList2[value[0]]);
    },
    onConfirmAddr(event){
       const { index, value } = event.mp.detail;
       console.log(event)
       let str = '';
      // console.log(this.addressList[index[0]].Child[index[1]].Code);
      //  console.log(index);
      //  console.log(this.addressList[index[0]].Code);
       this.GladBuyArea = value.join(",");
       this.GladBuyAreaId = this.addressList[index[0]].Child[index[1]].Code
       this.$set(this.columns2[1],'values',this.addressList2[value[0]]);
       this.$set(this.columns2[1],'defaultIndex',index[1]);
       console.log(" this.GladBuyAreaId:" ,this.GladBuyAreaId)
       this.isShowAddr = false
    },
    initData(){
        // this.showDefaultCompany = false
        this.isShowMask =false
        this.showNoChange = false
        this.showArea =false
        this.showInput =false
        this.showTrade =  false
        this.showDate = false
        this.columns = []
        this.tradeList = {},//行业列表
        this.tradeListBox = [],//行业列表
        this.deviceTip = ''
        this.introduce = "公司简介"
        this.introducePlaceholder = "请填写公司详细简介"
        this.addrTitle = "公司地址"
        this.addrPlaceholder = "办公室大楼 如：如京基大厦"
        this.addDetailTitle = "门牌号"
        this.addDetailPlaceholder = "门牌号/楼号等 例：3楼418室"
        if(this.PageId==26){
          this.pageTitle = '拼购设备表单'
          this.subTitle = '(设备/售卖机)'
          this.upImgTitle = "设备照片上传"
        }
        if(this.PageId==25){
          this.pageTitle = '拼购物业表单'
          this.subTitle = '(物业)'
          this.upImgTitle = "物业照片上传"
        }
        if(this.PageId==30){
          this.pageTitle = '办公室寻找拼租表单'
          this.subTitle = '(办公室/商铺/工厂/培训机构/其他)'
          this.upImgTitle = "办公室照片"
        }
        if(this.PageId==31){
          this.pageTitle = '设备寻找拼租表单'
          this.subTitle = '(设备/售卖机)'
          this.upImgTitle = "设备照片上传"
        }
        if(this.PageId==29){
          this.pageTitle = '提供设备拼租表单'
          this.subTitle = '(设备/售卖机)'
          this.upImgTitle = "设备照片上传"
        }
        if(this.PageId==28){
          this.pageTitle = '短租办公表单'
          this.subTitle = '(办公室/商铺/工厂/培训机构/其他)'
          this.upImgTitle = "相关照片上传"
        }
        if(this.PageId==27){
          this.pageTitle = '提供拼租表单'
          this.subTitle = '(办公室/商铺/工厂/培训机构/其他)'
          this.upImgTitle = "相关照片上传"
        }
        
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
        this.PlanBuyDate = `${year}-${month}-${dd}`;
        this.showDate = false
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
    //获取短租办公形式
    getShortRent(){
      this.isShowMask = true
      this.list = this.detailInfo.ShortRent
      this.masktitle = '请选择办公形式'
    },
    //租赁期限
    getRentTimeLimit(){
      this.isShowMask = true
      let info = {}
      this.detailInfo.RentTimeLimit.Value.map(item=>{
          info={
            Name:item.Text,
            Value:item.Value
          }
          this.list.push(info)
      })
      
      this.masktitle = '请选择期限'
    },

    //获取物业形式-设备形式-办公形式
    getProperty(){
      console.log(this.detailInfo,"detailInfo+++++++++++")
      this.isShowMask = true
      this.list = this.detailInfo.Device
      if(this.PageId == 25){
        this.masktitle = '请选择物业形式'
      }else if(this.PageId == 26 || this.PageId == 31 || this.PageId == 29){
        this.masktitle = '请选择设备形式'
      }else if(this.PageId == 28){
          this.masktitle = '请选择办公形式'
      }
      
    },
    //获取设备类型
    getPropertyType(){
      this.isShowMask = true  
      let info = {}
      if(this.PageId == 25){
        this.masktitle = '请选择物业类型'
        this.detailInfo.PropertyType.Value.map(item=>{
              info={
                Name:item
              }
              this.list.push(info)
          })
      }else{
          this.detailInfo.DeviceType.Value.map(item=>{
              info={
                Name:item
              }
              this.list.push(info)
          })
          this.masktitle = '请选择设备类型'
      }
      
    },
    //选择弹层item
    chose(e){
        this.statu = e
    },
    //是否装修
    getTrim(n){
      //1-是否装修 2-业务分包 3-是否可使用公司资质 4-股份合作 5-公司挂牌 6-对方公司挂牌  7-可否注册
      this.isShowMask = true
      this.showNoChange = true
      console.log(this.showNoChange)
      if(n==1){
        this.list = [{Id:1,Name:'需要装修'},{Id:0,Name:'不需要装修'}]
        this.masktitle = '请选择是否装修'
      }
      if(n==2){
        this.list = [{Id:1,Name:'可业务分包'},{Id:0,Name:'无业务分包'}]
        this.masktitle = '请选择业务分包'
      }
      if(n==3){
        this.list = [{Id:1,Name:'公司资质是可以使用'},{Id:0,Name:'公司资质是不可使用'}]
        this.masktitle = '请选择公司资质'
      }
      if(n==4){
        this.list = [{Id:1,Name:'考虑未来股份合作'},{Id:0,Name:'不考虑未来股份合作'}]
        this.masktitle = '请选择股份合作'
      }
      if(n==5){
        this.list = [{Id:1,Name:'本公司已挂牌'},{Id:0,Name:'本公司未挂牌'}]
        this.masktitle = '请选择公司挂牌'
      }
      if(n==6){
        this.list = [{Id:1,Name:'允许对方挂牌'},{Id:0,Name:'不允许对方挂牌'}]
        this.masktitle = '请选择对方公司挂牌'
      }
      if(n==7){
        this.list = [{Id:1,Name:'可以注册'},{Id:0,Name:'不允许注册'}]
        this.masktitle = '请选择可否注册'
      }


    },
    //确定选择
    subConfirm(){
      for(let i in this.list){
          if(i*1 == this.statu){
              if(this.masktitle =='请选择物业形式' || this.masktitle =='请选择设备形式' || this.masktitle =='请选择办公形式'){
                  this.PropertySort = this.list[i].Name;
              }
              if(this.masktitle =='请选择设备类型' || this.masktitle =='请选择物业类型' ){
                  this.PropertyType = this.list[i].Name;
              }
              if(this.masktitle =='请选择期限' ){
                console.log("this.list:",this.list)
                  this.RentTimeLimit = this.list[i].Name,
                  this.RentTimeLimitValue = this.list[i].Value
              }
              if(this.masktitle =='请选择是否装修'){
                this.IsTrim = this.list[i].Id;
                if(this.list[i].Id==0){
                  this.IsTrimMsg = '否';
                }else{
                   this.IsTrimMsg = '是';
                }
              }
              if(this.masktitle =='请选择业务分包'){
                this.IsSubPack = this.list[i].Id;
                if(this.list[i].Id==0){
                  this.IsSubPackMsg = '否';
                }else{
                   this.IsSubPackMsg = '是';
                }
              }
              if(this.masktitle =='请选择公司资质'){
                this.IsSenior = this.list[i].Id;
                if(this.list[i].Id==0){
                  this.IsSeniorMsg = '否';
                }else{
                   this.IsSeniorMsg = '是';
                }
              }
              if(this.masktitle =='请选择股份合作'){
                this.IsStockCooperation = this.list[i].Id;
                if(this.list[i].Id==0){
                  this.IsStockCooperationMsg = '否';
                }else{
                   this.IsStockCooperationMsg = '是';
                }
              }
              if(this.masktitle =='请选择公司挂牌'){
                this.IsCompanyList = this.list[i].Id;
                if(this.list[i].Id==0){
                  this.IsCompanyListMsg = '否';
                }else{
                   this.IsCompanyListMsg = '是';
                }
              }
              if(this.masktitle =='请选择对方公司挂牌'){
                this.IsAllowOtherList = this.list[i].Id;
                if(this.list[i].Id==0){
                  this.IsAllowOtherListMsg = '否';
                }else{
                   this.IsAllowOtherListMsg = '是';
                }
              }
              if(this.masktitle =='请选择可否注册'){
                this.IsRegArea = this.list[i].Id;
                console.log("IsRegArea:",this.IsRegArea)
                if(this.list[i].Id==0){
                  this.IsRegAreaMsg = '否';
                }else{
                   this.IsRegAreaMsg = '是';
                }
              }
              if(this.masktitle =='请选择公司'){
                this.Company = this.list[i].Name
                this.CompanyId = this.list[i].Id
              }
              
          }
      }
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
      this.showInput = false
      // this.showDefaultCompany = false
      this.statu = 0
      this.list = []
    },
    //取消选择
    cancle(){
      this.isShowMask = false
      this.showNoChange = false
      this.showInput = false
      // this.showDefaultCompany = false
      this.list = []
      this.statu = 0
    },
    //获取默认数据
    GetPublishItems(){
      let that = this;
      post('Goods/GetPublishItems',{
          UserId:that.userId,
          Token:that.token,
          TypeId:that.TypeId
      },that.curPage).then(res=>{
        console.log(res,"GetPublishItems")
        if(res.code==0){
            //已经认证了 获取信息 发布信息
          this.columns2 = []
          this.columns = []
          that.detailInfo = res.data;
          if(res.data.arealist.length>0){
            // {
            // this.addressList = res.data.arealist
            //  this.addressList.forEach(item => {
            //     let obj = {};
            //     let arr =[];
            //     item.Child.forEach(item2=>{
            //       arr.push(item2.Name)
            //     });
            //     obj[item.Name] = arr;
            //     this.addressList2 = Object.assign(this.addressList2,obj);
            //   })
            //   console.log(this.addressList2,"this.addressList2////")
            //   this.columns2.push(
            //     {
            //     values: Object.keys(this.addressList2),
            //     className: "column1"
            //     },
            //     {
            //       values: this.addressList2[Object.keys(this.addressList2)[0]],
            //       className: 'column2',
            //       defaultIndex: 0
            //     },
            //   )
            //   this.hasAddr = true,
            //   console.log(this.hasAddr)
            // }
            console.log(this.addressList )
            {
              this.addressList = res.data.arealist
              this.addressList.forEach(item => {
                let obj = {};
                let arr =[];
                let arr2 = []
                item.Child.forEach(item2=>{
                  arr.push(item2.Name)
                  // console.log(arr)
                  arr2 = []
                  item2.Child.forEach(item3=>{
                    arr.map(key=>{
                      console.log(key,"key")
                      if(key == item2.Name){
                        arr2.push(item3.Name)
                      }
                      // Object.keys(arr) = arr2
                      // arr[item2.Name] = arr2
                      arr[key] = arr2
                    })
                  })
                  
                });
                obj[item.Name] = arr;
                this.addressList2 = Object.assign(this.addressList2,obj);

              })
              let _Add = this.addressList2[Object.keys(this.addressList2)[0]]
              let _list = this.addressList2
              console.log(_list.splice(0,10))
              console.log(_list)
              // console.log(this.addressList2)
              console.log(_list[Object.keys(_list)[0]][Object.keys(_list[Object.keys(this.addressList2)[0]])[0]],"this.addressList2////")
              console.log([Object.values(_Add)],"=========")
              console.log([Object.keys(_list)],"___________")

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
                  values:this.addressList2[Object.keys(this.addressList2)[0]],
                  className: 'column3',
                  defaultIndex: 0
                },
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
            if(res.code==6 && this.mm<1){
              wx.showToast({
                title:res.msg,
                duration:1500,
                icon:'none',
                success:()=>{
                  setTimeout(() => {
                    wx.navigateTo({
                      url: "/pages/mine2/myVertical/main?url=rentDevice"
                    });
                    this.mm ++
                  }, 1500);
                }
              })
              
          }else if(res.code==5 && this.mm<1){
            wx.showToast({
              title:res.msg,
              duration:1500,
              icon:'none',
              success:()=>{
                setTimeout(() => {
                  wx.navigateTo({
                    url: "/pages/mine2/verticalCompany/main?url=rentDevice"
                  });
                  this.mm ++
                }, 1500);
              }
            
            })
            
          }
        }
      })
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
               })
            },
          });
      }
    },
    async base27Img(arr){
      let base27Arr = []
      for(let i = 0;i < arr.length;i++){
        const res = await pathToBase64(arr[i]);
        base27Arr.push({
          PicUrl:res
        })
      }
      return base27Arr
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
      if(this.PageId == 25 ||　this.PageId ==26 || this.PageId ==31 || this.PageId ==29){
          if (this.PropertySort=='') {
            if(this.PageId == 25){
                this.toastTip("请选择物业形式!")
            }else if(this.PageId == 26 || this.PageId ==31 || this.PageId ==29){
                this.toastTip("请选择设备形式!")
            }
            return false;
          }
      }
      if(this.PageId == 25 ||　this.PageId ==26){
          if (this.BuyBudget == '') {
            this.toastTip("请输入购买预算!")
            return false;
          }
      }
      if(this.PageId == 25 ||　this.PageId ==26 || this.PageId ==28 || this.PageId == 27|| this.PageId == 31|| this.PageId == 29){ 
          if (this.IsAllowOtherListMsg == '') {
            this.toastTip("请选择是否允许对方挂牌!")
            return false;
          }
      }
      if(this.PageId == 25 ||　this.PageId ==26 || this.PageId == 31 || this.PageId == 29 || this.PageId == 28 || this.PageId == 27){
        if (this.PropertyPrice == '') {
          this.toastTip("请输入对应金额!")
          return false;
        }
        if (this.CompanyDoorNum == '') {
          this.toastTip("请输入门牌号!")
          return false;
        }
        if (this.CompanyAddr == '') {
          this.toastTip("请输入地址!")
          return false;
        }
      }
      if(this.PageId == 25 ||　this.PageId ==26 || this.PageId == 30 || this.PageId == 27 || this.PageId == 29 || this.PageId == 28){
        if (this.PlanBuyDate =='') {
          this.toastTip("请选择时间!")
          return false;
        }
      }
      if(this.PageId == 25 ||　this.PageId ==26 || this.PageId == 31 || this.PageId == 30 || this.PageId == 29 || this.PageId == 28 || this.PageId == 27){
        if (this.GladBuyAreaId=='') {
          this.toastTip("请选择区域!")
          return false;
        }
      }
      if (this.CompanyId == '') {
        this.toastTip("请选择公司!")
        return false;
      }
      if (this.IsStockCooperationMsg == '') {
        this.toastTip("请选择是否合作!")
        return false;
      }
      if(this.PageId!=29){
        if (this.IsSeniorMsg == '') {
            this.toastTip("请选择是否可用公司资质!")
            return false;
        }
        if (this.IsSubPackMsg == '') {
          this.toastTip("请选择是否业务分包!")
          return false;
        }
      }
      if(this.PageId==30 || this.PageId==26 || this.PageId==25 || this.PageId==27){
        if (this.IsCompanyListMsg == '') {
          this.toastTip("请选择本公司是否挂牌!")
          return false;
        }
      }
      if (this.Synopsis == '') {
        this.toastTip("请输入简介!")
        return false;
      }
     
      if (this.imgArr.length <= 0) {
        this.toastTip("请上传图片!")
        return false;
      }
      if(this.PageId == 25 ||　this.PageId == 30 || this.PageId == 28 || this.PageId == 27){
        if (this.PlanBuyArea == '') {
          this.toastTip("请输入面积!")
          return false;
        }
      }
      if(this.PageId == 25 ||　this.PageId == 30){
        if (this.IsTrimMsg == '') {
          this.toastTip("请选择是否装修!")
          return false;
        }
      }

      if(this.PageId == 25 ||　this.PageId == 30 || this.PageId == 31 || this.PageId == 29 || this.PageId == 28 || this.PageId == 27 || this.PageId == 26 || this.PageId == 30){
        if (this.GladBuyerTrade == '') {
          this.toastTip("请选择行业!")
          return false;
        }
      }
      //办公室寻找拼租独有
      if(this.PageId == 30 || this.PageId == 28 || this.PageId == 27){
        if (this.NeedOfficeNum == '') {
          this.toastTip("请输入卡位要求!")
          return false;
        }
        if(this.ServiceName == ''){
            this.toastTip("请选择设备要求!")
            return false;
        }
      }
      if(this.PageId==25 ||this.PageId==27 ||this.PageId==30 || this.PageId==31){
          if(this.IsRegAreaMsg == ''){
            this.toastTip("请选择公司是否注册!")
            return false;
          }
      }
      if(this.PageId == 26){
          if(this.PropertyType === ''){
            this.toastTip("请选择公司物业类型!")
            return false;
          }
      }
      if(this.PageId == 30 || this.PageId == 31){
          if(this.DeviceRent ==''){
            this.toastTip("请输入最低价格!")
            return false;
          }
          if(this.DevicePrice == ''){
            this.toastTip("请输入最高价格!")
            return false;
          }
          if(this.DeviceRent>=this.DevicePrice){
            this.toastTip("最低价不能高于最高价!")
            return false;
          }
      }
      //拼购设备特有
      if(this.PageId == 26 || this.PageId == 29){
        if (this.PlanBuyNum == '') {
          this.toastTip("请输入数量!")
          return false;
        }
      }
      if(this.PageId == 26){
        if (this.PropertyType == '') {
          this.toastTip("请选择设备类型!")
          return false;
        }
      }
      if(this.PageId == 26 || this.PageId == 31 || this.PageId == 29){
        if (this.SpecsType === '') {
          this.toastTip("请输入规格型号!")
          return false;
        }
      }
      if(this.PageId == 31 || this.PageId == 29 || this.PageId == 28 || this.PageId == 30){
        if (this.RentTimeLimit == '') {
          this.toastTip("请选择期限!")
          return false;
        }
      }
      if(this.PageId == 28){
          if (this.PropertySort == '') {
            this.toastTip("请选择办公形式!")
            return false;
          }
      }
      if(this.PageId == 28 || this.PageId == 27){
          if (this.AllArea == '') {
            this.toastTip("请输入总面积!")
            return false;
          }
      }
      if(this.PageId == 29 ||  this.PageId == 28 || this.PageId == 27){
          if (this.ContentDetail == '') {
            this.toastTip("请描述办公室环境!")   
            return false;
          }
      }
      if(this.PageId == 30 ||this.PageId == 29 || this.PageId == 28 || this.PageId == 27){
        if (this.CompanyCulture == '') {
            this.toastTip("请描述公司理念!")
            return false;
          }
      }
      if(this.PageId == 30){
          if (this.CompanyDoorNum == '') {
          this.toastTip("请输入门牌号!")
          return false;  
          }
          if (this.CompanyAddr == '') {
            this.toastTip("请输入地址!")
            return false;
          }
      }
      if(this.PageId == 30 || this.PageId == 28 || this.PageId == 27){
          if (this.CompanyTrade == '') {
            this.toastTip("请选择公司行业!")
            return false;
          }
      }
      
      return true;
    },
    //提交发布
    async submitApply(){
      console.log(this.CompanyId,this.Company,"++++++")
      const that = this
      let PicList = await that.base27Img(that.imgArr);
      if(that.PageId == 30 || that.PageId == 27 || that.PageId == 28){
          this.ServiceName = ''
          for(let i in that.Devicelist){
            if(that.Devicelist[i].active){
                that.ServiceName+=that.Devicelist[i].Name+","
            }
          }
        console.log("that.ServiceName:",that.ServiceName)
        }
      let GoodsInfo={}
      if(that.PageId == 25){
          GoodsInfo = {
          Title:that.Title,
          CompanyId:that.CompanyId,
          Company:that.Company,
          CompanyAddr:that.CompanyAddr,
          CompanyDoorNum:that.CompanyDoorNum,
          Synopsis:that.Synopsis,
          GladBuyerTradeId:that.GladBuyerTradeId,
          GladBuyerTrade:that.GladBuyerTrade,
          PropertySort:that.PropertySort,
          PropertyPrice:that.PropertyPrice,
          PlanBuyArea:that.PlanBuyArea,
          PlanBuyDate:that.PlanBuyDate,
          GladBuyAreaId:that.GladBuyAreaId,
          GladBuyArea:that.GladBuyArea,
          BuyBudget:that.BuyBudget,
          IsTrim:that.IsTrim,
          IsCompanyList:that.IsCompanyList,
          IsAllowOtherList:that.IsAllowOtherList,
          IsSenior:that.IsSenior,
          IsSubPack:that.IsSubPack,
          IsStockCooperation:that.IsStockCooperation,
          IsRegArea:that.IsRegArea,
          PropertyType:that.PropertyType 
        }
      }else if(that.PageId == 26){
        GoodsInfo = {
          Title:that.Title,
          CompanyId:that.CompanyId,
          Company:that.Company,
          CompanyAddr:that.CompanyAddr,
          CompanyDoorNum:that.CompanyDoorNum,
          Synopsis:that.Synopsis,
          GladBuyerTradeId:that.GladBuyerTradeId,
          GladBuyerTrade:that.GladBuyerTrade,
          GladBuyAreaId:that.GladBuyAreaId,
          GladBuyArea:that.GladBuyArea,
          PropertySort:that.PropertySort,
          PropertyPrice:that.PropertyPrice,
          PlanBuyDate:that.PlanBuyDate,
          BuyBudget:that.BuyBudget,
          IsCompanyList:that.IsCompanyList,
          IsAllowOtherList:that.IsAllowOtherList,
          IsSenior:that.IsSenior,
          IsSubPack:that.IsSubPack,
          IsStockCooperation:that.IsStockCooperation,
          PropertyType:that.PropertyType,
          SpecsType:that.SpecsType,
          PlanBuyNum:that.PlanBuyNum
        }
      }else if(that.PageId == 30){
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
            RentTimeLimit:that.RentTimeLimitValue,
            PlanBuyDate:that.PlanBuyDate,
            PlanBuyArea:that.PlanBuyArea,
            GladBuyAreaId:that.GladBuyAreaId,
            GladBuyArea:that.GladBuyArea,
            IsTrim:that.IsTrim,
            IsCompanyList:that.IsCompanyList,
            IsAllowOtherList:that.IsAllowOtherList,
            IsSenior:that.IsSenior,
            IsSubPack:that.IsSubPack,
            IsStockCooperation:that.IsStockCooperation,
            IsRegArea:that.IsRegArea,
            ServiceName:that.ServiceName,
            NeedOfficeNum:that.NeedOfficeNum,
            DeviceRent:that.DeviceRent,
            DevicePrice:that.DevicePrice,
            CompanyCulture:that.CompanyCulture
        }
      }else if(that.PageId == 31){
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
            PropertyPrice:that.PropertyPrice,
            PlanBuyDate:that.PlanBuyDate,
            PropertySort:that.PropertySort,
            RentTimeLimit:that.RentTimeLimitValue,
            SpecsType:that.SpecsType,
            IsSenior:that.IsSenior,
            IsSubPack:that.IsSubPack,
            IsStockCooperation:that.IsStockCooperation,
            IsRegArea:that.IsRegArea,
            DeviceRent:that.DeviceRent,
            DevicePrice:that.DevicePrice
        }
      }else if(that.PageId == 29){
          GoodsInfo = {
            Title:that.Title,
            CompanyId:that.CompanyId,
            Company:that.Company,
            CompanyAddr:that.CompanyAddr,
            CompanyDoorNum:that.CompanyDoorNum,
            Synopsis:that.Synopsis,
            GladBuyerTradeId:that.GladBuyerTradeId,
            GladBuyerTrade:that.GladBuyerTrade,
            PropertySort:that.PropertySort,
            SpecsType:that.SpecsType,
            PlanBuyNum:that.PlanBuyNum,
            PropertyPrice:that.PropertyPrice,
            PlanBuyDate:that.PlanBuyDate,
            RentTimeLimit:that.RentTimeLimitValue,
            GladBuyArea:that.GladBuyArea,
            GladBuyAreaId:that.GladBuyAreaId,
            IsStockCooperation:that.IsStockCooperation,
            ContentDetail:that.ContentDetail,
            CompanyCulture:that.CompanyCulture
        }
      }else if(that.PageId == 28){
          GoodsInfo = {
            Title:that.Title,
            CompanyId:that.CompanyId,
            Company:that.Company,
            CompanyTradeId:that.CompanyTradeId,
            CompanyTrade:that.CompanyTrade,
            CompanyAddr:that.CompanyAddr,
            CompanyDoorNum:that.CompanyDoorNum,
            Synopsis:that.Synopsis,
            GladBuyerTradeId:that.GladBuyerTradeId,
            GladBuyerTrade:that.GladBuyerTrade,
            GladBuyArea:that.GladBuyArea,
            GladBuyAreaId:that.GladBuyAreaId,
            PropertySort:that.PropertySort,
            PropertyPrice:that.PropertyPrice,
            AllArea:that.AllArea,
            PlanBuyArea:that.PlanBuyArea,
            NeedOfficeNum:that.NeedOfficeNum,
            PlanBuyDate:that.PlanBuyDate,
            RentTimeLimit:that.RentTimeLimitValue,
            IsAllowOtherList:that.IsAllowOtherList,
            IsSenior:that.IsSenior,
            IsSubPack:that.IsSubPack,
            IsStockCooperation:that.IsStockCooperation,
            ServiceName:that.ServiceName,
            CompanyCulture:that.CompanyCulture,
            ContentDetail:that.ContentDetail 
        }
      }else if(that.PageId == 27){
          GoodsInfo = {
            Title:that.Title,
            CompanyId:that.CompanyId,
            Company:that.Company,
            CompanyAddr:that.CompanyAddr,
            CompanyDoorNum:that.CompanyDoorNum,
            CompanyTradeId:that.CompanyTradeId,
            CompanyTrade:that.CompanyTrade,
            PlanBuyDate:that.PlanBuyDate,
            GladBuyArea:that.GladBuyArea,
            GladBuyAreaId:that.GladBuyAreaId,
            Synopsis:that.Synopsis,
            GladBuyerTradeId:that.GladBuyerTradeId,
            GladBuyerTrade:that.GladBuyerTrade,
            CompanyCulture:that.CompanyCulture,
            PropertyPrice:that.PropertyPrice,
            AllArea:that.AllArea,
            PlanBuyArea:that.PlanBuyArea,
            IsCompanyList:that.IsCompanyList,
            NeedOfficeNum:that.NeedOfficeNum,
            IsSenior:that.IsSenior,
            IsSubPack:that.IsSubPack,
            IsStockCooperation:that.IsStockCooperation,
            IsRegArea:that.IsRegArea,
            IsAllowOtherList:that.IsAllowOtherList,
            ServiceName:that.ServiceName,
            ContentDetail:that.ContentDetail 
        }
      }
      if(that.valOther()){
        that.submitAll(JSON.stringify(PicList),GoodsInfo)
      }
    },
    submitAll(PicList,GoodsInfo){
      post('Goods/RentSharing',{
          UserId:this.userId,
          Token:this.token,
          TypeId:this.TypeId,
          PicList:PicList,
          GoodsInfo:GoodsInfo

      },this.curPage).then(res=>{
        console.log("Goods/RentSharing",res)
        
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
      this.imgArr=[]
      this.Title = ''
      this.Company = ''
      this.CompanyAddr = ''
      this.CompanyDoorNum = ''
      this.Synopsis = ''
      this.GladBuyerTrade = ''
      this.PropertyType = ''
      this.PropertySort = ''
      this.PropertyPrice = ''
      this.PlanBuyArea = ''
      this.PlanBuyDate = ''
      this.GladBuyArea = ''
      this.BuyBudget = ''
      this.IsTrim = ''
      this.IsTrimMsg = ''
      this.IsRegArea = ''
      this.IsRegAreaMsg = ''
      this.IsCompanyList = ''
      this.IsCompanyListMsg = ''
      this.IsAllowOtherList = ''
      this.IsAllowOtherListMsg = ''
      this.IsSenior = ''
      this.IsSeniorMsg = ''
      this.IsSubPack = ''
      this.IsSubPackMsg = ''
      this.IsStockCooperation = ''
      this.IsStockCooperationMsg = ''
      this.SpecsType = ''
      this.PlanBuyNum = ''
      this.deviceTip = ''
      this.DevicePrice = ''
      this.DeviceRent = ''
      this.ServiceName = ''
      this.AllArea = ''
      this.CompanyCulture = ''
      this.NeedOfficeNum = ''
      this.RentTimeLimit = ''
      this.ContentDetail = ''
      this.columns2 = []
      this.columns = []
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
            color: #ff2925
        }
        .size {
            font-size: 26rpx;
        }
        .title {
            font-weight: bold;
        }
    }
    .itemactive {
        background: #ff2925;
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
.item-columnbox{
    flex-wrap: wrap;
  .item2-column {
        width: 50%;
        box-sizing:border-box;
        text-align: center;
        position:relative;
        padding:20rpx 0;
        border-bottom:1rpx solid #eee;
        &::after {
            content: "";
            height: 100rpx;
            width: 1px;
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -50rpx;
            -webkit-transform: scaleX(0.5);
            -ms-transform: scaleX(0.5);
            transform: scaleX(0.5);
            background-color: #EEE;
        }
  } 
  .item2-column:nth-child(2n)::after {
        display: none;
       
    }
}

</style>