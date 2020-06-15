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
    setInterval(()=>{
					//new Date() new一个data对象，当前日期和时间
					//toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
					this.nowtime = new Date().toLocaleString();
				},1000)}
    // getTime(){
    //  this.nowtime = now.Date()
    }
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