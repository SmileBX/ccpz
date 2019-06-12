<template>
  <div>
    <!--填写订单-->
    <div class="glo-relative">
      <div class="relative">
        <van-cell-group>
          <van-field
            :value="searchValue"
            placeholder="请输入地址"
            @change="onSearchChange"
            left-icon="search"
            clearable
            use-button-slot
          >
            <van-button slot="button" size="small" @click="comfirm" type="primary">确定</van-button>
          </van-field>
        </van-cell-group>
        <div class="relative">
      <map
        id="map"
        :longitude="longitude"
        :latitude="latitude"
        scale="15"
        :controls="controls"
        :markers="markers"
        @markertap="markertap"
        @controltap="controltap"
          @regionchange="getCenterMap1"
          @end="getCenterMap"
        show-location
        style="width:750rpx; height: 500rpx;"
      ></map>
      <!-- 中心点 -->
          <cover-image class="map" src="/static/images/map.png" />
      </div>
        <div class="suggest" v-show="searchValueStatus&&searchValue">
          <scroll-view scroll-y class="lists">
            <cover-view class="bg-fff">
             <cover-view class="item" v-for="(item,index) in searchValueList" :key="index" @click="onSearchItem(index)">
              <cover-view class="iteminfo">
                <cover-view class="location-self">{{item.name}}</cover-view>
                <cover-view class="sub">{{item.address}}</cover-view>
              </cover-view>
              <!-- <cover-image src="/static/images/choose2.png" class="choose" :class="{active:0==index}" /> -->
             </cover-view>
            <!-- 没有推荐地址提示 -->
              <cover-view class="notAddress" v-show="searchValueList.length<1">没有找到输入的地址哦！</cover-view>
              </cover-view>
          </scroll-view>
        </div>
      </div>
    </div>
    <!--列表-->
    <scroll-view scroll-y class="list">
      <div class="item" v-for="(item,index) in locationlist" :key="index" @click="change(item,index)">
        <div class="iteminfo">
          <span class="location-self">{{item.name}}</span>
          <p class="sub">{{item.address}}</p>
        </div>
        <img src="/static/images/choose2.png" class="choose" :class="{active:active==index}">
      </div>
    </scroll-view>
  </div>
</template>

