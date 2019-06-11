<template>
  <div class="pageContent bg_fff" :class="(showMoreShop || showMoreEquip)?'over_hidden':''">
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
    <div class="filterMenu pt15">
      <ul class="tabList menu flex justifyContentBetween" v-if="pramas==4">
        <li>
          <div class="item">提供拼租</div>
        </li>
        <li>
          <div class="item">寻找拼租</div>
        </li>
        <li>
          <div class="item">拼购物业设备</div>
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
    <!--图标-->
    <div class="navBox" v-if="pramas!=6">
      <ul class="navList li_20 center navList2">
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/bangongshi.jpg" alt>
            </div>
            <p class="title">办公室</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/kawei.jpg" alt>
            </div>
            <p class="title">卡位</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/huiyishi.jpg" alt>
            </div>
            <p class="title">会议室</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/peixun.jpg" alt>
            </div>
            <p class="title">培训机构</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/duanzu.jpg" alt>
            </div>
            <p class="title">短租</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/shangpu.jpg" alt>
            </div>
            <p class="title">商铺</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/gongchang.jpg" alt>
            </div>
            <p class="title">工厂</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/shebei.jpg" alt>
            </div>
            <p class="title">设备</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/shoumaiji.jpg" alt>
            </div>
            <p class="title">自动售卖机</p>
          </div>
        </li>
        <li>
          <div class="outside">
            <div class="icon-img">
              <img src="/static/images/icons/qita.jpg" alt>
            </div>
            <p class="title">其他</p>
          </div>
        </li>
      </ul>
    </div>
    <!--列表-->
    <div class="filterContent">
      <ul class="column levelPanel storeList">
        <li class="item" @click="toDetail">
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
      </ul>
    </div>
    <!--弹层-->
    <div class="mask mask2" v-if="isShow" catchtouchmove="true"></div>
    <div class="mask" v-if="isShow" catchtouchmove="true"></div>
    <!--弹层1：中间一级-->
            <!--房源弹层高度:modal_mask_house :class="{'modal_mask_house':index==item.index}"-->
    <div class="modal_mask"  v-if="ShowCenter">
        <scroll-view scroll-y="true" class="scroll">
            <div v-for="(item,index) in list " :key="index">
                <p>{{item}}</p>
            </div>
        </scroll-view>
    </div> 
    <!--弹层3：中间一级 拼价格-->
    <div class="modal_mask modal_mask2"  v-if="ShowPrice">
        <scroll-view scroll-y="true" class="scroll scroll_price" >
            <div v-for="(item,index) in list " :key="index">
                <p>{{item}}</p>
            </div>
        </scroll-view>
        <div>
          <div class="scroll_price_item">
              <div class="p3">价格区间</div>
              <div class="flex justifyContentCenter scroll_price_itemCenter flexAlignCenter">
                <input type="text" value="最低价">
                <p class="mm1">--</p>
                <input type="text" value="最高价">
              </div>
          </div>
          <div class="btnSub2 mask_btn_price">确认</div>
        </div>
    </div> 
    <!--弹层2：2级联动-->
    <div class="modal_mask flex second"  v-if="ShowSecond" catchtouchmove="true">
        <scroll-view scroll-y="true" class="scroll">
            <div v-for="(item,index) in list " :key="index">
                <p>{{item}}</p>
            </div>
        </scroll-view>
        <scroll-view scroll-y="true" class="scroll" v-if="ShowSecondRight" style="border-left:1rpx solid #f2f2f2">
            <div v-for="(item,index) in list " :key="index">
                <p>{{item}}</p>
            </div>
        </scroll-view>
    </div> 
    <!--更多：弹层  start*******************************************-->
    <!--设备、短租模板******************************-->
    <div class="modal_mask short_rent boxSize" style="height:100%" v-if="showMoreEquip">
        <div class="short_rent_child">
            <p class="font30 fontBold" style="text-align:left">租赁期限</p>
            <ul class="navList li_20 center navList2">
              
              <li>
                <p>一周</p>
              </li>
              <li>
                <p>半个月</p>
              </li>
              <li>
                <p>1个月</p>
              </li>
              <li>
                <p>2个月</p>
              </li>
              <li>
                <p>3个月</p>
              </li>
              <li>
                <p>4个月</p>
              </li>
              <li>
                <p>5个月</p>
              </li>
              <li>
                <p>6个月</p>
              </li>
            </ul>
        </div>
        <div class="short_rent_child">
            <p class="font30 fontBold" style="text-align:left">办公开式</p>
            <ul class="navList li_20 center navList2">
              <li>
                <p>写字楼</p>
              </li>
              <li>
                <p>商铺</p>
              </li>
              <li>
                <p>工厂</p>
              </li>
              <li>
                <p>会议室</p>
              </li>
              <li>
                <p>咖啡厅</p>
              </li>
              <li>
                <p>茶楼</p>
              </li>
              <li>
                <p>饮品店</p>
              </li>
            </ul>
        </div>
        <div class="btnSub2 flex">
            <div class="mask_btn_cancle">取消</div>
            <div class="mask_btn_confirm">确定</div>
        </div>
    </div>
    <!--办公室、商铺筛选更多******************************-->
    <div class="modal_mask boxSize" style="height:100%" v-if="showMoreShop">
        <scroll-view scroll-y="true" class="scroll modal_shop_scroll">
            <ul class="modal_mask_shop">
                <li>
                    <div class="modal_shop_title">业务是否外包</div>
                    <div class="mask_shop_bd">
                        <radio-group class="radio-group" @change="changeStatu">
                            <label class="radio">
                                <radio value="1" :checked="value==1" color='#fff'/>
                                是
                            </label>
                            <label class="radio">
                                <radio value="0" :checked="value==0" color='#fff'/>
                                否
                            </label>
                        </radio-group>
                    </div>
                </li>
                <li>
                    <div class="modal_shop_title">业务是否外包</div>
                    <div class="mask_shop_bd">
                        <radio-group class="radio-group" @change="changeStatu">
                            <label class="radio">
                                <radio value="1" :checked="value==1" color='#fff'/>
                                是
                            </label>
                            <label class="radio">
                                <radio value="0" :checked="value==0" color='#fff'/>
                                否
                            </label>
                        </radio-group>
                    </div>
                </li>
                <li>
                    <div class="modal_shop_title">业务是否外包</div>
                    <div class="mask_shop_bd">
                        <radio-group class="radio-group" @change="changeStatu">
                            <label class="radio">
                                <radio value="1" :checked="value==1" />
                                是
                            </label>
                            <label class="radio">
                                <radio value="0" :checked="value==0" />
                                否
                            </label>
                        </radio-group>
                    </div>
                </li>
                <li>
                    <div class="modal_shop_title">业务是否外包</div>
                    <div class="mask_shop_bd">
                        <radio-group class="radio-group" @change="changeStatu">
                            <label class="radio">
                                <radio value="1" :checked="value==1" />
                                是
                            </label>
                            <label class="radio">
                                <radio value="0" :checked="value==0" />
                                否
                            </label>
                        </radio-group>
                    </div>
                </li>
                <li>
                    <div class="modal_shop_title">业务是否外包</div>
                    <div class="mask_shop_bd">
                        <radio-group class="radio-group" @change="changeStatu">
                            <label class="radio">
                                <radio value="1" :checked="value==1" />
                                是
                            </label>
                            <label class="radio">
                                <radio value="0" :checked="value==0" />
                                否
                            </label>
                        </radio-group>
                    </div>
                </li>
                <li>
                    <div class="modal_shop_title">业务是否外包</div>
                    <div class="mask_shop_bd">
                        <radio-group class="radio-group" @change="changeStatu">
                            <label class="radio">
                                <radio value="1" :checked="value==1" />
                                是
                            </label>
                            <label class="radio">
                                <radio value="0" :checked="value==0" />
                                否
                            </label>
                        </radio-group>
                    </div>
                </li>
                <li>
                    <div class="modal_shop_title">业务是否外包</div>
                    <div class="mask_shop_bd">
                        <radio-group class="radio-group" @change="changeStatu">
                            <label class="radio">
                                <radio value="1" :checked="value==1" />
                                是
                            </label>
                            <label class="radio">
                                <radio value="0" :checked="value==0" />
                                否
                            </label>
                        </radio-group>
                    </div>
                </li>
                <li>
                    <div class="modal_shop_title">业务是否外包</div>
                    <div class="mask_shop_bd">
                        <radio-group class="radio-group" @change="changeStatu">
                            <label class="radio">
                                <radio value="1" :checked="value==1" />
                                是
                            </label>
                            <label class="radio">
                                <radio value="0" :checked="value==0" />
                                否
                            </label>
                        </radio-group>
                    </div>
                </li>
                <li>
                    <div class="modal_shop_title">业务是否外包</div>
                    <div class="mask_shop_bd">
                        <radio-group class="radio-group" @change="changeStatu">
                            <label class="radio">
                                <radio value="1" :checked="value==1" />
                                是
                            </label>
                            <label class="radio">
                                <radio value="0" :checked="value==0" />
                                否
                            </label>
                        </radio-group>
                    </div>
                </li>
            </ul>
        </scroll-view>
        <div class="btnSub2 flex">
            <div class="mask_btn_cancle">取消</div>
            <div class="mask_btn_confirm">确定</div>
        </div>
    </div>
    <!--更多：弹层  end-->
  </div>
</template>
<script>
export default {
  data(){
    return {
      pramas:"",
      isShow:true,//蒙版
      ShowCenter:false,//中间一级遮罩层
      list:['不限','招商会','发布会','发布会','发布会','发布会','发布会','发布会','发布会','发布会','招商会','发布会',],//中间弹层列表
      ShowSecond:true,//二级联动
      ShowSecondRight:true,//二级联动右侧
      ShowPrice:false,//拼价格
      showMoreEquip:false,//设备短租模板
      showMoreShop:false,//更多办公室-设备

    }
  },
  onLoad() {
    this.setBarTitle();
    this.pramas = this.$root.$mp.query.tip
  },
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "拼租"
      });
    },
    toDetail(){
      wx.navigateTo({url:'/pages/rent/storeDetail/main'})
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss"
</style>