<template>
  <div >
    <div class="flex j-between nav p-20">
    <div class="flex F16 color-fff">
      <div>欢迎{{ruleForm.username}}</div>
      <div>来到小爱后台管理系统</div>
    </div>
    <div class="flex  F16 color-fff">
    <div>早上好，</div>
    <div>亲爱的{{ruleForm.username}}</div>
    <div><i class="el-icon-time"></i></div>
    <div>{{nowtime}}</div>
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
      ruleForm:'',
      nowtime:''
    };
  },
  methods: {
    // getTime(){
    // this.nowtime = new.Date(),
    // console.log(dayjs(this.nowtime).format('YYYY年MM月DD日hh时mm分mm秒'));
    // }
  },
  mounted() {
  this.ruleForm = JSON.parse(localStorage.getItem('ruleForm'))
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
</style>