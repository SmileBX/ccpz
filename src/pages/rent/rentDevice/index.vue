<template>
  <div class="pageContent">
    <div class="FormBox">
      <img class="topbgimg" src="/static/images/icons/bg2.jpg" v-if="TypeId==58">
      <img class="topbgimg" src="/static/images/icons/bg1.jpg" v-else>
      <div class="FormCon" style="margin-top:-260rpx;">
        <div class="formTitle">
          <div class="titletxt">{{pageTitle}}</div>
          <p class="subtitle">{{subTitle}}</p>
        </div>
        <!--标题-->
        <div class="form-cells">
          <div class="form-cells-item">
            <div class="">
              <div class="form-cells-hd">标题</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  placeholder="请填写适合标题"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <!--公司名称 -->
          <div class="form-cells-item" v-if="TypeId==36 || TypeId==52">
            <div class="form-cells-navigate navigate-bottom">
              <div class="form-cells-hd">公司名称</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  placeholder="请输入公司名称"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
          <!--公司-->
          <div class="form-cells-item" style="padding-right:0"  v-if="TypeId==36 || TypeId==52">
            <div class="form-cells-item">
              <div class="form-cell-bd">深圳木棉科技有限公司</div>
            </div>
            <div class="form-cells-item">
              <div class="form-cell-bd">深圳大漠时代文化传媒集团有限公司</div>
            </div>
          </div>
          <div v-if="TypeId==36">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">物业形式</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">物业单价</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请输入"
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
                    @click="showArea=true"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">是否装修</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请输入"
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
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">计划购买面积</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请输入"
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
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">购买预算</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请输入"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <div v-if="TypeId==52">
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">物业形式</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">物业单价</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请输入"
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
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">是否装修</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请输入"
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
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">计划购买面积</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请输入"
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
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">购买预算</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请输入"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
          </div>
          <!--公司简介-->
          <div class="form-cells-item">
            <div class="form-cells-navigate navigate-right">
              <div class="form-cells-hd">公司简介</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  placeholder="请填写公司详细简介"
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
              <div class="upbtn">
                <span class="close">×</span>
                <img class="upimg" src="/static/images/of/index_a1.jpg">
              </div>
              <div class="upbtn">
                <img class="upimg" src="/static/images/icons/upload_1.png">
              </div>
            </div>
          </div>
          <!--选项 start-->
          <div v-if="TypeId==52">
            <div class="form-cells-item form-cells-item2">
              <div class="item2-column">
                <div class="form-cells-hd">是否挂牌</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
              <div class="item2-column">
                <div class="form-cells-hd">业务分包</div>
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
                <div class="form-cells-hd">资质使用</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
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
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
            <div class="form-cells-item form-cells-item2">
              <div class="item2-column">
                <div class="form-cells-hd">是否允许对外挂牌</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
              <!-- <div class="item2-column">
                <div class="form-cells-hd">实缴资本</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  placeholder-style="color:#b5b5b5;"
                >
              </div> -->
            </div>
          </div>
          <div v-if="TypeId==36">
            <div class="form-cells-item form-cells-item2">
              <div class="item2-column">
                <div class="form-cells-hd">业务分包</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
              <div class="item2-column">
                <div class="form-cells-hd">可否使用公司资质</div>
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
                <div class="form-cells-hd">股份合作</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
              <div class="item2-column">
                <div class="form-cells-hd">公司挂牌</div>
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
                <div class="form-cells-hd">对方公司挂牌</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
              <!-- <div class="item2-column">
                <div class="form-cells-hd">实缴资本</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  placeholder-style="color:#b5b5b5;"
                >
              </div> -->
            </div>
          </div>
          <!--选项 end-->
           <!--地址-->
          <div class="form-cells-item">
            <div class="">
              <div class="form-cells-hd">{{addrTitle}}</div>
              <div class="form-cell-bd">
                <input
                  class="ipt"
                  type="text"
                  :placeholder="addrPlaceholder"
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
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--按钮-->
      <div class="ftbox">
        <div class="btn">确认发布</div>
      </div>
    </div>
    <!--弹层-->
    <div class="mask" v-if="isShowMask" catchtouchmove="true" @click="isShowMask=false"></div>
    <div class="maskType boxSize" v-if="isShowMask">
        <div class="flex">
              <span class="size" @click="cancle">取消</span>
              <span class="title">{{masktitle}}</span>
              <span class="color size" @click="subConfirm">确定</span>
        </div>
        <scroll-view :scroll-y="true" style="height:480rpx;" class="showItem" @scrolltolower="loadMore">
          <div v-for="(item,index) in list" :key="index">
              <p :class="{'itemactive':item.statu}" @click="chose(index)" style="margin-top:3rpx;">{{item.name}}
              </p>
          </div>
        </scroll-view>
    </div> 
    <!--时间插件-->
    <van-action-sheet :show="showDate" @close="showDate=false" @select="showDate=false">
        <zan-datetime-picker
        type="date"
        :value="currentDate"
        @confirm="onInput($event,lindex)"
        @cancel="showDate=false"
        :min-date="minDate"
        title="请选择时间"
        style="z-index:888!important"
        />
    </van-action-sheet> 
    <!--区域插件--> 
    <van-popup :show="showArea" position="bottom" :overlay="true" @close="showArea = false">
        <van-area :area-list="areaList" title="请选择区域" @cancel="showArea = false" @confirm="confirmArea"/>
    </van-popup>    
  </div>
