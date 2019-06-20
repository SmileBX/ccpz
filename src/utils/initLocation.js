
import QQMapWX from "@/utils/qqmap-wx-jssdk"; //腾讯地图，reverseGeocoder逆地址转码
import {post} from '@/utils/index'
export default function initLocation(that){
    
  return new Promise((resolve,reject)=>{
    // 初始化定位和城市名称
    const qqmapsdk = new QQMapWX({
          key: "3P2BZ-6G4WD-CEX43-PIV5G-3VDYH-N5BGH" // 必填
        });
    
    wx.getLocation({
      type:'gcj02',
      success(res){ 
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
                getCityCode(CityName,that)
                .then(()=>{
                  resolve()
                })
              }
        }) 
      }
    })
  })  
    // 初始化定位和城市名称end
}
// 根据城市名称，请求城市代码
export function getCityCode(name,that){
  return new Promise((resolve,reject)=>{
    console.log('name+++++1',name)
    // debugger;
     post("Area/GetCityCode",{
       Name:name
     }).then(res => {
       console.log('name+++++2',name)
         const CityCode = res.data.Code
         const CityName = res.data.Name
        that.$store.commit('update',{CityCode,CityName})
       if(CityName!==name){
         wx.showToast({
           title:'该城市未开通业务哦!自动为你展示深圳!',
           icon:'none'
         })
         setTimeout(()=>{
           resolve(CityName,CityCode)
         },1500)
       }else{
        resolve(CityName,CityCode)
       }
     })
  })
}