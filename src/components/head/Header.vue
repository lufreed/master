<template>
    <div class="nav-head">
        <div class="nav-top">
            <div class="nav-left">
                <div class="nav-logo">
                    <div class="logo">XY</div>
                    <h4>校缘网</h4>
                </div>
                <div class="nav-title">
                    <li>
                        <a href="">喜欢</a>
                    </li>
                    <li>
                        <a href="">搜索</a>
                    </li>
                    <li>
                        <a href="">关注</a>
                    </li>
                    <li>
                        <a href="">消息</a>
                    </li>
                </div>
            </div>
            <div class="nav-right">
                <div class="nav-info modal-box-mask">
                    <a  @click="showModal = true" v-show="showLogin == true">登录</a>
                    <n-modal
                        v-model:show="showModal"
                        class="custom-card modal-mask"
                        preset="card"
                        :style="bodyStyle"
                        :on-after-enter="ModelShow"
                        :on-after-leave="closedModel"
                        :bordered="false"
                        :segmented="segmented"
                    >
                    <template #header-extra class="head-logo">
                        <span style="font-size: 12px;">请登录~~</span>
                    </template>
                    <n-card class="card-cont">
                        <n-tabs type="line" animated default-value="oasis" justify-content="space-evenly">
                            <n-tab-pane name="oasis" tab="扫码登录">
                                <img :src="imgUrl" alt="" class="wx-ewm">
                                <p class="wx-xtit">扫一扫,快速登录</p>
                            </n-tab-pane>
                        </n-tabs>
                    </n-card>
                    </n-modal>
                </div>
                <div class="nav-nick">{{ nickname }}</div>
                <div class="nav-user">
                    <n-dropdown :options="options" :on-select="onSelect">
                        <img :src="avatar" alt="">
                    </n-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {onBeforeMount, onMounted, ref} from "vue";
import {apis,apiBase,ftpUrl} from "@/global/config"
    export default{
      name:'Header',
      methods:{
              onSelect(key,option){
                console.log(key)
                console.log(option)
                if(key == 'profile'){
                  this.$router.push({path:"/personalData"})
                }else if(key == 'editProfile'){

                }else{

                }
              },
            ModelShow(){
                this.isClosedWebSocket = false
                this.$requestCenter.webLogin().then((res) =>{
                    this.imgUrl = res.data.wxMiniCodePath
                    if(res.code == 20041){
                        this.webToken = res.data.webToken
                        this.initWebSocket()
                    }
                })
            },
          closedModel(){
              let result = JSON.parse(localStorage.getItem("storage"))
            console.log(result)

              if (this.websock!=null){
                this.websock.close();
              }else {
                this.isClosedWebSocket = true
              }
              this.$requestCenter.deleteLoginWxMiniCodeImg({imgName:this.imgUrl})
          },
          initWebSocket: function () { // 建立连接
            // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https
            // var userId = store.getters.userInfo.id;
            if(this.webToken == -1){
              return
            }
            if (this.isClosedWebSocket){
              return;
            }
            var url = apiBase + apis.webLoginSocket + this.webToken
            url = url.replace("https://","wss://").replace("http://","ws://");
            this.websock = new WebSocket(url);
            this.websock.onopen = this.websocketonopen;
            // this.websock.send = this.websocketsend;
            this.websock.onerror = this.websocketonerror;
            this.websock.onmessage = this.websocketonmessage;
            this.websock.onclose = this.websocketclose;
          },
          // 连接成功后调用
          websocketonopen: function () {
          console.log("WebSocket连接成功");
          },
          // 发生错误时调用
          websocketonerror: function () {
          console.log("WebSocket连接发生错误");
          },
          // 给后端发消息时调用
          websocketsend: function (e) {
          this.websock.send(e)
          console.log("WebSocket连接发生错误");
          },
          // 接收后端消息
          // vue 客户端根据返回的cmd类型处理不同的业务响应
          websocketonmessage: function (e) {
          var data = eval("(" + e.data + ")");
          //处理订阅信息
            console.log("缓存")
            // localStorage.setItem("WZH-WebToken","888888888888")
            localStorage.setItem("WZH-WebToken",data.webToken)
            console.log(localStorage.getItem('WZH-WebToken'))
            // console.log(data)

            //用户头像和昵称
            console.log("用户信息",data)
            this.avatar = ftpUrl + data.user.headUrl
            this.nickname = data.user.name
            if(data.loginType == 1 || data.loginType == 2){
              this.$router.push({path:"https://yqwzh.ink/SchoolCupid/"})
              // location.href='https://yqwzh.ink/SchoolCupid/'
            }
              this.showModal = false
            this.showLogin=false

          },
          // 关闭连接时调用
          websocketclose: function (e) {
          console.log("connection closed (" + e.code + ")");
          },
        },
      created() {
        this.$requestCenter.checkWebToken().then((e)=>{
          if(e.data != null){
            this.avatar = ftpUrl +  e.data.headUrl
            this.nickname = e.data.name
            this.showLogin=false
          }
          console.log(e)
        })
      },
      setup(){
        return{
          options: [
            {
              label: "个人资料",
              key: "profile",
              // icon: renderIcon(UserIcon)
            },
            {
              label: "编辑资料",
              key: "editProfile",
              // icon: renderIcon(EditIcon)
            },
            {
              label: "退出登录",
              key: "logout",
              // icon: renderIcon(LogoutIcon)
            }
          ],
          bodyStyle: {
            width: '600px'
          },
          showModal: ref(false),
          imgUrl:ref(''),
          webToken:ref(-1),
          isClosedWebSocket:ref(false),
          avatar:ref('https://yqwzh.ink/SchoolCupid/defaultImg/default_headImg.png'),
          nickname:ref(''),
          showLogin:ref(true),
          // checkWebToken
        }
      },
    }