</template>

<script>
//TypeId--58厂房发布  
//拼购--   设备拼购-52   物业拼购-36 
import "@/style/style_fb.scss";
import { post,host,getCurrentPageUrlWithArgs} from "@/utils";
import areaList from "@/utils/areaList";
import {pathToBase64} from "@/utils/image-tools";
export default {
  data() {
    return {
      currentDate: new Date().getTime(),
      minDate: new Date().getTime(),
      // formatter(type, value) {
      //   if (type === "year") {
      //     return `${value}年`;
      //   } else if (type === "month") {
      //     return `${value}月`;
      //   }
      //   return value;
      // },
      curPage: "",
      userId: "",
      token: "",
      TypeId:'',
      detailInfo:[],
      isShowMask:false,//是否显示弹层
      showArea:false,//显示区域
      areaList,
      showDate:false,//显示时间
      list:[],//弹层列表
      masktitle:"",//弹层标题


      pageTitle:"",//页面标题
      subTitle:"",//副标题
      introduce:"",//简介标题
      introducePlaceholder:"",//简介的placeholder
      upImgTitle:"",//上传图片标题
      addrTitle:"",//地址标题
      addrPlaceholder:"",//地址的
      addDetailTitle:"",//补充说明的
      addDetailPlaceholder:"",//补



    };
  },
  onLoad() {
    this.setBarTitle();
  },
  onShow(){
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    this.TypeId = this.$root.$mp.query.TypeId
    console.log(this.TypeId,"TypeId")
    this.initData()
    this.GetPublishItems()
  },
  components: {},
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "发布"
      });
    },
    initData(){
        if(this.TypeId==58){
          this.pageTitle = '厂房出租表单'
          this.subTitle = '(厂房/车位/土地/仓库等)'
          this.introduce = "出租要求"
          this.introducePlaceholder = "请填写出租要求"
          this.upImgTitle = "厂房照片"
          this.addrTitle = "详细地址"
          this.addrPlaceholder = "详细地址 如：如西莫敦199号"
          this.addDetailTitle = "补充几句"
          this.addDetailPlaceholder = "详细的描述会大大增加快速出租的机会"
        }else if(this.TypeId==52){
          this.pageTitle = '拼购设备表单'
          this.subTitle = '(设备/售卖机)'
          this.introduce = "公司简介"
          this.introducePlaceholder = "请填写公司详细简介"
          this.upImgTitle = "公司/团队照片"
          this.addrTitle = "公司地址"
          this.addrPlaceholder = "办公室大楼 如：如京基大厦"
          this.addDetailTitle = "门牌号"
          this.addDetailPlaceholder = "门牌号/楼号等 例：3楼418室"
        }else if(this.TypeId==36){
          this.pageTitle = '拼购物业表单'
          this.subTitle = '(物业)'
          this.introduce = "公司简介"
          this.introducePlaceholder = "请填写公司详细简介"
          this.upImgTitle = "公司/团队照片"
          this.addrTitle = "公司地址"
          this.addrPlaceholder = "办公室大楼 如：如京基大厦"
          this.addDetailTitle = "门牌号"
          this.addDetailPlaceholder = "门牌号/楼号等 例：3楼418室"
        }
    },
    onInput(e, i) {
        console.log(e, "时间");
        const date = new Date(e.mp.detail);
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dd = date.getDate();
        month.toString().length < 2 ? (month = "0" + month) : month;
        dd.toString().length < 2 ? (dd = "0" + dd) : dd;
        let estimateTime = `${year}-${month}-${dd}`;
        console.log(estimateTime, "交付时间");
      },
    GetPublishItems(){
      post('Goods/GetPublishItems',{
          UserId:this.userId,
          Token:this.token,
          TypeId:this.TypeId
      },this.curPage).then(res=>{
        console.log(res,"GetPublishItems")
        //没有认证 先去认证
        // if(res.code==1){
        //   wx.showToast({
        //     title:res.msg,
        //     duration:1500,
        //     icon:'none',
        //   })
        //   setTimeout(() => {
        //     wx.navigateTo({
        //       url: "/pages/mine2/myVertical/main?url=rentDevice"
        //     });
        //   }, 1500);
        // }else{
        //   //已经认证了 获取信息 发布信息
        //   this.detailInfo = res.data
        // }
      })
    },
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
    }
    .flex {
        justify-content: space-between;
        border-bottom: 1rpx solid #ccc;
        padding: 20rpx;
        font-weight: 400;
        font-size: 30rpx;
        .color {
            color: #ff6325
        }
        .size {
            font-size: 26rpx;
        }
        span {
            border: 1p solid blue
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
</style>