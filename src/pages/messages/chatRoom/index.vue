<template>
  <div class="page borderTop charRoom" id="charRoom" 
    :class="{'showMessage':showMessage,'showBtn':showBtn}">
    <!--聊天列表-->
    <div class="padwid" @click="isShowMask=false">
      <div v-for="(msg,msgIndex) in chatStatu.info" :key="msgIndex">
        <div class="flex flexAlignCenter boxSize p2 justifyContentEnd plr20" v-if="msg.MsgId=='a'">
          <div class="flex flexAlignEnd justifyContentEnd mrr2" style="width:75%;">
            <span class="fontColor" @click="scrollBottom">已读</span>
            <div class="tagmsg">
              <p v-if="msg.Info" class="boxSize">{{msg.Info}}</p>
              <img class="sendImg" mode="widthFix"  
                v-if="msg.Pic" :src="msg.Pic" alt="" 
                @click="previewImg(msg.Pic)" />
              <span class="sj rsj"></span>
            </div>
          </div>
          <div class="avatarbox mr0" v-if="chatStatu.a">
            <img :src="chatStatu.a.Headimgurl" alt class="avatar">
          </div>
        </div>
        <div class="flex flexAlignCenter boxSize p2 justifyContentStart" v-if="msg.MsgId=='b'">
          <div class="avatarbox mr0" v-if="chatStatu.b">
            <img :src="chatStatu.b.Headimgurl" alt class="avatar">
          </div>
          <div class="flex flexAlignEnd mrl2" style="width:75%">
            <!-- <span class="fontColor">已读</span> -->
            <div class="tagmsg bg_fff">
              <span class="sj lsj"></span>
              <p v-if="msg.Info" class="boxSize" style="color:#1a1a1a">{{msg.Info}}</p>
              <image class="sendImg" mode="widthFix" 
              v-if="msg.Pic" :src="msg.Pic" alt=""
              @click="previewImg(msg.Pic)"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--底部按钮 输入框 下拉按钮-->
    <div class="bottomicon" v-if="!isTakePhoto">
      <!--常用语按钮-->
      <div class="borderTop usedMes">
        <span
          class="bg_fff"
          @click="getMessage(item.Id)"
          v-for="(item,tindex) in messageType"
          :key="tindex"
        >{{item.Name}}</span>
      </div>
      <div class="inputbtn flex flexAlignCenter bg_fff">
        <input
          type="text"
          placeholder="想对他说点什么呢？"
          class="flex1"
          v-model="sendInfo"
          confirm-type="send"
          confirm-hold
          :focus="true"
          @confirm="sendMessage"
        >
        <div class="flex flexAlignCenter">
          <img src="/static/images/icons/smile.jpg" alt class="logimg">
          <img src="/static/images/icons/add.jpg" alt class="logimg" @click="showPicBtn">
        </div>
      </div>
      <!--按钮组-->
      <div v-if="showBtn">
        <div v-if="isshow" class="icon_box flex">
          <div class="flex flexAlignCenter flexColumn" @click="chosseImg('camera')">
            <img src="/static/images/icons/photo.jpg" alt class="icon_put">
            <p class="fontColor">拍照</p>
          </div>
          <div class="flex flexAlignCenter flexColumn" @click="chosseImg('album')">
            <img src="/static/images/icons/albrem.jpg" alt class="icon_put">
            <p class="fontColor">相册</p>
          </div>
          <div class="flex flexAlignCenter flexColumn">
            <img src="/static/images/icons/location.jpg" alt class="icon_put">
            <p class="fontColor">位置</p>
          </div>
        </div>
      </div>
      <!--常用语-->
      <ul class="messagelist" v-if="showMessage">
        <scroll-view scroll-y @scrolltolower="loadMore" class="scroll_height">
          <van-swipe-cell
            :right-width="65"
            class="swipe-cell"
            async-close
            v-for="(item,index) in messageList"
            :key="index"
          >
            <van-cell-group>
              <van-cell class="chat" @click="onClick(item.Name)">
                <li class="index-group-item">{{item.Name}}</li>
              </van-cell>
            </van-cell-group>
            <span
              slot="right"
              class="van-swipe-cell__right"
              @click.stop="Delete(item.GroupId,item.Id,index)"
            >删除</span>
          </van-swipe-cell>

          <van-swipe-cell class="swipe-cell" v-if="messageList.length<1">
            <div class="noData">还没有常用语呢!</div>
          </van-swipe-cell>
        </scroll-view>
        <li style="color:red" @click="isShowMask=true">添加常用语</li>
      </ul>
    </div>
    <!--弹层-->
    <div class="mask" v-if="isShowMask" catchtouchmove="true" @click="isShowMask=false"></div>
    <div class="centerMask" v-if="isShowMask">
      <div class="fontBold mestitle">新增常用语</div>
      <textarea name id cols="30" rows="10" fixed placeholder="输入您的常用回复" v-model="useText"></textarea>
      <div class="flex mesbtn borderTop">
        <p @click="saveText">保存</p>
        <p class="fontColor99" @click="sendText">保存并发送</p>
      </div>
    </div>
  </div>