</script>

<style lang="less" scoped>
    li{
        list-style: none;
    }
    .nav-head{
        position: fixed;
        overflow: hidden;
        padding: 10px 0;
        background: rgba(0, 128, 0, 0.5);
        //background: linear-gradient(to right,#b3ffab 0%,#AAFFA9 160%);
        //background: linear-gradient(to right, #a6e4f5eb 0%, #0b9fffa8 50%, #cfa9ff 100%);
        //background: linear-gradient(to right,#C9D6FF 0%,#e2e2e2 100%);
        box-shadow: 1px 0px 4px #dedede;
        width: 100%;
        height: 74px;
        z-index: 99;
    }
    .nav-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: auto;
    }
    .nav-left{
        display: inline-flex;
        .nav-logo{
            display: flex;
            align-items: center;
            .logo{
                //background: linear-gradient(to right,#ef32d9 0%,#89fffd 100%);
                // background: linear-gradient(to right,#cc95c0 0%,#dbd4b4 50%,#7aa1d2 100%);
                 background: linear-gradient(to right,#dd3e54 0%,#6be585 100%);
                color: #fff;
                border-radius: 50%;
                padding: 14px;
                font-family: math;
                font-weight: 600;
                letter-spacing: 2px;
                box-shadow: 1px 1px 2px #dedede85;//1px 2px 4px #dedede;
            }
            h4{
                margin: 0;
                font-size: 20px;
                padding: 0 6px;
            }
        }
        .nav-title{
            margin-left: 20px;
            display: flex;
            align-items: center;
            a{
                text-decoration: none;
                color: #333;
                font-size: 18px;
            }
            a:hover{
                //color: #dd3e54;
                color: #fff;
                cursor: pointer;
            }
            li{
                padding: 0 20px;
            }
        }
    }
    .nav-right{
        display: flex;
        align-items: center;
        .nav-info{
            display: flex;
            align-items: center;
            margin: 0 20px;
            a{
              cursor: pointer;
              font-size: 18px;
            }
            a:hover{
                //color: #dd3e54;
              color: #fff;
            }
        }
        .nav-user{
            n-dropdown:hover{
                border: none;
            }
            img{
              width: 50px;
              height: 50px;
              border-radius: 50px;
              border: 1px solid #fff;
            }
        }
        .nav-nick{
               padding: 0 20px 0 0;
        }
    }
    .head-logo{
        width: 30px;
        height: 30px;
        .img{
            width: 15px;
            height: 15px;
        }
    }
    // tabs
    .card-tabs .n-tabs-nav--bar-type {
        padding-left: 4px;
    }
    .card-cont{
        text-align: center;
        .login{
            text-align: center;
        }
        .wx-ewm{
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }
        .wx-xtit{
            font-size: 12px;
            color: #bababa;
        }
        .other{
            padding: 20px 0 10px 0;
            h5{
                padding: 10px 0;
                color: #bababa;
            }
            .other-img {
                display: flex;
                align-items: center;
                justify-content: center;
                align-self: center;
                .email{
                    width: 42px;
                    height: 42px;
                    margin: 0 10px;
                }
            }
        }
    }
    //遮罩层
    .modal-box-mask{

    }
</style>