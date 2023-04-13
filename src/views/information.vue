<template>
  <div class="info-container" id="app-info">
    <div class="info-container-left">
      <div class="info-container-title">私信</div>
      <div class="info-container-list">
        <table>
          <button>
            <tr>
              <td class="head-sculpture">头像<img src=""></td>
              <td class="news">消息内容</td>
            </tr>
          </button>
        </table>
      </div>
    </div>
    <div class="info-container-right">
      <div class="info-right-title"><span class="info-right-title-name">昵称</span> <span class="info-right-title-time">6小时前在线</span>
        <span class="info-right-title-exit">退出会话</span></div>
      <div class="info-right-con">消息内容</div>
      <div class="info-right-con-text"><input>表情 发送</div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "information",
  methods: {}
}
</script>

<style scoped>
.info-container {
  width: 750px;
  height: 500px;
  display: flex;
  flex-direction: row;
}

.info-container-left {
  width: 200px;
  height: 500px;
  background-color: white;
  border: 1px solid red;
}

.info-container-title {
  height: 35px;
  font-size: 20px;
  font-weight: bold;
  /*border: 1px solid red;*/
}

.info-container-list tr {
  height: 50px;
  /*border: 1px solid red;*/
}

.head-sculpture {
  height: 50px;
  width: 50px;
  /*border: 1px solid red;*/
}

.news {
  height: 50px;
  width: 300px;
  /*border: 1px solid red;*/
}

.info-container-right {
  width: 500px;
  height: 500px;
  /*display: none;*/
  border: 1px solid red;
}

.info-right-con {
  width: 500px;
  height: 400px;
  border: 1px solid red;
}

.info-right-title {
  width: 500px;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
}
.info-right-title-name{
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin: 15px;
  line-height: 50px;
  }
</style>