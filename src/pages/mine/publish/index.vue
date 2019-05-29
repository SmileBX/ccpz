<template>
  <div class="pagePublish">
      <div class="filterMenu bg_fff" style="padding:0">
          <ul class="menu bbLi__menu bbNo__menu li_33 flex center ">
            <li class="active">
              <div class="item">拼租</div>
            </li>
            <li>
              <div class="item">组建</div>
            </li>
            <li>
              <div class="item">拼活动</div>
            </li>
            <li>
              <div class="item">房源</div>
            </li>
          </ul>
      </div>
      <!--组列表-->
      <div class="boxSize column levelPanel storeList">
          <!--item-->
          <div class="flex flexAlignCenter list_item bg_fff">
              <input type="checkbox" class="checkbox-cart" checked v-if="showEdit" />
              <van-swipe-cell :right-width="65" :on-close="onClose"    class="swipe-cell">
                <van-cell-group>
                  <van-cell class="item" @click="onClick" >
                      <div class="outside">
                        <div class="pictrueAll">
                          <div class="pictrue img">
                            <img src="/static/images/of/index_a1.jpg" alt>
                          </div>
                        </div>
                        <div class="txtBox">
                          <p class="title ellipsis" style="color:#1a1a1a">
                            <span class="typeName">办公室</span>星河世纪大厦
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
                          <p class="priceArea">
                            <span class="price">3000</span>元/月
                          </p>
                        </div>
                      </div>
                  </van-cell>
                </van-cell-group>
                <span slot="right" class="van-swipe-cell__right">删除</span>
              </van-swipe-cell>
          </div>
          <div class="flex flexAlignCenter list_item bg_fff">
              <van-swipe-cell :right-width="65" :on-close="onClose"       class="swipe-cell">
                <van-cell-group>
                  <van-cell class="item">
                      <div class="outside">
                        <!--类似头像小图片  组建-->
                        <div class="avatarbox mrr2" v-if="showZujian">
                            <p class="avatar">公司</p>
                        </div>
                        <!--图片 其他-->
                        <div class="pictrueAll" v-else>
                          <div class="pictrue img">
                            <img src="/static/images/of/index_a1.jpg" alt>
                          </div>
                        </div>
                        <div class="txtBox">
                          <p class="title ellipsis" style="color:#1a1a1a">
                            <span class="typeName">办公室</span>星河世纪大厦
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
                          <!--组建2-->
                        <p class="tipsList" v-if="showZujian">
                            <span>股份合作</span>
                            <span>可使用公司资质</span>
                            <span>可挂牌</span>
                          </p>
                          <!--拼租 房源1-->
                          <p class="priceArea" v-else>
                            <span class="price">3000</span>元/月
                          </p>
                          
                        </div>
                      </div>
                  </van-cell>
                </van-cell-group>
                <span slot="right" class="van-swipe-cell__right">删除</span>
              </van-swipe-cell>
          </div>
      </div>
      <!-- 拼租 置顶 按钮底部 -->
      <div class="ftBtn fixed bm0 flex">
          <div class="flex1 cancle">取消</div>
          <div class="flex center btn-right">
            <div class="btn bg_ff952e">刷新</div>
            <div class="btn bg_ed3435">置顶</div>
          </div>
      </div>
      <!-- 底部 -->
      <!-- <div class="ftBtn fixed bm0">
          <div class="btns">编辑</div>
      </div> -->
      <van-dialog id="van-dialog"/>
  </div>
</template>

<script>
import Dialog from "../../../../static/vant/dialog/dialog";
export default {
  data () {
    return {
      showZujian:true,
      showEdit:false
    }
  },
   onLoad() {
    this.setBarTitle();
  },

  components: {
  },

  methods: {
    onClick(e){
      console.log('e',e)
    },
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "新建分组"
      });//DragEvent
    },
    onClose(event){
      console.log(event)
    }
    // onClose(clickPosition, instance) {
    //   console.log('123',clickPosition)
    //   return false;
    //   switch (clickPosition) {
    //     case 'left':
    //     case 'cell':
    //     case 'outside':
    //       instance.close();
    //       break;
    //     case 'right':
    //       Dialog.confirm({
    //         message: '确定删除吗？'
    //       }).then(() => {
    //         instance.close();
    //       });
    //       break;
    //   }
    // }

  },

  created () {
    // let app = getApp()
  }
}
</script>
<style lang='scss' scoped>
@import "./index";
.van-swipe-cell__left,
.van-swipe-cell__right {
  display: inline-block;
  width: 130rpx;
  height: 240rpx;
  font-size: 28rpx;
  line-height: 240rpx;
  color: #fff;
  text-align: center;
  background-color: #f44;
}

.levelPanel .item .outside{
  padding:0
}
.storeList.levelPanel .item .outside{
  padding:0
}
.txtBox{
  text-align:left;
  .priceArea{
    margin-top:30rpx
  }
}
.ftBtn{
  height: 80rpx;
  width:100%;
  background: #fff;
  .cancle{
    line-height:80rpx;
    padding-left:30rpx;
  }
}
.btn-right{
  width:50%;
  .btn{
      height: 80rpx;
      line-height: 80rpx;
      color:#fff;
      width:100%;
      text-align:center;
  }
}
.btns{
  position:absolute;
  right:0;
  height: 80rpx;
  line-height: 80rpx;
  width:20%;
  background:#ff9325;
  color:#fff;
  text-align:center;
}
.avatarbox{
  background:#ff9325;
  border-radius:50%;
  .avatar{
    color:#fff;
    width:80rpx;
    height:80rpx;
    line-height:80rpx;
    font-size:24rpx;
    text-align:center;
  }
}
.list_item{
  padding-left:15rpx;
}
.filterMenu{
  color:#1a1a1a
}
</style>
