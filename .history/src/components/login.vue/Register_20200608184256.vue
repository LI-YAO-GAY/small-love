<template>
 <div>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  
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
    <el-button type="primary" @click="Landing('ruleForm')">立即登录</el-button>
    <el-button @click="Register('ruleForm')">立即注册</el-button>
  </el-form-item>
</el-form>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
      ruleForm: {
          username: '',
          inputPass: '',
          inputCode: ''
        },
        rules: {
          username: [
            { validator: validatePass, trigger: 'blur' }
          ],
          inputPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          inputCode: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>