<script>
// import "../../css/common.css";
// import "../../css/global.css";
import QQMapWX from "@/utils/qqmap-wx-jssdk"; //腾讯地图，reverseGeocoder逆地址转码
export default {
  onLoad() {
    this.setBarTitle();
    // this.getAround(); //获取周边pio信息（经纬度 关键词）
    //this.getMapShow() //测试------根据城市名称获取地图
    // 实例化API核心类
    this.qqmapsdk = new QQMapWX({
      key: "3P2BZ-6G4WD-CEX43-PIV5G-3VDYH-N5BGH" // 必填
    });
  },
  onShow() {
    this.latitude=this.$store.state.latitude
    this.longitude=this.$store.state.longitude
    this.active=0;
      this.searchValue='';//搜索框的值
    // console.log(this.latitude,this.longitude)
    this.getCityinfo()
  },
  data() {
    return {
      qqmapsdk:null,//实例化API核心类
      latitude: 0,
      longitude: 0,
      searchValue:'',//搜索框的值
      searchValueStatus:false,
      searchValueList:[],
      searchValueItem:{},
      locationlist: [],
      active: 0,
      markers: [
        {
          iconPath: "/static/images/person.png",
          id: 1,
          latitude: this.latitude,
          longitude: this.longitude,
          width: 20,
          height: 25
        }
      ],
      controls: [
        {
          //控件不随着地图移动
          id: 2,
          iconPath: "/static/images/location.png",
          position: {
            left: 0,
            top: 150,
            width: 30,
            height: 30
          },
          clickable: true
        }
      ]
    };
  },
  components: {},
  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "位置"
      });
    },
    
    //根据经纬度获取城市名称nowPlace 反地理转码
    getCityinfo() {
      return new Promise((resolved, rejected) => {
        const that = this;
        this.qqmapsdk.reverseGeocoder({
          location: {
            latitude: this.latitude,
            longitude: this.longitude
          },
          success(res) {
            const _res = res.result;
              that.searchValueItem={
                name:_res.formatted_addresses.recommend,
                address:_res.address,
                location:_res.location,
                province:_res.address_component.province,
                city:_res.address_component.city,
                district:_res.address_component.district
              }
            console.log("地址转码成功", this.searchValueItem);
              that.getCearchInfo()
          },
          fail: function(res) {
            console.log(res);
          }
        });
      });
    },
    // change搜索框输入
    onSearchChange(e){
      const that = this;
      console.log('输入了',e.mp.detail,this.searchValue)
      this.searchValue = e.mp.detail
      this.qqmapsdk.getSuggestion({
        keyword:e.mp.detail,
        page_size:20,
        get_subpois:1,
        success(res){
           console.log('输入关键词提示',res)
           let list =[]
            res.data.map(item=>{
              list.push({
                name:item.title,
                address:item.address,
                location:item.location,
                province:item.province,
                city:item.city,
                district:item.district
              })
            })
            that.searchValueList = list;
        }
      })
      this.searchValueStatus = true;
    },
    // 点击搜索推荐
    onSearchItem(i){
           console.log('location',this.searchValueList[i])
            this.searchValueItem = this.searchValueList[i]
        const location = this.searchValueList[i].location
            this.latitude = location.lat
            this.longitude= location.lng
            this.searchValueStatus = false;
            this.getCearchInfo()
    },
    // 搜索地址周边
    getCearchInfo(){
        const that = this;
        const searchValueItem = this.searchValueItem
        console.log(searchValueItem,searchValueItem.province+searchValueItem.city+searchValueItem.district)
        this.qqmapsdk.search({
          keyword:searchValueItem.city,
          filter:'category=KTV,超市,酒店,餐饮,大厦,小区,广场',
          location: {
            latitude: this.latitude,
            longitude: this.longitude
          },
          page_size:10,
          success(res) {
            console.log("地址转码成功", res);
           let list =[]
           
              list.push({
                name:searchValueItem.name,
                address:searchValueItem.address,
                location:searchValueItem.location,
                province:searchValueItem.province,
                city:searchValueItem.city,
                district:searchValueItem.district
              })
            res.data.map(item=>{
              list.push({
                name:item.title,
                address:item.address,
                location:item.location,
                province:item.province,
                city:item.city,
                district:item.district
              })
            })
            that.locationlist = list;
            // const _res = res.result;
            // that.cityName = _res.address_component.city;
            // that.update({
            //   cityName: _res.address_component.city,
            //   nowPlace:
            //     _res.formatted_addresses.recommend + " - " + _res.address
            // });
          },
          fail: function(res) {
            console.log(res);
          }
        });
    },
    change: function(item,index) {
      // this.active = index;
      this.latitude=item.location.lat
      this.longitude=item.location.lng
      console.log(item, "点击选中的位置");
    },
    // 地图视野是触发
    getCenterMap1() {},
    // 地图视野结束是触发
    getCenterMap() {
      const that = this;
      console.log("自身位置坐标", this.longitude, this.latitude);
      const map = wx.createMapContext("map");
      map.getCenterLocation({
        success(res) {
          // 判断坐标一致，不用重复请求数据
          if (
            that.longitude === res.longitude &&
            that.latitude === res.latitude
          ) {
            return false;
          }
          that.latitude = res.latitude;
          that.longitude = res.longitude;
          console.log("中心位置坐标", that.longitude, that.latitude);
          that.getCityinfo();
        }
      });
    },
    // 点击确定
    comfirm(){
      console.log('active',this.locationlist[this.active])
      const  location= this.locationlist[this.active].location
      this.$store.commit('update',{
        latitude : location.lat,
        longitude : location.lng
      })
      wx.navigateBack()
    }
  },

};
</script>

<style lang="scss" scoped>
@import "./style";
.bg-fff{
  background:#fff;
}
</style>
