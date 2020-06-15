<template>
  <div class="quit flex">
    <div class="left1"></div>
    <div class="right flex j-center a-center w100p">
      <div class="flex a-column a-center">
        <div class="fw-600 F20 m-b-20">期待你下次光临</div>
        <el-row>
          <el-button type="primary" @click="leave">确定退出</el-button>
        </el-row>
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
    return {};
  },
  methods: {
    leave() {
      this.$confirm("此操作将重新登陆, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          if (confirmButtonText) {
            localStorage.clear();
            this.$router.push("/login");
          }
          // this.$message({
          //   type: "success",
          //   message: "删除成功!"
          // });
        })
        .catch(() => {
          // this.$message({
          //   type: "info",
          //   message: "已取消删除"
          // });
        });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.left1 {
  width: 200px;
}
.right {
  margin-top: 200px;
}
</style>