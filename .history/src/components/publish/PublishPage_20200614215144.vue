<template>
  <div>
    <div class="main p-20">
      <div class="nav flex j-end p-5">
        <el-button type="primary" size="mini">查看</el-button>
        <el-button type="danger" size="mini">发布</el-button>
      </div>

      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="文章标题" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="文章摘要" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

       <div class="flex">
        <el-form-item label="作者" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
         <el-form-item label="类目" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
         <el-form-item label="来源" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
         <el-form-item label="重要性" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="发布时间" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
       </div>
      </el-form>
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
      ruleForm: {}
    };
  },
  methods: {
    getData() {
      axios
        .post("/api/article/create ")
        .then(res => {
          console.log(res.data.data);
          this.tableData = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.main {
  background: rgb(240, 242, 245);
  height: calc(100vh - 100px);
  position: relative;
}
.nav {
  background: rgb(89, 165, 134);
}
</style>