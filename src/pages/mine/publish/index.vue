<template>
  <div class="pagePublish">
      <!--顶部选项卡-->
      <div class="filterMenu bg_fff" style="padding:0">
          <ul class="menu bbLi__menu bbNo__menu li_33 flex center ">
            <li v-for="(item, index) in tablist" :key="index" @click="selectIndex(index,item.Id)" :class="{'active':tabindex==index}">
              <div class="item">{{item.name}}</div>
            </li>
          </ul>
      </div>
      <!--拼租列表-->
      <div class="boxSize column levelPanel storeList" v-if="tabindex==0">
          <!--item-->
          <div class="flex flexAlignCenter list_item bg_fff" v-for="(item,index) in pinzuList" :key="index">
              <input type="checkbox" class="checkbox-cart" checked v-if="showEdit" />
              <van-swipe-cell :right-width="65" async-close @close="onClose(arguments[0],item.Id)" class="swipe-cell">
                <van-cell-group>
                  <van-cell class="item" async-close @click="onClick" clickable>
                      <div class="outside">
                        <div class="pictrueAll">
                          <div class="pictrue img">
                            <img :src="item.PicNo" alt>
                          </div>
                        </div>
                        <div class="txtBox">
                          <p class="title ellipsis" style="color:#1a1a1a">
                            <span class="typeName">{{item.TypeName}}</span>{{item.Title}}
                          </p>
                          <p class="msgList">
                            <span class="msgItem">{{item.GladBuyerTrade}}</span>
                            <!-- <span class="msgItem">
                              100m
                              <span class="sup">2</span>
                            </span> -->
                            <span class="msgItem">{{item.FirstTags}}</span>
                            <span class="msgItem">{{item.SecondTags}}</span>
                          </p>
                          <p class="priceArea">
                            <span class="price">{{item.PropertyPrice}}</span>元/月
                          </p>
                        </div>
                      </div>
                  </van-cell>
                </van-cell-group>
                <span slot="right" class="van-swipe-cell__right">删除</span>
              </van-swipe-cell>
          </div>
      </div>
      <!--组建列表-->
      <div class="boxSize column levelPanel storeList" v-if="tabindex==1">
        <div class="flex flexAlignCenter list_item bg_fff" v-for="(item,index) in zujianList" :key="index">
          <input type="checkbox" class="checkbox-cart" checked v-if="showEdit" />
            <van-swipe-cell :right-width="65" async-close @close="onClose" class="swipe-cell">
              <van-cell-group>
                <van-cell class="item">
                    <div class="outside">
                      <!--类似头像小图片  组建-->
                      <div class="avatarbox mrr2">
                          <p class="avatar">公司</p>
                      </div>
                      <!--图片 其他-->
                      <!-- <div class="pictrueAll">
                        <div class="pictrue img">
                          <img src="/static/images/of/index_a1.jpg" alt>
                        </div>
                      </div> -->
                      <div class="txtBox">
                        <p class="title ellipsis" style="color:#1a1a1a">{{item.Title}}</p>
                        <p class="msgList">
                          <span class="msgItem">{{item.GladBuyerTrade}}</span>
                          <span class="msgItem">
                            100m
                          </span>
                          <span class="msgItem">3卡2独</span>
                          <span class="msgItem">{{item.Company}}</span>
                        </p>
                        <!--组建2-->
                      <p class="tipsList">
                          <span>股份合作</span>
                          <span>可使用公司资质</span>
                          <span>可挂牌</span>
                      </p>
                      </div>
                    </div>
                </van-cell>
              </van-cell-group>
              <span slot="right" class="van-swipe-cell__right">删除</span>
            </van-swipe-cell>
          </div>
      </div>
      <!--拼活动列表-->
      <div class="boxSize column levelPanel storeList" v-if="tabindex==2">
          <!--item-->
          <div class="flex flexAlignCenter list_item bg_fff" v-for="(item,index) in huodongList" :key="index">
              <input type="checkbox" class="checkbox-cart" checked v-if="showEdit" />
              <van-swipe-cell :right-width="65" async-close @close="onClose" class="swipe-cell">
                <van-cell-group>
                  <van-cell class="item" async-close @click="onClick" clickable>
                      <div class="outside">
                        <div class="pictrueAll">
                          <div class="pictrue img">
                            <img :src="item.PicNo" alt>
                          </div>
                        </div>
                        <div class="txtBox">
                          <p class="title ellipsis" style="color:#1a1a1a">
                            <span class="typeName">{{item.TypeName}}</span>{{item.Title}}
                          </p>
                          <p class="msgList">
                            <span class="msgItem">{{item.GladBuyerTrade}}</span>
                            <span class="msgItem">{{item.GladBuyArea}}</span>
                          </p>
                          <p class="priceArea">
                            <span class="price">{{item.PropertyPrice}}</span>场/月
                          </p>
                        </div>
                      </div>
                  </van-cell>
                </van-cell-group>
                <span slot="right" class="van-swipe-cell__right">删除</span>
              </van-swipe-cell>
          </div>
      </div>
      <!--房源列表-->
      <div class="boxSize column levelPanel storeList" v-if="tabindex==3">
          <!--item-->
          <div class="flex flexAlignCenter list_item bg_fff" v-for="(item,index) in fangList" :key="index">
              <input type="checkbox" class="checkbox-cart"  v-if="showEdit" />
              <van-swipe-cell :right-width="65" async-close @close="onClose" class="swipe-cell">
                <van-cell-group>
                  <van-cell class="item" async-close clickable>
                      <div class="outside">
                        <div class="pictrueAll">
                          <div class="pictrue img">
                            <img :src="item.PicNo" alt>
                          </div>
                        </div>
                        <div class="txtBox">
                          <p class="title ellipsis" style="color:#1a1a1a">
                            <span class="typeName">{{item.TypeName}}</span>{{item.Title}}
                          </p>
                          <p class="msgList">
                            <span class="msgItem">{{item.GladBuyerTrade}}</span>
                            <!-- <span class="msgItem">
                              100m
                              <span class="sup">2</span>
                            </span> -->
                            <span class="msgItem">{{item.GladBuyArea}}</span>
                            <span class="msgItem">{{item.PlanBuyArea}}</span>
                          </p>
                          <p class="priceArea">
                            <span class="price">{{item.PropertyPrice}}</span>元/月
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
      <div class="ftBtn fixed bm0 flex" v-if="showEdit">
          <div class="flex1 cancle" @click="setshowEdit">取消</div>
          <div class="flex center btn-right">
            <div class="btn bg_ff952e">刷新</div>
            <div class="btn bg_ed3435">置顶</div>
          </div>
      </div>
      <!-- 底部 -->
      <div class="ftBtn fixed bm0" v-else>
          <div class="btns" @click="setshowEdit">编辑</div>
      </div>
      <van-dialog id="van-dialog"/>
  </div>
