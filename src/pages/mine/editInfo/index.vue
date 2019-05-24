<template>
  <div class="pageContent">
    <!--公司 个人信息空-->
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">头像</p>
        </div>
        <div class="avatarbox">
            <img src="/static/images/icons/ava_bg.jpg" alt="" class="avatar">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">昵称</p>
        </div>
        <input type="text" placeholder="请输入">
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">实名认证</p>
        </div>
        <span class="fontColor">未认证</span>
      </div>
      <div class="weui-cell" @click="showArea = true">
        <div class="weui-cell__bd">
           <p class="txt">地区</p>
        </div>
        <span class="fontColor ">请选择</span>
      </div>
      <div class="weui-cell" @click="choseBusiness">
        <div class="weui-cell__bd">
            <!--个人-->
           <p class="txt">行业</p>
           <!--公司-->
            <p class="txt" v-if="Company">公司行业</p>
        </div>
        <span class=" fontColor">请选择</span>
      </div>
      <div class="weui-cell" @click="choseDate">
        <div class="weui-cell__bd">
           <p class="txt">成立日期</p>
        </div>
        <span class="fontColor ">请选择</span>
      </div>
      <!--个人-->
      <div class="weui-cell" v-if="Company">
        <div class="weui-cell__bd">
           <p class="txt">工作年限</p>
        </div>
        <span class=" fontColor">请选择</span>
      </div>
      <!--公司-->
      <div class="weui-cell" v-if="Company">
        <div class="weui-cell__bd">
           <p class="txt">人员规模</p>
        </div>
        <input type="text" placeholder="请输入">
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">办公面积</p>
        </div>
        <input type="text" placeholder="请输入">
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
           <p class="txt">办公地址</p>
        </div>
        <input type="text" placeholder="请输入" >
      </div>
      <div class="weui-cell" @click="showArea2=true">
        <div class="weui-cell__bd">
           <p class="txt">负责人籍贯</p>
        </div>
        <span class="fontColor ">请选择</span>
      </div>


    </div>
    <!--弹层-->
    <!--时间弹层-->
    <van-action-sheet :show="showDate" @close="showDate=false" @select="showDate=false">
        <van-datetime-picker
        type="date"
        :value="currentDate"
        @confirm="onInput($event)"
        @cancel="showDate=false"
        :min-date="minDate"
        :formatter="formatter"
        title="成立日期"
        />
    </van-action-sheet> 
    <!--地区-->
    <van-popup :show="showArea" position="bottom" :overlay="true" @close="showArea = false">
      <van-area :area-list="areaList" @cancel="showArea = false" @confirm="confirmArea" title="地区"/>
    </van-popup>
    <!--籍贯-->
    <van-popup :show="showArea2" position="bottom" :overlay="true" @close="showArea2 = false">
      <van-area :area-list="areaList" @cancel="showArea2 = false" @confirm="confirmArea2" columns-num="2" title="籍贯"/>
    </van-popup>
    <!--组建遮罩层-->
    <div class="mask" v-if="isShow"></div>
    <!--行业-->
    <div class="modal_mask" v-if="showBusiness">
        <div class="tileText flex">
           <span @click="cancleMask">取消</span>
           <span class="font32">行业</span>
           <span @click="confirmBusiness">确定</span>
        </div>
        <picker-view class="pickerView" :value="value" indicator-style="height: 50px;" style="width: 100%; height: 250px;"@change="bindDateChangeStart">
          <picker-view-column class="pickerColumn">
            <div class="pickerItem" v-for="(item,key) in business" :key="key" style="line-height:50px;" >{{item}}</div>
          </picker-view-column>
          <picker-view-column class="pickerColumn">
            <div class="pickerItem" v-for="(item,key) in range" :key="key" style="line-height:50px;">{{item}}</div>
          </picker-view-column>
        </picker-view>
    </div>
    <!--工作年限-->
    <div class="modal_mask" v-if="showBusiness">
        <div class="tileText flex">
           <span @click="cancleMask">取消</span>
           <span class="font32">行业</span>
           <span @click="confirmBusiness">确定</span>
        </div>
        <picker-view class="pickerView" :value="value" indicator-style="height: 50px;" style="width: 100%; height: 250px;"@change="bindDateChangeStart">
          <picker-view-column class="pickerColumn">
            <div class="pickerItem" v-for="(item,key) in workTime" :key="key" style="line-height:50px;" >{{item}}</div>
          </picker-view-column>
        </picker-view>
    </div>
    <!--底部按钮-->
    <div style="padding:80rpx 30rpx;">
      <div class="weui-btn btn-active fill">下一步</div>
    </div>
  </div>
</template>
<script>
import areaList from "@/utils/areaList";
export default {
  data(){
    return {
      currentDate: new Date().getTime(),
        minDate: new Date().getTime(),
        formatter(type, value) {
          if (type === 'year') {
            return `${value}年`;
          } else if (type === 'month') {
            return `${value}月`;
          }
          return value;
        },
      areaList,
      business:['电子商务','电子商务','电子商务','电子商务','电子商务','电子商务'],
      range:['社区电子','社区电子','社区电子','社区电子','社区电子','社区电子'],
      Company:false,//展示公司信息
      showDate:false,//展示时间弹层
      showArea:false,//展示地区
      showArea2:false,//展示籍贯
      isShow:true,//自写组建遮罩层
      showBusiness:true,//展示行业

    }
  },
  onLoad() {
    this.setBarTitle();
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "编辑信息"
      });
    },
    choseDate(){
      this.showDate = true
    },
    onInput(e){
        console.log(e,"时间")
          const  date= new Date(e.mp.detail)
        const year = date.getFullYear()
        let month = date.getMonth()+1
        let dd = date.getDate()
        month.toString().length<2 ? (month= "0"+month) : month
        dd.toString().length<2 ? (dd="0"+dd) : dd
        // this.prolist[i].estimateTime = `${year}-${month}-${dd}`
        // this.prolist[i].showDate = false
        // console.log(this.estimateTime,"交付时间")
    },
    confirmArea(area){
        this.showArea = false
        let text = ''
        const areas = area.mp.detail.values
        for(let i=0;i<areas.length;i++){
          text+=areas[i].name
        }
        // this.provinceCode=areas[0].code||'',
        // this.cityCode=areas[1].code||'',
        // this.districtCode=areas[2].code||'',
        // this.area = text;
    },
    confirmArea2(area){
      this.showArea2 = false
      let text = ''
      const areas = area.mp.detail.values
      for(let i=0;i<areas.length;i++){
        text+=areas[i].name
      }
      // this.provinceCode=areas[0].code||'',
      // this.cityCode=areas[1].code||'',
      // this.districtCode=areas[2].code||'',
      // this.area = text;

    },
    choseBusiness(){
       this.isShow = true
       this.showBusiness = true
    },
    cancleMask(){
      this.isShow = false
      this.showBusiness = false
    },
    confirmBusiness(){
        this.isShow = false
        this.showBusiness = false
    }
  }
};
</script>
<style lang="scss" scoped>
.weui-cell::before{
  left:0;
  right: 0;
}
.weui-cell{
  input{
    text-align:right
  }
  .fontColor{
    color:#808080
  }
  .avatarbox{
    width:108rpx;
    height:108rpx;
    margin-right:0
  }
  
}
.pageContent{
  .weui-btn.btn-active.fill{
    position:fixed;
    bottom:0rpx;
    width:690rpx;
    bottom:60rpx;
  }
}



</style>