</template>

<script>
import { post, getCurrentPageUrlWithArgs } from "@/utils";
export default {
  data() {
    return {
      userId: "",
      token: "",
      curPage: "",
      FriendId: "", //好友ID
      isshow: true,
      isShowMask: false, //是否展示遮罩层
      showBtn: false, //展示图片组
      showMessage: false, //展示常用列表
      messageType: [], //常用语分类
      messageList: [], //常用语列表
      addId: "", //添加常用语的标识
      useText: "", //新增的常用语
      chatStatu: {}, //聊天信息
      sendInfo: "", //发送消息的内容
      socketTaskStatus: false,
      // 图片
      imgPathArr: [], //临时路径
      isTakePhoto:false, //是否开启拍照
    };
  },
  onShow() {
    this.curPage = getCurrentPageUrlWithArgs();
  },
  onLoad() {
    this.setBarTitle();
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.initData();
    this.sendInfo = "";
    this.messageList = [];
    this.messageType = [];
    this.FriendId = this.$root.$mp.query.FriendId;
    console.log(this.FriendId);
    this.getMessageType();
    this.getFriendMessage();
  },

  components: {},

  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "对话框"
      });
    },
    initData() {
      this.showBtn = false;
      this.showMessage = false;
      this.isShowMask = false;
      this.isTakePhoto = false;
      this.addId = "";
      this.useText = "";
    },
    //获取好友消息
    getFriendMessage() {
      // wx.connectSocket({
      //   url:'ws://ccapi.wtvxin.com/api/User/Readfriend_new'
      // })
      // wx.onSocketOpen((res)=>{
      //   console.log(res)
      // })
      // return false;
      post(
        "User/Readfriend_new",
        {
          UserId: this.userId,
          Token: this.token,
          FriendId: this.FriendId * 1,
          Page: 1
        },
        this.curPage
      ).then(res => {
        if (res.code == 0) {
          let info = [];
          res.data.info.map(item => {
            info.unshift(item);
          });
          res.data.info = info;
          this.chatStatu = res.data;
          this.scrollBottom();
        }
      });
    },
    // 发送消息
    async sendMessage(imgBase) {
      let sendInfo=""
      if(!imgBase){
        sendInfo = this.sendInfo
      }
      const res = await post("User/Sendfriend_new", {
        UserId: this.userId,
        Token: this.token,
        FriendId: this.FriendId * 1,
        Info: sendInfo,
        Pic:imgBase
      });
      if (res.code * 1 === 0) {
        this.sendInfo = "";
        this.getFriendMessage();
      }
    },
    // **************************常用语************************
    //获取常用语分类
    getMessageType() {
      post("User/GetUser_wordtype").then(res => {
        if (res.code == 0) {
          this.messageType = res.data;
        }
        // console.log(res,"+++++++++++++++++")
      });
    },
    //点击常用语，获取常用语列表
    getMessage(id) {
      // this.initData();
      this.showBtn = false;
      this.isShowMask = false;
      if (this.addId == id) {
        this.showMessage = !this.showMessage;
        return false;
      } else {
        this.showMessage = true;
      }
      this.scrollBottom();
      this.addId = id;
      post(
        "User/GetUser_word",
        {
          GroupId: id,
          UserId: this.userId,
          Token: this.token
        },
        this.curPage
      ).then(res => {
        if (res.code == 0) {
          this.messageList = res.data;
        }
        // console.log(res,"+++++++++++++++++")
      });
    },
    // 常用语点击
    onClick(name) {
      this.sendInfo = name;
      this.sendMessage();
    },
    //保存常用语
    saveText() {
      // console.log(this.addId,"addId")
      let that = this;
      post(
        "User/AddUser_word",
        {
          UserId: that.userId,
          Token: that.token,
          GroupId: that.addId,
          Info: that.useText
        },
        that.curPage
      ).then(res => {
        if (res.code === 0) {
          wx.showToast({
            title: "新增成功!",
            icon: "none",
            duration: 1500,
            success: function() {
              that.isShowMask = false;
              that.getMessage(that.addId);
              console.log(that.messageList, "that.messageList");
              // that.messageList.reverse()
            }
          });
        }
      });
    },
    // 保存并发送常用语
    sendText() {
      this.saveText();
      this.sendInfo = this.useText;
      this.sendMessage();
      this.isShowMask = false;
    },
    //删除常用语
    Delete(GroupId, Id, index) {
      let that = this;
      wx.showModal({
        title: "是否确定删除？",
        success(res) {
          if (res.confirm) {
            that.DelMessageItem(GroupId, Id, index);
          } else if (res.cancel) {
          }
        }
      });
    },
    //确定删除常用语
    DelMessageItem(GroupId, Id, index) {
      let that = this;
      post(
        "User/DelUser_word",
        {
          UserId: this.userId,
          Token: this.token,
          GroupId: GroupId,
          Id: Id
        },
        this.curPage
      ).then(res => {
        // console.log(res,"/////////////////////////////")
        if (res.code === 0) {
          wx.showToast({
            title: "删除成功!",
            icon: "none",
            duration: 1500,
            success: function() {
              that.messageList.splice(index, 1);
              that.getMessage(GroupId);
            }
          });
        }
      });
    },
    // **************************常用语End************************
    //**************************拍照，图片************************** */
    // 显示拍照
    showPicBtn() {
      this.showMessage = false;
      this.isShowMask = false;
      this.showBtn = !this.showBtn;
      this.scrollBottom();
    },
    // 选择图片
    chosseImg(sourceType) {
      const that = this;
      let num = 8; //上传的图片最大数量
      wx.chooseImage({
        count: num, //最大图片数量=最大数量-临时路径的数量
        sizeType: ["compressed"], //图片尺寸 original--原图；compressed--压缩图
        sourceType: [sourceType], //选择图片的位置 album--相册选择, 'camera--使用相机
        success: res => {
          this.imgPathArr = res.tempFilePaths;
          console.log(res.tempFilePaths, "base");
          that.updateImg();
        }
      });
    },
    //根据临时路径，获取图片base64码。
    async updateImg() {
      const that = this;
      // 根据临时路径数组imgPathArr获取base64图片
      for (let i = 0; i < this.imgPathArr.length; i +=1) {
        const item = this.imgPathArr[i];
        //异步方法
        const res = wx.getFileSystemManager().readFileSync(item, "base64");
            //成功的回调
            const imgBase = "data:image/png;base64," + res.toString();
            const ress = await this.sendMessage(imgBase)
      }
    },
    // 预览图片
    previewImg(img){
        wx.previewImage({
          urls:[img]
        })
    },
    //**************************拍照，图片End************************** */
    // 滚动到底部
    scrollBottom() {
      wx
        .createSelectorQuery()
        .select("#charRoom")
        .boundingClientRect(function(rect) {
          // 使页面滚动到底部
          console.log(rect, "滚动到底部");
          wx.pageScrollTo({
            scrollTop: rect.height,
            duration: 0
          });
        })
        .exec();
    }
  },
  created() {
    // let app = getApp()
  }
};
</script>
<style scoped lang="scss">
.padwid {
  // height:86vh;
  // width:100%;
  // box-sizing:border-box;
  // padding-bottom:180rpx;
}
.showMessage {
  padding-bottom: 530rpx !important;
}
.showBtn {
  padding-bottom: 400rpx !important;
}
.plr20 {
  padding: 30rpx !important;
}
.charRoom {
  padding-bottom: 180rpx;
}
.bottomicon {
  background: #f4f4f4;
}
.usedMes {
  padding: 20rpx 30rpx !important;
  span {
    border-radius: 20rpx;
    padding: 10rpx 22rpx;
    font-size: 26rpx;
    margin-left: 10rpx;
  }
}
.messagelist {
  height: 350rpx;
  .scroll_height {
    height: 250rpx;
  }
  li {
    height: 80rpx;
    line-height: 80rpx;
    text-align: center;
    color: #1a1a1a;
    border-top: 1rpx solid #ececec;
  }
}
.centerMask {
  width: 650rpx;
  height: 400rpx;
  top: 50%;
  left: 50rpx;
  margin-top: -200rpx;
  position: fixed;
  z-index: 9999;
  background: #fff;
  border-radius: 10rpx;
  padding: 0 30rpx;
  box-sizing: border-box;
  textarea {
    margin-top: 20rpx;
    height: 200rpx;
  }
  .mestitle {
    margin-top: 30rpx;
  }
}
.mesbtn {
  p {
    width: 50%;
    padding: 30rpx;
    box-sizing: border-box;
    text-align: center;
  }
  p:last-child {
    border-left: 1rpx solid #ececec;
  }
}
.van-swipe-cell__left,
.van-swipe-cell__right {
  display: inline-block;
  width: 130rpx;
  height: 80rpx;
  font-size: 28rpx;
  line-height: 80rpx;
  color: #fff;
  text-align: center;
  background-color: #f44;
}
.index-group-item {
  padding: 0;
}
.noData {
  color: #999;
}
.sendImg{
  width:200rpx;
  height:auto;
}
// 拍照
.takePhoto{
  background:#000;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index:99999;
  .photo{
    width: 100%;
     height: 90vh;
  }
  .take{
    color:#fff;
    font-size:40rpx;
    width:100%;
     height: 10vh;
     line-height: 10vh;
     display:flex;
     align-items:center;
     justify-content:center;
     img{
       border-radius:50%;
       width:80rpx;
       height:80rpx;
     }
  }
}
</style>