</template>

<script>
import { post, valPhone, toLogin, getCurrentPageUrlWithArgs } from "@/utils";
import Dialog from "../../../../static/vant/dialog/dialog";
export default {
  data () {
    return {
      showEdit:false,
      tablist:[{"name":"拼租",Id:21},{"name":"组建",Id:22},{"name":"拼活动",Id:23},{"name":"房源",Id:24}],
      BrandId:21,//拼租 = 21,组建 = 22,拼活动 = 23,房源 = 24,
      tabindex:0,
      pinzuList:[],//拼租
      zujianList:[],//组建
      huodongList:[],//活动
      fangList:[],//房源
    }
  },
   onLoad() {
    this.curPage = getCurrentPageUrlWithArgs();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.setBarTitle();
    this.getMyPublish(0)
  },

  components: {
  },

  methods: {
    onClick(e){
      e.preventDefault();
      e.stopPropagation()
      console.log('e',e)
    },
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "我的发布"
      });//DragEvent
    },
    selectIndex(index,id){
      this.tabindex=index;
      this.BrandId=id;
      this.showEdit=false;
      this.getMyPublish(index)
    },
    setshowEdit(){
      this.showEdit=!this.showEdit;
    },
    //发布列表
    getMyPublish(index){
      post('Goods/MyPublish',{
        UserId: this.userId,
        Token: this.token,
        Page:1,
        BrandId:this.BrandId
      },this.curPage).then(res=>{
        if(res.code==0){
          if(index==0){
            this.pinzuList= res.data;
          }else if(index==1){
            this.zujianList= res.data;
          }else if(index==2){
            this.huodongList= res.data;
          }else{
            this.fangList= res.data;
          }
        }
      })
    },
    //删除发布
    deletePublish(id){
      post('Goods/DelMyPublish',{
        UserId: this.userId,
        Token: this.token,
        IdStr:id,
      },this.curPage).then(res=>{
        if(res.code==0){
          wx.showToast({
            title: '删除成功',
            icon: 'none',
            duration: 2000
          })
        }
      })
    },
    onClose(e,id) {
      console.log(e,id)
      const {position, instance} = e.mp.detail
      switch (position) {
        case 'left':
        case 'cell':
        // case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            instance.close();
            this.deletePublish(id);
          }).catch(() => {
            instance.close();
          });
          break;
      }
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
 .demo-swipe-cell {
    user-select: none;
  }
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
