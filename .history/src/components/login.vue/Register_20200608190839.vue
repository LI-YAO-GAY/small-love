<template>
  <div>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>欢迎来到小爱后台管理系统</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="请输入用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="请输入密码" prop="inputPass">
          <el-input type="password" v-model="ruleForm.inputPass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="请输入验证码" prop="inputCode">
          <el-input v-model.number="ruleForm.inputCode"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="Landing">立即登录</el-button>
          <el-button @click="Register">立即注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        username: "",
        inputPass: "",
        inputCode: ""
      },
      rules: {
        username: [{ required:true , message:用户名不能为空, trigger: "blur" }],
        inputPass: [{ required:true , message:密码不能为空, trigger: "blur" }],
        inputCode: [{ required:true , message:验证码不能为空, trigger: "blur" }]
      }
    };
  },
  methods: {
    Landing() {
      this.$refs.validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    Register() {
      this.$refs.resetFields();
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>