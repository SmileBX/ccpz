import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        // selectedFriends: []
        CityName:'',
        Wallet:0,
        cardId: "",
        selectCard: {
            url: '',
            status: false
        },
        cardInfo: { //选择的银行名称id
            id: "",
            bankLogo: "",
            bankName: ""
        },
        selectMyCard: {
            url: '',
            status: false
        },
        myCardInfo: { //选择我的银行卡
            id: "",
            bankLogo: "",
            bankCardName: "",
            bankCardNo: ""
        },
        personInfo: { //保存修改的个人信息
            Avatar: "",
            AvatarwBase:"",
            Name: "",
            Area: "",
            WorkLife: "",
            WorkIdea: "",
            WeChatNum: "",
            Contacts: "",
            ContactsTel: "",
            Email: "",
            Trade:""
        }
    },
    mutations: {
        /**
         * 在main.js例引入
         * import store from './store/index'
         * 把store挂载到全局
         * Vue.prototype.$store = store;
         */

        /**
         * 这里设置一个统一的方法,大部分用的vuex都是简单的改变一些状态,不需要写过多的mutations
         * 使用方法 例:
         * this.$store.update({"cityName":"北京"})
         * this.$store.commit('update',{"cityName":"北京"})
         * 
         *  config需要传入对象
         * @param {*} state 
         * @param {*Object} config 
         */
        update(state, config) {
            Object.keys(config).map((item, key) => {
                state[item] = config[item]
            })
        },
        // 设置选择银行名称
        setSelectCard(state, params) {
            state.selectCard = params;
        },
        // 设置选择我的银行卡
        setSelectMyCard(state, params) {
            state.selectMyCard = params;
        }

    }
})

export default store;