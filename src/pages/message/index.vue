<template>
  <div class="page bg_fff borderTop" v-if="isData">
    <!--通知-->
    <div class=padwid>
        <div class="flex avatarhead flexAlignCenter boxSize" @click="toNociceList">
            <div class="circlePosition">
                <div class="avatarbox">
                      <img src="/static/images/icons/default.jpg" alt="" class="avatar">
                </div>
                <span class="circleNum msgnum" v-if="messageInfo.SysNotice.Count>0">{{messageInfo.SysNotice.Count}}</span>
            </div>
            <div class="flex flexColumn flex1">
                <div class="flex">
                    <span class="flex1 font32">系统通知</span>
                    <span class="font_four">{{messageInfo.SysNotice.PubTime}}</span>
                </div>
                <div class="fontColor text_space">{{messageInfo.SysNotice.Title}}</div>
            </div>
            
        </div>
        <div class="flex flexAlignCenter p1 boxSize" @click="seePermistion">
            <div class="avatarbox">
                  <img v-if="messageInfo.friend_req.Headimgurl" :src="messageInfo.friend_req.Headimgurl" alt="" class="avatar">
                  <img v-else src="/static/images/icons/pinzu.jpg" alt="" class="avatar">
            </div>
            <div class="flex1 flex circlePosition">
                <span class="flex1 font32">好友请求</span>
                <span class="circleNum onlynum" v-if="messageInfo.friend_req.Count>0">{{messageInfo.friend_req.Count}}</span>
            </div>
        </div>
    </div>
    <div class="slidebg"></div>
    <!--消息列表-->
    <div class="padwid" v-if="messageInfo.friend_new.length>0">
        <div class="flex avatarhead flexAlignCenter boxSize p2" @click="goChat(item.FriendId)" v-for="(item,index) in messageInfo.friend_new" :key="index">
            <div class="circlePosition">
                <div class="avatarbox">
                  <img :src="item.Headimgurl" alt="" class="avatar">
                </div>
                <span class="circleNum msgnum" v-if="item.Count>0">{{item.Count }}</span>
            </div>
            <div class="flex flexColumn flex1">
                <div class="flex">
                    <span class="flex1 font32">{{item.NickName}}</span>
                    <span class="font_four">{{item.AddTime}}</span>
                </div>
                <div class="fontColor">{{item.Info}}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { post,getCurrentPageUrlWithArgs} from "@/utils";
export default {
  data () {
    return {
      userId:'',
      token:'',
      curPage:'',
      isData:false,//是否开始渲染
      messageInfo:{}
    }
  },
   onLoad() {
    this.setBarTitle();
  },
  onShow(){
    this.userId = wx.getStorageSync("userId");
    this.token = wx.getStorageSync("token");
    this.curPage = getCurrentPageUrlWithArgs();
    console.log(this.curPage)
    this.getMessage()
  },

  components: {
  },

  methods: {
    setBarTitle() {
      wx.setNavigationBarTitle({
        title: "消息"
      });
    },
    //获取消息
    getMessage(){
      post('User/GetMessageList',{
          UserId: this.userId,
          Token: this.token
      },this.curPage).then(res=>{
          console.log(res)
          this.messageInfo = res.data
          this.isData = true
      })
    },
    //进入聊天室
    goChat(fid){
        wx.navigateTo({url: '/pages/messages/chatRoom/main?FriendId='+fid})
    },
    //查看系统通知列表
    toNociceList(){
      wx.navigateTo({url:'/pages/messages/topNewsList/main?url=message'})
    },
    //查看好友请求列表
     seePermistion(){
        wx.navigateTo({url: '/pages/messages/newPromise/main'})
    },
   
  },

  created () {
    // let app = getApp()
  }
}
</script>
