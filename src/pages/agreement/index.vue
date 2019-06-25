<template>
    <div class="pageContent">
        <div class="dataHtml" v-if="hasData">
            <div v-html="data.Content"></div>
        </div>
    </div>
</template>
<script>
import { post, toLogin, getCurrentPageUrlWithArgs, trim } from "@/utils";
export default {
    onLoad(){
      this.setBarTitle();
    },
    onShow(){
       this.AuthServiceTreat();
    },
    data() {
        return {
            data:{},
            hasData:false
        }
    },
    methods: {
        setBarTitle() {
            wx.setNavigationBarTitle({
                title: "认证服务协议"
            });
        },
        AuthServiceTreat(){
            let that = this;
            post("About/AuthServiceTreat",{}).then(res => {
               if(res.code===0){
                 that.data = res.data;
                 that.hasData = true;
               }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.dataHtml{
    font-size: 30rpx;
    padding:30rpx;
}
</style>
