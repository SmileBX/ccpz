<template>
  <div class="index-list">
    <scroll-view
      scroll-y="true"
      class="moreHeight"
      :scroll-into-view="scrollTopId"
      @scroll="onListWrapScroll"
      ref="indexWrap"
      :scroll-top="scrollTop"
      id="scroll"
    >
      <!-- <ul class="index-list-wrap" ref="indexWrap" @scroll="onListWrapScroll"> -->
      
      <ul class="index-list-wrap">
        <li
          v-for="(group,nindex) in data"
          :key="nindex"
          class="index-group"
          ref="indexGroup"
          :data-title="group.title"
          :class="'itemClient'+(nindex*1)"
        >
          <h3 class="index-group-title">{{group.title}}</h3>
          <ul>
            <!-- <li @click="clickItem(item)" v-for="(item,sindex) in group.items" :key="sindex" class="index-group-item">
                <img v-if="useLazyLoad"  :src="item.avatar" class="avatar" alt="">
                <img v-else :src="item.avatar" class="avatar" alt="">
                <span class="name">{{item.name}}</span>
            </li>-->

            <van-swipe-cell :right-width="[hasSetStar ? 130 : 65]"  class="swipe-cell"  v-for="(item,sindex) in group.items" :key="sindex">
                <van-cell-group>
                  <van-cell>
                    <li class="index-group-item" @click="onClick(item)">
                      <!-- <img v-if="useLazyLoad"  :src="item.avatar" class="avatar" alt=""> -->
                      <img :src="item.Headimgurl" class="avatar" alt="">
                      <span class="name">{{item.NickName}}</span>
                    </li>
                  </van-cell>
                </van-cell-group>
                <span slot="right" v-if="hasSetStar" class="van-swipe-cell__right van-swipe-cell__right1" @click.stop="resetStar(item.Id,item.IsStar,nindex,sindex)"><img v-if="item.IsStar===0" src="/static/images/icons/star.png" class="icon-star" alt=""><img v-if="item.IsStar===1" src="/static/images/icons/star2.png" class="icon-star" alt=""></span>
                <span slot="right" class="van-swipe-cell__right" @click.stop="Delete(item.Id,nindex,sindex)">删除</span>
            </van-swipe-cell>
          </ul>
        </li>
      </ul>
    </scroll-view>
    <!--字母-->
    <div class="index-nav">
      <ul>
        <li
          v-for="(item,index) in indexList"
          :key="index"
          @touchstart.prevent="_onTouchStartIndex(index)"
          :data-index="index"
          class="nav-item"
          :class="{'active':currentIndex===index}"
        >{{item}}</li>
      </ul>
    </div>
    <!-- <transition name="fade">
      <div class="index-indicator" v-show="moving">{{currentIndicator}}</div>
    </transition>-->
  </div>
</template>
<script type="text/javascript">
const INDICATOR_INDURATION = 200;
const TITLE_HEIGHT = 30;

