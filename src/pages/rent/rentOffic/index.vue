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
            <div :class="{showDefaultCompany:'form-cells-navigate navigate-bottom'}">
              <div class="form-cells-hd">公司名称</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  placeholder="请输入公司名称"
                  @tap="showDefaultCompany && getCompany"
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
                            @tap="showDate=true"
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
                  <div class="form-cells-hd">活动价格</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PropertyPrice"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">活动名称</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="Founder"
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
                  <div class="form-cells-hd">计划投资</div>
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
                  <div class="form-cells-hd">成立日期</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请选择"
                    disabled
                    @tap="showDate=true"
                    v-model="PlanBuyDate"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">机构名称</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="Founder"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">机构面积</div>
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
          </div>
          <div v-if="PageId==34">
               <div class="form-cells-item form-cells-item2">
                  <div class="item2-column">
                  <div class="form-cells-hd">圈子名称</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="Founder"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">成立日期</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    disabled
                    @tap="showDate=true"
                    v-model="PlanBuyDate"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">圈子属性</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="RingType"
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
                  <div class="form-cells-hd">计划投资</div>
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
                    placeholder="请输入"
                    v-model="RingRate"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <div v-if="PageId==42">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">面积</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="PropertyPrice"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">厅室</div>
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
                  <div class="form-cells-hd">朝向</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    @tap="showDate=true"
                    v-model="PlanBuyDate"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">楼层</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="AgeLevel"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">车位</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="SexRatio"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">电梯</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="EducationLvl"
                    @tap="showEducation"
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
                    v-model="GladBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">租金包含费用</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="Founder"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">月租金</div>
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
                  <div class="form-cells-hd">付款方式</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="Founder"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">小区</div>
                  <input
                    class="ipt"
                    type="text"
                    placeholder="请输入"
                    v-model="GladBuyArea"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <!--简介-->
          <div class="form-cells-item">
            <div class="">
              <div class="form-cells-hd">{{introduce}}</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  :placeholder="introducePlaceholder"
                  v-model="Synopsis"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <!--公司理念-->
          <!-- <div class="form-cells-item" v-if="PageId==42">
            <div class="">
              <div class="form-cells-hd">{{infoMore}}</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  :placeholder="infoMorePlaceHolder"
                  v-model="AbilityTags"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div> -->
          <!--办公室描述-->
          <!-- <div class="form-cells-item" v-if="PageId==42">
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
          </div> -->
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
          <!--地址-->
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
          <!-- <div class="form-cells-item" v-if="PageId==42">
            <div class="form-cells-hd">房屋配置</div>
            <div class="form-cell-bd">
              <div class="btns-group">
                <div class="btn" :class="{'cur':item.active}" v-for="(item,dindex) in Devicelist" :key="dindex" @tap="addDeviceNum(dindex)">{{item.Name}}</div>
              </div>
            </div>
          </div> -->
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
                    disabled
                    placeholder="请选择"
                    v-model="item.Degree"
                    @tap="touchEducation(pindex)"
                    placeholder-style="color:#b5b5b5;"
                  >
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
                    placeholder="请输入"
                     v-model="item.JobType"
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
              <div class="form-cells-item" v-if="PageId==32 || PageId==33">
                <div class="">
                  <div class="form-cells-hd">合伙待遇</div>
                  <div class="form-cell-bd">
                    <input
                      class="ipt"
                      type="text"
                      placeholder="请输入待遇"
                      v-model="item.Treatment"
                      placeholder-style="color:#b5b5b5;"
                    >
                  </div>
                </div>
              </div>
              <div class="addDetail bg_fff" v-if="PartnerList.length>1 && pindex !==PartnerList.length-1">
                <div class="btn btn-add" @click="delOrder(pindex)">
                  删除职位
                </div>
              </div>
              
              <!--职位弹层-->
              <div class="mask" v-if="item.ShowWork"  @tap="cancle2(pindex)"></div>
              <div class="maskType boxSize" v-if="item.ShowWork" style="left:0">
                  <div class="flex">
                      <span class="size" @tap="cancle2(pindex)">取消</span>
                      <span class="title">{{masktitle2}}</span>
                      <span class="color size" @tap="subConfirm2(pindex)">确定</span>
                  </div>
                  <scroll-view :scroll-y="true" style="height:480rpx;"  class="showItem">
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
      <div v-if="showInput" style="border:1px solid blue">
          <input type="text" placeholder="请输入设备要求" v-model="deviceTip" style="padding:0 30rpx;border:1px solid red">
      </div>
      <scroll-view :scroll-y="true" style="height:480rpx;" :style="showNoChange?'height:200rpx':''" class="showItem" @scrolltolower="loadMore" v-else>
        <div v-for="(item,index) in list" :key="index">
            <p :class="{'itemactive':statu == index}" @tap="chose(index)" style="margin-top:3rpx;">{{item.Name}}
            </p>
        </div>
      </scroll-view>
    </div> 
    <!--时间插件-->
    <van-action-sheet :show="showDate" @close="showDate=false" @select="showDate=false">
        <van-datetime-picker
        type="date"
        :value="currentDate"
        @confirm="onInput($event)"
        @cancel="showDate=false"
        :min-date="minDate"
        title="请选择时间"
        style="z-index:888!important"
        />
    </van-action-sheet> 
    <!--行业插件--> 
    <van-popup :show="showTrade" position="bottom" :overlay="true" @close="showTrade = false">
        <van-picker  show-toolbar title="请选择行业" @confirm="onConfirm"
          @cancel="showTrade = false" :columns="columns" @change="onChange($event)"/>
    </van-popup>
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
        //商铺出租 pageid=39  商铺转让PAgeid=40
