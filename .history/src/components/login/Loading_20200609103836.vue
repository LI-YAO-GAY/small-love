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

          <el-form-item label="请输入验证码" prop="inputCode">
            <div class="flex a-center">
            <el-input v-model.number="ruleForm.inputCode"></el-input>
               <div v-html="code" @click="getCode"></div>
            </div>
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
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
       code:'',
      ruleForm: {
        username: "",
        inputPass: "",
        inputCode: "",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 2, max: 10, message: "用户名在2-10位之间", trigger: "blur" }
        ],
        inputPass: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 15, message: "密码在6-15位之间", trigger: "blur" }
        ],
        inputCode: [
          { required: true, message: "验证码不能为空", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    Landing() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          axios.post('/api/user/login',{
          username:this.ruleForm.username,
          password:this.ruleForm.inputPass,
          }).then(res=>{
            console.log(res.data);
            if (res.data.code === 200) {
                this.$message.success("登录成功");
                this.$router.push("/home");
              } else {
                this.$message.error(res.data.message);
                this.ruleForm.username='',
                this.ruleForm.inputPass=''
              }
          }).catch(err=>{
            console.log(err);
          })
        } else {
          this.ruleForm.username='',
          this.ruleForm.inputPass=''
          this.$message.error("输入有误，请检查");
          return false;
        }
      });
    },
    Register() {
      this.$router.push('/registe')
    },
    getCode(){
      axios.get('/api/captcha').then(res=>{
        console.log(res.data);
        this.code = res.data
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  mounted() {
    this.getCode()
  },
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