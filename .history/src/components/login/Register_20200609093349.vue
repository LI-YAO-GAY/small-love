<template>
  <div class="container relative">
    <el-card class="box-card absolute">
      <div slot="header" class="clearfix">
        <span class="F20">欢迎来到小爱后台管理系统</span>
      </div>
      <div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="请输入用户名" prop="username">
            <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="请输入密码" prop="inputPass">
            <el-input type="password" v-model="ruleForm.inputPass" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="Landing">立即登录</el-button>
            <el-button type="primary" @click="Register">立即注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        username: "",
        inputPass: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 2, max: 10, message: "用户名在2-10位之间", trigger: "blur" }
        ],
        inputPass: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 15, message: "密码在6-15位之间", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    Landing() {
      this.$router.push("/login");
    },
    Register() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
        axios.post('/api/user/register',{
          username:this.ruleForm.username,
          password:this.ruleForm.inputPass
        }).then(res=>{
          console.log(res.data);
        }).catch(err=>{
          console.log(err);
        })
          this.$message.success("注册成功");
        } else {
          this.$message.error("输入有误，请检查");
          return false;
        }
      });
      this.$router.push("/login");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box-card {
  width: 400px;
  height: 320px;
}
.container {
  top: 180px;
}
</style>