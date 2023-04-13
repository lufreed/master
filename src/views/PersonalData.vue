<template>
  <div class="person-wrap">
    <n-row gutter="12">
      <n-col :span="3" :offset="2">
        <div class="left">
          <n-collapse>
            <n-collapse-item title="个人资料" name="1">
              <div>信息编辑</div>
              <div style="margin-top: 3px">定义标签</div>
            </n-collapse-item>
            <n-collapse-item title="待定" name="2">
              <div>待定</div>
            </n-collapse-item>
            <n-collapse-item title="待定" name="3">
              <div>待定</div>
            </n-collapse-item>
          </n-collapse>
        </div>
      </n-col>
      <n-col :span="6" :offset="2">
        <div class="right">
          <n-space vertical>
            <div><a>个人昵称：</a><a class="red">*</a></div>
            <n-input type="text" v-model:value="user.name" placeholder=" " />
            <div class="ro"><a>性别：</a><a class="red">*</a>
              <n-switch v-model:value="user.sex"  :rail-style="railStyle" style="margin-left:10px">
                <template #checked>女生</template>
                <template #unchecked>男生</template>
              </n-switch>
            </div>
            <div><a>身高：</a><a class="red">*</a></div>
            <n-input type="number" v-model:value="user.height" placeholder=" " />
            <div><a>体重：</a><a class="red">*</a></div>
            <n-input type="number" v-model:value="user.weight" placeholder=" " />
            <div><a>出生日期：</a><a class="red">*</a></div>
            <n-date-picker type="date" v-model:value="user.timestamp"  placeholder=" "/>
            <!--          <pre>{{ JSON.stringify(timestamp) }}</pre>-->
            <a>电话号码：</a>
            <n-input type="number" v-model:value="user.phone" placeholder=" " maxlength="11"/>
            <a>邮箱：</a>
            <n-auto-complete
                v-model:value="emailValue"
                :input-props="{
                 autocomplete: 'disabled'}"
                :options="emailOptions"  placeholder=" "/>
            <a>微信号：</a>
            <n-input v-model:value="user.wxNumber" placeholder=" " />
            <div class="ro"><a>是否是学校人员：</a>
              <n-switch v-model:value="user.isSchool">
                <template #checked>是</template>
                <template #unchecked>否</template>
              </n-switch><a class="prompt">*</a></div>
            <a>选择学院：</a>
            <!--          判断是否是学校人员，不是禁用/是启用-->
            <n-select v-model:value="user.college" :options="collegeOptions" :disabled="!user.isSchool" placeholder=" "/>
            <div><n-button type="success" class="ro" @click="revise">
              修改保存
            </n-button><a class="prompt">标志*为必填项</a></div>
          </n-space>
        </div>
      </n-col>
    </n-row>
  </div>
</template>

<script >
import { ref, computed  } from 'vue'
import { ElMessage } from 'element-plus'

export default{
  // name: "PersonalData",
  methods:{
    // 判断用户年龄
    getAge(){
      let birthdays = new Date(this.user.timestamp)
      let d = new Date();
      let age =
          d.getFullYear() -
          birthdays.getFullYear() -
          (d.getMonth() < birthdays.getMonth() ||
          (d.getMonth() == birthdays.getMonth() &&
              d.getDate() < birthdays.getDate())
              ? 1
              : 0);
      this.user.age = age;
    },
    //修改保存
    revise(){
      this.getAge();
      this.user.email = this.emailValue;
      if (this.user.name == null||this.user.height == null||
          this.user.weight == null||this.user.timestamp == null){
        this.open1("还有未填完的必填项","warning")
      }else {
        this.open1("保存成功！","success")
        console.log(this.user)
      }
    }
  },
  setup () {
    const open1 = (message,type) => {
      ElMessage({
        message: message,
        type: type,
      })
    }
    const valueRef = ref("");

    return {
      open1,
      user:ref({
        name:null,
        sex:0,
        height:null,
        weight:null,
        age:null,
        timestamp:null,
        phone:null,
        email:null,
        wxNumber:null,
        isSchool:0,
        college:null
      }),
      //邮箱下拉框
      emailValue: valueRef,
      emailOptions: computed(() => {
        return ["@gmail.com", "@163.com", "@qq.com"].map((suffix) => {
          const prefix = valueRef.value.split("@")[0];
          return {
            label: prefix + suffix,
            value: prefix + suffix
          };
        });
      }),
      //学院下拉框
      collegeOptions: [
        {
          label: '人文与传媒学院',
          value: 'song1'
        },
        {
          label: '经济管理学院',
          value: 'song2'
        },
        {
          label: "教师教育学院",
          value: 'song3',
          // disabled: true
        },
        {
          label: '人工智能学院',
          value: 'song4'
        },
        {
          label: '冶金与材料学院',
          value: 'song5'
        },
        {
          label: '美术与设计学院',
          value: 'song6'
        },
        {
          label: '三七医药学院',
          value: 'song7'
        },
        {
          label: '马克思主义学院',
          value: 'song8'
        }
      ],
      //性别选择颜色
      railStyle: ({focused, checked}) => {
        const style = {};
        if (checked) {
          style.background = "#da488b";
          if (focused) {
            style.boxShadow = "0 0 0 2px #d0305040";
          }
        } else {
          style.background = "#1964c4";
          if (focused) {
            style.boxShadow = "0 0 0 2px #2080f040";
          }
        }
        return style;
      },
      //禁用初始顺序
      disabled: ref(false),
    }
  }
}
</script>

<style scoped>
.person-wrap{
  padding-top: 60px;
}
.left{
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 12px;
}
.right{
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 12px;
}
/*行级排序*/
.ro{
  /*display: flex;*/
  /*flex-direction: row;*/
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 12px;
}

.prompt{
  margin-left: 10px;
  font-size: 2px;
  color: red;
  text-decoration:none;
}
.red{
  color: red;
  text-decoration:none;
}

</style>