import "@/style/style_fb.scss";
import { post,host,getCurrentPageUrlWithArgs} from "@/utils";
// import areaList from "@/utils/areaList";
import {pathToBase64} from "@/utils/image-tools";
export default {
  data() {
    return {
      currentDate: new Date().getTime(),
      minDate: new Date().getTime(),
      hourses:[],
      minutes:[],
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
      PartnerList:[ ],
      showTouchEducation:false,//组件要求学历标识
      
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
      AbilityTags:"",//亮点数据
      RentTime:"",//接听时间
      RentTimeBox:"",//临时接时间的


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
        {Id:1,Name:"宽带",active:false},{Id:2,Name:"床"},{Id:3,Name:"衣柜"},{Id:4,Name:"沙发"},{Id:5,Name:"停车位"},{Id:6,Name:"自定义+"},
      ],
      deviceTip:"",//添加自定义
      educationList:[ 
        {Id:1,Name:"小学",active:true},{Id:2,Name:"中学"},{Id:3,Name:"高中"},{Id:4,Name:"中专"},{Id:5,Name:"大专"},{Id:6,Name:"本科"},{Id:7,Name:"硕士"},{Id:8,Name:"MBA"},
      ],
      ShowTime:false,//

    };
    
  },
  onLoad() {
    this.setBarTitle();
  },
  onShow(){
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
    // this.PageId = this.$root.$mp.query.PageId
    console.log("TypeId",this.TypeId)
    console.log("PageId",this.PageId)
    this.GetPublishItems()
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
    getEndTime(){
      this.showDate = true
      this.timeFlag = true
    },
    addDeviceNum(e){
      if(this.Devicelist[e].Name=="自定义+"){
        this.isShowMask = true
        this.showNoChange = true
        this.showInput=true
        console.log(this.showInput,"showInput")
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
        this.addDetailTitle = "门牌号"
        this.addDetailPlaceholder = "门牌号/楼号等 例：3楼418室"
        if(this.PageId==36 ||　this.PageId==35){
          this.introduce = "公司简介"
          this.introducePlaceholder = "请填写公司详细简介"
          this.upImgTitle = "请上传活动场地照片"
          this.addrTitle = "公司地址"
          this.addrPlaceholder = "办公大楼名称 如：如京基大厦"
        }
        if(this.PageId==36){
          this.pageTitle = '拼场地表单'
          this.subTitle = '(行业交流会/推广会/发布会/其他活动)'
          
        }
        if(this.PageId==35){
          this.pageTitle = '拼活动表单'
          this.subTitle = '(旅游/拓展/生日会/联谊会/其他活动)'
        }
        if(this.PageId==43){
          this.pageTitle = '组件机构表单'
          this.subTitle = '(产业园/商会/协会/研究所/实验室/慈善会/其他)'
          this.introduce = "机构简介"
          this.introducePlaceholder = "请填写机构详细简介"
          this.upImgTitle = "请上传相关机构照片"
          this.addrTitle = "地理位置"
          this.addrPlaceholder = "位置名称 如：如京基大厦"
        }
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
        if(this.PageId==32){
          this.pageTitle = '组件公司表单'
          this.subTitle = '(将根据您的要求推荐优质候选人)'
          this.introduce = "企业简介"
          this.introducePlaceholder = "请填写企业详细简介"
          this.upImgTitle = "请上传公司照片"
          this.addrTitle = "公司地址"
          this.addrPlaceholder = "办公楼名称 如：如京基大厦"
        }
        if(this.PageId==33){
          this.pageTitle = '组件团队表单'
          this.subTitle = '(将根据您的要求推荐优质候选人)'
          this.introduce = "团队简介"
          this.introducePlaceholder = "请填写团队详细简介"
          this.upImgTitle = "请上传公司照片"
          this.addrTitle = "公司地址"
          this.addrPlaceholder = "办公楼名称 如：如京基大厦"
        }
        if(this.PageId==34){
          this.pageTitle = '组件圈子表单'
          this.subTitle = '(将根据您的要求推荐优质候选人)'
          this.introduce = "圈子简介"
          this.introducePlaceholder = "请填写圈子详细简介"
          this.upImgTitle = "请上传圈子相关照片"
          this.addrTitle = "圈子地址"
          this.addrPlaceholder = "地址名称 如：如京基大厦"
          
        }
        if(this.PageId==42){
            this.pageTitle = '住房出租表单'
            this.subTitle = '(公寓/自建房)'
            this.introduce = "出租要求"
            this.introducePlaceholder = "请填写房屋出租要求"
            this.upImgTitle = "房屋照片"
            this.addrTitle = "房屋地址"
            this.addrPlaceholder = "详细地址如：如希尔顿小区"
            this.addDetailTitle = "补充几句"
            this.addDetailPlaceholder = "详细的描述会大大增加快速出租几率"
            this.infoMore = "房屋亮点"
            this.infoMorePlaceHolder = "请填写房屋亮点"
            this.TimeLimit = "接听时间段"
            this.TimeLimitPlaceHolder = "选择只在所选时间内接听"
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
    },
    //选择接听时间
    choseTimeLimit(){
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
        console.log(this.detailInfo,"detailInfo+++++++++++")
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
    //获取短租办公形式
    // getShortRent(){
    //   this.isShowMask = true
    //   this.list = this.detailInfo.ShortRent
    //   this.masktitle = '请选择办公形式'
    // },
    //租赁期限
    // getRentTimeLimit(){
    //   this.isShowMask = true
    //   let info = {}
    //   this.detailInfo.RentTimeLimit.Value.map(item=>{
    //       info={
    //         Name:item.Text
    //       }
    //       this.list.push(info)
    //   })
      
    //   this.masktitle = '请选择期限'
    // },

    //获取物业形式-设备形式-办公形式
    // getProperty(){
    //   console.log(this.detailInfo,"detailInfo+++++++++++")
    //   this.isShowMask = true
    //   this.list = this.detailInfo.Device
    //   if(this.PageId == 35){
    //     this.masktitle = '请选择物业形式'
    //   }else if(this.PageId == 52){
    //     this.masktitle = '请选择设备形式'
    //   }else if(this.PageId == 62){
    //       this.masktitle = '请选择办公形式'
    //   }
      
    // },
    // //获取设备类型
    // getPropertyType(){
    //   this.isShowMask = true  
    //   let info = {}
    //   this.detailInfo.DeviceType.Value.map(item=>{
    //       info={
    //         Name:item
    //       }
    //       this.list.push(info)
    //   })
    //   this.masktitle = '请选择设备类型'
    // },
    //选择弹层item
    chose(e){
        this.statu = e
    },
    subConfirm2(n){
      console.log(n)
      console.log(this.PartnerList)
        if(this.showTouchEducation){
          console.log("this.list:",this.list)
            // npm this.EducationLvl = this.list[i].Name
            this.PartnerList[n].Degree = this.list[this.statu].Name
        }
        this.isShowMask = false
        this.showNoChange = false
        this.ShowTime = false
        this.showInput = false
        this.PartnerList[n].ShowWork = false
        this.showTouchEducation = false
        this.statu = 0
        this.list = []

    },
    //确定选择
    subConfirm(){
      for(let i in this.list){
          if(i*1 == this.statu){
              if(this.masktitle =='请选择学历结构' ){
                // console.log("this.list:",this.list)
                  this.EducationLvl = this.list[i].Name
                  // this.Degree = this.list[i].Name
              }
              
          }
      }
      //选择时间
      if(this.masktitle = '请选择接听时间'){
        if(this.RentTime[0]>this.RentTime[2]){
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
            
            this.RentTime=time[0]+":"+time[1]+"-"+time[2]+":"+time[3] //时间
        }
    
      }
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
    },
    //取消选择
    cancle(){
      this.isShowMask = false
      this.showNoChange = false
      this.ShowTime = false
      this.showInput = false
      this.list = []
      this.statu = 0
    },
    cancle2(n){
      this.PartnerList[n].ShowWork = false
      this.isShowMask = false
      this.showNoChange = false
      this.ShowTime = false
      this.showInput = false
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
          this.BrandId = res.data.BrandId
          this.PageId = res.data.PageId
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
                this.addressList2 = Object.assign(this.addressList2,obj);
              })
              
              this.columns2.push(
                {
                values: Object.keys(this.addressList2),
                className: "column1"
                },
                {
                  values: this.addressList2[Object.keys(this.addressList2)[0]],
                  className: 'column2',
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
            if(res.data.CompanyList.lenght>1){
                this.showDefaultCompany = true
            }else{
                this.showDefaultCompany = false
                this.Company = res.data.CompanyList[0].Name
                this.CompanyId = res.data.CompanyList[0].Id
                console.log(this.Company,"this.companyName")
            }
          

        }else{
            //没有认证 先去认证  code=5 企业认证  code=6个人认证
            wx.showToast({
            title:res.msg,
            duration:1500,
            icon:'none',
          })
          if(res.code==6){
              setTimeout(() => {
                wx.navigateTo({
                  url: "/pages/mine2/myVertical/main?url=rentDevice"
                });
              }, 1500);
          }else if(res.code==5){
              setTimeout(() => {
                wx.navigateTo({
                  url: "/pages/mine2/verticalCompany/main?url=rentDevice"
                });
              }, 1500);
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
    async base64Img(arr){
      let base64Arr = []
      for(let i = 0;i < arr.length;i++){
        const res = await pathToBase64(arr[i]);
        base64Arr.push({
          picUrl:res
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
      if (this.Synopsis == '') {
        this.toastTip("请输入简介!")
        return false;
      }
      if (this.GladBuyAreaId=='') {
        this.toastTip("请选择区域!") 
        return false;
      }
      if (this.Founder == '') {
        this.toastTip(`请输入名称!`)
        return false;
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
      let _PartnerList = {}
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
          Founder:that.Founder
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
            Founder:that.Founder,
            BuyBudget:that.BuyBudget,
            PlanBuyDate:that.PlanBuyDate,
            PlanBuyArea:that.PlanBuyArea
        }
        if(that.PageId==32　|| that.PageId==33){
          for(let i=0;i<that.PartnerList;i++){
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
            Founder:that.Founder,
            BuyBudget:that.BuyBudget,
            PlanBuyDate:that.PlanBuyDate,
            RingType:that.RingType,
            RingNum:that.RingNum,
            RingRate:that.RingRate,
        }
        for(let i=0;i<that.PartnerList;i++){
           console.log("*****************")
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
      console.log("++++++")
      if(that.valOther()){
          if(that.PageId == 65){
            for(let i in that.Devicelist){
              if(that.Devicelist[i].active){
                that.ServiceName+=that.Devicelist[i].Name+","
              }
            }
          console.log("that.ServiceName:",that.ServiceName)
          }
          console.log("_____")
          if(that.PageId==32　|| that.PageId==33 || that.PageId==34){
           pramas={
              UserId:this.userId,
              Token:this.token,
              TypeId:this.TypeId,
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
              GoodsInfo:GoodsInfo
           }
          }
          console.log(pramas,"pramas")
          that.submitAll(pramas)
          // hat.submitAll(JSON.stringify(PicList),GoodsInfo)
        
      }
    },
    submitAll(pramas){
      post('Goods/RentSharing',pramas,this.curPage).then(res=>{
        console.log("res:",res)
        wx.showToast({
          title:res.msg,
          icon:'success',
          duration:1500,
        })
        if(res.code==0){
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
      this.CompanyCulture = ''
      this.Synopsis = ''
      this.GladBuyerTrade = ''
      // this.PropertyType = ''
      // this.PropertySort = ''
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
      this.Founder = ''
      this.PlanStartTime = ''
      this.PlanEndTime = ''
      this.PlanBuyNum = ''
      this.PlanAllNum = ''
      this.RingType = ''
      this.RingNum = ''
      this.RingRate = ''
      this.PartnerList=[]

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