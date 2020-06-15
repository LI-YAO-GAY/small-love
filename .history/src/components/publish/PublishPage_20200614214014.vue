<template>
 <div>
  <div class="main p-20">
    <div class="nav flex j-end p-5">
     <el-button type="primary" size="mini">查看</el-button>
     <el-button type="danger" size="mini">发布</el-button>
    </div>
    
    <el-form-item label="文章标题" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="摘要" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

  </div>
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
.main{
  background: rgb(240, 242, 245);
  height: calc(100vh - 100px);
  position: relative;
}
.nav{
background: rgb(89,165,134);
}
</style>