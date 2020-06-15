<template>
  <div >
    <div class="flex j-between nav p-20">
    <div class="flex F16 color-fff">
      <div>欢迎</div>
      <div class="name">{{user.username}}</div>
      <div>来到小爱后台管理系统</div>
    </div>
    <div class="flex  F16 color-fff a-center" >
    <div>早上好，</div>
    <div>亲爱的</div>
    <div class="name">{{user.username}}</div>
    <div class="m-l-10 F18"><i class="el-icon-time"></i></div>
    <div class="F12 m-l-5">{{time}}</div>
    </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      user:{},
      time:''
    };
  },
  methods: {
    getTime(){
      let hour = d.getHours
      console.log(hour);
    }
  },
  mounted() {
  this.user = JSON.parse(localStorage.getItem('user'))
  this.time = dayjs(this.user.date).format('YYYY年MM月DD日 hh时mm分ss秒')
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.nav{
  height: 20px;
  background: rgb(46,94,133);
}
.name{
  text-decoration: underline;
  color:skyblue;
  font-weight: 600px;
  &:hover{
    cursor: pointer;
  }
}
</style>