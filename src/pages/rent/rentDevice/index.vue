<template>
  <div class="pageContent">
    <div class="FormBox">
      <img class="topbgimg" src="/static/images/icons/bg2.jpg" v-if="detailInfo.TypeId==58">
      <img class="topbgimg" src="/static/images/icons/bg1.jpg" v-else>
      <div class="FormCon" style="margin-top:-260rpx;">
        <!--厂房出租-->
        <div class="formTitle" v-if="detailInfo.TypeId==58">
          <div class="titletxt">厂房出租表单</div>
          <p class="subtitle">(厂房/车位/土地/仓库等)</p>
        </div>
        <!--设备拼租-->
        <div class="formTitle" v-else>
          <div class="titletxt">设备拼租表单</div>
          <p class="subtitle">(设备/售卖机)</p>
        </div>
        <!--标题 公用-->
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
          <div class="form-cells-item" v-if="detailInfo.TypeId==100">
            <div class="">
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
          <div v-if="detailInfo.TypeId==100">
              <div class="form-cells-item" style="padding-right:0" >
                <div class="form-cells-item">
                  <div class="form-cell-bd">深圳木棉科技有限公司</div>
                </div>
                <div class="form-cells-item">
                  <div class="form-cell-bd">深圳大漠时代文化传媒集团有限公司</div>
                </div>
              </div>
              <div class="form-cells-item form-cells-item2">
                <div class="item2-column">
                  <div class="form-cells-hd">公司类别</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">意向拼租行业</div>
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
                  <div class="form-cells-hd">需求设备规格</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">设备类型</div>
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
                  <div class="form-cells-hd">价格区间</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">设备租金</div>
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
                  <div class="form-cells-hd">可租时间</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
                <div class="item2-column">
                  <div class="form-cells-hd">地区</div>
                  <input
                    class="ipt"
                    type="text"
                    disabled
                    placeholder="请选择"
                    placeholder-style="color:#b5b5b5;"
                  >
                </div>
              </div>
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
          </div>
          <!--厂房出租-->
          <div>
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
          <!--地址-->
          <div v-if="detailInfo.TypeId==100">
            <div class="form-cells-item form-cells-item2">
              <div class="item2-column">
                <div class="form-cells-hd">可否注册</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
              <div class="item2-column">
                <div class="form-cells-hd">可否挂牌</div>
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
                <div class="form-cells-hd">资质使用</div>
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
                <div class="form-cells-hd">实缴资本</div>
                <input
                  class="ipt"
                  type="text"
                  disabled
                  placeholder="请选择"
                  placeholder-style="color:#b5b5b5;"
                >
              </div>
            </div>
          </div>
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
      <div class="ftbox">
        <div class="btn">确认发布</div>
      </div>
    </div>
  </div>
</template>

<script>
//TypeId--58厂房发布
import "@/style/style_fb.scss";
import { post,host,getCurrentPageUrlWithArgs} from "@/utils";
export default {
  data() {
    return {
      curPage: "",
      userId: "",
      token: "",
      TypeId:'',
      detailInfo:[],
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
          this.introduce = "出租要求"
          this.introducePlaceholder = "请填写出租要求"
          this.upImgTitle = "厂房照片"
          this.addrTitle = "详细地址"
          this.addrPlaceholder = "详细地址 如：如西莫敦199号"
          this.addDetailTitle = "补充几句"
          this.addDetailPlaceholder = "详细的描述会大大增加快速出租的机会"
        }
    },
    GetPublishItems(){
      post('Goods/GetPublishItems',{
          UserId:this.userId,
          Token:this.token,
          TypeId:this.TypeId
      },this.curPage).then(res=>{
        console.log(res,"GetPublishItems")
        //没有认证 先去认证
        if(res.code==1){
          wx.showToast({
            title:res.msg,
            duration:1500,
            icon:'none',
          })
          setTimeout(() => {
            wx.navigateTo({
              url: "/pages/mine2/myVertical/main?url=rentDevice"
            });
          }, 1500);
        }else{
          //已经认证了 获取信息 发布信息
          this.detailInfo = res.data
        }
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
</style>