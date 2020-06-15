<template>
  <div>
    <div class="flex j-between nav p-20">
      <div class="flex F16 color-fff">
        <div>欢迎</div>
        <div class="name">{{user.username}}</div>
        <div>来到小爱后台管理系统</div>
      </div>
      <div class="flex F16 color-fff a-center">
        <div @getTime="getTime" v-if="this.hour > 6 && this.hour <= 12">{{hello}}zsh</div>
        <div>亲爱的</div>
        <div class="name">{{user.username}}</div>
        <div class="m-l-10 F18">
          <i class="el-icon-time"></i>
        </div>
        <div class="F12 m-l-5">{{time}}</div>
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
    if(this.hour > 6 && this.hour <= 12){
      this.hello='早上好'
    }else if(this.hour > 12 && this.hour <= 14){
      this.hello='中午好'
    }else if(this.hour > 14 && this.hour <= 18){
      this.hello='下午好'
    }else if(this.hour > 18 && this.hour < 24){
      this.hello='晚上好'
    }else if(this.hour > 0 && this.hour < 6){
      this.hello='该睡觉了,夜猫子'
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