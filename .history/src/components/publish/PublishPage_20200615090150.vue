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
        <el-form-item label="文章标题" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="文章摘要" prop="abstract">
          <el-input v-model="ruleForm.abstract"></el-input>
        </el-form-item>

        <div class="flex">
          <el-form-item label="作者" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
          </el-form-item>
          <el-form-item label="类目" prop="category">
            <el-input v-model="ruleForm.category"></el-input>
          </el-form-item>
          <el-form-item label="来源" prop="source">
            <el-input v-model="ruleForm.source"></el-input>
          </el-form-item>
          <el-form-item label="重要性" prop="star">
            <el-input v-model="ruleForm.star"></el-input>
          </el-form-item>
          <el-form-item label="发布时间" prop="text">
            <el-input v-model="ruleForm.text"></el-input>
          </el-form-item>
        </div>
      </el-form>
    </div>
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
      ruleForm: {
        title:"",
        abstract:"",
        author:"",
        category:"",
        source:"",
        star:"",
        text:"",
      },
      tableData: []
    };
  },
  methods: {
    getData() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          axios
            .post("/api/article/create", {
              title: this.ruleForm.title,
              abstract: this.ruleForm.abstract,
              author: this.ruleForm.author,
              category: this.ruleForm.category,
              source: this.ruleForm.source,
              star: this.ruleForm.star,
              text: this.ruleForm.text
            })
            .then(res => {
              console.log(res.data.data);
              this.tableData = res.data.data;
            })
            .catch(err => {
              console.log(err);
            });
        }
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