export default {
  // name: 'index-list',
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      }
    },
    hasSetStar:{
      type: Boolean,
      default: false
    },
    useLazyLoad: {
      type: Boolean,
      default: false
    }
  },
  // props:["playerList"],
  data() {
    return {
      scrollTopId: "", //置顶id----没用上
      scrollTop: "",
      currentIndex: 0,
      moving: false,
      currentIndicator: ""
    };
  },
  watch: {
    currentIndex(newVal) {
      clearTimeout(this.timer);
      this.currentIndicator = this.indexList[this.currentIndex];
      this.moving = true;
      this.timer = setTimeout(() => {
        this.moving = false;
      }, INDICATOR_INDURATION);
    }
  },
  computed: {
    indexList() {
      //console.log(this.data,"this.data")
      return this.data.map(group => {
        return group.title.substring(0, 1);
      });
    }
  },
  onShow() {
    this.listHeight = [];
    this.timer = null;
    this.scrollTimer = null;
    console.log(this.data,'data')
    if(this.data.length>0){
    // setTimeout(() => {
      this._calculateHeight();
    // }, 2000);
    }
  },
  methods: {
    
    _calculateHeight() {
      this.listHeight = [];
      const list = this.data;
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < list.length; i++) {
        let item = list[i];
        var query = wx.createSelectorQuery();
        query
          .select(".itemClient" + i)
          .boundingClientRect(rect => {
            if(rect){
            height += rect.height;
            this.listHeight.push(height);
            }
          })
          .exec();
      }
    },
    _onTouchStartIndex(index) {
          this.scrollTop = this.listHeight[index];
      // console.log(index,this.listHeight,this.listHeight[index],"this.listHeight[index]")
      // this.currentIndex = index;
      // var query = wx.createSelectorQuery();
      // query
      //   .select("#scroll")
      //   .boundingClientRect(rect => {
      //     this.scrollTop = this.listHeight[index];
      //   })
      //   .exec();
    },
    clickItem(e, item) {
      console.log(e);
      //console.log(666666666)
      this.$emit("choose", item);
    },
    // 点击列表事件
    onClick(item){
      this.$emit("onClick", item);
    },
    resetStar(id, isStar, pIndex, index) {
      this.$emit("setStar", id, isStar, pIndex, index);
    },
    Delete(id, pIndex, index) {
      this.$emit("btnDel", id, pIndex, index);
    },
    onListWrapScroll(e) {
      // console.log(e,"+++++++++++++++++++++++")
      clearTimeout(this.scrollTimer);
      this.scrollTimer = setTimeout(() => {
        // let scrollTop = this.$refs.indexWrap.scrollTop
        let scrollTop = e.mp.detail.scrollTop;
        console.log(this.listHeight,"scrollTop")
        // let scrollTop = this.scrollTopId
        const listHeight = this.listHeight;
        for (let i = 0; i < listHeight.length - 1; i++) {
          if (
            scrollTop <= listHeight[i + 1] - TITLE_HEIGHT &&
            scrollTop >= listHeight[i]
          ) {
            this.currentIndex = i;
            // console.log(this.currentIndex,"i+++++++++")
            return;
          }
        }
      }, 10);
    }
  },
  // destroyed() {
  //   clearTimeout(this.timer)
  //   clearTimeout(this.scrollTimer)
  // }
};
</script>

<style lang="scss" scoped>
.moreHeight{
  height:calc(100vh-700rpx)
}
.index-list {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  .index-list-wrap {
    // height: 100%;
    // overflow: auto;
    -webkit-overflow-scrolling: touch; //#issue-368550974
  }

  .index-group {
    padding-bottom: 20rpx;
  }

  .index-group-title {
    height: 60rpx;
    line-height: 60rpx;
    padding-left: 40rpx;
    font-size: 28rpx;
    color: #333;
    background: #f2f2f2;
  }

  .index-group-item {
    display: flex;
    align-items: center;
    padding: 20rpx 0 0 30rpx;
    list-style: none;
    .avatar {
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
    }

    .name {
      margin-left: 30rpx;
      color: #333;
      font-size: 28rpx;
    }
  }
  .index-group-item:after {
    position: absolute;
    content: "";
    height: 1px;
    width: 100%;
    background: #ececec;
    bottom: 0;
  }
  .index-nav {
    position: absolute;
    right: 15rpx;
    top: 42%;
    z-index: 100;
    width: 40rpx;
    padding: 30rpx 0;
    text-align: center;
    border-radius: 10;
    background: transparent;
    transform: translateY(-50%);

    .nav-item {
      padding: 5rpx;
      font-size: 22rpx;
      color: #333;
      list-style: none;

      &.active {
        color: #fff;
        width: 30rpx;
        height: 30rpx;
        border-radius: 50%;
        line-height: 30rpx;
        background: #ff9325;
      }
    }
  }

  .index-indicator {
    position: absolute;
    width: 100rpx;
    height: 100rpx;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 100rpx;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 35rpx;
    border-radius: 10rpx;
    pointer-events: none;
  }
}

.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.van-swipe-cell__left,
.van-swipe-cell__right {
  display: inline-block;
  // height: 100%;
  width: 130rpx;
  height: 120rpx;
  font-size: 28rpx;
  line-height: 120rpx;
  color: #fff;
  text-align: center;
  background-color: #f44;
  position: relative;
  vertical-align: top;
  .icon-star {
    width: 40rpx;
    height: 40rpx;
    position: absolute;
    top: 50%;

    left: 0;
    right: 0;
    margin: 0 auto;
    margin-top: -20rpx;
  }
}
.van-swipe-cell__right1 {
  background-color: #ff952e;
}
.index-group {
  padding-bottom: 0 !important;
}
.swipe-cell .index-group-item {
  padding: 0;
}
</style>
