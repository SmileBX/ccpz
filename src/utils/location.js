
import QQMapWX from "@/utils/qqmap-wx-jssdk"; //腾讯地图，reverseGeocoder逆地址转码
import {post} from '@/utils/index'

const qqmapsdk = new QQMapWX({
  key: "3P2BZ-6G4WD-CEX43-PIV5G-3VDYH-N5BGH" // 必填
});
// 初始化定位和城市名称
export default function location(that){
  return new Promise((resolve,reject)=>{
    wx.getLocation({
      type:'gcj02',
      success(res){ 
        // 根据坐标获取城市
        qqmapsdk.reverseGeocoder({
              location: {
                latitude: res.latitude,
                longitude: res.longitude
              },  
              success(map) {
                const CityName=map.result.address_component.city
                that.$store.commit('update',{'lat':res.latitude,'lng':res.longitude,CityName})
                console.log('初始化小程序',map)
                console.log('this',that.$store.state)
                getCityCode(CityName,that,1)
                .then((_res)=>{
                  //beforeCityName，点击的城市
                  _res.beforeCityName = CityName
                  resolve(_res)
                })
              }
        }) 
      }
    })
  })  
    // 初始化定位和城市名称end
}
// 根据城市名称，请求城市代码
// status：1- 提示：该城市未开通业务哦！自动为你展示深圳!
// status：2- 提示：该城市未开通业务哦，
export function getCityCode(name,that,status){
  return new Promise((resolve,reject)=>{
    console.log('name+++++1',name)
    // debugger;
     post("Area/GetCityCode",{
       Name:name
     }).then(res => {
       console.log('name+++++2',name)
         const CityCode = res.data.Code
         const CityName = res.data.Name
         
       if(CityName!==name&&status===1){
          that.$store.commit('update',{CityCode,CityName})
          wx.showToast({
            title:'该城市未开通业务哦!自动为你展示深圳!',
            icon:'none'
          })
          setTimeout(()=>{
            resolve({CityName,CityCode})
          },1500)
       }else if(CityName!==name&&status===2){
         
        wx.showToast({
          title:'该城市未开通业务哦!',
          icon:'none'
        })
        setTimeout(()=>{
          reject({CityName,CityCode})
        },1500)
       }
       else{
        that.$store.commit('update',{CityCode,CityName})
        // CityName 请求返回的城市
        // CityCode 请求返回的城市代码
        resolve({CityName,CityCode})
       }
     })
  })
}
// 根据地址解析为坐标
export function getAddressLocation(address){
  return new Promise ((resolve,reject)=>{
    qqmapsdk.geocoder({
      address,
      success(res){
        resolve(res.result.location)
      },
      fail(err){
        wx.showToast({
          title:err.message,
          icon:'none'
        })
        reject()
      }
    })
  })
}