<template>
  <div>
    <div class="main p-20">
      <div class="nav flex j-end p-5 m-b-20">
        <el-button type="primary" size="mini" @click="Look">查看</el-button>
        <el-button type="danger" size="mini" @click="release">发布</el-button>
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
            <el-select v-model="ruleForm.category" placeholder="请选择">
              <el-option label="Vue" value="Vue"></el-option>
              <el-option label="React" value="React"></el-option>
              <el-option label="Node.js" value="Node.js"></el-option>
              <el-option label="性能优化" value="性能优化"></el-option>
              <el-option label="JavaScript" value="JavaScript"></el-option>
              <el-option label="小程序" value="小程序"></el-option>
              <el-option label="工具类" value="工具类"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="来源" prop="source">
            <el-select v-model="ruleForm.source" placeholder="请选择">
              <el-option label="原创" value="原创"></el-option>
              <el-option label="转载" value="转载"></el-option>
              <el-option label="与他人合作" value="与他人合作"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="重要性" prop="star">
            <el-select v-model="ruleForm.star" placeholder="请选择">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
              <el-option label="3" value="3"></el-option>
              <el-option label="4" value="4"></el-option>
              <el-option label="5" value="5"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发布时间" prop="date">
            <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-form-item>
        </div>
        <mavon-editor v-model="value" />
        <div class="flex m-t-30 j-center">
          <el-button type="primary" size="small" @click="GetArticle">发布</el-button>
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
      value1:'',
      value:'',
      ruleForm: {
        title: "",
        abstract: "",
        author: "",
        category: "",
        source: "",
        star: "",
        text: ""
      },
      rules: {
        title: [
          { required: true, message: "文章标题不能为空", trigger: "blur" }
        ],
        abstract: [
          { required: true, message: "类目不能为空", trigger: "blur" }
        ],
        author: [
          { required: true, message: "作者不能为空", trigger: "blur" }
        ],
        category: [
          { required: true, message: "来源不能为空", trigger: "change" }
        ],
        source: [
          { required: true, message: "不能为空", trigger: "change" }
        ],
        star: [
          { required: true, message: "不能为空", trigger: "change" }
        ],       
        date: [
          {trigger: "change" }
        ],
        text: [
          { required: true, message: "内容不能为空", trigger: "blur" }
        ],
      }
    };
  },
  methods: {
    GetArticle() {
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
              text: this.ruleForm.text,
              date: this.ruleForm.date
            })
            .then(res => {
              console.log(res.data);
              if (res.data.code === 200) {
              this.$message.success("发布成功");
                 localStorage.setItem('create',this.ruleForm)
               }
              else {
                this.$message.error('发布失败'),
                this.ruleForm.title = "",
                this.ruleForm.abstract = "",
                this.ruleForm.author = "",
                this.ruleForm.category = "",
                this.ruleForm.source = "",
                this.ruleForm.star = "",
                this.ruleForm.text = "",
                this.ruleForm.date = ""
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    getData1(){
      axios.get('/api/article/allArticle').then(res=>{      
       if(res.data.code === 200){
       console.log( res.data);
       }
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  mounted() {
    this.getData1()
  },
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
.el-input__inner​​​​​​​ {
  font-family: "iconfont";
}
</style>