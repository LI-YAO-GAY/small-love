<template>
  <div>
    <div class="flex j-between nav p-20">
      <div class="flex F16 color-fff">
        <div>欢迎</div>
        <div class="name F20">{{user.username}}</div>
        <div>来到小爱后台管理系统</div>
      </div>
      <div class="flex F16 color-fff a-center">
        <div @getTime="getTime">{{hello}}</div>
        <div>亲爱的</div>
        <div class="name F20">{{user.username}}</div>
        <div class="m-l-10 F18">
          <i class="el-icon-alarm-clock"></i>
        </div>
        <div class="F12 m-l-5">上次登录时间&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      user: {},
      time: "",
      hello: "",
      hour:''
    };
  },
  methods: {
    //获取当前时间戳
   getTime(){
    let d = new Date()
    //定义一个Date实例，获取当前的时间
    console.log(d);
    let hour = d.getHours();
    console.log(hour);
    if(hour >= 6 && hour < 12){
      return this.hello='早上好'
    }else if(hour >= 12 && hour < 14){
      return this.hello='中午好'
    }else if(hour >= 14 && hour < 18){
      return this.hello='下午好'
    }else if(hour >= 18 && hour < 24){
      return this.hello='晚上好'
    }else if(hour >= 24 && hour < 6){
      return this.hello='该睡觉了,夜猫子'
    }
   }
  },
  mounted() {
    (this.user = JSON.parse(localStorage.getItem("user"))),
      (this.time = dayjs(this.user.date).format("YYYY年MM月DD日 hh时mm分ss秒"));
    this.getTime()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.nav {
  height: 20px;
  background: rgb(46, 94, 133);
}
.name {
  text-decoration: underline;
  color: skyblue;
  font-weight: 600px;
  &:hover {
    cursor: pointer;
  }
}
</style>