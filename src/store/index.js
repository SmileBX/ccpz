import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        // selectedFriends: []
        CityName:'',
        CityCode:'',
        KeyWords:'',
        lng:'',
        lat:'',
        Wallet:0,
        selectOneTags:[],
        selectTwoTags:[],
        CouponInfo:{
            CouponId:"",//优惠券ID
            Denomination:""//优惠券面值

        },
        InvoiceInfo:{
            InvoiceId:"",//发票Id
            InvoiceHeaderName:"",//发票抬头
        },
        
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
        personInfo:{
            Avatar:"",
            Name:  "",
            Area:  "",
            WorkLife: "",
            WorkIdea:  "",
            WeChatNum: "",
            Contacts: "",
            ContactsTel: "",
            Email: "",
            Trade:"",
            AvatarwBase:"",
        },
        userCompany:{//新增企业认证第一步保存数据
            Name: "",
            RegNum: "",
            LegalPerson: "",
            Idcard: "",
            IdcardPositive: "",
            IdcardNegative: "",
            BusinessLicense: "",
            OtherSeniority: ""
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
        },
        //选择优惠券
        setSelectCoupon(state,params){
            state.CouponInfo = params
        },
        //选择发票
        setSelectInvoice(state,params){
            state.InvoiceInfo = params
        }

    }
})

export default store;