import Vue from 'vue'
import App from './App'
import {getCityCode} from './utils/location'

Vue.config.productionTip = false
App.mpType = 'app'

import store from './store/index'
//把store挂载到全局
Vue.prototype.$store = store;
// 获取定位和城市编码
Vue.prototype.getCityCode = getCityCode;
const app = new Vue(App)
app.$mount()