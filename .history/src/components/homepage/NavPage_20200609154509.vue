<template>
  <div >
    <div class="flex j-between nav p-20">
    <div class="flex F16 color-fff">
      <div>欢迎{{username}}</div>
      <div>来到小爱后台管理系统</div>
    </div>
    <div class="flex  F16 color-fff">
    <div>早上好</div>
    <div>亲爱的{{username}}</div>
    <div>上次登陆时间</div>
    <div>上次登陆时间</div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      username:''
    };
  },
  created(){
     let userinfo = JSON.parse(localStorage.getItem(ruleForm))
     if(userinfo){
       this.username=userinfo.username
     }
  },
  methods: {
  },
  mounted() {

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