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
      ruleForm:'',
    };
  },
  methods: {
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